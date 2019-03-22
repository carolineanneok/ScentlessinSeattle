
var cont = document.getElementbyId('container');
cont.onmousemove=applyCustomPointer;

var customPointer = document.getElementbyId('customPointer');

function applyCustomPointer(event) {
  customPointer.style.left= event.clientx - (customPointer.offsetWidth / 2) + 'px';
  customPointer.style.top = event.clienty - (customPointer.offsetHeight / 2) + 'px';
 

}


var click = allbutton[i].clicks;

   var clickArray = [];

function facebookClicks() {
    for (var i = 0; i < allbutton.length; i++) {
      clickArray.push(allbutton[i].clicks);
    }
}