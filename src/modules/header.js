import "../styles/header.scss";
function header() {
  var rootDom = document.getElementById("root");
  var dom = document.createElement("div");
  var num = 1;

  dom.setAttribute("id", "header");
  dom.innerText = num;

  dom.onclick = function() {
    num++;
    dom.innerText = num;
  };
  rootDom.appendChild(dom);
}

export default header;
