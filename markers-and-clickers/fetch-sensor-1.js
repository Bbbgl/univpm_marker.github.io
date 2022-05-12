AFRAME.registerComponent('sensor1', {
  init: function () {
    this.el.addEventListener('markerFound', () => {

      fetch("https://kdmg.dii.univpm.it/iot/mobile/ar/example/query.php?sid=1")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          id_device= data.sid;
          //console.log(data.sid);
          type_device= data.type;
          name_device1= data.name;
          room_device= data.room;
          time_device= data.timestamp;
          measure_device= data.measure;
          uom_device= data.uom;
          value_device= data.value;    
        
          document.getElementById("myDevice").innerHTML = id_device;
          document.getElementById("myDeviceType").innerHTML = type_device;          
          document.getElementById("myRoomA").innerHTML = room_device;
          //document.getElementById("myDevicesA").innerHTML = devices;

        });

      
      
    })
    
  }
});
