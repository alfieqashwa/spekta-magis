import { CardCarousel } from "./ui/carousel-card";

export const CardCaroursalMerchandise = () => {
  const images = [
    { src: "/merchandise/gelang.jpg", alt: "Gelang" },
    { src: "/merchandise/sticker.jpg", alt: "Sticker" },
    { src: "/merchandise/t-shirt.jpg", alt: "T-shirt" },
    { src: "/merchandise/ticket.jpg", alt: "Ticket" },
    { src: "/merchandise/tote-bag-1.jpg", alt: "Tote Bag 2" },
    { src: "/merchandise/tote-bag-2.jpg", alt: "Tote Bag 2" },
    { src: "/merchandise/tumbler.jpg", alt: "Tumbler" },
  ];

  return (
    <div className="w-full">
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  );
};
