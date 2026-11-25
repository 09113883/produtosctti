/* CADASTRO DE CURSOS — página: curso.html?id=<chave>
   Para criar um curso novo: copie um bloco, troque a chave e edite os textos.
   A chave deve ser o nome do curso do index.html, em minúsculas, sem acentos e com hífen no lugar dos espaços
   (ex.: 'Banco de Dados SQL' -> 'banco-de-dados-sql'); assim o botão do index.html já abre esta página.
   Campos sem valor (ou removidos) simplesmente não aparecem na página.

   Campos: nome, categoria, area, situacao ('Em andamento' | 'Futuro' | 'Encerrado'), formato, formatoDetalhe, resumo,
           cargaHoraria, horarios, infraestrutura, preRequisitos, idadeMinima,
           turmas [{nome, inicio 'dd/mm/aaaa', termino, horarios, formato, situacao ('Inscrições abertas'|'Vagas limitadas'|'Em breve'|'Em andamento')}], investimento {valor, condicao}, sobre, desafio, conquistas [], metodologia,
           conteudo [{nome, descricao, horas}], publico, oportunidades [{titulo, texto}], certificado,
           perfil {interesses, objetivos, niveis} (usado pelo questionário descubra-seu-curso.html; ids em assets/orientacao.js),
           contato {titulo, texto, assunto, placeholder, botao} */
