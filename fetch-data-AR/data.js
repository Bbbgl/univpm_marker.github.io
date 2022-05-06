// this script let you get the distance from the marker to the camera, in A-frame

 AFRAME.registerComponent('marker-data', {
     tick: function () {     //The .tick() handler will get the positions updated every frame
         this.fetching()
     },
     fetching: function () {
//         var marker1Pos, cameraPos
        
//        // see the A-frame documentation : https://aframe.io/docs/master/introduction/javascript-events-dom-apis.html#getting-entities-by-querying-and-traversing
        
//         var marker1 = document.querySelector("#marker1")
//         var camera = document.querySelector('[camera]')
        
//         //using Three.js get the marker position value as Three.js Vector3 Object for A-Frame entities
//         marker1Pos = new THREE.Vector3();
//         marker1.object3D.getWorldPosition(marker1Pos);
        
//         //using Three.js get the camera position value as Three.js Vector3 Object for A-Frame entities
//         cameraPos = new THREE.Vector3();
//         camera.object3D.getWorldPosition(cameraPos);

//         //finding distance using .distanceTo() method.
//         distance = marker1Pos.distanceTo(cameraPos);
//         console.log("distance" + distance)
        
//     }
// });



fetch ('https://jsonplaceholder.typicode.com/posts').then(data=>{
    //console.log(data);
    return data.json();
}).then((completedata)=>{
    //console.log(completedata);
    data1 = completedata[2].title;

}).catch((e)=>{
    console.log(e);
});
},
})
