import { CONTACT, FACEBOOK, INSTAGRAM, TIKTOK } from "@/constants/contact";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export const Footer = () => (
  <footer className="fixed bottom-0 z-[150] h-12 w-full bg-black/70 pt-1">
    <SocialLinks />
    <Copyright />
  </footer>
);

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-evenly space-x-3 px-4 md:justify-center">
      <section>
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <FaInstagram className="size-6 text-[#E4405F]" />
          <span className="hidden text-sm font-medium md:block">
            spektamagis
          </span>
        </a>
      </section>
      <a className="text-muted-foreground hidden font-semibold md:block">|</a>
      <section>
        <a
          href={TIKTOK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <FaTiktok className="size-6 text-[#EE1D52]" />
          <span className="hidden text-sm font-medium md:block">
            @spektamagis_
          </span>
        </a>
      </section>
      <a className="text-muted-foreground hidden font-semibold md:block">|</a>
      <section>
        <a
          href={FACEBOOK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <FaFacebook className="size-6 text-[#1877F2]" />
          <span className="hidden text-sm font-medium md:block">
            spektamagis
          </span>
        </a>
      </section>
      <a className="text-muted-foreground hidden font-semibold md:block">|</a>
      <section>
        <a
          href={CONTACT}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <FaWhatsapp className="size-6 text-[#25D366]" />
          <span className="hidden text-sm font-medium md:block">
            0852 85 999 565
          </span>
        </a>
      </section>
    </div>
  );
};

const Copyright = () => (
  <p className="text-muted-foreground my-0.5 text-center font-mono text-xs font-semibold whitespace-nowrap md:text-sm">
    &copy; {new Date().getFullYear()} Spektamagis. All rights reserved.
  </p>
);
