import { CardCarousel } from "./ui/carousel-card";

export const CardCaroursalMerchandise = ({
  images,
}: {
  images: { src: string; alt: string }[];
}) => {
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
