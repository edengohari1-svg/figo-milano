
const body = document.body;
const darkBtn = document.getElementById('darkBtn');
const lightBtn = document.getElementById('lightBtn');
function setTheme(mode){
  if(mode==='light'){ body.classList.remove('theme-dark'); body.classList.add('theme-light'); }
  else { body.classList.remove('theme-light'); body.classList.add('theme-dark'); }
  darkBtn?.setAttribute('aria-pressed', mode!=='light');
  lightBtn?.setAttribute('aria-pressed', mode==='light');
  localStorage.setItem('figoTheme', mode);
}
darkBtn?.addEventListener('click', ()=>setTheme('dark'));
lightBtn?.addEventListener('click', ()=>setTheme('light'));
const saved = localStorage.getItem('figoTheme'); if(saved) setTheme(saved);
