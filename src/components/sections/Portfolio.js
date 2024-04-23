import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
            Últimos trabajos
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/project-1.jpg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Tienda Virtual</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Proyecto :
                  </span>
                  <span>E-commerce</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Cliente :
                  </span>
                  <span>Strong Mero Power</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Webmaster :
                  </span>
                  <span>Actualmente </span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> CMS :
                  </span>
                  <span>WordPress</span>
                </li>
              </ul>
            </div>
            <a href="https://www.strongmeropower.com/" target="_blank" className="custom-btn">
              <span>
                Ver Prpyecto <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <div className="videocontainer">
              <iframe
                className="youtube-video"
                src="https://www.youtube.com/embed/p9cd8mEdaEU?enablejsapi=1&version=3&playerapiid=ytplayer"
                allowFullScreen=""
              />
            </div>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Premier Pro</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Proyecto :
                  </span>
                  <span>Ads</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Cliente :
                  </span>
                  <span>Consultorio Dental Colombia</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" />Freelance :
                  </span>
                  <span>12 meses</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>Premier Pro</span>
                </li>
              </ul>
            </div>
            <a href="https://www.consultorioodontologicola78.com/" target="_blank" className="custom-btn">
              <span>
                Ver sitio Web <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <Swiper
              {...salimovSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/project-2.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/project-3.jpg" title="img" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/project-1.jpg" title="img" />
              </SwiperSlide>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Ver todos los proyectos</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Proyectos :
                  </span>
                  <span>WordPress</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Diseños:
                  </span>
                  <span>Web-Logos-Redes-Branding-Seo</span>
                </li>
                <li>
                  <span>
                    <i className="fa fa-desktop" /> Proyectos :
                  </span>
                  <span>Freelance</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Herramientas :
                  </span>
                  <span>Cms-html-css-photoshop-Illustrator-IA</span>
                </li>
              </ul>
            </div>
            <a href="https://webcincodev.com/" target="_blank" className="custom-btn">
              <span>
                Ver + <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <a
              href="https://themeforest.net"
              target="_blank"
              className="external"
            >
              <img
                className="img-fluid"
                src="assets/portfolio/project-3.jpg"
                alt="External Project"
              />
            </a>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Web HLG </h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Proyecto :
                  </span>
                  <span>Diseño y Desarrollo Web</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Cliente :
                  </span>
                  <span>Hlg Remodeling EEUU</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Freelance :
                  </span>
                  <span>6 meses</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> CMS :
                  </span>
                  <span>Wordpress</span>
                </li>
              </ul>
            </div>
            <a href="https://www.hlgremodeling.us/" target="_blank" className="custom-btn">
              <span>
                Ver Proyecto <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Portfolio;
