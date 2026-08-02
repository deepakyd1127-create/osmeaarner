const tgLink = "https://t.me/+ztC5Vj0p9ng1ZDk1";

// ---------------------
// 4 Second Auto Redirect
// ---------------------

let seconds = 4;

const timer = document.createElement("div");
timer.className = "timer";
timer.innerHTML = `Redirecting in <b>${seconds}</b>s`;

document.body.appendChild(timer);

const countdown = setInterval(() => {

    seconds--;

    if (seconds > 0) {
        timer.innerHTML = `Redirecting in <b>${seconds}</b>s`;
    } else {
        clearInterval(countdown);
        timer.innerHTML = "Opening Telegram...";
        window.location.href = tgLink;
    }

}, 1000);

// ---------------------
// Join Buttons
// ---------------------

document.querySelectorAll(".join").forEach(btn => {

    btn.addEventListener("click", function(e){

        e.preventDefault();

        clearInterval(countdown);

        window.location.href = tgLink;

    });

});

// ---------------------
// Logo Click
// ---------------------

const logo = document.querySelector(".logo");

if(logo){

    logo.addEventListener("click",function(e){

        e.preventDefault();

        clearInterval(countdown);

        window.location.href = tgLink;

    });

}

// ---------------------
// Mouse Glow
// ---------------------

const glow = document.createElement("div");
glow.className = "cursor-glow";
document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX+"px";
    glow.style.top = e.clientY+"px";

});

// ---------------------
// 3D Card Effect
// ---------------------

const card = document.querySelector(".container");

document.addEventListener("mousemove",(e)=>{

    if(!card) return;

    const x = (window.innerWidth/2 - e.clientX)/35;
    const y = (window.innerHeight/2 - e.clientY)/35;

    card.style.transform =
    `rotateY(${-x}deg) rotateX(${y}deg)`;

});

document.addEventListener("mouseleave",()=>{

    if(card)
    card.style.transform = "rotateX(0) rotateY(0)";

});

// ---------------------
// Dynamic CSS
// ---------------------

const style = document.createElement("style");

style.innerHTML = `

.cursor-glow{
position:fixed;
width:260px;
height:260px;
background:radial-gradient(circle,rgba(0,255,140,.25),transparent 70%);
border-radius:50%;
pointer-events:none;
transform:translate(-50%,-50%);
filter:blur(25px);
z-index:0;
}

.timer{

position:fixed;

top:18px;

right:18px;

padding:12px 18px;

border-radius:14px;

background:rgba(0,0,0,.55);

backdrop-filter:blur(18px);

color:#fff;

font-size:15px;

font-weight:700;

border:1px solid rgba(255,255,255,.12);

z-index:9999;

box-shadow:0 0 20px rgba(0,255,140,.25);

}

`;

document.head.appendChild(style);
