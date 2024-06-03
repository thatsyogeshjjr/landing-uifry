import Logo from "../assets/logo.png";

export var Navbar = () => {
  return (
    <div className=" p-2 w-[80vw] rounded-lg absolute top-10 drop-shadow-lg">
      {/* [rem.] fixed property to keep it in place is removed to achieve the deseried effect from figma */}
      <nav className="flex flex-row justify-between">
        <div
          id="left"
          className="flex flex-row gap-10 justify-center items-center"
        >
          <img src={Logo} alt="" className="w-max h-max" />
          <ul className="flex flex-row gap-4 text-lg">
            <li>
              <div className="selected">Home</div>
            </li>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Features</li>
          </ul>
        </div>
        <button className="bg-black text-slate-50 rounded-md p-4 mr-5 px-10">
          Download
        </button>
      </nav>
    </div>
  );
};
