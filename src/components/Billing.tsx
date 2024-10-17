import { bill, apple, google } from "../assets";
function Billing() {
  return (
    <div className="mt-40 relative flex flex-col-reverse md:flex-row gap-9 justify-between items-center">
      <div className="absolute w-[35%] h-[70%] bottom-[-20%] opacity-20 left-[-30%] z-0 md:left-[-40%]  rotate-0 pink-gradient rounded-[50%]"></div>
      <div className="absolute w-[35%] h-[70%] top-[-40%]   opacity-20 left-[-30%] md:left-[-40%]  z-[1] white-gradient  rounded-[50%]"></div>
      <img src={bill} alt="billing image" width={650} className="z-10" />
      <div className="max-w-[600px] z-10">
        <h2 className="text-5xl leading-[76.8px] font-semibold text-white">
          Easily control your billing & invoicing.
        </h2>
        <p className="font-normal text-[18px] leading-7 text-dimWhite ">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex gap-8 mt-12">
          <img
            src={apple}
            alt="app store download"
            className="w-[129px] h-[42px]"
          />
          <img src={google} alt="play store download" />
        </div>
      </div>
    </div>
  );
}

export default Billing;
