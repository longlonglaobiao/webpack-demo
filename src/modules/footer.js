import "../styles/footer.scss";
let footer = () => {
  let rootDom = document.getElementById("root");
  let dom = document.createElement("div");
  let num = 7;
  dom.setAttribute("id", "footer");
  dom.innerText = num;

  dom.onclick = () => {
    dom.innerText = num++;
  };
  rootDom.appendChild(dom);
};

export default footer;
