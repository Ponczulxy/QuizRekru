const questions = [
    {q: "Gracz zgłasza na czacie, że ktoś cheatuje. Jako Helper UNIMC.pl co robisz jako pierwszy?", 
     a: ["A) Pytaj o szczegóły (nick etc.) i cicho obserwuj gracza", 
         "B) Od razu dajesz bana", 
         "C) Nic", 
         "D) Piszesz na czacie o cheaterze"], c: 0},
    
    {q: "Gracz Cię obraża (nawet rodzinę). Co robisz?", 
     a: ["A) Wyzywasz go", 
         "B) Natychmiast ban", 
         "C) Dajesz mu muta", 
         "D) Ignorujesz"], c: 2},
    
    {q: "Ktoś zgłasza buga serwera. Twoja akcja?", 
     a: ["A) Przekazujesz wyższej administracji", 
         "B) Mówisz żeby zgłosił na forum", 
         "C) To nie mój problem", 
         "D) Restartujesz serwer"], c: 0},
    
    {q: "Widzisz gracza na cheatach. Działanie?", 
     a: ["A) Od razu ban", 
         "B) Biorę go na sprawdzanie", 
         "C) Piszesz mu prywatnie ostrzeżenie", 
         "D) Pytasz innych graczy"], c: 1},
    
    {q: "Dobra praca w teamie Helperów to:", 
     a: ["A) Konkurencja między nami", 
         "B) Pomagamy sobie nawzajem", 
         "C) Każdy robi swoje", 
         "D) Wyzywanie sobie wzajemnie rodziców"], c: 1},
    
    {q: "Gracz chce darmowe itemy/rangi. Odpowiadasz:", 
     a: ["A) Kierujesz go na sklep serwera", 
         "B) Mut za spam", 
         "C) Dajesz mu faworke", 
         "D) Ban za zawracanie dupy"], c: 0},
    
    {q: "Widzisz że inny Helper łamie regulamin. Co robisz?", 
     a: ["A) Piszesz mu prywatnie", 
         "B) Strzelasz z ucha do wyższej administarcji", 
         "C) Jego sprawa", 
         "D) Piszesz publicznie na Discordzie"], c: 1},
    
    {q: "Ile multikont jest dozwolone na serwerze", 
     a: ["A) 4", 
         "B) 5", 
         "C) 6", 
         "D) 8"], c: 2},
    
    {q: "Ile dozwolone jest wagoników w trapie", 
     a: ["A) 3", 
         "B) Nie ma limitu", 
         "C) 1", 
         "D) 2"], c: 0},
    
    {q: "Czy za współpracę z cheaterem jest ban", 
     a: ["A) Tak, czasowy", 
         "B) Tak, perm", 
         "C) Nie ma", 
         "D) Zostawiam go w sprawdzarce"], c: 0},
    
    {q: "Która z poniższych modyfikacji jest niedozwolona na trybie anarchia-ffa", 
     a: ["A) Replay mod", 
         "B) Soup api", 
         "C) HitBox+", 
         "D) Optifine"], c: 1},
    
    {q: "Czy banujemy za posiadanie cheatów na komputerze", 
     a: ["A) Tak", 
         "B) Nie", 
         "C) Usuwam je z komputera gracza", 
         "D) Uruchamiam mu je i gramy razem"], c: 1},
    
    {q: "Gracz grozi DDoS. Reakcja:", 
     a: ["A) Olewasz", 
         "B) Proszę o dowody i przekazuję wyższej administracji", 
         "C) Ostrzegasz go", 
         "D) Dajesz dane serwera"], c: 1},
    
    {q: "Czy jest dozwolone sprawdzanie anydeskiem", 
     a: ["A) Tak", 
         "B) Nie", 
         "C) Tak, ale tylko od rangi J.ADM", 
         "D) Tak, ale musi się zgodzić"], c: 1},
    
    {q: "Co zrobisz jak gracz próbuje oszukać administrację", 
     a: ["A) Daję mu bana za próbę oszustwa administracji", 
         "B) Nic", 
         "C) Daje mu muta", 
         "D) Oszukuje z nim"], c: 0},
    
    {q: "Gracz udaje admina. Robisz:", 
     a: ["A) Daję mu bana za podszywanie się pod administrację", 
         "B) Ostrzeżenie", 
         "C) Pytasz prawdziwego admina", 
         "D) Ignorujesz"], c: 0},
    
    {q: "Najważniejsza cecha Helpera:", 
     a: ["A) Zarządanie całym serwerem", 
         "B) Cierpliwy i profesjonalny, szybko reaguje", 
         "C) Nic nie robi", 
         "D) Nie miły dla graczy"], c: 1},
    
    {q: "Gracz prosi o unban. Twoja rola:", 
     a: ["A) Mówisz mu żeby zrobił odwołanie", 
         "B) Sam unbannujesz", 
         "C) Od razu unban", 
         "D) Ignorujesz"], c: 0},
    
    {q: "Sprzedaż rang jako Helper:", 
     a: ["A) OK prywatnie", 
         "B) Zabronione całkowicie", 
         "C) Tylko z adminem", 
         "D) Za walutę serwera"], c: 1},
    
    {q: "Na ile jest ban za prowokacje administracji", 
     a: ["A) 7d", 
         "B) Perm", 
         "C) 3d", 
         "D) 1d"], c: 0}

         
];



