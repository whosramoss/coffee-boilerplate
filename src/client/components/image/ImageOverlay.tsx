import { cn } from "@shared/utils";

type ImageOverlayProps = {
  isHovered: boolean;
  image: string;
};

export default function ImageOverlay({ isHovered, image }: ImageOverlayProps) {
  return (
    <>
      <div
        className={cn(
          "absolute hidden h-full w-full flex-col rounded-xl bg-[rgba(0,0,0,0.3)] opacity-0 backdrop-blur-md transition-all duration-[0.3s] ease-[cubic-bezier(0.2,0.65,0.3,0.9)] md:flex",
          { "opacity-100": isHovered },
        )}
      ></div>
      <img
        className="justify-cente h-[308px] w-full rounded-xl bg-primary bg-cover bg-center object-cover sm:h-[496px]"
        src={image}
        alt="image"
      />
    </>
  );
}
