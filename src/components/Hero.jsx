import PlayIcon from "../assets/icons/play_icon.png";
import HeroFlag from "../assets/data_hero.png";
import PhonesHero from "../assets/phones_hero.png";

export var Hero = () => {
  return (
    <div className="flex flex-row justify-center items-center p-10 pt-40">
      <div id="left">
        <h1 className="text-5xl font-bold">
          <p>Make The Best</p>
          <p>Financial Decisions</p>
        </h1>
        <br />
        <p className="w-[40vw]">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <br />
        <div id="cta" className="flex flex-row gap-4">
          <button className="p-6 bg-black text-white rounded-md">
            Get Started →
          </button>
          <button className="flex flex-row  gap-4 items-center justify-center p-6 rounded-md">
            <img src={PlayIcon} alt="" /> Get Started →
          </button>
        </div>
        <img src={HeroFlag} alt="" className="w-[35rem]" />
      </div>
      <div id="right">
        <img src={PhonesHero} alt="" className="h-[45rem]" />
      </div>
    </div>
  );
};
