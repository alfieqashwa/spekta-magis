import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Footer = () => (
  <div className="absolute bottom-0">
    <div className="flex gap-4 justify-end items-center p-4">
      <section className="flex items-center space-x-2">
        <FaInstagram className="text-rose-500 size-6" />
        <span className="text-sm font-medium">Spektamagis</span>
      </section>
      <p>|</p>
      <section className="flex items-center space-x-2">
        <FaWhatsapp className="text-rose-500 size-6" />
        <span className="text-sm font-medium">0852 85 999 565</span>
      </section>
    </div>
  </div>
);
