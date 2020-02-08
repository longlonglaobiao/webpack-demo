import "../styles/header.scss";
let header = () => {
  let rootDom = document.getElementById("root");
  let dom = document.createElement("div");
  let num = 1;
  dom.setAttribute("id", "header");
  dom.innerText = num;
  dom.onclick = () => {
    num++;
    dom.innerText = num;
  };
  rootDom.appendChild(dom);
};

export default header;
