import { socialMedia } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

export default function Contact() {
  return (
    <div className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="max-w-full max-h-[100px] opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          I'd love to <span className="text-purple">work</span> with you.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let's discuss and develop something nice and
          efficient.
        </p>
        <a href="mailto:adnankhanofficial029@gmail.com">
          <MagicButton
            title="Contact Me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 flex-row  sm:flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Thanks for visiting.
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 p-3 mx-3"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
