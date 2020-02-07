import "../styles/content.scss";
function content() {
  var rootDom = document.getElementById("root");
  var dom = document.createElement("div");
  dom.setAttribute("id", "content");
  dom.innerText = "this is content dom";
  rootDom.appendChild(dom);
}

export default content;
