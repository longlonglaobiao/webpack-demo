import "../styles/footer.scss";
function footer() {
  var rootDom = document.getElementById("root");
  var dom = document.createElement("div");
  dom.setAttribute("id", "footer");
  dom.innerText = "this is footer dom";
  rootDom.appendChild(dom);
}

export default footer;
