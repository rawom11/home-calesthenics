const EXERCISES = [('Wall Push-Up', 'beginner', 'Push', 'Wall-supported pushing pattern.'), ('Incline Push-Up', 'beginner', 'Push', 'Hands on a stable elevated surface.'), ('Knee Push-Up', 'beginner', 'Push', 'Modified floor push-up.'), ('Standard Push-Up', 'beginner', 'Push', 'Controlled full-body push-up.'), ('Wide Push-Up', 'beginner', 'Push', 'Slightly wider hand position.'), ('Close Push-Up', 'beginner', 'Push', 'Closer hand position.'), ('Scapular Push-Up', 'beginner', 'Push', 'Controlled shoulder-blade movement.'), ('Push-Up Pause', 'beginner', 'Push', 'Brief pause near the bottom.'), ('Slow Push-Up', 'beginner', 'Push', 'Slow, controlled lowering.'), ('Pike Hold', 'beginner', 'Push', 'Shoulder-focused bodyweight hold.'), ('Bodyweight Squat', 'beginner', 'Legs', 'Basic squat pattern.'), ('Tempo Squat', 'beginner', 'Legs', 'Slow, controlled squat.'), ('Reverse Lunge', 'beginner', 'Legs', 'Step backward into a lunge.'), ('Forward Lunge', 'beginner', 'Legs', 'Alternating controlled lunges.'), ('Split Squat', 'beginner', 'Legs', 'Stationary single-leg pattern.'), ('Calf Raise', 'beginner', 'Legs', 'Controlled heel raises.'), ('Glute Bridge', 'beginner', 'Legs', 'Hip extension from the floor.'), ('Single-Leg Glute Bridge', 'intermediate', 'Legs', 'Single-leg hip extension.'), ('Wall Sit', 'beginner', 'Legs', 'Isometric lower-body hold using a wall.'), ('Squat Hold', 'beginner', 'Legs', 'Isometric squat position.'), ('Dead Bug', 'beginner', 'Core', 'Controlled core stability drill.'), ('Bird Dog', 'beginner', 'Core', 'Opposite arm and leg extension.'), ('Forearm Plank', 'beginner', 'Core', 'Stable anti-extension hold.'), ('High Plank', 'beginner', 'Core', 'Straight-arm plank.'), ('Side Plank', 'beginner', 'Core', 'Lateral core stability.'), ('Knee Side Plank', 'beginner', 'Core', 'Modified side plank.'), ('Heel Taps', 'beginner', 'Core', 'Alternating controlled trunk movement.'), ('Reverse Crunch', 'beginner', 'Core', 'Small controlled hip curl.'), ('Knee Tuck', 'beginner', 'Core', 'Tuck knees toward the chest.'), ('Hollow Tuck Hold', 'beginner', 'Core', 'Tucked hollow-body position.'), ('Marching Glute Bridge', 'beginner', 'Full Body', 'Bridge with alternating leg lifts.'), ('Bear Hold', 'beginner', 'Full Body', 'Knees hover close to the floor.'), ('Bear Shoulder Tap', 'intermediate', 'Full Body', 'Shoulder taps from bear position.'), ('Mountain Climber', 'beginner', 'Full Body', 'Alternating knee drive.'), ('Slow Mountain Climber', 'beginner', 'Full Body', 'Controlled knee drives.'), ('Step-Back Burpee', 'beginner', 'Full Body', 'Low-impact burpee pattern.'), ('Squat to Reach', 'beginner', 'Full Body', 'Squat with overhead reach.'), ('Inchworm', 'beginner', 'Full Body', 'Walk hands out and back.'), ('Beast Hold', 'beginner', 'Full Body', 'Quadruped hover.'), ('Crab Reach', 'beginner', 'Full Body', 'Hip-opening bodyweight movement.'), ('Cat-Cow', 'beginner', 'Mobility', 'Gentle spinal mobility.'), ("Child's Pose", 'beginner', 'Mobility', 'Relaxed hip and back mobility.'), ('Thread the Needle', 'beginner', 'Mobility', 'Thoracic rotation.'), ("World's Greatest Stretch", 'beginner', 'Mobility', 'Multi-directional mobility flow.'), ('Deep Squat Hold', 'beginner', 'Mobility', 'Comfortable squat mobility.'), ('Hip Flexor Stretch', 'beginner', 'Mobility', 'Gentle hip-flexor stretch.'), ('Hamstring Fold', 'beginner', 'Mobility', 'Gentle posterior-chain stretch.'), ('Ankle Rocks', 'beginner', 'Mobility', 'Controlled ankle mobility.'), ('Shoulder Circles', 'beginner', 'Mobility', 'Gentle shoulder movement.'), ('Wrist Rocks', 'beginner', 'Mobility', 'Gentle wrist preparation.'), ('Diamond Push-Up', 'intermediate', 'Push', 'Narrow-hand push-up.'), ('Decline Push-Up', 'intermediate', 'Push', 'Feet on a stable elevated surface.'), ('Pike Push-Up', 'intermediate', 'Push', 'Vertical pressing progression.'), ('Explosive Push-Up', 'intermediate', 'Push', 'Powerful but controlled push.'), ('Archer Push-Up', 'pro', 'Push', 'One side takes more load.'), ('Pseudo-Planche Push-Up', 'pro', 'Push', 'Forward-leaning advanced push-up.'), ('Typewriter Push-Up', 'pro', 'Push', 'Side-to-side push-up variation.'), ('Handstand Hold', 'pro', 'Push', 'Advanced balance skill in a clear space.'), ('Wall Handstand Push-Up', 'pro', 'Push', 'Advanced overhead pressing against a wall.'), ('Uneven Push-Up', 'intermediate', 'Push', 'One hand slightly elevated on a stable surface.'), ('Cossack Squat', 'intermediate', 'Legs', 'Side-to-side strength and mobility.'), ('Bulgarian Split Squat', 'intermediate', 'Legs', 'Rear foot on a stable surface.'), ('Jump Squat', 'intermediate', 'Legs', 'Explosive squat with soft landing.'), ('Split Squat Pulse', 'intermediate', 'Legs', 'Small controlled pulses.'), ('Reverse Lunge to Knee Drive', 'intermediate', 'Legs', 'Lunge into controlled balance.'), ('Lateral Lunge', 'intermediate', 'Legs', 'Side lunge pattern.'), ('Curtsy Lunge', 'intermediate', 'Legs', 'Diagonal lunge pattern.'), ('Single-Leg Calf Raise', 'intermediate', 'Legs', 'Calf raise on one leg.'), ('Shrimp Squat Progression', 'pro', 'Legs', 'Advanced single-leg progression.'), ('Pistol Squat Progression', 'pro', 'Legs', 'Advanced single-leg squat progression.'), ('Hollow Body Hold', 'intermediate', 'Core', 'Full hollow-body isometric.'), ('Hollow Rocks', 'intermediate', 'Core', 'Small controlled rocking.'), ('V-Up', 'intermediate', 'Core', 'Controlled upper/lower-body fold.'), ('Bicycle Crunch', 'intermediate', 'Core', 'Alternating rotational movement.'), ('Plank Shoulder Tap', 'intermediate', 'Core', 'Anti-rotation plank drill.'), ('Plank Up-Down', 'intermediate', 'Core', 'Move between plank positions.'), ('Side Plank Reach-Through', 'intermediate', 'Core', 'Controlled side-plank rotation.'), ('Dragon Flag Progression', 'pro', 'Core', 'Advanced full-body core progression.'), ('L-Sit Tuck Hold', 'pro', 'Core', 'Advanced compression hold.'), ('V-Sit Progression', 'pro', 'Core', 'Advanced compression balance.'), ('Burpee', 'intermediate', 'Full Body', 'Full-body conditioning movement.'), ('Squat Thrust', 'intermediate', 'Full Body', 'Burpee pattern without the jump.'), ('Bear Crawl', 'intermediate', 'Full Body', 'Controlled crawl.'), ('Crab Walk', 'intermediate', 'Full Body', 'Controlled crab movement.'), ('Sprawl', 'intermediate', 'Full Body', 'Quick floor transition.'), ('Broad Jump', 'intermediate', 'Full Body', 'Horizontal jump with controlled landing.'), ('Skater Hop', 'intermediate', 'Full Body', 'Lateral hop with soft landing.'), ('Bear Crawl Shoulder Tap', 'intermediate', 'Full Body', 'Crawl position with controlled taps.'), ('Handstand Walk Progression', 'pro', 'Full Body', 'Advanced balance skill in clear space.'), ('Burpee Broad Jump', 'pro', 'Full Body', 'Advanced conditioning combination.'), ('90/90 Hip Switch', 'beginner', 'Mobility', 'Controlled hip rotation.'), ('Thoracic Rotation', 'beginner', 'Mobility', 'Upper-back rotation.'), ('Deep Lunge Reach', 'beginner', 'Mobility', 'Lunge with controlled reach.'), ('Downward Dog', 'beginner', 'Mobility', 'Shoulder and posterior-chain mobility.'), ('Upward Dog Progression', 'intermediate', 'Mobility', 'Gentle front-body extension.'), ('Scorpion Stretch', 'intermediate', 'Mobility', 'Dynamic hip and trunk mobility.'), ('Pigeon Pose', 'intermediate', 'Mobility', 'Hip mobility stretch.'), ('Standing Quad Stretch', 'beginner', 'Mobility', 'Gentle quad stretch.'), ("World's Greatest Stretch Flow", 'beginner', 'Mobility', 'Smooth multi-position flow.'), ('Gentle Spinal Twist', 'beginner', 'Mobility', 'Controlled trunk rotation.')].map(([name,level,category,desc],i)=>({id:i+1,name,level,category,desc}));

