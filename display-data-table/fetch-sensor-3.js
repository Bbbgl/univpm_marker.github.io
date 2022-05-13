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
          
            document.getElementById("myDevice").innerHTML = id_device;
            document.getElementById("myType").innerHTML = type_device;          
            document.getElementById("myName").innerHTML = name_device;
            document.getElementById("myRoom").innerHTML = room_device;
            document.getElementById("myTime").innerHTML = time_device;
            document.getElementById("myMeasure").innerHTML = status_device;
            document.getElementById("myMeasure2").innerHTML = queue_device;
            document.getElementById("myMeasure3").innerHTML = message_device;
            document.getElementById("myInkLevel").innerHTML = ink_level_device;

            //document.getElementById("myDevicesA").innerHTML = devices;
  
          });

          document.getElementById("measure").innerHTML = "status";
          document.getElementById("measure2").innerHTML = "queue";
          document.getElementById("measure3").innerHTML = "message";
          document.getElementById("InkLevel").innerHTML = "ink level"

  
    
       
      })
      
    }
  });
  