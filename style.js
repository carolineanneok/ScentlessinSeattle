
var cont = document.getElementbyId('container');
cont.onmousemove=applyCustomPointer;

var customPointer = document.getElementbyId('customPointer');

function applyCustomPointer(event) {
  customPointer.style.left= event.clientx - (customPointer.offsetWidth / 2) + 'px';
  customPointer.style.top = event.clienty - (customPointer.offsetHeight / 2) + 'px';
 

}