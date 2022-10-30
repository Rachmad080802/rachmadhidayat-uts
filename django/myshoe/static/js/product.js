let menu = document.querySelector('#menu-bar');
 let navbar = document.querySelector('.navbar');
 
 menu.onclick =() =>{
     menu.classList.toggle('fa-times');
     navbar.classList.toggle('active');
 }
 console.log("starting tweak")
 const checkout1 = document.getElementById("checkout1")
 const wrapper = document.getElementById("wrapper")
 const newBox = document.getElementById("newBox")
 const onBack = document.getElementById("onBack")
 const slide = document.getElementById("slide")
 const productbox1 = document.getElementById("productBox1")
 const productbox2 = document.getElementById("productBox2")
 const productbox3 = document.getElementById("productBox3")
 const productbox4 = document.getElementById("productBox4")
 const productbox5 = document.getElementById("productBox5")
 const productbox6 = document.getElementById("productBox6")
 
 function getDetail(nomor) {
   console.log('btn-checkout: ', nomor)
   newBox.style.display = "block"
   wrapper.style.display = "none"
   slide.style.display = "none"
 
   if (nomor === 1) {
     productBox1.style.display = "flex"
   } else if (nomor === 2) {
     productBox2.style.display = "flex"
   }
 
   if (nomor === 3) {
     productBox3.style.display = "flex"
   } else if (nomor === 4) {
     productBox4.style.display = "flex"
 
   }
   if (nomor === 5) {
     productBox5.style.display = "flex"
   } else if (nomor === 6) {
     productBox6.style.display = "flex"
 
   }
 
 
 }
 document.querySelector('#onBack')
   .addEventListener('click', () => {
     window.location.reload(true);
   })