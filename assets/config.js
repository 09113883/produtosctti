/* PARÂMETROS GERAIS DO SITE — carregado em todas as páginas (index, produto e curso).
   Altere aqui e a mudança vale para o site inteiro. */
const CONFIG={
  instituicao:'SENAI',
  email:'ctti@senai.br',                 // destino dos formulários de contato
  diagnostico:{                          // formulário de maturidade tecnológica (diagnostico-maturidade.html)
    endpoint:'',                         // URL que recebe as respostas por POST (JSON). Vazio = envio por e-mail
    assunto:'Diagnóstico de Maturidade Tecnológica - {empresa}'
  },
  whatsapp:{
    numero:'5531999999999',              // formato internacional, só números: 55 + DDD + número
    flutuante:true,                      // false esconde o botão fixo no canto da tela
    rotulo:'Fale conosco no WhatsApp',
    mensagemPadrao:'Olá! Vim pelo catálogo de soluções do SENAI e gostaria de mais informações.',
    mensagemProduto:'Olá! Tenho interesse em *{nome}* e gostaria de mais informações.',
    mensagemCurso:'Olá! Tenho interesse no curso *{nome}* e gostaria de mais informações sobre turmas e matrícula.'
  }
};

const WA_SVG='<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

/* Mensagem do WhatsApp conforme a página aberta (as páginas de produto e curso informam o contexto) */
function mensagemWhatsapp(){
  const w=CONFIG.whatsapp,c=window.PAGINA_CONTEXTO;
  return c?(c.tipo==='curso'?w.mensagemCurso:w.mensagemProduto).replace('{nome}',c.nome):w.mensagemPadrao;
}
function linkWhatsapp(msg){return 'https://wa.me/'+CONFIG.whatsapp.numero+'?text='+encodeURIComponent(msg||mensagemWhatsapp());}

/* Botão flutuante, fixo no canto inferior direito */
(function(){
  if(!CONFIG.whatsapp.flutuante)return;
  const css=document.createElement('style');
  css.textContent=`#wa-flutuante{position:fixed;right:20px;bottom:calc(20px + env(safe-area-inset-bottom,0px));z-index:9999;display:flex;align-items:center;gap:10px;text-decoration:none}
#wa-flutuante .wa-icone{width:60px;height:60px;border-radius:50%;background:#25d366;color:#fff;display:grid;place-items:center;box-shadow:0 8px 24px #0000004d;animation:waPulso 2.4s infinite}
#wa-flutuante .wa-icone svg{width:32px;height:32px}
#wa-flutuante .wa-rotulo{background:#fff;color:#172b3b;font:700 .85rem Inter,"Segoe UI",Arial,sans-serif;padding:9px 15px;border-radius:999px;box-shadow:0 6px 20px #00000030;opacity:0;transform:translateX(8px);transition:.2s;pointer-events:none;white-space:nowrap}
#wa-flutuante:hover .wa-rotulo,#wa-flutuante:focus-visible .wa-rotulo{opacity:1;transform:none}
#wa-flutuante:hover .wa-icone{transform:scale(1.07)}
@keyframes waPulso{0%{box-shadow:0 0 0 0 #25d36699,0 8px 24px #0000004d}70%{box-shadow:0 0 0 18px #25d36600,0 8px 24px #0000004d}100%{box-shadow:0 0 0 0 #25d36600,0 8px 24px #0000004d}}
@media(prefers-reduced-motion:reduce){#wa-flutuante .wa-icone{animation:none}}
@media(max-width:700px){#wa-flutuante{right:14px;bottom:calc(14px + env(safe-area-inset-bottom,0px))}#wa-flutuante .wa-rotulo{display:none}}`;
  document.head.appendChild(css);
  function criar(){
    if(document.getElementById('wa-flutuante'))return;
    const a=document.createElement('a');
    a.id='wa-flutuante';a.target='_blank';a.rel='noopener';a.href=linkWhatsapp();
    a.setAttribute('aria-label',CONFIG.whatsapp.rotulo);
    a.innerHTML='<span class="wa-rotulo">'+CONFIG.whatsapp.rotulo+'</span><span class="wa-icone">'+WA_SVG+'</span>';
    a.addEventListener('click',()=>{a.href=linkWhatsapp();});
    document.body.appendChild(a);
  }
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',criar):criar();
})();
