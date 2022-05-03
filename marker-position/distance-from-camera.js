
AFRAME.registerComponent('marker-distance', {
    tick: function () {
        this.markerDistance()
    },
    markerDistance: function () {
        var marker1Pos, cameraPos

        var marker1 = document.querySelector("#marker1")
        var camera = document.querySelector('[camera]')

        marker1Pos = new THREE.Vector3();
        marker1.object3D.getWorldPosition(marker1Pos);

        cameraPos = new THREE.Vector3();
        camera.object3D.getWorldPosition(cameraPos);

        //distance
        distance = marker1Pos.distanceTo(cameraPos);
        console.log("distance" + distance)
        
    }
});
