import AppleIcon from "../assets/icons/apple.png";
import BannerImg from "../assets/banner.png";

export var Banner = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          id="banner"
          className="flex flex-col w-[80vw] h-screen justify-start items-start p-[8rem] gap-4"
        >
          <h1 className="text-4xl text-white font-bold">
            Ready To Get Started?
          </h1>
          <p className="text-white w-[50%]">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
          <button className="bg-white text-black">
            <div className="flex flex-row p-4 gap-2 justify-center items-center rounded-lg">
              <p>Download Now</p> <img src={AppleIcon} alt="" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
