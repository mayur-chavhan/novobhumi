import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/novobhumi-logo.png";
import { AMAZON_AFFILIATE_LINK } from "../../constants/links";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Benefits", href: "/benefits" },
  { label: "Products", href: "/#products" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`mx-auto mt-2 sm:mt-3 w-[96%] sm:w-[94%] max-w-7xl rounded-2xl sm:rounded-3xl border px-4 sm:px-8 py-3 sm:py-5 backdrop-blur-lg transition-all duration-300 ${
          isScrolled
            ? "border-earth-200 bg-cream/95 shadow-soft"
            : "border-earth-200/50 bg-cream/60"
        }`}
        aria-label="Primary"
      >
        <div className="flex items-center justify-between gap-6">
          <Link
            to="/"
            className="flex items-center gap-3 min-h-[44px]"
            onClick={closeMenu}
            aria-label="Novobhumi home"
          >
            <img
              src={logo}
              alt="Novobhumi logo"
              className="h-10 w-auto sm:h-14 md:h-16"
              loading="lazy"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-8 text-base font-semibold text-soil-800">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="rounded-full px-4 py-2.5 transition-colors duration-200 hover:bg-earth-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={AMAZON_AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              <ShoppingCart size={20} />
              Buy from Amazon
            </a>
          </div>

          <button
            type="button"
            className="rounded-full bg-white/70 p-3.5 text-soil-800 transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-600 lg:hidden active:scale-95"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-5 border-t border-earth-200/60 pt-5 lg:hidden"
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between rounded-xl bg-white/80 px-5 py-4 text-base font-semibold text-soil-800 transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-600 active:scale-[0.98]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href={AMAZON_AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 active:scale-[0.98]"
              >
                <ShoppingCart size={20} />
                Buy from Amazon
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
