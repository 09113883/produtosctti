/* CADASTRO DE PRODUTOS — página: produto.html?id=<chave>
   Para criar um produto novo: copie um bloco, troque a chave e edite os textos.
   A chave é o nome do produto no catálogo, em minúsculas, sem acentos e com hífen no lugar dos espaços
   (ex.: 'Treinamento in company' -> 'treinamento-in-company'); assim o botão do index.html já abre esta página.

   Campos: nome, segmento, faixa (opcional), chamada (frase curta usada nos cards do slider de Complementos), resumo (opcional),
           complementosTexto (opcional: frase acima do slider de Complementos),
           secoes: [{ titulo, texto: 'parágrafo' ou ['p1','p2'], lista: ['item'], cards: [{titulo, texto, id}] }],
           A seção "Complementos" é automática: mostra, em slider, todos os outros produtos do mesmo segmento.
           contato (opcional): { titulo, texto, assunto, placeholder, botao } */
const PRODUTOS={
 "treinamento-in-company": {
  "nome": "Treinamento in company",
  "segmento": "SENAI Negócios",
  "faixa": "Soluções corporativas",
  "chamada": "Capacitação desenvolvida nas instalações da empresa, considerando seu contexto operacional, seus objetivos e as competências que precisam ser fortalecidas.",
  "secoes": [
   {
    "titulo": "Sobre a solução",
    "texto": [
     "O Treinamento in company leva a capacitação do SENAI para dentro da sua empresa. A formação é planejada a partir do contexto operacional, dos objetivos do negócio e das competências que precisam ser fortalecidas nas equipes.",
     "Como a ação acontece no ambiente de trabalho, exemplos, exercícios e desafios podem refletir a realidade da operação, o que aproxima o aprendizado da prática e acelera sua aplicação no dia a dia. Escopo, conteúdo, carga horária e condições são definidos em conjunto com a empresa."
    ]
   },
   {
    "titulo": "O que a solução oferece",
    "lista": [
     "Levantamento das necessidades de capacitação junto às lideranças.",
     "Conteúdo e carga horária sob medida para cada equipe.",
     "Realização nas instalações da empresa, em horários compatíveis com a operação.",
     "Acompanhamento da turma e certificação conforme a proposta formativa."
    ]
   },
   {
    "titulo": "Para quem é indicada",
    "texto": "Empresas que desejam capacitar equipes no próprio ambiente de trabalho, de áreas operacionais e técnicas até lideranças."
   }
  ]
 },
 "treinamento-local": {
  "nome": "Treinamento local",
  "segmento": "SENAI Negócios",
  "faixa": "Soluções corporativas",
  "chamada": "Capacitação realizada em unidade ou espaço definido pelo SENAI, com ambiente e recursos adequados à proposta formativa.",
  "secoes": [
   {
    "titulo": "Sobre a solução",
    "texto": [
     "No Treinamento local, a capacitação acontece em uma unidade ou espaço definido pelo SENAI, com ambiente, equipamentos e recursos adequados à proposta formativa.",
     "A modalidade é indicada para quem busca desenvolvimento técnico em uma estrutura preparada para a prática, com turmas formadas por profissionais de uma mesma empresa ou de diferentes organizações, conforme a oferta."
    ]
   },
   {
    "titulo": "O que a solução oferece",
    "lista": [
     "Laboratórios, equipamentos e materiais apropriados ao conteúdo.",
     "Instrutores com experiência técnica e didática.",
     "Turmas organizadas por empresa ou abertas a profissionais de diferentes organizações.",
     "Requisitos de ingresso e carga horária definidos conforme a formação."
    ]
   },
   {
    "titulo": "Para quem é indicada",
    "texto": "Empresas, equipes e profissionais que buscam desenvolvimento técnico."
   }
  ]
 },
 "cursos-para-empresas-video-apostila-e-podcast": {
  "nome": "Cursos para empresas (Vídeo, Apostila e Podcast)",
  "segmento": "SENAI Negócios",
  "faixa": "Soluções corporativas",
  "chamada": "Conteúdos de aprendizagem organizados em diferentes formatos — vídeo, apostila e podcast — para apoiar ações de capacitação e disseminação do conhecimento.",
  "secoes": [
   {
    "titulo": "Sobre a solução",
    "texto": [
     "Os Cursos para empresas reúnem conteúdos de aprendizagem organizados em três formatos: vídeo, apostila e podcast. Cada formato atende a um jeito de aprender, e eles podem ser combinados para ampliar o alcance da capacitação.",
     "A solução apoia ações de capacitação e a disseminação do conhecimento dentro da organização, com flexibilidade de acesso para que cada profissional estude no seu ritmo. Formato, conteúdo e acesso são definidos conforme a solução contratada."
    ]
   },
   {
    "titulo": "O que a solução oferece",
    "lista": [
     "Videoaulas objetivas, com demonstrações e exemplos aplicados.",
     "Apostilas para estudo, consulta e referência no dia a dia.",
     "Podcasts para aprender em movimento, de forma leve e prática.",
     "Possibilidade de combinar os formatos e personalizar os temas."
    ]
   },
   {
    "titulo": "Para quem é indicada",
    "texto": "Empresas que buscam alternativas flexíveis para capacitar e atualizar seus profissionais."
   }
  ]
 },
 "preparatorios-para-certificacoes": {
  "nome": "Preparatórios para Certificações",
  "segmento": "SENAI Negócios",
  "faixa": "Soluções corporativas",
  "chamada": "Preparação direcionada ao desenvolvimento dos conhecimentos e competências relacionados a certificações profissionais e tecnológicas.",
  "secoes": [
   {
    "titulo": "Sobre a solução",
    "texto": [
     "Os Preparatórios para Certificações desenvolvem os conhecimentos e as competências cobrados em certificações profissionais e tecnológicas, com foco nos temas, nas práticas e no formato dos exames.",
     "A preparação combina revisão de conceitos, exercícios e simulações, e é organizada em trilhas conforme a certificação desejada. Os requisitos variam de acordo com a certificação e com a trilha preparatória."
    ]
   },
   {
    "titulo": "O que a solução oferece",
    "lista": [
     "Trilhas organizadas por certificação e nível de conhecimento.",
     "Revisão dos conteúdos mais relevantes para cada exame.",
     "Exercícios e simulados para ganhar segurança.",
     "Orientações sobre o processo de inscrição e a realização da prova."
    ]
   },
   {
    "titulo": "Para quem é indicada",
    "texto": "Profissionais e equipes que desejam se preparar para processos de certificação."
   }
  ]
 },
 "palestras-de-profissionais-para-a-industria": {
  "nome": "Palestras de profissionais para a Indústria",
  "segmento": "SENAI Negócios",
  "faixa": "Soluções corporativas",
  "chamada": "Encontros com profissionais e especialistas para compartilhar experiências, conhecimentos aplicados, tendências e temas relevantes para a indústria.",
  "secoes": [
   {
    "titulo": "Sobre a solução",
    "texto": [
     "As Palestras reúnem profissionais e especialistas para compartilhar experiências, conhecimentos aplicados, tendências e temas relevantes para a indústria.",
     "O formato é flexível: tema, público, duração e modalidade são alinhados à necessidade de cada organização, de eventos internos a encontros com lideranças e equipes técnicas."
    ]
   },
   {
    "titulo": "O que a solução oferece",
    "lista": [
     "Especialistas com vivência prática nos temas apresentados.",
     "Conteúdo adaptado ao público e aos objetivos do encontro.",
     "Espaço para perguntas e troca de experiências.",
     "Combinação com treinamentos e consultorias para dar continuidade ao tema."
    ]
   },
   {
    "titulo": "Para quem é indicada",
    "texto": "Empresas, lideranças, equipes técnicas e profissionais da indústria."
   }
  ]
 },
 "diagnostico-de-maturidade-tecnologica": {
  "nome": "Diagnóstico de maturidade tecnológica",
  "segmento": "SENAI Negócios",
  "faixa": "Soluções corporativas",
  "chamada": "Análise estruturada do cenário tecnológico da organização para compreender seu estágio atual e identificar oportunidades de evolução.",
  "secoes": [
   {
    "titulo": "Sobre a solução",
    "texto": [
     "O Diagnóstico de maturidade tecnológica é uma análise estruturada do cenário tecnológico da organização. Ele mostra em que estágio a empresa está, onde estão as lacunas e quais oportunidades de evolução devem ser priorizadas.",
     "O trabalho envolve a coleta de informações e a participação dos responsáveis pelas áreas envolvidas, conforme o escopo definido. O resultado orienta decisões de investimento, capacitação e transformação digital."
    ]
   },
   {
    "titulo": "O que a solução oferece",
    "lista": [
     "Avaliação do uso de tecnologias, processos e competências.",
     "Identificação de lacunas e oportunidades de melhoria.",
     "Relatório com a leitura do cenário atual e das prioridades.",
     "Recomendações para os próximos passos de evolução."
    ]
   },
   {
    "titulo": "Para quem é indicada",
    "texto": "Empresas que desejam compreender sua maturidade tecnológica e orientar prioridades de desenvolvimento."
   }
  ]
 },
 "consultoria": {
  "nome": "Consultoria",
  "segmento": "SENAI Negócios",
  "faixa": "Soluções corporativas",
  "chamada": "Atuação especializada para compreender desafios, avaliar cenários e apoiar a construção de caminhos de melhoria, inovação e desenvolvimento tecnológico.",
  "secoes": [
   {
    "titulo": "Sobre a solução",
    "texto": [
     "A Consultoria SENAI é uma atuação especializada para empresas que precisam compreender seus desafios, avaliar cenários com profundidade e construir caminhos concretos de melhoria, inovação e desenvolvimento tecnológico.",
     "Nossa equipe trabalha lado a lado com as lideranças e as áreas técnicas da organização. Primeiro entendemos o contexto operacional, os objetivos de negócio e as restrições existentes. Em seguida, analisamos processos, tecnologias e competências, e apresentamos recomendações priorizadas, viáveis e alinhadas à realidade de cada empresa.",
     "Cada projeto é desenhado sob medida. Escopo, objetivos, prazos e condições são definidos em conjunto com a empresa, de acordo com a sua demanda. Por isso a consultoria atende desde necessidades pontuais, como a avaliação de um processo específico, até iniciativas mais amplas de transformação tecnológica."
    ]
   },
   {
    "titulo": "Em que podemos apoiar",
    "lista": [
     "Compreensão de desafios operacionais, tecnológicos e de capacitação.",
     "Avaliação de cenários, processos e ferramentas em uso.",
     "Identificação de oportunidades de melhoria, inovação e eficiência.",
     "Construção de planos de ação priorizados, com etapas e responsáveis.",
     "Apoio à implantação das soluções e ao desenvolvimento das equipes envolvidas."
    ]
   },
   {
    "titulo": "Para quem é indicada",
    "texto": "Para organizações que buscam apoio especializado para enfrentar desafios e desenvolver soluções, da indústria a empresas de serviços e tecnologia, com ou sem uma demanda totalmente definida. Se a necessidade ainda está clara apenas em parte, ajudamos a delimitá-la."
   }
  ],
  "contato": {
   "titulo": "Vamos conversar sobre o desafio da sua empresa?",
   "texto": "Conte-nos brevemente o que você precisa. Nossa equipe retorna para entender o contexto e propor o melhor formato de consultoria.",
   "assunto": "Contato - Consultoria SENAI",
   "placeholder": "Descreva o desafio ou a necessidade da sua empresa",
   "botao": "Solicitar contato"
  },
  "complementosTexto": "A consultoria pode ser combinada com outras soluções do SENAI Negócios para ampliar os resultados do projeto."
 },
 "pos-tecnico": {
  "nome": "Pós-Técnico",
  "segmento": "SENAI Evolui",
  "faixa": "Formação continuada",
  "chamada": "Formação de continuidade que amplia e aprofunda conhecimentos construídos na educação profissional técnica, favorecendo novos caminhos de atuação.",
  "secoes": [
   {
    "titulo": "Sobre a solução",
    "texto": [
     "O Pós-Técnico é uma formação de continuidade que amplia e aprofunda os conhecimentos construídos na educação profissional técnica.",
     "Ele abre novos caminhos de atuação, com conteúdos mais especializados e alinhados às demandas tecnológicas do mercado, para quem já tem base técnica e quer dar o próximo passo na carreira."
    ]
   },
   {
    "titulo": "O que a solução oferece",
    "lista": [
     "Aprofundamento em áreas tecnológicas específicas.",
     "Conteúdos conectados às necessidades do mundo do trabalho.",
     "Aulas práticas em laboratórios e ambientes preparados.",
     "Requisitos de ingresso e demais critérios definidos para cada oferta."
    ]
   },
   {
    "titulo": "Para quem é indicada",
    "texto": "Técnicos que desejam aprofundar conhecimentos e ampliar possibilidades profissionais."
   }
  ]
 },
 "especializacoes": {
  "nome": "Especializações",
  "segmento": "SENAI Evolui",
  "faixa": "Formação continuada",
  "chamada": "Percursos formativos voltados ao aprofundamento de conhecimentos em áreas específicas, acompanhando transformações tecnológicas e demandas do mundo do trabalho.",
  "secoes": [
   {
    "titulo": "Sobre a solução",
    "texto": [
     "As Especializações são percursos formativos voltados ao aprofundamento de conhecimentos em áreas específicas, acompanhando as transformações tecnológicas e as demandas do mundo do trabalho.",
     "São indicadas para profissionais que já atuam ou têm formação na área e buscam atualização e diferenciação. Os requisitos de escolaridade e experiência são definidos conforme a especialização."
    ]
   },
   {
    "titulo": "O que a solução oferece",
    "lista": [
     "Foco em temas atuais e em tecnologias de alta demanda.",
     "Docentes com experiência de mercado.",
     "Projetos e situações aplicadas ao contexto profissional.",
     "Certificação ao final, conforme a oferta."
    ]
   },
   {
    "titulo": "Para quem é indicada",
    "texto": "Profissionais que buscam atualização, aprofundamento e diferenciação profissional."
   }
  ]
 },
 "graduacao": {
  "nome": "Graduação",
  "segmento": "SENAI Evolui",
  "faixa": "Formação continuada",
  "chamada": "Formação de nível superior que integra fundamentos, conhecimentos tecnológicos e competências para atuação em contextos profissionais.",
  "secoes": [
   {
    "titulo": "Sobre a solução",
    "texto": [
     "A Graduação é uma formação de nível superior que integra fundamentos, conhecimentos tecnológicos e competências para atuação em contextos profissionais.",
     "O percurso valoriza a aprendizagem aplicada e aproxima o estudante dos desafios reais da indústria e da tecnologia. Os requisitos de ingresso e o processo seletivo seguem a oferta de cada curso."
    ]
   },
   {
    "titulo": "O que a solução oferece",
    "lista": [
     "Base teórica sólida combinada com prática.",
     "Projetos e vivências conectados ao mundo do trabalho.",
     "Infraestrutura de laboratórios e ambientes tecnológicos.",
     "Possibilidade de continuidade com especializações."
    ]
   },
   {
    "titulo": "Para quem é indicada",
    "texto": "Pessoas que desejam iniciar ou dar continuidade à formação em nível superior."
   }
  ]
 },
 "habilitacao-tecnica": {
  "nome": "Habilitação Técnica",
  "segmento": "SENAI Evolui",
  "faixa": "Formação continuada",
  "chamada": "Formação técnica estruturada para desenvolver competências profissionais e preparar o estudante para atuar em uma área tecnológica.",
  "secoes": [
   {
    "titulo": "Sobre a solução",
    "texto": [
     "A Habilitação Técnica é uma formação estruturada para desenvolver competências profissionais e preparar o estudante para atuar em uma área tecnológica.",
     "O curso combina conhecimentos técnicos e vivências práticas, e prepara para ingressar ou se desenvolver no setor industrial. Requisitos de ingresso e documentação seguem o curso técnico e as regras da oferta."
    ]
   },
   {
    "titulo": "O que a solução oferece",
    "lista": [
     "Formação orientada às competências exigidas pela indústria.",
     "Aulas em laboratórios e oficinas equipados.",
     "Acompanhamento de instrutores e docentes especializados.",
     "Possibilidade de continuar os estudos com Pós-Técnico e Graduação."
    ]
   },
   {
    "titulo": "Para quem é indicada",
    "texto": "Pessoas interessadas em obter formação técnica para ingressar ou se desenvolver no setor industrial."
   }
  ]
 },
 "aperfeicoamentos": {
  "nome": "Aperfeiçoamentos",
  "segmento": "SENAI Impulso",
  "faixa": "Aperfeiçoamento",
  "chamada": "Oportunidades de atualização e desenvolvimento de competências específicas, complementando a formação e fortalecendo a preparação para desafios técnicos e profissionais.",
  "secoes": [
   {
    "titulo": "Sobre a solução",
    "texto": [
     "Os Aperfeiçoamentos são oportunidades de atualização e desenvolvimento de competências específicas, que complementam a formação e fortalecem a preparação para desafios técnicos e profissionais.",
     "Por serem focados, permitem aprender temas pontuais de forma objetiva e aplicá-los rapidamente. Os critérios de participação são definidos conforme o aperfeiçoamento ofertado."
    ]
   },
   {
    "titulo": "O que a solução oferece",
    "lista": [
     "Temas específicos e atuais, de curta duração.",
     "Conteúdo direto, com foco na aplicação prática.",
     "Complemento ideal para quem está em formação.",
     "Possibilidade de somar competências ao longo do percurso."
    ]
   },
   {
    "titulo": "Para quem é indicada",
    "texto": "Alunos em formação e pessoas que desejam ampliar ou atualizar competências."
   }
  ]
 },
 "gamificacao": {
  "nome": "Gamificação",
  "segmento": "SENAI Descoberta",
  "faixa": "Infância e criatividade",
  "chamada": "Experiências educativas que utilizam desafios, regras, metas e dinâmicas inspiradas em jogos para tornar a aprendizagem mais envolvente e participativa.",
  "secoes": [
   {
    "titulo": "Sobre a solução",
    "texto": [
     "A Gamificação reúne experiências educativas que usam desafios, regras, metas e dinâmicas inspiradas em jogos para tornar a aprendizagem mais envolvente e participativa.",
     "As atividades despertam curiosidade e motivação e estimulam a colaboração e a resolução de problemas de forma lúdica. Recursos e atividades são definidos conforme a faixa etária e a proposta educativa."
    ]
   },
   {
    "titulo": "O que a solução oferece",
    "lista": [
     "Desafios e missões com metas claras.",
     "Trabalho em equipe e cooperação.",
     "Aprendizado por tentativa, erro e superação.",
     "Atividades adaptadas a cada faixa etária."
    ]
   },
   {
    "titulo": "Para quem é indicada",
    "texto": "Crianças e público infantojuvenil."
   }
  ]
 },
 "introducao-ao-pensamento-computacional": {
  "nome": "Introdução ao pensamento computacional",
  "segmento": "SENAI Descoberta",
  "faixa": "Infância e criatividade",
  "chamada": "Atividades que estimulam o raciocínio lógico, a organização de ideias, a identificação de padrões e a decomposição de problemas para criar soluções.",
  "secoes": [
   {
    "titulo": "Sobre a solução",
    "texto": [
     "Estas atividades estimulam o raciocínio lógico, a organização de ideias, a identificação de padrões e a decomposição de problemas para criar soluções.",
     "O pensamento computacional é uma base para entender e criar tecnologia, e pode ser trabalhado de forma lúdica, com ou sem computador. Não há pré-requisitos gerais; a adequação segue a faixa etária e a atividade."
    ]
   },
   {
    "titulo": "O que a solução oferece",
    "lista": [
     "Jogos e desafios de lógica.",
     "Atividades sem computador e programação em blocos.",
     "Resolução de problemas em pequenos projetos.",
     "Estímulo à criatividade e à autonomia."
    ]
   },
   {
    "titulo": "Para quem é indicada",
    "texto": "Crianças e público infantojuvenil em fase de descoberta tecnológica."
   }
  ]
 },
 "robotica-educacional": {
  "nome": "Robótica Educacional",
  "segmento": "SENAI Descoberta",
  "faixa": "Infância e criatividade",
  "chamada": "Vivências de aprendizagem que aproximam crianças da tecnologia por meio da construção, experimentação e programação de soluções robóticas.",
  "secoes": [
   {
    "titulo": "Sobre a solução",
    "texto": [
     "A Robótica Educacional aproxima crianças da tecnologia por meio da construção, da experimentação e da programação de soluções robóticas.",
     "Ao montar e programar seus próprios projetos, elas aprendem conceitos de ciência, tecnologia e matemática na prática. Recursos e conhecimentos prévios são definidos conforme a atividade e a faixa etária."
    ]
   },
   {
    "titulo": "O que a solução oferece",
    "lista": [
     "Montagem de modelos e protótipos.",
     "Programação de movimentos e comportamentos.",
     "Desafios em equipe e pequenos projetos.",
     "Kits e materiais adequados a cada idade."
    ]
   },
   {
    "titulo": "Para quem é indicada",
    "texto": "Crianças e público infantojuvenil interessados em tecnologia e criação."
   }
  ]
 },
 "formacao-profissional-com-pratica": {
  "nome": "Formação profissional com prática",
  "segmento": "SENAI Jovem",
  "faixa": "Formação profissional",
  "chamada": "Formação que combina conhecimentos técnicos e atividades práticas, aproximando o processo de aprendizagem de situações e desafios do contexto profissional.",
  "secoes": [
   {
    "titulo": "Sobre a solução",
    "texto": [
     "Esta formação combina conhecimentos técnicos e atividades práticas, aproximando a aprendizagem de situações e desafios do contexto profissional.",
     "O estudante aprende fazendo, em laboratórios e oficinas, e desenvolve competências valorizadas pelo mercado. As condições de ingresso e as atividades práticas são definidas conforme a formação."
    ]
   },
   {
    "titulo": "O que a solução oferece",
    "lista": [
     "Aulas teóricas integradas à prática em laboratório.",
     "Desafios inspirados em situações reais de trabalho.",
     "Acompanhamento de instrutores experientes.",
     "Preparação para o ingresso no mundo do trabalho."
    ]
   },
   {
    "titulo": "Para quem é indicada",
    "texto": "Jovens que buscam preparação profissional com vivências práticas."
   }
  ]
 },
 "formacao-profissional-sem-pratica": {
  "nome": "Formação profissional sem prática",
  "segmento": "SENAI Jovem",
  "faixa": "Formação profissional",
  "chamada": "Formação com foco em conhecimentos, conceitos e fundamentos profissionais, organizada sem atividades práticas previstas na oferta.",
  "secoes": [
   {
    "titulo": "Sobre a solução",
    "texto": [
     "Esta formação tem foco em conhecimentos, conceitos e fundamentos profissionais, e é organizada sem atividades práticas previstas na oferta.",
     "Ela oferece uma base para quem está começando a se preparar para o mundo do trabalho e pode ser um primeiro passo para formações mais aprofundadas. As condições de ingresso são definidas conforme a formação."
    ]
   },
   {
    "titulo": "O que a solução oferece",
    "lista": [
     "Fundamentos e conceitos da área profissional.",
     "Conteúdo objetivo e organizado em etapas.",
     "Preparação inicial para o mundo do trabalho.",
     "Possibilidade de seguir para formações com prática."
    ]
   },
   {
    "titulo": "Para quem é indicada",
    "texto": "Jovens que desejam desenvolver conhecimentos e se preparar para o mundo do trabalho."
   }
  ]
 },
 "saga-senai": {
  "nome": "SAGA SENAI",
  "segmento": "SENAI Inova",
  "faixa": "Inovação e excelência",
  "chamada": "Experiência de inovação e desenvolvimento de soluções, conectando desafios, criatividade e aplicação de conhecimentos em contextos ligados à indústria.",
  "secoes": [
   {
    "titulo": "Sobre a solução",
    "texto": [
     "O SAGA SENAI é uma experiência de inovação e desenvolvimento de soluções que conecta desafios, criatividade e aplicação de conhecimentos em contextos ligados à indústria.",
     "Equipes trabalham para compreender problemas, propor ideias e construir soluções, desenvolvendo colaboração, pensamento crítico e visão de negócio. Orientações, etapas e critérios de participação seguem a edição e a proposta vigente."
    ]
   },
   {
    "titulo": "O que a solução oferece",
    "lista": [
     "Desafios reais ou inspirados na realidade da indústria.",
     "Trabalho em equipe com apoio de mentores.",
     "Desenvolvimento e apresentação de soluções.",
     "Vivência de inovação aplicada."
    ]
   },
   {
    "titulo": "Para quem é indicada",
    "texto": "Estudantes e equipes interessadas em inovação, tecnologia e resolução de desafios."
   }
  ]
 },
 "worldskills": {
  "nome": "WorldSkills",
  "segmento": "SENAI Inova",
  "faixa": "Inovação e excelência",
  "chamada": "Iniciativa de valorização da excelência em competências profissionais, com foco no desenvolvimento técnico e na demonstração de habilidades em padrões de referência.",
  "secoes": [
   {
    "titulo": "Sobre a solução",
    "texto": [
     "O WorldSkills é uma iniciativa de valorização da excelência em competências profissionais, com foco no desenvolvimento técnico e na demonstração de habilidades em padrões de referência.",
     "Os competidores se preparam para provas práticas em suas ocupações e desenvolvem desempenho, precisão e domínio técnico. Critérios de seleção, preparação e participação seguem a ocupação e as regras da competição."
    ]
   },
   {
    "titulo": "O que a solução oferece",
    "lista": [
     "Preparação técnica orientada por especialistas.",
     "Treinamento com base em padrões de referência da ocupação.",
     "Simulações das provas e das condições de competição.",
     "Desenvolvimento de disciplina, foco e excelência."
    ]
   },
   {
    "titulo": "Para quem é indicada",
    "texto": "Estudantes, competidores e profissionais envolvidos no desenvolvimento de competências técnicas."
   }
  ]
 }
};
