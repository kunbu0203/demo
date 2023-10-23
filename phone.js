$('#btn').on('click', function (e) {
  e.preventDefault();
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    // Handle iOS 13+ devices.
    DeviceMotionEvent.requestPermission().then(function (state) {
      if (state === 'granted') {
        window.addEventListener('deviceorientation', function (event) {
          var alpha = event.alpha;
          var beta = event.beta;
          var gamma = event.gamma;
          $('#beta').text(beta);
          $('#gamma').text(gamma);
        });
      } else {
        console.error('Request to access the orientation was rejected');
      }
    }).catch(console.error);
  } else {
    // Handle regular non iOS 13+ devices.
    window.addEventListener('deviceorientation', function (event) {
      var alpha = event.alpha;
      var beta = event.beta;
      var gamma = event.gamma;
      $('#beta').text(beta);
      $('#gamma').text(gamma);
    });
  }
});
