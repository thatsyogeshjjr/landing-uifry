import { FaqCard } from "./FaqCard";

export var FAQ = () => {
  return (
    <div className="m-20">
      <div className="flex flex-col m-5">
        <h2 className="text-[#FF5555]">FAQ</h2>
        <h1 className="text-4xl font-bold ">
          Frequently Asked <br />
          Questions
        </h1>
      </div>
      <div className="faq-cards flex flex-wrap gap-2 w-screen sm:*:w-[40vw] items-center">
        <FaqCard type="r" />
        <FaqCard />
        <FaqCard />
        <FaqCard type="r" />
        <FaqCard type="r" />
        <FaqCard />
      </div>
    </div>
  );
};
