export default function Blog() {
  return (
    <div className="rn-blog-area rn-section-gap section-separator" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" className="section-title text-center">
              <span className="subtitle">Visit my blog and keep your feedback</span>
              <h2 className="title">My Blog</h2>
            </div>
          </div>
        </div>
        <div className="row row--25 mt--30 mt_md--10 mt_sm--10">
          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="400" data-aos-once="true" className="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
            <div className="rn-blog" data-toggle="modal" data-target="#exampleModalCenters">
              <div className="inner">
                <div className="thumbnail">
                  <a href="javascript:void(0)">
                    <img src="/images/blog/blog-01.jpg" alt="Personal Portfolio Images" />
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="category-list">
                      <a href="javascript:void(0)">Canada</a>
                    </div>
                    <div className="meta">
                      <span>
                        <i className="feather-clock"></i> 2 min read
                      </span>
                    </div>
                  </div>
                  <h4 className="title">
                    <a href="javascript:void(0)">
                      T-shirt design is the part of design
                      <i className="feather-arrow-up-right"></i>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="600" data-aos-once="true" className="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
            <div className="rn-blog" data-toggle="modal" data-target="#exampleModalCenters">
              <div className="inner">
                <div className="thumbnail">
                  <a href="javascript:void(0)">
                    <img src="/images/blog/blog-02.jpg" alt="Personal Portfolio Images" />
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="category-list">
                      <a href="javascript:void(0)">Development</a>
                    </div>
                    <div className="meta">
                      <span>
                        <i className="feather-clock"></i> 2 hour read
                      </span>
                    </div>
                  </div>
                  <h4 className="title">
                    <a href="javascript:void(0)">
                      The services provide for design <i className="feather-arrow-up-right"></i>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="800" data-aos-once="true" className="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30">
            <div className="rn-blog" data-toggle="modal" data-target="#exampleModalCenters">
              <div className="inner">
                <div className="thumbnail">
                  <a href="javascript:void(0)">
                    <img src="/images/blog/blog-03.jpg" alt="Personal Portfolio Images" />
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="category-list">
                      <a href="javascript:void(0)">Application</a>
                    </div>
                    <div className="meta">
                      <span>
                        <i className="feather-clock"></i> 5 min read
                      </span>
                    </div>
                  </div>
                  <h4 className="title">
                    <a href="javascript:void(0)">
                      Mobile app landing design & app maintain<i className="feather-arrow-up-right"></i>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
