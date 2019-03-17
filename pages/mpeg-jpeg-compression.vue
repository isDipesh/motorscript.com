<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="MPEG and JPEG Compression"
      published="30 Jun 2014"
      archived="true"
    />
    <div class="content" itemprop="articleBody">
      <p>
        This document titled
        <b
          ><span class="caps">MPEG</span> and
          <span class="caps">JPEG</span> Compression</b
        >
        was my college assignment. Although I got an ‘A’ for it, I’m pretty sure
        there are many errors in this document. References, sources and
        acknowledgements are at the bottom. Feel free to comment on anything
        I’ve missed. Here&nbsp;goes!
      </p>

      <div name="DataCompression" data-unique="DataCompression"></div>
      <h1>Data&nbsp;Compression</h1>

      <p>
        The hunger for information keeps growing in the modern age. Science and
        technology has not only made it possible to know what is happening on
        the other end of the world but also witness it instantaneously.
        Multimedia has been the most preferred means for sharing as it is the
        richest form of information. Pictures and videos are more appealing than
        plain text and convey a lot more information. Television broadcasting,
        webpages, social networks, emails and multimedia messaging are some of
        the popular ways for such communication. But there’s a price to pay for
        this richness in information – huge storage requirements and larger
        bandwidth for transmission. This cost can be reduced by the use of
        data&nbsp;compression.
      </p>

      <p>
        The term <b>data compression</b> refers to the process of reducing the
        amount of data required to represent a given quantity of information, by
        using different transformation and/or encoding techniques. Compressed
        data takes less space for storage and is conveyed faster. Compression
        sometimes also provides other advantages like security and privacy since
        analyzing an encoded file is more difficult than analyzing a raw file.
        Compression generally involves two techniques. The first technique is to
        throw away the redundant information by representing single sample of
        data only once and the second technique is to throw away things that
        have very minimal effect on perception of the end&nbsp;user.
      </p>

      <div
        name="LossyandLosselessCompression"
        data-unique="LossyandLosselessCompression"
      ></div>
      <h2>Lossy and Losseless&nbsp;Compression</h2>

      <p>
        There are basically two types of data compression – lossless and lossy
        compression. Lossless compression is the kind in which samples of data
        are ignored only when they have been represented at least once. Only
        redundancy is removed but the number of data samples that occur remain
        same. In contrast, in lossy compression, non-redundant information may
        also be removed if they don’t produce significant alteration in the
        perception of wholesome data. Decompression of entity compressed with
        lossless compression gives us the exact original object whereas the
        decompression of entity compressed with lossy compression gives us a
        close estimate of the original&nbsp;object.
      </p>

      <p></p>
      <hr />
      <p>
        The level and nature of compression of data depends upon the various
        data transformation and encoding algorithms. Such techniques rely on the
        assumption that individual components of information (e.g. pixels on an
        image) display a certain level of correlation. This correlation of
        individual units may be exploited for the compression of the whole
        entity. Some of these techniques have been explained&nbsp;below:
      </p>
      <div
        name="DiscreteCosineTransform"
        data-unique="DiscreteCosineTransform"
      ></div>
      <h2>Discrete Cosine&nbsp;Transform</h2>
      <p>
        <span class="caps">DCT</span> (Discrete Cosine Transform), like other
        transformation techniques tries to decorrelate the basic units of data.
        Correlated units mean the similar units spread over the same plane in
        space. In case of images, it reduces or sometimes eliminates interpixel
        redundancy. <span class="caps">DCT</span> is used to map this spatial
        variation into uncorrelated frequency variation.
        <span class="caps">DCT</span> is a linear function. Also, it is
        invertible and its inverse gives the same original spectrum, therefore,
        <span class="caps">DCT</span> itself is a lossless transformation but it
        is usually mixed with lossy algorithms like quantization in it
        applications like <span class="caps">JPEG</span>,
        <span class="caps">MPEG</span>,&nbsp;etc.
      </p>
      <p>
        The several occurrences of the data points is expressed in terms of the
        sum of cosine functions at different periodic frequencies. Cosine
        functions are chosen over sine functions because of their advantage of
        efficiency. <span class="caps">DCT</span> is quite similar to
        <span class="caps">DFT</span> (Discrete Cosine Transform) but the only
        difference is that only real numbers are taken into account in
        <span class="caps">DCT</span> whereas
        <span class="caps">DFT</span> takes in complex numbers&nbsp;too.
      </p>
      <p>
        There are different forms of <span class="caps">DCT</span>, which are
        listed below. Here x,<sub>0</sub>, …, x<sub>N-1</sub> are the spatial
        coordinates whereas X<sub>0</sub> , …, X<sub>N-1</sub> are the frequency
        coordinates. Both are the sequences of real&nbsp;numbers.
      </p>
      <div name="DCT-I" data-unique="DCT-I"></div>
      <h3><span class="caps">DCT</span>-I</h3>
      <p>
        <span class="caps">DCT</span>-I of N is given by<br />
        <img
          alt="DCT-I"
          src="/media/mpeg/dct1.png"
        />
        where N is a real number greater than or equal to 2,<br />
        x<sub>n</sub> are real and even numbers around n=0 and n=N-1,<br />
        k = 0,1,2,…,N-1 and<br />
        X<sub>k</sub> are real and even numbers around k=0 and&nbsp;k=N-1.
      </p>
      <div name="DCT-II" data-unique="DCT-II"></div>
      <h3><span class="caps">DCT</span>-<span class="caps">II</span></h3>
      <p>
        <span class="caps">DCT</span>-<span class="caps">II</span> is given
        by<br />
        <img
          alt="DCT-II Formula"
          src="/media/mpeg/dct2.png"
        />
        where N is a positive real number ( can be less than 2, unlike in
        <span class="caps">DCT</span>-I)<br />
        x<sub>n</sub> are real and even numbers around n=-1/2 and n=N-1/2,<br />
        k = 0,1,2,…,N-1 and<br />
        X<sub>k</sub> are real and even numbers around k=0 and&nbsp;k=N.
      </p>
      <p>
        <span class="caps">DCT</span>-<span class="caps">II</span> is the most
        widely used form of cosine transformation and
        <span class="caps">DCT</span> in general means
        <span class="caps">DCT</span>-<span class="caps">II</span>.
        <span class="caps">DCT</span>-<span class="caps">II</span>, sometimes
        also <span class="caps">DCT</span>-I is used for compression of
        correlated pixels in <span class="caps">JPEG</span>,
        <span class="caps">MJPEG</span> and
        <span class="caps">MPEG</span> standards. The two dimensional
        block-based <span class="caps">DCT</span> of 8×8 matrix is used for
        encoding blocks of video. This encoding standard is defined by
        <span class="caps">IEEE</span> 1180 to increase accuracy and reduce
        mismatch&nbsp;errors.
      </p>
      <p>
        An example transformation is demonstrated on
        <a href="#figure_transform">this&nbsp;figure.</a>
      </p>
      <div name="DCT-III" data-unique="DCT-III"></div>
      <h3><span class="caps">DCT</span>-<span class="caps">III</span></h3>
      <p>
        <span class="caps">DCT</span>-<span class="caps">III</span> is given
        by<br />
        <img
          alt="DCT-III Formula"
          src="/media/mpeg/dct3.png"
        />
        where N is a real number,<br />
        x<sub>n</sub> are real and even numbers around n=0 and n=N,<br />
        k = 0,1,2,…,N-1 and<br />
        X<sub>k</sub> are real and even numbers around k=-1/2 and&nbsp;k=N-1/2.
      </p>
      <p>
        <span class="caps">DCT</span>-<span class="caps">III</span> can be
        scaled to get the inverse of <span class="caps">DCT</span>-<span
          class="caps"
          >II</span
        >
        and therefore is also known as Inverse Direct Cosine Transform (<span
          class="caps"
          >IDCT</span
        >), since <span class="caps">DCT</span> simply refers to
        <span class="caps">DCT</span>-<span class="caps">II</span>.
      </p>
      <div name="DCT-IV" data-unique="DCT-IV"></div>
      <h3><span class="caps">DCT</span>-<span class="caps">IV</span></h3>
      <p>
        <span class="caps">DCT</span>-<span class="caps">IV</span> is given
        by<br />
        <img
          alt="DCT-IV Formula"
          src="/media/mpeg/dct4.png"
        />
        where N is a real number,<br />
        x<sub>n</sub> are real and even numbers around n=-1/2 and odd numbers
        around n=N-1/2,<br />
        k = 0,1,2,…,N-1 and<br />
        X<sub>k</sub> are real and even numbers around n=-1/2 and odd numbers
        around&nbsp;n=N-1/2.
      </p>
      <p></p>
      <center>
        <br />
        <img
          alt="Image and its DCT coefficients"
          src="/media/mpeg/dct-diff1.png"
        />
        <b>Figure 1.1 : Image and its
          <span class="caps">DCT</span> coefficients</b
        >
      </center>
      The coefficients retrieved i.e. X<sub>k</sub> represents the contribution
      of combination of the spatial repetitions in two horizontal and vertical
      dimensions of the picture block. <span class="caps">DC</span> (Discrete
      Cosine) Coefficient is the coefficient relating to zero frequency indices
      on both the dimensions. Quantization and Variable Length Coding follow
      <span class="caps">DCT</span> to reduce further number of&nbsp;bits.
      <p></p>
      <div name="Quantization" data-unique="Quantization"></div>
      <h2>Quantization</h2>
      <p>
        Quantization is the process of converting a continuous range of
        infinitely many values into a finite discrete set of all possible
        values. The quantization process generally approximates the input set
        into preferably smaller set. The advantage of quantization is that it
        reduces the number of bits required for storing and transmitting the
        data. Quantization can be of two types – scalar quantization and
        vector&nbsp;quantization.
      </p>
      <div name="ScalarQuantization" data-unique="ScalarQuantization"></div>
      <h3>Scalar&nbsp;Quantization</h3>
      <p>
        Scalar quantization is a one-dimensional quantization process. It treats
        each value from the input set separately.<br />
        If the input value be x and output value be y, scalar quantization is
        the simple process denoted as:<br />
        y=Q(x)<br />
        Simple example of scalar quantization is constraining a set of real
        numbers into integer values by rounding each real x value to their
        closest integer value y. This process is also used in converting analog
        wave forms to digital&nbsp;samples.
      </p>
      <div name="VectorQuantization" data-unique="VectorQuantization"></div>
      <h3>Vector&nbsp;Quantization</h3>
      <p>
        Vector quantization is also known as ‘pattern matching quantization’ or
        ‘block quantization’. It involves grouping together of input symbols
        into single units. Grouping enhances optimality of the quantizer but
        also consumes higher computational resources than scalar quantization. A
        centroid point is used to indicate a single group or cluster. This kind
        of quantization is used for lossy data compression of digital data,
        density estimation and signal processing because it is powerful for
        detecting density of huge data of high dimensions. For values in vector
        space of multi-dimensions, quantization encodes them to a bounded set of
        values from a lower dimensional subspace of discrete&nbsp;nature.
      </p>
      <div
        name="QuantizationofDigitalImage"
        data-unique="QuantizationofDigitalImage"
      ></div>
      <h3>Quantization of Digital&nbsp;Image</h3>
      <p>
        Quantization of a digital image is the technique of judging which
        sections of the image can be ignored in such a way that the image
        doesn’t look significantly different. This is a lossy process. The color
        spectrum is also quantized by reducing the number of colors used to
        represent it in processes like conversion of
        <span class="caps">JPEG</span> to <span class="caps">GIF</span> since
        <span class="caps">GIF</span> only supports 256 colors. Quantization is
        also done when images are printed because the printers don’t have the
        tonal resolution which supports all the colors for all pixels in the
        image. Similar is the case with image scanning specially for shadow
        areas.<br />
        Quantization is a lossy process since it involves approaches like
        rounding off and discarding negligible entities. The inverse of
        quantization doesn’t produce exactly the same object which was fed for
        quantization. Whatever is lost is called quantization&nbsp;noise.
      </p>
      <p>
        Quantization matrices or quantizers are used for defining the
        quantization process. Supposing Q[i,j] is the quantizer matrix, every
        time a matrix of <span class="caps">DCT</span> coefficients, say M[i,j],
        is encountered, it is divided by quantizer matrix Q[i,j] to obtain
        quantized matrix M<sub>q</sub>[i,j]. Here, we are only considering
        two-dimensional&nbsp;matrices.
      </p>
      <p>
        The quantization equation can be given as<br />
        M<sub>q</sub> [i,j] = round( M[i,j] / Q[i,j]&nbsp;)
      </p>
      <p>
        The inverse quantization equation becomes<br />
        M’[i,j]= M<sub>q</sub>[i,j] *&nbsp;Q[i,j]
      </p>
      <p>
        The rounding off is not invertible and therefore the process is lossy.
        The loss is measured as quantization error which is given by:<br />
        Quantization Error = M<sub>q</sub>[i,j] – M’<sub>q</sub>[i,j]
      </p>
      <p>
        An example:<br />
        Matrix of <span class="caps">DCT</span> coefficients,&nbsp;M[i,j]=
      </p>
      <p>
        <img
          alt="Matrix of DCT Coefficients"
          src="/media/mpeg/matrix-dct.png"
        />
        <br />
        Quantizer Matrix, Q[i,j] =<br />
        <img
          alt="Quantizer Matrix"
          src="/media/mpeg/m2.png"
        />
      </p>

      <p>
        Now dividing each elements from M matrix with corresponding elements
        (from same row i and same column j) from Q matrix&nbsp;like
      </p>
      <p>
        M<sub>q</sub>[1,1] = round( M[1,1] / Q[1,1] )<br />
        = round ( – 415 / 16)<br />
        = round ( -25.9375)<br />
        =&nbsp;-26
      </p>
      <p>
        and so on, we get<br />
        Quantized Matrix M<sub>q</sub>[i,j] =<br />
        <img
          alt="Quantized Matrix"
          src="/media/mpeg/m3-300x185.png"
        />
      </p>

      <p></p>
      <p>
        The matrix thus obtained is processed through other techniques like
        zigzag scanning, entropy encoding&nbsp;etc.
      </p>
      <div name="EntropyCoding" data-unique="EntropyCoding"></div>
      <h2>Entropy&nbsp;Coding</h2>
      <p>
        Entropy literally refers to the lack of predictability or order. In the
        context of information theory and engineering, entropy is the
        measurement of the uncertainty of a variable. Entropy also gives the
        measure of similarity of dispersion of basic units. Lower is the
        entropy, higher is the compression. Techniques like statistical
        forecasting can reduce&nbsp;entropy.
      </p>
      <p>
        Entropy encoding is the process of ordering the input elements in an
        optimal way and assigning code for each of them. It is a lossless
        compression. Entropy encoding can be broken into two steps. The first
        step is Zigzag scanning and the second one is Variable Length Coding
        (<span class="caps">VLC</span>). The second one has major contribution
        to entropy&nbsp;encoding.
      </p>
      <div name="ZigzagScanordering" data-unique="ZigzagScanordering"></div>
      <h3>Zigzag Scan&nbsp;ordering</h3>
      <p>
        The most <span class="caps">AC</span> values in a quantized matrix are
        zero. Zigzag scan can be used to gather more number of zeros together.
        Bringing zeroes together increases the optimality of the encoding
        process that follows. Zigzag scanning groups the low frequency
        coefficients before the high frequency coefficients. This processes
        serializes the matrix into a&nbsp;string.
      </p>
      <p>
        The 8 x 8 matrix is mapped into a one-dimensional array of 1 x 64
        vector. Grouping zeros enables us to encode the bitstream in the pair of
        ‘skip and value’. Here, ‘skip’ means the number of occurrences of zero
        and ‘value’ means the occurrence of next non-zero component in
        the&nbsp;sequence.
      </p>
      <p></p>
      <center>
        <br />
        <img
          alt="Zigzag Scan"
          src="/media/mpeg/zigzag.jpg"
        />
        <br />
        <b>Figure 1.2 Zigzag Scan</b>
      </center>
      In the above diagram, the first index is zero, so the first row is row 0
      and the last row is row 7, similar with the columns. The scanning proceeds
      like this – <span class="caps">DC</span>, <span class="caps">AC01</span>,
      <span class="caps">AC10</span>, <span class="caps">AC20</span>,
      <span class="caps">AC11</span>, … , <span class="caps">AC57</span>,
      <span class="caps">AC67</span>, <span class="caps">AC76</span>,
      <span class="caps">AC77</span>.
      <p></p>
      <center>
        <img
          alt="Serialization of coefficients with zigzag scanning"
          src="/media/mpeg/zigzag2.jpg"
        /><br />
        <b>Figure 1.3: Serialization of coefficients with zigzag scanning</b>
      </center>
      <p></p>
      <div
        name="VariableLengthCoding(VLC)"
        data-unique="VariableLengthCoding(VLC)"
      ></div>
      <h3>Variable Length Coding (<span class="caps">VLC</span>)</h3>
      <p>
        <span class="caps">VLC</span> is the major part of entropy encoding.
        <span class="caps">VLC</span> is the process of mapping the input
        symbols into codes of variable lengths. This enables us to compress the
        the symbols without any error. This means the compression is lossless
        and decompressing the symbols one by one gives us the same original
        input. Compression level close to its entropy can be arbitrarily
        achieved if the right coding strategy is chosen. Also, identically
        distributed as independent source needs to be selected. Unlike
        fixed-length coding techniques, <span class="caps">VLC</span> can be
        used for compression of small blocks of data too, with less probability
        of failure.<br />
        Some of the most popular strategies of <span class="caps">VLC</span> are
        Arithmetic Coding, Huffman Coding and Lempel-Ziv&nbsp;coding.
      </p>
      <div name="HuffmanCoding" data-unique="HuffmanCoding"></div>
      <h4>Huffman&nbsp;Coding</h4>
      <p>
        Huffman Coding like other coding techniques for compression is a
        statistical technique that attempts to reduce the number of bits
        required to represent a string. The basic idea of this coding technique
        is to assign a shorted code for the most frequent symbols. Huffman
        coding algorithm is a greedy process. This technique was introduced by
        David Huffman (1925-1999) in 1952.The vital part of this coding
        technique is to generate the codes which are called Huffman codes. Code
        Book is used to store the Huffman codes. Huffman algorithm is a
        bottom-up&nbsp;approach.
      </p>
      <p>
        Huffman code is generated using a binary tree. Such binary tree is
        called Huffman tree.<br />
        The process of building is tree is outlined&nbsp;below:
      </p>
      <p>
        Step 1 : Independent parentless node is created for each input symbol,
        including the symbol and the probability of its occurrence.<br />
        Step 2: The two parentless nodes with the lowest probabilities are
        selected.<br />
        Step 3: A new parent node is created with the last two selected nodes as
        immediate children.<br />
        Step 4 : The newly created node is assigned the probability equal to the
        sum of its children.<br />
        Step 5 : Continue from Step 2 until only only one parentless node
        is&nbsp;left.
      </p>
      <p>
        Thus generated binary tree is unambiguous for decomposing it during
        decoding process is only possible in exactly one way. Since leaf nodes
        are used to store symbols, no code happens to be the prefix of
        another&nbsp;code.
      </p>
      <p>&nbsp;</p>
      <pre class="language-art">
       *
      / \
     (0)(1)
      /  \
    (10)(11)
      / \
    (110)(111)
