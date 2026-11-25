/* QUESTIONÁRIO DE MATURIDADE TECNOLÓGICA — página: diagnostico-maturidade.html
   Edite aqui perguntas, opções e etapas. O motor está em assets/maturidade-motor.js.

   Campo: { id, tipo, rotulo, obrigatorio, opcoes, placeholder, max, largura:'meia', dimensao, faixas }
     tipo: 'texto' | 'email' | 'telefone' | 'cnpj' | 'select' | 'radio' | 'multi' | 'textarea'
     opcoes: ['Texto'] ou [{rotulo:'Texto', pontos:0..3}]  (pontos entram no cálculo do nível de maturidade)
             em 'multi', {rotulo, nenhum:true} marca a opção "nenhum/apenas planilhas" (não conta na pontuação)
     dimensao: uma chave de "dimensoes"; faixas (só 'multi'): [[qtd mínima, pontos], ...]
   O resultado (nível e dimensões) é calculado só com os campos que têm "dimensao". */
const UFS=['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];
const MATURIDADE={
  titulo:'Mapeie o momento tecnológico da sua empresa',
  introducao:'Responda ao diagnóstico para que o SENAI conheça o cenário atual, as operações e as necessidades da sua empresa. Leva cerca de 8 minutos e as informações são usadas apenas para entendermos como podemos apoiar.',
  dimensoes:{processos:'Processos',sistemas:'Sistemas',dados:'Dados e decisão',ti:'Estrutura de TI',seguranca:'Segurança da informação',inovacao:'IA e automação',pessoas:'Pessoas e competências'},
  niveis:[
    {ate:25,nome:'Inicial',texto:'A empresa está no começo da jornada digital, com processos majoritariamente manuais e muitas oportunidades de evolução.'},
    {ate:50,nome:'Básico',texto:'Já existem práticas e ferramentas digitais, porém pouco integradas, com espaço para estruturar e padronizar.'},
    {ate:75,nome:'Intermediário',texto:'A empresa utiliza tecnologia de forma consistente em várias áreas e pode avançar em integração, dados e inovação.'},
    {ate:100,nome:'Avançado',texto:'A tecnologia está incorporada à operação e à tomada de decisão, com foco em otimização e inovação contínuas.'}],
  etapas:[
    {id:'empresa',titulo:'Sobre a empresa',descricao:'Dados básicos para identificarmos a sua organização.',campos:[
      {id:'nomeFantasia',tipo:'texto',rotulo:'Nome da empresa',obrigatorio:true,largura:'meia'},
      {id:'razaoSocial',tipo:'texto',rotulo:'Razão social',largura:'meia'},
      {id:'cnpj',tipo:'cnpj',rotulo:'CNPJ',placeholder:'00.000.000/0000-00',largura:'meia'},
      {id:'site',tipo:'texto',rotulo:'Site ou rede social',placeholder:'www.suaempresa.com.br',largura:'meia'},
      {id:'segmento',tipo:'select',rotulo:'Segmento de atuação',obrigatorio:true,largura:'meia',opcoes:['Indústria de transformação','Metalurgia e siderurgia','Automotivo e autopeças','Alimentos e bebidas','Mineração','Construção civil','Energia e utilidades','Química, plásticos e borracha','Têxtil e vestuário','Agronegócio','Logística e transporte','Comércio','Serviços','Tecnologia da informação','Outro']},
      {id:'porte',tipo:'select',rotulo:'Número de colaboradores',obrigatorio:true,largura:'meia',opcoes:['Até 9','De 10 a 49','De 50 a 99','De 100 a 499','500 ou mais']},
      {id:'cidade',tipo:'texto',rotulo:'Cidade',obrigatorio:true,largura:'meia'},
      {id:'uf',tipo:'select',rotulo:'Estado',obrigatorio:true,largura:'meia',opcoes:UFS}]},
    {id:'contato',titulo:'Contato',descricao:'Quem poderá conversar com o SENAI sobre este diagnóstico.',campos:[
      {id:'responsavel',tipo:'texto',rotulo:'Nome do responsável',obrigatorio:true,largura:'meia'},
      {id:'cargo',tipo:'texto',rotulo:'Cargo ou função',obrigatorio:true,largura:'meia'},
      {id:'email',tipo:'email',rotulo:'E-mail',obrigatorio:true,largura:'meia'},
      {id:'telefone',tipo:'telefone',rotulo:'Telefone ou WhatsApp',obrigatorio:true,largura:'meia',placeholder:'(00) 00000-0000'},
      {id:'periodo',tipo:'radio',rotulo:'Melhor período para contato',opcoes:['Manhã','Tarde','Qualquer horário']}]},
    {id:'cenario',titulo:'Cenário tecnológico atual',descricao:'Escolha a opção que melhor representa a realidade da empresa hoje.',campos:[
      {id:'processos',tipo:'radio',dimensao:'processos',obrigatorio:true,rotulo:'Como os processos da empresa são conduzidos?',opcoes:[{rotulo:'Majoritariamente manuais e sem padrão definido',pontos:0},{rotulo:'Padronizados, mas em papel e planilhas',pontos:1},{rotulo:'Parcialmente apoiados por sistemas',pontos:2},{rotulo:'Integrados e monitorados por sistemas',pontos:3}]},
      {id:'sistemas',tipo:'multi',dimensao:'sistemas',obrigatorio:true,faixas:[[0,0],[1,1],[3,2],[5,3]],rotulo:'Quais sistemas e tecnologias a empresa utiliza?',opcoes:['ERP ou sistema de gestão','CRM ou gestão comercial','Controle de produção (PCP/MES)','Gestão de manutenção','Painéis e indicadores (BI)','Serviços em nuvem','Automação industrial (CLP/SCADA)','Comércio eletrônico',{rotulo:'Apenas planilhas e e-mail',nenhum:true}]},
      {id:'dados',tipo:'radio',dimensao:'dados',obrigatorio:true,rotulo:'Como os dados são usados nas decisões?',opcoes:[{rotulo:'Pouco usados: decide-se pela experiência',pontos:0},{rotulo:'Relatórios manuais, de forma ocasional',pontos:1},{rotulo:'Indicadores acompanhados com regularidade',pontos:2},{rotulo:'Painéis atualizados e análises avançadas',pontos:3}]},
      {id:'ti',tipo:'radio',dimensao:'ti',obrigatorio:true,rotulo:'Como é a área de tecnologia da empresa?',opcoes:[{rotulo:'Não há responsável por TI',pontos:0},{rotulo:'Um profissional ou suporte terceirizado pontual',pontos:1},{rotulo:'Equipe pequena, voltada ao suporte',pontos:2},{rotulo:'Equipe estruturada, com projetos e planejamento',pontos:3}]},
      {id:'seguranca',tipo:'radio',dimensao:'seguranca',obrigatorio:true,rotulo:'Como a empresa trata a segurança da informação?',opcoes:[{rotulo:'Sem práticas formais',pontos:0},{rotulo:'Práticas básicas (antivírus, backup)',pontos:1},{rotulo:'Políticas e controles definidos',pontos:2},{rotulo:'Gestão estruturada, com auditorias ou certificações',pontos:3}]},
      {id:'inovacao',tipo:'radio',dimensao:'inovacao',obrigatorio:true,rotulo:'Qual o uso de inteligência artificial e automação?',opcoes:[{rotulo:'Não utiliza',pontos:0},{rotulo:'Está avaliando possibilidades',pontos:1},{rotulo:'Possui testes ou projetos-piloto',pontos:2},{rotulo:'Utiliza em processos relevantes',pontos:3}]}]},
    {id:'operacoes',titulo:'Operações',descricao:'Ajude-nos a entender como a empresa funciona.',campos:[
      {id:'areas',tipo:'multi',obrigatorio:true,rotulo:'Quais áreas fazem parte da operação?',opcoes:['Produção','Manutenção','Qualidade','Logística e suprimentos','Comercial e vendas','Financeiro e administrativo','Atendimento ao cliente','Recursos humanos','Engenharia e projetos','Pesquisa e inovação']},
      {id:'regime',tipo:'radio',rotulo:'Regime de operação',opcoes:['Turno único','Dois turnos','Três turnos ou 24 horas','Projetos sob demanda']},
      {id:'desafio',tipo:'textarea',obrigatorio:true,rotulo:'Qual é o principal desafio operacional hoje?',placeholder:'Ex.: retrabalho, falta de integração entre áreas, controle de estoque, paradas de máquina...'}]},
    {id:'pessoas',titulo:'Pessoas e capacitação',descricao:'Como a equipe lida com tecnologia e desenvolvimento.',campos:[
      {id:'competencias',tipo:'radio',dimensao:'pessoas',obrigatorio:true,rotulo:'Como você avalia as competências digitais da equipe?',opcoes:[{rotulo:'Muito limitadas',pontos:0},{rotulo:'Básicas',pontos:1},{rotulo:'Boas, com lacunas pontuais',pontos:2},{rotulo:'Avançadas',pontos:3}]},
      {id:'treinamento',tipo:'radio',dimensao:'pessoas',obrigatorio:true,rotulo:'A empresa investe na capacitação dos colaboradores?',opcoes:[{rotulo:'Não investe',pontos:0},{rotulo:'Eventualmente',pontos:1},{rotulo:'Regularmente, com plano anual',pontos:3}]},
      {id:'carencias',tipo:'multi',rotulo:'Em quais temas a equipe precisa se desenvolver?',opcoes:['Programação e desenvolvimento','Dados e análises (BI)','Inteligência artificial e automação','Redes e infraestrutura','Segurança da informação','Automação industrial e IoT','Gestão de projetos e inovação','Ferramentas digitais de produtividade','Liderança digital']}]},
    {id:'necessidades',titulo:'Necessidades e expectativas',descricao:'O que a empresa busca para os próximos meses.',campos:[
      {id:'prioridades',tipo:'multi',max:3,obrigatorio:true,rotulo:'Quais são as prioridades da empresa para os próximos 12 meses?',ajuda:'Escolha até 3 opções.',opcoes:['Reduzir custos','Aumentar a produtividade','Melhorar a qualidade','Digitalizar processos','Integrar sistemas e áreas','Proteger dados e sistemas','Capacitar as equipes','Desenvolver novos produtos e serviços','Atender exigências de clientes ou normas','Atrair e reter talentos']},
      {id:'apoio',tipo:'multi',rotulo:'Que tipo de apoio a empresa procura?',opcoes:['Consultoria especializada','Treinamento das equipes','Diagnóstico mais aprofundado','Projetos de inovação','Palestras e workshops','Ainda não sei, estamos mapeando']},
      {id:'prazo',tipo:'radio',obrigatorio:true,rotulo:'Em quanto tempo pretendem iniciar uma ação?',opcoes:['Imediato (até 3 meses)','De 3 a 6 meses','De 6 a 12 meses','Ainda estamos explorando']},
      {id:'necessidades',tipo:'textarea',rotulo:'Conte o que a empresa busca resolver ou alcançar',placeholder:'Fique à vontade para detalhar necessidades, projetos em andamento ou dúvidas.'},
      {id:'origem',tipo:'select',rotulo:'Como conheceu o SENAI?',opcoes:['Já somos clientes','Indicação','Site','Redes sociais','Eventos','Outro']}]}
  ]
};
