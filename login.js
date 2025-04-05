document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        
        if (name) {
            // Store the name in localStorage
            localStorage.setItem('username', name);
            // Redirect to the main page
            window.location.href = 'index.html';
        }
    });
});


 // Load Font Awesome
 const faScript = document.createElement('script');
 faScript.src = 'https://kit.fontawesome.com/a076d05399.js';
 document.head.appendChild(faScript);

 document.getElementById('loginForm').addEventListener('submit', function(e) {
     e.preventDefault();
     const name = document.getElementById('name').value.trim();
     
     if(name) { 
         const card = document.querySelector('.card');
         card.innerHTML = `
             <div style="padding: 20px;">
                 <div style="width: 80px; height: 80px; background: #e0e9ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                     <i class="fas fa-check" style="font-size: 2rem; color: #4361ee;"></i>
                 </div>
                 <h2 style="color: #4361ee; font-size: 1.8rem; margin-bottom: 15px;">Welcome, ${name}!</h2>
                 <a href="index.html"><button id="startBtn" style="width: 100%; max-width: 280px; padding: 16px; margin: 20px auto 0; background: var(--accent);">
                     Start Exploring <i class="fas fa-arrow-right"></i>
                 </button></a>
             </div>
         `;
       


         document.getElementById('startBtn').addEventListener('click', function() {
             this.innerHTML = 'Loading... <i class="fas fa-spinner fa-spin"></i>';
         });
     }

        const nick = document.querySelector('.name');
        nick.innerHTML = `<div class="na"><h3>User: <span> ${name} </span></h3></div>` ;
        
 });
