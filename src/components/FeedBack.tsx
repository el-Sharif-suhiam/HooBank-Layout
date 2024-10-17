import React from "react";
import { feedback } from "../constents";
import { quotes } from "../assets";

function FeedBack() {
  const [hoveredCard, setHoveredCard] = React.useState("feedback-1");
  return (
    <div className="mt-40 relative flex gap-9 justify-between flex-col ">
      <div className=" absolute w-[50%] h-[100%] robot-blue-layer opacity-70 rounded-[50%] right-[-30%] z-0"></div>
      <div className="flex flex-col md:flex-row justify-between gap-10 z-10">
        <h2 className="text-5xl leading-[76.8px] text-white max-w-[600px] ">
          What people are saying about us{" "}
        </h2>
        <p className="text-dimWhite text-[18px] leading-[30px] font-adel max-w-[600px] md:text-[20px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex justify-between flex-wrap items-center z-10">
        {feedback.map((feed) => (
          <div
            key={feed.id}
            className={`px-10 py-[60px] rounded-[20px] ${
              hoveredCard === feed.id ? "bg-black-gradient" : ""
            } max-w-[370px] `}
            onMouseOver={() => setHoveredCard(feed.id)}
          >
            <img src={quotes} alt="quotes" width={42.6} />
            <p className="text-[18px] leading-8 text-white mt-10 max-w-[290px] min-h-[128px]">
              {feed.content}
            </p>
            <div className="flex mt-7">
              <img
                src={feed.img}
                alt="picture image"
                width={48}
                className=" rounded-[50%] mr-4"
              />
              <div>
                <h5 className="text-white text-[20px] font-normal">
                  {feed.name}
                </h5>
                <h6 className="opacity-50 text-white text-base leading-6">
                  {" "}
                  {feed.title}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedBack;
