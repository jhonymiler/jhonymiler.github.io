const Resumo = [
  {
    id: 'resumo',
    section: 'resume-section',
    section_title: {
      title: 'Meu Resumo',
      subtitle: '14+ De Experiência'
    }
  },
  {
    id: 'default-home-experience',
    section: 'experience-section',
    title: 'Algumas Experiências',
    inner: [
      {
        id: 'default-home-experience-left',
        section_title: {
          title: '',
          subtitle: ''
        },
        items: [
          {
            id: 1,
            title: 'Desenvolvedor Full Stack Sênior',
            subtitle: 'Gran Cursos Online',
            rating: '2024',
            description:
              'Desenvolvimento de sistemas ERP robustos para uma das maiores EdTechs da América Latina. Implementação de soluções baseadas em <span class="color-neon">Inteligência Artificial</span> e automação. Trabalho com <span class="color-neon">PHP (Laravel)</span>, <span class="color-neon">Python</span> e tecnologias modernas para suportar mais de 500 mil alunos ativos.'
          },
          {
            id: 2,
            title: 'Desenvolvedor Full Stack',
            subtitle: 'Sigma Dataserv',
            rating: '2023-2024',
            description:
              'Desenvolvimento de aplicações web e soluções tecnológicas especializadas. Implementação de sistemas utilizando <span class="color-neon">PHP</span>, <span class="color-neon">Python</span> e frameworks modernos. Foco em automação e integração de sistemas.'
          },
          {
            id: 3,
            title: 'Consultor de TI',
            subtitle: 'Office Web',
            rating: '2023',
            description:
              'Consultoria em desenvolvimento web e soluções tecnológicas. Implementação de projetos utilizando <span class="color-neon">Laravel</span>, <span class="color-neon">React</span> e <span class="color-neon">Node.js</span>. Foco em arquitetura de software e melhores práticas de desenvolvimento.'
          },
          {
            id: 4,
            title: 'Governo Federal',
            subtitle: 'Ministério do Desenvolvimento',
            rating: '2022',
            description:
              'Criação de funcionalidades e manutenção nos sistemas do MDR como  <a href="https://apps.mdr.gov.br/selesan/web/index.php" target="_blank">SELESAN</a> ,' +
              '<a href="https://apps.mdr.gov.br/selemob/app/web/index.php" target="_blank">SELEMOB</a> ' +
              ' e <a href="http://antigo.snis.gov.br/o-que-e?view=category&id=70" target="_blank">SINISA</a> em <span class="color-neon">PHP</span> com implementações do ' +
              '<a href="https://www.gov.br/pt-br" target="_blank">GOV.br</a>.'
          },
          {
            id: 5,
            title: 'Gestor de Documentos Fiscais',
            subtitle: 'GRUPO ARO DE CONTABILIDADE',
            rating: '2022',
            description:
              'Contrução de um sistema semelhante ao site <a href="https://arquivei.com.br" target="_blank">arquivei.com.br</a> ao <a href="https://sieg.com" target="_blank">SIEG.com</a> para baixar e gerenciar documentos fiscais. Criamos o sistema em <span class="color-neon">Laravel</span> utilizando os melhores recursos e patterns disponíveis da ferramenta como por exemplo, Observers, Task Scheduling, Queues e etc. Utilizamos banco de dados <span class="color-neon">Postgres</span> e serviços de background em <span class="color-neon">Python</span>. '
          },
          {
            id: 6,
            title: 'Entrega Continua',
            subtitle: 'ACX EXPERIENCE',
            rating: '2022',
            description:
              'Em todos estes projetos, criei toda a integração via GitHub e posteriormente em Bitbucket. Os pipelines para deploy e envio para a produção no servidor, bem como a integração das tarefas do Jira com o VSCode da equipe para que ao terminar uma tarefa a mesma fosse imediatamente apontada na plataforma Jira.'
          },
          {
            id: 7,
            title: 'Baixa de CF-e`s',
            subtitle: 'ACX EXPERIENCE',
            rating: '2022',
            description:
              'Criação de automação em <span class="color-neon">Python</span> para recuperar 4 Milhões de arquivos SAT para uma rede de supermercados. O sistema é um projeto pessoal cujo serviço pode ser solicitado diretamente a mim caso precise recuperar arquivos fiscais perdidos.'
          }
        ]
      },
      {
        id: 'default-home-section-right',
        section_title: {
          title: '',
          subtitle: ''
        },
        items: [
          {
            id: 1,
            title: 'Projeto ERP Web',
            subtitle: 'GRUPO ARO DE CONTABILIDADE',
            rating: '2021',
            description:
              'Conversão de sistema legado de ERP em Dephi pra backend C# e frontend <span class="color-neon">ReactJs</span>. Criei a estrutura de layout e preparação da base do React para início dos trabalhos. Trabalhei no front usando <span class="color-neon">React Query</span> para consumo de API REST.'
          },
          {
            id: 2,
            title: 'Projeto HelpDesk',
            subtitle: 'GRUPO ARO DE CONTABILIDADE',
            rating: '2021',
            description:
              'Criei um sistema de Ticket em <span class="color-neon">PHP</span> e <span class="color-neon">MySql</span>, com chat em <span class="color-neon">NodeJs</span> operando via WebSocket para atender demanda interna da empresa. Para isso criei também toda a estrutura de servidor Linux e a integração constínua via Pipeline entre GitHub e sincronização SSH com deploy para o servidor.'
          },
          {
            id: 3,
            title: 'Projeto Dashboard',
            subtitle: 'ACX EXPERIENCE',
            rating: '2021',
            description:
              'Criei uma integração com o ERP de Gestão Industrial da empresa para exibir gráficos analíticos diversos e dinâmicos. Para isso foi usado <span class="color-neon">PHP</span> e <span class="color-neon">JQuery</span> com cadastro de consultas <span class="color-neon">SQL Server</span> para que o consultor pudesse criar suas prórpias consultas e que os gráficos fossem montados dinamicamente.'
          }
        ]
      }
    ]
  },
  {
    id: 'default-home-ai-projects',
    section: 'ai-projects-section',
    title: 'Projetos de IA',
    inner: [
      {
        id: 'ai-projects-left',
        section_title: {
          title: 'Inteligência Artificial',
          subtitle: 'Projetos Inovadores'
        },
        items: [
          {
            id: 1,
            title: 'PII-Tokenizer-To-AI',
            subtitle: 'Tokenização de Dados Sensíveis',
            rating: '2024',
            description:
              'Sistema de tokenização para proteger informações pessoais identificáveis (PII) em aplicações de IA. Implementado em <span class="color-neon">Python</span> com técnicas avançadas de criptografia e mascaramento de dados.',
            tech: ['Python', 'Cryptography', 'NLP', 'Data Privacy']
          },
          {
            id: 2,
            title: 'SCORENEWS-IA',
            subtitle: 'Análise de Sentimentos em Notícias',
            rating: '2024',
            description:
              'Sistema de análise de sentimentos e classificação de notícias usando IA. Processa grandes volumes de texto para extrair insights e scores de relevância. Utiliza <span class="color-neon">Machine Learning</span> e <span class="color-neon">NLP</span>.',
            tech: ['Python', 'TensorFlow', 'NLTK', 'Sentiment Analysis']
          },
          {
            id: 3,
            title: 'IA dos Impostos',
            subtitle: 'Automação Fiscal Inteligente',
            rating: '2024',
            description:
              'Sistema de automação para cálculos fiscais e tributários usando IA. Identifica padrões em documentos fiscais e automatiza processos complexos de compliance. Integração com APIs governamentais.',
            tech: ['Python', 'OCR', 'Machine Learning', 'APIs Gov']
          }
        ]
      },
      {
        id: 'ai-projects-right',
        section_title: {
          title: 'Blockchain & Automação',
          subtitle: 'Tecnologias Emergentes'
        },
        items: [
          {
            id: 1,
            title: 'Bitcoin-PrivateKey-Hunter',
            subtitle: 'Análise de Carteiras Bitcoin',
            rating: '2024',
            description:
              'Ferramenta para análise e auditoria de carteiras Bitcoin. Implementa algoritmos de busca e validação de chaves privadas para fins educacionais e de pesquisa em segurança blockchain.',
            tech: ['Python', 'Bitcoin', 'Cryptography', 'Blockchain']
          },
          {
            id: 2,
            title: 'Puzzle BTC 2.0',
            subtitle: 'Desafios Criptográficos',
            rating: '2024',
            description:
              'Sistema para resolver puzzles criptográficos do Bitcoin. Utiliza computação paralela e algoritmos otimizados para análise de padrões em chaves criptográficas.',
            tech: ['Python', 'Parallel Computing', 'Cryptanalysis']
          },
          {
            id: 3,
            title: 'Bitbucket MCP Cloud',
            subtitle: 'Integração CI/CD Inteligente',
            rating: '2024',
            description:
              'Sistema de integração contínua com IA para otimização de pipelines. Automatiza deploys e monitora performance usando <span class="color-neon">Machine Learning</span> para predição de falhas.',
            tech: ['Python', 'Docker', 'Kubernetes', 'MLOps']
          }
        ]
      }
    ]
  },
  {
    id: 'default-home-skill',
    section: 'skill-section',
    title: 'Skills Mais Relevantes',
    inner: [
      {
        id: 'default-home-skill-left',
        section_title: {
          title: 'Experiência',
          subtitle: ''
        },
        items: [
          {
            id: 16,
            images: {
              src: '/imgs/python.png',
              title: 'Machine Learning'
            },
            title: 'Machine Learning',
            path: '#'
          },
          {
            id: 17,
            images: {
              src: '/imgs/python.png',
              title: 'Deep Learning'
            },
            title: 'Deep Learning',
            path: '#'
          },
          {
            id: 18,
            images: {
              src: '/imgs/python.png',
              title: 'NLP'
            },
            title: 'NLP & Text Mining',
            path: '#'
          },
          {
            id: 1,
            images: {
              src: '/imgs/php.png',
              title: 'PHP'
            },
            title: 'PHP 5.6, 7.x ou 8.x',
            path: '#'
          },
          {
            id: 9,
            images: {
              src: '/imgs/laravel.png',
              title: 'Laravel'
            },
            title: 'Laravel',
            path: '#'
          },
          {
            id: 5,
            images: {
              src: '/imgs/python.png',
              title: 'Python'
            },
            title: 'Python',
            path: '#'
          },
          {
            id: 2,
            images: {
              src: '/imgs/react.png',
              title: 'ReactJS'
            },
            title: 'ReactJS',
            path: '#'
          },
          {
            id: 3,
            images: {
              src: '/imgs/vuejs.png',
              title: 'VUEJS'
            },
            title: 'VUEJS',
            path: '#'
          },
          {
            id: 4,
            images: {
              src: '/imgs/nextjs.png',
              title: 'Next.Js'
            },
            title: 'Next.Js',
            path: '#'
          },

          {
            id: 11,
            images: {
              src: '/imgs/nodejs.png',
              title: 'NodeJS'
            },
            title: 'NodeJS',
            path: '#'
          },
          {
            id: 10,
            images: {
              src: '/imgs/adonisjs.png',
              title: 'Adonis'
            },
            title: 'Adonis',
            path: '#'
          },
          {
            id: 6,
            images: {
              src: '/imgs/javascript.png',
              title: 'JavaScript'
            },
            title: 'JavaScript',
            path: '#'
          },
          {
            id: 13,
            images: {
              src: '/imgs/web3.png',
              title: 'WEB 3'
            },
            title: 'WEB 3',
            path: '#'
          },
          {
            id: 14,
            images: {
              src: '/imgs/solidity.png',
              title: 'Solidity'
            },
            title: 'Smart Contracts',
            path: '#'
          },
          {
            id: 15,
            images: {
              src: '/imgs/ethereum.png',
              title: 'Ethereum'
            },
            title: 'Blockchain ETH',
            path: '#'
          },

          {
            id: 7,
            images: {
              src: '/imgs/html.png',
              title: 'HTML 5'
            },
            title: 'HTML 5',
            path: '#'
          },
          {
            id: 8,
            images: {
              src: '/imgs/css.png',
              title: 'CSS 3'
            },
            title: 'CSS 3',
            path: '#'
          },
          {
            id: 12,
            images: {
              src: '/imgs/sass.png',
              title: '.SASS'
            },
            title: '.SASS',
            path: '#'
          }
        ]
      },
      {
        id: 'default-home-skill-right',
        section_title: {
          title: 'Banco de Dados',
          subtitle: ''
        },
        items: [
          {
            id: 1,
            images: {
              src: '/imgs/mysql.png',
              title: 'MySql'
            },
            title: 'MySql',
            path: '#'
          },
          {
            id: 2,
            images: {
              src: '/imgs/postgres.png',
              title: 'PostGres'
            },
            title: 'PostGres',
            path: '#'
          },
          {
            id: 3,
            images: {
              src: '/imgs/sqlserver.png',
              title: 'SQL Server'
            },
            title: 'SQL Server',
            path: '#'
          },
          {
            id: 4,
            images: {
              src: '/imgs/mongodb.png',
              title: 'Mongo DB'
            },
            title: 'Mongo DB',
            path: '#'
          },
          {
            id: 5,
            images: {
              src: '/imgs/redis.png',
              title: 'Redis'
            },
            title: 'Redis',
            path: '#'
          }
        ]
      }
    ]
  },
  {
    id: 'default-home-interview',
    section: 'interview-section',
    title: 'Outras Experiências',
    inner: [
      {
        id: 'default-home-experience-left',
        section_title: {
          title: 'Experiências',
          subtitle: '2008 - 2022'
        },
        items: [
          {
            id: 1,
            title: 'Code Review AI',
            subtitle: 'Automação de Revisão de Código',
            rating: '2024',
            description: 'Sistema de revisão automática de código usando IA. Analisa qualidade, identifica vulnerabilidades e sugere melhorias. Integração com <span class="color-neon">GitHub</span> e <span class="color-neon">GitLab</span>.'
          },
          {
            id: 2,
            title: 'GPT-4 API Integration',
            subtitle: 'Chatbots Inteligentes',
            rating: '2024',
            description: 'Desenvolvimento de chatbots avançados usando <span class="color-neon">GPT-4</span> e <span class="color-neon">OpenAI API</span>. Implementação de assistentes virtuais para atendimento automatizado e suporte técnico.'
          },
          {
            id: 3,
            title: 'Processamento de Documentos IA',
            subtitle: 'OCR e Análise Inteligente',
            rating: '2024',
            description: 'Sistema de processamento automático de documentos usando <span class="color-neon">OCR</span> e <span class="color-neon">Machine Learning</span>. Extração e classificação de dados de formulários e contratos.'
          },
          {
            id: 4,
            title: 'Rancher e Kubernete',
            subtitle: 'Full Cycle',
            rating: '',
            description: 'Criação de esteiras de produção para o <span class="color-neon">Ministério do Desenvolvimento</span> ' + 'utilizando técnicas DevOps com Kubernete'
          },
          {
            id: 5,
            title: 'Desafio SigmaGeek',
            subtitle: '',
            rating: '',
            description:
              'Participação do Desafio da <span class="color-neon">SigmaGeek</span> para encontrar os números palindrômicos primos da extenção de casas decimais do número PI. Realizei o teste em python processando 6,6 Bilhões de números por minuto. O algorítimo se encontra no <a href="https://github.com/jhonymiler/Prime-Palindromic-by-Pi">GitHub</a>'
          },

          {
            id: 6,
            title: 'Repositórios e Versionamento',
            subtitle: '',
            rating: '',
            description:
              'Utilização das plataformas de repositório como Bitbucket e GitHub, criação de pipelines <span class="color-neon">CI/CD</span> para entrega contínua e utilização do conceito Git Flow como metodo de versionamento.'
          },

          {
            id: 7,
            title: 'Metodologias Aágeis',
            subtitle: '',
            rating: '',
            description:
              'Criação de automações na plataforma <span class="color-neon">Jira</span> para gerenciar as tarefas e integração com as ferramentas de trabalho da equipe como VSCode e repositórios como <span class="color-neon">BitBucket</span> e <span class="color-neon">GitHub</span>. <br> Trabalhos realizados com metedologia <span class="color-neon">Scrum</span> e <span class="color-neon">Git Flow</span> como gerenciamento de Branches'
          },
          {
            id: 8,
            title: 'Montagem de Servidor Linux',
            subtitle: '',
            rating: '',
            description: 'Criação e preparo de servidor Linux para serviço dedicado em AWS ou Local. Usando Ubuntu Focal ou CentOS, preparo para APACHE, FTP ou SSH para hospedagem de aplicações web.'
          }
        ]
      },
      {
        id: 'default-home-section-right',
        section_title: {
          title: 'Familiaridade',
          subtitle: '2008 - 2022'
        },
        items: [
          {
            id: 1,
            title: 'Automação com IA',
            subtitle: 'Agentes Inteligentes',
            rating: '',
            description:
              'Desenvolvimento de agentes de IA para automação de processos complexos. Utilização de <span class="color-neon">Python</span>, <span class="color-neon">LangChain</span> e <span class="color-neon">OpenAI API</span> para criar assistentes virtuais especializados.'
          },
          {
            id: 2,
            title: 'APIs REST e Integração',
            subtitle: 'Integração de Sistemas',
            rating: '',
            description:
              'Desenvolvimento de APIs robustas para integração de sistemas. Experiência com <span class="color-neon">REST</span>, <span class="color-neon">FastAPI</span> e <span class="color-neon">Laravel API Resources</span> para criação de microserviços escaláveis.'
          },
          {
            id: 3,
            title: 'Testes Unitários',
            subtitle: '',
            rating: '',
            description:
              'Utilização de testes unitários com <span class="color-neon">PEST</span> e <span class="color-neon">PHPUnit</span> para Laravel e <span class="color-neon">JEST</span> para NodeJs'
          },
          {
            id: 4,
            title: 'FrameWorks',
            subtitle: '',
            rating: '',
            description:
              'Alguns frameworks que vale a pena mencionar minha familiaridade são: <span class="color-neon">AdonisJS, Next.Js</span> e <span class="color-neon">Vue.Js</span>, cujos quais tive a oportunidade de interagir em alguns projetos.'
          },
          {
            id: 5,
            title: 'Linguagens',
            subtitle: '',
            rating: '',
            description:
              'Algumas linguagens que possuo familiaridade são <span class="color-neon">C++, C# </span>e <span class="color-neon">G Code</span>. Utilizei o C# para criar um asistente pessoal para gerenciamento de aparelhos domésticos. E utilizei C++ e G Code para a criação de uma <span class="color-neon">Máquina CNC Router</span>, onde tive o privilégio de contruí-la do zero e pude realizar a programação via <span class="color-neon">Arduino</span>.'
          }
        ]
      }
    ]
  },
  {
    id: 'default-home-education',
    section: 'education-section',
    title: 'Educação',
    inner: [
      {
        id: 'education-section-left',
        section_title: {
          title: 'Formações',
          subtitle: '2004 - 2023'
        },
        items: [
          {
            id: 1,
            title: 'Bacharelado em Inteligência Artificial',
            subtitle: 'Faculdade Anhanguera',
            rating: 'Cursando - 2024',
            description: 'Graduação focada em Machine Learning, Deep Learning, Processamento de Linguagem Natural e desenvolvimento de sistemas inteligentes.'
          },
          {
            id: 2,
            title: 'Análise e Desenvolvimento de Sistemas',
            subtitle: 'Faculdade Anhanguera',
            rating: 'Concluído - 2023',
            description: 'Formação completa em desenvolvimento de software, banco de dados, engenharia de software e arquitetura de sistemas.'
          },
          {
            id: 3,
            title: 'Técnico Florestal, Meio Ambiente E Tecnologias Comerciais',
            subtitle: 'Centro Paula SouzaCentro Paula Souza (2008 - 2010)',
            rating: '2010',
            description: 'Formação técnica em agroflorestas e meio ambiente.'
          },
          {
            id: 4,
            title: 'Ténico em Açucar e Alcool',
            subtitle: 'Centro Paula SouzaCentro Paula Souza (2008 - 2010)',
            rating: '2010',
            description: 'Trabalhos com tecnologias químicas mais voltada para usinas açucareiras, porém com o foco em produção química.'
          },
          {
            id: 5,
            title: 'Ensino Médio',
            subtitle: 'E.E Coronel João Cruz',
            rating: '2004',
            description: ''
          }
        ]
      },
      {
        id: 'education-section-right',
        section_title: {
          title: 'Outras Formações',
          subtitle: '2007 - 2010'
        },
        items: [
          {
            id: 1,
            title: 'Machine Learning e AI Specialization',
            subtitle: 'Coursera - Stanford University',
            rating: '2024',
            description:
              'Especialização completa em Machine Learning, Deep Learning e Inteligência Artificial. Certificação em algoritmos de ML, redes neurais e aplicações práticas de IA.'
          },
          {
            id: 2,
            title: 'Python for Data Science and AI',
            subtitle: 'IBM - Coursera',
            rating: '2024',
            description:
              'Certificação em Python aplicado à Ciência de Dados e Inteligência Artificial. Foco em bibliotecas como Pandas, NumPy, Scikit-learn e TensorFlow.'
          },
          {
            id: 3,
            title: 'AWS Cloud Practitioner',
            subtitle: 'Amazon Web Services',
            rating: '2023',
            description:
              'Certificação fundamental em computação em nuvem AWS. Conhecimento em EC2, S3, Lambda, RDS e outros serviços essenciais da AWS.'
          },
          {
            id: 4,
            title: 'Formação DBA SqlServer 2019, Desenvolvedor Banco de Dados',
            subtitle: 'Udemy (2021)',
            rating: '2021',
            description:
              'Códigos de exames da microsoft aprendidos neste curso:<br> 70-761: Querying Data with Transact-SQL. <br> 70-762: Developing SQL Databases<br> 70-764: Maintaning SQL Databases.'
          },
          {
            id: 5,
            title: 'Autodidata em tudo o mais.',
            subtitle: 'Internet das coisas)',
            rating: '2001+',
            description:
              'Sempre fui muito curioso e busquei conhecimentos sozinho. Acabei me especializando em programação web na experiência e na pratica sempre estudando as novidades e aprendendo com o rio de informação especializada na internet e aplicando em meus projetos.'
          }
        ]
      }
    ]
  }
]

export default Resumo
