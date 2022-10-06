import { Image } from 'react-bootstrap'
import { User } from 'react-feather'
import Icon from '@ui/icon'
import Button from '@ui/button'
import Typed from 'react-typed'
import Social, { SocialLink } from '@ui/social'

const data = {
  id: 'developer-home-hero',
  section: 'hero-section',
  headings: [
    {
      content: 'Hi, I’m <span>InBio</span>'
    },
    {
      content: 'Download my curriculum vitae:'
    }
  ],
  texts: [
    {
      content: 'Web designer and developer working for envato.com in Paris, France.'
    }
  ],
  items: [
    {
      id: 1,
      title: '35 Anos',
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
    }
  ],
  buttons: [
    {
      id: 1,
      path: '../documentos/CURRICULUM - 19-07-2022.pdf',
      content: 'DOWNLOAD CV'
    },
    {
      id: 2,
      path: '#contacts',
      content: 'CONTACTE ME'
    }
  ],
  images: [
    {
      src: '../images/slider/banner-02.png',
      alt: 'Personal Portfolio Images'
    }
  ]
}

const data2 = {
  headings: [
    {
      content: 'BENVINDO AO MEU MUNDO'
    },
    {
      content: 'Olá, eu sou <span>Jonatas</span>'
    }
  ],
  animated_texts: ['Back-end.', 'Front-end.', 'Full stack.'],
  texts: [
    {
      content:
        'Autodidata, comecei na programação de maneira profissional em <b style="color: rgb(21,232,111);">2008</b> onde fui Co-fundador da <b>OfficeWeb Soluções em Internet</b> no desenvolvimento de web sites e sistemas de gestão para web. Hoje trabalho com diversas tecnologias, entre elas, algumas listadas abaixo. Tendo como linguagem mais forte o PHP.'
    }
  ],
  socials: [
    {
      id: 1,
      title: 'Linkedin',
      path: 'https://www.linkedin.com/in/jonatas-miler-83805053/',
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
      title: 'ReactJs',
      image: {
        src: '../imgs/react.png',
        alt: 'ReactJs'
      }
    },
    {
      id: 3,
      title: 'Javascript',
      image: {
        src: '../imgs/javascript.png',
        alt: 'Javascript'
      }
    },
    {
      id: 3,
      title: 'HTML',
      image: {
        src: '../imgs/html.png',
        alt: 'HTML'
      }
    },
    {
      id: 3,
      title: 'CSS',
      image: {
        src: '../imgs/css.png',
        alt: 'CSS'
      }
    }
  ],
  images: [
    {
      src: '../images/slider/banner-01.png',
      alt: 'Personal Portfolio Images'
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
                      {data2?.headings?.[0] && <span className="subtitle">{data2.headings[0].content}</span>}

                      {data2?.headings?.[1] && (
                        <h2 className="title">
                          <span
                            className="title-main"
                            dangerouslySetInnerHTML={{
                              __html: data2.headings[1].content
                            }}
                          />
                          <br />
                          {data2?.animated_texts && (
                            <span className="header-caption" id="page-top">
                              <span className="cd-headline clip is-full-width">
                                <span>um </span> <Typed className="animated-texts" strings={data2.animated_texts} typeSpeed={50} backSpeed={50} backDelay={1} loop smartBackspace />
                              </span>
                            </span>
                          )}
                        </h2>
                      )}
                      {data2?.texts?.[0] && (
                        <div>
                          <p
                            className="description"
                            dangerouslySetInnerHTML={{
                              __html: data2.texts[0].content
                            }}
                          />
                        </div>
                      )}
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-xl-4 col-md-4 col-sm-4 col-12">
                        {data2?.socials && (
                          <div className="social-share-inner-left">
                            <span className="title">Encontre-me </span>
                            <Social>
                              {data2.socials.map((social) => (
                                <SocialLink key={social.id} path={social.path}>
                                  <Icon stroke={1} size={24} name={social.icon} title={social.title} />
                                </SocialLink>
                              ))}
                            </Social>
                          </div>
                        )}
                      </div>
                      <div className="col-lg-8 col-xl-8 col-md-8 col-sm-8 col-12 mt_mobile--30">
                        {data2?.skills && (
                          <div className="skill-share-inner">
                            <span className="title">Melhores Skills</span>
                            <ul className="skill-share d-flex liststyle">
                              {data2.skills.map((skill) => (
                                <li>
                                  <Image key={skill.id} src={skill.image.src} title={skill.image.alt || 'skill'} />
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
                        {data?.items && (
                          <div className="user-info-footer">
                            {data.items.map((item) => (
                              <div key={item.id} className="info">
                                <Icon size={24} name={item.icon} />
                                {item?.title && <span>{item.title}</span>}
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
                      {data?.headings?.[1] && <span>{data.headings[1]?.content}</span>}
                      <div className="button-wrapper d-flex">
                        {data?.buttons?.map(({ id, path, content }, i) => (
                          <Button key={id} className={i === 0 ? 'mr--30' : ''} path={path}>
                            <span>{content}</span>
                          </Button>
                        ))}
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
