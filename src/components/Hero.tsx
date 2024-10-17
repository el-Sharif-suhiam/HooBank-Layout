import { robot, discount } from "../assets";
function Hero() {
  return (
    <header className="" id="home">
      <main className="flex mt-20 justify-between relative items-center gap-1 flex-col md:flex-row ">
        <div className="xl:px-0 sm:px-16 px-6 ">
          <div className="discount-bg mt-5 mb-5 flex items-center text-[14px] sm:text-base rounded-[10px] w-fit py-[6px] px-[14px]">
            <img src={discount} alt="discount image" height={32} width={32} />
            <p className="text-dimWhite">
              <span className="text-white">20%</span> DISCOUNT FOR{" "}
              <span className="text-white">1 MONTH </span> ACCOUNT
            </p>
          </div>
          <div className="relative">
            <div className="absolute w-[40%] h-[30%] rounded-full left-[-70%] hero-white-gradient top-[50%]"></div>
            <h1 className="text-white w-full text-[40px] sm:text-[72px] sm:leading-[100.8px] max-w-[670px] leading-[66.8px] font-semibold">
              The Next <span className="text-gradient">Generation</span> Payment
              Method.
            </h1>
            <a
              href="#"
              className="text-gradient bg-clip-padding get-start hidden sm:flex"
            >
              <p className="text-gradient">
                Get{" "}
                <img
                  src="/src/assets/arrow-up.svg"
                  alt="arrow up svg"
                  className="inline-block"
                />{" "}
                <br />
                Started
              </p>
            </a>
          </div>

          <p className="mt-10 text-dimWhite max-w-[483px] mr-5 font-normal  text-[18px] leading-[30.6px] ">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs.
            <br />
            We examine annual percentage rates, annual fees.
          </p>
        </div>
        <div className="relative">
          <img
            className=" w-[100%] z-[5] h-[100%] relative sm:w-[669px] sm:h-[674px] mt-[50px] xl:mt-0 robot-animation  "
            src={robot}
            alt="robot holding credit cards image"
          />
          <div className="absolute rounded-full z-0 w-[20%] opacity-40 h-[35%] left-[150px] top-[100px] pink-gradient"></div>
          <div className="absolute z-[1] w-[50%] h-[40%] rounded-full opacity-70 left-[20%] bottom-[20px]  robot-pink-layer"></div>
          <div className="absolute z-[2] w-[60%] h-[60%] rounded-full opacity-60 top-[80px] left-[15%] white-gradient"></div>
          <div className="absolute z-[3] w-[40%] h-[60%] bottom-[80px] opacity-50 rounded-full robot-blue-layer right-[55px]"></div>
        </div>
      </main>
      <div className="mt-36 flex gap-5 flex-1 flex-col items-center sm:flex-row justify-between sm:px-16 px-6">
        <div className="flex items-center gap-4 flex-col md:flex-row">
          <h4 className="text-white text-[40px] font-semibold">3800+</h4>{" "}
          <h5 className="text-gradient  text-[20px]">USER ACTIVE</h5>
        </div>
        <div className="flex items-center gap-4 flex-col md:flex-row">
          <h4 className="text-white text-[40px] font-semibold ">230+</h4>{" "}
          <h5 className="text-gradient  text-[20px]">TRUSTED BY COMPANY</h5>
        </div>
        <div className="flex items-center gap-4 flex-col md:flex-row">
          <h4 className="text-white text-[40px] font-semibold">$230M+</h4>{" "}
          <h5 className="text-gradient  text-[20px]">TRANSACTION</h5>
        </div>
      </div>
    </header>
  );
}

export default Hero;
