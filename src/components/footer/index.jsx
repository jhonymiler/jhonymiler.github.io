import { FaEthereum, FaReact } from 'react-icons/fa'
import { SiCss3, SiHtml5, SiJavascript, SiSolidity, SiWeb3Dotjs, SiPython } from 'react-icons/si'

export default function Footer() {
  return (
    <div className="rn-footer-area rn-section-gap section-separator">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-area text-center">
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" data-aos-once="true" className="social-share-style-1 text-center single-page-icone mt--40 aos-init aos-animate">
                <ul className="social-share justify-content-center d-flex liststyle">
                  <li>
                    <a className="circle only-border color" href="#" title="ReactJS">
                      <FaReact size={24} />
                    </a>
                  </li>
                  <li>
                    <a className="circle only-border" href="#" title="Python & IA">
                      <SiPython stroke="1" size={24} />
                    </a>
                  </li>
                  <li>
                    <a className="circle only-border" href="#" title="WEB3">
                      <SiWeb3Dotjs stroke="1" size={24} />
                    </a>
                  </li>
                  <li>
                    <a className="circle only-border" href="#" title="JavaScript">
                      <SiJavascript stroke="1" size={24} />
                    </a>
                  </li>
                  <li>
                    <a className="circle only-border" href="#" title="HTML 5">
                      <SiHtml5 stroke="1" size={24} />
                    </a>
                  </li>
                  <li>
                    <a className="circle only-border" href="#" title="CSS 3">
                      <SiCss3 stroke="1" size={24} />
                    </a>
                  </li>
                  <li>
                    <a className="circle only-border" href="#" title="Blockchain Ethereum">
                      <FaEthereum stroke="1" size={24} />
                    </a>
                  </li>

                  <li>
                    <a className="circle only-border" href="#" title="Solidity SmartContract">
                      <SiSolidity stroke="1" size={24} />
                    </a>
                  </li>
                </ul>
              </div>

              <p className="description mt-30">
                Tecnologias utilizadas nesta página.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
