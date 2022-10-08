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
            title: 'Gestor de Documentos Fiscais',
            subtitle: 'GRUPO ARO DE CONTABILIDADE',
            rating: '2022',
            description:
              'Contrução de um sistema semelhante ao site <a href="https://arquivei.com.br" target="_blank">arquivei.com.br</a> ao <a href="https://sieg.com" target="_blank">SIEG.com</a> para baixar e gerenciar documentos fiscais. Criamos o sistema em <span class="color-neon">Laravel</span> utilizando os melhores recursos e patterns disponíveis da ferramenta como por exemplo, Observers, Task Scheduling, Queues e etc. Utilizamos banco de dados <span class="color-neon">Postgres</span> e serviços de background em <span class="color-neon">Python</span>. '
          },
          {
            id: 2,
            title: 'Entrega Continua',
            subtitle: 'ACX EXPERIENCE',
            rating: '2022',
            description:
              'Em todos estes projetos, criei toda a integração via GitHub e posteriormente em Bitbucket. Os pipelines para deploy e envio para a produção no servidor, bem como a integração das tarefas do Jira com o VSCode da equipe para que ao terminar uma tarefa a mesma fosse imediatamente apontada na plataforma Jira.'
          },
          {
            id: 3,
            title: 'Baixa de CF-e`s',
            subtitle: 'ACX EXPERIENCE',
            rating: '2022',
            description:
              'Criação de automação em <span class="color-neon">Python</span> para recuperar 4 Milhões de arquivos SAT para uma rede de supermercados. O sistema é um projeto pessoal cujo serviço pode ser solicitado diretamente a mim caso precise recuperar arquivos fiscais perdidos.'
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
          },
          {
            id: 6,
            images: {
              src: '/imgs/graphql.png',
              title: 'GraphQL'
            },
            title: 'GraphQL',
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
            id: 4,
            title: 'Desafio SigmaGeek',
            subtitle: '',
            rating: '',
            description:
              'Participação do Desafio da <span class="color-neon">SigmaGeek</span> para encontrar os números palindrômicos primos da extenção de casas decimais do número PI. Realizei o teste em python processando 6,6 Bilhões de números por minuto. O algorítimo se encontra no <a href="https://github.com/jhonymiler/Prime-Palindromic-by-Pi">GitHub</a>'
          },

          {
            id: 1,
            title: 'Repositórios e Versionamento',
            subtitle: '',
            rating: '',
            description:
              'Utilização das plataformas de repositório como Bitbucket e GitHub, criação de pipelines <span class="color-neon">CI/CD</span> para entrega contínua e utilização do conceito Git Flow como metodo de versionamento.'
          },

          {
            id: 2,
            title: 'Metodologias Aágeis',
            subtitle: '',
            rating: '',
            description:
              'Criação de automações na plataforma <span class="color-neon">Jira</span> para gerenciar as tarefas e integração com as ferramentas de trabalho da equipe como VSCode e repositórios como <span class="color-neon">BitBucket</span> e <span class="color-neon">GitHub</span>. <br> Trabalhos realizados com metedologia <span class="color-neon">Scrum</span> e <span class="color-neon">Git Flow</span> como gerenciamento de Branches'
          },
          {
            id: 3,
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
            title: 'Testes Unitários',
            subtitle: '',
            rating: '',
            description:
              'Utilização de testes unitários com <span class="color-neon">PEST</span> e <span class="color-neon">PHPUnit</span> para Laravel e <span class="color-neon">JEST</span> para NodeJs'
          },
          {
            id: 2,
            title: 'FrameWorks',
            subtitle: '',
            rating: '',
            description:
              'Alguns frameworks que vale a pena mencionar minha familiaridade são: <span class="color-neon">AdonisJS, Next.Js</span> e <span class="color-neon">Vue.Js</span>, cujos quais tive a oportunidade de interagir em alguns projetos.'
          },
          {
            id: 3,
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
          subtitle: '2004 - 2022'
        },
        items: [
          {
            id: 1,
            title: 'Técnico Florestal, Meio Ambiente E Tecnologias Comerciais',
            subtitle: 'Centro Paula SouzaCentro Paula Souza (2008 - 2010)',
            rating: '2010',
            description: 'Formação técnica em agroflorestas e meio ambiente.'
          },
          {
            id: 2,
            title: 'Ténico em Açucar e Alcool',
            subtitle: 'Centro Paula SouzaCentro Paula Souza (2008 - 2010)',
            rating: '2010',
            description: 'Trabalhos com tecnologias químicas mais voltada para usinas açucareiras, porém com o foco em produção química.'
          },
          {
            id: 3,
            title: 'Ensino Médio',
            subtitle: 'E.E Coronel João Cruz',
            rating: '2004',
            description: 'If you are going to use a passage. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.'
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
            title: 'Autodidata em tudo o mais.',
            subtitle: 'Internet das coisas)',
            rating: '2001+',
            description:
              'Sempre fui muito curioso e busquei conhecimentos sozinho. Acabei me especializando em programação web na experiência e na pratica sempre estudando as novidades e aprendendo com o rio de informação especializada na internet e aplicando em meus projetos.'
          },
          {
            id: 2,
            title: 'Formação DBA SqlServer 2019, Desenvolvedor Banco de Dados',
            subtitle: 'Udemy (2021)',
            rating: '2021',
            description:
              'Códigos de exames da microsoft aprendidos neste curso:<br> 70-761: Querying Data with Transact-SQL. <br> 70-762: Developing SQL Databases<br> 70-764: Maintaning SQL Databases.'
          }
        ]
      }
    ]
  }
]

export default Resumo
