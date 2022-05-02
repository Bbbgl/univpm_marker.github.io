// import this on your HTML
window.addEventListener('load', () => {
    const camera = document.querySelector('[camera]');
    const marker = document.querySelector('a-marker');
    let check;

    marker.addEventListener('markerFound', () => {
        let cameraPosition = camera.object3D.position;
        let markerPosition = marker.object3D.position;
        let distance = cameraPosition.distanceTo(markerPosition)

        check = setInterval(() => {
            cameraPosition = camera.object3D.position;
            markerPosition = marker.object3D.position;
            distance = cameraPosition.distanceTo(markerPosition)

            // do what you want with the distance:
            console.log(distance);
        }, 100);
    });
    window.onload = function () {
      document
        .querySelector(".say-hi-button")
        .addEventListener("click", function () {
          // here you can change also a-scene or a-entity properties, like
          // changing your 3D model source, size, position and so on
          // or you can just open links, trigger actions...
          alert(distance);
        });
    };

    marker.addEventListener('markerLost', () => {
      clearInterval(check);
    })
})
