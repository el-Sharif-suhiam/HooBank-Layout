import StartButton from "./StartButton";

function Service() {
  return (
    <div className="mt-40 rounded-[20px] flex flex-wrap  p-10 sm:px-24 md:py-[72px] bg-last-box justify-between items-center">
      <div>
        <h2 className="text-5xl leading-[67.2px] text-white max-w-[670px] ">
          Let’s try our service now!
        </h2>
        <p className="text-dimWhite text-[18px] leading-[28.8px] max-w-[445px] mt-6">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <StartButton />
    </div>
  );
}

export default Service;
