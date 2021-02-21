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
    let preTags = rootEl.getElementsByTagName("pre");
    const clonePres = document.querySelectorAll("pre.clone");
    for (var i = 0; i < clonePres.length; ++i) {
      clonePres[i].remove();
    }
    preTags = rootEl.getElementsByTagName("pre");
    for (let el of preTags) {
      if (!el.classList.contains("clone")) {
        const clonedNode = el.cloneNode(true);
        clonedNode.style["display"] = "block";
        el.classList.add("cloned");
        el.style["display"] = "none";
        clonedNode.classList.add("clone");
        Prism.highlightAllUnder(clonedNode);
        el.parentNode.insertBefore(clonedNode, el.nextSibling);
      }
    }
  });
};

Vue.directive("highlight", directive);
