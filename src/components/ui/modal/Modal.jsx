export default function Modal(props) {
  return (
    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">
                <i data-feather="x"></i>
              </span>
            </button>
          </div>
          <div className="modal-body">
            {props.html}
            {/* <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="portfolio-popup-thumbnail">
                  <div className="image">
                    <img className="w-100" src="/images/portfolio/portfolio-04.jpg" alt="slide" />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="text-content">
                  <h3>
                    <span>Featured - Design</span> App Design Development.
                  </h3>
                  <p className="mb--30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
                  <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
                  <div className="button-group mt--20">
                    <a href="#" className="rn-btn thumbs-icon">
                      <span>LIKE THIS</span>
                      <i data-feather="thumbs-up"></i>
                    </a>
                    <a href="#" className="rn-btn">
                      <span>VIEW PROJECT</span>
                      <i data-feather="chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