const PRESETS = {
  beginner: {title:"Beginner Foundation",level:"beginner",desc:"A balanced, equipment-free starting session focused on control and basic movement.",ids:[4,11,17,21,23,32,41,44]},
  intermediate: {title:"Intermediate Strength",level:"intermediate",desc:"A moderate bodyweight session combining pushing, legs and core.",ids:[51,53,61,62,65,71,72,74]},
  pro: {title:"Pro Skill Session",level:"pro",desc:"Advanced skill and strength movements. Use clear space and controlled technique.",ids:[55,56,57,58,69,70,79,80]},
  core: {title:"Core & Mobility",level:"beginner",desc:"A lower-impact session for trunk control, mobility and recovery.",ids:[21,22,23,25,27,42,43,44,91,100]}
};

const KEY="home_calisthenics_v2";
let data=JSON.parse(localStorage.getItem(KEY)||'{"done":{},"plan":[]}');
let currentMonth=new Date();
let activeLevel="all";
let activeCategory="all";

function save(){localStorage.setItem(KEY,JSON.stringify(data));}
function key(d=new Date()){return d.toISOString().slice(0,10)}
function showToast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1600)}
function levelName(l){return l==="pro"?"PRO":l==="intermediate"?"INTERMEDIATE":"BEGINNER"}

