const stories = [
  {
    title:"Benny and the Whispering Woods", sceneName:"Whispering Woods", art:"woods", cardEmoji:"tree", summary:"Help Bunny plant a seed.", reward:"tree", worldGrowth:"tree", character:"Benny Bunny",
    praise:["Benny wiggles his ears: ‘Hoppity-hooray! You followed the story!’","Benny smiles: ‘Your story thinking is super bouncy!’"],
    objects:[{word:"bridge",emoji:"bridge",x:10,y:53},{word:"bunny",emoji:"bunny",x:33,y:52},{word:"tree",emoji:"tree",x:89,y:40},{word:"flower",emoji:"flower",x:70,y:57}],
    intro:"Benny finds a small seed. A bird shows him the way to the garden.",
    choice:{prompt:"Which way should Benny go?",options:[{id:"bridge",emoji:"bridge",label:"Cross the bridge",result:"Benny crosses the bridge."},{id:"flowers",emoji:"flower",label:"Follow the flowers",result:"Benny follows the flowers."}]},
    action:{kind:"bird",prompt:"Help the bird flap!",emoji:"bird",instruction:"Tap the bird 3 times.",goal:3},
    continuation:"The seed rolls behind a mushroom. Benny finds it and plants it. A little tree grows.",
    surprise:{closed:"mushroom",open:"fairy",text:"Surprise! A tiny fairy gives Benny a leaf."},
    sequence:[{id:"seed",image:"bunny-seed.png",text:"Benny finds a seed",hint:"First, Benny finds the seed."},{id:"path",image:"bunny-bridge.png",text:"Benny follows the path",hint:"Next, Benny goes through the woods."},{id:"wind",image:"bunny-wind.png",text:"The seed rolls away",hint:"Then, the seed rolls away."},{id:"plant",image:"bunny-tree.png",text:"Benny plants the seed",hint:"Last, Benny plants it."}],
    imagination:{prompt:"What could grow on Benny’s tree?",choices:[{emoji:"bell",word:"a bell"},{emoji:"moon",word:"a tiny moon"},{emoji:"candy",word:"a rainbow candy"}]}
  },
  {
    title:"Mia and the Cloud Castle", sceneName:"Cloud Castle", art:"cloud-castle", cardEmoji:"castle", summary:"Help Bear take a ribbon up.", reward:"castle", worldGrowth:"castle", character:"Mia Bear",
    praise:["Mia claps her paws: ‘Bear-y brilliant! You remembered every part!’","Mia laughs: ‘That order fits together like a perfect picnic!’"],
    objects:[{word:"rainbow",emoji:"rainbow",x:16,y:25},{word:"bear",emoji:"bear",x:35,y:48},{word:"ribbon",emoji:"ribbon",x:24,y:68},{word:"cloud",emoji:"cloud",x:57,y:56},{word:"castle",emoji:"castle",x:68,y:29}],
    intro:"Mia finds a bright ribbon. She takes it up to the cloud castle.",
    choice:{prompt:"How should Mia carry the ribbon?",options:[{id:"bag",emoji:"bag",label:"In her bag",result:"Mia puts the ribbon in her bag."},{id:"paws",emoji:"ribbon",label:"In her paws",result:"Mia holds the ribbon carefully."}]},
    action:{kind:"cloud",prompt:"Move the cloud!",emoji:"cloud",instruction:"Drag the cloud all the way to the right.",goal:1},
    continuation:"The ribbon gets caught on a bell. Mia frees it. The queen makes a rainbow.",
    surprise:{closed:"cloud",open:"cloud-unicorn",text:"Surprise! A cloud-unicorn says hello."},
    sequence:[{id:"find",image:"bear-ribbon.png",text:"Mia finds the ribbon",hint:"First, Mia finds the ribbon."},{id:"climb",image:"bear-castle.png",text:"Mia climbs to the castle",hint:"Next, Mia climbs up."},{id:"tangle",image:"bear-bell.png",text:"The ribbon gets caught",hint:"Then, the ribbon gets caught."},{id:"rainbow",image:"bear-rainbow.png",text:"The queen makes a rainbow",hint:"Last, the queen makes a rainbow."}],
    imagination:{prompt:"Where should the rainbow lead?",choices:[{emoji:"cake-hill",word:"a cake hill"},{emoji:"dragon-home",word:"a dragon home"},{emoji:"sky-ride",word:"a sky ride"}]}
  },
  {
    title:"Pip and the Moonlight Sea", sceneName:"Moonlight Sea", art:"moon-sea", cardEmoji:"moon", summary:"Help Penguin take a star home.", reward:"star", worldGrowth:"island", character:"Pip Penguin",
    praise:["Pip spins happily: ‘Flipper-fantastic! The story shines again!’","Pip cheers: ‘You are a sparkling story captain!’"],
    objects:[{word:"boat",emoji:"boat",x:16,y:68},{word:"penguin",emoji:"penguin",x:22,y:50},{word:"star",emoji:"star",x:33,y:57},{word:"moon",emoji:"moon",x:72,y:15},{word:"island",emoji:"island",x:81,y:53}],
    intro:"Pip finds a sleepy star by his boat. He sails it to Moon Island.",
    choice:{prompt:"What should light Pip’s boat?",options:[{id:"lantern",emoji:"lantern",label:"A lantern",result:"Pip lights a lantern."},{id:"fireflies",emoji:"firefly",label:"Fireflies",result:"Fireflies light the way."}]},
    action:{kind:"stars",prompt:"Wake the stars!",emoji:"star",instruction:"Tap all 3 stars.",goal:3},
    continuation:"Pip puts the star on a rock. A moonbeam takes it home.",
    surprise:{closed:"rock",open:"octopus",text:"Surprise! A tiny octopus waves hello."},
    sequence:[{id:"star",image:"penguin-star.png",text:"Pip finds a star",hint:"First, Pip finds the star."},{id:"sail",image:"penguin-boat.png",text:"Pip sails across the sea",hint:"Next, Pip sails his boat."},{id:"rock",image:"penguin-rock.png",text:"Pip puts the star on a rock",hint:"Then, Pip puts it on a rock."},{id:"sky",image:"penguin-moon.png",text:"The star goes home",hint:"Last, the moon sends the star home."}],
    imagination:{prompt:"What will Pip see on her way home?",choices:[{emoji:"flying-whale",word:"a flying whale"},{emoji:"cookie-rocket",word:"a cookie rocket"},{emoji:"moon-princess",word:"a moon princess"}]}
  }
];


