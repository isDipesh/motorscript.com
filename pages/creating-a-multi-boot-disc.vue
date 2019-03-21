<template>
  <article
    itemprop="blogPost"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <BlogTitle
      title="Creating a multi-boot disc with ISOLINUX"
      published="02 Oct 2010"
      archived="true"
    />
    <div class="content" itemprop="articleBody">
      <p>
        <img
          src="/media/posts/happyboot_logo.jpg"
          alt="happyBoot Logo"
        /><br />
        This how-to is created during the course of documentation of happyBoot
        v3.0.5 Beta released during the grand celebration of Software Freedom
        Day 2010 by NOSK.
      </p>
      <p>
        Let us start with creating a directory where the content and image shall
        be built.<br />
        Inside the folder you have created, create another directory ‘root’ to
        represent the root of the DVD we are building. This directory is our
        working directory.
      </p>
      <p>
        Download the latest syslinux source tar file from kernel.org:<br />
        <a
          href="http://www.kernel.org/pub/linux/utils/boot/syslinux/"
          title="Download syslinux!"
          target="_blank"
          >http://www.kernel.org/pub/linux/utils/boot/syslinux/</a
        >
      </p>
      <p>
        Inside our working directory, create /boot folder.<br />
        /boot shall hold files related to booting, i.e. the boot menus, kernels,
        initial ramdisks, etc.<br />
        /boot/isolinux shall hold isolinux files.
      </p>
      <p>
        Extract the downloaded syslinux archive, find the following files. and
        copy them to <code>/boot/isolinux.</code><br />
        <pre class="language-isolinux"><code>chain.c32
isolinux.bin
memdisk
menu.c32
vesamenu.c32
reboot.c32</code></pre>
      </p>
      <p>
        isolinux.bin is the boot loader file. <code>menu.c32</code> is required only if we
        are creating the menu in normal mode where background images and other
        graphical options are not possible. <code>vesamenu.c32</code> provides support for
        background images and other graphical options and we are using this type
        of menu. memdisk can emulate disk images as disks. It can be used to
        boot the system off floppy images and even smaller CD ISOs. syslinux has
        many other files COM32 images with <code>.c32</code> extensions which are used after
        booting for various purposes. <code>reboot.c32</code> is used to reboot the machine.
        There are other files like <code>gfxboot.c32</code> which we are not including here.
        gfxboot supports more advanced, powerful and high-graphics menu but
        requires complex scripting and needs them to be archived, so it’s little
        difficult creating and testing multi-boot DVD.
      </p>
      <p>
        mkiso.sh script included here is the script for generating ISO image. It
        uses mkisofs for image creation.<br />
        Edit it with your favorite text-editor to specify the location of the
        output image after <code>-o</code> switch and the root location of the CD (where
        /boot/ is located) at the end of the line.<br />
        Save the scrpt in system path (e.g. /usr/bin) with executable
        permission.<br />
        This will save our time. When we execute <code>mkiso</code> new image will be
        created at the specified location using <code>boot/isolinux/isolinux.bin</code> as
        the eltorito boot image.
      </p>
      <p>
        Also. for testing purposes, we set up a virtual machine. VirtualBox or
        Qemu should be the best option.
      </p>
      <p>
        The setup is done by now.<br />
        The major work lies in integration of the distributions.
      </p>
      <p>
        Our first job while integrating an OS into our mult-boot DVD is to
        understand its boot loader.<br />
        Almost all linux distributions use ISOLINUX as the bootloader. ISOLINUX
        files are generally located at <code>/isolinux/</code> or <code>/boot/isolinux</code> in the boot
        media.<br />
        I would recommend you to read the online and offline syslinux and
        isolinux documentation and references before continuing. The offline
        source should be the documents inside the syslinux archive which you
        have just downloaded.
      </p>
      <p>
        Let’s start our integration with DSL (Damn Small Linux). We mount it’s
        ISO image and browse to the root of its CD image. We see isolinux is
        located in <code>/boot/isolinux</code>. We copy everything else into our working root
        except the boot folder because /boot/isolinux would conflict with ours.
        So, we create <code>/boot/DSL</code> in our location where we copy the contents of
        <code>/boot/isolinux</code> from DSL image. Since, we have changed the location of
        DSL boot configuration files, we have to edit <code>isolinux.cfg</code> in <code>/boot/DSL</code>
        and add <code>/boot/DSL</code> to every file location. Otherwise ISOLINUX would
        search it in <code>/boot/isolinux</code> instead. So lines like <code>DISPLAY boot.msg</code> are
        edited to <code>DISPLAY /boot/dsl/boot.msg</code>, <code>KERNEL linux24</code> to <code>KERNEL /boot/dsl/linux24</code>,
        <code>KERNEL memtest</code> to <code>KERNEL /boot/dsl/memtest</code>.
        Also, we have to edit <code>initrd=minitr24.gz</code> to <code>initrd=/boot/dsl/minitr24.gz</code> in the <code>APPEND</code> lines.
      </p>
      <p>
        Now, we are going to add an entry of Damn Small Linux in our mult-boot
        menu. The configuration file for multi-boot menu is
        <code>/boot/isolinux/isolinux.cfg</code>.<br />
        See the file <code>menu.txt</code> for help and reference on ISOLINUX menu
        configuration inside the <code>doc</code> folder of syslinux archive.<br />
        The following lines have to be used.
        <pre class="language-isolinux"><code>
