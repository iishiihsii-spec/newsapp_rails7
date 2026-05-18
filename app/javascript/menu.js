window.addEventListener('turbo:load', function(){
  const menu1 = document.getElementById("menu1");
  const pullDownMenu = document.getElementById("menu1-pull-down");
  // カーソルの動きに連動してメニュー要素の色を変える
  menu1.addEventListener('mouseover', () => {
    menu1.setAttribute("style", "background-color: orange;")
  });
  menu1.addEventListener('mouseout', () => {
    menu1.removeAttribute("style", "background-color: orange;")
  });
  // クリックに連動してプルダウンメニューの表示/非表示を切り替える
  menu1.addEventListener('click', () => {
    if (pullDownMenu.getAttribute("style") == "display:block;") {
      pullDownMenu.removeAttribute("style");
    } else {
      pullDownMenu.setAttribute("style", "display:block;")
    }
  });
});