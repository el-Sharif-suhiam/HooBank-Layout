import StartButton from "./StartButton";
import { card } from "../assets";
function Card() {
  return (
    <div className="mt-40 flex gap-9 justify-between flex-col md:flex-row items-center ">
      <div className="max-w-[622px] flex flex-col items-center md:items-start">
        <h2 className="text-5xl leading-[76.8px] text-white ">
          Find a better card deal in few easy steps.{" "}
        </h2>
        <p className="text-dimWhite text-[18px] leading-[30px] font-adel mt-6">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <StartButton />
      </div>
      <img src={card} alt="card image" width={515} className="mt-7 md:mt-0" />
    </div>
  );
}

export default Card;
