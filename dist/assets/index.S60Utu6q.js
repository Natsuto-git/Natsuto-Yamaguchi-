(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function c(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(n){if(n.ep)return;n.ep=!0;const s=c(n);fetch(n.href,s)}})();document.addEventListener("DOMContentLoaded",function(){const p=document.getElementById("loadingScreen");window.addEventListener("load",function(){setTimeout(()=>{p.classList.add("fade-out"),setTimeout(()=>{p.style.display="none"},800)},1500)});const l=document.getElementById("navbar"),c=document.getElementById("hamburger"),d=document.getElementById("navMenu"),n=document.querySelectorAll(".nav-link");window.addEventListener("scroll",function(){window.scrollY>50?l.classList.add("scrolled"):l.classList.remove("scrolled")}),c.addEventListener("click",function(){c.classList.toggle("active"),d.classList.toggle("active")}),n.forEach(e=>{e.addEventListener("click",function(){c.classList.remove("active"),d.classList.remove("active")})}),n.forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const u=this.getAttribute("href"),i=document.querySelector(u).offsetTop-80;window.scrollTo({top:i,behavior:"smooth"}),n.forEach(L=>L.classList.remove("active")),this.classList.add("active")})});const s={threshold:.1,rootMargin:"0px 0px -50px 0px"},m=new IntersectionObserver(function(e){e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("animate"),t.target.classList.contains("skills-grid")&&t.target.querySelectorAll(".skill-category").forEach((r,i)=>{setTimeout(()=>{r.style.animationDelay=`${i*.2}s`,r.classList.add("animate")},i*100)}),t.target.classList.contains("about-highlights")&&t.target.querySelectorAll(".highlight-item").forEach((r,i)=>{setTimeout(()=>{r.style.animationDelay=`${i*.2}s`,r.classList.add("animate")},i*150)}),t.target.classList.contains("timeline")&&t.target.querySelectorAll(".timeline-item").forEach((r,i)=>{setTimeout(()=>{r.style.animationDelay=`${i*.3}s`,r.classList.add("animate")},i*200)}))})},s);document.querySelectorAll(".section-title, .section-divider, .about-card, .skills-grid, .about-highlights, .timeline, .contact-content").forEach(e=>{m.observe(e)});const g=document.querySelector(".hero-section"),f=document.querySelector(".profile-image");window.addEventListener("scroll",function(){const e=window.pageYOffset,t=e*-.5;g&&e<window.innerHeight&&(g.style.transform=`translateY(${t}px)`),f&&e<window.innerHeight&&(f.style.transform=`translateY(${e*.3}px)`)}),document.querySelectorAll(".skill-tag").forEach(e=>{e.addEventListener("mouseenter",function(){this.style.transform="translateY(-3px) scale(1.05)",this.style.boxShadow="0 8px 25px rgba(19, 83, 137, 0.3)"}),e.addEventListener("mouseleave",function(){this.style.transform="translateY(0) scale(1)",this.style.boxShadow="0 5px 15px rgba(19, 83, 137, 0.1)"})}),f&&(f.addEventListener("mouseenter",function(){this.style.transform="scale(1.05) rotate(2deg)"}),f.addEventListener("mouseleave",function(){this.style.transform="scale(1) rotate(0deg)"}));const h=document.querySelector(".hero-subtitle");if(h){const e=h.textContent;h.textContent="",setTimeout(()=>{let t=0;const u=setInterval(()=>{h.textContent+=e[t],t++,t>=e.length&&clearInterval(u)},50)},2e3)}let o=document.createElement("button");o.innerHTML='<i class="fas fa-chevron-up"></i>',o.setAttribute("id","scrollToTop"),o.style.cssText=`
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #135389 0%, #6F789D 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(19, 83, 137, 0.3);
    `,document.body.appendChild(o),window.addEventListener("scroll",function(){window.pageYOffset>300?(o.style.opacity="1",o.style.visibility="visible"):(o.style.opacity="0",o.style.visibility="hidden")}),o.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),o.addEventListener("mouseenter",function(){this.style.transform="translateY(-3px) scale(1.1)",this.style.boxShadow="0 8px 25px rgba(19, 83, 137, 0.4)"}),o.addEventListener("mouseleave",function(){this.style.transform="translateY(0) scale(1)",this.style.boxShadow="0 4px 15px rgba(19, 83, 137, 0.3)"});const a=document.createElement("div");a.style.cssText=`
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(19, 83, 137, 0.8) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        mix-blend-mode: difference;
    `,document.body.appendChild(a),document.addEventListener("mousemove",function(e){a.style.left=e.clientX-10+"px",a.style.top=e.clientY-10+"px"}),window.innerWidth<=768&&(a.style.display="none"),window.addEventListener("resize",function(){window.innerWidth<=768?(a.style.display="none",d.classList.remove("active"),c.classList.remove("active")):a.style.display="block"});const v=document.querySelectorAll(".timeline-item"),b=new IntersectionObserver(function(e){e.forEach(t=>{t.isIntersecting&&(t.target.style.opacity="1",t.target.classList.contains("timeline-item:nth-child(even)"),t.target.style.transform="translateX(0)")})},{threshold:.5});v.forEach(e=>{b.observe(e)});function x(){const e=document.createElement("div");e.style.cssText=`
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(19, 83, 137, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            animation: float-particle 8s linear infinite;
        `,e.style.left=Math.random()*window.innerWidth+"px",e.style.top=window.innerHeight+"px",document.body.appendChild(e),setTimeout(()=>{e.remove()},8e3)}setInterval(x,2e3);const y=document.createElement("style");y.textContent=`
        @keyframes float-particle {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `,document.head.appendChild(y),document.querySelectorAll(".cta-button").forEach(e=>{e.addEventListener("mouseenter",function(){this.style.transform="translateY(-3px) scale(1.05)"}),e.addEventListener("mouseleave",function(){this.style.transform="translateY(0) scale(1)"})}),document.querySelectorAll(".social-link").forEach(e=>{e.addEventListener("mouseenter",function(){this.style.transform="translateY(-3px) rotate(360deg)"}),e.addEventListener("mouseleave",function(){this.style.transform="translateY(0) rotate(0deg)"})}),document.body.style.opacity="0",setTimeout(()=>{document.body.style.transition="opacity 0.5s ease",document.body.style.opacity="1"},100),console.log("🎉 Natsuto Yamaguchi Portfolio loaded successfully!")});
