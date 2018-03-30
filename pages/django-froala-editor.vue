<template>
    <div>
        <BlogTitle title="Django package for Froala WYSIWYG Editor" published="14 Jul 2014"/>

        <div class="content" itemprop="articleBody">

            <div>
                <span class="hl">django-froala-editor</span> package helps integrate
                <a target="_blank" rel="noopener noreferrer"
                   href="https://froala.com/wysiwyg-editor/">Froala WYSIWYG HTML editor</a>
                with Django.
            </div>

            <h2 id="gettingstarted">Getting started</h2>

            <ol>
                <li><p>Install the package:</p>

                    <p><code>pip install django-froala-editor</code></p>

                    <p>if not update in pypi use this</p>

                    <p><code>pip install https://github.com/froala/django-froala-editor/archive/master.zip</code></p></li>
            </ol>

            <p>OR</p>

            <p>Add the directory <code>froala_editor</code> from this repo to your Python path.</p>

            <ol>
                <li><p>Add <code>froala_editor</code> to INSTALLED_APPS in <code>settings.py</code>.</p></li>

                <li><p>Add the following line to <code>urlpatterns</code> in your application's <code>urls.py</code>.</p></li>
            </ol>

            <pre><code class="python language-python">  url(r'^froala_editor/', include('froala_editor.urls')),
</code></pre>

            <p>
                Skip this url inclusion if you don't want image and file upload inside WYSIWYG editor. Images from URLs can still be embedded.</p>

            <h2 id="usage">Usage</h2>

            <pre><code class="python language-python">from django.db import models
from froala_editor.fields import FroalaField

class Page(models.Model):
  content = FroalaField()
</code></pre>

            <p><code>FroalaField</code> uses <code>froala_editor.widgets.FroalaEditor</code>
                as its widget. You may directly use this widget with any of your forms.py:</p>

            <pre><code class="python language-python">from django import forms
from froala_editor.widgets import FroalaEditor

class PageForm(forms.ModelForm):
  content = forms.CharField(widget=FroalaEditor)
</code></pre>

            <h3 id="usageoutsideadmin">Usage outside admin</h3>

            <p>When used outside the Django admin, the media files are to be manually included in the template. Inside the <code>&lt;head&gt;</code>
                section or before the form is rendered, include:</p>

            <pre><code class="python language-python">{<i></i>{form.media}}
</code></pre>

            <p>
                In case of jQuery conflict (when your project template already has jQuery), you need to include the following files instead of <code>{<i></i>{ form.media}}</code>
                plus the static files for theme (if not default) and required plugins.</p>

            <pre><code class="python language-python">&lt;link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" type="text/css" media="all" rel="stylesheet" /&gt;
&lt;link href="{<i></i>{STATIC_URL}}froala_editor/css/froala_editor.min.css" type="text/css" media="all" rel="stylesheet" /&gt;
&lt;link href="{<i></i>{STATIC_URL}}froala_editor/css/froala_style.min.css" type="text/css" media="all" rel="stylesheet" /&gt;
&lt;script type="text/javascript" src="{<i></i>{STATIC_URL}}froala_editor/js/froala_editor.min.js"&gt;&lt;/script&gt;
</code></pre>

            <p>Or simply, you may use the following in your <code>settings.py</code>
                if you don't want Froala to include jQuery by itself, thus preventing any conflicts:</p>

            <pre><code class="python language-python">FROALA_INCLUDE_JQUERY = False
</code></pre>

            <h3 id="options">Options</h3>

            <p>Froala Editor provides several options for customizing the editor. See <a
                    href="https://froala.com/wysiwyg-editor/docs">https://froala.com/wysiwyg-editor/docs</a>
                for all available options.
                You can provide a dictionary of these options as <code>FROALA_EDITOR_OPTIONS</code>
                setting in <code>settings.py</code>. These options would then be used for all instances of the WYSIWYG editor in the project.
            </p>

            <p>Options for individual field can also be provided via <code>FroalaField</code> or <code>FroalaEditor</code>
                class. This overrides any options set via <code>FROALA_EDITOR_OPTIONS</code>:</p>

            <pre><code class="python language-python">from django.db import models
from froala_editor.fields import FroalaField

class Page(models.Model):
  content = FroalaField(options={
    'toolbarInline': True,
  })
</code></pre>

            <pre><code class="python language-python">from django import forms
from froala_editor.widgets import FroalaEditor

class PageForm(forms.ModelForm):
  content = forms.TextField(widget=FroalaEditor(options={
    'toolbarInline': True,
  }))
