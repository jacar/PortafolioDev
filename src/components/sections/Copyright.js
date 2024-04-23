const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Armando Ovalle J</span>
        <span>
          Diseñado por{" "}
          <a
            target="_blank"
            href="https://webcincodev.com/"
          >
            @webcincodev
          </a>
        </span>
        <ul>
          <li>
            <a href="https://github.com/jacar">
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a href="https://github.com/jacar">
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=+573052891719&text=Quiero%20informaci%C3%B3n...">
              <i className="fa-brands fa-whatsapp" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/Aovallejacome">
              <i className="fa-brands fa-facebook" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
