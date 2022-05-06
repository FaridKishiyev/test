
const button1 = document.getElementById("button1")
const gift1 = document.getElementById("gift1")

const button2 = document.getElementById("button2")
const gift2 = document.getElementById("gift2")

const button3 = document.getElementById("button3")
const gift3 = document.getElementById("gift3")

const button4 = document.getElementById("button4")
const gift4 = document.getElementById("gift4")

button1.addEventListener("click", myFunction1);
button2.addEventListener("click", myFunction2);
button3.addEventListener("click", myFunction3);
button4.addEventListener("click", myFunction4);

function myFunction1(){
  button1.style.display = "none"
  gift1.style.filter = "none"
  button2.style.display = "block"
  gift2.style.filter = "blur(50px)"
  button3.style.display = "block"
  gift3.style.filter = "blur(50px)"
  button4.style.display = "block"
  gift4.style.filter = "blur(50px)"
}

function myFunction2(){
  button2.style.display = "none"
  gift2.style.filter = "none"
  button1.style.display = "block"
  gift1.style.filter = "blur(50px)"
  button3.style.display = "block"
  gift3.style.filter = "blur(50px)"
  button4.style.display = "block"
  gift4.style.filter = "blur(50px)"
  
}

function myFunction3(){
  button3.style.display = "none"
  gift3.style.filter = "none"
  button2.style.display = "block"
  gift2.style.filter = "blur(50px)"
  button1.style.display = "block"
  gift1.style.filter = "blur(50px)"
  button4.style.display = "block"
  gift4.style.filter = "blur(50px)"
}

function myFunction4(){
  button4.style.display = "none"
  gift4.style.filter = "none"
  button2.style.display = "block"
  gift2.style.filter = "blur(50px)"
  button3.style.display = "block"
  gift3.style.filter = "blur(50px)"
  button1.style.display = "block"
  gift1.style.filter = "blur(50px)"
}

function WhichButton(event) {
  alert("Şəkili götürə bilməzsiz")
}