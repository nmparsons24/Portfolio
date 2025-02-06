// test greeting box

// Below is the start of the mouseover effect for the portrait image
// document.getElementsByClassName("portraitDefault")

alert("testing testing");

// - - - - Project Panels - - - - //
const panels = document.querySelectorAll('.panel');

function toggleOpen(){
 console.log("Hello")
 this.classList.toggle('open');
}

function toggleActive(e){
 console.log(e.propertyName);
 if (e.propertyName.includes('flex')) {
 this.classList.toggle('open-active');
 }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


