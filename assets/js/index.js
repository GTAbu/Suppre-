const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
let a = document.querySelector(".a")
let b = document.querySelector(".b")
let c = document.querySelector(".c")
let d = document.querySelector(".d")
function timeCount() {
  var today = new Date();

  var day = today.getDate();
  var month = today.getMonth()+1;
  var year = today.getFullYear();

  var hour = today.getHours();
  if(hour<10)hour = "0"+hour;

  var minute = today.getMinutes();
  if(minute<10)minute = "0"+minute;

  var second = today.getSeconds();
  if(second<10)second = "0"+second;
  a.innerHTML = day + " <br/>" +"DAYS"
  b.innerHTML = hour + " <br/>" +"HRS"
  c.innerHTML = minute+ " <br/>" +"MINS"
 d.innerHTML = second+ " <br/>" +"SECS"

  

  setTimeout("timeCount()", 1000);
}
var mybutton = document.querySelector(".topbutton")
function scrollFunction() {

  if (document.body.scrollTop > 600 ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
window.onscroll = scrollFunction()
// window.onscroll = function()
// {
//     if(window.scrollY >= 500)
//     {
//         document.getElementsByClassName('topbutton').style.visibility="visible"
//     }else
//     {
//         document.getElementsByClassName('topbutton').style.visibility="hidden";
//     }
// }