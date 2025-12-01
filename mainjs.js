const menuBt = document.getElementById('menu')
const sideMenu = document.getElementById('sideMenu')
menuBt.addEventListener("click", () => {
  if (sideMenu.style.left === "0px") {
    sideMenu.style.left = "-250px"; // ascunde
  } else {
    sideMenu.style.left = "0px"; // arată
  }
});

const backBt= document.getElementById('backBt')
backBt.addEventListener("click", () => {
  if (sideMenu.style.left === "0px") {
    sideMenu.style.left = "-250px"; // ascunde
  } else {
    sideMenu.style.left = "0px"; // arată
  }
});

const buy = document.getElementById('buy')
const buyPanel = document.getElementById('buyPanel')

buy.addEventListener('click', () =>{
  buyPanel.style.display = 'flex'

});
buyExit.addEventListener('click', () =>{
  buyPanel.style.display = 'none'

});