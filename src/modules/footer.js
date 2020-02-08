import "../styles/footer.scss";
function footer() {
  var rootDom = document.getElementById("root");
  var dom = document.createElement("div");
  var num = 7;
  dom.setAttribute("id", "footer");
  dom.innerText = num;

  dom.onclick = function() {
    dom.innerText = num++;
  };
  rootDom.appendChild(dom);
}

export default footer;
