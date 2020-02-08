import header from "./modules/header.js";
import content from "./modules/content.js";
import footer from "./modules/footer.js";

header();
content();
footer();

if (module.hot) {
  module.hot.accept("./modules/header.js", function() {
    var dom = document.getElementById("header");
    document.getElementById("root").removeChild(dom);
    header();
  });
  module.hot.accept("./modules/content.js", function() {
    var dom = document.getElementById("content");
    document.getElementById("root").removeChild(dom);
    content();
  });
  module.hot.accept("./modules/footer.js", function() {
    var dom = document.getElementById("footer");
    document.getElementById("root").removeChild(dom);
    footer();
  });
}
