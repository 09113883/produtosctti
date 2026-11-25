/* Motor do questionário "Descubra o curso ideal". Perguntas em assets/orientacao.js; perfil dos cursos em assets/cursos.js. */
(function(){
const app=document.getElementById('app');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const Q=ORIENTACAO.perguntas, resp={}; let passo=-1;
const opcao=(q,id)=>Q.find(x=>x.id===q).opcoes.find(o=>o.id===id);
const preco=c=>{const m=String(c.investimento?.valor||'').replace(/[^\d,]/g,'').replace(',','.');return parseFloat(m)||0};
const brl=n=>'R$ '+n.toLocaleString('pt-BR',{minimumFractionDigits:2});

function intro(){
  app.innerHTML=`<div class="quiz"><div class="quiz-box center"><div class="quiz-ico">🎯</div><h2>Vamos encontrar o seu curso</h2><p>${esc(ORIENTACAO.introducao)}</p>
  <ul class="quiz-info"><li>${Q.length} perguntas rápidas</li><li>Sugestões sob medida para o seu perfil</li><li>Sem cadastro</li></ul>
  <button class="btn" id="ini">Começar agora</button></div></div>`;
  document.getElementById('ini').onclick=()=>{passo=0;pergunta()};
}
function pergunta(){
  const q=Q[passo], sel=[].concat(resp[q.id]||[]), multi=q.tipo==='multipla';
  app.innerHTML=`<div class="quiz"><div class="quiz-prog"><span>Pergunta ${passo+1} de ${Q.length}</span><div class="barra"><i style="width:${(passo)/Q.length*100}%"></i></div></div>
  <div class="quiz-box"><h2>${esc(q.titulo)}</h2>${q.ajuda?`<p class="aj">${esc(q.ajuda)}</p>`:''}
  <div class="ops">${q.opcoes.map(o=>`<button type="button" class="op${sel.includes(o.id)?' on':''}" data-id="${o.id}" aria-pressed="${sel.includes(o.id)}"><b>${esc(o.rotulo)}</b><span>${esc(o.descricao||'')}</span></button>`).join('')}</div>
  <div class="quiz-nav"><button type="button" class="lnk" id="vol">← Voltar</button>${multi?`<button type="button" class="btn" id="prox"${sel.length?'':' disabled'}>Continuar</button>`:''}</div></div></div>`;
  document.getElementById('vol').onclick=()=>{passo--;passo<0?intro():pergunta()};
  const avancar=()=>{passo++;passo>=Q.length?resultado():pergunta()};
  app.querySelectorAll('.op').forEach(b=>b.onclick=()=>{
    const id=b.dataset.id;
    if(!multi){resp[q.id]=id;b.classList.add('on');setTimeout(avancar,170);return}
    let a=[].concat(resp[q.id]||[]);
    a=a.includes(id)?a.filter(x=>x!==id):(a.length<(q.max||99)?a.concat(id):a);
    resp[q.id]=a;pergunta();
  });
  if(multi)document.getElementById('prox').onclick=avancar;
}
function pontuar(k,c){
  const pf=c.perfil||{};let pts=0,max=0;const mot=[];
  (resp.interesses||[]).forEach(i=>{max+=4;const p=(pf.interesses||[]).indexOf(i);
    if(p===0){pts+=4;mot.push('Combina com o seu interesse em '+opcao('interesses',i).curto)}
    else if(p>0){pts+=2;mot.push('Tem relação com o seu interesse em '+opcao('interesses',i).curto)}});
  max+=2;if((pf.objetivos||[]).includes(resp.objetivo)){pts+=2;mot.push('Indicado para quem quer '+opcao('objetivo',resp.objetivo).curto)}
  max+=2;if((pf.niveis||[]).includes(resp.nivel)){pts+=2;mot.push('Adequado para '+opcao('nivel',resp.nivel).curto)}
  max+=2;const f=resp.formato,cf=(c.formato||'').toLowerCase();
  if(f==='qualquer')pts+=2;
  else if((f==='presencial'&&cf==='presencial')||(f==='online'&&cf.startsWith('online'))||(f==='hibrido'&&cf.startsWith('h'))){pts+=2;mot.push('Oferecido no formato que você prefere ('+c.formato+')')}
  else if(cf.startsWith('h')){pts+=1;mot.push('Formato híbrido, com parte das aulas no formato que você prefere')}
  max+=1;const lim=opcao('investimento',resp.investimento).limite;
  if(!lim||preco(c)<=lim){pts+=1;if(lim)mot.push('Cabe na faixa de investimento escolhida')}else pts-=2
  return {k,c,pts,pct:Math.round(Math.max(0,pts)/max*100),mot};
}
const prox=c=>(c.turmas||[]).find(t=>t.situacao!=='Em andamento');
function resultado(){
  const prio={'Futuro':0,'Em andamento':1,'Encerrado':2};
  const lista=Object.entries(CURSOS).map(([k,c])=>pontuar(k,c)).sort((a,b)=>b.pts-a.pts||(prio[a.c.situacao]-prio[b.c.situacao]));
  const top=lista.slice(0,ORIENTACAO.quantidadeSugestoes).filter((r,i)=>i===0||r.pts>0);
  const perfil=`objetivo: ${opcao('objetivo',resp.objetivo).curto}; interesses: ${(resp.interesses||[]).map(i=>opcao('interesses',i).curto).join(' e ')}; experiência: ${opcao('nivel',resp.nivel).rotulo.toLowerCase()}; formato: ${opcao('formato',resp.formato).curto}`;
  const msg=`Olá! Fiz o teste "Descubra o curso ideal" no catálogo do SENAI. Meu perfil: ${perfil}. Os cursos sugeridos foram: ${top.map(r=>r.c.nome).join('; ')}. Gostaria de mais informações.`;
  const cards=top.map((r,i)=>{const c=r.c,t=prox(c);
    return `<article class="res${i===0?' top':''}"><div class="res-h"><span class="rank">${i===0?'Melhor opção para você':(i+1)+'ª opção'}</span><span class="ader"><b>${r.pct}%</b> de aderência</span></div>
    <div class="barra"><i style="width:${r.pct}%"></i></div>
    <h3>${esc(c.nome)}</h3><p class="cat">${esc(c.categoria||'')}</p><p>${esc(c.resumo||'')}</p>
    ${r.mot.length?`<ul class="checks">${r.mot.map(m=>`<li>${esc(m)}</li>`).join('')}</ul>`:''}
    <div class="res-f"><span><b>Carga horária</b>${esc(c.cargaHoraria||'')}</span><span><b>Formato</b>${esc(c.formato||'')}</span><span><b>Investimento</b>${esc(c.investimento?.valor||'')}</span>${t?`<span><b>Próxima turma</b>${esc(t.inicio)}</span>`:''}</div>
    <div class="res-a"><a class="btn" href="curso.html?id=${encodeURIComponent(r.k)}">Ver detalhes do curso</a><a class="lnk" target="_blank" rel="noopener" href="${linkWhatsapp(`Olá! Tenho interesse no curso *${c.nome}* e gostaria de mais informações sobre turmas e matrícula.`)}">Tenho interesse (WhatsApp)</a></div></article>`}).join('');
  app.innerHTML=`<div class="quiz wide"><div class="quiz-prog"><span>Resultado</span><div class="barra"><i style="width:100%"></i></div></div>
  <div class="quiz-head"><h2>Estes cursos combinam com o seu perfil</h2><p>Ordenamos os cursos do catálogo de acordo com as suas respostas.</p></div>
  <div class="res-grid">${cards}</div>
  <div class="quiz-box center ajuda"><h3>Ainda em dúvida?</h3><p>Converse com a nossa equipe e receba uma orientação personalizada.</p>
   <a class="btn-wa" target="_blank" rel="noopener" href="${linkWhatsapp(msg)}">${WA_SVG}<span>Falar com a equipe no WhatsApp</span></a>
   <div class="quiz-nav c"><button type="button" class="lnk" id="refaz">↺ Refazer o teste</button><a class="lnk" href="index.html#cursos">Ver todos os cursos</a></div></div></div>`;
  document.getElementById('refaz').onclick=()=>{Object.keys(resp).forEach(k=>delete resp[k]);passo=-1;intro()};
  scrollTo({top:0,behavior:'smooth'});
}
intro();
})();
