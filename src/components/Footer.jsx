import Logo from "../assets/logo.png";
import MailIcon from "../assets/icons/mail.png";
import PhoneIcon from "../assets/icons/phone.png";

export var Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-8 items-center w-screen">
        <div className="flex flex-row text-lg gap-12 w-screen justify-center">
          <div className="flex flex-col gap-5 w-max">
            <img src={Logo} alt="" className="w-max" />
            <div className="flex gap-2">
              <img src={MailIcon} alt="" />
              <h2>Help@Frybix.com</h2>
            </div>
            <div className="flex gap-2">
              <img src={PhoneIcon} alt="" />
              <h2>+1234 456 678</h2>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-medium text-4xl">Links</h3>
            <p>Home</p>
            <p>About Us</p>
            <p>Bookings</p>
            <p>Blog</p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-medium text-4xl">Legal</h3>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-medium text-4xl">Product</h3>
            <p>Take Tour</p>
            <p>Live Chat</p>
            <p>Reviews</p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-medium text-4xl">Newsletter</h3>
            <p>Stay Up To Date</p>
            <div className="flex">
              <input
                placeholder="Your email"
                className="p-2 border-none m-none"
              />
              <button className="px-8 py-2 text-white bg-black rounded-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div id="cc-info" className="p-10">
          <h3>Copyright 2022 uifry.com all rights reserved</h3>
        </div>
      </div>
    </>
  );
};
