// ========================= 
//   MOBILE MENU 
// ========================= 
 
const menuToggle = document.getElementById("menuToggle"); 
const navMenu = document.querySelector(".nav-menu"); 

menuToggle.addEventListener("click", () => { 
    navMenu.classList.toggle("active"); 
}); 

// Close mobile menu when clicking a link 

const navLinks = document.querySelectorAll(".nav-menu a"); 

navLinks.forEach(link => { 
    link.addEventListener("click", () => { 
        navMenu.classList.remove("active"); 
    }); 
}); 

// ========================= 
//  NAVBAR SCROLL EFFECT 
//  ========================= 

const header = document.querySelector(".header"); 

window.addEventListener("scroll", () => { 
    
    if (window.scrollY > 50) {
         header.style.boxShadow = "0 5px 25px rgba(0, 0, 0, 0.06)"; 
        } else { 
            header.style.boxShadow = "none"; 
        } 
    
    }); 
    
    // =========================
    //   SIMPLE SCROLL REVEAL 
    //  ========================= 
    
    const revealElements = document.querySelectorAll( 
        ".feature-card, .testimonial-card, .about-content, .stat" 
    );
    
    const revealObserver = new IntersectionObserver( 
        (entries) => { 
            
            entries.forEach(entry => { 
                
                if (entry.isIntersecting) { 
                    entry.target.classList.add("show"); 
                    revealObserver.unobserve(entry.target); 
                } 
            
            }); 
        
        }, 
        { 
            threshold: 0.15 
        } 
    ); 
    
    revealElements.forEach(element => { 
        element.classList.add("reveal"); 
        revealObserver.observe(element); 
    }); 
    
    // ========================= 
    //  REVEAL CSS 
    //  ========================= 
     
    const revealStyle = document.createElement("style"); 
    
    revealStyle.innerHTML = ` 
    .reveal { 
    opacity: 0; 
    transform: translateY(25px); 
    transition: opacity 0.7s ease, transform 0.7s ease; 
    } 
    
    .reveal.show { 
    opacity: 1; transform: translateY(0); 
    } 
    `; 
    
document.head.appendChild(revealStyle);