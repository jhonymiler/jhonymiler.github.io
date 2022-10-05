export default function Home() {
  return (
    <div id="home" className="rn-slide-area">
      <div className="slide slider-style-3">
        <div className="container">
          <div className="row slider-wrapper">
            <div className="order-2 order-xl-1 col-lg-12 col-xl-5 mt_lg--50 mt_md--50 mt_sm--50">
              <div className="slider-info">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-12">
                    <div className="user-info-top">
                      <div className="user-info-header">
                        <div className="user">
                          <i data-feather="user"></i>
                        </div>
                        <h2 className="title">
                          Hi, I’m <span>InBio</span>
                        </h2>
                        <p className="disc">Web designer and developer working for envato.com in Paris, France.</p>
                      </div>
                      <div className="user-info-footer">
                        <div className="info">
                          <i data-feather="file"></i>
                          <span>Web designer & developer</span>
                        </div>
                        <div className="info">
                          <i data-feather="mail"></i>
                          <span>john.slady@gmail.com</span>
                        </div>
                        <div className="info">
                          <i data-feather="map-pin"></i>
                          <span>Paris fan</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12 col-lg-12 col-12">
                    <div className="user-info-bottom">
                      <span>Download my curriculum vitae: </span>
                      <div className="button-wrapper d-flex">
                        <a className="rn-btn mr--30" href="#contacts">
                          <span>DOWNLOAD CV</span>
                        </a>
                        <a className="rn-btn" href="#contacts">
                          <span>CONTACT ME</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 order-xl-2 col-lg-12 col-xl-7">
              <div className="background-image-area">
                <div className="thumbnail-image">
                  <img src="/images/slider/banner-02.png" alt="Personal Portfolio" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
