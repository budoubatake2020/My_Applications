'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click' , ()=> {
    
    const n = Math.floor(Math.random() *10);
    if (n == 0) {
      btn.textContent = '料理をすると吉♪'; 
    } else if (n == 1) {
      btn.textContent = 'おうちで過ごすと吉♪'; 
    } else if (n == 2) {
      btn.textContent = '買い物すると吉♪'; 
    } else if (n == 3) {
      btn.textContent = '運動すると吉♪'; 
    } else if (n == 4) {
      btn.textContent = '友達に会うと吉♪'; 
    } else if (n == 5) {
      btn.textContent = '音楽を聞くと吉♪'; 
    } else if (n == 6) {
      btn.textContent = 'ストレッチすると吉♪'; 
    } else if (n == 7) {
      btn.textContent = '髪を切ると吉♪'; 
    } else if (n == 8) {
      btn.textContent = '本を読むと吉♪'; 
    } else if (n == 9) {
      btn.textContent = '散歩をすると吉♪'; 
    }
    
  });
}