AFRAME.registerComponent('sensor3', {
    init: function () {
      this.el.addEventListener('markerFound', () => {
  
        fetch("https://kdmg.dii.univpm.it/iot/mobile/ar/example/query.php?sid=3")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            id_device= data.sid;
            //console.log(data.sid);
            type_device= data.type;
            name_device= data.name;
            room_device= data.room;
            time_device= data.timestamp;
            status_device= data.status;
            queue_device= data.queue;
            message_device= data.message;
            ink_level_device= data.ink_level;    
          
            //document.getElementById("myDevice3").innerHTML = id_device;
            document.getElementById("myDeviceType3").innerHTML = type_device;          
            document.getElementById("myRoomB").innerHTML = room_device;
            //document.getElementById("myDevicesA").innerHTML = devices;
  
          });
  
    
       
      })
      
    }
  });
  