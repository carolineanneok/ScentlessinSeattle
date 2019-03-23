'use strict';

alert('This page is still under construction. Stay Tuned');

function photo () {

    for (var i = 0; i < 6 && total != 40; i++) {
  
    total = prompt('How  You have 6 chances.');
    console.log('You have 6 chances!', total);
  
    if (total === 40) { 
      alert(`Correct`);
      counter++;
      return
    } else if (total > 40) {
      alert('Too high, have another try!');
    } else if (total < 40) {
      alert('Too low, have another go!');
    }
  }
  alert('The Correct answer is 40');
  }
  

     