LABEL dsl
MENU LABEL ^1. Damn Small Linux v4.4.10
KERNEL vesamenu.c32
APPEND /boot/dsl/isolinux.cfg
TEXT HELP
        </code></pre>
        A 50 MB near complete Operating System for Personal Computers.
        Includes system utilities, multimedia, office and gaming and other
        goodies.<br />
        
      </p>
      <p>
        <code>MENU LABEL</code> would show in the menu while booting.<br />
        Text between <code>TEXT HELP</code> and <code>EXNDTEXT</code> would be shown as help text in the
        bottom.<br />
        This entry loads vesamenu.c32 COM32 Image with <code>/boot/dsl/isolinux.cfg</code> as
        parameter. This infact means load another ISOLINUX menu (sub-menu).<br />
        Now, we can create the image with mkiso and test if it boots OK in
        VirtualBox. It should.<br />
        The <code>^</code> key before <code>1</code>, sets <code>1</code> as the hotkey for selection of this
        menu. Use it before any character to make the character the hot-key.
      </p>
      <p>
        Similar should have been the ways of integration for most OSes. But,
        unfortunately different techniques are used by different OSes making our
        job difficult. Ubuntu Desktop Edition and openSUSE use gfxboot which I
        couldn’t load directly from vesamenu.c32 (Error setting up gfxboot, or
        something like that was returned as error, there has to be a way). So,
        we need to create submenus for them ( not a difficult job, if you are
        good with GRUB or any other bootloader) and create entries for them in
        the main menu. Boot files of Ubuntu were copied to /boot/ubuntu. The
        boot files of openSUSE exist in /boot/i386/loader which was let in its
        own location. isolinux.cfg was edited to and absolute path of file names
        were written. This step is necessary with every distro integration
        because our bootloader searches the files in its own folder otherwise.
      </p>
      <p>
        Fedora has its boot configuration in /isolinux but kernel on /EFI (the
        kernel and memtest in /isolinux are 0 bytes). So, all files except
        kernel and memtest were copied to /EFI. isolinux.cfg was edited
        accordingly and pointed in /boot/isolinux/isolinux.cfg like done for
        DSL. Fedora kernel won’t find the live file system unless we specify the
        append CD label to the kernel. We need to edit all <code>APPEND</code> lines in
        /EFI/isolinux.cfg and use <code>root=live:happyBootv3</code> parameter (without
        quotes). We are assuming <code>happyBootv3</code> is the CD/DVD label name. You can
        change it in mkiso script.
      </p>
      <p>
        Integrating UBCD is easy. We just need to point the sub-menu to
        /ubcd/menus/isolinux/main.cfg.
      </p>
      <p>
        UBCD has Parted Magic inside it. If you need to integrate Parted Magic
        by yourself because you don’t want UBCD or if you want the latest
        version, then you can copy /boot/isolinux from Parted Magic ISO to
        /boot/pmagic, similar to what we did with DSL. Copy other contents into
        our working directory (pmagic is the only other folder). Edit the
        /boot/pmagic/isolinux.cfg file like we did for DSL and then point to
        this menu from /boot/isolinux/isolinux.cfg. We can also edit the UBCD
        menu to link to the updated Parted Magic.
      </p>
      <p>
        GeexBox is a wonderful under 20 MB complete multimedia OS. Its ISO has
        only folder /GEEXBOX in it. Copy it into our multi-boot DVD root. Its
        isolinux configuration files are located in /GEEXBOX/boot. We edit
        /GEEXBOX/boot/isolinux.cfg to use absolute path for kernel and initrd
        files. We also add it into our menu /boot/isolinux/isolinux.cfg.
      </p>
      <p>
        Finally, we customize the boot menu looks.<br />
        We will look after each entry used.<br />
        <pre class="language-isolinux"><code>MENU BACKGROUND /boot/isolinux/main.jpg</code></pre>
        This makes ISOLINUX load main.jpg as the background. You can use any
        image, provided it is 640×480 JPG or PNG.
        <pre class="language-isolinux"><code>MENU TITLE happyBoot v3.0b SFD10 Release</code></pre>
        This sets the title.
        <pre class="language-isolinux"><code>MENU COLOR title 1;36;44 #ffff0000 #00000000 std</code></pre>
        Sets title foreground color to blue.
        <pre class="language-isolinux"><code>MENU ROWS 14</code></pre>
        Uses 14 rows for menu options.<br />
        <pre class="language-isolinux"><code>F1 /boot/docs/help.txt</code></pre>
        Displays help file when F1 is hit.
      </p>
      <p>
        See <code>menu.txt</code> inside doc folder in syslinux archive for more references.
      </p>
      <p>Make the changes, execute mkiso and boot the image.</p>
      <p>
        If you aren’t using mkiso script, take care:<br />
        <code>mkisofs -U</code> solves ubuntu problem of ‘unable to find live file system’
        error.<br />
        <code>mkisofs -U -R</code> solves the problem with DSL – can’t find KNOPPIX
        filesystem problem.
      </p>
      <p>
        This document has not been written to deep details and therefore may not
        be useful to beginners. Also, this job has no huge complexibility that
        it requires an advanced user. This how-to was written
        as a part of documentation for the DVD release of happyBoot v3 done in
        Software Freedom Day 2010 organised by Nepal Open Source Klub.
      </p>
      <p>
        <strong>Screenshots:</strong><br />
        The main menu:<br />
        <img
          src="/media/posts/main_boot_screen.jpg"
          alt="happyBoot Main Menu"
        />
      </p>

      <p>
        One of the sub-menus (Parted Magic):<br />
        <img
          src="/media/posts/parted_magic_menu.png"
          alt="happyBoot sub-menu - Parted Magic"
        />
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