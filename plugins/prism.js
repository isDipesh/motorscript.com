import "prism-es6/themes/prism.css";
import Vue from "vue";

import Prism from "prism-es6";

require("prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js");
require("prismjs/components/prism-javascript.min.js");
require("prismjs/components/prism-sql.js");
require("prismjs/components/prism-bash.js");
// require("prismjs/components/prism-php.min.js");

const directive = function(el) {
  Prism.highlightAllUnder(el);
};

Vue.directive("highlight", directive);
