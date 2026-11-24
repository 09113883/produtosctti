/* Motor das páginas de detalhe (produto.html e curso.html).
   Os conteúdos ficam em assets/produtos.js e assets/cursos.js. */
const EMAIL_CONTATO='ctti@senai.br'; // destino dos formulários de contato

const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lista=a=>[].concat(a||[]);
const paragrafos=a=>lista(a).map(t=>`<p>${esc(t)}</p>`).join('');
const checks=a=>lista(a).length?`<ul class="checks">${lista(a).map(i=>`<li>${esc(i)}</li>`).join('')}</ul>`:'';
const secao=(titulo,corpo)=>corpo?`<section><h2>${esc(titulo)}</h2>${corpo}</section>`:'';
const idDaUrl=()=>new URLSearchParams(location.search).get('id');

function cards(itens,mapaLinks,pagina){
  if(!lista(itens).length)return '';
  return `<div class="cards">${lista(itens).map(c=>{
    const link=c.id&&mapaLinks&&mapaLinks[c.id]?`${pagina}?id=${encodeURIComponent(c.id)}`:'';
    const corpo=`<h3>${esc(c.titulo)}</h3><p>${esc(c.texto)}</p>${link?'<span class="mais">Conhecer →</span>':''}`;
    return link?`<a class="card" href="${link}">${corpo}</a>`:`<article class="card">${corpo}</article>`;
  }).join('')}</div>`;
}

function formularioContato(c,assuntoPadrao,nome){
  c=c||{};
  return `<section class="contact" id="contato"><div class="container contact-grid">
  <div><div class="kicker">Fale conosco</div><h2>${esc(c.titulo||'Quer saber mais sobre '+(nome||'esta solução')+'?')}</h2><p>${esc(c.texto||'Deixe seus dados e nossa equipe entrará em contato.')}</p></div>
  <form class="cf" data-assunto="${esc(c.assunto||assuntoPadrao)}" novalidate>
   <label>Nome<input name="nome" required autocomplete="name"></label>
   <label>Empresa ou instituição<input name="empresa" autocomplete="organization"></label>
   <label>E-mail<input name="email" type="email" required autocomplete="email"></label>
   <label>Telefone<input name="telefone" type="tel" autocomplete="tel"></label>
   <label class="full">Mensagem<textarea name="mensagem" placeholder="${esc(c.placeholder||'Como podemos ajudar?')}"></textarea></label>
   <div class="full"><button class="btn" type="submit">${esc(c.botao||'Enviar mensagem')}</button></div>
   <p class="cf-msg">Abrimos o seu aplicativo de e-mail com a mensagem pronta. É só enviar.</p>
  </form></div></section>`;
}

function ativarFormularios(){
  document.querySelectorAll('form.cf').forEach(f=>f.addEventListener('submit',e=>{
    e.preventDefault();
    const d=Object.fromEntries(new FormData(f));
    const corpo=`Nome: ${d.nome}\nEmpresa/Instituição: ${d.empresa||'-'}\nE-mail: ${d.email}\nTelefone: ${d.telefone||'-'}\n\n${d.mensagem||''}`;
    location.href=`mailto:${EMAIL_CONTATO}?subject=${encodeURIComponent(f.dataset.assunto)}&body=${encodeURIComponent(corpo)}`;
    f.querySelector('.cf-msg').style.display='block';
  }));
}

function naoEncontrado(rotulo,href){
  document.title='Página não encontrada | SENAI';
  document.getElementById('app').innerHTML=`<div class="container notfound"><h1>Conteúdo não encontrado</h1><p>O endereço acessado não corresponde a nenhum item cadastrado.</p><a class="btn" href="${href}">${rotulo}</a></div>`;
}

function definirTitulo(nome,descricao){
  document.title=`${nome} | SENAI`;
  const m=document.querySelector('meta[name="description"]');
  if(m&&descricao)m.content=descricao;
}

/* ---------- PRODUTO ---------- */
function renderProduto(d){
  if(!d)return naoEncontrado('Voltar ao catálogo','index.html#solucoes');
  definirTitulo(d.nome,d.resumo||lista(d.secoes?.[0]?.texto)[0]);
  const corpo=lista(d.secoes).map(s=>secao(s.titulo,paragrafos(s.texto)+checks(s.lista)+cards(s.cards,typeof PRODUTOS!=='undefined'?PRODUTOS:null,'produto.html'))).join('');
  document.getElementById('app').innerHTML=`
  <section class="hero"><div class="container">
   <p class="crumbs"><a href="index.html">Catálogo</a> › <a href="index.html#solucoes">${esc(d.segmento)}</a> › ${esc(d.nome)}</p>
   <div class="kicker">${esc(d.segmento)}${d.faixa?' · '+esc(d.faixa):''}</div>
   <h1>${esc(d.nome)}</h1>${d.resumo?`<p class="lead">${esc(d.resumo)}</p>`:''}
  </div></section>
  <main><div class="container"><div class="layout single"><div class="content">${corpo}</div></div></div>
  ${formularioContato(d.contato,'Contato - '+d.nome,d.nome)}</main>`;
  ativarFormularios();
}