const profileIcons=[
  {id:"bunny",name:"Benny Bunny",cost:2,type:"animal",animal:"bunny"},
  {id:"cat",name:"Clover Cat",cost:3,type:"animal",animal:"cat"},
  {id:"bear",name:"Mia Bear",cost:4,type:"animal",animal:"bear"},
  {id:"deer",name:"Daisy Deer",cost:5,type:"animal",animal:"deer"},
  {id:"penguin",name:"Pip Penguin",cost:6,type:"animal",animal:"penguin"},
  {id:"owl",name:"Ollie Owl",cost:8,type:"animal",animal:"owl"},
  {id:"otter",name:"Oona Otter",cost:10,type:"animal",animal:"otter"},
  {id:"triceratops",name:"Trixie Triceratops",cost:12,type:"animal",animal:"triceratops"}
];

const state={
  currentStory:0,step:0,
  completed:JSON.parse(localStorage.getItem("storySparkCompletedV3")||localStorage.getItem("storySparkCompletedV2")||"[]"),
  awards:JSON.parse(localStorage.getItem("storySparkAwardsV3")||"{}"),
  unlockedIcons:JSON.parse(localStorage.getItem("storySparkUnlockedIconsV1")||"[\"cat\"]"),
  selectedIcon:localStorage.getItem("storySparkSelectedIconV1")||"cat",
  selectedSequence:[],learned:new Set(),choice:null,actionCount:0,wrongSequenceAttempts:0,imagination:null
};
state.unlockedIcons=state.unlockedIcons.filter(id=>profileIcons.some(icon=>icon.id===id));
if(!state.unlockedIcons.includes("cat"))state.unlockedIcons.unshift("cat");
if(!profileIcons.some(icon=>icon.id===state.selectedIcon))state.selectedIcon="cat";
const $=id=>document.getElementById(id);
const els={profilePanel:$("profilePanel"),profileGrid:$("profileGrid"),availableStars:$("availableStars"),guideProfileButton:$("guideProfileButton"),homeScreen:$("homeScreen"),gameScreen:$("gameScreen"),celebrationScreen:$("celebrationScreen"),sceneMap:$("sceneMap"),growingWorld:$("growingWorld"),totalStars:$("totalStars"),worldFill:$("worldFill"),worldMessage:$("worldMessage"),finalWorldButton:$("finalWorldButton"),stepLabel:$("stepLabel"),storyTitle:$("storyTitle"),storyStars:$("storyStars"),gamePanel:$("gamePanel"),toast:$("toast"),rewardEmoji:$("rewardEmoji"),celebrationTitle:$("celebrationTitle"),celebrationText:$("celebrationText"),nextStoryButton:$("nextStoryButton")};
function saveProgress(){
  localStorage.setItem("storySparkCompletedV3",JSON.stringify(state.completed));
  localStorage.setItem("storySparkAwardsV3",JSON.stringify(state.awards));
  localStorage.setItem("storySparkUnlockedIconsV1",JSON.stringify(state.unlockedIcons));
  localStorage.setItem("storySparkSelectedIconV1",state.selectedIcon);
}
function storyAwardSet(index=state.currentStory){return new Set(state.awards[index]||[])}
function totalEarnedStars(){return Object.values(state.awards).reduce((sum,list)=>sum+new Set(list).size,0)}
function spentProfileStars(){return state.unlockedIcons.reduce((sum,id)=>sum+(profileIcons.find(icon=>icon.id===id)?.cost||0),0)}
function availableProfileStars(){return Math.max(0,totalEarnedStars()-spentProfileStars())}
function storyIconHTML(kind){return `<span class="story-icon icon-${kind}" role="img" aria-label="${kind}"><span></span></span>`}
function storyAssetHTML(kind,className="story-asset"){return ["bird","mushroom","fairy","bell","moon","candy","cloud","cloud-unicorn","cake-hill","dragon-home","sky-ride","ribbon-bell","rock","octopus","flying-whale","cookie-rocket","moon-princess"].includes(kind)?`<img class="${className} ${kind}-asset" src="assets/story-assets/${kind}.png" alt="${kind}">`:storyIconHTML(kind)}
function animalAvatarHTML(kind){
  return `<img class="generated-profile-icon" src="assets/profile-icons/${kind}.png" alt="">`
}
function profileAvatarHTML(iconId){
  const icon=profileIcons.find(item=>item.id===iconId)||profileIcons[0];
  if(icon.type==="guide")return `<span class="character-portrait character-guide" aria-hidden="true"><span class="ear-left"></span><span class="ear-right"></span><span class="face"><span class="eye left"></span><span class="eye right"></span><span class="nose"></span><span class="smile"></span></span><span class="costume"></span></span>`;
  if(icon.type==="story")return characterPortrait(icon.story);
  return animalAvatarHTML(icon.animal);
}
function renderProfilePicker(){
  if(!els.profileGrid)return;
  els.availableStars.textContent=availableProfileStars();
  els.profileGrid.innerHTML=profileIcons.map(icon=>{
    const unlocked=state.unlockedIcons.includes(icon.id),selected=state.selectedIcon===icon.id,canBuy=availableProfileStars()>=icon.cost;
    const status=selected?"Selected":unlocked?"Choose":`${icon.cost} stars`;
    return `<button class="profile-card ${selected?"selected":""} ${unlocked?"":"locked"}" data-profile="${icon.id}" ${!unlocked&&!canBuy?"disabled":""}><span class="profile-avatar">${profileAvatarHTML(icon.id)}</span><span class="profile-card-name">${icon.name}</span><span class="profile-card-status">${status}</span></button>`;
  }).join("");
  document.querySelectorAll("[data-profile]").forEach(button=>button.onclick=()=>chooseProfileIcon(button.dataset.profile));
}
function chooseProfileIcon(iconId){
  const icon=profileIcons.find(item=>item.id===iconId);if(!icon)return;
  if(!state.unlockedIcons.includes(iconId)){
    if(availableProfileStars()<icon.cost){showToast(`Earn ${icon.cost-availableProfileStars()} more stars to unlock ${icon.name}.`);return}
    state.unlockedIcons.push(iconId);playEffect("surprise");showToast(`${icon.name} joined your icon collection!`);
  }else{playEffect("word")}
  state.selectedIcon=iconId;saveProgress();renderProfilePicker();renderSelectedProfile();
}
function renderSelectedProfile(){
  if(!els.guideProfileButton)return;
  const icon=profileIcons.find(item=>item.id===state.selectedIcon)||profileIcons[0];
  els.guideProfileButton.innerHTML=`${profileAvatarHTML(icon.id)}<span class="profile-guide-label">${icon.name}</span>`;
  els.guideProfileButton.setAttribute("aria-label",`Current profile icon: ${icon.name}. Choose another icon.`);
}
function openProfilePanel(){els.profilePanel.hidden=false;renderProfilePicker();els.profilePanel.scrollIntoView({behavior:"smooth",block:"center"})}
function closeProfilePanel(){els.profilePanel.hidden=true}