</code></pre>

            <h3 id="theme">Theme</h3>

            <p>You may provide the name of the theme to be used as <code>theme</code> argument to <code>FroalaField</code>
                or <code>FroalaEditor</code>.</p>

            <pre><code class="python language-python">from django.db import models
from froala_editor.fields import FroalaField

class Page(models.Model):
  content = FroalaField(theme='dark')
</code></pre>

            <p><code>FROALA_EDITOR_THEME</code> can be set in <code>settings.py</code>
                making all instances of the editor to use a theme. However, <code>theme</code>
                argument in <code>FroalaField</code> and <code>FroalaEditor</code> overrides <code>FROALA_EDITOR_THEME</code>. Using a theme named 'dark' would require the existence of the file <code>froala_editor/static/froala_editor/css/themes/dark.min.css</code>. Available themes are: 'dark', 'gray' and 'red'.
            </p>

            <h3 id="plugins">Plugins</h3>

            <p>
                Froala Editor comes with the plugins: block style, text &amp; background colors, font size, font family, insert video, insert table, media manager, lists and file upload. By default, all plugins are enabled by default in this package. See <a
                    href="https://froala.com/wysiwyg-editor/docs/plugins">https://froala.com/wysiwyg-editor/docs/plugins</a>
                for all available plugins.</p>

            <p><code>FROALA_EDITOR_PLUGINS</code> can be set in <code>settings.py</code>
                to tell which plugins should all instances of Froala Editor be using. By default, it is</p>

            <pre><code class="python language-python">FROALA_EDITOR_PLUGINS = ('align', 'char_counter', 'code_beautifier' ,'code_view', 'colors', 'draggable', 'emoticons',
        'entities', 'file', 'font_family', 'font_size', 'fullscreen', 'image_manager', 'image', 'inline_style',
        'line_breaker', 'link', 'lists', 'paragraph_format', 'paragraph_style', 'quick_insert', 'quote', 'save', 'table',
        'url', 'video')
</code></pre>

            <p>The usage of <code>plugins</code> argument with <code>FroalaEditor</code> or <code>FroalaField</code>
                overrides this for that particular instance.</p>

            <pre><code class="python language-python">from django.db import models
from froala_editor.fields import FroalaField

class Page(models.Model):
  content = FroalaField(plugins=('font_size', 'font_family'))
</code></pre>

            <h3 id="imageupload">Image upload</h3>

            <p><code>FroalaEditor</code> and <code>FroalaField</code>
                optionally take in a boolean value for <code>image_upload</code>
                argument to enable or disable image uploads. Image uploads are enabled by default if the urls of this package are included in your urls.py.
            </p>

            <p>You can use <code>FROALA_UPLOAD_PATH</code> setting in <code>settings.py</code>
                to change the path where uploaded files are stored within the <code>MEDIA_ROOT</code>. By default, <code>uploads/froala_editor/images</code>
                is used for storing uploaded images.</p>

            <h3 id="includejquery">Include jQuery</h3>

            <p>jQuery is included by default in form media. If you don't want to include jQuery, you may pass <code>include_jquery=False</code>
                to <code>FroalaEditor</code> or <code>FroalaField</code>. <code>FROALA_INCLUDE_JQUERY</code>
                can be also set in <code>settings.py</code> for project wide effects.</p>

            <h3 id="othersettings">Other Settings</h3>

            <p>Using <code>USE_FROALA_EDITOR = False</code>
                in your Django settings disables Froala editor and uses a TextArea instead.</p>

            <h2 id="license">License</h2>

            <p>
                This package is available under BSD License. However, in order to use Froala WYSIWYG HTML Editor plugin you should purchase a license for it.</p>

            <p>See <a target="_blank" rel="noopener noreferrer" href="https://froala.com/wysiwyg-editor/pricing">https://froala.com/wysiwyg-editor/pricing</a>
                for licensing the Froala Editor.</p>

            <p>If you bought a license and got your key, the easiest way to implement it is to put it into the <code>FROALA_EDITOR_OPTIONS</code>
                setting in <code>settings.py</code>:</p>

            <pre>
FROALAEDITOROPTIONS = {
  'key': 'our key goes here',
  # other options
  # ...
}</pre>
        </div>
    </div>
</template>

<script>
  import BlogTitle from '../components/BlogTitle.vue';

  export default {
    mixins: [BlogTitle],
    components: {BlogTitle},
  }
</script>