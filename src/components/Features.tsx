import StartButton from "./StartButton";
import { features } from "../constents";
function Features() {
  return (
    <div className="mt-[180px] flex gap-9 justify-between flex-col md:flex-row items-center ">
      <div className="max-w-[622px] flex flex-col items-center md:items-start">
        <h2 className="text-5xl leading-[76.8px] text-white ">
          You do the business, we’ll handle the money.
        </h2>
        <p className="text-dimWhite text-[18px] leading-[30px] font-adel mt-6">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <StartButton />
      </div>
      <div className="">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col md:flex-row mb-[36px] p-5  gap-8 max-w-[600px] ${
              index === 1
                ? "rounded-[20px] bg-feature-box bg-black-gradient box-shadow"
                : ""
            }`}
          >
            <div className="bg-[#09977C1A] rounded-[50%] flex justify-center items-center w-[64px] h-[64px]">
              <img
                src={feature.icon}
                alt="feature image"
                className="w-[34.4px] h-[34.4px] px-8"
              />
            </div>

            <div>
              <h5 className="font-semibold text-[18px] mb-2 text-white">
                {feature.title}
              </h5>
              <p className="font-normal text-dimWhite">{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
