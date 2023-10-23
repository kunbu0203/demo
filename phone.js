$('#btn').on('click', onClick());

function onClick() {
  console.log('click');
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    // Handle iOS 13+ devices.
    DeviceMotionEvent.requestPermission().then(function (state) {
      console.log(state);
      alert(state);

      if (state === 'granted') {
        window.addEventListener('devicemotion', function (event) {
          console.log('handleOrientation', event);
          var alpha = event.alpha;
          var beta = event.beta;
          var gamma = event.gamma;
          console.log(beta);
          $('#beta').text(beta);
          $('#gamma').text(gamma);
        });
      } else {
        console.error('Request to access the orientation was rejected');
      }
    }).catch(console.error);
  } else {
    // Handle regular non iOS 13+ devices.
    window.addEventListener('devicemotion', function (event) {
      console.log('handleOrientation', event);
      var alpha = event.alpha;
      var beta = event.beta;
      var gamma = event.gamma;
      console.log(beta);
      $('#beta').text(beta);
      $('#gamma').text(gamma);
    });
  }
}
