var body = document.getElementById("main-arrow");

window.addEventListener("click", function() {

for ( i = 0; i < 1; i++ ) {
 var randNum = 0;
 var randNum = Math.ceil(Math.random() * 5);
}

if(randNum <= 3) {
  body.setAttribute("src","img/download.jpeg")
  console.log("go right");
}
else {
  body.setAttribute("src","img/LiK7L8zia.jpeg")
  console.log("go left");
}
});