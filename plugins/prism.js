import "prism-es6/themes/prism.css";
import Vue from "vue";

import Prism from "prism-es6";

require("prismjs/components/prism-markup.min.js");
require("prismjs/components/prism-javascript.min.js");
require("prismjs/components/prism-bash.min.js");
require("prismjs/components/prism-python.min.js");

require("prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js");

const directive = function(el) {
  Prism.highlightAllUnder(el);
};

Vue.directive("highlight", directive);
