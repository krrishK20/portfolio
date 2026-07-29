// ============================================
// Krrish Molla — Portfolio v4
// 3D Tilt · Parallax · Particles · Skill Bars
// ============================================

(function(){'use strict';

  function initLoader(){
    window.addEventListener('load',function(){
      var l=document.querySelector('.loader');
      if(l) setTimeout(function(){l.classList.add('hidden');},800);
    });
  }

  function initParticles(){
    var c=document.getElementById('particleCanvas');
    if(!c) return;
    var ctx=c.getContext('2d'),mouse={x:0,y:0},particles=[];
    function rs(){c.width=window.innerWidth;c.height=window.innerHeight;}
    rs();window.addEventListener('resize',rs);
    document.addEventListener('mousemove',function(e){mouse.x=e.clientX;mouse.y=e.clientY;});
    function P(){this.reset();}
    P.prototype.reset=function(){this.x=Math.random()*c.width;this.y=Math.random()*c.height;this.z=Math.random()*2+0.5;this.size=this.z*1.2;this.speedX=(Math.random()-0.5)*0.3;this.speedY=(Math.random()-0.5)*0.3;this.opacity=Math.random()*0.4+0.15;};
    P.prototype.update=function(){
      this.x+=this.speedX;this.y+=this.speedY;
      var dx=mouse.x-this.x,dy=mouse.y-this.y,dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<200){this.x+=dx*0.0008;this.y+=dy*0.0008;}
      if(this.x<-20)this.x=c.width+20;if(this.x>c.width+20)this.x=-20;
      if(this.y<-20)this.y=c.height+20;if(this.y>c.height+20)this.y=-20;
    };
    P.prototype.draw=function(){ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fillStyle='rgba(124,111,247,'+this.opacity+')';ctx.fill();};
    var count=Math.min(100,Math.floor(window.innerWidth/12));
    function cp(){particles=[];for(var i=0;i<count;i++)particles.push(new P());}
    cp();
    function connect(){
      var md=140;
      for(var i=0;i<particles.length;i++)for(var j=i+1;j<particles.length;j++){
        var dx=particles[i].x-particles[j].x,dy=particles[i].y-particles[j].y,dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<md){ctx.beginPath();ctx.moveTo(particles[i].x,particles[i].y);ctx.lineTo(particles[j].x,particles[j].y);ctx.strokeStyle='rgba(124,111,247,'+(0.06*(1-dist/md))+')';ctx.lineWidth=0.5;ctx.stroke();}
      }
    }
    function anim(){ctx.clearRect(0,0,c.width,c.height);particles.forEach(function(p){p.update();p.draw();});connect();requestAnimationFrame(anim);}
    anim();
    window.addEventListener('resize',function(){count=Math.min(100,Math.floor(window.innerWidth/12));cp();});
  }

  function initTilt(){
    var cards=document.querySelectorAll('[data-tilt]');
    cards.forEach(function(card){
      var maxTilt=parseInt(card.getAttribute('data-tilt-max')||'10');
      card.addEventListener('mousemove',function(e){
        var rect=card.getBoundingClientRect(),x=e.clientX-rect.left,y=e.clientY-rect.top,cx=rect.width/2,cy=rect.height/2;
        card.style.transform='perspective(1000px) rotateX('+(((y-cy)/cy)*-maxTilt).toFixed(2)+'deg) rotateY('+(((x-cx)/cx)*maxTilt).toFixed(2)+'deg) scale3d(1.02,1.02,1.02)';
      });
      card.addEventListener('mouseleave',function(){card.style.transform='perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';card.style.transition='transform 0.5s cubic-bezier(0.22,1,0.36,1)';setTimeout(function(){card.style.transition='';},500);});
      card.addEventListener('mouseenter',function(){card.style.transition='transform 0.1s ease-out';});
    });
  }

  function initParallax(){
    var hero=document.querySelector('[data-parallax]');
    if(!hero) return;
    function update(){
      var sy=window.scrollY,hh=hero.offsetHeight;
      if(sy>hh) return;
      hero.querySelectorAll('.shape').forEach(function(s){
        var speed=parseFloat(s.getAttribute('data-parallax-speed')||'0.3');
        s.style.transform='translateY('+(sy*speed)+'px) rotate('+(sy*0.02)+'deg)';
      });
    }
    window.addEventListener('scroll',update);update();
  }

  function initNavbar(){
    var nb=document.querySelector('.navbar');
    if(nb) window.addEventListener('scroll',function(){nb.classList.toggle('scrolled',window.scrollY>30);});
  }

  function initMobileMenu(){
    var btn=document.getElementById('menuBtn'),nav=document.getElementById('mobileNav');
    if(!btn||!nav) return;
    btn.addEventListener('click',function(){btn.classList.toggle('active');nav.classList.toggle('active');document.body.style.overflow=nav.classList.contains('active')?'hidden':'';});
    nav.querySelectorAll('a').forEach(function(l){l.addEventListener('click',function(){btn.classList.remove('active');nav.classList.remove('active');document.body.style.overflow='';});});
  }

  function initActiveNav(){
    var secs=document.querySelectorAll('section[id]'),links=document.querySelectorAll('.nav-links a');
    function update(){var cur='';secs.forEach(function(s){if(window.scrollY>=s.offsetTop-180)cur=s.getAttribute('id');});links.forEach(function(l){l.classList.remove('active');if(l.getAttribute('data-section')===cur)l.classList.add('active');});}
    window.addEventListener('scroll',update);update();
  }

  function initSkillBars(){
    var bars=document.querySelectorAll('.skill-bar-fill,.tool-bar-fill');
    var obs=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.style.width=entry.target.getAttribute('data-width');obs.unobserve(entry.target);}});},{threshold:0.3});
    bars.forEach(function(b){b.style.width='0%';obs.observe(b);});
  }

  function initScrollReveal(){
    var els=document.querySelectorAll('.about-card,.skill-matrix-item,.env-card,.tool-item,.project-card,.timeline-card,.contact-item,.hero-stat,.highlight');
    els.forEach(function(el){el.classList.add('reveal');});
    var obs=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('visible');obs.unobserve(entry.target);}});},{threshold:0.1,rootMargin:'0px 0px -30px 0px'});
    els.forEach(function(el){obs.observe(el);});
  }

  function initProjectGlow(){
    document.querySelectorAll('.project-card[data-glare]').forEach(function(card){card.addEventListener('mousemove',function(e){var rect=card.getBoundingClientRect();card.style.setProperty('--mouse-x',((e.clientX-rect.left)/rect.width*100).toFixed(1)+'%');card.style.setProperty('--mouse-y',((e.clientY-rect.top)/rect.height*100).toFixed(1)+'%');});});
  }

  function initSmoothScroll(){
    document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var t=document.querySelector(this.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}});});
  }

  initLoader();initParticles();initParallax();initTilt();initProjectGlow();initNavbar();initMobileMenu();initActiveNav();initSkillBars();initScrollReveal();initSmoothScroll();
})();
