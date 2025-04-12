import VideoBox from "../composite/VieBox";
import LayoutFlor from "./LayoutFlor";

export default function HomeView() {
  return (
    <LayoutFlor>
        <div className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20">
          <VideoBox src='/src/assets/bg-vid.mp4' poster='Bg-video' />
        </div>

      {/* Main Logo/Text */}
      <main className="flex items-center justify-center h-screen pt-50">
        <h1 className="font-skill text-9xl md:text-[15rem] lg:text-[20rem] xl:text-[25rem] font-bold tracking-tighter w-full text-center">
          Eniola
        </h1>
      </main>
    </LayoutFlor>
  );
}