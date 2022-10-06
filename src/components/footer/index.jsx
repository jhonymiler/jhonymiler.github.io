import { FaEthereum, FaReact, SiCss3, SiGraphql, SiHtml5, SiJavascript, SiSolidity, SiWeb3Dotjs } from 'react-icons/all'

export default function Footer() {
  return (
    <div class="rn-footer-area rn-section-gap section-separator">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="footer-area text-center">
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" data-aos-once="true" class="social-share-style-1 text-center single-page-icone mt--40 aos-init aos-animate">
                <ul class="social-share justify-content-center d-flex liststyle">
                  <li>
                    <a class="circle only-border color" href="#" title="ReactJS">
                      <FaReact size={24} />
                    </a>
                  </li>
                  <li>
                    <a class="circle only-border" href="#" title="GraphQl">
                      <SiGraphql stroke="1" size={24} />
                    </a>
                  </li>
                  <li>
                    <a class="circle only-border" href="#" title="WEB3">
                      <SiWeb3Dotjs stroke="1" size={24} />
                    </a>
                  </li>
                  <li>
                    <a class="circle only-border" href="#" title="JavaScript">
                      <SiJavascript stroke="1" size={24} />
                    </a>
                  </li>
                  <li>
                    <a class="circle only-border" href="#" title="HTML 5">
                      <SiHtml5 stroke="1" size={24} />
                    </a>
                  </li>
                  <li>
                    <a class="circle only-border" href="#" title="CSS 3">
                      <SiCss3 stroke="1" size={24} />
                    </a>
                  </li>
                  <li>
                    <a class="circle only-border" href="#" title="Blockchain Ethereum">
                      <FaEthereum stroke="1" size={24} />
                    </a>
                  </li>

                  <li>
                    <a class="circle only-border" href="#" title="Solidity SmartContract">
                      <SiSolidity stroke="1" size={24} />
                    </a>
                  </li>
                </ul>
              </div>

              <p
                class="description mt
              -30"
              >
                Tecnologias utilizadas nesta página.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