/* ---------- CURSO ---------- */
const MESES=['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'];
function turmas(d){
  if(!lista(d.turmas).length)return '';
  const itens=lista(d.turmas).map(t=>{
    const [dia,mes]=String(t.inicio).split('/');
    const cls={'Inscrições abertas':'abertas','Vagas limitadas':'limitadas','Em andamento':'andamento'}[t.situacao]||'';
    const quando=t.termino?`${esc(t.inicio)} a ${esc(t.termino)}`:esc(t.inicio);
    return `<li><div class="data"><b>${esc(dia)}</b><span>${MESES[(+mes||1)-1]}</span></div>
      <div><h3>${esc(t.nome)}</h3><p>${quando}</p><p>${esc(t.horarios||d.horarios||'')}${t.formato?' · '+esc(t.formato):''}</p></div>
      <div class="acao"><span class="st ${cls}">${esc(t.situacao)}</span>${t.situacao==='Em andamento'?'':'<a href="#contato">Quero esta turma →</a>'}</div></li>`;
  }).join('');
  return `<ul class="turmas">${itens}</ul><p class="nota">As datas são previstas e podem ser ajustadas conforme a formação das turmas.</p>`;
}
function renderCurso(d){
  if(!d)return naoEncontrado('Voltar aos cursos','index.html#cursos');
  definirTitulo(d.nome,d.resumo);
  const fato=(r,v)=>v?`<div class="fact"><b>${esc(r)}</b><span>${esc(v)}</span></div>`:'';
  const modulos=lista(d.conteudo).length?`<ol class="modules">${lista(d.conteudo).map(m=>`<li><div><b>${esc(m.nome)}</b><span>${esc(m.descricao)}</span></div><em>${esc(m.horas)}</em></li>`).join('')}</ol>`:'';
  const inv=d.investimento;
  const corpo=[
    secao('Sobre o curso',paragrafos(d.sobre)),
    secao('Desafio que o curso resolve',paragrafos(d.desafio)),
    secao('O que você conquista',checks(d.conquistas)),
    secao('Como você aprende',paragrafos(d.metodologia)),
    secao('Conteúdo programático',modulos),
    secao('Para quem é',paragrafos(d.publico)),
    secao('Oportunidades de atuação',cards(d.oportunidades)),
    secao('Certificado',paragrafos(d.certificado)),
    secao('Próximas turmas',turmas(d))
  ].join('');
  document.getElementById('app').innerHTML=`
  <section class="hero"><div class="container">
   <p class="crumbs"><a href="index.html">Catálogo</a> › <a href="index.html#cursos">Cursos oferecidos</a> › ${esc(d.nome)}</p>
   <div class="kicker">Portfólio de formação${d.area?' · '+esc(d.area):''}</div>
   <h1>${esc(d.nome)}</h1>${d.resumo?`<p class="lead">${esc(d.resumo)}</p>`:''}
   <div class="tags">${d.categoria?`<span class="tag">${esc(d.categoria)}</span>`:''}${d.situacao?`<span class="tag ${d.situacao==='Em andamento'?'live':''}">${esc(d.situacao)}</span>`:''}${d.formato?`<span class="tag">${esc(d.formato)}</span>`:''}</div>
  </div></section>
  <main><div class="container"><div class="layout"><div class="content">${corpo}</div>
   <aside class="summary">${inv?`<div class="price"><small>Investimento</small><strong>${esc(inv.valor)}</strong>${inv.condicao?`<div style="font-size:.88rem;color:#cfe0f0">${esc(inv.condicao)}</div>`:''}</div>`:''}
    <div class="aside-body">${fato('Carga horária',d.cargaHoraria)}${fato('Formato',d.formatoDetalhe||d.formato)}${fato('Dias e horários',d.horarios)}${fato('Área tecnológica',d.area)}${fato('Infraestrutura mínima',d.infraestrutura)}${fato('Pré-requisitos',d.preRequisitos)}${fato('Idade mínima',d.idadeMinima)}${fato('Situação da turma',d.situacao)}
    <a class="btn" href="#contato">${esc(d.contato?.botao||'Quero me inscrever')}</a></div></aside>
  </div></div>${formularioContato(d.contato,'Inscrição - '+d.nome,d.nome)}</main>`;
  ativarFormularios();
}
