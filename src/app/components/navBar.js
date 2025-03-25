import "../styles/navbar.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <Link href="/"></Link>
          <img src="/assets/navbarLogo.png" alt="Logo" />
        </li>
        <li>
          <Link href="/">Main</Link>
        </li>
        <li>
          <Link href="/galery">Galery</Link>
        </li>
        <li>
          <Link href="/proyects">Proyects</Link>
        </li>
        <li>
          <Link href="/certifications">Certifications</Link>
        </li>
        <li>
          <Link href="/contactUs">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
