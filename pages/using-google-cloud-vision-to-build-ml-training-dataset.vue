<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Using Google Cloud Vision to Build ML Training Dataset"
      published="27 Oct 2011"
    />

    <div class="content" itemprop="articleBody" v-highlight>
      <p>
        While building an OCR system for passports, I needed to crop out MRZ
        (Machine Readable Zone) from passports. In order to build the training
        set, I needed ground truth values. MRZ of the passports needed to be
        annotated. The two popular ways for this were either labellilng manually
        using tools like LabelImg or outsourcing using something like Amazon
        Mechanical Turk. I used Google Cloud Vision API rather because I knew it
        does well with labelling such things and returning bounds within such
        documents. The following script uses document text annotation example
        from
        <a
          href="https://cloud.google.com/vision/docs/fulltext-annotations"
          target="_blank"
          rel="noreferer noopener"
          >https://cloud.google.com/vision/docs/fulltext-annotations</a
        >
        and improves over it.
      </p>
      <p>
        The code provided by Google needed a fix nonetheless since it hits API
        with same request multiple times which would increase our cost. API
        requests were separately made for Page, Paragraph and Word detection
        while the same could be done by reusing the response from single
        request. However, we are only using Paragraph detection to find the
        bounding box for MRZ. The modified script also optionally uses Redis to
        store the serialized vertices of the bounds and reuses them if the same
        image needs to processed again.
      </p>

      <p>
        The script is only used for building training data but not for
        production. The output of this script is used for training for pattern
        matching which is then used in production. This same technique can be
        used to detect other sections in passport or other document types. Just
        adjust the index in the assignment of `target_bound` variable.
      </p>

      <p>
        Before running the script, you need to download your GCP credentails set
        the path to the credentials json as
        <code>GOOGLE_APPLICATION_CREDENTIALS</code> environment variable.
      </p>

      <pre class="language-bash">
    <code>export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/creditials_file_name.json"</code>
    </pre>

      <pre class="language-python"><code>
import argparse
from enum import Enum
import io

from google.cloud import vision
from google.cloud.vision import types
from google.cloud.vision_v1.types import BoundingPoly
from PIL import Image, ImageDraw

use_redis = False
try:
    import redis

    try:
        cache = redis.Redis(host='localhost', port=6379, db=0)
        # execute a command to test connection
        cache.client_list()
        use_redis = True
    except redis.exceptions.ConnectionError:
        pass
except ImportError:
    pass


class FeatureType(Enum):
    PAGE = 1
    BLOCK = 2
    PARA = 3
    WORD = 4
    SYMBOL = 5


def draw_boxes(image, bounds, color):
    """Draw a border around the image using the hints in the vector list."""
    draw = ImageDraw.Draw(image)

    for bound in bounds:
        draw.polygon([
            bound.vertices[0].x - 10, bound.vertices[0].y,
            bound.vertices[1].x + 10, bound.vertices[1].y,
            bound.vertices[2].x + 5, bound.vertices[2].y,
            bound.vertices[3].x, bound.vertices[3].y], None, color)
    return image


def get_document_bounds(document, feature):
    """Returns document bounds given an image."""

    bounds = []

    # Collect specified feature bounds by enumerating all document features
    for page in document.pages:
        for block in page.blocks:
            for paragraph in block.paragraphs:
                for word in paragraph.words:
                    for symbol in word.symbols:
                        if feature == FeatureType.SYMBOL:
                            bounds.append(symbol.bounding_box)

                    if feature == FeatureType.WORD:
                        bounds.append(word.bounding_box)

                if feature == FeatureType.PARA:
                    bounds.append(paragraph.bounding_box)

            if feature == FeatureType.BLOCK:
                bounds.append(block.bounding_box)

        if feature == FeatureType.PAGE:
            # noinspection PyUnboundLocalVariable
            bounds.append(block.bounding_box)

    # The list `bounds` contains the coordinates of the bounding boxes.
    return bounds


def render_doc_text(directory):
    from os import listdir, path

    dir_content = [f for f in listdir(directory) if not '_bounded' in f]
    files = [f for f in dir_content if path.isfile(path.join(directory, f))]
    for file_name in files:
        file = path.join(directory, file_name)
        client = vision.ImageAnnotatorClient()
        with io.open(file, 'rb') as image_file:
            content = image_file.read()
        target_bound_str = cache.get(file) if use_redis else None

        if target_bound_str:
            target_bound = BoundingPoly().FromString(target_bound_str)
        else:
            # noinspection PyUnresolvedReferences
            image_type = types.Image(content=content)
            response = client.document_text_detection(image=image_type)
            document = response.full_text_annotation

            bounds = get_document_bounds(document, FeatureType.PARA)

            if len(bounds):
                target_bound = bounds[-1]
                target_bound_str = target_bound.SerializeToString()

                if use_redis:
                    cache.set(file, target_bound_str)

        # target_bound_str exists implies target_bound exists
        if target_bound_str:
            image = Image.open(file)
            # noinspection PyUnboundLocalVariable
            draw_boxes(image, [target_bound], 'green')
            sans_ext, ext = path.splitext(file)
            out_name = sans_ext + '_bounded' + ext
            image.save(out_name)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('directory', help='Directory where image files are.')
    args = parser.parse_args()
    parser = argparse.ArgumentParser()

    render_doc_text(args.directory)
</code></pre>
    </div>
  </article>
</template>

<script>
import BlogTitle from "../components/BlogTitle.vue";

export default {
  mixins: [BlogTitle],
  components: { BlogTitle }
};
</script>