function setView(id){
  document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===id));
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===id));
  if(id==="library") renderLibrary();
  if(id==="planner") renderPlan();
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>setView(b.dataset.view)));

document.getElementById("todayBtn").onclick=()=>{currentMonth=new Date();renderCalendar();setView("dashboard");document.getElementById("todayExercises").scrollIntoView({behavior:"smooth",block:"center"})};
document.getElementById("startBtn").onclick=()=>setView("planner");
document.getElementById("plannerBtn").onclick=()=>setView("planner");

function doneSet(date=key()){return new Set(data.done[date]||[])}
function toggleExercise(id,date=key()){
  const a=new Set(data.done[date]||[]);
  a.has(id)?a.delete(id):a.add(id);
  data.done[date]=[...a];save();renderToday();renderCalendar();renderStats();
}
function workoutComplete(date){
  const ids=getTodayIds();
  return ids.length>0 && ids.every(id=>doneSet(date).has(id));
}
function getTodayIds(){return data.plan.length?data.plan:PRESETS.beginner.ids}

function renderStats(){
  const now=new Date(), start=new Date(now); start.setDate(now.getDate()-((now.getDay()+6)%7));
  let weekDays=0, weekExercises=0,total=0,streak=0;
  Object.entries(data.done).forEach(([d,ids])=>{if(ids.length) total++});
  for(let i=0;i<7;i++){const d=new Date(start);d.setDate(start.getDate()+i);if(workoutComplete(key(d)))weekDays++;weekExercises+=doneSet(key(d)).size}
  for(let i=0;i<366;i++){const d=new Date(now);d.setDate(now.getDate()-i);if(workoutComplete(key(d)))streak++;else if(i>0)break}
  document.getElementById("weekStat").textContent=Math.round(weekDays/7*100)+"%";
  document.getElementById("totalStat").textContent=total;
  document.getElementById("exerciseStat").textContent=weekExercises;
  document.getElementById("streak").textContent=streak;
  const levels=getTodayIds().map(id=>EXERCISES[id-1]?.level);
  document.getElementById("levelStat").textContent=levels.includes("pro")?"PRO":levels.includes("intermediate")?"INTERMEDIATE":"BEGINNER";
}

function renderCalendar(){
  const el=document.getElementById("calendar"), y=currentMonth.getFullYear(),m=currentMonth.getMonth();
  const first=new Date(y,m,1).getDay(), days=new Date(y,m+1,0).getDate();
  document.getElementById("monthTitle").textContent=currentMonth.toLocaleString("en-US",{month:"long",year:"numeric"});
  el.innerHTML=["MON","TUE","WED","THU","FRI","SAT","SUN"].map(x=>`<div class="weekday">${x}</div>`).join("");
  const mondayIndex=(first+6)%7;
  for(let i=0;i<mondayIndex;i++) el.innerHTML+=`<div class="day empty"></div>`;
  for(let n=1;n<=days;n++){
    const d=new Date(y,m,n),k=key(d), planned=(d.getDay()===1||d.getDay()===3||d.getDay()===5);
    const classes=["day",k===key()?"today":"",doneSet(k).size?"done":"",planned?"planned":""].join(" ");
    el.innerHTML+=`<button class="${classes}" data-date="${k}"><span class="day-num">${n}</span><span class="day-label">${planned?"TRAIN":"REST / PLAN"}</span></button>`;
  }
  el.querySelectorAll("[data-date]").forEach(b=>b.onclick=()=>{const d=new Date(b.dataset.date+"T12:00:00");currentMonth=d;renderCalendar();showToast("Selected "+d.toLocaleDateString())});
}
document.getElementById("prevMonth").onclick=()=>{currentMonth.setMonth(currentMonth.getMonth()-1);renderCalendar()};
document.getElementById("nextMonth").onclick=()=>{currentMonth.setMonth(currentMonth.getMonth()+1);renderCalendar()};

