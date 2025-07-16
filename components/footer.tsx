import { CONTACT, INSTAGRAM } from "@/constants/contact";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => (
  <footer className="absolute bottom-0 z-10">
    <div className="flex space-x-4 justify-end items-center px-4">
      <section>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <FaInstagram className="text-[#EB2D2E] size-6 animate-pulse-slow" />
          <span className="text-xs md:text-sm font-medium">Spektamagis</span>
        </a>
      </section>
      <a className="text-gray-300 font-semibold">|</a>
      <section>
        <a
          href={CONTACT}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <FaWhatsapp className="text-[#EB2D2E] animate-pulse-slow size-6" />
          <span className="text-xs md:text-sm font-medium">
            0852 85 999 565
          </span>
        </a>
      </section>
    </div>
    <Copyright />
  </footer>
);

const Copyright = () => (
  <p className="text-xs md:text-sm font-semibold text-center mt-2 mb-1 text-muted-foreground font-mono">
    &copy; {new Date().getFullYear()} Spektamagis. All rights reserved.
  </p>
);
