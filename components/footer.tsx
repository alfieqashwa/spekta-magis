import { CONTACT, INSTAGRAM } from "@/constants/contact";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => (
  <footer className="fixed bottom-0 z-10 w-full bg-black/90">
    <div className="flex items-center justify-center space-x-3 px-4">
      <section>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <FaInstagram className="animate-pulse-slow size-6 text-[#EB2D2E]" />
          <span className="text-xs font-medium md:text-sm">Spektamagis</span>
        </a>
      </section>
      <a className="font-semibold text-gray-300">|</a>
      <section>
        <a
          href={CONTACT}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <FaWhatsapp className="animate-pulse-slow size-6 text-[#EB2D2E]" />
          <span className="text-xs font-medium whitespace-nowrap md:text-sm">
            0852 85 999 565
          </span>
        </a>
      </section>
    </div>
    <Copyright />
  </footer>
);

const Copyright = () => (
  <p className="text-muted-foreground my-0.5 text-center font-mono text-xs font-semibold whitespace-nowrap md:text-sm">
    &copy; {new Date().getFullYear()} Spektamagis. All rights reserved.
  </p>
);
