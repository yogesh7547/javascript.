//generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  // function randomnumber() {
  //   const value = Math.floor(Math.random() * 16);
  //   return value;
  // }
  
  let intervalId;
  const startchangingcolor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 500);
    }
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopchangingcolor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startchangingcolor);
  
  document.querySelector('#stop').addEventListener('click', stopchangingcolor);
  