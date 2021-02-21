import Vue from "vue";
// import VuePrism from "vue-prism";
// Vue.use(VuePrism);

import "prismjs/themes/prism.css";

import Prism from "prism-es6";

// const Prism = require('prismjs');

require("prismjs/components/prism-markup.min.js");
require("prismjs/components/prism-javascript.min.js");
require("prismjs/components/prism-bash.min.js");
require("prismjs/components/prism-python.min.js");
require("prismjs/components/prism-nginx.min.js");

const directive = function(rootEl, directiveObj, node) {
  node.context.$nextTick(() => {
    // Remove all clones
    const clonePreTags = document.querySelectorAll("pre.clone");
    for (var i = 0; i < clonePreTags.length; ++i) {
      clonePreTags[i].remove();
    }

    // Find all pre tags
    for (let el of rootEl.getElementsByTagName("pre")) {
      // Make sure the tag isn't a clone
      if (!el.classList.contains("clone")) {
        // Clone the node and hide the original
        const clonedNode = el.cloneNode(true);
        el.classList.add("cloned");
        el.style["display"] = "none";
        clonedNode.style["display"] = "block";
        clonedNode.classList.add("clone");
        // Hightlight the cloned node
        Prism.highlightAllUnder(clonedNode);
        // Add cloned node to DOM
        el.parentNode.insertBefore(clonedNode, el.nextSibling);
      }
    }
  });
};

Vue.directive("highlight", directive);
