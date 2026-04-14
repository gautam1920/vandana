// Typing intro on landing
const typingEl = document.getElementById("typing");
const introText = "I have something special to tell you... 💌";
let i=0;
function typeIntro() {
  if(i<introText.length){
    typingEl.innerHTML += introText[i++];
    setTimeout(typeIntro,50);
  }
}
typeIntro();

// Floating hearts on landing
setInterval(()=>{
  const el = document.createElement("div");
  el.className = "floating";
  el.innerHTML = "💖";
  el.style.left = Math.random()*100+"vw";
  el.style.fontSize = (20+Math.random()*20)+"px";
  el.style.animationDuration = (4+Math.random()*4)+"s";
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),8000);
},300);

// Elements
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const proposalOverlay = document.getElementById("proposalOverlay");
const man = document.getElementById("man");
const loveText = document.getElementById("loveText");
const herName = document.getElementById("herName");

// YES click -> transform page
yesBtn.onclick = () => {
  proposalOverlay.classList.add("active");

  // Man kneels after dancing
  setTimeout(()=>{
    man.innerHTML="🤵‍♂️";
    man.classList.add("kneel");
  },2000);

  // Show name
  setTimeout(()=>{
    herName.classList.add("showName");
  },2500);

  // Type love message
  setTimeout(typeLove,3000);

  // Fireworks
  setTimeout(launchFireworks, 3200);
};

// NO button runs away
noBtn.onmouseover = () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random()*80+"vw";
  noBtn.style.top = Math.random()*80+"vh";
};

// Typing love message
function typeLove() {
  const msg = "Will you go on a cute lil ice-cream date. Just us watching the sunset while you fill the air with your nonstop talks and I listen to them quietly, capturing you smiling in my eyes and feeding you ice-cream..MISS SUPARNAAA??? 💖";
  loveText.innerHTML = ""; // reset
  let j=0;
  function t() {
    if(j<msg.length){
      loveText.innerHTML += msg[j++];
      setTimeout(t,25);
    }
  }
  t();
}

// Fireworks
function launchFireworks() {
  for(let i=0;i<20;i++){
    const f = document.createElement("div");
    f.className="fire";
    f.innerHTML="✨";
    f.style.left=Math.random()*100+"vw";
    f.style.top=Math.random()*100+"vh";
    document.body.appendChild(f);
    setTimeout(()=>f.remove(),1000);
  }
}
