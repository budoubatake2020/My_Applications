'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click' , ()=> {
    
    const n = Math.floor(Math.random() *100);
    if (n < 20) {
      btn.textContent = '料理をすると吉♪'; 
    } else if (n < 30) {
      btn.textContent = 'おうちで過ごすと吉♪'; 
    } else if (n < 40) {
      btn.textContent = '買い物すると吉♪'; 
    } else if (n < 50) {
      btn.textContent = '運動すると吉♪'; 
    } else if (n < 60) {
      btn.textContent = '友達に会うと吉♪'; 
    } else if (n < 70) {
      btn.textContent = '音楽を聞くと吉♪'; 
    } else if (n < 80) {
      btn.textContent = 'ストレッチすると吉♪'; 
    } else if (n < 90) {
      btn.textContent = '本を読むと吉♪'; 
    } else {
      btn.textContent = '散歩をすると吉♪'; 
    }
    
  });
}