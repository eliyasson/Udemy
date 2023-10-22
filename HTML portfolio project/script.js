function changeLight(status){
      const bulb = document.getElementById("bulb");
      if (status === 'on'){
        bulb.src = "./assets/images/bulb on.png";
      } else if (status === 'off') {
        bulb.src = "./assets/images/bulb off.png";
      }
    }