import { CONTACT, INSTAGRAM } from "@/constants/contact";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => (
  <div className="absolute bottom-0 z-10">
    <div className="flex gap-4 justify-end items-center p-4">
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
      <a className="text-gray-300">|</a>
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
  </div>
);
