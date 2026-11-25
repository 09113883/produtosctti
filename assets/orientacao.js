/* QUESTIONÁRIO "Descubra o curso ideal" — página: descubra-seu-curso.html
   Edite aqui os textos, as opções e a quantidade de sugestões.
   Os ids das perguntas (objetivo, interesses, nivel, formato, investimento) e das opções são usados pelo cálculo
   e pelo campo "perfil" de cada curso em assets/cursos.js; mantenha-os iguais nos dois arquivos.
   Campos da opção: id, rotulo (texto do botão), descricao (apoio), curto (usado nos motivos da sugestão),
   limite (apenas em "investimento": valor máximo em R$; omita para "sem limite"). */
const ORIENTACAO={
  titulo:'Descubra o curso ideal para você',
  introducao:'Responda algumas perguntas rápidas e receba sugestões de cursos de acordo com o seu perfil. Leva menos de 2 minutos.',
  quantidadeSugestoes:3,
  perguntas:[
    {id:'objetivo',tipo:'unica',titulo:'Qual é o seu principal objetivo agora?',opcoes:[
      {id:'entrar',rotulo:'Entrar na área de tecnologia',descricao:'Estou começando e quero uma primeira qualificação.',curto:'entrar na área de tecnologia'},
      {id:'crescer',rotulo:'Crescer na minha carreira',descricao:'Já trabalho e quero me atualizar ou ser promovido.',curto:'crescer e se atualizar na carreira'},
      {id:'mudar',rotulo:'Mudar de carreira',descricao:'Quero migrar para uma nova área de atuação.',curto:'mudar de carreira'},
      {id:'empreender',rotulo:'Empreender',descricao:'Quero abrir ou melhorar o meu próprio negócio.',curto:'empreender'}]},
    {id:'interesses',tipo:'multipla',max:2,titulo:'O que mais desperta o seu interesse?',ajuda:'Escolha até 2 opções.',opcoes:[
      {id:'dev',rotulo:'Programar e criar sistemas',descricao:'Sites, aplicativos e aplicações web.',curto:'programação e desenvolvimento'},
      {id:'dados',rotulo:'Trabalhar com dados',descricao:'Análises, bancos de dados e indicadores.',curto:'dados e análises'},
      {id:'ia',rotulo:'Inteligência artificial e automação',descricao:'Assistentes, chatbots e processos automáticos.',curto:'inteligência artificial e automação'},
      {id:'redes',rotulo:'Redes e segurança',descricao:'Infraestrutura, servidores e proteção de sistemas.',curto:'redes e segurança'},
      {id:'criativo',rotulo:'Criatividade e animação',descricao:'Modelagem, animação e conteúdo visual em 3D.',curto:'criatividade e animação'},
      {id:'negocios',rotulo:'Negócios e inovação',descricao:'Criar, validar e gerir novas ideias.',curto:'negócios e inovação'},
      {id:'industria',rotulo:'Tecnologia na indústria',descricao:'Aplicar tecnologia na produção e na manutenção.',curto:'tecnologia na indústria'}]},
    {id:'nivel',tipo:'unica',titulo:'Qual é a sua experiência com tecnologia?',opcoes:[
      {id:'iniciante',rotulo:'Estou começando',descricao:'Pouca ou nenhuma experiência.',curto:'quem está começando'},
      {id:'intermediario',rotulo:'Tenho noções',descricao:'Já estudei ou usei tecnologia no dia a dia.',curto:'quem já tem noções'},
      {id:'avancado',rotulo:'Já atuo na área',descricao:'Trabalho com tecnologia e quero me aprofundar.',curto:'quem já atua na área'}]},
    {id:'formato',tipo:'unica',titulo:'Como você prefere estudar?',opcoes:[
      {id:'presencial',rotulo:'Presencial',descricao:'Aulas em laboratório, com a turma.',curto:'Presencial'},
      {id:'online',rotulo:'Online ao vivo',descricao:'Aulas ao vivo, de onde você estiver.',curto:'Online ao vivo'},
      {id:'hibrido',rotulo:'Híbrido',descricao:'Parte presencial e parte online.',curto:'Híbrido'},
      {id:'qualquer',rotulo:'Tanto faz',descricao:'O mais importante é o conteúdo.',curto:'qualquer formato'}]},
    {id:'investimento',tipo:'unica',titulo:'Qual faixa de investimento cabe para você?',opcoes:[
      {id:'ate1500',rotulo:'Até R$ 1.500',descricao:'Cursos mais curtos e objetivos.',limite:1500},
      {id:'ate2200',rotulo:'Até R$ 2.200',descricao:'Boa variedade de cursos.',limite:2200},
      {id:'ate2700',rotulo:'Até R$ 2.700',descricao:'Inclui as formações mais longas.',limite:2700},
      {id:'semlimite',rotulo:'Sem limite definido',descricao:'Quero a melhor opção para o meu perfil.'}]}
  ]
};