const CURSOS={
 "analise-de-dados-big-data-e-business-intelligence": {
  "nome": "Análise de Dados, Big Data e Business Intelligence",
  "categoria": "Ciência de Dados",
  "area": "Tecnologia da Informação",
  "situacao": "Futuro",
  "formato": "Híbrido",
  "resumo": "Explore formas de organizar, interpretar e transformar grandes volumes de dados em informações que apoiam decisões e estratégias de negócio.",
  "cargaHoraria": "120 horas",
  "horarios": "Segundas e quartas, das 19h às 22h30",
  "investimento": {
   "valor": "R$ 2.190,00",
   "condicao": "ou 10x de R$ 219,00"
  },
  "sobre": [
   "O curso apresenta o caminho completo da análise de dados: da coleta e do tratamento das informações ao uso de ferramentas de Big Data e de Business Intelligence para gerar painéis e relatórios que apoiam decisões.",
   "Com atividades práticas sobre dados reais, você aprende a fazer perguntas certas, organizar grandes volumes de informação e comunicar resultados com clareza para diferentes públicos."
  ],
  "desafio": "Empresas acumulam dados em grande volume, mas poucas conseguem transformá-los em decisões. O curso forma profissionais capazes de organizar, interpretar e apresentar informações de forma confiável.",
  "conquistas": [
   "Capacidade de tratar e analisar grandes volumes de dados.",
   "Domínio de ferramentas de visualização e Business Intelligence.",
   "Painéis e relatórios prontos para apresentar em processos seletivos.",
   "Visão analítica para apoiar decisões de negócio."
  ],
  "metodologia": "Aprendizagem baseada em casos reais, com exercícios guiados em cada módulo e um projeto final de análise aplicado a um problema de negócio.",
  "conteudo": [
   {
    "nome": "Fundamentos de dados e estatística aplicada",
    "descricao": "Tipos de dados, estatística descritiva e boas práticas de análise.",
    "horas": "16h"
   },
   {
    "nome": "Tratamento e preparação de dados",
    "descricao": "Coleta, limpeza e transformação de dados para análise.",
    "horas": "24h"
   },
   {
    "nome": "Big Data: conceitos e ferramentas",
    "descricao": "Arquiteturas, armazenamento e processamento de grandes volumes.",
    "horas": "24h"
   },
   {
    "nome": "Visualização com Business Intelligence",
    "descricao": "Construção de painéis, indicadores e relatórios interativos.",
    "horas": "32h"
   },
   {
    "nome": "Projeto de análise para decisão",
    "descricao": "Análise completa de um caso de negócio, da pergunta à apresentação.",
    "horas": "24h"
   }
  ],
  "publico": "Profissionais de tecnologia, administração, indústria e áreas de gestão que desejam trabalhar com dados, além de estudantes a partir do ensino médio concluído. Não é necessária experiência prévia em análise de dados.",
  "oportunidades": [
   {
    "titulo": "Analista de dados",
    "texto": "Coleta, análise e interpretação de dados em diferentes setores."
   },
   {
    "titulo": "Analista de Business Intelligence",
    "texto": "Criação de painéis e indicadores para áreas de negócio."
   },
   {
    "titulo": "Assistente em ciência de dados",
    "texto": "Apoio a times de dados em preparação e modelagem de informações."
   }
  ],
  "certificado": "Ao concluir o curso com frequência mínima de 75% e aproveitamento satisfatório, você recebe o certificado de qualificação profissional em Análise de Dados, Big Data e Business Intelligence, emitido pelo SENAI.",
  "contato": {
   "titulo": "Quer saber mais sobre o curso?",
   "texto": "Deixe seus dados e a nossa equipe retorna com informações sobre turmas, valores e matrícula.",
   "assunto": "Inscrição - Análise de Dados, Big Data e Business Intelligence",
   "placeholder": "Dúvidas sobre a turma, o investimento ou a matrícula",
   "botao": "Reservar minha vaga"
  },
  "turmas": [
   {
    "nome": "Turma 2027.1",
    "inicio": "01/03/2027",
    "termino": "02/07/2027",
    "horarios": "Segundas e quartas, das 19h às 22h30",
    "formato": "Híbrido",
    "situacao": "Inscrições abertas"
   },
   {
    "nome": "Turma 2027.2",
    "inicio": "03/05/2027",
    "termino": "27/08/2027",
    "horarios": "Segundas e quartas, das 19h às 22h30",
    "formato": "Híbrido",
    "situacao": "Vagas limitadas"
   },
   {
    "nome": "Turma 2027.3",
    "inicio": "02/08/2027",
    "termino": "26/11/2027",
    "horarios": "Segundas e quartas, das 19h às 22h30",
    "formato": "Híbrido",
    "situacao": "Em breve"
   }
  ],
  "infraestrutura": "Computador com acesso à internet",
  "preRequisitos": "Curso Técnico em andamento ou concluído",
  "idadeMinima": "14 anos",
  "perfil": {
   "interesses": [
    "dados",
    "ia"
   ],
   "objetivos": [
    "entrar",
    "mudar",
    "crescer"
   ],
   "niveis": [
    "iniciante",
    "intermediario"
   ]
  }
 },
 "automacao-inteligente-de-processos-com-ia": {
  "nome": "Automação Inteligente de Processos com IA",
  "categoria": "Desenvolvimento de Sistemas",
  "area": "Tecnologia da Informação",
  "situacao": "Em andamento",
  "formato": "Híbrido",
  "resumo": "Conheça aplicações de inteligência artificial para automatizar tarefas, integrar etapas de trabalho e tornar processos mais eficientes.",
  "cargaHoraria": "100 horas",
  "horarios": "Terças e quintas, das 19h às 22h",
  "investimento": {
   "valor": "R$ 1.980,00",
   "condicao": "ou 10x de R$ 198,00"
  },
  "sobre": [
   "O curso mostra como combinar automação de processos e inteligência artificial para eliminar tarefas repetitivas, integrar sistemas e tornar o trabalho mais eficiente.",
   "Você aprende a mapear processos, escolher o que automatizar e construir fluxos que usam IA para classificar informações, gerar conteúdos e apoiar decisões."
  ],
  "desafio": "Tarefas manuais e repetitivas consomem tempo e geram erros. O curso desenvolve a capacidade de identificar oportunidades de automação e implementá-las com segurança.",
  "conquistas": [
   "Habilidade para mapear e otimizar processos de trabalho.",
   "Criação de automações integradas a sistemas e serviços de IA.",
   "Uso responsável de IA generativa na rotina profissional.",
   "Um projeto de automação aplicável ao seu contexto de trabalho."
  ],
  "metodologia": "Prática orientada, com cada módulo resolvendo um problema real de processo, e acompanhamento do instrutor na construção do projeto final.",
  "conteudo": [
   {
    "nome": "Mapeamento e análise de processos",
    "descricao": "Levantamento, modelagem e identificação de oportunidades.",
    "horas": "16h"
   },
   {
    "nome": "Fundamentos de IA aplicada",
    "descricao": "Conceitos, possibilidades e limites da inteligência artificial.",
    "horas": "20h"
   },
   {
    "nome": "Automação com RPA e integrações",
    "descricao": "Fluxos automatizados, conectores e integração entre sistemas.",
    "horas": "28h"
   },
   {
    "nome": "IA generativa na rotina de trabalho",
    "descricao": "Uso de assistentes e modelos de linguagem em processos.",
    "horas": "20h"
   },
   {
    "nome": "Projeto de automação",
    "descricao": "Construção e apresentação de uma automação completa.",
    "horas": "16h"
   }
  ],
  "publico": "Profissionais administrativos, de operações, de tecnologia e de melhoria de processos que desejam automatizar atividades. Recomenda-se ensino médio concluído e familiaridade com ferramentas digitais.",
  "oportunidades": [
   {
    "titulo": "Analista de processos",
    "texto": "Mapeamento e melhoria contínua de processos."
   },
   {
    "titulo": "Especialista em automação",
    "texto": "Implantação de fluxos automatizados com IA."
   },
   {
    "titulo": "Consultor de transformação digital",
    "texto": "Apoio a empresas na adoção de automação e IA."
   }
  ],
  "certificado": "Ao concluir o curso com frequência mínima de 75% e aproveitamento satisfatório, você recebe o certificado de qualificação profissional em Automação Inteligente de Processos com IA, emitido pelo SENAI.",
  "contato": {
   "titulo": "Quer saber mais sobre o curso?",
   "texto": "Deixe seus dados e a nossa equipe retorna com informações sobre turmas, valores e matrícula.",
   "assunto": "Inscrição - Automação Inteligente de Processos com IA",
   "placeholder": "Dúvidas sobre a turma, o investimento ou a matrícula",
   "botao": "Quero me inscrever"
  },
  "turmas": [
   {
    "nome": "Turma atual",
    "inicio": "05/10/2026",
    "termino": "19/03/2027",
    "horarios": "Terças e quintas, das 19h às 22h",
    "formato": "Híbrido",
    "situacao": "Em andamento"
   },
   {
    "nome": "Turma 2027.1",
    "inicio": "02/02/2027",
    "termino": "29/05/2027",
    "horarios": "Terças e quintas, das 19h às 22h",
    "formato": "Híbrido",
    "situacao": "Inscrições abertas"
   },
   {
    "nome": "Turma 2027.2",
    "inicio": "04/05/2027",
    "termino": "28/08/2027",
    "horarios": "Terças e quintas, das 19h às 22h",
    "formato": "Híbrido",
    "situacao": "Em breve"
   }
  ],
  "infraestrutura": "Computador com acesso à internet",
  "preRequisitos": "Curso Técnico em andamento ou concluído",
  "idadeMinima": "14 anos",
  "perfil": {
   "interesses": [
    "ia",
    "dados"
   ],
   "objetivos": [
    "crescer",
    "mudar"
   ],
   "niveis": [
    "intermediario",
    "avancado"
   ]
  }
 },
 "banco-de-dados-sql": {
  "nome": "Banco de Dados SQL",
  "categoria": "Desenvolvimento de Sistemas",
  "area": "Tecnologia da Informação",
  "situacao": "Encerrado",
  "formato": "Presencial",
  "resumo": "Desenvolva conhecimentos para estruturar, consultar e gerenciar bancos de dados relacionais utilizando a linguagem SQL.",
  "cargaHoraria": "80 horas",
  "horarios": "Segundas e quartas, das 19h às 22h",
  "investimento": {
   "valor": "R$ 1.290,00",
   "condicao": "ou 6x de R$ 215,00"
  },
  "sobre": [
   "O curso desenvolve os conhecimentos para estruturar, consultar e gerenciar bancos de dados relacionais com a linguagem SQL, base de praticamente todos os sistemas de informação.",
   "Você parte da modelagem de dados, escreve consultas simples e avançadas e conhece rotinas de administração, segurança e desempenho."
  ],
  "desafio": "Quase todo sistema depende de dados bem organizados. O curso prepara profissionais para projetar bases consistentes e extrair informações com eficiência.",
  "conquistas": [
   "Domínio da linguagem SQL para consultar e manipular dados.",
   "Capacidade de modelar bancos de dados relacionais.",
   "Boas práticas de segurança, integridade e desempenho.",
   "Base sólida para atuar em desenvolvimento, dados e infraestrutura."
  ],
  "metodologia": "Aulas práticas em laboratório, com exercícios progressivos sobre bases de dados reais e revisão das consultas escritas pelos alunos.",
  "conteudo": [
   {
    "nome": "Modelagem de dados relacional",
    "descricao": "Entidades, relacionamentos, normalização e diagramas.",
    "horas": "16h"
   },
   {
    "nome": "SQL básico",
    "descricao": "Criação de tabelas, inserção, consulta, atualização e exclusão.",
    "horas": "24h"
   },
   {
    "nome": "Consultas avançadas",
    "descricao": "Junções, subconsultas, agregações e funções.",
    "horas": "20h"
   },
   {
    "nome": "Administração e boas práticas",
    "descricao": "Índices, segurança, backup e desempenho.",
    "horas": "20h"
   }
  ],
  "publico": "Estudantes e profissionais de tecnologia, dados e desenvolvimento, e interessados em ingressar na área. Não é necessária experiência prévia.",
  "oportunidades": [
   {
    "titulo": "Desenvolvedor de sistemas",
    "texto": "Integração de aplicações com bancos de dados."
   },
   {
    "titulo": "Analista de dados júnior",
    "texto": "Consulta e análise de informações para áreas de negócio."
   },
   {
    "titulo": "Assistente de administração de banco de dados",
    "texto": "Apoio na manutenção e organização de bases de dados."
   }
  ],
  "certificado": "Ao concluir o curso com frequência mínima de 75% e aproveitamento satisfatório, você recebe o certificado de qualificação profissional em Banco de Dados SQL, emitido pelo SENAI.",
  "contato": {
   "titulo": "Quer ser avisado sobre as próximas turmas?",
   "texto": "Esta turma foi encerrada. Deixe seus dados e avisaremos assim que uma nova turma for aberta.",
   "assunto": "Nova turma - Banco de Dados SQL",
   "placeholder": "Dúvidas sobre a turma, o investimento ou a matrícula",
   "botao": "Avisar-me sobre novas turmas"
  },
  "turmas": [
   {
    "nome": "Turma 2027.1",
    "inicio": "01/02/2027",
    "termino": "07/05/2027",
    "horarios": "Segundas e quartas, das 19h às 22h",
    "formato": "Presencial",
    "situacao": "Inscrições abertas"
   },
   {
    "nome": "Turma 2027.2",
    "inicio": "03/05/2027",
    "termino": "06/08/2027",
    "horarios": "Segundas e quartas, das 19h às 22h",
    "formato": "Presencial",
    "situacao": "Em breve"
   },
   {
    "nome": "Turma 2027.3",
    "inicio": "02/08/2027",
    "termino": "05/11/2027",
    "horarios": "Segundas e quartas, das 19h às 22h",
    "formato": "Presencial",
    "situacao": "Em breve"
   }
  ],
  "infraestrutura": "Computador com acesso à internet",
  "preRequisitos": "Curso Técnico em andamento ou concluído",
  "idadeMinima": "14 anos",
  "perfil": {
   "interesses": [
    "dados",
    "dev"
   ],
   "objetivos": [
    "entrar",
    "mudar",
    "crescer"
   ],
   "niveis": [
    "iniciante",
    "intermediario"
   ]
  }
 },
 "desenvolvimento-de-chatbots-e-assistentes-com-ia": {
  "nome": "Desenvolvimento de Chatbots e Assistentes com IA",
  "categoria": "Desenvolvimento de Sistemas",
  "area": "Tecnologia da Informação",
  "situacao": "Futuro",
  "formato": "Online ao vivo",
  "resumo": "Aprenda conceitos envolvidos na criação de chatbots e assistentes inteligentes para interação, atendimento e apoio a diferentes atividades.",
  "cargaHoraria": "90 horas",
  "horarios": "Terças e quintas, das 19h às 21h30",
  "investimento": {
   "valor": "R$ 1.790,00",
   "condicao": "ou 10x de R$ 179,00"
  },
  "sobre": [
   "O curso apresenta os conceitos e as ferramentas para criar chatbots e assistentes inteligentes capazes de conversar, atender e apoiar diferentes atividades.",
   "Você aprende a desenhar fluxos de conversa, integrar modelos de linguagem e conectar o assistente a canais e sistemas usados no dia a dia das empresas."
  ],
  "desafio": "O atendimento digital exige respostas rápidas e personalizadas. O curso capacita para criar assistentes que melhoram a experiência do usuário e reduzem o trabalho manual.",
  "conquistas": [
   "Criação de chatbots para atendimento, vendas e suporte interno.",
   "Integração de assistentes com APIs e canais de mensagem.",
   "Desenho de conversas claras e naturais.",
   "Portfólio com um assistente funcional."
  ],
  "metodologia": "Aulas ao vivo com demonstrações e laboratórios, em que cada aluno constrói e evolui seu próprio assistente ao longo do curso.",
  "conteudo": [
   {
    "nome": "Fundamentos de IA conversacional",
    "descricao": "Conceitos de linguagem natural, modelos e assistentes.",
    "horas": "16h"
   },
   {
    "nome": "Desenho de fluxos e experiência de conversa",
    "descricao": "Intenções, diálogos, tom de voz e jornada do usuário.",
    "horas": "20h"
   },
   {
    "nome": "Construção de chatbots",
    "descricao": "Implementação de assistentes em plataformas e com código.",
    "horas": "24h"
   },
   {
    "nome": "Integração com canais e APIs",
    "descricao": "Conexão com mensageiros, sistemas e bases de conhecimento.",
    "horas": "18h"
   },
   {
    "nome": "Projeto de assistente",
    "descricao": "Desenvolvimento e apresentação de um assistente completo.",
    "horas": "12h"
   }
  ],
  "publico": "Profissionais de tecnologia, atendimento, marketing e produtos digitais, e estudantes a partir do ensino médio concluído. Conhecimentos básicos de lógica ajudam, mas não são obrigatórios.",
  "oportunidades": [
   {
    "titulo": "Desenvolvedor de chatbots",
    "texto": "Criação e manutenção de assistentes conversacionais."
   },
   {
    "titulo": "Analista de experiência do cliente",
    "texto": "Melhoria do atendimento digital com automação."
   },
   {
    "titulo": "Especialista em soluções de IA",
    "texto": "Aplicação de IA em produtos e serviços."
   }
  ],
  "certificado": "Ao concluir o curso com frequência mínima de 75% e aproveitamento satisfatório, você recebe o certificado de qualificação profissional em Desenvolvimento de Chatbots e Assistentes com IA, emitido pelo SENAI.",
  "contato": {
   "titulo": "Quer saber mais sobre o curso?",
   "texto": "Deixe seus dados e a nossa equipe retorna com informações sobre turmas, valores e matrícula.",
   "assunto": "Inscrição - Desenvolvimento de Chatbots e Assistentes com IA",
   "placeholder": "Dúvidas sobre a turma, o investimento ou a matrícula",
   "botao": "Reservar minha vaga"
  },
  "turmas": [
   {
    "nome": "Turma 2027.1",
    "inicio": "08/03/2027",
    "termino": "25/06/2027",
    "horarios": "Terças e quintas, das 19h às 21h30",
    "formato": "Online ao vivo",
    "situacao": "Inscrições abertas"
   },
   {
    "nome": "Turma 2027.2",
    "inicio": "03/08/2027",
    "termino": "04/12/2027",
    "horarios": "Terças e quintas, das 19h às 21h30",
    "formato": "Online ao vivo",
    "situacao": "Vagas limitadas"
   }
  ],
  "infraestrutura": "Computador com acesso à internet",
  "preRequisitos": "Curso Técnico em andamento ou concluído",
  "idadeMinima": "14 anos",
  "perfil": {
   "interesses": [
    "ia",
    "dev"
   ],
   "objetivos": [
    "mudar",
    "crescer"
   ],
   "niveis": [
    "iniciante",
    "intermediario"
   ]
  }
 },
 "empreendedorismo-inovacao-e-novos-negocios": {
  "nome": "Empreendedorismo, Inovação e Novos Negócios",
  "categoria": "Empreendedorismo e Inovação",
  "area": "Tecnologia da Informação",
  "situacao": "Em andamento",
  "formato": "Presencial",
  "resumo": "Conheça fundamentos para identificar oportunidades, desenvolver ideias e estruturar iniciativas inovadoras e novos modelos de negócio.",
  "cargaHoraria": "60 horas",
  "horarios": "Segundas e quartas, das 18h30 às 21h30",
  "investimento": {
   "valor": "R$ 890,00",
   "condicao": "ou 5x de R$ 178,00"
  },
  "sobre": [
   "O curso apresenta os fundamentos para identificar oportunidades, desenvolver ideias e estruturar iniciativas inovadoras e novos modelos de negócio.",
   "Por meio de dinâmicas e de um projeto aplicado, você transforma uma ideia em um modelo de negócio validado e aprende a apresentá-lo de forma convincente."
  ],
  "desafio": "Muitas boas ideias não saem do papel por falta de método. O curso oferece ferramentas para validar, planejar e iniciar um negócio com mais segurança.",
  "conquistas": [
   "Método para validar ideias e reduzir riscos.",
   "Visão de modelagem de negócios, finanças e mercado.",
   "Habilidade de apresentar um pitch para investidores e parceiros.",
   "Rede de contatos com outros empreendedores."
  ],
  "metodologia": "Metodologia ativa, com oficinas, estudos de caso, mentoria e a construção de um plano de negócio ao longo do curso.",
  "conteudo": [
   {
    "nome": "Mentalidade empreendedora e inovação",
    "descricao": "Perfil empreendedor, criatividade e geração de ideias.",
    "horas": "12h"
   },
   {
    "nome": "Oportunidades e validação de mercado",
    "descricao": "Pesquisa, público-alvo e testes de hipóteses.",
    "horas": "16h"
   },
   {
    "nome": "Modelagem de negócios",
    "descricao": "Proposta de valor, canais, receitas e estrutura de custos.",
    "horas": "16h"
   },
   {
    "nome": "Finanças básicas e pitch",
    "descricao": "Viabilidade financeira e apresentação do negócio.",
    "horas": "16h"
   }
  ],
  "publico": "Pessoas que desejam abrir um negócio, profissionais que querem inovar dentro de empresas e estudantes interessados em empreender. Não há pré-requisitos específicos.",
  "oportunidades": [
   {
    "titulo": "Empreendedor",
    "texto": "Abertura e gestão de um novo negócio."
   },
   {
    "titulo": "Intraempreendedor",
    "texto": "Condução de projetos inovadores dentro de empresas."
   },
   {
    "titulo": "Analista de inovação",
    "texto": "Apoio a ações e programas de inovação."
   }
  ],
  "certificado": "Ao concluir o curso com frequência mínima de 75% e aproveitamento satisfatório, você recebe o certificado de qualificação profissional em Empreendedorismo, Inovação e Novos Negócios, emitido pelo SENAI.",
  "contato": {
   "titulo": "Quer saber mais sobre o curso?",
   "texto": "Deixe seus dados e a nossa equipe retorna com informações sobre turmas, valores e matrícula.",
   "assunto": "Inscrição - Empreendedorismo, Inovação e Novos Negócios",
   "placeholder": "Dúvidas sobre a turma, o investimento ou a matrícula",
   "botao": "Quero me inscrever"
  },
  "turmas": [
   {
    "nome": "Turma atual",
    "inicio": "19/10/2026",
    "termino": "18/12/2026",
    "horarios": "Segundas e quartas, das 18h30 às 21h30",
    "formato": "Presencial",
    "situacao": "Em andamento"
   },
   {
    "nome": "Turma 2027.1",
    "inicio": "01/02/2027",
    "termino": "09/04/2027",
    "horarios": "Segundas e quartas, das 18h30 às 21h30",
    "formato": "Presencial",
    "situacao": "Inscrições abertas"
   },
   {
    "nome": "Turma 2027.2",
    "inicio": "03/05/2027",
    "termino": "09/07/2027",
    "horarios": "Segundas e quartas, das 18h30 às 21h30",
    "formato": "Presencial",
    "situacao": "Em breve"
   }
  ],
  "infraestrutura": "Computador com acesso à internet",
  "preRequisitos": "Curso Técnico em andamento ou concluído",
  "idadeMinima": "14 anos",
  "perfil": {
   "interesses": [
    "negocios"
   ],
   "objetivos": [
    "empreender",
    "crescer",
    "entrar"
   ],
   "niveis": [
    "iniciante",
    "intermediario",
    "avancado"
   ]
  }
 },
 "full-stack-web": {
  "nome": "Full Stack Web",
  "categoria": "Desenvolvimento de Sistemas",
  "area": "Tecnologia da Informação",
  "situacao": "Em andamento",
  "formato": "Presencial",
  "formatoDetalhe": "Presencial, em laboratório",
  "resumo": "Do front-end ao back-end: aprenda a construir aplicações web completas e prepare-se para uma das áreas que mais contratam em tecnologia.",
  "cargaHoraria": "160 horas",
  "horarios": "Segundas, quartas e sextas, das 19h às 22h",
  "investimento": {
   "valor": "R$ 2.480,00",
   "condicao": "ou 10x de R$ 248,00"
  },
  "sobre": [
   "O curso Full Stack Web desenvolve as competências para projetar, programar e publicar aplicações web de ponta a ponta. Você aprende a construir interfaces modernas e responsivas e, ao mesmo tempo, a criar a lógica, os serviços e a base de dados que sustentam essas aplicações.",
   "A formação é conduzida por instrutores com experiência de mercado, em laboratórios equipados do SENAI, e termina com um projeto integrador que reúne tudo o que foi aprendido e passa a compor o seu portfólio profissional."
  ],
  "desafio": "As empresas buscam profissionais capazes de entregar soluções web completas, mas muitas pessoas conhecem apenas parte da cadeia de desenvolvimento. O curso preenche essa lacuna, integrando front-end, back-end e banco de dados em uma única jornada prática.",
  "conquistas": [
   "Domínio das tecnologias mais usadas no desenvolvimento web atual.",
   "Um projeto completo publicado, para apresentar em processos seletivos.",
   "Autonomia para criar aplicações do zero, da interface ao banco de dados.",
   "Vivência de trabalho em equipe com versionamento e boas práticas de mercado.",
   "Certificado SENAI, referência de qualidade reconhecida pela indústria."
  ],
  "metodologia": "Metodologia baseada em projetos e na prática orientada. Cada módulo combina explicações curtas com desafios reais resolvidos em laboratório, com acompanhamento individual do instrutor e revisão de código ao longo de todo o curso.",
  "conteudo": [
   {
    "nome": "Fundamentos de lógica e versionamento",
    "descricao": "Lógica de programação, terminal e controle de versão com Git e GitHub.",
    "horas": "16h"
   },
   {
    "nome": "HTML, CSS e design responsivo",
    "descricao": "Estrutura semântica, estilização moderna e interfaces adaptáveis a qualquer tela.",
    "horas": "20h"
   },
   {
    "nome": "JavaScript moderno",
    "descricao": "Linguagem, manipulação do DOM, consumo de APIs e boas práticas de código.",
    "horas": "28h"
   },
   {
    "nome": "Front-end com React",
    "descricao": "Componentes, estado, rotas e construção de interfaces dinâmicas.",
    "horas": "28h"
   },
   {
    "nome": "Back-end com Node.js e APIs REST",
    "descricao": "Servidores, rotas, autenticação e criação de serviços para as aplicações.",
    "horas": "28h"
   },
   {
    "nome": "Banco de dados e persistência",
    "descricao": "Modelagem, SQL e integração dos dados com a aplicação.",
    "horas": "20h"
   },
   {
    "nome": "Projeto integrador",
    "descricao": "Desenvolvimento de uma aplicação web completa, do planejamento à publicação.",
    "horas": "20h"
   }
  ],
  "publico": "Estudantes, profissionais em transição de carreira e pessoas que já atuam em tecnologia e querem ampliar suas habilidades. Recomenda-se ensino médio concluído ou em andamento e familiaridade básica com o uso de computadores. Não é necessário ter experiência prévia em programação.",
  "oportunidades": [
   {
    "titulo": "Desenvolvedor Full Stack",
    "texto": "Atuação em empresas de tecnologia, indústrias e startups, construindo aplicações completas."
   },
   {
    "titulo": "Desenvolvedor Front-end ou Back-end",
    "texto": "Especialização em uma das camadas, em equipes de produto e de transformação digital."
   },
   {
    "titulo": "Empreendedor digital",
    "texto": "Criação de soluções próprias, sites e plataformas para novos negócios."
   }
  ],
  "certificado": "Ao concluir o curso com frequência mínima de 75% e aproveitamento satisfatório, você recebe o Certificado de Qualificação Profissional em Full Stack Web, emitido pelo SENAI.",
  "contato": {
   "titulo": "Quer saber mais sobre o curso?",
   "texto": "Deixe seus dados e a nossa equipe retorna com informações sobre turmas, valores e matrícula.",
   "assunto": "Inscrição - Full Stack Web",
   "placeholder": "Dúvidas sobre a turma, o investimento ou a matrícula",
   "botao": "Quero me inscrever"
  },
  "turmas": [
   {
    "nome": "Turma atual",
    "inicio": "03/08/2026",
    "termino": "18/12/2026",
    "horarios": "Segundas, quartas e sextas, das 19h às 22h",
    "formato": "Presencial",
    "situacao": "Em andamento"
   },
   {
    "nome": "Turma 2027.1",
    "inicio": "01/02/2027",
    "termino": "18/06/2027",
    "horarios": "Segundas, quartas e sextas, das 19h às 22h",
    "formato": "Presencial",
    "situacao": "Inscrições abertas"
   },
   {
    "nome": "Turma 2027.2",
    "inicio": "03/05/2027",
    "termino": "17/09/2027",
    "horarios": "Segundas, quartas e sextas, das 19h às 22h",
    "formato": "Presencial",
    "situacao": "Em breve"
   }
  ],
  "infraestrutura": "Computador com acesso à internet",
  "preRequisitos": "Curso Técnico em andamento ou concluído",
  "idadeMinima": "14 anos",
  "perfil": {
   "interesses": [
    "dev"
   ],
   "objetivos": [
    "entrar",
    "mudar"
   ],
   "niveis": [
    "iniciante",
    "intermediario"
   ]
  }
 },
 "ia-aplicada-a-industria": {
  "nome": "IA Aplicada à Indústria",
  "categoria": "Empreendedorismo e Inovação",
  "area": "Tecnologia da Informação",
  "situacao": "Futuro",
  "formato": "Presencial",
  "resumo": "Conheça possibilidades de aplicação da inteligência artificial em ambientes industriais, apoiando análise, produtividade e melhoria de processos.",
  "cargaHoraria": "80 horas",
  "horarios": "Segundas e quartas, das 19h às 22h",
  "investimento": {
   "valor": "R$ 1.890,00",
   "condicao": "ou 10x de R$ 189,00"
  },
  "sobre": [
   "O curso apresenta aplicações da inteligência artificial em ambientes industriais, apoiando análise de dados, aumento de produtividade e melhoria de processos.",
   "Você conhece técnicas de aprendizado de máquina, visão computacional e manutenção preditiva, e aprende a avaliar onde a IA gera mais valor na operação."
  ],
  "desafio": "A indústria gera dados em grande escala, mas ainda os aproveita pouco. O curso prepara profissionais para transformar esses dados em ganhos de eficiência e qualidade.",
  "conquistas": [
   "Visão prática das aplicações de IA no chão de fábrica.",
   "Capacidade de identificar oportunidades de IA em processos industriais.",
   "Noções de aprendizado de máquina e visão computacional.",
   "Um projeto aplicado a um problema da indústria."
  ],
  "metodologia": "Estudos de caso de empresas industriais, atividades em laboratório com dados reais e projeto final orientado.",
  "conteudo": [
   {
    "nome": "Fundamentos de IA na indústria",
    "descricao": "Conceitos, panorama e casos de uso industriais.",
    "horas": "16h"
   },
   {
    "nome": "Dados industriais",
    "descricao": "Coleta, qualidade e preparação de dados de processo.",
    "horas": "16h"
   },
   {
    "nome": "Aprendizado de máquina aplicado",
    "descricao": "Modelos de previsão e classificação para a operação.",
    "horas": "24h"
   },
   {
    "nome": "Visão computacional e manutenção preditiva",
    "descricao": "Inspeção de qualidade e antecipação de falhas.",
    "horas": "24h"
   }
  ],
  "publico": "Profissionais da indústria, técnicos, engenheiros e analistas de tecnologia e processos. Recomenda-se conhecimento básico de informática.",
  "oportunidades": [
   {
    "titulo": "Analista de dados industriais",
    "texto": "Análise de dados de produção e qualidade."
   },
   {
    "titulo": "Técnico em manutenção preditiva",
    "texto": "Monitoramento e antecipação de falhas em equipamentos."
   },
   {
    "titulo": "Especialista em transformação digital industrial",
    "texto": "Condução de projetos de IA na fábrica."
   }
  ],
  "certificado": "Ao concluir o curso com frequência mínima de 75% e aproveitamento satisfatório, você recebe o certificado de qualificação profissional em IA Aplicada à Indústria, emitido pelo SENAI.",
  "contato": {
   "titulo": "Quer saber mais sobre o curso?",
   "texto": "Deixe seus dados e a nossa equipe retorna com informações sobre turmas, valores e matrícula.",
   "assunto": "Inscrição - IA Aplicada à Indústria",
   "placeholder": "Dúvidas sobre a turma, o investimento ou a matrícula",
   "botao": "Reservar minha vaga"
  },
  "turmas": [
   {
    "nome": "Turma 2027.1",
    "inicio": "15/03/2027",
    "termino": "25/06/2027",
    "horarios": "Segundas e quartas, das 19h às 22h",
    "formato": "Presencial",
    "situacao": "Inscrições abertas"
   },
   {
    "nome": "Turma 2027.2",
    "inicio": "02/08/2027",
    "termino": "05/11/2027",
    "horarios": "Segundas e quartas, das 19h às 22h",
    "formato": "Presencial",
    "situacao": "Vagas limitadas"
   }
  ],
  "infraestrutura": "Computador com acesso à internet",
  "preRequisitos": "Curso Técnico em andamento ou concluído",
  "idadeMinima": "14 anos",
  "perfil": {
   "interesses": [
    "industria",
    "ia"
   ],
   "objetivos": [
    "crescer",
    "mudar"
   ],
   "niveis": [
    "intermediario",
    "avancado"
   ]
  }
 },
 "qualificacao-em-animacao-3d": {
  "nome": "Qualificação em Animação 3D",
  "categoria": "Desenvolvimento de Sistemas",
  "area": "Tecnologia da Informação",
  "situacao": "Encerrado",
  "formato": "Presencial",
  "resumo": "Explore técnicas e ferramentas de criação de objetos, cenas e movimentos tridimensionais para diferentes aplicações digitais.",
  "cargaHoraria": "160 horas",
  "horarios": "Segundas, quartas e sextas, das 19h às 22h",
  "investimento": {
   "valor": "R$ 2.680,00",
   "condicao": "ou 10x de R$ 268,00"
  },
  "sobre": [
   "A qualificação apresenta técnicas e ferramentas de criação de objetos, cenas e movimentos tridimensionais para aplicações como audiovisual, jogos, publicidade e visualização de produtos.",
   "O percurso vai do roteiro visual à renderização final, com projetos práticos que compõem o portfólio do aluno."
  ],
  "desafio": "O mercado criativo e industrial demanda conteúdo 3D de qualidade. A qualificação forma profissionais que dominam todas as etapas da produção.",
  "conquistas": [
   "Domínio do fluxo completo de produção em 3D.",
   "Portfólio com cenas e animações finalizadas.",
   "Uso de ferramentas profissionais de modelagem e animação.",
   "Preparação para o mercado audiovisual, de jogos e de design."
  ],
  "metodologia": "Aulas práticas em laboratório de computação gráfica, com projetos curtos em cada etapa e revisão individual do trabalho.",
  "conteudo": [
   {
    "nome": "Fundamentos da animação e storyboard",
    "descricao": "Princípios de animação, narrativa e planejamento visual.",
    "horas": "20h"
   },
   {
    "nome": "Modelagem 3D",
    "descricao": "Criação de personagens, objetos e cenários.",
    "horas": "40h"
   },
   {
    "nome": "Texturização e iluminação",
    "descricao": "Materiais, texturas e composição de luz.",
    "horas": "32h"
   },
   {
    "nome": "Animação e rigging",
    "descricao": "Esqueletos, controles e movimentação de personagens.",
    "horas": "40h"
   },
   {
    "nome": "Renderização e finalização",
    "descricao": "Renderização, composição e entrega do projeto.",
    "horas": "28h"
   }
  ],
  "publico": "Pessoas interessadas em design, audiovisual e jogos e profissionais que desejam migrar para o 3D. Não é necessário conhecimento prévio em modelagem.",
  "oportunidades": [
   {
    "titulo": "Animador 3D",
    "texto": "Criação de movimento para vídeos, jogos e publicidade."
   },
   {
    "titulo": "Modelador 3D",
    "texto": "Construção de personagens, objetos e cenários."
   },
   {
    "titulo": "Artista de visualização",
    "texto": "Produção de imagens e vídeos 3D para produtos e projetos."
   }
  ],
  "certificado": "Ao concluir o curso com frequência mínima de 75% e aproveitamento satisfatório, você recebe o certificado de qualificação profissional em Qualificação em Animação 3D, emitido pelo SENAI.",
  "contato": {
   "titulo": "Quer ser avisado sobre as próximas turmas?",
   "texto": "Esta turma foi encerrada. Deixe seus dados e avisaremos assim que uma nova turma for aberta.",
   "assunto": "Nova turma - Qualificação em Animação 3D",
   "placeholder": "Dúvidas sobre a turma, o investimento ou a matrícula",
   "botao": "Avisar-me sobre novas turmas"
  },
  "turmas": [
   {
    "nome": "Turma 2027.1",
    "inicio": "01/02/2027",
    "termino": "04/06/2027",
    "horarios": "Segundas, quartas e sextas, das 19h às 22h",
    "formato": "Presencial",
    "situacao": "Inscrições abertas"
   },
   {
    "nome": "Turma 2027.2",
    "inicio": "03/05/2027",
    "termino": "03/09/2027",
    "horarios": "Segundas, quartas e sextas, das 19h às 22h",
    "formato": "Presencial",
    "situacao": "Em breve"
   },
   {
    "nome": "Turma 2027.3",
    "inicio": "02/08/2027",
    "termino": "03/12/2027",
    "horarios": "Segundas, quartas e sextas, das 19h às 22h",
    "formato": "Presencial",
    "situacao": "Em breve"
   }
  ],
  "infraestrutura": "Computador com acesso à internet",
  "preRequisitos": "Curso Técnico em andamento ou concluído",
  "idadeMinima": "14 anos",
  "perfil": {
   "interesses": [
    "criativo"
   ],
   "objetivos": [
    "entrar",
    "mudar"
   ],
   "niveis": [
    "iniciante",
    "intermediario"
   ]
  }
 },
 "qualificacao-profissional-em-python-para-ciberseguranca-e-redes": {
  "nome": "Qualificação profissional em Python para Cibersegurança e Redes",
  "categoria": "Redes de Computadores",
  "area": "Tecnologia da Informação",
  "situacao": "Futuro",
  "formato": "Híbrido",
  "resumo": "Utilize a linguagem Python como apoio à automação de tarefas, análise de informações e atividades relacionadas a redes e cibersegurança.",
  "cargaHoraria": "120 horas",
  "horarios": "Terças e quintas, das 19h às 22h30",
  "investimento": {
   "valor": "R$ 2.240,00",
   "condicao": "ou 10x de R$ 224,00"
  },
  "sobre": [
   "A qualificação usa a linguagem Python como apoio à automação de tarefas, à análise de informações e às atividades de redes e cibersegurança.",
   "Você aprende a escrever scripts que configuram equipamentos, monitoram a rede, analisam logs e apoiam a identificação de ameaças."
  ],
  "desafio": "Administrar redes seguras exige agilidade e padronização. A qualificação capacita para automatizar rotinas e analisar eventos de segurança com programação.",
  "conquistas": [
   "Automação de tarefas repetitivas de redes com Python.",
   "Análise de logs e de tráfego para detectar anomalias.",
   "Base de programação aplicada à segurança da informação.",
   "Preparação para funções de infraestrutura e segurança."
  ],
  "metodologia": "Laboratórios práticos com redes simuladas e desafios de segurança, nos quais cada aluno desenvolve scripts utilizados no dia a dia da área.",
  "conteudo": [
   {
    "nome": "Python essencial",
    "descricao": "Sintaxe, estruturas de dados, funções e bibliotecas.",
    "horas": "24h"
   },
   {
    "nome": "Redes e protocolos",
    "descricao": "Modelo de camadas, endereçamento e serviços de rede.",
    "horas": "24h"
   },
   {
    "nome": "Automação de tarefas de rede",
    "descricao": "Scripts para configuração e monitoramento de equipamentos.",
    "horas": "28h"
   },
   {
    "nome": "Análise de tráfego e logs",
    "descricao": "Coleta, filtragem e interpretação de eventos.",
    "horas": "24h"
   },
   {
    "nome": "Fundamentos de cibersegurança com Python",
    "descricao": "Boas práticas e ferramentas de verificação e defesa.",
    "horas": "20h"
   }
  ],
  "publico": "Estudantes e profissionais de tecnologia, redes e suporte. Recomenda-se conhecimento básico de informática e noções de redes; programação prévia não é obrigatória.",
  "oportunidades": [
   {
    "titulo": "Analista de redes",
    "texto": "Administração e automação de ambientes de rede."
   },
   {
    "titulo": "Analista de segurança júnior",
    "texto": "Monitoramento e resposta a incidentes."
   },
   {
    "titulo": "Desenvolvedor de automações",
    "texto": "Criação de scripts para infraestrutura e segurança."
   }
  ],
  "certificado": "Ao concluir o curso com frequência mínima de 75% e aproveitamento satisfatório, você recebe o certificado de qualificação profissional em Qualificação profissional em Python para Cibersegurança e Redes, emitido pelo SENAI.",
  "contato": {
   "titulo": "Quer saber mais sobre o curso?",
   "texto": "Deixe seus dados e a nossa equipe retorna com informações sobre turmas, valores e matrícula.",
   "assunto": "Inscrição - Qualificação profissional em Python para Cibersegurança e Redes",
   "placeholder": "Dúvidas sobre a turma, o investimento ou a matrícula",
   "botao": "Reservar minha vaga"
  },
  "turmas": [
   {
    "nome": "Turma 2027.1",
    "inicio": "08/03/2027",
    "termino": "30/07/2027",
    "horarios": "Terças e quintas, das 19h às 22h30",
    "formato": "Híbrido",
    "situacao": "Inscrições abertas"
   },
   {
    "nome": "Turma 2027.2",
    "inicio": "03/08/2027",
    "termino": "27/11/2027",
    "horarios": "Terças e quintas, das 19h às 22h30",
    "formato": "Híbrido",
    "situacao": "Vagas limitadas"
   }
  ],
  "infraestrutura": "Computador com acesso à internet",
  "preRequisitos": "Curso Técnico em andamento ou concluído",
  "idadeMinima": "14 anos",
  "perfil": {
   "interesses": [
    "redes",
    "dev"
   ],
   "objetivos": [
    "crescer",
    "mudar",
    "entrar"
   ],
   "niveis": [
    "iniciante",
    "intermediario"
   ]
  }
 },
 "qualificacao-profissional-em-software-livre-para-redes-e-ciberseguranca": {
  "nome": "Qualificação profissional em software Livre para redes e Cibersegurança",
  "categoria": "Redes de Computadores",
  "area": "Tecnologia da Informação",
  "situacao": "Encerrado",
  "formato": "Presencial",
  "resumo": "Conheça ferramentas de software livre aplicadas à configuração, administração, monitoramento e proteção de redes.",
  "cargaHoraria": "120 horas",
  "horarios": "Terças e quintas, das 19h às 22h30",
  "investimento": {
   "valor": "R$ 2.190,00",
   "condicao": "ou 10x de R$ 219,00"
  },
  "sobre": [
   "A qualificação apresenta ferramentas de software livre aplicadas à configuração, à administração, ao monitoramento e à proteção de redes.",
   "Você trabalha com sistemas Linux, serviços de rede, firewall e monitoramento, desenvolvendo autonomia para montar e proteger ambientes com soluções abertas."
  ],
  "desafio": "Soluções abertas reduzem custos e dão flexibilidade, mas exigem conhecimento técnico. A qualificação prepara profissionais para implantá-las e mantê-las com segurança.",
  "conquistas": [
   "Administração de servidores e serviços de rede em Linux.",
   "Configuração de firewall e boas práticas de segurança.",
   "Monitoramento de ambientes com ferramentas abertas.",
   "Redução de custos com soluções livres."
  ],
  "metodologia": "Aprendizagem prática em laboratório, com montagem de uma infraestrutura de rede completa ao longo do curso.",
  "conteudo": [
   {
    "nome": "Linux e administração de sistemas",
    "descricao": "Instalação, usuários, permissões e processos.",
    "horas": "28h"
   },
   {
    "nome": "Serviços de rede",
    "descricao": "DNS, DHCP, servidores web e compartilhamento.",
    "horas": "28h"
   },
   {
    "nome": "Monitoramento de redes",
    "descricao": "Coleta de métricas, alertas e análise de desempenho.",
    "horas": "24h"
   },
   {
    "nome": "Firewall e segurança",
    "descricao": "Regras de proteção, VPN e endurecimento de sistemas.",
    "horas": "28h"
   },
   {
    "nome": "Projeto de infraestrutura segura",
    "descricao": "Implantação de uma rede completa com software livre.",
    "horas": "12h"
   }
  ],
  "publico": "Estudantes e profissionais de tecnologia, suporte e redes. Recomenda-se conhecimento básico de informática.",
  "oportunidades": [
   {
    "titulo": "Administrador de redes",
    "texto": "Gestão de servidores e serviços de rede."
   },
   {
    "titulo": "Analista de infraestrutura",
    "texto": "Implantação e manutenção de ambientes com software livre."
   },
   {
    "titulo": "Analista de segurança",
    "texto": "Proteção de redes e monitoramento de ameaças."
   }
  ],
  "certificado": "Ao concluir o curso com frequência mínima de 75% e aproveitamento satisfatório, você recebe o certificado de qualificação profissional em Qualificação profissional em software Livre para redes e Cibersegurança, emitido pelo SENAI.",
  "contato": {
   "titulo": "Quer ser avisado sobre as próximas turmas?",
   "texto": "Esta turma foi encerrada. Deixe seus dados e avisaremos assim que uma nova turma for aberta.",
   "assunto": "Nova turma - Qualificação profissional em software Livre para redes e Cibersegurança",
   "placeholder": "Dúvidas sobre a turma, o investimento ou a matrícula",
   "botao": "Avisar-me sobre novas turmas"
  },
  "turmas": [
   {
    "nome": "Turma 2027.1",
    "inicio": "02/02/2027",
    "termino": "29/05/2027",
    "horarios": "Terças e quintas, das 19h às 22h30",
    "formato": "Presencial",
    "situacao": "Inscrições abertas"
   },
   {
    "nome": "Turma 2027.2",
    "inicio": "04/05/2027",
    "termino": "28/08/2027",
    "horarios": "Terças e quintas, das 19h às 22h30",
    "formato": "Presencial",
    "situacao": "Em breve"
   },
   {
    "nome": "Turma 2027.3",
    "inicio": "03/08/2027",
    "termino": "27/11/2027",
    "horarios": "Terças e quintas, das 19h às 22h30",
    "formato": "Presencial",
    "situacao": "Em breve"
   }
  ],
  "infraestrutura": "Computador com acesso à internet",
  "preRequisitos": "Curso Técnico em andamento ou concluído",
  "idadeMinima": "14 anos",
  "perfil": {
   "interesses": [
    "redes"
   ],
   "objetivos": [
    "entrar",
    "crescer"
   ],
   "niveis": [
    "iniciante",
    "intermediario"
   ]
  }
 }
};
