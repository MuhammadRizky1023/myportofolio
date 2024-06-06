import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 200) {
        closeMenu(); // Ubah disini
      }
    };
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu(); // Ubah disini
    }
  }, []);
  

  const handleWhatsAppLink = () => {
    const phoneNumber = '088707749560'; // Ganti dengan nomor WhatsApp Anda

    // Buat tautan WhatsApp dengan nomor yang ditentukan
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    // Arahkan pengguna ke tautan WhatsApp
    window.open(whatsappLink, '_blank');
};

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>
        
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Organize"
              className="navbar--content"
            >
              Organization
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
        
        </ul>
      </div>
      <Link
    onClick={(event) => {
        event.preventDefault(); // Mencegah perilaku default dari tautan
        handleWhatsAppLink(); // Panggil fungsi untuk mengarahkan ke WhatsApp
        closeMenu(); // Tutup menu setelah tombol ditekan
    }}
    activeClass="navbar--active-content"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    to="Contact"
    className="btn btn-outline-primary"
>
    Contact Me
</Link>
    </nav>
  );
}

export default Navbar;
