const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const story=$('#story'), gift=$('#giftScene');
$('#openGift').onclick=()=>{gift.classList.add('open');setTimeout(()=>{story.hidden=false;story.scrollIntoView({behavior:'smooth'});},800)};
const modal=$('#modal'), card=$('#modalCard');
function show(html){card.innerHTML=html;modal.classList.add('active');modal.setAttribute('aria-hidden','false')}
function close(){modal.classList.remove('active');modal.setAttribute('aria-hidden','true')}
$('.modal-close').onclick=close;modal.onclick=e=>{if(e.target===modal)close()};
$('#letterOpen').onclick=()=>show(`<h3>Dear Aanchal,</h3><p>This girl really got me writing another letter. Damn. I can't believe we’ve almost made it to three months. But it feels like much more than 3 months. As if we’ve been together for a lifetime. Being with you feels familiar yet new. It's like finding love in you made me find myself.

Every moment with you feels so damn special. You make even the smallest achievements in my life feel big. And I am genuinely always excited to share stuff with you and know more about you. I really mean it when I say that you make my life brighter. Talking to you each day, being treated like a priority…it feels as if I'm privileged. To have you, I am privileged.

The sunshine in my life, the only sunflower in my fields…babe I love you so much. I really do hope that this goes on forever. I would be blessed to spend every moment of my life with you.

I love watching you sleep. I feel safe when I feel knowing you are watching over me. I wish that your eyes will always be full of love for me as mine are and always will for you. Eyes se yaad aaya, have i ever told you that you have really pretty eyes? I could get lost in them forever. The way you cover your face up with your fluffy sa kambal, the way your teeth show thode thode when you smile, the way you set your hair, the way you apply your face creams and make up and what not, its all so damn cute baby. I hope one day i will wake up next to you.

You make me happy, Aanchal. You make me believe that there is a purpose in life and that is Love. And I am glad I found my purpose in you. I promise I will always make efforts for you. I love making you happy. A bit selfish but I love making you fall in love with me more and more. I promise I will always protect you and be by your side, whether it be your happy times or sad. You'll always be my priority.

Now that we’ll be 1000s of meters away, I know its gonna be hard. But I’d much rather face the obstacles than to lose you. Losing you would be losing a part of me.

Lastly, my love, I am and always will be proud of you. The person you are and the person you will become. I know the last 2 years of your life have been tough ass shit but im so so proud and impressed that you made it through, no matter the result. You are much more than the credit you give yourself. And I will always remind you of that.

Your slave,
Kunwar.</p>`);
$$('.envelope').forEach(e=>e.onclick=()=>show(`<h3>A little reason</h3><p>${e.dataset.message}</p>`));
$$('.polaroid').forEach(p=>p.onclick=()=>show(`<h3>${p.querySelector('b').textContent}</h3><p>${p.dataset.caption}</p>`));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.5});$$('.timeline li').forEach(x=>observer.observe(x));
$('#restart').onclick=()=>{$('#home').scrollIntoView({behavior:'smooth'});gift.classList.remove('open')};