</pre
      >
      <p>&nbsp;</p>
      <p></p>
      <center><b>Figure 1.4: An Example of Huffman Tree</b></center>
      <p></p>
      <div
        name="Context-AdaptiveBinaryArithmeticCoding(CABAC)andContext-adaptiveVariable-lengthCoding(CAVLC)"
        data-unique="Context-AdaptiveBinaryArithmeticCoding(CABAC)andContext-adaptiveVariable-lengthCoding(CAVLC)"
      ></div>
      <h4>
        Context-Adaptive Binary Arithmetic Coding (<span class="caps"
          >CABAC</span
        >) and Context-adaptive Variable-length Coding (<span class="caps"
          >CAVLC</span
        >)
      </h4>
      <p>
        <span class="caps">CABAC</span> and <span class="caps">CAVLC</span> are
        coding algorithms used to encode the syntax elements when theprobability
        of its occurrence in the context is given. These are one of the forms of
        entropy encoding and are lossless. <span class="caps">CABAC</span> has
        higher compression ratio than <span class="caps">CAVLC</span> but
        decoding a <span class="caps">CABAC</span> encoded entity requires more
        processing than decoding a <span class="caps">CAVLC</span> encoded
        entity. Parallelization and vectorization in
        <span class="caps">CABAC</span> is more difficult than in
        <span class="caps">CAVLC</span>.
      </p>
      <div
        name="Exponential-GolombCoding"
        data-unique="Exponential-GolombCoding"
      ></div>
      <h4>Exponential-Golomb&nbsp;Coding</h4>
      <p>
        Exponential-Golomb (Exp-Golomb) coding is an alternative for
        <span class="caps">CABAC</span> and
        <span class="caps">CAVLC</span> which provides a more simple yet better
        structured <span class="caps">VLC</span> technique for encoding syntax
        elements. A non-integer code is used to parameterize the encoding in
        this&nbsp;process.
      </p>
      <div
        name="WaveletTransformation"
        data-unique="WaveletTransformation"
      ></div>
      <h2>Wavelet&nbsp;Transformation</h2>
      <p>
        Wavelet transformation is a technique for compression of data used in
        images and sometimes in audio and video. It is used as a substitute to
        <span class="caps">DCT</span> for transformation of coefficients from
        spatial domain to frequency domain. Wavelet compression can either be
        lossy or lossless whereas <span class="caps">DCT</span> is always
        lossless. This is why wavelet may provide more compression ratio than
        <span class="caps">DCT</span>.
      </p>
      <div
        name="RunlengthEncoding(RLE)"
        data-unique="RunlengthEncoding(RLE)"
      ></div>
      <h2>Run length Encoding (<span class="caps">RLE</span>)</h2>
      <p>
        un Length Encoding is a technique of encoding data where consecutively
        occurring entities are represented only once with a symbol along with
        the frequency. The original sequence is transformed into a smaller run
        with data values and their count thus enabling compression.
        <span class="caps">RLE</span> is considered to be one of the oldest data
        compression approaches. This approach is suitable for all kinds of
        information, text or binary. <span class="caps">RLE</span> may not be
        suitable for data which do not have items repeating consecutively.
        <span class="caps">RLE</span> can be performed in bit-level, byte-level
        or even pixel-level in case of images. <span class="caps">RLE</span> is
        a lossless&nbsp;compression.
      </p>
      <p>
        An example of Run Length Encoding:<br />
        Input symbols:
        <span class="caps">AAHHHHHHHTTTTTTPPPPPWWJKKKKLLLLLLLLLL</span><br />
        Run Length Code : <span class="caps">2A7H6T5P2W1J4K10L</span>
      </p>
      <p>
        Another example of <span class="caps">RLE</span> that only compresses
        consecutive zeroes:<br />
        Input Symbols : 0000010000000000010001011000000000000<br />
        Counting the number of zeroes separated by 1’s,<br />
        5 11 3 1 0 12<br />
        In 4-bit code representation, the run length encoding is:<br />
        0101 1011 0011 0001 0000&nbsp;1100
      </p>
      <div name="Chromasubsampling" data-unique="Chromasubsampling"></div>
      <h2>Chroma&nbsp;subsampling</h2>
      <p>
        In the early years of television broadcasting, same bandwidth were
        provided for color components and brightness. Soon it was realized that
        the human perception is more sensitive to intensity than to colors. So,
        reduction of the resolution of colors or chroma by keeping the
        brightness or luma intact didn’t alter the picture quality. And then the
        television broadcasting companies started saving bandwidth by
        propagating only half the amount of chroma than luma. This methodology
        they implemented is called <b>chroma subsampling</b>. This is
        demonstrated in the figure below&nbsp;:
      </p>
      <p></p>
      <center>
        <br />
        <img
          alt="Color Subsampling"
          src="/media/mpeg/9.jpg"
        /><br />
        <b>Figure 1.5: Demonstration of color subsampling</b>
      </center>
      The <span class="caps">RGB</span> color model uses the basic Red (R),
      Green (G) and Blue (B) colors to get wide range of other colors by adding
      them up, and therefore, <span class="caps">RGB</span> color space is
      called additive color space. The <span class="caps">RGB</span> color space
      can also be transformed to luminance-chrominance. The advantage of
      expressing them independently into the components luma and chroma is that
      different bandwidth can be assigned for each component thus
      promoting&nbsp;compression.
      <p></p>
      <p>
        <b>Luma</b>, in imaging and video technology refers to the intensity or
        brightness of the image. It is sometimes called ‘Luminance’ but by
        convention, the term ‘Luma’ is to be used in video technology and
        ‘Luminance’ in general color science. Luminance is the weighted sum of
        the <span class="caps">RGB</span> components of image whereas Luma
        considers the gamma-compressed components- R’G’B’. If Luminance is
        represented as Y, Luma is represented as Y’, read as Y prime, where the
        prime (‘) symbol stands for gamma-compression. The weighted sum is
        calculated by using coefficients that have recommended. Rec. 709
        specifies the following expression for computation of&nbsp;luma:
      </p>
      <p>Y’ = 0.212671 * R’ + 0.715160 * G’ + 0.072169 *&nbsp;B’</p>
      <p>
        <b>Chroma</b>, or sometimes called chrominance, is the signal that
        carries the color information of the image. It is abbreviated as ‘C’
        whereas popularly represented as <span class="caps">UV</span>, since it
        is composed of two color-difference components, U and&nbsp;V.
      </p>
      <p>
        U= B’ – Y’ (Gamma-compressed Blue – Luma)<br />
        V = R’ – Y’ (Gamma-compressed Red –&nbsp;Luma)
      </p>
      <p>
        The Y’<span class="caps">UV</span> or
        <span class="caps">YUV</span> color space was used for analog color
        television systems. For modern digital imaging and video broadcasting
        the <b><span class="caps">YC</span><sub>b</sub>C<sub>r</sub></b> family
        of color spaces are used. C<sub>b</sub> stands for blue chrominance and
        C<sub>r</sub> stands for red chrominance. <span class="caps">YC</span
        ><sub>b</sub>C<sub>r</sub> color space is not an absolute or basic color
        space but is an encoding of the <span class="caps">RGB</span> color
        space. Also, like <span class="caps">YUV</span> should not be confused
        with <span class="caps">YC</span><sub>b</sub>C<sub>r</sub> , C<sub
          >b</sub
        >
        does not correspond to U and C<sub>b</sub> does not correspond
        to&nbsp;V.
      </p>
      <p>
        Almost all digital video formats today use <span class="caps">YC</span
        ><sub>b</sub>C<sub>r</sub> but they vary by the
        <b>subsampling ratio</b>. The subsampling ratio is generally expressed
        in the format <b>p:q:r</b>. Popular explanations use j:a:b or H:V:T
        symbols for the ratio but the bottom-line of all the explanations is the
        same. The values ‘p’, ‘q’ and ‘r’ are always integers. The first value
        ‘p’ gives the horizontal width of the sample region or the number of
        pixels in the row of consideration. It is usually ‘4’ until recently
        Sony used the 3:1:1 ratio. 4 is used for p for its traditional
        references and also because being multiple of 2, dividing it for other
        factors in the ratio becomes easy. So, it’s generally 4:q:r. The second
        value ‘q’ gives the count of chroma samples in the first row of ‘p’
        pixels. So, 4:4:r means there are four chroma samples for a row of four
        pixels, which implies no subsampling. 4:2:r means there are two chroma
        samples for a row of four pixels which means the image has been
        subsampled by the factor of 2. 4:1:r means there is a single chroma
        sample used for four pixels of the row and thus the image is subsampled
        by the factor of 4. The third value in the ratio, ‘r’ says only if
        vertical subsampling has been done. If ‘r’ is equal to ‘q’, vertical
        subsampling is absent that is same chroma samples haven’t been forced
        for vertical pixels. If ‘r’ is zero, vertical subsampling has been done
        for the&nbsp;image.
      </p>
      <p></p>
      <center>
        <br />
        <img
          alt="Components in different sub-sample rations"
          src="/media/mpeg/subsample_ratios.jpg"
        /><br />
        <b>Figure 1.6: Components in different sub-sample ratios</b>
      </center>
      Subsampled videos are always required to be stored using even dimensions
      in order to prevent ‘ghosts’ effect due to chroma mismatch. This occurs as
      shadows are seen because some colors appear to be ahead of or behind the
      rest of the image&nbsp;frame.
      <p></p>
      <p>
        Since pictures and videos are the basic types of multi-media, we now
        look into popular<br />
        encoding formats of each kind, <span class="caps">JPEG</span> and
        <span class="caps">MPEG</span>.
      </p>
      <hr />
      <div name="JPEG" data-unique="JPEG"></div>
      <h1><span class="caps">JPEG</span></h1>
      <div name="Introduction" data-unique="Introduction"></div>
      <h2>Introduction</h2>
      <p>
        <span class="caps">JPEG</span>, pronounced ‘Jay-Peg’, stands for ‘Joint
        Photographers Expert Group’. <span class="caps">JPEG</span> is also used
        to refer to the family of standards this group has created for coding
        and compression of still images. <span class="caps">JPEG</span> standard
        is the most widespread standard for representation of still images.
        Images can be represented in other different formats like Bitmap (<span
          class="caps"
          >BMP</span
        >), Tagged Image File Format (<span class="caps">TIFF</span>), Portable
        Network Graphics (<span class="caps">PNG</span>), Graphics Interchange
        Format (<span class="caps">GIF</span>), et cetera.
        <span class="caps">TIFF</span> is mostly used with Optical Character
        Recognition, and <span class="caps">GIF</span> is popular with animation
        (not still images). Lossless <span class="caps">PNG</span> files are
        preferred for editing images whereas <span class="caps">JPEG</span> is
        usually preferred for distribution because of its great compression
        abilities which makes it more portable and yet with considerable quality
        despite being&nbsp;lossy.
      </p>
      <p>
        <span class="caps">JPEG</span> is the most widely used and a very
        flexible digital photograph compression standard. It is the best example
        of continuous tone image compression technique. Continuous tone is the
        term used for images in which each color at any point is independent
        color or single tone from its surrounding points and the quality of the
        image depends on how many points are there in given size of image.
        <span class="caps">JPEG</span> is lossy image compression method where
        the size of image and its quality is inversely proportional.
        <span class="caps">JPEG</span> compression technique can withstand
        compression ratio of 10:1 without compromising with quality noticeably.
        There is an alternative standard for image compression which is not used
        widely and not compatible across variety of&nbsp;devices.
      </p>
      <p>
        <span class="caps">JPEG</span>, technically, is a compression method
        whereas the file format is defined to be
        <span class="caps">JFIF</span> (<span class="caps">JPEG</span> File
        Interchange Format). In general usage,
        <span class="caps">JFIF</span> files are called ‘<span class="caps"
          >JPEG</span
        >
        images’ and are represented with file extensions – .jpeg, .jpg, .jfif,
        .jfi. The <span class="caps">MIME</span> type for
        <span class="caps">JFIF</span> file format as specified in
        <span class="caps">RFC</span> 2046 in 1996 is ‘image/jpeg’. A
        <span class="caps">JPEG</span> file has the bytes ‘<span class="caps"
          >FFD8</span
        >′ in its beginning and ‘<span class="caps">FF</span> D9′ at its end.
        ‘4A 46 49 46′, which is the <span class="caps">ASCII</span> code for the
        string ‘<span class="caps">JFIF</span>’ is used as a null terminated
        string in <span class="caps">JPEG</span>/<span class="caps">JFIF</span
        >&nbsp;files.
      </p>
      <div
        name="JPEGStandardizationBody"
        data-unique="JPEGStandardizationBody"
      ></div>
      <h2><span class="caps">JPEG</span> Standardization&nbsp;Body</h2>
      <p>
        Joint Photographers Expert Group is a joint committee of the
        standardization bodies <span class="caps">ISO</span>/<span class="caps"
          >IEC</span
        >
        <span class="caps">JTC</span> 1 and <span class="caps">ITU</span>-T
        (International Telecommunications Union).
        <span class="caps">ISO</span>/<span class="caps">IEC</span>
        <span class="caps">JTC</span> 1 in turn is the joint committee of
        <span class="caps">ISO</span> (International Organization for
        Standardization) and <span class="caps">IEC</span> (International
        Electrotechnical Commission). In fact, <span class="caps">JPEG</span> is
        just a nickname to this joint group. The official homepage of the group
        is
        <a
          title="Official homepage of JPEG"
          href="http://web.archive.org/web/20170930220816/http://www.jpeg.org/"
          target="_blank"
          >http://www.jpeg.org</a
        >. The committee meets at least three times a year and has been
        publishing parts of the <span class="caps">JPEG</span>,
        <span class="caps">JPEG</span>-<span class="caps">LS</span>,
        <span class="caps">JPEG</span> 2000, JPSearch and
        <span class="caps">JPEG</span>
        <span class="caps">XR</span>&nbsp;standards.
      </p>
      <div name="HistoryofJPEG" data-unique="HistoryofJPEG"></div>
      <h2>History of <span class="caps">JPEG</span></h2>
      <p>
        The first <span class="caps">JPEG</span> standard –
        <span class="caps">JPEG</span> Part 1 was published in 1992, which
        explained the requirements and guidelines for digital compression of
        images. <span class="caps">JPEG</span> Part 2 released on 1994 explained
        compliance testing and <span class="caps">JPEG</span> Part 3 released on
        1996 explained the extensions. <span class="caps">JPEG</span> Part 4
        released on 1998 added profiles, index tags, color spaces, markers and
        other designations to <span class="caps">JPEG</span>.
        <span class="caps">JPEG</span> Part 5 is under development and in a
        recent press release, the joint group has revealed that
        <span class="caps">JFIF</span> will be standardized and designated as
        <span class="caps">JPEG</span> Part&nbsp;5.
      </p>
      <p>
        <span class="caps">JPEG</span>-<span class="caps">LS</span> is the
        standard for lossless or near-losless compression. Part 1 and Part 2 of
        this standard were released in 1998 and 2002, which specified the
        baseline and the extensions of the standard, respectively. The group has
        also published <span class="caps">MRC</span> (Mixed Raster Content) in
        1999 which is used for image segmentation. Six parts of JPSearch
        standard has been released starting from 2007, of which Part 2, 5 and 6
        still being under development. <span class="caps">JPEG</span>
        <span class="caps">XR</span> standard has five parts published, Part 1
        surprisingly being the latest one to be revised. Also, the group is
        developing <span class="caps">AIC</span> (Advanced Image Coding) with
        major involvement from <span class="caps">ISO</span>/<span class="caps"
          >IEC</span
        >.
      </p>
      <p>
        <span class="quo">‘</span><span class="caps">JPEG</span> 2000′, not to
        be confused with the <span class="caps">JPEG</span> standard, is another
        image compression standard the group has been publishing since 2000 and
        its Part 14 is currently under&nbsp;development.
      </p>
      <div
        name="CompressioninJPEGStandard"
        data-unique="CompressioninJPEGStandard"
      ></div>
      <h2>Compression in <span class="caps">JPEG</span>&nbsp;Standard</h2>
      <div
        name="PsychovisualCompression"
        data-unique="PsychovisualCompression"
      ></div>
      <h3>Psychovisual&nbsp;Compression</h3>
      <p>
        The human perception is not highly sensitive to detailed spatial
        information. This means our vision has limited response to details
        around edges of objects and shot-changes. This nature of human
        perception can be exploited to reduce the amount of information in an
        image or video frame and thus allows some considerable amount of
        compression without real significant&nbsp;notice.
      </p>
      <p>
        <span class="caps">JPEG</span> makes use of
        <a
          href="http://web.archive.org/web/20170930220816/http://motorscript.com/mpeg-jpeg-compression/#Chromasubsampling"
          title="Chroma Subsampling"
          >Chroma Subsampling</a
        >
        as a psychovisual compression technique. This technique exploits the
        fact that human eye is far less sensitive to the variation in hue than
        that in brightness. <span class="caps">JPEG</span> utilizes the 4:2:0
        and 4:1:1 subsample ratio, 4:2:0 being the usual&nbsp;one.
      </p>
      <div
        name="SpatialRedundancyRemoval"
        data-unique="SpatialRedundancyRemoval"
      ></div>
      <h3>Spatial Redundancy&nbsp;Removal</h3>
      <p>
        Block preparation is the first step of the compression. Blocks of 8 x 8
        pixels are segmented. A block then can be represented in a 8 x 8 matrix.
        The spatial variation of pixels in each matrix is converted into
        frequency variations using two dimensional Discrete Cosine Transform.<br />
        <a name="figure_transform"></a><br />
      </p>
      <center>
        <br />
        <img
          alt="Transformation of 8 x 8 picture matrix to DCT coefficients"
          src="/media/mpeg/8x8.jpg"
        />
        <b
          >Figure 2.1 : Transformation of 8 x 8 picture matrix to
          <span class="caps">DCT</span> coefficients</b
        >
      </center>
      The above example shows transformation of 8 x 8 matrix. The transformed
      matrix is known as matrix of <span class="caps">DCT</span> coefficients.
      <span class="caps">DCT</span> coefficients are of two kinds –
      <span class="caps">DC</span> (Direct Current) coefficients and
      <span class="caps">AC</span> (Alternate Current) coefficients.
      <span class="caps">DC</span> coefficient is the one which has zero
      frequency across both the horizontal and vertical dimension. A 8 x 8
      matrix of <span class="caps">DCT</span> coefficients has 64 elements, one
      of them is <span class="caps">DC</span> coefficient and the rest 63 are
      <span class="caps">AC</span> coefficients. In the above example, 239 (
      element from first row and first column of the matrix of
      <span class="caps">DCT</span> coefficients) is the
      <span class="caps">DC</span> coefficient. The rest of the elements in the
      matrix are <span class="caps">AC</span>&nbsp;coefficients.
      <p></p>
      <p>
        Wavelet Transformation may also be employed as a substitute to
        <span class="caps">DCT</span>, although it is more widely used in the
        <span class="caps">JPEG</span> 2000 standard.
        <span class="caps">DCT</span> is always lossless whereas wavelet may be
        lossy. Quantization is performed over the retrieved transformation
        coefficients to convert higher frequency coefficients into zero. Some
        insignificant amount of information is lost during this process. The
        quantized matrix then entropy coded. The
        <span class="caps">DC</span> component of the matrix is encoded using
        <span class="caps">DPCM</span> (Differential Pulse-Code Modulation)
        which is a derivation of the <span class="caps">PCM</span> (Pulse Code
        Modulation) technique. <span class="caps">DPCM</span> uses the
        differential value among the sample nodes for coding. Whereas for the
        <span class="caps">AC</span> coefficients, zigzag scanning is done to
        align zeroes on one corner. Since zeroes are accumulated at the end, End
        of Block (<span class="caps">EOB</span>) marker can be used to replace
        the final run of zeroes, which further reduces the bit-size. Run length
        Encoding (<span class="caps">RLE</span>) is applied to reduce the
        redundancy. Then, Huffman Coding or Arithmetic coding is to be done to
        get smaller array of data. Although
        <span class="caps">JPEG</span> standard recommends any of these two
        Variable-Length Coding (<span class="caps">VLC</span>) to be used,
        Huffman Coding is preferred for its better compression.
        <span class="caps">VLC</span> is the last step during encoding and first
        step during decoding of <span class="caps">JPEG</span>&nbsp;images.
      </p>
      <div name="DecodingofJPEG" data-unique="DecodingofJPEG"></div>
      <h3>Decoding of <span class="caps">JPEG</span></h3>
      <p>
        Decoding of <span class="caps">JPEG</span> file is the inverse process
        of its encoding. The decoding process starts with entropy decoding.
        Variable-Length decoding is done. Huffman Code Book is used for
        identifying the symbols for which the codes are used. Inverse
        quantization and then Inverse <span class="caps">DCT</span> (which is
        <span class="caps">DCT</span>-<span class="caps">III</span>) further
        decodes the image file. This gives us a very very close match of the raw
        image that was fed to the encoder. The decoding process requires
        information about how the encoding or the compression has been done.
        This information is available within the
        <span class="caps">JPEG</span> file as
        <span class="caps">CH</span> (Compression&nbsp;History).
      </p>
      <div name="JPEGCompressionModes" data-unique="JPEGCompressionModes"></div>
      <h2><span class="caps">JPEG</span> Compression&nbsp;Modes</h2>
      <p>
        There are four modes of <span class="caps">JPEG</span>&nbsp;compression:
      </p>
      <div name="LosslessJPEG" data-unique="LosslessJPEG"></div>
      <h3>Lossless <span class="caps">JPEG</span></h3>
      <p>
        Lossless <span class="caps">JPEG</span> compression mode uses only
        predictive technique. No information is discarded if it isn’t redundant.
        Entropy coding is employed for this no quantization is done. Eight kinds
        of prediction schemes are&nbsp;used.
      </p>
      <div
        name="BaselineorSequentialJPEG"
        data-unique="BaselineorSequentialJPEG"
      ></div>
      <h3>Baseline or Sequential <span class="caps">JPEG</span></h3>
      <p>
        This is the most common mode of
        <span class="caps">JPEG</span> compression. It employs all the lossy and
        lossless compression algorithms for psychovisual compression as well as
        spatial prediction. It involves chroma subsampling,
        <span class="caps">DCT</span>, quantization and entropy&nbsp;encoding.
      </p>
      <div name="ProgressiveJPEG" data-unique="ProgressiveJPEG"></div>
      <h3>Progressive <span class="caps">JPEG</span></h3>
      <p>
        Progressive <span class="caps">JPEG</span> is a lossy mode and is very
        much similar to the baseline <span class="caps">JPEG</span> except that
        multiple scans are done for coding. It is of two kinds – spectra
        selection and successive approximation. Some applications use
        image/pjpeg <span class="caps">MIME</span> type for images compressed
        with this mode. It is suitable for download in slower internet
        connection where portions of the images can be
        gradually&nbsp;downloaded.
      </p>
      <div name="HierarchialJPEG" data-unique="HierarchialJPEG"></div>
      <h3>Hierarchial <span class="caps">JPEG</span></h3>
      <p>
        This is a lossless mode based on <span class="caps">DCT</span>. Multiple
        frames of differential and non-differential kinds are used. This mode
        provides multiple resolutions and the images compressed with this mode
        take more&nbsp;space.
      </p>
      <div
        name="ApplicationsofJPEGformat"
        data-unique="ApplicationsofJPEGformat"
      ></div>
      <h2>Applications of <span class="caps">JPEG</span>&nbsp;format</h2>
      <p>
        Digital photography is primarily used for sharing information and
        storage. <span class="caps">JPEG</span> images are widely used for
        sharing images in internet. Besides just photographs, thumbnails for
        pages, videos, and other different contents are encoded as
        <span class="caps">JPEG</span>. <span class="caps">JPEG</span> is
        suitable for all kinds of devices – powerful computers as well as mobile
        devices of low end. It is also appropriate for sharing in all kinds of
        connections. The capability of level wise compression with minimum loss
        in the quality of <span class="caps">JPEG</span> compression standard
        makes it very popular and applicable. <span class="caps">JPEG</span> is
        preferred as widely used image compression standard because it is
        capable of storing 24 bit per pixel color data instead of 8 bit per
        pixel color data which were used&nbsp;before.
      </p>
      <p>
        <span class="caps">JPEG</span> is the format used for saving images in
        digital cameras, storing them, as images in web-pages and everywhere
        else. The image in <span class="caps">ID3</span> tag of
        <span class="caps">MP3</span> files for album covers and artist pictures
        are also encoded as <span class="caps">JPEG</span>&nbsp;images.
      </p>
      <p>
        Another use of digital photographs is for scientific research and
        medicine. Scientists and doctors can share their findings, results and
        problems between each other for better consequences. These can be stored
        for future also so that future generations of scientists and doctors can
        study them. In such cases the size of the image wont matter as such but
        the quality has to be very good. They can zoom in and magnify the minute
        details which would have been impossible to detect by the normal human
        eye. Such super high quality of images is supported by
        <span class="caps">JPEG</span>.
      </p>
      <p>
        Capturing the personal moments in the form of still photographs is very
        important as well. In this age of web 2.0 where idea of sharing pictures
        of what you are doing now to your important friends and families to get
        connected with each other and remember the moments of personal, cultural
        and social events is very important as well.
        <span class="caps">JPEG</span> is the best choice for this&nbsp;purpose.
      </p>
      <p>
        Digital imagery are also used for surveillance and better representation
        of raw data in the form of information. Maps make our day to day life
        easier. These are only the few examples of implementation of Digital
        Photography and <span class="caps">JPEG</span> compression standard to
        be&nbsp;specific.
      </p>
      <div name="JPEG’sLimitations" data-unique="JPEG’sLimitations"></div>
      <h2><span class="caps">JPEG</span>’s&nbsp;Limitations</h2>
      <p>
        <span class="caps">JPEG</span> has some downsides too. It is a lossy
        compression standard. It may not be appropriate in cases where the
        minute details of the image and high quality precision matters more than
        the storage size and transmission bandwidth.
        <span class="caps">JPEG</span> can easily handle compression ration of
        10:1 without drastically degrading the quality but this is also
        disadvantage of the <span class="caps">JPEG</span> as it takes longer
        time to decode or decompress. There always has to be a compromise
        between time and space. There is already a new and improved standards of
        <span class="caps">JPEG</span> family called
        <span class="caps">JPEG2000</span> but the transition to this new format
        is becoming very difficult as very low number of device so only very few
        improvements have been made in past two decades and there is no sign of
        that transition happening very&nbsp;soon.
      </p>
      <p>
        <span class="caps">JPEG</span> is superior when we need rich colored and
        realistic photograph since it supports 24 bit per pixels but when the
        quantity of colors of the photograph is lower, it creates overhead and
        cannot compress as good as other image compression standard like GIFs.
        Another limitation of <span class="caps">JPEG</span> file format is that
        it cannot handle transparency and very sharp&nbsp;edges.
      </p>
      <div
        name="FutureTechnologiesofJPEG"
        data-unique="FutureTechnologiesofJPEG"
      ></div>
      <h2>Future Technologies of <span class="caps">JPEG</span></h2>
      <p>
        Joint Photographic Expert Group (<span class="caps">JPEG</span>) in 1992
        introduced a very popular image compression algorithm and standard
        called <span class="caps">JPEG</span>. It is true that
        <span class="caps">JPEG</span> has been one of the most reliable and
        easy to use photo standard and thus it is the most popular also but very
        little improvements have been made by the group since last two decades.
        Technology needs constant revisions and improvements but
        <span class="caps">JPEG</span> committee instead of improving the
        existing standard introduced a new photo compression and coding
        algorithm that is meant to replace <span class="caps">JPEG</span>. This
        standard is called <span class="caps">JPEG2000</span>, which was
        introduced initially in the year 2000.
        <span class="caps">JPEG2000</span> itself is based on wavelet method and
        there are two standard file format ‘.jp2′ and ‘.jpx’ . Although its been
        a decade since <span class="caps">JPEG2000</span> was first introduced
        people have not accepted the file format. It is also thought that
        <span class="caps">JPEG2000</span> is only a modest improvement to
        existing <span class="caps">JPEG</span> compression standard so until
        there is something very revolutionary there is no need to totally shift
        to new&nbsp;technology.
      </p>
      <p>
        Now <span class="caps">JPEG2000</span> is the improved standard of photo
        compression from Joint Photographic Expert Group committee itself but
        there are lots of other versions of <span class="caps">JPEG</span> that
        have been standardized and are in the development process. Examples of
        such is <span class="caps">JPEG</span>
        <span class="caps">XR</span> where <span class="caps">XR</span> stands
        for eXtended Range and <span class="caps">JPEG</span> Mini.
        <span class="caps">JPEG</span> <span class="caps">XR</span> is also
        compression standard for still photographs and digital graphics which is
        based on technology which is developed by Microsoft under
        <span class="caps">HD</span> Photo standard. Although
        <span class="caps">JPEG</span> <span class="caps">XR</span> is a
        standard that improved the deficits of
        <span class="caps">JPEG</span> but then <span class="caps">JPEG</span>
        <span class="caps">XR</span> is not a open standard and patented by
        Microsoft and so there are very few vendors who support this standard
        like Microsoft itself and Adobe. There are bunch of other so called
        improvements to <span class="caps">JPEG</span> that are either waiting
        to be standardized internationally or adopted by peoples. The
        <span class="caps">JPEG</span> mini which is also developed by
        independent Israeli group is compatible with existing
        <span class="caps">JPEG</span> and compresses the images 5-10 times more
        without losing the original quality. It can be said that this is in very
        infant stage and still need some&nbsp;improvements.
      </p>
      <div name="MPEG" data-unique="MPEG"></div>
      <h1><span class="caps">MPEG</span></h1>
      <div name="Introduction39" data-unique="Introduction39"></div>
      <h2>Introduction</h2>
      <p>
        <span class="caps">MPEG</span>, pronounced ‘M-Peg’, stands for ‘Moving
        Picture Experts Group’. Like <span class="caps">JPEG</span>,
        <span class="caps">MPEG</span> can be used to refer to the group itself
        or the standards the group has created for coding audio-visual data.
        There are various digital video encoding formats or codecs, among which
        some popular ones are <span class="caps">3GPP</span> (popular on mobile
        phones), <span class="caps">AVI</span> (Microsoft’s Audio Video
        container codec derived from <span class="caps">RIFF</span>),
        <span class="caps">FLV</span> (Flash Video, popular on web pages,
        utilizes Adobe Flash Technology), <span class="caps">MOV</span> (Apple’s
        QuickTime multimedia format), etc. While these formats have their own
        special capabilities and abundance in particular platforms, codecs from
        the <span class="caps">MPEG</span> family are the most widespread and
        accepted ones. The official homepage of
        <span class="caps">MPEG</span> is http://mpeg.chiariglione.org/ whereas
        resources and references are available on&nbsp;http://www.mpeg.org.
      </p>
      <p>
        <span class="caps">MPEG</span> files are generally represented with the
        extension ‘.mpg’. Its <span class="caps">MIME</span> type
        is&nbsp;‘video/mpeg’.
      </p>
      <div name="HistoryofMPEG" data-unique="HistoryofMPEG"></div>
      <h2>History of <span class="caps">MPEG</span></h2>
      <p>
        With an objective to provide better quality videos with small file
        sizes, <span class="caps">ISO</span>, <span class="caps">IEC</span> ,
        <span class="caps">SC2</span> and few other organizations initiated the
        movement in January 1988. The following table gives an overview of the
        early phases and the <span class="caps">MPEG</span>-1 and
        <span class="caps">MPEG</span>-2&nbsp;development.
      </p>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Place (if meeting)</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>May 1988</td>
            <td>Ottawa, Canada</td>
            <td>
              First official meeting.<br />
              Relate motion video to digital storage devices.<br />
              Real-time decoding at bitrate of 1.5Mbit/s.
            </td>
          </tr>
          <tr>
            <td>18-22 July 1988</td>
            <td>Politecnico di Torino, Italy</td>
            <td>
              <span class="caps">IVC</span> (Internet Video Coding) and
              <span class="caps">CDVS</span> was proposed
            </td>
          </tr>
          <tr>
            <td>September 1988</td>
            <td>London, <span class="caps">UK</span></td>
            <td>Goals and objectives were hammered.</td>
          </tr>
          <tr>
            <td>December 1988</td>
            <td>Hannover, Germany</td>
            <td>
              Audio coding activity initiated.<br />
              Video testing sequences were selected by video group.
            </td>
          </tr>
          <tr>
            <td>February 1989</td>
            <td>Livingston, New Jersey, <span class="caps">USA</span></td>
            <td>Techniques for matrix testing were specified</td>
          </tr>
          <tr>
            <td>June 1, 1989</td>
            <td>-</td>
            <td>Deadline for audio standard development participation.</td>
          </tr>
          <tr>
            <td>May 1989</td>
            <td>Rennes, France</td>
            <td>Dedicated meeting for description of proposal packages.</td>
          </tr>
          <tr>
            <td>July 1989</td>
            <td>Stockholm, Sweden</td>
            <td>
              Finalization of video package.<br />
              Initiation of activities on <span class="caps">MPEG</span> system.
            </td>
          </tr>
          <tr>
            <td>October 1989</td>
            <td>Kurihama and OSaka, Japan</td>
            <td>
              Proposals for decompressed digital image sequences were made
              available.
            </td>
          </tr>
          <tr>
            <td>January 1990</td>
            <td>Eindhoven, Netherlands</td>
            <td>
              Semi-independent testings were made possible by core experiments.
            </td>
          </tr>
          <tr>
            <td>March 1990</td>
            <td>Tampa, Florida, <span class="caps">USA</span></td>
            <td>
              Results from core experiments were analyzed.<br />
              <span class="caps">JPEG</span> vs. H.261 comparison was run for
              picture coding.<br />
              Syntax in pseudocode was defined.<br />
              <span class="caps">SM1</span> (First Simulation Model) for video
              was bring forth.
            </td>
          </tr>
          <tr>
            <td>April 1990</td>
            <td>Washington, <span class="caps">USA</span></td>
            <td>
              Working Group – <span class="caps">WG8</span> was restructured.
            </td>
          </tr>
          <tr>
            <td>May 1990</td>
            <td>Torino, Italy</td>
            <td>
              <span class="caps">MPEG</span>-2 with high definition coding was
              proposed.
            </td>
          </tr>
          <tr>
            <td>September 1990</td>
            <td>Santa Clara, California, <span class="caps">USA</span></td>
            <td>
              Macroblock level was selected for motion compensation.<br />
              <span class="caps">WD</span> (Working Draft) was created.
            </td>
          </tr>
          <tr>
            <td>December 1990</td>
            <td>Berlin, Germany</td>
            <td>
              <span class="caps">MPEG</span>-1 standard (<span class="caps"
                >WD</span
              >
              11172) was edited.<br />
              Requirements for <span class="caps">MPEG</span>-2 were specified.
            </td>
          </tr>
          <tr>
            <td>March 1991</td>
            <td>San Jose, California, <span class="caps">USA</span></td>
            <td>Meetings canceled due to Gulf War crisis.</td>
          </tr>
          <tr>
            <td>May 1991</td>
            <td>Paris france</td>
            <td>
              <span class="caps">WD</span> 11172 was edited and cleaned up.
            </td>
          </tr>
          <tr>
            <td>August 1991</td>
            <td>Santa Clara, California, <span class="caps">USA</span></td>
            <td>
              <span class="caps">MPEG</span>-1 <span class="caps">WD</span> was
              prepared to promote to <span class="caps">CD</span> (Committee
              Draft).
            </td>
          </tr>
          <tr>
            <td>November 1991</td>
            <td>Kurihama, Japan</td>
            <td>
              <span class="caps">MPEG</span>-1 <span class="caps">WD</span> was
              accepted as <span class="caps">CD</span>.
            </td>
          </tr>
          <tr>
            <td>January 1992</td>
            <td>Haifa, Israel</td>
            <td>
              <span class="caps">WG11</span> created
              <span class="caps">DIS</span> (Draft International Standard)
              11172.
            </td>
          </tr>
          <tr>
            <td>July 1992</td>
            <td>Angra dos Reis, Brazil</td>
            <td>
              <span class="caps">TM1</span> (Test Model 1) for
              <span class="caps">MPEG</span>-2 was made available.
            </td>
          </tr>
          <tr>
            <td>September 1992</td>
            <td>Tarrytown, New York, <span class="caps">USA</span></td>
            <td>
              Discussions with cable companies for likely application of
              <span class="caps">MPEG</span>-2 for cable television.
            </td>
          </tr>
          <tr>
            <td>November 1992</td>
            <td>London, <span class="caps">UK</span></td>
            <td>
              First <span class="caps">WD</span> for
              <span class="caps">MPEG</span>-2 was created.<br />
              It was realized that <span class="caps">MPEG</span>-2 could
              fulfill what <span class="caps">MPEG</span>-3 was expected to.
            </td>
          </tr>
          <tr>
            <td>January 1993</td>
            <td>Rome, Italy</td>
            <td>
              Technical details for <span class="caps">MPEG</span>-2 were worked
              out.
            </td>
          </tr>
          <tr>
            <td>April 1993</td>
            <td>Sydney, Australia</td>
            <td>
              Main profile of <span class="caps">MPEG</span>-2 was frozen.<br />
              Macroblock stuffing was discarded.
            </td>
          </tr>
          <tr>
            <td>July 1993</td>
            <td>New York, <span class="caps">USA</span></td>
            <td>
              Started to clean the scalabilty aspects of
              <span class="caps">WD</span>.
            </td>
          </tr>
          <tr>
            <td>September 1993</td>
            <td>Brussels, Belgium</td>
            <td>Cleaning up of scalabilty continued.</td>
          </tr>
          <tr>
            <td>November 1993</td>
            <td>Seoul, Korea</td>
            <td>
              <span class="caps">MPEG</span>-2
              <span class="caps">CD</span> 13818 was published.
            </td>
          </tr>
          <tr>
            <td>March 1994</td>
            <td>Paris, France</td>
            <td><span class="caps">DIS</span> 13818 was prepared.</td>
          </tr>
          <tr>
            <td>July 1994</td>
            <td>Norway</td>
            <td>
              <span class="caps">MPEG</span>-2 Part 6 (<span class="caps"
                >DSM</span
              >
              <span class="caps">CC</span>) was published.
            </td>
          </tr>
          <tr>
            <td>November 1994</td>
            <td>Singapore</td>
            <td>
              <span class="caps">MPEG</span>-1 and
              <span class="caps">MPEG</span>-2 achieved final approval.
            </td>
          </tr>
        </tbody>
      </table>
      <div
        name="StandardsoftheMPEGFamily"
        data-unique="StandardsoftheMPEGFamily"
      ></div>
      <h2>Standards of the <span class="caps">MPEG</span>&nbsp;Family</h2>
      <div name="MPEG-1" data-unique="MPEG-1"></div>
      <h3><span class="caps">MPEG</span>-1</h3>
      <p>
        <span class="caps">MPEG</span>-1 was designed for encoding multimedia
        with videos of <span class="caps">VHS</span> (Video Home System) quality
        and audio of bit rate up to 1.5 Mbit/s. <span class="caps">MPEG</span>-1
        standard, specified as <span class="caps">ISO</span>/<span class="caps"
          >IEC</span
        >
        11172, has 5 parts, viz. Systems, Video, Audio, Compliance testing and
        Software simulation. This standard is highly influenced by the standards
        <span class="caps">JPEG</span> and H.261 developed by
        <span class="caps">ITU</span>-T. Resolutions up to 4095×4095 and bitrate
        up to 100 Mbit/s is supported by <span class="caps">MPEG</span>-1. 4:2:0
        color space is only supported. Audio, part 3 of
        <span class="caps">MPEG</span>-1, defined as
        <span class="caps">ISO</span>/<span class="caps">IEC</span>-11172-3, is
        the first standard audio compression technology. It only supports two
        channels of audio. It is divided into three layers – Layer I,
        <span class="caps">II</span> and <span class="caps">III</span>.
      </p>
      <p>
        <span class="caps">MPEG</span>-1 Layer <span class="caps">III</span> is
        commonly known as <span class="caps">MP3</span>.
      </p>
      <p>
        <span class="caps">MPEG</span>-1 can compress video in 26:1 and audio in
        6:1 ratio without significant notice in<br />
        degradation of&nbsp;quality.
      </p>
      <p>
        <span class="caps">MPEG</span>-1 had following weaknesses which gave
        birth to the next standard:<br />
        • <span class="caps">MPEG</span>-1 had no standard support for
        interlaced video.<br />
        • Audio compression is possible with only two channels.<br />
        • Only ‘4:2:0′ color space is supported.<br />
        • Not compatible with videos of high&nbsp;resolution.
      </p>
      <div name="MPEG-2" data-unique="MPEG-2"></div>
      <h3><span class="caps">MPEG</span>-2</h3>
      <p>
        <span class="caps">MPEG</span>-2 is is the most popular standard for
        video compression with huge range of applications. It was extended from
        <span class="caps">MPEG</span>-1 with lots of improvements and feature
        additions. It goes up to Part 11, Part 8 (10-bit video) being dropped.
        <span class="caps">MPEG</span>-2 Part 3 (<span class="caps">ISO</span
        >/<span class="caps">IEC</span> 13818-3) which describes Audio is
        backward compatible with <span class="caps">MPEG</span>-1 Audio whereas
        Part 7 describing <span class="caps">AAC</span> (Advanced Audio Coding)
        is not. <span class="caps">MPEG</span>-2 adds Variable quantization and
        Variable Bit Rate (<span class="caps">VBR</span>) to
        <span class="caps">MPEG</span>-1 among other features. Since,
        <span class="caps">MPEG</span>-2 has more complex algorithm for
        encoding, <span class="caps">MPEG</span>-1 is slightly better for
        compression of videos with low bit rates.
        <span class="caps">MPEG</span>-2 can produce compression down to the bit
        rate of around 3-15 Mbit/s. Any lower bit rate than this may introduce
        noticeable impairments in the&nbsp;video.
      </p>
      <div name="MPEG-3" data-unique="MPEG-3"></div>
      <h3><span class="caps">MPEG</span>-3</h3>
      <p>
        <span class="caps">MPEG</span>-3 was expected to be the standard for
        high definition television but it was realized that
        <span class="caps">MPEG</span>-2 was capable of fulfilling the need with
        extensions and therefore <span class="caps">MPEG</span>-3 doesn’t exist
        as a coding&nbsp;standard.
      </p>
      <div name="MPEG-4" data-unique="MPEG-4"></div>
      <h3><span class="caps">MPEG</span>-4</h3>
      <p>
        In early 1995, development of the next standard was initiated so that
        low bit rates could also be supported. This standard was called
        <span class="caps">MPEG</span>-4 and it reached
        <span class="caps">CD</span> (Committee Draft) status only in March 1998
        and the final approval was obtained in the end of the same year. Since
        then, twenty seven parts of <span class="caps">MPEG</span>-4 standard
        has been published while Part 28 is under development. However,
        <span class="caps">MPEG</span>-4 is not limited to videos with low bit
        rates, it is becoming the generic standard for video&nbsp;coding.
      </p>
      <p>
        <span class="caps">MPEG</span>-4 employs object-based compression
        technique which endorses more efficient and scalable compression with
        wide range of bit rates. The object-based interaction also enables
        developers to control each objects of a scene independently and also
        enable the interactivity among the objects.
        <span class="caps">MPEG</span>-4 Audio or as it was specified as
        <span class="caps">ISO</span>/<span class="caps">IEC</span> 14496-3
        determines the audio coding and composition standards with support for
        very low to high bitrates. Audio components are also objects which have
        natural and synthetic&nbsp;quality.
      </p>
      <p>
        <span class="caps">MJPEG</span> is not to be confused with
        <span class="caps">MPEG</span>. <span class="caps">MJPEG</span> nothing
        but a sequence of image frames that uses
        <span class="caps">JPEG</span> compression for each&nbsp;frame.
      </p>
      <div name="VideoFundamentals" data-unique="VideoFundamentals"></div>
      <h2>Video&nbsp;Fundamentals</h2>
      <p>
        <b>Video</b> is the technology in which moving visual images are
        recorded, reproduced and/or broadcasted. An analog video is a video with
        uninterrupted time varied signal. A digital video is composed of
        sequence of still digital images. Such still images are called
        <b>video frames</b>.
      </p>
      <p>
        <b>Frame rate</b> is the frequency in which consecutive still images
        appear in a video. It is measured in fps ( frames per&nbsp;second).
      </p>
      <p>
        An <b>interlaced video</b> is a video with interwoven frames. Frames are
        interwoven with fields. Each frame has two fields (or half-frames) – odd
        fields and even&nbsp;fields.
      </p>
      <p></p>
      <center>
        <br />
        <img
          alt="Frame and its fields"
          src="/media/mpeg/13.jpg"
        />
        <br />
        <b>Figure 3.2 : Frame and its fields</b>
      </center>
      A <b>progressive video</b> or a non-interlaced video has its each pixel
      refreshed starting from left top, one column by another.
      <span class="caps">NTSC</span> (National Television Systems Committee),
      <span class="caps">PAL</span> (Phase Alternating Line),
      <span class="caps">SECAM</span> (Séquentiel couleur à mémoire) are the
      most common analog television color encoding systems.
      <span class="caps">PAL</span> videos use
      <span class="caps">YUV</span> color model. Videos of bit-rate 6 Mbit/s is
      recognized to be best for terrestrial video broadcasting systems
      considering both the compression and quality&nbsp;factors.
      <p></p>
      <p>
        <b>Video Object (<span class="caps">VO</span>)</b><br />
        A video object is any arbitrarily shaped object, a rectangular frame or
        the background scene of a video. A video object can be accessed and
        manipulated by the user. A user can browse or seek the video objects
        while accessing the video and cut or paste the video objects while
        manipulating&nbsp;it.
      </p>
      <p>
        <b>Video Object Plane (<span class="caps">VOP</span>)</b><br />
        Video Object Plane is the instance of Video Object at a given time. It
        may also be defined as time sample of video object. A
        <span class="caps">VOP</span> of rectangular shape forms a conventional
        video frame. A video is made up of such encoded&nbsp;VOPs.
      </p>
      <p>
        <b>Group of Video Object Planes (<span class="caps">GOV</span>)</b
        ><br />
        A collection of video object planes is called Group of Video Object
        Planes or <span class="caps">GOV</span> in short. GOVs are not mandatory
        in videos. Random Access points in video bitstream is facilitated by the
        points provided by GOVs. One of the reasons video objects are grouped
        into <span class="caps">GOV</span> is that redundancy can not only be
        removed from objects but from the whole&nbsp;group.
      </p>
      <p>
        <b>Video Object Layer (<span class="caps">VOL</span>)</b><br />
        A Video Object Layer is the representation of video objects in single or
        multiple strata. A <span class="caps">VOL</span> with single stratum is
        in non-scalable form whereas a <span class="caps">VOL</span> with
        multiple strata is a scalable&nbsp;form.
      </p>
      <div name="Frames" data-unique="Frames"></div>
      <h2>Frames</h2>
      <p>
        <span class="caps">MPEG</span> identifies frames into three kinds:<br />
        1. I-frames<br />
        2. P-frames<br />
        3.&nbsp;B-frames
      </p>
      <p>
        Each one of these frames has different properties and purposes, as
        explained&nbsp;below.
      </p>
      <div name="I-frames" data-unique="I-frames"></div>
      <h3>I-frames</h3>
      <p>
        I-frame is short for intraframe or intra-coded frame. It is also called
        keyframe as it is the most important kind of frame. It is independent
        since this frame doesn’t need other frames for being decoded. It
        contains more amount of bits or information compared to other kind of
        frames and therefore is the least compressible, thus taking more storage
        and bandwidth. The more I-frames a video has, better is
        its&nbsp;quality.
      </p>
      <div name="P-frames" data-unique="P-frames"></div>
      <h3>P-frames</h3>
      <p>
        P-frame is the short name for predictive frame or predicted frame.
        P-frames depend on preceding I-frame or P-frame for information like
        content and color changes, thus the name predictive. It is more
        compressible than&nbsp;I-frames.
      </p>
      <div name="B-frames" data-unique="B-frames"></div>
      <h3>B-frames</h3>
      <p>
        B-frames means bidirectionally-predictive-coded frames frames or simply
        bi-directional frames. Bi-directional frames do not include information
        contained in preceding or following I-frames or P-frames and thus depend
        upon previous and next frame during decoding and decompression and thus
        the name bidirectional. It provides highest level of compression
        compared to the other two kinds of frames. B-frames are never
        reference&nbsp;frames.
      </p>
      <p>
        Since P-frames and B-frames only store the changed information relative
        to the other<br />
        frames, they are also known as delta&nbsp;frames.
      </p>
      <p></p>
      <center>
        <br />
        <img
          alt="An example frame sequence in videos"
          src="/media/mpeg/sequence.jpg"
        />
        <b>Figure 3.3: An example frame sequence in videos</b>
      </center>
      <b><span class="caps">GOP</span> (Group of Pictures)</b><br />
      A Group of Pictures is a collection of frames. A
      <span class="caps">GOP</span> (contains at least one I-frame. In an
      averagely compressed <span class="caps">NTSC</span> video, usually every
      15 th or so frames are I-frames although the
      <span class="caps">MPEG</span> standard isn’t strict about this. A
      <span class="caps">GOP</span> may look like
      <span class="caps">IBBPBBPBBPBB</span>, where I stands for I-frames, B for
      B-frames and P for P-frames. The arrangement of frames determines the
      <span class="caps">GOP</span> structure which is ultimately one of the
      factors for determining the compression&nbsp;ratio.
      <p></p>
      <p>
        <b>Open GOPs and Closed GOPs</b><br />
        Open GOPs are the GOPs which contain frames that can refer to the frames
        from preceding or following GOPs. I contrast, delta frames in closed
        GOPs can only refer to its own I-frames. Among open and closed GOPs of
        same number of frames, open provides a little more compression since
        open GOPs contain one less P-frame and one more B-frame than closed
        GOPs. However open GOPs aren’t applicable to all
        <span class="caps">MPEG</span> streams like mixed-angle or
        multi-angle&nbsp;DVDs.
      </p>
      <p></p>
      <center>
        <br />
        <img
          alt="Open and Closed GOPs"
          src="/media/mpeg/gop.png"
        />
        <b>Figure 3.4: Comparison of Open and Closed GOPs</b>
      </center>
      <p></p>
      <div name="Macroblock" data-unique="Macroblock"></div>
      <h2>Macroblock</h2>
      <p>
        A macroblock (<span class="caps">MB</span>) is a segment or component of
        frame. 16×16 blocks of pixels are usually taken as a macroblock where as
        8 by 8 pixels for advanced prediction mode. A still image or video frame
        contains several non-overlapping macroblocks. Macroblocks are the basic
        units of consideration in motion estimation and compensation. They are
        also used used for motion vectors for predictive coding of frames, that
        is for finding the difference between two frames. A series of
        macroblocks forms a <b>slice</b>.
      </p>
      <div name="Compression" data-unique="Compression"></div>
      <h2>Compression</h2>
      <div
        name="PsychovisualCompression53"
        data-unique="PsychovisualCompression53"
      ></div>
      <h3>Psychovisual&nbsp;Compression</h3>
      <p>
        Psychovisual compression on <span class="caps">MPEG</span> is done
        similarly as in <span class="caps">JPEG</span> with
        Chroma&nbsp;subsampling.
      </p>
      <p>
        <span class="caps">MPEG</span> usually utilizes the 4:2:0 sub-sample
        configuration in most of its implementations like DVDs, etc. Also,
        <span class="caps">MJPEG</span>’s common implementation includes 4:2:0
        configuration. <span class="caps">MPEG</span> also utilizes 4:1:1
        subsample pattern. <span class="caps">NTSC</span> videos in
        <span class="caps">DVCPRO</span>, <span class="caps">DV</span> and
        <span class="caps">DVCAM</span> use this pattern. The 4:4:4 subsampling
        can found in <span class="caps">MPEG</span>-4 Part 2 and
        <span class="caps">MPEG</span>-4 since it is considered to be a high
        quality sampling&nbsp;scheme.
      </p>
      <div name="SpatialCompression" data-unique="SpatialCompression"></div>
      <h3>Spatial&nbsp;Compression</h3>
      <p>
        I-frames being independent frame are simply just still pictures. Spatial
        redundancy removal is an intra-picture compression technique. Spatial
        meaning relating to space, this technique is concerned with removing
        redundancy over the space of two dimensional plane and not the time
        dimension. It takes advantage of the fact that a pixel value can be
        predicted from its neighboring pixels to some extent. Also, human eye is
        not capable of detecting small changes in the image. This removal
        technique is also known as backward prediction. This prediction is done
        within an I-frame and does not depend upon information in preceding or
        following frames. This kind of prediction is also known as
        backward&nbsp;prediction.
      </p>
      <div
        name="Compression/EncodingofI-frames"
        data-unique="Compression/EncodingofI-frames"
      ></div>
      <h4>Compression/Encoding of&nbsp;I-frames</h4>
      <p>
        An I-frame is chambered into different macroblocks , say of 8 by 8
        blocks of pixels. The macroblocks are then transformed using Discrete
        Cosine Transform which results in a 8×8 matrix of coefficients. This
        transformation is not lossy which means the inverse of cosine
        transformation gives us the original block.
        <span class="caps">DCT</span>-<span class="caps">II</span>, sometimes
        also <span class="caps">DCT</span>-I is used for compression of
        correlated pixels into frequency variations. The two dimensional
        block-based <span class="caps">DCT</span> of 8×8 matrix is used for
        encoding blocks of video. This encoding standard is defined by
        <span class="caps">IEEE</span> 1180 to increase accuracy and reduce
        mismatch&nbsp;errors.
      </p>
      <p>
        Wavelet compression may also be employed in
        <span class="caps">MPEG</span>-4 technology as a substitute to
        <span class="caps">DCT</span>. Quantization of the frequency variations
        is performed during the process of which many coefficients, generally
        the coefficients with higher frequency are changed to zero. This
        quantization is a lossy process, which means the inverse transformation
        of the quantized matrix gives a similar matrix but not the original one,
        however, this doesn’t significantly alter the image quality. Non-linear
        quantization of Direct Cosine coefficients is also possible with
        <span class="caps">MPEG</span>-4. <span class="caps">MPEG</span>-4
        employs Twin Vector Quantization (<span class="caps">VQF</span>) which
        considers time domain as one of the dimensions. The matrix of quantized
        matrix is then itself compressed to obtain zeros on one corner of the
        matrix. Zigzagging is performed beginning from the corner opposite to
        where the zeros have been aligned. Zigzagging combines the coefficients
        into a string. The redundant consecutive zeros from the string are
        substituted with run-length codes which is the popular Run length
        Encoding (<span class="caps">RLE</span>) algorithm. Huffman Coding is
        then applied as a <span class="caps">VLC</span> to obtain smaller array
        of<br />&nbsp;numbers.
      </p>
      <p>
        H.264/<span class="caps">MPEG</span>-<span class="caps">AVC</span>
        employs Context-Adaptive Binary Arithmetic Coding (<span class="caps"
          >CABAC</span
        >) and Context-adaptive Variable-length Coding (<span class="caps"
          >CAVLC</span
        >) for variable-length coding. <span class="caps">CABAC</span> is used
        whenever higher compression is required and
        <span class="caps">CAVLC</span> is used in slower playback devices to
        increase the performance since it is a lower efficiency scheme. All
        H.264 profiles support <span class="caps">CAVLC</span> whereas only
        Baseline and Extended profiles do not support
        <span class="caps">CABAC</span>. So
        <span class="caps">CAVLC</span> support is seen everywhere in in all
        kinds of decoders like Blu-ray and <span class="caps">HD</span>
        <span class="caps">DVD</span> players.
        <span class="caps">CAVLC</span> is also supposed to be a superior
        technique than DivX, XviD and other <span class="caps">MPEG</span>-4
        <span class="caps">ASP</span> codecs. Although
        <span class="caps">CAVLC</span> may be used for coding transform
        coefficients, Exponential-Golomb Coding is used to code other syntax
        elements in the video&nbsp;stream.
      </p>
      <div
        name="Decoding/DecompressionofI-frames"
        data-unique="Decoding/DecompressionofI-frames"
      ></div>
      <h4>Decoding/Decompression of&nbsp;I-frames</h4>
      <p>
        The I-frames in <span class="caps">MPEG</span> video are required to be
        decoded in order to be played by the media player or the video broadcast
        receiver (e.g. television). The decoding process is more or less the
        inverse of the encoding process. The decoding process starts from the
        Huffman Decoding. Then Run Length Decoding is performed and the result
        is fed for Inverse Quantization. Quantization process being a lossy one,
        the matrix after inverse quantization during encoding is not exactly the
        same as the matrix before quantization during the encoding process. The
        inversely quantized matrix is then passed through Inverse Discrete
        Cosine Transform (<span class="caps">IDCT</span>) to obtain the
        macroblocks. The macroblocks are structured to obtain the I-frame which
        is very much similar to the I-frame where the compression&nbsp;started.
      </p>
      <div name="TemporalPrediction" data-unique="TemporalPrediction"></div>
      <h3>Temporal&nbsp;Prediction</h3>
      <p>
        Temporal prediction takes advantage of the fact that neighbor frames in
        a video have similar information. Temporal meaning relating to time,
        temporal redundancy removal is concerned with representing repeating
        information in consecutive or close frames only once by employing
        different algorithms. Temporal prediction involves coding of P-frames
        and&nbsp;B-frames.
      </p>
      <p>
        Temporal compression provides more compression than spatial compression
        as seen on I-frames, because very small information is required to
        specify the minor changes between the frames. Objects may differ with
        shift in position, rotation or intensity and the new object can be
        created just by knowing how different is it from the original object.
        Storing the original and changed object takes a lot more space than
        storing the original object and and just the&nbsp;difference.
      </p>
      <div
        name="EncodingofP-framesandB-frames"
        data-unique="EncodingofP-framesandB-frames"
      ></div>
      <h4>Encoding of P-frames and&nbsp;B-frames</h4>
      <p>
        Encoding of P-frames and encoding of B-frames are similar except that
        P-frames refer to the information in the previous I-frame or P-frame and
        B-frames refer to both the previous and next frames. As the first step,
        the previous frame is reconstructed for P-frame encoding and both
        previous and next frames are reconstructed for encoding of B-frames to
        <strong>obtain reference frame</strong>. The frame to be compressed is
        then <strong>segmented into macroblocks</strong>, say of block size 16
        by 16 pixels. The reference frame is
        <strong>searched for best match of the macroblocks</strong> for each
        macroblocks of the frame being compressed. Exhaustive search, 2-D
        Logarithmic search, or Three-Step Search (<span class="caps">TSS</span>)
        may be used to optimize the search. For most of the macroblocks, an
        exact match is found on the reference frame because two subsequent
        frames have very less change in their blocks. Since some components move
        in the frames, offset is calculated. A component may be<br />
        moving 15 pixels to the right and 9 pixels up. Such
        <strong>offset or shift is represented as ‘motion vector’</strong>,
        which is a two-dimensional vector. The offset and the motion vector is
        frequently zero because most blocks in subsequent frames are consistent.
        Offset value is not always enough to describe the change in frames
        because sometimes not just the placement of macroblock changes but their
        appearance too. This change can be measured by taking into account each
        pixels of the two macroblocks and
        <strong>finding the difference between corresponding pixels</strong>.
        The difference is computed as coefficient values which is then obtained
        as string called <strong>residual</strong>. This residual value
        undergoes <strong>compression</strong>. The residual value which is in
        spatial domain is transformed using <span class="caps">DCT</span> of two
        dimensions. The transformation coefficients are then quantized to reduce
        their bit size, most of them quantized to zero. The quantized
        coefficients are passed through entropy coding for further compression.
        The final information is then combined with the motion vector along with
        other information like frame types, etc. to obtain the final difference
        known as <strong>prediction error</strong> between the&nbsp;frames.
      </p>
      <p>
        The above explained method is the most common method of motion
        estimation indifferent video coding standards, also seen on
        <span class="caps">MPEG</span>. This technique has been given several
        names such as Block-Matching Algorithm (<span class="caps">BMA</span>)
        or Block Matching Compensation (<span class="caps">BMC</span>). This
        block-based method utilizes algorithms like Mean of Squared Error (<span
          class="caps"
          >MSE</span
        >), Matching Pel Count (<span class="caps">MPC</span>), Mean of Absolute
        Difference (<span class="caps">MAD</span>), Sum of Absolute Difference
        (<span class="caps">SAD</span>), etc. <span class="caps">SAD</span> is
        used in <span class="caps">MPEG</span> technology to get the variation
        of macroblock matches using polygons of modified&nbsp;blocks.
      </p>
      <p>
        Instead of basing the blocks on integer values, half-pels can also be
        taken as the basic unit which may increase the compression ratio but
        this eats a lot more computational resources. Several other methods
        exist for motion estimation and compensation like Pel-Recursive
        Algorithm (<span class="caps">PRA</span>), phase correlations, Bayesian
        estimations, etc. But block-based compensation is believed to be the
        most efficient&nbsp;one.
      </p>
      <p>
        Older <span class="caps">MPEG</span> standards use fixed block size for
        the motion estimation and compensation process. Newer standards like
        <span class="caps">MPEG</span>-4 Part 2,
        <span class="caps">MPEG</span>-4 <span class="caps">AVC</span> use
        dynamically selected size of the blocks. This method is known as
        variable block-size motion compensation (<span class="caps">VBSMC</span
        >). This enables the encoder to use larger or smaller block size
        whichever is more efficient. Larger block size can decrease the bits
        required to represent the motion vector whereas smaller block size may
        allow for more precise prediction error.
        <span class="caps">MPEG</span>-4 even allows wavelet transforms instead
        of <span class="caps">DCT</span> during the conversion of spatial
        variations to<br />
        functional&nbsp;variations.
      </p>
      <div
        name="DecodingofDeltaFrames"
        data-unique="DecodingofDeltaFrames"
      ></div>
      <h4>Decoding of Delta&nbsp;Frames</h4>
      <p>
        Encoding of delta frames, i.e. P-frames and B-frames involves
        computation of delta factors which are the displacements of macroblocks
        and the residual values. During the process of decoding these factors
        are applied on the reference frame to obtain the candidate frame which
        can then be displayed. Since the residual value goes compression during
        encoding it has to be decoded using entropy decoding, inverse
        quantization and <span class="caps">IDCT</span>. This decompressed
        coefficient of residual and the motion vector gives the prediction error
        or difference between reference and candidate frame. So, adding this
        difference to the reference frame gives us the required candidate frame
        which is not exactly the same frame before encoding due to lossy
        algorithms used but is of considerably good&nbsp;quality.
      </p>
      <p>
        <span class="caps">MPEG</span> videos are not suitable for editing
        because of the presence of the reference frames since P-frames and
        B-frames depend upon I-frames and other P-frames for being decoded.
        Cutting a frame could break other frames which depend upon it. Formats
        specially created for editing videos keep all frames as independent
        I-frames. The interdependence of frames is also the reason why all
        <span class="caps">MPEG</span> decoders are forced to have encoders
        built in within&nbsp;themselves.
      </p>
      <div name="CompressionofAudio" data-unique="CompressionofAudio"></div>
      <h3>Compression of&nbsp;Audio</h3>
      <p>
        Audio in <span class="caps">MPEG</span> is compressed with techniques
        like sub-band filtering, psychoacoustic model and quantization of
        digital audio. Audio signals are divided into frequency sub-bands using
        convolution filters. There are 32 critical sub-bands available.
        Psychoacoustics utilizes the aspects and processes like limits of
        perception, masking effects and sound&nbsp;localization.
      </p>
      <div
        name="QuantizationofDigitalAudio"
        data-unique="QuantizationofDigitalAudio"
      ></div>
      <h4>Quantization of Digital&nbsp;Audio</h4>
      <p>
        Quantization of digital audio means converting of sound waves to a
        distribution of individual samples each having unique magnitude of
        amplitude. Bit depth is what is used to define the range of levels of
        amplitude. An 8-bit quantization means there are total of 256 possible
        values for the amplitude levels whereas 16-bit quantization means there
        can be total of 65,536 possible values of amplitude. Autocorrecting
        music tracks is also done with quantization in which the beats are
        distributed evenly to remove errors on timing by analyzing and
        stretching in&nbsp;time.
      </p>
      <p>
        <span class="caps">MDCT</span> (Modified Discrete Cosine Transform) is a
        variant of <span class="caps">DCT</span>-<span class="caps">IV</span> in
        which the various transforms are overlapped.
        <span class="caps">MDCT</span> is used in audio compression in the
        <span class="caps">MPEG</span>-1 Audio Layer 3 and
        <span class="caps">MPEG</span>-2 Audio Layer 3, i.e.
        <span class="caps">MP3</span> as well as in
        <span class="caps">AAC</span> and Vorbis&nbsp;encoding.
      </p>
      <div name="VBRandCBR" data-unique="VBRandCBR"></div>
      <h4><span class="caps">VBR</span> and <span class="caps">CBR</span></h4>
      <p>
        With <span class="caps">VBR</span> (Variable Bit Rate), higher bit rate
        may be assigned to the segments with higher complexity of audio or video
        file and lower for less complex segments. The bitrate for the whole file
        is represented as the average bitrate. In contrast, in
        <span class="caps">CBR</span> (Constant Bit Rate), all segments are
        given the same bit-rate. <span class="caps">VBR</span> provides more
        flexibility, accuracy and quality whereas
        <span class="caps">CBR</span> provides more compatibility with devices,
        software and&nbsp;connections.
      </p>
      <div
        name="ImplementationsofMPEG"
        data-unique="ImplementationsofMPEG"
      ></div>
      <h2>Implementations of <span class="caps">MPEG</span></h2>
      <div name="Codecs" data-unique="Codecs"></div>
      <h3>Codecs</h3>
      <p>
        Most televisions, multimedia players have support for decoding
        <span class="caps">MPEG</span>. Several codecs are available for
        different operating systems. A codec (compressor-decompressor) is a
        software or hardware that can encode/compress and/or decode/decompress
        digital stream of data. A software codec may not be a stand-alone
        program but just a library or module. Xvid is an example of codec which
        is the open-source codec that implements the
        <span class="caps">MPEG</span>-4 standard. FFmpeg is one of the most
        popular projects for producing free audio/video codec libraries for
        <span class="caps">MPEG</span>. Interestingly, FFmpeg uses this zigzag
        pattern used for entropy encoding of
        <span class="caps">MPEG</span> videos in their&nbsp;logo.
      </p>
      <p></p>
      <center>
        <br />
        <img
          alt="FFmpeg Logo showing zigzag pattern"
          src="/media/mpeg/ffmpeg.jpg"
        />
        <b>Figure 3.5: FFmpeg Logo showing zigzag pattern</b>
      </center>
      <p></p>
      <div name="MP3" data-unique="MP3"></div>
      <h3><span class="caps">MP3</span></h3>
      <p>
        <span class="caps">MP3</span> is a popular name for
        <span class="caps">MPEG</span>-1 and <span class="caps">MPEG</span>-2
        Audio Layer <span class="caps">III</span>. It is the most widely used
        audio encoding format. <span class="caps">MP3</span> standard was
        finalized in 1992 and released in 1993. <span class="caps">MP3</span> is
        a lossy format. It supports both <span class="caps">CBR</span> (Constant
        Bit Rate) and <span class="caps">VBR</span> (Variable Bit Rate)
        encoding. <span class="caps">MP3</span> files usually have ‘.mp3′ file
        extension and their standard <span class="caps">MIME</span> type is
        ‘audio/mpeg’. <span class="caps">MP3</span> has support for
        <span class="caps">ID3</span> and other kinds of tags for storing
        metadata and <span class="caps">DRM</span> information of the audio
        file. The <span class="caps">MP3</span> encoding format is patented.
        <span class="caps">MP3</span> is the most popular audio file format and
        is used for music tracks, online streaming, audio recording,&nbsp;etc.
      </p>
      <div name="MP4" data-unique="MP4"></div>
      <h3><span class="caps">MP4</span></h3>
      <p>
        <span class="caps">MP4</span> is a common name for
        <span class="caps">MPEG</span>-4 Part 14.
        <span class="caps">MP4</span> is a container for digital video and audio
        streams. <span class="caps">MP4</span> files can also contain subtitles,
        images and hint tracks. The hint track is what makes
        <span class="caps">MP4</span> easily possible to be streamed over the
        internet. <span class="caps">MP4</span> encoding is specified in the
        standard <span class="caps">ISO</span>/<span class="caps">IEC</span>
        14496-14. It is heavily influenced from the QuickTime File Format.
        <span class="caps">MP4</span> files are represented with the file
        extension&nbsp;‘.mp4′.
      </p>
      <div name="ApplicationsofJPEG" data-unique="ApplicationsofJPEG"></div>
      <h2>Applications of <span class="caps">JPEG</span></h2>
      <p>
        <span class="caps">MPEG</span>, being the most popular video coding
        standard, has very wide range of&nbsp;applications.
      </p>
      <div
        name="TelevisionandBroadcasting"
        data-unique="TelevisionandBroadcasting"
      ></div>
      <h3>Television and&nbsp;Broadcasting</h3>
      <p>
        All terrestrial, cable or broadcasting television technologies like
        <span class="caps">DBS</span> (Direct Broadcast Satellite),
        <span class="caps">DVB</span> (Digital Video Broadcasting),
        <span class="caps">ISDB</span>-T, <span class="caps">HDTV</span> (High
        Definition Television), <span class="caps">CATV</span> (Cable
        Televisions) depend on <span class="caps">MPEG</span>. Most terrestrial
        television systems use <span class="caps">MPEG</span>-2 although some
        use <span class="caps">MPEG</span>-1 for certain purposes.
        <span class="caps">ATSC</span> (Advanced Television Systems Committee)
        have also standardized <span class="caps">MPEG</span>-2 as the official
        encoding format. Smart Television systems like Apple
        <span class="caps">TV</span> also support
        <span class="caps">MPEG</span>-4 video up to 2.5&nbsp;Mbps.
      </p>
      <div
        name="Internet,Mobile,MultimediaandGaming"
        data-unique="Internet,Mobile,MultimediaandGaming"
      ></div>
      <h3>Internet, Mobile, Multimedia and&nbsp;Gaming</h3>
      <p>
        <span class="caps">MPEG</span> is also very popular with online
        streaming. Since bandwidth is an important factor in internet,
        <span class="caps">MPEG</span> format is usually chosen for its better
        compression. It is also gaining more popularity in mobile multimedia
        because of its smaller size. Motion pictures in most video games are
        also rendered using <span class="caps">MPEG</span>.
      </p>
      <div
        name="RecordingandCommunication"
        data-unique="RecordingandCommunication"
      ></div>
      <h3>Recording and&nbsp;Communication</h3>
      <p>
        Varieties of digital camcorders and video recorders use
        <span class="caps">MPEG</span> as the default format for recording
        videos. Products like <span class="caps">XDCAM</span> implement in the
        standard in their own different ways. Different communication activities
        like video conferencing and video calling also utilize
        <span class="caps">MPEG</span>.
      </p>
      <div
        name="StorageandDistribution"
        data-unique="StorageandDistribution"
      ></div>
      <h3>Storage and&nbsp;Distribution</h3>
      <p>
        <span class="caps">MPEG</span>-1 is used for VCDs (Video CDs). The very
        popular <span class="caps">DVD</span> videos are possible only because
        of <span class="caps">MPEG</span>-2. The latest Blu-ray technology also
        utilizes <span class="caps">MPEG</span>-2 Part 2 and H.264/<span
          class="caps"
          >MPEG</span
        >-4 <span class="caps">AVC</span>.
      </p>
      <div name="LimitationsofMPEG" data-unique="LimitationsofMPEG"></div>
      <h2>Limitations of <span class="caps">MPEG</span></h2>
      <p>
        Newer standards of the <span class="caps">MPEG</span> family keep being
        published to overcome the limitations of the older one. The latest
        popular standard has many limitations. The current downsides of the
        format have been listed below:<br />
        • <span class="caps">MPEG</span> being a lossy compression doesn’t
        preserve all minute data.<br />
        • The compression flow involves many encoding and transformation
        algorithms which could be difficult to perceive and implement.<br />
        • <span class="caps">AAC</span> and <span class="caps">OGG</span> Vorbis
        provide better audio encoding than <span class="caps">MPEG</span> audio
        layers.<br />
        • <span class="caps">MPEG</span> is not the best file format for online
        streaming and therefore is slowly<br />
        being replaced by other file formats like
        <span class="caps">FLV</span> (Flash Video).<br />
        • Overlapped Block Motion Compensation (<span class="caps">OBMC</span>)
        is not allowed in profiles in all parts of
        <span class="caps">MPEG</span>-4 standards.<br />
        • <span class="caps">MPEG</span>-4 has a short header format.<br />
        • Initial parts of <span class="caps">MPEG</span>-4 couldn’t provide
        significant improvement in bit-rate that caused users to be attracted to
        other encoding formats.<br />
        • Since <span class="caps">MPEG</span> is a patented format, non-free
        <span class="caps">MPEG</span> encoders and decoders may be subject to
        royalty fee.<br />
        • End-users may have to bear the royalty when using free software like
        <span class="caps">VLC</span> for encoding and decoding&nbsp;purposes.
      </p>
      <div name="FutureofMPEG" data-unique="FutureofMPEG"></div>
      <h2>Future of <span class="caps">MPEG</span></h2>
      <p>
        Huge improvements in video encoding have been made since the
        introduction of <span class="caps">MPEG</span>-1. Every new
        specification released gives better compression of data and allows more
        features for video technology. The latest widespread standard
        <span class="caps">MPEG</span>-4 provides lot more flexibility with
        support for internal subtitles and hint tracks. Online streaming and
        other certain needs of the modern days may be fulfilled by it is not the
        most optimal format. It requires lot more improvement to win back the
        video streaming in internet from other encoding formats like
        <span class="caps">FLV</span>. With booming of Internet and Smart
        <span class="caps">TV</span> systems like Google
        <span class="caps">TV</span> and Apple
        <span class="caps">TV</span> which promise to provide a lot more
        flexibility for the users, a better standard is required as the
        currently standardized specifications of the
        <span class="caps">MPEG</span> family may not be enough to support this
        flexibility. Also, with portable devices gaining more popularity, the
        standard has to be portable with easy support for wide array of devices.
        <span class="caps">MP4</span> may be replacing mobile video coding
        technologies like <span class="caps">3GP</span> but it has a lot more
        space for improvement. Use of <span class="caps">MPEG</span> is not
        appropriate for all gaming and interactive contents. More profiles have
        to be added to the standard. Also, there is a room for better
        compression in&nbsp;audio.
      </p>
      <p>
        <span class="caps">MPEG</span>-4 Part 28 which is under development has
        lots of improvements to bring. <span class="caps">MPEG</span>
        <span class="caps">DASH</span> led by employees of Microsoft is also
        believed to overcome many limitation of
        <span class="caps">MPEG</span>-4, as a common adaptive-optimized
        encoding format. Despite being one of the most popular video encoding
        standard, <span class="caps">MPEG</span> falls short in may applications
        and its future is uncertain unless huge improvement and flexibility have
        been added to&nbsp;it.
      </p>
      <p>
        <b><span class="caps">REFERENCES</span></b>
      </p>
      <p>
        William B. Pennebaker, Joan L. Mitchell, 1992.
        <span class="caps">JPEG</span>: <em>Still Image Data Compression</em>
        <em
          >Standard (Digital Multimedia Standards) (Digital Multimedia Standards
          S.)</em
        >. 1st Edition.&nbsp;Springer.
      </p>
      <p>
        Vasudev Bhaskaran, 1997.
        <em>Image and Video Compression Standards: Algorithms and</em>
        <em
          >Architectures (The Springer International Series in Engineering and
          Computer Science)</em
        >. 2nd Edition.&nbsp;Springer.
      </p>
      <p>
        Jerry D. Gibson, 1998.
        <em
          >Digital Compression for Multimedia: Principles
          <span class="amp">&amp;</span> Standards</em
        >
        <em
          >(The Morgan Kaufmann Series in Multimedia Information and
          Systems)</em
        >. 1 Edition. Morgan&nbsp;Kaufmann.
      </p>
      <p>
        David Salomon, 2004. <em>Data Compression: The Complete Reference</em>.
        3rd Edition.&nbsp;Springer.
      </p>
      <p>
        Chad Fogg, 1996.
        <em
          ><span class="caps">MPEG</span> Video Compression Standard (Digital
          Multimedia Standards </em
        ><em>Series)</em>. 1 Edition.&nbsp;Springer.
      </p>
      <p>
        Wallace, Gregory K.,
        <em
          >The <span class="caps">JPEG</span> Still Picture Compression
          Standard, Communications of</em
        >
        <em>the <span class="caps">ACM</span></em
        >, April 1991 (Vol. 34, No. 4), pp.&nbsp;30-44.
      </p>
      <p>
        Neelamani, R., de Queiroz, R., Fan, Z., Dash, S.,
        <span class="amp">&amp;</span> Baraniuk, R.,
        <em><span class="caps">JPEG</span> compression</em>
        <em>history estimation for color images</em>,
        <span class="caps">IEEE</span> Trans. on Image Processing, June 2006
        (Vol 15, No&nbsp;6).
      </p>
      <p>
        Ja-Ling Wu, 2002. ‘<span class="caps">MPEG</span>-1 Coding Standard’,
        <em><span class="caps">DSP</span> (Digital Signal Processing)</em>.
        [online via internal <span class="caps">VLE</span>] Communications and
        Multimedia Library, Available at: &lt;<a
          href="http://web.archive.org/web/20170930220816/http://www.cmlab.csie.ntu.edu.tw/cml/dsp/training/coding/mpeg1/"
          title="http://www.cmlab.csie.ntu.edu.tw/cml/dsp/training/coding/mpeg1/"
          target="_blank"
          >http://www.cmlab.csie.ntu.edu.tw/cml/dsp/training/coding/mpeg1/</a
        >&gt;. [Accessed 17 November&nbsp;2011].
      </p>
      <p>
        Prof. Tsuhan Chen, 1999. ‘<span class="caps">MPEG</span> Audio’, 18-796
        (<em>Multimedia Communications</em>), [online via internal
        <span class="caps">VLE</span>] Carneggie Melon University, Available at:
        &lt;<a
          href="http://web.archive.org/web/20170930220816/http://www.ece.cmu.edu/~ece796/mpegaudio.pdf"
          title="http://www.ece.cmu.edu/~ece796/mpegaudio.pdf"
          target="_blank"
          >http://www.ece.cmu.edu/~ece796/mpegaudio.pdf</a
        >&gt;. [Accessed 19 November&nbsp;2011].
      </p>
      <p>
        Avila A., n.d. ‘History of <span class="caps">MPEG</span>’,
        <span class="caps">IS224</span> (<em
          >Strategic Computing and Communications Technlology</em
        >), [online via internal <span class="caps">VLE</span>] School of
        Information Management and Systems, California, Available at: &lt;<a
          href="http://web.archive.org/web/20170930220816/http://www2.sims.berkeley.edu/courses/is224/s99/GroupG/report1.html"
          title="http://www2.sims.berkeley.edu/courses/is224/s99/GroupG/report1.html"
          target="_blank"
          >http://www2.sims.berkeley.edu/courses/is224/s99/GroupG/report1.html</a
        >&gt;. [Accessed 15 November&nbsp;2011].
      </p>
      <p>
        Berkeley Design Technology, Inc., 2006.
        <em>Introduction to Video Compression</em>, April 13 [online] Electronic
        Engineering Times. Available at &lt;<a
          href="http://web.archive.org/web/20170930220816/http://www.eetimes.com/design/signal-processing-dsp/4013042/Introduction-to-video-compression"
          title="http://www.eetimes.com/design/signal-processing-dsp/4013042/Introduction-to-video-compression"
          target="_blank"
          >http://www.eetimes.com/design/signal-processing-dsp/4013042/Introduction-to-video-compression</a
        >&gt;. [Accessed 16 November&nbsp;2011].
      </p>
      <p>
        Michael Niedermayer, 2005. 15 reasons why
        <span class="caps">MPEG4</span> sucks.
        <em>Liar of the Multimedia Guru</em>, [blog] 28 November, Available at:
        &lt;<a
          href="http://web.archive.org/web/20170930220816/http://guru.multimedia.cx/15-reasons-why-mpeg4-sucks/"
          title="http://guru.multimedia.cx/15-reasons-why-mpeg4-sucks/"
          target="_blank"
          >http://guru.multimedia.cx/15-reasons-why-mpeg4-sucks/</a
        >&gt; [Accessed 22 November&nbsp;2011].
      </p>
      <p>
        <span class="caps">P.N.</span> Tudor, December 1995.
        <span class="caps">MPEG</span>-2 Video Compression,
        <em>Electronics and Communication Engineering Journal</em>, [online],
        Available at: &lt;<a
          href="http://web.archive.org/web/20170930220816/http://www.bbc.co.uk/rd/pubs/papers/paper_14/paper_14.shtml"
          title="from archive.org"
          target="_blank"
          >http://www.bbc.co.uk/rd/pubs/papers/paper_14/paper_14.shtml</a
        >&gt; [Accessed 18 November&nbsp;2011].
      </p>
      <p>
        Ebrahimi, T.,Horne, C., 2010.
        <em
          ><span class="caps">MPEG</span>-4 Natural Video Coding – An
          overview</em
        >, Swiss Federal Institute of Technology [online] 04 February, Available
        at: &lt;<a
          href="http://web.archive.org/web/20170930220816/http://mpeg.chiariglione.org/tutorials/papers/icj-mpeg4-si/07-natural_video_paper/7-natural_video_paper.htm"
          title="from archive.org"
          target="_blank"
          >http://mpeg.chiariglione.org/tutorials/papers/icj-mpeg4-si/07-natural_video_paper/7-natural_video_paper.htm</a
        >&gt;
      </p>
      <p>
        Bretl W., Fimoff M., 2000.
        <em><span class="caps">MPEG2</span> Tutorial</em> [online] 15 January,
        Available at: &lt;<a
          href="http://web.archive.org/web/20170930220816/http://www.bretl.com/mpeghtml/MPEGindex.htm"
          title="http://www.bretl.com/mpeghtml/MPEGindex.htm"
          target="_blank"
          >http://www.bretl.com/mpeghtml/MPEGindex.htm</a
        >&gt; [Accessed 18 November&nbsp;2011].
      </p>
      <p><b>Images</b></p>
      <p>
        DePiero, F. W., 2011.
        <em
          >2D <span class="caps">DCT</span> and
          <span class="caps">JPEG</span></em
        >
        [image online] Available at: &lt;<a
          href="http://web.archive.org/web/20170930220816/https://courseware.ee.calpoly.edu/~fdepiero/STL/STL%20-%20Image%20-%202D%20DCT%20and%20JPEG.htm"
          title="https://courseware.ee.calpoly.edu/~fdepiero/STL/STL%20-%20Image%20-%202D%20DCT%20and%20JPEG.htm"
          target="_blank"
          >https://courseware.ee.calpoly.edu/~fdepiero/<span class="caps"
            >STL</span
          >/<span class="caps">STL</span>%20-%20Image%20-%202D%<span
            class="caps"
            >20DCT</span
          >%20and%<span class="caps">20JPEG</span>.htm</a
        >&gt;
      </p>
      <p>
        Chan, G., 2010. <em>Towards Better Chroma Subsampling</em> [image
        online] Available at: &lt;<a
          href="http://web.archive.org/web/20170930220816/http://www.glennchan.info/articles/technical/chroma/chroma1.htm"
          title="http://www.glennchan.info/articles/technical/chroma/chroma1.htm"
          target="_blank"
          >http://www.glennchan.info/articles/technical/chroma/chroma1.htm</a
        >&gt; [Accessed 14 November&nbsp;2011].
      </p>
      <p>
        Luke, 2002. <em>Frame fields</em> [image online] Available at: &lt;<a
          href="http://web.archive.org/web/20170930220816/http://neuron2.net/LVG/framefields.gif"
          title="http://neuron2.net/LVG/framefields.gif"
          target="_blank"
          >http://neuron2.net/<span class="caps">LVG</span>/framefields.gif</a
        >&gt; [Accessed 14 November&nbsp;2011].
      </p>
      <p>
        Apple, Inc. n.d. <em>Open and Closed GOPs</em> [image online] Available
        at: &lt;<a
          href="http://web.archive.org/web/20170930220816/http://documentation.apple.com/en/compressor/usermanual/Art/L00/L0006_IBBP.png"
          title="http://documentation.apple.com/en/compressor/usermanual/Art/L00/L0006_IBBP.png"
          target="_blank"
          >http://documentation.apple.com/en/compressor/usermanual/Art/L00/L0006_IBBP.png</a
        >&gt; [Accessed 17 November&nbsp;2011].
      </p>
      <p>
        <b><span class="caps">ACKNOWLEDGEMENTS</span></b
        ><br />
        I would like to show my gratitude to the contributors of Wikipedia and
        the World Wide Web. Also, huge thanks goes to the lecturer Mr. Ayush
        Subedi and my friend Binayak&nbsp;Upadhaya.
      </p>
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

<style scoped>
img{
  display: block;
  margin-bottom: .5em;
}
</style>
