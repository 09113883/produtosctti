/* Motor do formulário de maturidade tecnológica. Perguntas em assets/maturidade.js; destino em assets/config.js. */
(function(){
const app=document.getElementById('app'),M=MATURIDADE,E=M.etapas,dados={};
let passo=-1,consentimento=false;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const R=o=>typeof o==='string'?o:o.rotulo, P=o=>typeof o==='string'?null:o.pontos;
const todos=()=>E.flatMap(e=>e.campos);
const valorTexto=c=>{const v=dados[c.id];return Array.isArray(v)?v.join('; '):(v||'')};

/* máscaras e validações simples */
const dig=s=>String(s||'').replace(/\D/g,'');
const mCnpj=v=>{v=dig(v).slice(0,14);return v.replace(/^(\d{2})(\d)/,'$1.$2').replace(/^(\d{2})\.(\d{3})(\d)/,'$1.$2.$3').replace(/\.(\d{3})(\d)/,'.$1/$2').replace(/(\d{4})(\d)/,'$1-$2')};
const mTel=v=>{v=dig(v).slice(0,11);return v.length>10?v.replace(/^(\d{2})(\d{5})(\d{0,4}).*/,'($1) $2-$3'):v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/,'($1) $2-$3').replace(/^(\d{2})(\d{0,4})$/,'($1) $2')};
function erro(c){
  const v=dados[c.id],vazio=Array.isArray(v)?!v.length:!String(v||'').trim();
  if(c.obrigatorio&&vazio)return c.tipo==='radio'||c.tipo==='multi'||c.tipo==='select'?'Selecione uma opção.':'Preencha este campo.';
  if(vazio)return '';
  if(c.tipo==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))return 'Informe um e-mail válido.';
  if(c.tipo==='telefone'&&dig(v).length<10)return 'Informe o telefone com DDD.';
  if(c.tipo==='cnpj'&&dig(v).length!==14)return 'O CNPJ deve ter 14 dígitos.';
  return '';
}

/* ---------- telas ---------- */
function intro(){
  app.innerHTML=`<div class="quiz"><div class="quiz-box center"><div class="quiz-ico">📊</div><h2>Diagnóstico de maturidade tecnológica</h2><p>${esc(M.introducao)}</p>
  <ul class="quiz-info"><li>${E.length} etapas</li><li>Cerca de 8 minutos</li><li>Resultado indicativo ao final</li></ul><button class="btn" id="ini">Iniciar diagnóstico</button></div></div>`;
  document.getElementById('ini').onclick=()=>{passo=0;etapa()};
}
function campo(c){
  const v=dados[c.id],rot=`${esc(c.rotulo)}${c.obrigatorio?' <i>*</i>':''}`,cls=`mf${c.largura==='meia'?' meia':''}`;
  let corpo;
  if(['texto','email','telefone','cnpj'].includes(c.tipo)){
    const t=c.tipo==='email'?'email':c.tipo==='telefone'?'tel':'text';
    corpo=`<label class="mf-l" for="f-${c.id}">${rot}</label><input id="f-${c.id}" data-id="${c.id}" type="${t}" value="${esc(v||'')}" placeholder="${esc(c.placeholder||'')}" ${c.tipo==='telefone'?'inputmode="tel"':''}>`;
  }else if(c.tipo==='select'){
    corpo=`<label class="mf-l" for="f-${c.id}">${rot}</label><select id="f-${c.id}" data-id="${c.id}"><option value="">Selecione</option>${c.opcoes.map(o=>`<option${R(o)===v?' selected':''}>${esc(R(o))}</option>`).join('')}</select>`;
  }else if(c.tipo==='textarea'){
    corpo=`<label class="mf-l" for="f-${c.id}">${rot}</label><textarea id="f-${c.id}" data-id="${c.id}" placeholder="${esc(c.placeholder||'')}">${esc(v||'')}</textarea>`;
  }else{
    const sel=[].concat(v||[]);
    corpo=`<div class="mf-l">${rot}${c.ajuda?` <small>${esc(c.ajuda)}</small>`:''}</div><div class="ops compact" data-id="${c.id}" data-tipo="${c.tipo}">${c.opcoes.map(o=>`<button type="button" class="op${sel.includes(R(o))?' on':''}" data-v="${esc(R(o))}" aria-pressed="${sel.includes(R(o))}"><b>${esc(R(o))}</b></button>`).join('')}</div>`;
  }
  return `<div class="${cls}" data-campo="${c.id}">${corpo}<p class="mf-e" role="alert"></p></div>`;
}
function etapa(){
  const e=E[passo];
  app.innerHTML=`<div class="quiz wide2"><div class="quiz-prog"><span>Etapa ${passo+1} de ${E.length+1}</span><div class="barra"><i style="width:${passo/(E.length+1)*100}%"></i></div></div>
  <div class="quiz-box"><h2>${esc(e.titulo)}</h2><p class="aj">${esc(e.descricao||'')}</p><div class="mf-grid">${e.campos.map(campo).join('')}</div>
  <div class="quiz-nav"><button type="button" class="lnk" id="vol">← Voltar</button><button type="button" class="btn" id="prox">${passo===E.length-1?'Revisar e enviar':'Continuar'}</button></div></div></div>`;
  ligar();
  document.getElementById('vol').onclick=()=>{passo--;passo<0?intro():etapa()};
  document.getElementById('prox').onclick=()=>{
    let primeiro=null;
    e.campos.forEach(c=>{const m=erro(c),el=app.querySelector(`[data-campo="${c.id}"]`);el.classList.toggle('inv',!!m);el.querySelector('.mf-e').textContent=m;if(m&&!primeiro)primeiro=el});
    if(primeiro){primeiro.scrollIntoView({behavior:'smooth',block:'center'});return}
    passo++;passo>=E.length?revisao():etapa();scrollTo({top:0,behavior:'smooth'});
  };
}
function ligar(){
  const limpa=id=>{const el=app.querySelector(`[data-campo="${id}"]`);if(el){el.classList.remove('inv');el.querySelector('.mf-e').textContent=''}};
  app.oninput=app.onchange=ev=>{
    const t=ev.target,id=t.dataset&&t.dataset.id;if(!id||t.closest('.ops'))return;
    const c=todos().find(x=>x.id===id);
    if(c.tipo==='cnpj')t.value=mCnpj(t.value);if(c.tipo==='telefone')t.value=mTel(t.value);
    dados[id]=t.value;limpa(id);
  };
  app.onclick=ev=>{
    const b=ev.target.closest('.op');if(!b)return;
    const box=b.parentElement,id=box.dataset.id,c=todos().find(x=>x.id===id),v=b.dataset.v;
    if(box.dataset.tipo==='radio'){dados[id]=v;box.querySelectorAll('.op').forEach(x=>{const on=x===b;x.classList.toggle('on',on);x.setAttribute('aria-pressed',on)})}
    else{
      let a=[].concat(dados[id]||[]);const nenhum=c.opcoes.some(o=>typeof o!=='string'&&o.nenhum&&o.rotulo===v);
      if(a.includes(v))a=a.filter(x=>x!==v);
      else if(nenhum)a=[v];
      else{a=a.filter(x=>!c.opcoes.some(o=>typeof o!=='string'&&o.nenhum&&o.rotulo===x));if(!c.max||a.length<c.max)a.push(v)}
      dados[id]=a;box.querySelectorAll('.op').forEach(x=>{const on=a.includes(x.dataset.v);x.classList.toggle('on',on);x.setAttribute('aria-pressed',on)});
    }
    limpa(id);
  };
}