function renderToday(){
  const ids=getTodayIds(), done=doneSet(), list=document.getElementById("todayExercises");
  const first=EXERCISES[ids[0]-1], preset=data.plan.length?null:PRESETS.beginner;
  document.getElementById("todayTitle").textContent=preset?preset.title:"My Custom Workout";
  document.getElementById("todaySub").textContent=preset?preset.desc:"Your saved exercise selection.";
  document.getElementById("todayLevel").textContent=levelName(first?.level||"beginner");
  list.innerHTML=ids.map((id,i)=>{const e=EXERCISES[id-1],c=done.has(id);return `<div class="mini-ex"><span class="mini-num">${String(i+1).padStart(2,"0")}</span><div><strong>${e.name}</strong><small>${e.category} · ${levelName(e.level)}</small></div><button class="check-btn ${c?"checked":""}" data-id="${id}">${c?"✓":""}</button></div>`}).join("");
  list.querySelectorAll(".check-btn").forEach(b=>b.onclick=()=>toggleExercise(+b.dataset.id));
  const n=ids.filter(id=>done.has(id)).length,p=ids.length?Math.round(n/ids.length*100):0;
  document.getElementById("sessionText").textContent=`${n} / ${ids.length}`;
  document.getElementById("sessionBar").style.width=p+"%";
}

function renderLibrary(){
  const q=(document.getElementById("search").value||"").toLowerCase();
  const items=EXERCISES.filter(e=>(activeLevel==="all"||e.level===activeLevel)&&(activeCategory==="all"||e.category===activeCategory)&&(!q||(e.name+" "+e.category+" "+e.desc).toLowerCase().includes(q)));
  document.getElementById("libraryCount").textContent=items.length;
  document.getElementById("exerciseGrid").innerHTML=items.map(e=>`<article class="exercise-card"><div class="card-top"><span class="level-tag ${e.level}">${levelName(e.level)}</span><span class="muted">${e.category}</span></div><h3>${e.name}</h3><p>${e.desc}</p><footer><span>#${String(e.id).padStart(3,"0")}</span><button class="add-btn" data-add="${e.id}">+ Add</button></footer></article>`).join("");
  document.querySelectorAll("[data-add]").forEach(b=>b.onclick=()=>{const id=+b.dataset.add;if(!data.plan.includes(id))data.plan.push(id);save();showToast("Added to your plan");renderStats();});
}
document.getElementById("search").oninput=renderLibrary;
document.getElementById("categoryFilter").onchange=e=>{activeCategory=e.target.value;renderLibrary()};
document.querySelectorAll("#levelFilters button").forEach(b=>b.onclick=()=>{activeLevel=b.dataset.level;document.querySelectorAll("#levelFilters button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");renderLibrary()});

let selectedPreset="beginner";
function renderPlan(){
  const p=PRESETS[selectedPreset], ids=data.plan.length?data.plan:p.ids;
  document.querySelectorAll(".preset").forEach(b=>b.classList.toggle("selected",b.dataset.preset===selectedPreset));
  document.getElementById("planLevel").textContent=levelName(p.level);
  document.getElementById("planTitle").textContent=data.plan.length?"My Custom Workout":p.title;
  document.getElementById("planDescription").textContent=data.plan.length?"Custom selection — add movements from the Exercise Library.":p.desc;
  document.getElementById("planList").innerHTML=ids.map((id,i)=>{const e=EXERCISES[id-1];return `<div class="plan-item"><span class="num">${String(i+1).padStart(2,"0")}</span><div><strong>${e.name}</strong><small>${e.category} · ${levelName(e.level)}</small></div><button class="remove" data-remove="${id}" title="Remove">×</button></div>`}).join("");
  document.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>{data.plan=ids.filter(id=>id!==+b.dataset.remove);save();renderPlan();renderToday();renderStats()});
}
document.querySelectorAll(".preset").forEach(b=>b.onclick=()=>{selectedPreset=b.dataset.preset;data.plan=[];save();renderPlan();renderToday();renderStats()});
document.getElementById("clearPlan").onclick=()=>{data.plan=[];save();renderPlan();renderToday();showToast("Custom plan cleared")};
document.getElementById("savePlan").onclick=()=>{save();showToast("Workout saved")};
renderCalendar();renderToday();renderStats();
