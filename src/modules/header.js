import "../styles/header.css";
function header() {
  var rootDom = document.getElementById("root");
  var dom = document.createElement("div");
  dom.setAttribute("id", "header");
  dom.innerText = "this is header dom";
  rootDom.appendChild(dom);
}

export default header;
