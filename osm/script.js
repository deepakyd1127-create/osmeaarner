const link = "https://t.me/+ztC5Vj0p9ng1ZDk1";

let time = 3;
const timer = document.getElementById("timer");

const countdown = setInterval(() => {
    time--;
    timer.textContent = time;

    if(time <= 0){
        clearInterval(countdown);
        window.location.href = link;
    }
},1000);
