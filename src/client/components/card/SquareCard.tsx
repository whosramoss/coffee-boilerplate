type SquareCardProps = {
  url: string;
  name: string;
};

export default function SquareCard({ url, name }: SquareCardProps) {
  return (
    <div className="group  relative h-[450px] w-[450px] overflow-hidden rounded-lg bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-stretch">
        <p className="from-white/20 to-white/0 bg-gradient-to-br p-8 text-6xl font-black  text-white backdrop-blur-sm">
          {name}
        </p>
      </div>
    </div>
  );
}