function awardStar(kind,label){
  const earned=storyAwardSet();
  if(earned.has(kind))return false;
  earned.add(kind);state.awards[state.currentStory]=[...earned];saveProgress();
  updateHeader();showStarBurst(label);return true;
}
function showStarBurst(label){
  const burst=document.createElement("div");burst.className="star-burst";
  burst.innerHTML=`<span>⭐</span><strong>${label}</strong>`;
  document.body.appendChild(burst);playEffect("stars");setTimeout(()=>burst.remove(),1500);
}
function showScreen(name){[els.homeScreen,els.gameScreen,els.celebrationScreen].forEach(s=>s.classList.remove("active"));els[name].classList.add("active");window.scrollTo({top:0,behavior:"smooth"})}
const voiceProfiles=[
  {name:"Benny",role:"warm, curious woodland child",rate:.88,pitch:1.16,volume:1,gender:"bright",keywords:["Ava","Samantha","Aria","Jenny","Serena","Karen","Google US English","Natural","Premium"]},
  {name:"Mia",role:"cheerful, confident cloud adventurer",rate:.92,pitch:1.22,volume:1,gender:"bright",keywords:["Jenny","Ava","Samantha","Moira","Google UK English Female","Aria","Natural","Premium"]},
  {name:"Pip",role:"gentle, dreamy moonlight sailor",rate:.79,pitch:.96,volume:.97,gender:"calm",keywords:["Daniel","Alex","Guy","Ryan","Samantha","Google UK English Male","Natural","Premium"]}
];
let availableVoices=[];
let soundEnabled=true;
let audioContext=null;
let ambienceTimer=null;

