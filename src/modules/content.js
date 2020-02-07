import "../styles/content.scss";
import img from "../assets/test.jpg";

function content() {
  var rootDom = document.getElementById("root");
  var dom = document.createElement("div");
  var mimg = new Image();
  mimg.classList.add("timg");
  mimg.src = img;
  dom.appendChild(mimg);
  dom.setAttribute("id", "content");
  rootDom.appendChild(dom);
}

export default content;
