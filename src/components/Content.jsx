import Content1 from "../assets/content-1.png";
import Content2 from "../assets/content-2.png";
import Content3 from "../assets/content-3.png";
import Content4 from "../assets/content-4.png";
import StarIcon from "../assets/icons/star.png";
import HexagonIcon from "../assets/icons/hexagon.png";
import CubeIcon from "../assets/icons/cube.png";
import NotifIcon from "../assets/icons/notif.png";
import Start2Icon from "../assets/icons/star2.png";
import person1 from "../assets/people/person1.png";
import person2 from "../assets/people/person2.png";
import person3 from "../assets/people/person3.png";
import person4 from "../assets/people/person4.png";
import person5 from "../assets/people/person5.png";

export var Content = () => {
  return (
    <>
      {/* #############  Section 1   ############# */}
      <div id="features" className="flex flex-row justify-center items-center">
        <img src={Content1} alt="" className="" />
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-[#FF5555] text-xl">FEATURES</h2>
            <h1 className="font-bold text-6xl">UiFry Premium</h1>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 font-bold">
              <img src={StarIcon} alt="" />
              <h2 className="font-bold text-2xl">Budgeting Intervals</h2>
            </div>
            <p className="text-[#808080] font-semibold">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 font-bold">
              <img src={HexagonIcon} alt="" />
              <h2 className="font-bold text-2xl">Budgeting Intervals</h2>
            </div>
            <p className="text-[#808080] font-semibold">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 font-bold">
              <img src={CubeIcon} alt="" />
              <h2 className="font-bold text-2xl">Budgeting Intervals</h2>
            </div>
            <p className="text-[#808080] font-semibold">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </div>
      </div>

      {/* #############  Section 2   ############# */}
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col gap-5 mx-20">
          <div>
            <h3 className="text-[#FF5555] text-xl">ADVANTAGES</h3>
            <h1 className="font-bold text-6xl">Why Choose UiFry?</h1>
          </div>
          <div className="flex flex-row items-center gap-5">
            <img src={NotifIcon} alt="" />
            <h2 className="font-bold text-2xl">Clever Notifications</h2>
          </div>
          <p className="text-[#808080] font-semibold">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
        <img src={Content2} alt="" />
      </div>

      {/* #############  Section 3   ############# */}
      <div className="flex flex-row justify-center items-center">
        <img src={Content3} alt="" />
        <div className="flex flex-col gap-5 mx-20">
          <div className="flex flex-row items-center gap-5">
            <img src={Start2Icon} alt="" />
            <h2 className="font-bold text-2xl">Fully Customizable</h2>
          </div>
          <p className="text-[#808080] font-semibold">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>

      {/* #############  Section 4   ############# */}
      <div className="flex flex-row justify-center items-center">
        <img src={Content4} alt="" />
        <div className="flex flex-col gap-5 mx-20">
          <h1 className="font-bold text-3xl">
            The Best Financial Accounting App Ever!
          </h1>

          <p className="text-[#808080] font-semibold">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <div className="people flex flex-row gap-2 items-center *:h-[3rem] *:opacity-50">
            <img src={person1} alt="" className="selected" />
            <img src={person2} alt="" className="" />
            <img src={person3} alt="" className="" />
            <img src={person4} alt="" className="" />
            <img src={person5} alt="" className="" />
          </div>
          <p className="font-medium text-xl">Nick Jonas</p>
        </div>
      </div>
    </>
  );
};