function loadVoices(){
  if(!("speechSynthesis" in window))return;
  availableVoices=speechSynthesis.getVoices().filter(v=>/^en[-_]/i.test(v.lang));
}
loadVoices();
if("speechSynthesis" in window)speechSynthesis.onvoiceschanged=loadVoices;

function chooseNaturalVoice(profile){
  loadVoices();
  const scored=availableVoices.map(v=>{
    const name=v.name.toLowerCase();
    let score=0;
    profile.keywords.forEach((word,index)=>{if(name.includes(word.toLowerCase()))score+=100-index*4});
    if(/natural|neural|premium|enhanced|online/.test(name))score+=70;
    if(profile.gender==="bright"&&/female|ava|samantha|jenny|aria|serena|moira/.test(name))score+=18;
    if(profile.gender==="calm"&&/male|daniel|alex|guy|ryan/.test(name))score+=16;
    if(/compact|eloquence/.test(name))score+=8;
    if(v.localService)score+=3;
    return {v,score};
  }).sort((a,b)=>b.score-a.score);
  return scored[0]?.v||availableVoices[0]||null;
}

function splitForExpression(text){
  return text.match(/[^.!?]+[.!?]+|[^.!?]+$/g)?.map(x=>x.trim()).filter(Boolean)||[text];
}

function speak(text,{mood="story",onend=null}={}){
  if(!soundEnabled){onend?.();return}
  if(!("speechSynthesis" in window)){showToast("Narration is unavailable in this browser.");onend?.();return}
  speechSynthesis.cancel();
  const profile=voiceProfiles[state.currentStory]||voiceProfiles[0];
  const parts=splitForExpression(text);
  const voice=chooseNaturalVoice(profile);
  let index=0;
  const next=()=>{
    if(index>=parts.length){onend?.();return}
    const line=parts[index++];
    const u=new SpeechSynthesisUtterance(line);
    u.lang=voice?.lang||"en-US";
    if(voice)u.voice=voice;
    u.rate=profile.rate*(mood==="word"?.9:mood==="excited"?1.04:1);
    u.pitch=profile.pitch+(mood==="excited"?.08:mood==="hint"?-.05:0);
    u.volume=profile.volume;
    u.onend=()=>setTimeout(next,mood==="story"?170:70);
    u.onerror=()=>setTimeout(next,50);
    speechSynthesis.speak(u);
  };
  next();
}

function getAudioContext(){
  if(!soundEnabled)return null;
  const AC=window.AudioContext||window.webkitAudioContext;
  if(!AC)return null;
  audioContext ||= new AC();
  if(audioContext.state==="suspended")audioContext.resume();
  return audioContext;
}

