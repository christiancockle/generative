// const logo = document.querySelectorAll('#logo2 path');

// for(let i = 0; i<logo.length; i++){
//     console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
// }

var $button = document.querySelector('.button:after');
$button.addEventListener('click', function() {
  var duration = 0.3,
      delay = 0.08;
  TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
  TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
  TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});