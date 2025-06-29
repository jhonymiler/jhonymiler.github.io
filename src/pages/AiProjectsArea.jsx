import React from 'react'
import SectionTitle from '@components/section-title'

const AiProjectsArea = ({ data }) => {
  return (
    <div className="tab-pane fade" id="ai-projects" role="tabpanel" aria-labelledby="ai-projects-tab">
      <div className="single-tab-content">
        <SectionTitle {...data} />
        <div className="row">
          {data?.inner?.map((innerData) => (
            <div 
              key={innerData.id} 
              data-aos="fade-up" 
              data-aos-duration="1200" 
              data-aos-delay="100"
              className="col-xl-6 col-lg-6 col-md-12 col-12"
            >
              <div className="rn-resume-card">
                <div className="inner">
                  <div className="icon">
                    <i className="feather-cpu"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">
                      <a href="#ai-projects">{innerData?.section_title?.title}</a>
                    </h4>
                    <span className="subtitle">{innerData?.section_title?.subtitle}</span>
                    <div className="rn-description">
                      <div className="row">
                        <div className="col-12">
                          {innerData?.items?.map((item, innerIndex) => (
                            <div key={innerIndex} className="single-list-inner">
                              <div className="content">
                                <div className="row align-items-center">
                                  <div className="col-lg-8 col-md-8 col-12">
                                    <div className="experience-content">
                                      <h4 className="title">{item.title}</h4>
                                      <span className="subtitle">{item.subtitle}</span>
                                      <div 
                                        className="description" 
                                        dangerouslySetInnerHTML={{ __html: item.description }}
                                      />
                                      {item.tech && (
                                        <div className="tech-stack mt-3">
                                          {item.tech.map((tech, techIndex) => (
                                            <span 
                                              key={techIndex} 
                                              className="badge badge-pill badge-secondary mr-2 mb-2"
                                              style={{
                                                backgroundColor: '#6366f1',
                                                color: 'white',
                                                padding: '0.4rem 0.8rem',
                                                fontSize: '0.75rem',
                                                borderRadius: '1rem'
                                              }}
                                            >
                                              {tech}
                                            </span>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-12">
                                    <div className="year">
                                      <span>{item.rating}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AiProjectsArea
