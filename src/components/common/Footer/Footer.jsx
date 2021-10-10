// Components
import Logo from "../Logo/Logo";

export default function Footer() {
  return (
    <div className="footer">
      <p className="footer__text">
        Realizado por{" "}
        <a
          className="footer__link"
          href="https://www.instagram.com/manuel_entrena"
        >
          @Manuel Entrena
        </a>
      </p>
      <Logo />
    </div>
  );
}
