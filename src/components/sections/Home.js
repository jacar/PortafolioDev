const Home = () => {
  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                Hola<span>.</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">Soy</span>
              <span className="intro animated-layer">
              UX/UI Diseñador Front-end Desarrollador Freelance en Colombia
              </span>
            </span>
            <span>
              <span className="animated-layer">Armando</span>
            </span>
          </h1>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );
};
export default Home;
