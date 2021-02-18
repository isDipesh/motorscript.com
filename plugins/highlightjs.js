import Vue from "vue";

import hljs from "highlight.js";

import "highlight.js/styles/github.css";

window.hljs = hljs;

const directive = function(el) {
  const preEls = el.getElementsByTagName("pre");
  console.log(123);
  for (let item of preEls) {
    hljs.highlightBlock(item);
  }
};

Vue.directive("highlight", directive);
