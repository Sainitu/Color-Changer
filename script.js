const RandomColor = function(){
    let color = "#";
    const hex = '0123456789ABCDEF';
    for(let i=0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalID;
const startColorChanging = function(){
    if(!intervalID){
        intervalID = setInterval(changeBgColor, 1000);
    }

    function changeBgColor(){
        document.body.style.backgroundColor = RandomColor();
    }
};
const stopColorChanging = function(){
    clearInterval(intervalID);
    intervalID = null;
};

document.querySelector('#start').addEventListener('click', startColorChanging);
document.querySelector('#stop').addEventListener('click',  stopColorChanging);
