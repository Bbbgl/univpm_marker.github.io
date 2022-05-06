// this script let you get the distance from the marker to the camera, in A-frame

AFRAME.registerComponent('marker-data', {
    tick: function () {     //The .tick() handler will get the positions updated every frame
        this.fetching()
    },
    fetching: function () {
        fetch ('https://kdmg.dii.univpm.it/iot/mobile/ar/example/query.php?room=A').then(rooma=>{
            whichRoom = rooma[0];
        })




// fetch ('https://jsonplaceholder.typicode.com/posts').then(data=>{
//    //console.log(data);
//    return data.json();
// }).then((completedata)=>{
//    //console.log(completedata);
//    data1 = completedata[2].title;

// }).catch((e)=>{
//    console.log(e);
// });
},
})