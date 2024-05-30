export default function Center({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center pb-[114px] pt-28 text-[30px] font-bold md:pb-[67px] md:text-[38px] lg:py-[144px] lg:pt-72">
      {children}
    </div>
  );
}
