function footer() {
  var rootDom = document.getElementById("root");
  var dom = document.createElement("div");
  dom.innerText = "this is footer dom";
  rootDom.appendChild(dom);
}

export default footer;
