import "../styles/content.scss";
import img from "../assets/test.jpg";

let content = () => {
  let rootDom = document.getElementById("root");
  let dom = document.createElement("div");
  let mimg = new Image();
  mimg.classList.add("timg");
  mimg.src = img;
  dom.appendChild(mimg);
  dom.setAttribute("id", "content");
  rootDom.appendChild(dom);
};

export default content;