/* ---------- maturidade ---------- */
function maturidade(){
  const d={};
  todos().filter(c=>c.dimensao).forEach(c=>{
    let p=null;
    if(c.tipo==='radio'){const o=c.opcoes.find(o=>R(o)===dados[c.id]);p=o?P(o):null}
    else if(c.tipo==='multi'&&c.faixas){const n=[].concat(dados[c.id]||[]).filter(x=>!c.opcoes.some(o=>typeof o!=='string'&&o.nenhum&&o.rotulo===x)).length;p=c.faixas.reduce((a,[min,pt])=>n>=min?pt:a,0)}
    if(p==null)return;(d[c.dimensao]=d[c.dimensao]||{s:0,m:0});d[c.dimensao].s+=p;d[c.dimensao].m+=3;
  });
  const dims=Object.entries(d).map(([k,v])=>({k,nome:M.dimensoes[k],pct:Math.round(v.s/v.m*100)}));
  const geral=dims.length?Math.round(dims.reduce((a,x)=>a+x.pct,0)/dims.length):0;
  const nivel=M.niveis.find(n=>geral<=n.ate)||M.niveis[M.niveis.length-1];
  return {dims,geral,nivel};
}
function resumo(){
  const m=maturidade(),L=[`DIAGNÓSTICO DE MATURIDADE TECNOLÓGICA`,`Enviado em: ${new Date().toLocaleString('pt-BR')}`,''];
  E.forEach(e=>{L.push(`== ${e.titulo.toUpperCase()} ==`);e.campos.forEach(c=>{const v=valorTexto(c);if(v)L.push(`${c.rotulo}: ${v}`)});L.push('')});
  L.push('== RESULTADO INDICATIVO ==',`Nível: ${m.nivel.nome} (${m.geral}%)`,...m.dims.map(x=>`${x.nome}: ${x.pct}%`));
  return L.join('\n');
}

