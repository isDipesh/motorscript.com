<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Automatically Run AWS Elastic Transcoder Jobs using Lambda Functions"
      published="25 Jun 2020"
    />

    <div class="content" itemprop="articleBody" v-highlight>
      <p>
        This tutorial will guide you through using S3 buckets to upload media
        files and using lambda functions to automatically trigger a transcoding
        job which saves output files to another bucket. This can be used to
        create audio and video files of different quality and formats for
        serving users.
      </p>

      <h2>Create Amazon S3 Buckets</h2>
      <p>
        Create two S3 buckets – one for uploading your media files, another one
        to save, and distribute the transcoded files. The first bucket that
        stores your uploads can be private whereas the second one needs to be
        public if you want to use it to distribute the files. Select a region
        closest to where most of your visitors/consumers are. You can create
        buckets from
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://s3.console.aws.amazon.com/s3/buckets/"
          >https://s3.console.aws.amazon.com/s3/buckets/</a
        >.
      </p>

      <h2>Create a Pipeline in AWS Elastic Transcoder</h2>
      <p>
        You can access the Elastic Transcoder console from
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://console.aws.amazon.com/elastictranscoder/"
          >https://console.aws.amazon.com/elastictranscoder/</a
        >. Selecting the same region for your transcoder and S3 buckets may save
        you some costs. Now create a new Pipeline. Select the appropriate
        buckets for input and output. To make the transcoded files publicly
        accessible, provide <span class="hl">Open/Download</span> access to
        <span class="hl">All Users</span> as shown in the screenshot below.
      </p>

      <div>
        <img
          src="/media/posts/amazon-s3-elastic-transcoder-pipeline-creation.png"
          alt="AWS Elastic Transcoder Pipeline Creation"
          title="AWS Elastic Transcoder Pipeline Creation"
          class="pt-1"
        />
      </div>
      <p>
        Once the pipeline is created, view its details to note-down the
        <span class="hl">Pipeline ID</span>.
      </p>

      <p>
        A transcoding task is a <span class="hl">Job</span> in
        <span class="hl">Elastic Transcoder</span>. While the details for input
        bucket, output bucket, and permissions are saved in
        <span class="hl">Pipeline</span>, other details for converting the file
        is provided in the <span class="hl">Job</span>. Each job needs a
        pipeline.
      </p>

      <p>
        Creating new jobs manually is time-consuming, hectic, and prone to
        errors. We will automate this using Lambda functions and S3
        notifications. As soon as we finish uploading a new file to the first S3
        bucket, a notification will fire to trigger our Lambda function which
        will then create an Elastic Transcoder Job to transcode the uploaded
        file and save it to the second bucket, ready for consumption.
      </p>

      <h2>Creating a role for Lambda execution</h2>
      <ul>
        <li>
          Visit
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://console.aws.amazon.com/iam/home#/roles"
            >https://console.aws.amazon.com/iam/home#/roles</a
          >
          and create a new role.
        </li>
        <li>Choose <span class="hl">Lambda</span> as the common use case.</li>
        <li>
          Under permissions, attach the policies
          <span class="hl">AWSLambdaBasicExecutionRole</span> and
          <span class="hl">AmazonElasticTranscoder_FullAccess</span>
        </li>
        <li>Follow the next steps to complete creating the role.</li>
      </ul>

      <h2>Creating the Lambda function</h2>
      <div>
        Create a new Lambda function from
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://console.aws.amazon.com/lambda/home"
          >https://console.aws.amazon.com/lambda/home.</a
        >
      </div>
      <div>
        Give it a name, choose <span class="hl">Python 3.8</span> as the
        runtime, and select the role created in the last step under
        <span class="hl">Permissions</span>.
      </div>

      <pre><code class="python language-python">import json
import os
import boto3

def lambda_handler(event, context):
    pipeline_id = '[pipeline-id]'
    hls_audio_160k_preset_id = '1351620000001-200060' # HLS Audio - 160k
    segment_duration = '15'
    transcoder = boto3.client('elastictranscoder')
    out = []
    for record in event['Records']:
        bucket = record['s3']['bucket']['name']
        key = record['s3']['object']['key']
        # Strip the extension, Elastic Transcoder automatically adds one
        key_sans_extension = os.path.splitext(key)[0]
        outputs = [
            {
                'Key': key_sans_extension,
                'PresetId': hls_audio_160k_preset_id,
                'SegmentDuration': segment_duration,
            }
            ]
        response = transcoder.create_job(PipelineId=pipeline_id,
                                         Input={'Key': key},
                                         Outputs=outputs,
                                         )
        print(response)
        out.append(response)
    return {
        'statusCode': 200,
        'body': out
    }
</code></pre>

      <p>
        The above code produces an <span class="hl">HLS</span> (m38u) audio
        stream from the input file. You can use other presets as well. Multiple
        output files can also be generated by providing different keys and
        preset IDs in multiple dictionaries within the
        <span class="hl">output</span>
        array.
      </p>

      <h2>Notifying Lambda for new uploads</h2>
      <ul>
        <li>
          Visit
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://s3.console.aws.amazon.com/s3/buckets/"
            >https://s3.console.aws.amazon.com/s3/buckets/</a
          >
          and open the first bucket, the one where media is to be uploaded.
        </li>
        <li>
          Under <span class="hl">Properties</span>, scroll down to
          <span class="hl">Event Notifications</span>.
        </li>
        <li>Click <span class="hl">Create event notificaton</span>.</li>
        <li>
          Give the notification a name, select
          <span class="hl">PUT</span>, and
          <span class="hl">Multipart upload completed</span> events.
          <span class="hl">Multipart upload completed</span> event is trigger
          when large files are uploaded.
        </li>
        <li>
          If the lambda is to be triggered only for particular folders/prefixes
          or file extension, specify using
          <span class="hl">Prefix</span> and/or
          <span class="hl">Suffix</span> fields.
        </li>
        <li>
          Select <span class="hl">Lambda Function</span> for notification
          destination. Then, pick the lambda function created earlier and save
          the form.
        </li>
      </ul>
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
