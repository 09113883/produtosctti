/* Hero: linha de inspeção industrial com visão computacional (canvas) */
(function(){
const cv=document.getElementById('heroCv');if(!cv)return;const ctx=cv.getContext('2d');
const W=800,H=500,BY=360,CX=300,BX=640,BYa=90,L=190,SP=80,BIN={x:700,y:325};
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const R=Math.random,CI='#38d6ff',LA='#ff6a2b';
function fit(){const r=cv.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);cv.width=r.width*d;cv.height=r.height*d;ctx.setTransform(cv.width/W,0,0,cv.height/H,0,0)}
addEventListener('resize',fit);fit();

// ---------- fundo (pré-renderizado) ----------
const bg=document.createElement('canvas');bg.width=W*2;bg.height=H*2;
(function(){const c=bg.getContext('2d');c.scale(2,2);
 let g=c.createLinearGradient(0,0,0,430);g.addColorStop(0,'#08111c');g.addColorStop(1,'#16293f');c.fillStyle=g;c.fillRect(0,0,W,H);
 c.strokeStyle='rgba(120,150,180,.18)';c.lineWidth=2;for(let x=-40;x<W+80;x+=100){c.beginPath();c.moveTo(x,0);c.lineTo(x+50,60);c.lineTo(x+100,0);c.stroke()}
 c.fillStyle='rgba(120,150,180,.22)';c.fillRect(0,0,W,8);c.fillRect(0,58,W,5);
 [[60,150,110],[190,200,90],[470,170,140],[600,215,70],[720,160,100]].forEach(([x,y,w])=>{const m=c.createLinearGradient(x,0,x+w,0);m.addColorStop(0,'#101c2a');m.addColorStop(.5,'#1d3148');m.addColorStop(1,'#0e1925');c.fillStyle=m;c.fillRect(x,y,w,345-y);
  c.fillStyle='rgba(255,255,255,.05)';for(let i=0;i<4;i++)c.fillRect(x+8,y+14+i*26,w-16,2);
  c.fillStyle=['#38d68a',LA,CI][(x/7|0)%3];c.beginPath();c.arc(x+w-10,y+10,2.5,0,7);c.fill()});
 c.strokeStyle='rgba(247,148,29,.5)';c.lineWidth=5;c.beginPath();c.moveTo(0,120);c.lineTo(W,120);c.stroke();
 [120,400,680].forEach(x=>{const l=c.createRadialGradient(x,14,0,x,14,210);l.addColorStop(0,'rgba(255,245,225,.55)');l.addColorStop(1,'rgba(255,245,225,0)');c.fillStyle=l;c.fillRect(x-210,0,420,260);c.fillStyle='#fff7e6';c.fillRect(x-34,10,68,6)});
 g=c.createLinearGradient(0,430,0,H);g.addColorStop(0,'#0e1620');g.addColorStop(1,'#030609');c.fillStyle=g;c.fillRect(0,430,W,H-430);
 c.save();c.beginPath();c.rect(0,452,W,12);c.clip();c.fillStyle='#d9a400';c.fillRect(0,452,W,12);c.fillStyle='#111';for(let x=-20;x<W+20;x+=26){c.beginPath();c.moveTo(x,464);c.lineTo(x+13,464);c.lineTo(x+26,452);c.lineTo(x+13,452);c.fill()}c.restore();
 // estrutura da esteira
 g=c.createLinearGradient(0,BY,0,432);g.addColorStop(0,'#3b4a5a');g.addColorStop(.15,'#1c2733');g.addColorStop(1,'#0b1118');c.fillStyle=g;c.fillRect(0,BY+14,W,70);
 c.fillStyle='#2b3947';for(let x=20;x<W;x+=90){c.fillRect(x,BY+84,10,50)}
 c.fillStyle='#8aa0b5';c.fillRect(0,BY+12,W,2);
})();

// ---------- peças ----------
function drawPart(p,x,y,s){const w=p.w,h=p.h;ctx.save();ctx.translate(x,y);ctx.scale(s,s);
 ctx.fillStyle='#2a323a';ctx.beginPath();ctx.ellipse(0,h/2,w/2,6,0,0,7);ctx.fill();
 const g=ctx.createLinearGradient(-w/2,0,w/2,0);[[0,'#3a444e'],[.2,'#b9c5d0'],[.4,'#f3f7fa'],[.7,'#8794a1'],[1,'#2f3943']].forEach(a=>g.addColorStop(a[0],a[1]));
 ctx.fillStyle=g;ctx.fillRect(-w/2,-h/2,w,h);
 ctx.fillStyle='#2f3943';ctx.beginPath();ctx.ellipse(0,h/2,w/2,6,0,0,3.15);ctx.fill();ctx.fillStyle=g;ctx.fillRect(-w/2,h/2-6,w,6);
 ctx.strokeStyle='rgba(0,0,0,.28)';ctx.lineWidth=1;[-h/4,h/6].forEach(yy=>{ctx.beginPath();ctx.moveTo(-w/2,yy);ctx.lineTo(w/2,yy);ctx.stroke()});
 ctx.fillStyle='#dfe7ee';ctx.beginPath();ctx.ellipse(0,-h/2,w/2,6,0,0,7);ctx.fill();ctx.fillStyle='#7d8a97';ctx.beginPath();ctx.ellipse(0,-h/2,w/3,3.6,0,0,7);ctx.fill();
 if(p.bad){const r=ctx.createRadialGradient(p.dx,p.dy,0,p.dx,p.dy,11);r.addColorStop(0,'rgba(150,70,20,.75)');r.addColorStop(1,'rgba(150,70,20,0)');ctx.fillStyle=r;ctx.fillRect(p.dx-12,p.dy-12,24,24);
  ctx.strokeStyle='#14181c';ctx.lineWidth=1.8;ctx.beginPath();ctx.moveTo(p.dx-7,p.dy-6);ctx.lineTo(p.dx-2,p.dy-1);ctx.lineTo(p.dx-4,p.dy+3);ctx.lineTo(p.dx+3,p.dy+5);ctx.lineTo(p.dx+7,p.dy+9);ctx.stroke()}
 ctx.restore()}

// ---------- estado ----------
let sp=[],alertT=0,alertId=0,parts=[],spawnT=0,pid=1204,total=1204,defects=0,bad=0,last=null,tm=0;
const arm={x:680,y:200,mode:'idle',p:null,g:0};
const dust=Array.from({length:50},()=>({x:240+R()*130,y:170+R()*190,v:5+R()*10}));
const $=i=>document.getElementById(i);
function kpi(){$('hk1').textContent=total.toLocaleString('pt-BR');$('hk2').textContent=(98.3+Math.sin(total/7)*.6).toFixed(1).replace('.',',')+'%';$('hk3').textContent=defects}
function spawn(){pid++;const w=42+R()*8,h=54+R()*10;parts.push({x:-40,cy:BY-h/2,w,h,bad:pid%5==2,id:pid,dx:(R()-.5)*w*.4,dy:(R()-.5)*h*.5,scan:0,v:0,conf:0,st:'belt',vy:0})}
function spark(x,y,n){for(let i=0;i<n;i++){const an=R()*6.28,v=60+R()*160;sp.push({x,y,vx:Math.cos(an)*v,vy:Math.sin(an)*v-60,l:1})}}
function resetScene(){parts=[];sp.length=0;arm.mode='idle';arm.p=null;arm.x=680;arm.y=200;arm.g=0}
function update(dt){tm+=dt;spawnT-=dt;if(spawnT<=0){spawn();spawnT=1.5}
 parts.forEach(p=>{
  if(p.st=='belt'){p.x+=SP*dt;if(!p.v&&p.x>CX-35){p.scan+=dt*1.1;if(p.scan>=1){p.v=1;p.conf=p.bad?84+R()*10:96+R()*3.5;total++;if(p.bad){bad++;alertT=1.8;alertId=p.id;spark(p.x+p.dx,p.cy+p.dy,16)}last=p;kpi()}}}
  else if(p.st=='drop'){p.vy+=900*dt;p.cy+=p.vy*dt;if(p.cy>470){p.dead=1;defects++;kpi()}}});
 parts=parts.filter(p=>!p.dead&&p.x<W+60);
 // braço
 const a=arm,go=m=>{a.mode=m;a.pm=m;a.ms=tm};
 let tx=680+Math.sin(tm*1.3)*10,ty=200+Math.cos(tm*1.7)*6;
 if(a.mode=='idle'){const c=parts.find(q=>q.bad&&q.v&&q.st=='belt'&&q.x>470&&q.x<600);if(c){go('approach');a.p=c}}
 let p=a.p;
 if(a.mode=='approach'){if(!p||p.dead||p.st!='belt'||p.x>W+30||tm-a.ms>3.5){go('return');a.p=null;p=null}else{tx=p.x;ty=p.cy-p.h/2-18;if(Math.hypot(a.x-tx,a.y-ty)<26){go('lift');p.st='held';spark(a.x,a.y+26,10)}}}
 if(a.mode=='lift'){tx=a.x;ty=190;if(a.y<215)go('carry')}
 if(a.mode=='carry'){tx=BIN.x;ty=BIN.y;if(Math.hypot(a.x-tx,a.y-ty)<14){go('return');if(p){p.st='drop';p.vy=0}a.p=null;spark(BIN.x,BIN.y+70,14)}}
 if(a.mode=='return'){tx=680;ty=200;if(Math.hypot(a.x-680,a.y-200)<14)go('idle')}
 if(a.mode!='idle'&&tm-a.ms>9){if(p&&p.st=='held')p.st='drop';go('return');a.p=null;p=null}
 const k=1-Math.exp(-dt*4.5);a.x+=(tx-a.x)*k;a.y+=(ty-a.y)*k;
 a.g+=((a.mode=='lift'||a.mode=='carry'?1:0)-a.g)*(1-Math.exp(-dt*10));
 if(p&&p.st=='held'){p.cy=a.y+18+p.h/2;p.x=a.x}
 sp.forEach(s=>{s.x+=s.vx*dt;s.y+=s.vy*dt;s.vy+=520*dt;s.l-=dt*1.7});sp=sp.filter(s=>s.l>0);alertT-=dt;
 dust.forEach(d=>{d.y-=d.v*dt;if(d.y<165)d.y=360})}

function label(x,y,t,c){ctx.font='700 10px ui-monospace,Menlo,monospace';const w=ctx.measureText(t).width+10;ctx.fillStyle=c;ctx.fillRect(x,y-15,w,15);ctx.fillStyle='#021018';ctx.fillText(t,x+5,y-4)}
function bbox(x,y,w,h,c,t){ctx.strokeStyle=c;ctx.lineWidth=1.8;const l=11;ctx.beginPath();[[x,y,1,1],[x+w,y,-1,1],[x,y+h,1,-1],[x+w,y+h,-1,-1]].forEach(([a,b,sx,sy])=>{ctx.moveTo(a+sx*l,b);ctx.lineTo(a,b);ctx.lineTo(a,b+sy*l)});ctx.stroke();if(t)label(x,y,t,c)}
function ik(tx,ty){const dx=tx-BX,dy=ty-BYa,d=Math.min(Math.hypot(dx,dy),2*L-2),an=Math.atan2(dy,dx),th=an-Math.acos(d/(2*L));return[BX+L*Math.cos(th),BYa+L*Math.sin(th),BX+Math.cos(an)*d,BYa+Math.sin(an)*d]}
function link(x1,y1,x2,y2){ctx.lineCap='round';ctx.strokeStyle='#0d141b';ctx.lineWidth=20;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();
 ctx.strokeStyle='#4a5b6d';ctx.lineWidth=15;ctx.stroke();ctx.strokeStyle='#8fa4b8';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(x1-3,y1-3);ctx.lineTo(x2-3,y2-3);ctx.stroke()}
function joint(x,y,r){const g=ctx.createRadialGradient(x-3,y-3,1,x,y,r);g.addColorStop(0,'#ffc36b');g.addColorStop(1,'#b8650a');ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.fill()}

function render(){
 ctx.drawImage(bg,0,0,W,H);
 // cabeçote da câmera + cone de luz
 const inZ=parts.some(p=>p.st=='belt'&&!p.v&&p.x>CX-35),g0=ctx.createLinearGradient(0,162,0,BY);
 g0.addColorStop(0,'rgba(56,214,255,'+(inZ?.5:.28)+')');g0.addColorStop(1,'rgba(56,214,255,.06)');
 ctx.globalCompositeOperation='lighter';ctx.fillStyle=g0;ctx.beginPath();ctx.moveTo(CX-12,162);ctx.lineTo(CX+12,162);ctx.lineTo(CX+62,BY);ctx.lineTo(CX-62,BY);ctx.fill();
 ctx.fillStyle='rgba(120,230,255,.7)';dust.forEach(d=>ctx.fillRect(d.x,d.y,1.3,1.3));ctx.globalCompositeOperation='source-over';
 ctx.fillStyle='#202c38';ctx.fillRect(CX-5,0,10,125);const hg=ctx.createLinearGradient(CX-30,0,CX+30,0);hg.addColorStop(0,'#2a3744');hg.addColorStop(.5,'#6b7e92');hg.addColorStop(1,'#1d2833');ctx.fillStyle=hg;ctx.fillRect(CX-30,122,60,40);
 ctx.fillStyle=CI;ctx.shadowColor=CI;ctx.shadowBlur=14;ctx.beginPath();ctx.ellipse(CX,162,13,4,0,0,7);ctx.fill();ctx.shadowBlur=0;
 // esteira (topo em movimento)
 const bg2=ctx.createLinearGradient(0,BY,0,BY+14);bg2.addColorStop(0,'#2b323a');bg2.addColorStop(1,'#14181d');ctx.fillStyle=bg2;ctx.fillRect(0,BY,W,14);
 ctx.fillStyle='rgba(255,255,255,.07)';for(let x=-((tm*SP)%30);x<W;x+=30)ctx.fillRect(x,BY,3,14);
 ctx.fillStyle='rgba(56,214,255,.8)';ctx.fillRect(CX-62,BY-1,124,2);
 {const ph=(tm*.9)%1;ctx.strokeStyle='rgba(56,214,255,'+(.65*(1-ph))+')';ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(CX,BY+1,18+ph*72,3+ph*9,0,0,7);ctx.stroke()}
 // peças
 parts.forEach(p=>{const y=p.cy;if(p.st=='belt'){ctx.fillStyle='rgba(0,0,0,.45)';ctx.beginPath();ctx.ellipse(p.x,BY+2,p.w/2+6,5,0,0,7);ctx.fill()}
  drawPart(p,p.x,y,1);
  if(p.st=='belt'&&p.x>CX-60){const bx=p.x-p.w/2-7,by=y-p.h/2-9,bw=p.w+14,bh=p.h+18;
   if(!p.v){bbox(bx,by,bw,bh,CI,'analisando '+(p.scan*100|0)+'%');ctx.fillStyle='rgba(56,214,255,.9)';ctx.fillRect(p.x-p.w/2,y-p.h/2+p.scan*p.h,p.w,2)}
   else if(p.x<W-30){const c=p.bad?'#ff4a2e':'#4df29a';bbox(bx,by,bw,bh,c,'#'+p.id+(p.bad?' DEFEITO ':' OK ')+p.conf.toFixed(0)+'%');
    if(p.bad){const r=ctx.createRadialGradient(p.x+p.dx,y+p.dy,0,p.x+p.dx,y+p.dy,16);r.addColorStop(0,'rgba(255,60,30,.85)');r.addColorStop(1,'rgba(255,60,30,0)');ctx.fillStyle=r;ctx.fillRect(p.x+p.dx-16,y+p.dy-16,32,32)}}}});
 // braço robótico
 const [ex,ey,wx,wy]=ik(arm.x,arm.y);
 ctx.fillStyle='#1b2530';ctx.fillRect(BX-34,0,68,16);const pg=ctx.createLinearGradient(BX-18,0,BX+18,0);pg.addColorStop(0,'#2b3947');pg.addColorStop(.5,'#8399ad');pg.addColorStop(1,'#222e3a');ctx.fillStyle=pg;ctx.fillRect(BX-18,16,36,74);
 link(BX,BYa,ex,ey);link(ex,ey,wx,wy);joint(BX,BYa,13);joint(ex,ey,11);joint(wx,wy,8);
 const o=9-arm.g*4;ctx.strokeStyle='#cfd9e3';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(wx-o,wy+6);ctx.lineTo(wx-o,wy+19);ctx.moveTo(wx+o,wy+6);ctx.lineTo(wx+o,wy+19);ctx.stroke();ctx.fillStyle='#0d141b';ctx.fillRect(wx-12,wy+2,24,6);
 parts.filter(p=>p.st=='held'||p.st=='drop').forEach(p=>drawPart(p,p.x,p.cy,1));
 // caixa de descarte
 const bgr=ctx.createLinearGradient(BIN.x-50,0,BIN.x+50,0);bgr.addColorStop(0,'#7a1c12');bgr.addColorStop(.5,'#d63a22');bgr.addColorStop(1,'#6a160e');ctx.fillStyle=bgr;ctx.beginPath();ctx.moveTo(BIN.x-52,395);ctx.lineTo(BIN.x+52,395);ctx.lineTo(BIN.x+42,478);ctx.lineTo(BIN.x-42,478);ctx.fill();ctx.fillStyle='#fff';ctx.font='700 10px system-ui';ctx.textAlign='center';ctx.fillText('REFUGO',BIN.x,440);ctx.textAlign='left';
 // zoom da inspeção
 if(last){const x0=16,y0=44,pw=178,ph=132;ctx.fillStyle='rgba(2,16,32,.88)';ctx.fillRect(x0,y0,pw,ph);ctx.strokeStyle=CI;ctx.lineWidth=1;ctx.strokeRect(x0,y0,pw,ph);
  ctx.save();ctx.beginPath();ctx.rect(x0+1,y0+17,pw-2,ph-18);ctx.clip();const rg=ctx.createRadialGradient(x0+89,y0+80,5,x0+89,y0+80,90);rg.addColorStop(0,'#24384d');rg.addColorStop(1,'#06101a');ctx.fillStyle=rg;ctx.fillRect(x0,y0,pw,ph);
  drawPart(last,x0+89,y0+80,1.55);if(last.bad){const s=1.55,cx=x0+89+last.dx*s,cy=y0+80+last.dy*s,pr=16+Math.sin(tm*8)*2;ctx.strokeStyle='#ff4a2e';ctx.lineWidth=2;ctx.beginPath();ctx.arc(cx,cy,pr,0,7);ctx.stroke()}ctx.restore();
  ctx.font='700 9px ui-monospace,Menlo,monospace';ctx.fillStyle=CI;ctx.fillText('ZOOM · PEÇA #'+last.id,x0+7,y0+12);ctx.fillStyle=last.bad?'#ff4a2e':'#4df29a';ctx.fillText(last.bad?'TRINCA DETECTADA':'SUPERFÍCIE CONFORME',x0+7,y0+ph-7)}
 // HUD
 ctx.font='700 11px ui-monospace,Menlo,monospace';ctx.fillStyle=Math.floor(tm*2)%2?'#ff4d4d':'rgba(255,77,77,.3)';ctx.beginPath();ctx.arc(22,24,4,0,7);ctx.fill();
 ctx.fillStyle='#e6f1fb';ctx.fillText('REC · LINHA 03 · INSPEÇÃO VISUAL',34,28);ctx.textAlign='right';ctx.fillText(new Date().toLocaleTimeString('pt-BR'),W-16,28);ctx.textAlign='left';
 // faíscas e alerta
 ctx.globalCompositeOperation='lighter';sp.forEach(q=>{ctx.fillStyle='rgba(255,'+(130+q.l*110|0)+',40,'+q.l+')';ctx.fillRect(q.x,q.y,2.4,2.4)});ctx.globalCompositeOperation='source-over';
 if(alertT>0){const f=Math.min(1,alertT)*(.6+.4*Math.sin(tm*18));ctx.fillStyle='rgba(255,50,30,'+f*.2+')';ctx.fillRect(0,0,W,H);ctx.strokeStyle='rgba(255,70,45,'+f+')';ctx.lineWidth=5;ctx.strokeRect(2,2,W-4,H-4);
  ctx.fillStyle='rgba(200,20,10,'+(.6+.35*f)+')';ctx.fillRect(W/2-150,44,300,26);ctx.fillStyle='#fff';ctx.font='800 13px system-ui,sans-serif';ctx.textAlign='center';ctx.fillText('DEFEITO DETECTADO · PEÇA #'+alertId,W/2,62);ctx.textAlign='left'}
 // vinheta
 const v=ctx.createRadialGradient(W/2,H/2,H*.35,W/2,H/2,W*.65);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,0,0,.6)');ctx.fillStyle=v;ctx.fillRect(0,0,W,H)}

let lt=performance.now(),vis=true;
if('IntersectionObserver'in window)new IntersectionObserver(e=>{vis=e[0].isIntersecting}).observe(cv);
function loop(n){try{const dt=Math.min((n-lt)/1000,.05);lt=n;if(vis){update(dt);render()}}catch(e){console.warn('hero-visao',e);resetScene()}requestAnimationFrame(loop)}
if(reduce){for(let i=0;i<360;i++)update(1/30);render()}else requestAnimationFrame(loop);
})();
