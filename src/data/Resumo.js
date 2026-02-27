const Resumo = [
  {
    id: 'resumo',
    section: 'resume-section',
    section_title: {
      title: 'Meu Resumo',
      subtitle: '18+ De Experiência'
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
            title: 'Desenvolvedor Sênior de Integrações',
            subtitle: 'Gran Cursos Online',
            rating: '2023 – Presente',
            description:
              'Squad responsável pela camada de integração entre sistemas internos e parceiros externos (ERP, adquirentes, fornecedores financeiros) para mais de <span class="color-neon">500 mil alunos ativos</span>. Arquitetura de microsserviços, filas assíncronas com <span class="color-neon">AWS SQS + Lambda</span>, padrões de resiliência (Circuit Breaker, Retry) e observabilidade com <span class="color-neon">Datadog</span>. Premiado com o <span class="color-neon">Gran Pix</span> pelo impacto na área financeira.'
          },
          {
            id: 9,
            title: 'Redução de Divergência Financeira',
            subtitle: 'Gran Cursos Online — Projeto de autoria própria',
            rating: '2024 – Presente',
            description:
              'Idealizei e construí sistema de monitoramento financeiro diário que cruza dados de pagamentos e faturamento com validadores em cadeia. Reduziu divergência de <span class="color-neon">~R$ 100 mil para ~R$ 5 mil</span> em um volume de R$ 60 milhões/mês, alcançando eficiência de <span class="color-neon">99,99%</span>. Stack: Python, pandas, Streamlit, MySQL, S3, Docker.'
          },
          {
            id: 10,
            title: 'Conciliação de Vendas — 90% → 100%',
            subtitle: 'Gran Cursos Online — Projeto de autoria própria',
            rating: '2024 – Presente',
            description:
              'Ferramenta CLI em <span class="color-neon">Python</span> que rastreia transações em 3 sistemas distintos com busca assíncrona. Elevou a taxa de conciliação de ~90% para <span class="color-neon">100%</span>, viabilizando relatórios confiáveis para investidores. Trabalho reconhecido com <span class="color-neon">premiação interna</span> pelo impacto na empresa.'
          },
          {
            id: 11,
            title: 'Arquitetura de Microsserviço de Conciliação',
            subtitle: 'Gran Cursos Online',
            rating: '2025 – Presente',
            description:
              'Responsável técnico pela proposta e arquitetura completa de microsserviço em <span class="color-neon">NestJS + TypeORM + TypeScript</span>. Integração de 4 fontes de dados, design agnóstico de fornecedor com <span class="color-neon">Strategy Pattern</span>, e decisão documentada entre MySQL e DynamoDB. Identifiquei gaps críticos de segurança antes da aprovação.'
          },
          {
            id: 12,
            title: 'Padrões de Resiliência em APIs',
            subtitle: 'Gran Cursos Online',
            rating: '2025',
            description:
              'Análise proativa de 9 módulos de integração revelou que a maioria não possuía padrões de resiliência. Implementei solução compartilhada com <span class="color-neon">Circuit Breaker</span>, <span class="color-neon">Retry Exponencial</span>, timeout configurável e logging estruturado para <span class="color-neon">Datadog</span>. Eliminação de falhas silenciosas em operações financeiras.'
          },
          {
            id: 13,
            title: 'Validador de Faturas em Escala',
            subtitle: 'Gran Cursos Online — Projeto de autoria própria',
            rating: '2024 – 2025',
            description:
              'Sistema com interface reativa que processa centenas de milhares de faturas/mês em batch, classificando motivos de falha. Evoluiu para validação inteligente no pipeline de integração com resiliência automática. Stack: <span class="color-neon">Laravel</span>, Livewire, Horizon, Redis, WebSockets.'
          },
          {
            id: 2,
            title: 'Desenvolvedor Full Stack',
            subtitle: 'Sigma Dataserv',
            rating: '2023 – 2024',
            description:
              'Desenvolvimento de aplicações web e soluções tecnológicas especializadas. Implementação de sistemas utilizando <span class="color-neon">PHP</span>, <span class="color-neon">Python</span> e frameworks modernos. Foco em automação e integração de sistemas distribuídos.'
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
            rating: '2021 – 2022',
            description:
              'Construção de um sistema semelhante ao site <a href="https://arquivei.com.br" target="_blank">arquivei.com.br</a> ao <a href="https://sieg.com" target="_blank">SIEG.com</a> para baixar e gerenciar documentos fiscais. Criamos o sistema em <span class="color-neon">Laravel</span> utilizando Observers, Task Scheduling, Queues. Banco <span class="color-neon">PostgreSQL</span> e serviços de background em <span class="color-neon">Python</span>.'
          },
          {
            id: 6,
            title: 'Entrega Contínua',
            subtitle: 'ACX EXPERIENCE',
            rating: '2021 – 2022',
            description:
              'Criação de pipelines <span class="color-neon">CI/CD</span> completos via GitHub e Bitbucket com integração ao <span class="color-neon">Jira</span> e deploy automatizado para produção. Integração das tarefas do Jira com o VSCode da equipe.'
          },
          {
            id: 7,
            title: 'Baixa de CF-e`s',
            subtitle: 'ACX EXPERIENCE',
            rating: '2021 – 2022',
            description:
              'Criação de automação em <span class="color-neon">Python</span> para recuperar <span class="color-neon">4 Milhões de arquivos SAT</span> para uma rede de supermercados. Projeto pessoal cujo serviço pode ser solicitado diretamente.'
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
            id: 8,
            title: 'Auditor de Migração Contábil',
            subtitle: 'Gran Cursos Online — Projeto de autoria própria',
            rating: '2024 – Presente',
            description:
              'Sistema de auditoria com 12 validadores em cadeia para comparação contrato a contrato entre sistema legado e novo motor contábil. Processamento em batch com dashboards no <span class="color-neon">Grafana</span> para monitoramento contínuo. Stack: Laravel, Horizon, Redis, Grafana, Prometheus.'
          },
          {
            id: 9,
            title: 'Mitigação de Risco Fiscal (> R$ 5 milhões)',
            subtitle: 'Gran Cursos Online',
            rating: '2026',
            description:
              'Atuação emergencial em mudança regulatória que bloqueou emissão de notas fiscais retroativas, afetando milhares de transações. Gerei payloads de contingência com regras específicas, eliminando risco legal e financeiro de <span class="color-neon">mais de R$ 5 milhões</span>.'
          },
          {
            id: 10,
            title: 'Automação de Estornos Fiscais',
            subtitle: 'Gran Cursos Online — Projeto de autoria própria',
            rating: '2024 – Presente',
            description:
              'Sistema com relatório analítico e executor de estornos com processamento paralelo e transações atômicas. Modo simulação por padrão para segurança em produção. Impediu geração de notas fiscais indevidas, economizando <span class="color-neon">milhares em impostos</span>. Stack: Python, MySQL.'
          },
          {
            id: 11,
            title: 'Arquitetura Event-Driven Assíncrona',
            subtitle: 'Gran Cursos Online',
            rating: '2024 – 2025',
            description:
              'Propus e implementei migração de processamento batch síncrono para arquitetura <span class="color-neon">event-driven assíncrona</span> com <span class="color-neon">AWS SQS</span> e <span class="color-neon">Lambda</span>. Retry com backoff exponencial, dead-letter queue com alertas automáticos e webhooks de callback. Decisão formalizada e aprovada pelo time de arquitetura.'
          },
          {
            id: 12,
            title: 'Tech Talk: IA e Automação com MCP',
            subtitle: 'Gran Cursos Online',
            rating: '2025',
            description:
              'Apresentei para a empresa o <span class="color-neon">Model Context Protocol</span> — padrão que conecta modelos de IA a ferramentas e sistemas externos. Demonstrações práticas com <span class="color-neon">Python</span>, integrações com Git e ferramentas de gestão de projeto.'
          },
          {
            id: 1,
            title: 'Projeto ERP Web',
            subtitle: 'GRUPO ARO DE CONTABILIDADE',
            rating: '2021 – 2022',
            description:
              'Conversão de sistema legado de ERP em Delphi para backend C# e frontend <span class="color-neon">ReactJs</span>. Estruturação do layout e consumo de API REST com <span class="color-neon">React Query</span>.'
          },
          {
            id: 2,
            title: 'Projeto HelpDesk',
            subtitle: 'GRUPO ARO DE CONTABILIDADE',
            rating: '2021 – 2022',
            description:
              'Sistema de Ticket em <span class="color-neon">PHP</span> e <span class="color-neon">MySQL</span>, com chat em tempo real via <span class="color-neon">Node.js + WebSocket</span>. Setup de servidor Linux e pipeline CI/CD via GitHub + SSH.'
          },
          {
            id: 3,
            title: 'Projeto Dashboard',
            subtitle: 'ACX EXPERIENCE',
            rating: '2021 – 2022',
            description:
              'Integração com ERP de Gestão Industrial para gráficos analíticos dinâmicos. Stack: <span class="color-neon">PHP</span>, <span class="color-neon">jQuery</span>, <span class="color-neon">SQL Server</span> com consultas dinâmicas configuráveis pelo consultor.'
          },
          {
            id: 13,
            title: 'Painel Administrativo Financeiro',
            subtitle: 'Gran Cursos Online',
            rating: '2023 – Presente',
            description:
              'Principal contribuidor do painel administrativo em <span class="color-neon">React 18 + TypeScript + Vite</span>. Ferramenta utilizada diariamente pelo time financeiro para gestão e monitoramento de integrações.'
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
            id: 19,
            images: {
              src: '/imgs/nestjs.png',
              title: 'NestJS'
            },
            title: 'NestJS',
            path: '#'
          },
          {
            id: 20,
            images: {
              src: '/imgs/typescript.png',
              title: 'TypeScript'
            },
            title: 'TypeScript',
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
          title: 'Banco de Dados & Infra',
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
          },
          {
            id: 6,
            images: {
              src: '/imgs/aws.png',
              title: 'AWS'
            },
            title: 'AWS (SQS, Lambda, S3)',
            path: '#'
          },
          {
            id: 7,
            images: {
              src: '/imgs/docker.png',
              title: 'Docker'
            },
            title: 'Docker',
            path: '#'
          },
          {
            id: 8,
            images: {
              src: '/imgs/datadog.png',
              title: 'Datadog'
            },
            title: 'Datadog',
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
          title: 'Liderança Técnica',
          subtitle: '2023 – Presente'
        },
        items: [
          {
            id: 1,
            title: 'Decisões Arquiteturais',
            subtitle: 'ADRs & RFCs em Produção',
            rating: '2024 – Presente',
            description: 'Proponho e defendo Architectural Decision Records e Requests for Comments em ambiente corporativo. Decisões como migração para arquitetura assíncrona e escolha de banco de dados para dados financeiros aprovadas pelo time de arquitetura. Identificação proativa de gaps de segurança antes da aprovação.'
          },
          {
            id: 2,
            title: 'Code Review AI',
            subtitle: 'Automação de Revisão de Código',
            rating: '2024',
            description: 'Sistema de revisão automática de código usando IA. Analisa qualidade, identifica vulnerabilidades e sugere melhorias. Integração com <span class="color-neon">GitHub</span> e <span class="color-neon">GitLab</span>.'
          },
          {
            id: 3,
            title: 'Observabilidade & Monitoramento',
            subtitle: 'Datadog, Grafana, Prometheus',
            rating: '2024 – Presente',
            description: 'Logging estruturado para <span class="color-neon">Datadog</span> com dashboards de saúde das integrações. Configuração de <span class="color-neon">Grafana + Prometheus</span> para métricas de erros por dia, tipo e produto. Alertas automatizados via <span class="color-neon">Slack</span>.'
          },
          {
            id: 4,
            title: 'Rancher e Kubernetes',
            subtitle: 'DevOps & Infraestrutura',
            rating: '2022',
            description: 'Criação de esteiras de produção para o <span class="color-neon">Ministério do Desenvolvimento</span> utilizando técnicas DevOps com Kubernetes.'
          },
          {
            id: 5,
            title: 'Desafio SigmaGeek',
            subtitle: 'Computação de Alta Performance',
            rating: '',
            description:
              'Participação do Desafio da <span class="color-neon">SigmaGeek</span> para encontrar números palindrômicos primos de casas decimais do PI. Processamento de <span class="color-neon">6,6 Bilhões de números/min</span> em Python. Algoritmo no <a href="https://github.com/jhonymiler/Prime-Palindromic-by-Pi">GitHub</a>'
          },
          {
            id: 6,
            title: 'Repositórios e Versionamento',
            subtitle: 'CI/CD & Git Flow',
            rating: '',
            description:
              'Bitbucket e GitHub, pipelines <span class="color-neon">CI/CD</span> para entrega contínua e Git Flow como método de versionamento. Experiência com <span class="color-neon">Serverless Framework</span> para deploys de Lambdas.'
          },
          {
            id: 7,
            title: 'Metodologias Ágeis',
            subtitle: 'Scrum & Kanban',
            rating: '',
            description:
              'Automações no <span class="color-neon">Jira</span> para gerenciamento de tarefas e integração com ferramentas da equipe como VSCode, <span class="color-neon">BitBucket</span> e <span class="color-neon">GitHub</span>. <br> Trabalhos com <span class="color-neon">Scrum</span> e <span class="color-neon">Git Flow</span> para gerenciamento de Branches.'
          }
        ]
      },
      {
        id: 'default-home-section-right',
        section_title: {
          title: 'Familiaridade & Stack',
          subtitle: 'Tecnologias & Patterns'
        },
        items: [
          {
            id: 1,
            title: 'Automação com IA & Agentes',
            subtitle: 'MCP, LangChain, OpenAI',
            rating: '2024 – Presente',
            description:
              'Desenvolvimento de agentes de IA e automação de processos. Experiência com <span class="color-neon">Model Context Protocol (MCP)</span> usando Python, além de <span class="color-neon">LangChain</span> e <span class="color-neon">OpenAI API</span> (GPT-4). Apresentação de Tech Talk sobre IA e automação em ambiente corporativo.'
          },
          {
            id: 2,
            title: 'Design Patterns Aplicados',
            subtitle: 'Padrões de Projeto em Produção',
            rating: '',
            description:
              '<span class="color-neon">Circuit Breaker</span>, <span class="color-neon">Strategy</span>, <span class="color-neon">Chain of Responsibility</span>, Factory, Repository, Dependency Injection. Retry com Exponential Backoff. Aplicação prática em sistemas financeiros críticos para 500k+ usuários.'
          },
          {
            id: 3,
            title: 'Testes & Qualidade',
            subtitle: 'PHPUnit, PEST, Jest',
            rating: '',
            description:
              'Testes unitários com <span class="color-neon">PEST</span> e <span class="color-neon">PHPUnit</span> para Laravel e <span class="color-neon">JEST</span> para Node.js/NestJS. Documentação de decisões técnicas com ADRs e RFCs.'
          },
          {
            id: 4,
            title: 'APIs REST & Integrações',
            subtitle: 'ERP, Gateways, APIs Externas',
            rating: '',
            description:
              'Integrações com sistemas ERP, gateways de pagamento e APIs externas. Experiência com <span class="color-neon">NestJS</span>, <span class="color-neon">FastAPI</span> e <span class="color-neon">Laravel API Resources</span> para criação de microsserviços escaláveis.'
          },
          {
            id: 5,
            title: 'Frameworks & Linguagens',
            subtitle: 'Multi-stack',
            rating: '',
            description:
              '<span class="color-neon">NestJS, AdonisJS, Next.Js, Vue.Js</span>. Navegação entre stack legada (PHP/Laravel) e moderna (Node.js/NestJS/TypeScript) sem atrito. Familiaridade com <span class="color-neon">C++, C#</span> e <span class="color-neon">G Code</span> (CNC Router via Arduino).'
          },
          {
            id: 6,
            title: 'Servidor & Infraestrutura',
            subtitle: 'Linux, AWS, Docker',
            rating: '',
            description:
              'Servidor Linux dedicado (Ubuntu/CentOS). <span class="color-neon">AWS</span> (SQS, Lambda, S3, EC2, RDS). <span class="color-neon">Docker</span> e Docker Compose. <span class="color-neon">Serverless Framework</span>. APACHE, FTP, SSH.'
          },
          {
            id: 7,
            title: 'GPT-4 & Processamento de Docs',
            subtitle: 'LLMs e OCR',
            rating: '2024',
            description:
              'Chatbots avançados com <span class="color-neon">GPT-4</span> e <span class="color-neon">OpenAI API</span>. Processamento de documentos com <span class="color-neon">OCR + Machine Learning</span> para extração e classificação de dados de formulários e contratos.'
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
          subtitle: '2004 - 2026'
        },
        items: [
          {
            id: 1,
            title: 'Bacharelado em Inteligência Artificial',
            subtitle: 'Faculdade Anhanguera',
            rating: 'Cursando - 2024/2028',
            description: 'Graduação focada em Machine Learning, Deep Learning, Processamento de Linguagem Natural e desenvolvimento de sistemas inteligentes. Aplicação prática de técnicas de ML, NLP e agentes de IA em projetos reais na Gran Cursos Online.'
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
            subtitle: 'Centro Paula Souza (2008 - 2010)',
            rating: '2010',
            description: 'Formação técnica em agroflorestas e meio ambiente.'
          },
          {
            id: 4,
            title: 'Técnico em Açúcar e Álcool',
            subtitle: 'Centro Paula Souza (2008 - 2010)',
            rating: '2010',
            description: 'Trabalhos com tecnologias químicas voltada para usinas açucareiras, com foco em produção química.'
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
          title: 'Certificações & Cursos',
          subtitle: '2001 - 2026'
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
              'Certificação em Python aplicado à Ciência de Dados e IA. Foco em Pandas, NumPy, Scikit-learn e TensorFlow.'
          },
          {
            id: 3,
            title: 'AWS Cloud Practitioner',
            subtitle: 'Amazon Web Services',
            rating: '2023',
            description:
              'Certificação em computação em nuvem AWS. Conhecimento em EC2, S3, Lambda, SQS, RDS e Serverless Framework.'
          },
          {
            id: 4,
            title: 'NestJS & TypeScript',
            subtitle: 'Formação contínua',
            rating: '2025',
            description:
              'Aprofundamento em <span class="color-neon">NestJS</span>, TypeORM e TypeScript aplicados em microsserviços reais com integração de múltiplas fontes de dados e padrões como Strategy e Repository.'
          },
          {
            id: 5,
            title: 'Formação DBA SQL Server 2019',
            subtitle: 'Udemy (2021)',
            rating: '2021',
            description:
              'Códigos de exames Microsoft: 70-761: Querying Data with Transact-SQL. <br> 70-762: Developing SQL Databases<br> 70-764: Maintaning SQL Databases.'
          },
          {
            id: 6,
            title: 'Autodidata em tudo o mais',
            subtitle: 'Aprendizado contínuo',
            rating: '2001+',
            description:
              'Sempre curioso, busco conhecimento constantemente. Especializado em programação web na experiência prática, estudando novidades e aplicando em projetos reais. Atualmente focado em <span class="color-neon">IA, MCP e agentes inteligentes</span>.'
          }
        ]
      }
    ]
  }
]

export default Resumo