function playTone(frequency,duration=.18,type="sine",gainValue=.045,delay=0){
  const ctx=getAudioContext();if(!ctx)return;
  const osc=ctx.createOscillator(),gain=ctx.createGain();
  osc.type=type;osc.frequency.value=frequency;
  gain.gain.setValueAtTime(0,ctx.currentTime+delay);
  gain.gain.linearRampToValueAtTime(gainValue,ctx.currentTime+delay+.02);
  gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+delay+duration);
  osc.connect(gain).connect(ctx.destination);osc.start(ctx.currentTime+delay);osc.stop(ctx.currentTime+delay+duration+.03);
}
function playEffect(kind){
  if(kind==="word"){playTone(660,.13,"sine",.035);playTone(880,.16,"sine",.03,.08)}
  if(kind==="success"){[523,659,784,1047].forEach((n,i)=>playTone(n,.24,"sine",.045,i*.09))}
  if(kind==="hint"){playTone(392,.22,"triangle",.035);playTone(494,.25,"triangle",.03,.15)}
  if(kind==="surprise"){[784,988,1175,1568].forEach((n,i)=>playTone(n,.32,"sine",.04,i*.07))}
  if(kind==="bird"){[1050,1320,1180].forEach((n,i)=>playTone(n,.1,"sine",.025,i*.1))}
  if(kind==="cloud"){[280,240,210].forEach((n,i)=>playTone(n,.35,"sine",.018,i*.12))}
  if(kind==="stars"){[880,1100,1320].forEach((n,i)=>playTone(n,.22,"sine",.025,i*.08))}
}
function startSceneAmbience(){
  stopSceneAmbience();
  if(!soundEnabled)return;
  const scene=state.currentStory;
  const loop=()=>{
    if(scene===0)playEffect("bird");
    if(scene===1){playTone(440,.8,"sine",.009);playTone(660,.8,"sine",.007,.25)}
    if(scene===2){playTone(220,1.4,"sine",.008);playTone(330,1.2,"sine",.006,.45)}
    ambienceTimer=setTimeout(loop,scene===0?6500:8000);
  };
  ambienceTimer=setTimeout(loop,900);
}
function stopSceneAmbience(){if(ambienceTimer){clearTimeout(ambienceTimer);ambienceTimer=null}}
function toggleSound(){
  soundEnabled=!soundEnabled;
  const button=$("soundButton");
  if(button){button.textContent=soundEnabled?"🔊":"🔇";button.setAttribute("aria-label",soundEnabled?"Turn sound off":"Turn sound on")}
  if(!soundEnabled){speechSynthesis?.cancel();stopSceneAmbience()}else{startSceneAmbience();playEffect("success")}
}
function renderHome(){
  const stars=totalEarnedStars();els.totalStars.textContent=stars;renderSelectedProfile();renderProfilePicker();
  els.worldFill.style.width=`${Math.min(100,stars/18*100)}%`;
  const growth=["🌱","🌳🦋","🌳🏡🦋","🌳🏰🦋","🌳🏰⛲🌈","🌳🏰⛲🌈🦄"];
  els.growingWorld.textContent=growth[Math.min(growth.length-1,Math.floor(stars/4))];
  const upgrades=stars>=18?"The whole fairytale world is glowing!":stars>=12?"A rainbow river appeared because of your stars!":stars>=6?"Your stars grew a magical story tree!":"Earn stars to grow trees, castles, rainbows, and magical friends.";
  els.worldMessage.textContent=`${stars}/18 stars • ${upgrades}`;els.finalWorldButton.disabled=stars<18;els.finalWorldButton.textContent=stars>=18?"See My Final World ✨":"Final World Locked — Earn 18 Stars";
  els.sceneMap.innerHTML="";
  stories.forEach((story,i)=>{
    const unlocked=i===0||state.completed.includes(i-1)||state.completed.includes(i),done=state.completed.includes(i),earned=storyAwardSet(i).size;
    const b=document.createElement("button");b.className=`scene-node scene-${i}`;b.disabled=!unlocked;
    b.innerHTML=`<div class="movie-scene-art">${unlocked?`<img class="movie-scene-image" src="assets/story-scenes/${story.art}.png" alt="">`:'<span class="locked-scene">Locked</span>'}</div><h3>${story.sceneName}</h3><p>${unlocked?story.summary:"Complete the previous story to open this scene."}</p><div class="scene-star-row" aria-label="${earned} of 6 stars">${"★".repeat(earned)}${"☆".repeat(6-earned)}</div><span class="scene-status">${done?"Visit the story again":unlocked?"Enter scene":"Locked"}</span>`;
    b.onclick=()=>startStory(i);els.sceneMap.appendChild(b)
  })
}
function characterPortrait(i){
  const characters=[{name:"Benny Bunny",asset:"bunny"},{name:"Mia Bear",asset:"bear"},{name:"Pip Penguin",asset:"penguin"}];
  const character=characters[i];
  return `<img class="story-character-icon" src="assets/profile-icons/${character.asset}.png" alt="${character.name}">`;
}
function startStory(i){Object.assign(state,{currentStory:i,step:0,selectedSequence:[],learned:new Set(),choice:null,actionCount:0,wrongSequenceAttempts:0,imagination:null});showScreen("gameScreen");startSceneAmbience();renderStep()}
function updateHeader(){const names=["1 of 6 • Explore","2 of 6 • Choose","3 of 6 • Join In","4 of 6 • Surprise","5 of 6 • Story Order","6 of 6 • Imagine"];els.stepLabel.textContent=names[state.step];els.storyTitle.textContent=stories[state.currentStory].title;const earned=storyAwardSet().size;els.storyStars.textContent="★".repeat(earned)+"☆".repeat(6-earned);document.querySelectorAll(".step-dots span").forEach((d,i)=>d.className=i<state.step?"done":i===state.step?"current":"")}
function renderStep(){updateHeader();[renderExplore,renderChoice,renderAction,renderSurprise,renderSequence,renderImagination][state.step]()}
function nextStep(){state.step++;renderStep()}
function sceneHTML(story){return `<div class="story-scene"><img class="story-scene-image" src="assets/story-scenes/${story.art}.png" alt="${story.sceneName}"><span class="scene-title">Tap the picture</span>${story.objects.map((o,i)=>`<button class="scene-object" data-object="${i}" style="left:${o.x}%;top:${o.y}%" type="button"><span class="object-word">?</span></button>`).join("")}</div>`}
function renderExplore(){const s=stories[state.currentStory];els.gamePanel.innerHTML=`<div class="character-intro">${characterPortrait(state.currentStory)}<div><span class="voice-cast">${voiceProfiles[state.currentStory].name} • ${voiceProfiles[state.currentStory].role}</span><h3>Explore ${s.sceneName}</h3></div></div><p class="instruction">Tap each picture to hear its English word.</p>${sceneHTML(s)}<p class="story-text">${s.intro}</p><div class="speech-controls"><button id="listenStory" class="primary-button">Hear the Story</button><button id="exploreNext" class="secondary-button" disabled>Find all ${s.objects.length} words</button></div><div id="feedback" class="feedback-box"></div>`;document.querySelectorAll("[data-object]").forEach(btn=>btn.onclick=()=>{const o=s.objects[+btn.dataset.object];state.learned.add(o.word);btn.classList.add("learned");btn.querySelector(".object-word").textContent=o.word;playEffect("word");speak(o.word,{mood:"word"});showFeedback(`${o.word}! You discovered ${state.learned.size} of ${s.objects.length} words.`,true);const n=$("exploreNext");if(state.learned.size===s.objects.length){n.disabled=false;n.textContent="Begin the Adventure →";awardStar("words","Word Explorer Star!")}});$("listenStory").onclick=()=>speak(s.intro);$("exploreNext").onclick=nextStep;setTimeout(()=>speak(`Welcome to ${s.sceneName}. Tap the pictures to learn their names.`),300)}
function renderChoice(){const s=stories[state.currentStory];els.gamePanel.innerHTML=`<h3>${s.choice.prompt}</h3><p class="instruction">Pick one idea.</p><div class="choice-grid">${s.choice.options.map(o=>`<button class="choice-button" data-path="${o.id}">${storyIconHTML(o.emoji)}${o.label}</button>`).join("")}</div><div id="pathResult"></div>`;document.querySelectorAll("[data-path]").forEach(b=>b.onclick=()=>{const o=s.choice.options.find(x=>x.id===b.dataset.path);state.choice=o.id;awardStar("choice","Story Chooser Star!");document.querySelectorAll("[data-path]").forEach(x=>x.disabled=true);$("pathResult").innerHTML=`<div class="path-result">${o.result}</div><button id="pathNext" class="primary-button">Continue the Story →</button>`;speak(o.result);$("pathNext").onclick=nextStep})}
function renderAction(){const s=stories[state.currentStory],a=s.action;state.actionCount=0;let items="";if(a.kind==="stars")items=[0,1,2].map((_,i)=>`<button class="tiny-action" data-tiny style="left:${18+i*30}%;top:${25+(i%2)*25}%">${storyIconHTML("star")}</button>`).join("");else if(a.kind==="cloud")items=`<div class="cloud-slider-stage"><img id="cloudSliderImage" class="cloud-slider-image" src="assets/story-assets/cloud.png" alt="Cute cloud"><input id="cloudSlider" class="cloud-slider" type="range" min="0" max="100" value="0" aria-label="Move the cloud to the right"></div>`;else items=`<button class="tiny-action" data-tiny style="left:42%;top:35%">${storyAssetHTML(a.emoji,"action-asset")}</button>`;els.gamePanel.innerHTML=`<h3>${a.prompt}</h3><p class="instruction">${a.instruction}</p><div class="tiny-stage">${items}</div><div id="feedback" class="feedback-box"></div>`;document.querySelectorAll("[data-tiny]").forEach(btn=>btn.onclick=()=>activateTiny(btn,a));const slider=$("cloudSlider"),cloud=$("cloudSliderImage");if(slider){slider.oninput=()=>{const travel=cloud.parentElement.clientWidth-cloud.clientWidth;cloud.style.left=`${(+slider.value/100)*travel}px`;if(+slider.value===100&&!slider.dataset.done){slider.dataset.done="1";slider.disabled=true;activateTiny(cloud,a)}}}speak(a.prompt)}
function activateTiny(btn,a){if(btn.dataset.done)return;state.actionCount++;if(a.kind==="stars"){btn.dataset.done="1";btn.classList.add("star-sparkle")}else if(a.kind==="bird")btn.classList.add("bird-flap");else if(a.kind==="cloud")btn.classList.add("cloud-move");if(state.actionCount>=a.goal){awardStar("helper","Helpful Hero Star!");showFeedback("You helped the story move forward!",true);playEffect("success");speak("You helped the story move forward!",{mood:"excited"});setTimeout(nextStep,1000)}else showFeedback(`${state.actionCount} of ${a.goal}!`,true)}
async function tryBlowAction(){const a=stories[state.currentStory].action;try{const stream=await navigator.mediaDevices.getUserMedia({audio:true});const ctx=new AudioContext(),source=ctx.createMediaStreamSource(stream),analyser=ctx.createAnalyser(),data=new Uint8Array(analyser.frequencyBinCount);source.connect(analyser);showFeedback("Blow gently now…",true);let frames=0;const check=()=>{analyser.getByteFrequencyData(data);const avg=data.reduce((x,y)=>x+y,0)/data.length;if(avg>38||frames>120){stream.getTracks().forEach(t=>t.stop());ctx.close();const cloud=document.querySelector("[data-tiny]");activateTiny(cloud,a)}else{frames++;requestAnimationFrame(check)}};check()}catch(e){showFeedback("Microphone unavailable. Tap the cloud instead!",false)}}
function renderSurprise(){const s=stories[state.currentStory];els.gamePanel.innerHTML=`<h3>The story continues…</h3><p class="story-text">${s.continuation}</p>${s.continuationImage?`<img class="continuation-asset" src="assets/story-assets/${s.continuationImage}.png" alt="${s.continuationImage==="rock"?"A moonlit rock":"Ribbon caught on a bell"}">`:""}<p class="instruction">A secret is hiding here. Tap it!</p><button id="surpriseBox" class="surprise-box">${storyAssetHTML(s.surprise.closed,"surprise-asset")}</button><div id="surpriseResult"></div>`;speak(s.continuation);$("surpriseBox").onclick=()=>{$("surpriseBox").style.display="none";$("surpriseResult").innerHTML=`<div class="surprise-reveal">${storyAssetHTML(s.surprise.open,"surprise-asset")}</div><p class="path-result">${s.surprise.text}</p><button id="surpriseNext" class="primary-button">Put the Story Together →</button>`;awardStar("surprise","Surprise Finder Star!");playEffect("surprise");speak(s.surprise.text,{mood:"excited"});$("surpriseNext").onclick=nextStep}}
function renderSequence(){const s=stories[state.currentStory];state.selectedSequence=[];const shuffled=[...s.sequence].sort(()=>Math.random()-.5);els.gamePanel.innerHTML=`<h3>What happened first, next, and last?</h3><p class="sequence-help">Tap all four pictures in story order.</p><div class="sequence-grid">${shuffled.map(x=>`<button class="picture-card" data-id="${x.id}"><span class="order-badge">?</span><img class="sequence-card-image" src="assets/sequence-cards/${x.image}" alt="${x.text}"><span>${x.text}</span></button>`).join("")}</div><button id="checkOrder" class="primary-button">Check My Story</button><button id="clearOrder" class="secondary-button">Start Again</button><div id="hint"></div><div id="feedback" class="feedback-box"></div>`;document.querySelectorAll(".picture-card").forEach(b=>b.onclick=()=>toggleSequence(b));$("clearOrder").onclick=renderSequence;$("checkOrder").onclick=checkSequence}
function toggleSequence(btn){const id=btn.dataset.id,i=state.selectedSequence.indexOf(id);if(i>=0)state.selectedSequence.splice(i,1);else if(state.selectedSequence.length<4)state.selectedSequence.push(id);document.querySelectorAll(".picture-card").forEach(c=>{const n=state.selectedSequence.indexOf(c.dataset.id);c.classList.toggle("selected",n>=0);c.querySelector(".order-badge").textContent=n>=0?n+1:"?"})}
function checkSequence(){const s=stories[state.currentStory],correct=s.sequence.map(x=>x.id);if(state.selectedSequence.length<4){showFeedback("Choose all four pictures first.",false);return}const wrongAt=correct.findIndex((id,i)=>state.selectedSequence[i]!==id);if(wrongAt===-1){awardStar("sequence","Story Builder Star!");const praise=s.praise[Math.floor(Math.random()*s.praise.length)];showFeedback(praise,true);playEffect("success");speak(praise,{mood:"excited"});setTimeout(nextStep,1200)}else{state.wrongSequenceAttempts++;const expected=s.sequence[wrongAt],position=["first","second","third","last"][wrongAt];$("hint").innerHTML=`<div class="hint-card">💡 Plot hint: Think about the ${position} event. ${expected.hint}</div>`;showFeedback(`${s.character} says, “Almost! The pictures are telling us a clue.”`,false);playEffect("hint");speak(`Here is a story clue. ${expected.hint}`,{mood:"hint"})}}
function renderImagination(){const s=stories[state.currentStory];els.gamePanel.innerHTML=`<h3>${s.imagination.prompt}</h3><p class="instruction">There is no wrong answer. Choose an idea and finish the story!</p><div class="choice-grid">${s.imagination.choices.map((x,i)=>`<button class="imagination-choice" data-imagine="${i}">${storyAssetHTML(x.emoji,"imagination-asset")}${x.word}</button>`).join("")}</div><div id="builder"></div>`;document.querySelectorAll("[data-imagine]").forEach(b=>b.onclick=()=>{const x=s.imagination.choices[+b.dataset.imagine];state.imagination=x.word;awardStar("imagination","Imagination Star!");document.querySelectorAll("[data-imagine]").forEach(y=>y.disabled=true);$("builder").innerHTML=`<div class="imagination-cloud"><div class="story-builder">“After the adventure, ${s.character} looked up and discovered ${x.word}. Then a brand-new story began…”</div></div><button id="finishStory" class="primary-button">Grow My Fairytale World ✨</button>`;playEffect("success");speak(`Wonderful imagination! ${s.character} discovered ${x.word}.`,{mood:"excited"});$("finishStory").onclick=completeStory})}
function showFeedback(msg,good){const f=$("feedback");if(!f)return;f.textContent=msg;f.className=`feedback-box ${good?"good":"try"}`}
function showFinalWorld(){if(totalEarnedStars()<18){showToast("Earn all 18 stars to unlock the Final World.");return}els.celebrationTitle.textContent="Your Fairytale World Is Complete!";els.rewardEmoji.innerHTML='<img class="final-collection-scene" src="assets/story-scenes/final-18-stars.png" alt="All of the magical treasures from the three stories together">';els.celebrationText.textContent="You earned all 18 stars! Look at every magical friend and treasure you collected.";els.nextStoryButton.style.display="none";showScreen("celebrationScreen")}
function completeStory(){stopSceneAmbience();playEffect("success");if(!state.completed.includes(state.currentStory)){state.completed.push(state.currentStory);state.completed.sort((a,b)=>a-b);saveProgress()}const s=stories[state.currentStory],rewards={0:{asset:"garden-tree",alt:"A magical garden tree"},1:{asset:"cloud-castle",alt:"A cloud castle"},2:{asset:"returning-star",alt:"A happy golden star"}};if(totalEarnedStars()>=18){showFinalWorld();return}els.celebrationTitle.textContent="Story Complete!";els.rewardEmoji.innerHTML=rewards[state.currentStory]?`<img class="completion-tree" src="assets/story-assets/${rewards[state.currentStory].asset}.png" alt="${rewards[state.currentStory].alt}">`:s.reward;els.celebrationText.textContent=`You finished “${s.title},” added ${s.worldGrowth} to the fairytale world, and created your own ending about ${state.imagination}.`;els.nextStoryButton.style.display=state.currentStory<stories.length-1?"inline-block":"none";showScreen("celebrationScreen")}
function showToast(msg){els.toast.textContent=msg;els.toast.classList.add("show");setTimeout(()=>els.toast.classList.remove("show"),1800)}
$("openProfileButton").onclick=openProfilePanel;$("guideProfileButton").onclick=openProfilePanel;$("closeProfileButton").onclick=closeProfilePanel;
$("homeButton").onclick=()=>{speechSynthesis?.cancel();stopSceneAmbience();renderHome();showScreen("homeScreen")};$("mapButton").onclick=()=>{renderHome();showScreen("homeScreen")};els.finalWorldButton.onclick=showFinalWorld;els.nextStoryButton.onclick=()=>startStory(Math.min(state.currentStory+1,stories.length-1));$("resetButton").onclick=()=>{if(!confirm("Reset all story progress?"))return;state.completed=[];state.awards={};state.unlockedIcons=["cat"];state.selectedIcon="cat";saveProgress();renderHome();closeProfilePanel();showToast("Progress reset.")};renderHome();

$("soundButton").onclick=toggleSound;
