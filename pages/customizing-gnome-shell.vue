<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Customizing Gnome Shell"
      published="09 Aug 2011"
      archived="true"
    />
    <div class="content" itemprop="articleBody">
      <p>
        Gnome shell refers to the UI of Gnome 3, the
        latest incarnation of Gnome desktop environment. The first thing a gnome
        2 user notices on a gnome shell is the lack of familiar things. Windows
        on Gnome shell have no minimize and maximize buttons by default, only
        one lonely close button. The day and current time placed in the middle
        of the shell panel on top looks awkward. There are no such Applications,
        Places or System menu. Clicking on the Activities button on top left
        gives you an overview of currently running windows which can also be
        achieved by pressing the Super/System key (the one with Windows logo) or
        the Alt+F1 combination. You can click on Applications to reveal
        applications installed on your system, categories are available on
        right. I am very much thankful to them for keeping the Alt+F2 (for run
        command prompt) and Alt+Tab (for switching between applications)
        functionalities intact.
      </p>
      <p>
        They have added
        <a
          href="https://wiki.gnome.org/Projects/GnomeShell/LookingGlass"
          rel="noopener noreferrer"
          target="_blank"
          >Looking Glass</a
        >
        which one might use to do simple arithmetic calculations at least if not
        debugging gnome shell extensions and things.
      </p>
      <p>
        Double clicking on the titlebar maximizes the window. On a default
        system, minimizing is possible only with a right click on the title bar.
        The concept of minimizing has gone with Gnome 3, Windows are hidden
        instead. Ctrl+Alt+D doesnt show you your desktop, wait, there is no such
        traditional desktop folder in this environment. Ctrl+Alt+(Left/Right)
        doesnt switch workspaces as in Gnome 2, Ctrl+Alt+(Up/Down) does. More on
        keyboard shortcuts and components of the shell are documented here in
        the official cheat-sheet :
        <a
          href="https://wiki.gnome.org/Projects/GnomeShell/CheatSheet"
          rel="noopener noreferrer"
          target="_blank"
          >https://wiki.gnome.org/Projects/GnomeShell/CheatSheet</a
        >
      </p>
      <p>
        The User Menu exists on the top right of the screen which has the logout
        etcetera options. “Suspend” turns into “Power Off” as Alt key is
        pressed.
      </p>
      <p>
        Here are some gnome shell tips, tricks and customizations that might
        make you more comfortable with it and help you get adopted:
      </p>
      <ol class="pad">
        <li>
          Restart Gnome Shell Incase, gnome is giving problems or if you want to
          see the changes made: Alt+F2 to open run command prompt Press r and
          Enter You will be using this to see changes made by any of the
          following tweaks you would be applying.
        </li>
        <li>
          Install gnome-tweak-tool gnome-tweak-tool allows you to modify various
          gnome settings and behaviour.
          <pre
            class="language-bash"
          ><code class="su">yum install gnome-tweak-tool</code></pre>
          Then, execute <code>gnome-tweak-tool</code>. Go through the options
          and tweak Gnome to your feel. [E.g. <code>Shell</code> =>
          <code>Show Date in Clock</code> : ON]
        </li>
        <li>
          Adding Minimize and Maximize button to the title bar:
          <pre
            class="language-bash"
          ><code class="su">gconftool-2 -s -t string /desktop/gnome/shell/windows/button_layout "menu:minimize,maximize,close"</code></pre>
          OR
          <div>
            <code>Alt+F2</code> to open run command prompt
            <code>gnome-tweak-tool</code>
          </div>
          <div>
            Select <code>Shell</code> =>
            <code>Arrangement of buttons on the titlebar</code>:
            <code>All</code>.
          </div>
          Restart Gnome
        </li>
        <li>
          <div>Get your classic desktop back:</div>
          <div><code>Alt+F2</code> to open run command prompt</div>
          <div><code>gnome-tweak-tool</code></div>
          <div>
            Select <code>File Manager</code> =>
            <code>Have File Manager Handle the Desktop</code> :<code>ON</code>.
          </div>
          Restart Gnome.
        </li>
        <li>
          Use the following command to add/remove startup items:
          <code>gnome-session-properties</code>
        </li>
        <li>
          Switch to fallback mode Fallback mode in gnome shell gives you a
          UI similar to that of Gnome 2. Execute this
          in terminal:
          <pre class="language-bash"><code class="su">
          gsettings set org.gnome.desktop.session session-name gnome-fallback
          </code></pre>
          <div>
            OR <code>System Settings</code> =>
            <code>System Info</code> => <code>Graphics</code> =>
            <code>Forced Fallback Mode</code> : ON
          </div>
          <div>
            [Note that this is what you will be using to go back to normal mode
            with OFF flag]
          </div>
          [System Settings is available from User Menu on top right]
        </li>
        <li>
          Get a taskbar
          <div>
            Gnome shell has no taskbar on regular mode. You need to install a
            third party application that works as a taskbar.
            <code>tint2</code> is a nice light application for this purpose.
          </div>
          <pre
            class="language-bash"
          ><code class="su">yum install tint2</code></pre>
          See next step to set it to start automatically on every login.
        </li>
        <li>
          Adding applications on login:
          <div>We are setting tint2 to start on login.</div>
          <div>The technique is same for any other application.</div>
          <div>Execute <code>gnome-session-properties</code></div>
          <div>Add Name : <code>tint2</code></div>
          <div>Command : <code>tint2</code></div>
          <div>Description : <code>Shows taskbar</code></div>
        </li>
        <li>
          Customize the application menu.
          <div>
            Application called <code>alacarte</code> lets you edit, add or
            delete menu entries in gnome3.
          </div>
          <pre
            class="language-bash"
          ><code class="su">yum install alacarte</code></pre>
          Execute:
          <pre class="language-bash"><code class="prefix">alacarte</code></pre>
        </li>
        <li>
          Make the massive title bar smaller:
          <pre
            class="language-bash"
          ><code class="su">sed -i "/title_vertical_pad/s/value="[0-9]{1,2}"/value="0"/g" /usr/share/themes/Adwaita/metacity-1/metacity-theme-3.xml</code></pre>
          Restart Gnome (<code>Alt+F2</code> => <code>r</code>)
        </li>
        <li>
          More power options on user menu [EXTENSION]
          <div>
            Adds, “Power Off”, “Hibernate”, etc. options to the User Menu.
          </div>
          <pre
            class="language-bash"
          ><code class="su">yum install gnome-shell-extensions-alternative-status-menu</code></pre>
          OR: Download
          http://www.fpmurphy.com/gnome-shell-extensions/poweroptions-2.0.tar.gz
          <div>
            Extract its contents to
            <code>~/.local/share/gnome-shell/extensions/</code>
          </div>
          Restart Gnome
        </li>
        <li>
          Get sidebar docks for your favorites [EXTENSION]
          <div>
            If you want dock on gnome install this package -
            gnome-shell-extensions-dock.
          </div>
          <pre
            class="language-bash"
          ><code class="su">yum install gnome-shell-extensions-dock</code></pre>
          Restart gnome and docks shall appear! I prefer the next extension
          instead of this one, this one just eats extra space.
        </li>
        <li>
          Add your favorites to top panel like Quick Launch [EXTENSION]
          <div>
            Download
            http://www.fpmurphy.com/gnome-shell-extensions/panellaunchers.tar.gz
          </div>
          <div>
            Extract its contents to
            <code>~/.local/share/gnome-shell/extensions/</code>
          </div>
          Restart Gnome
        </li>
        <li>
          Add Places Menu on Gnome Panel [EXTENSION]
          <div>
            Adds Places, bookmarks and removable devices on a menu available
            from the Gnome panel.
          </div>
          <pre
            class="language-bash"
          ><code class="su">yum install gnome-shell-extensions-places-menu</code></pre>
          Restart Gnome
        </li>
        <li>
          Add Removable Devices Menu on Gnome Panel [EXTENSION]
          <pre
            class="language-bash"
          ><code class="su">yum -y install gnome-shell-extensions-drive-menu</code></pre>
          Restart Gnome
        </li>
        <li>
          Remove username from panel and IM status
          (Available/Busy) from user menu [EXTENSION]
          <pre
            class="language-bash"
          ><code class="su">yum -y install gnome-shell-extension-noim</code></pre>
          Restart Gnome
        </li>
        <li>
          Add Applications Menu on top panel [EXTENSION]
          <div>
            Adds Applications menu that reveals categories of applications
            available.
          </div>
          <div>
            Download
            http://www.fpmurphy.com/gnome-shell-extensions/applicationsbutton.tar.gz
          </div>
          <div>
            Extract its contents to
            <code>~/.local/share/gnome-shell/extensions/</code>
          </div>
          Restart Gnome
        </li>
        <li>
          Move Clock/Calendar to Right [EXTENSION]
          <div>
            Download
            http://www.fpmurphy.com/gnome-shell-extensions/moveclock.tar.gz
          </div>
          <div>
            Extract its contents to
            <code>~/.local/share/gnome-shell/extensions/</code>
          </div>
          <div>Restart Gnome</div>
        </li>
        <li>
          Moves Clock/Calendar to Right [EXTENSION]
          <div>
            Download
            http://www.fpmurphy.com/gnome-shell-extensions/moveclock.tar.gz
          </div>
          <div>
            Extract its contents to
            <code>~/.local/share/gnome-shell/extensions/</code>
          </div>
          Restart Gnome
        </li>
        <li>
          Remove Universal Access (AllY) from panel status area [<span
            class="caps"
            >EXTENSION</span
          >]
          <pre
            class="language-bash"
          ><code class="su">yum -y install gnome-shell-extension-remove-accessibility-icon</code></pre>
          Restart Gnome
        </li>
        <li>
          Add Workspace indicator/selector to the status bar on panel
          [EXTENSION]
          <pre
            class="language-bash"
          ><code class="su">yum -y install gnome-shell-extension-workspacesmenu</code></pre>
          Restart Gnome
        </li>
        <li>
          Add Force Quit Button on Gnome Panel [EXTENSION]
          <div>
            Double Clicking it and selection a non-responding application would
            kill that application instantly.
          </div>
          <div>
            Download
            <a
              href="https://github.com/xtranophilist/gnome-shell-extension-force-quit/zipball/master"
              target="_blank"
              >https://github.com/xtranophilist/gnome-shell-extension-force-quit/zipball/master</a
            >
          </div>
          <div>
            Extract its contents to <code>~/.local/share/gnome-shell/extensions/</code>.
          </div>
          Restart Gnome
        </li>
        <li>
          Add system monitor applet [EXTENSION]
          <div>
            Installing this one requires slightly more job than the others, but
            worth it. Run each of the following instructions on terminal, one
            after another.
          </div>
          <pre class="language-bash"><code class="su">
            mkdir ~/git_projects cd ~/git_projects git clone
            git://github.com/paradoxxxzero/gnome-shell-system-monitor-applet.git
            scp -r
            ~/git_projects/gnome-shell-system-monitor-applet/system-monitor@paradoxxx.zero.gmail.com
            ~/.local/share/gnome-shell/extensions sudo cp
            ~/git_projects/gnome-shell-system-monitor-applet/org.gnome.shell.extensions.system-monitor.gschema.xml
            /usr/share/glib-2.0/schemas cd /usr/share/glib-2.0/schemas sudo
            glib-compile-schemas .</code></pre>
          Dont forget the dot (.) in the last command. Restart Gnome
        </li>
        <li>
          Get CPU temperature on the panel [EXTENSION]
          <div>
            This one is my first try with gnome extension development. It is now
            available from Fedora Official Repository too
          </div>
          Install:
          <pre
            class="language-bash"
          ><code class="su">yum -y install gnome-shell-extension-cpu-temperature</code></pre>
          Restart Gnome
        </li>
      </ol>
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