let currentIdx = 0, score = 0, wrongs = 0, timeouts = 0, timer, startTime = Date.now();


const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
function initParticles() {
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    for(let i=0; i<180; i++) particles.push({x: Math.random()*canvas.width, y: Math.random()*canvas.height, vx: (Math.random()-0.5)*0.6, vy: (Math.random()-0.5)*0.6, size: Math.random()*4});
}
function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height); ctx.fillStyle = 'rgba(0, 210, 255, 0.3)';
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; if(p.x<0||p.x>canvas.width)p.vx*=-1; if(p.y<0||p.y>canvas.height)p.vy*=-1; ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2); ctx.fill(); });
    requestAnimationFrame(draw);
}


function showNotify(msg, color) {
    const container = document.getElementById("notification-container");
    const toast = document.createElement("div");
    toast.className = "toast"; toast.textContent = msg; toast.style.borderColor = color;
    container.appendChild(toast); setTimeout(() => toast.remove(), 3000);
}


function startTimer() {
    clearInterval(timer);
    let msLeft = 30000;
    const ring = document.querySelector(".timer-ring circle");
    const text = document.getElementById("time-left");
    timer = setInterval(() => {
        msLeft -= 50;
        text.textContent = Math.ceil(msLeft / 1000);
        ring.style.strokeDashoffset = 138.2 - (msLeft / 30000) * 138.2;
        if (msLeft <= 0) { clearInterval(timer); handleTime(); }
    }, 50);
}


function loadQuestion() {
    const q = questions[currentIdx];
    document.getElementById("q-counter").textContent = `Pytanie ${String(currentIdx + 1).padStart(2, '0')} / ${questions.length}`;
    document.getElementById("question-text").textContent = q.q;
    document.getElementById("progress-bar").style.width = `${((currentIdx)/questions.length)*100}%`;
    const grid = document.getElementById("options-grid");
    grid.innerHTML = "";
    q.a.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.className = "option-btn"; btn.textContent = opt;
        btn.onclick = () => select(i, btn); grid.appendChild(btn);
    });
    document.getElementById("next-btn").classList.add("hidden");
    startTimer();
}

function select(idx, btn) {
    clearInterval(timer);
    const correct = questions[currentIdx].c;
    document.querySelectorAll(".option-btn").forEach(b => b.disabled = true);
    if(idx === correct) { btn.classList.add("correct-ans"); score++; } 
    else { btn.classList.add("wrong-ans"); document.querySelectorAll(".option-btn")[correct].classList.add("correct-ans"); wrongs++; showNotify("BŁĘDNA ODPOWIEDŹ!", "#ff4b2b"); }
    document.getElementById("next-btn").classList.remove("hidden");
}

function handleTime() {
    document.querySelectorAll(".option-btn").forEach(b => b.disabled = true);
    document.querySelectorAll(".option-btn")[questions[currentIdx].c].classList.add("correct-ans");
    timeouts++; showNotify("CZAS MINĄŁ!", "#ffbb00");
    document.getElementById("next-btn").classList.remove("hidden");
}

document.getElementById("next-btn").onclick = () => {
    currentIdx++; if(currentIdx < questions.length) loadQuestion(); else finish();
};

function animateValue(obj, start, end, duration, suffix = "") {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + suffix;
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

function finish() {
    document.getElementById("quiz-content").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");
    const totalTime = Math.floor((Date.now() - startTime)/1000);
    const successRate = Math.round((score / questions.length) * 100);
    const failRate = 100 - successRate;

    const isPassed = successRate >= 70;
    const verdictColor = isPassed ? "var(--correct)" : "var(--wrong)";
    const verdictText = isPassed ? "WYNIK: POZYTYWNY" : "WYNIK: NEGATYWNY";
    const verdictSub = isPassed ? "Gratulacje!" : "Niestety, spróbuj ponownie za jakiś czas.";

    document.getElementById("final-logs").innerHTML = `
        <div class="stat-circle"><span id="perc-main" class="stat-percent-val">0%</span></div>
        <div class="verdict-box" style="border-color: ${verdictColor}">
            <h2 style="color: ${verdictColor}; font-weight: 900; letter-spacing: 2px;">${verdictText}</h2>
            <p style="font-size: 12px; opacity: 0.7; margin-top: 5px;">${verdictSub}</p>
        </div>
        <div class="log-row"><span>CZAS OPERACJI</span><span class="log-val">${totalTime}s</span></div>
        <div class="log-row" style="border-color:var(--correct)"><span>POPRAWNE</span><span id="perc-ok" class="log-val">0%</span></div>
        <div class="log-row" style="border-color:var(--wrong)"><span>BŁĘDNE / BRAK</span><span id="perc-bad" class="log-val">0%</span></div>
    `;

    setTimeout(() => {
        animateValue(document.getElementById("perc-main"), 0, successRate, 1500, "%");
        animateValue(document.getElementById("perc-ok"), 0, successRate, 1200, "%");
        animateValue(document.getElementById("perc-bad"), 0, failRate, 1200, "%");
    }, 500);
}

window.onload = () => {
    initParticles(); draw();
    setTimeout(() => {
        document.getElementById("intro-overlay").classList.add("hide-intro");
        loadQuestion();
    }, 2500);
};