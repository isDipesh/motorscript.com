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

const directive = function(rootEl) {
  let preTags = rootEl.getElementsByTagName("pre");
  console.log(preTags.length);
  const clonePres = document.querySelectorAll("pre.clone");
  for (var i = 0; i < clonePres.length; ++i) {
    clonePres[i].remove();
  }
  preTags = rootEl.getElementsByTagName("pre");
  console.log(preTags.length);
  for (let el of preTags) {
    if (!el.classList.contains("clone")) {
      const clonedNode = el.cloneNode(true);
      el.classList.add("cloned");
      clonedNode.classList.add("clone");
      console.log(typeof clonedNode);
      Prism.highlightAllUnder(clonedNode);
      el.parentNode.insertBefore(clonedNode, el.nextSibling);
    }
  }
  //   Prism.highlightAllUnder(el);
};

Vue.directive("highlight", directive);
