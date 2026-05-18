window.addEventListener('turbo:load', function(){
  const menu1 = document.getElementById("menu1");
  menu1.addEventListener('mouseover', () => {
    menu1.setAttribute("style", "background-color: orange;")
  });
  menu1.addEventListener('mouseout', () => {
    console.log("out");
    menu1.removeAttribute("style")
  });
})