/* ---------- revisão, envio e retorno ---------- */
function revisao(){
  const linhas=[['Empresa',dados.nomeFantasia],['Segmento',dados.segmento],['Porte',dados.porte],['Cidade/UF',[dados.cidade,dados.uf].filter(Boolean).join(' / ')],['Responsável',[dados.responsavel,dados.cargo].filter(Boolean).join(', ')],['E-mail',dados.email],['Telefone',dados.telefone]];
  app.innerHTML=`<div class="quiz"><div class="quiz-prog"><span>Etapa ${E.length+1} de ${E.length+1}</span><div class="barra"><i style="width:${E.length/(E.length+1)*100}%"></i></div></div>
  <div class="quiz-box"><h2>Revise e envie</h2><p class="aj">Confira os dados principais antes de enviar o diagnóstico.</p>
  <dl class="rev">${linhas.map(([a,b])=>`<div><dt>${a}</dt><dd>${esc(b||'-')}</dd></div>`).join('')}</dl>
  <label class="aceite"><input type="checkbox" id="lgpd"${consentimento?' checked':''}> <span>Autorizo o SENAI a utilizar estas informações para entrar em contato e mapear soluções adequadas à minha empresa, conforme a Lei Geral de Proteção de Dados (LGPD).</span></label>
  <p class="mf-e" id="eaceite" role="alert"></p>
  <div class="quiz-nav"><button type="button" class="lnk" id="vol">← Voltar</button><button type="button" class="btn" id="env">Enviar diagnóstico</button></div></div></div>`;
  document.getElementById('lgpd').onchange=e=>{consentimento=e.target.checked;document.getElementById('eaceite').textContent=''};
  document.getElementById('vol').onclick=()=>{passo=E.length-1;etapa()};
  document.getElementById('env').onclick=enviar;
}
function assunto(){return CONFIG.diagnostico.assunto.replace('{empresa}',dados.nomeFantasia||'')}
function mailto(texto){location.href=`mailto:${CONFIG.email}?subject=${encodeURIComponent(assunto())}&body=${encodeURIComponent(texto)}`}
async function enviar(){
  if(!consentimento){document.getElementById('eaceite').textContent='Confirme a autorização para enviar.';return}
  const texto=resumo(),m=maturidade(),btn=document.getElementById('env');
  const payload={enviadoEm:new Date().toISOString(),respostas:Object.fromEntries(todos().map(c=>[c.rotulo,dados[c.id]??''])),maturidade:{nivel:m.nivel.nome,pontuacao:m.geral,dimensoes:Object.fromEntries(m.dims.map(x=>[x.nome,x.pct]))}};
  const url=CONFIG.diagnostico.endpoint;
  if(url){
    btn.disabled=true;btn.textContent='Enviando...';
    try{const r=await fetch(url,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(payload)});if(!r.ok)throw 0;concluido(true,texto,m)}
    catch(e){mailto(texto);concluido(false,texto,m,true)}
  }else{mailto(texto);concluido(false,texto,m)}
}
function concluido(recebido,texto,m,falhou){
  const msgWa=`Olá! Preenchi o Diagnóstico de Maturidade Tecnológica da empresa ${dados.nomeFantasia} e gostaria de conversar com a equipe do SENAI.`;
  app.innerHTML=`<div class="quiz wide2"><div class="quiz-prog"><span>Concluído</span><div class="barra"><i style="width:100%"></i></div></div>
  <div class="quiz-box center"><div class="quiz-ico">${recebido?'✅':'✉️'}</div>
  <h2>${recebido?'Recebemos o diagnóstico da sua empresa!':'Falta só enviar o e-mail'}</h2>
  <p>${recebido?'Nossa equipe vai analisar as respostas e entrará em contato para conversar sobre o cenário da '+esc(dados.nomeFantasia)+'.':(falhou?'Não conseguimos enviar automaticamente, então abrimos o seu e-mail.':'Abrimos o seu aplicativo de e-mail')+' com as respostas prontas. Basta enviar a mensagem para concluir. Se ele não abriu, use as opções abaixo.'}</p>
  <div class="mat"><div class="mat-h"><span>Nível de maturidade indicativo</span><b>${esc(m.nivel.nome)} · ${m.geral}%</b></div><p>${esc(m.nivel.texto)}</p>
   ${m.dims.map(x=>`<div class="dim"><span>${esc(x.nome)}</span><div class="barra"><i style="width:${x.pct}%"></i></div><b>${x.pct}%</b></div>`).join('')}
   <small>Resultado indicativo, baseado nas respostas informadas. Ele será aprofundado em conversa com a nossa equipe.</small></div>
  <div class="acoes">${recebido?'':'<button class="btn" id="re">Abrir e-mail novamente</button>'}<button class="btn-sec" id="bx">Baixar respostas (.txt)</button><button class="btn-sec" id="cp">Copiar resumo</button><a class="btn-sec" target="_blank" rel="noopener" href="${linkWhatsapp(msgWa)}">Falar pelo WhatsApp</a></div></div></div>`;
  const re=document.getElementById('re');if(re)re.onclick=()=>mailto(texto);
  document.getElementById('bx').onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([texto],{type:'text/plain;charset=utf-8'}));a.download='diagnostico-maturidade-'+(dados.nomeFantasia||'empresa').toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/g,'-')+'.txt';a.click()};
  document.getElementById('cp').onclick=e=>{navigator.clipboard.writeText(texto).then(()=>e.target.textContent='Resumo copiado!')};
  scrollTo({top:0,behavior:'smooth'});
}
intro();
})();
