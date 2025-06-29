import { Image } from 'react-bootstrap'
import Icon from '@ui/icon'
import Button from '@ui/button'
import Typed from 'react-typed'
import Social, { SocialLink } from '@ui/social'

// Função para calcular idade dinamicamente
const calculateAge = (birthDate) => {
  const today = new Date()
  const birth = new Date(birthDate)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  
  return age
}

const currentAge = calculateAge('1987-06-06') // Data de nascimento: 06/06/1987

const page = {
  id: 'developer-home-hero',

  headings: [
    {
      content: 'BENVINDO AO MEU MUNDO'
    },
    {
      content: 'Olá, eu sou <span>Jonatas</span>'
    }
  ],
  animated_texts: ['Full Stack.', 'IA Specialist.', 'Arquiteto de Software.'],
  texts: [
    {
      content:
        'Desenvolvedor Full Stack Sênior com mais de <b style="color: rgb(21,232,111);">14 anos de experiência</b>, especialista em <b>PHP (Laravel)</b> e <b>Python</b>. Atualmente trabalho na <b style="color: rgb(21,232,111);">Gran Cursos Online</b>, uma das maiores EdTechs da América Latina, desenvolvendo sistemas ERP robustos e soluções baseadas em <b>Inteligência Artificial</b>. Cursando graduação em <b>Inteligência Artificial</b> e aplicando técnicas modernas de automação com agentes de IA.'
    }
  ],
  socials: [
    {
      id: 1,
      title: 'Linkedin',
      path: 'https://www.linkedin.com/in/jhonymiler/',
      icon: 'SiLinkedin'
    },
    {
      id: 2,
      title: 'GitHub',
      path: 'https://github.com/jhonymiler',
      icon: 'BsGithub'
    },
    {
      id: 3,
      title: 'Discord',
      path: 'https://discord.com/channels/@me/1027416440350986250',
      icon: 'SiDiscord'
    }
  ],
  skills: [
    {
      id: 1,
      title: 'Laravel',
      image: {
        src: '../imgs/laravel.png',
        alt: 'Laravel'
      }
    },
    {
      id: 2,
      title: 'Python',
      image: {
        src: '../imgs/python.png',
        alt: 'Python'
      }
    },
    {
      id: 3,
      title: 'ReactJs',
      image: {
        src: '../imgs/react.png',
        alt: 'ReactJs'
      }
    },
    {
      id: 4,
      title: 'Javascript',
      image: {
        src: '../imgs/javascript.png',
        alt: 'Javascript'
      }
    },
    {
      id: 5,
      title: 'NodeJS',
      image: {
        src: '../imgs/nodejs.png',
        alt: 'NodeJS'
      }
    }
  ],
  items: [
    {
      id: 1,
      title: `${currentAge} Anos`,
      icon: 'FiSunrise'
    },
    {
      id: 2,
      title: 'jonatasmiler@gmail.com',
      icon: 'GrMail'
    },
    {
      id: 3,
      title: 'Piracicaba/SP - Brasil',
      icon: 'RiMapPinFill'
    },
    {
      id: 4,
      title: 'linkedin.com/in/jhonymiler',
      icon: 'SiLinkedin',
      link: 'https://www.linkedin.com/in/jhonymiler/'
    },
    {
      id: 5,
      title: 'github.com/jhonymiler',
      icon: 'BsGithub',
      link: 'https://github.com/jhonymiler'
    }
  ],
  buttons: [
    {
      id: 1,
      path: '../documentos/CURRICULUM - 19-07-2022.pdf',
      content: 'DOWNLOAD CV'
    }
  ]
}
export default function Apresentacao() {
  return (
    <div id="developer-home-hero" className="rn-slide-area">
      <div className="slide slider-style-3 ">
        <div className="container">
          <div className="row slider-wrapper">
            <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
              <div className="slider-info">
                <div className="row">
                  <div className="content mt--0">
                    <div className="inner mb--30">
                      {page?.headings?.[0] && <span className="subtitle">{page.headings[0].content}</span>}

                      {page?.headings?.[1] && (
                        <h2 className="title">
                          <span
                            className="title-main"
                            dangerouslySetInnerHTML={{
                              __html: page.headings[1].content
                            }}
                          />
                          <br />
                          {page?.animated_texts && (
                            <span className="header-caption" id="page-top">
                              <span className="cd-headline clip is-full-width">
                                <span>um </span> <Typed className="animated-texts" strings={page.animated_texts} typeSpeed={50} backSpeed={50} backDelay={1} loop smartBackspace />
                              </span>
                            </span>
                          )}
                        </h2>
                      )}
                      {page?.texts?.[0] && (
                        <div>
                          <p
                            className="description"
                            dangerouslySetInnerHTML={{
                              __html: page.texts[0].content
                            }}
                          />
                        </div>
                      )}
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-12">
                        {page?.socials && (
                          <div className="social-share-inner-left">
                            <span className="title">Encontre-me </span>
                            <Social>
                              {page.socials.map((social) => (
                                <SocialLink key={social.id} path={social.path}>
                                  <Icon stroke={1} size={24} name={social.icon} title={social.title} />
                                </SocialLink>
                              ))}
                            </Social>
                          </div>
                        )}
                      </div>
                      <div className="col-lg-8 col-xl-8 col-md-8 col-sm-8 col-12 mt_mobile--30">
                        {page?.skills && (
                          <div className="skill-share-inner">
                            <span className="title">Melhores Skills</span>
                            <ul className="skill-share d-flex liststyle">
                              {page.skills.map((skill, index) => (
                                <li key={skill.id || index}>
                                  <Image src={skill.image.src} title={skill.image.alt || 'skill'} />
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 order-lg-2 col-lg-5 mt_lg--50 mt_md--50 mt_sm--50">
              <div className="slider-info">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-12">
                    <div className="user-info-top">
                      <div className="user-info-header d-flex justify-content-between">
                        {page?.items && (
                          <div className="user-info-footer">
                            {page.items.map((item) => (
                              <div key={item.id} className="info">
                                <Icon size={24} name={item.icon} />
                                {item?.link ? (
                                  <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    <span>{item.title}</span>
                                  </a>
                                ) : (
                                  <span>{item.title}</span>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="user ">
                          <img className="rounded-circle" src="/imgs/foto.jpeg" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12 col-lg-12 col-12">
                    <div className="user-info-bottom">
                      <div className="button-wrapper d-flex">
                        <Button className="mr--30" path="../documentos/CURRICULUM - 19-07-2022.pdf">
                          <span>DOWNLOAD CV</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
