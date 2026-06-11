document.addEventListener('DOMContentLoaded',()=>{
  const b=document.querySelector('.menu-toggle');
  const n=document.querySelector('.main-nav');
  if(b&&n){b.addEventListener('click',()=>{n.style.display=n.style.display==='flex'?'none':'flex';if(window.innerWidth<1025){Object.assign(n.style,{position:'absolute',top:'82px',right:'20px',background:'#fff',padding:'16px',border:'1px solid #dbe1ef',borderRadius:'16px',boxShadow:'0 18px 42px rgba(24,35,69,.08)',flexDirection:'column'})}})}
  const buttons=document.querySelectorAll('.lang-btn');
  const blocks=document.querySelectorAll('[data-lang]');
  function setLang(lang){
    buttons.forEach(btn=>btn.classList.toggle('active',btn.dataset.setlang===lang));
    blocks.forEach(el=>el.classList.toggle('active',el.dataset.lang===lang));
    document.documentElement.lang=lang;
    try{localStorage.setItem('clap-lang',lang);}catch(e){}
  }
  buttons.forEach(btn=>btn.addEventListener('click',()=>setLang(btn.dataset.setlang)));
  if(buttons.length){
    let saved=null;
    try{saved=localStorage.getItem('clap-lang');}catch(e){}
    if(saved!=='it'&&saved!=='en'){saved=(navigator.language||'it').toLowerCase().indexOf('it')===0?'it':'en';}
    setLang(saved);
  }
});
