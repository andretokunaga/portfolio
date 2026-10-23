(function(){
  var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var sel='.case-hero > *, .hero .wrap > *, .case-section h2, .case-section .body-copy p, .decision h3, figure.visual, .case-copy > *';
  var els=[].slice.call(document.querySelectorAll(sel));
  els.forEach(function(e,i){e.setAttribute('data-reveal','');});
  if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:.08});
  els.forEach(function(e){io.observe(e)});
  // figuras: zoom leve conforme rola
  var figs=[].slice.call(document.querySelectorAll('figure.visual > img'));
  function tick(){var h=innerHeight;figs.forEach(function(im){var r=im.getBoundingClientRect();var p=Math.min(1,Math.max(0,(h-r.top)/(h+r.height)));im.style.setProperty('--z',(1+0.04*(1-Math.abs(p-.5)*2)).toFixed(4))});}
  var q=false;addEventListener('scroll',function(){if(!q){q=true;requestAnimationFrame(function(){tick();q=false})}},{passive:true});tick();
})();
