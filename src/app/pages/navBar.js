import "../styles/navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <a href="/"></a>
          <img src="/assets/navbarLogo.png" alt="Logo" />
        </li>
        <li>
          <a href="/">Main</a>
        </li>
        <li>
          <a href="/">Galery</a>
        </li>
        <li>
          <a href="/">Proyects</a>
        </li>
        <li>
          <a href="/">Certifications</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}
