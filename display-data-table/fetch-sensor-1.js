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
          name_device= data.name;
          room_device= data.room;
          time_device= data.timestamp;
          measure_device= data.measure;
          uom_device= data.uom;
          value_device= data.value;    
         
        
          document.getElementById("myDevice").innerHTML = id_device;
          document.getElementById("myType").innerHTML = type_device;  
          document.getElementById("myName").innerHTML = name_device;        
          document.getElementById("myRoom").innerHTML = room_device;
          document.getElementById("myTime").innerHTML = time_device;
          document.getElementById("myMeasure").innerHTML = measure_device;
          document.getElementById("myMeasure2").innerHTML = uom_device;
          document.getElementById("myMeasure3").innerHTML = value_device;
          //document.getElementById("myDevicesA").innerHTML = devices;

        });

        document.getElementById("measure").innerHTML = "measure";
        document.getElementById("measure2").innerHTML = "uom";
        document.getElementById("measure3").innerHTML = "value";
        document.getElementById("InkLevel").innerHTML = "";
        document.getElementById("myInkLevel").innerHTML = "";


        

      
      
    })
    
  }
});
