import { socialMedia } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

export default function Contact() {
  return (
    <div className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          I&apos;d love to <span className="text-purple">work</span> with you.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss and develop something
          nice and efficient.
        </p>
        <a href="mailto:adnankhanofficial029@gmail.com">
          <MagicButton
            title="Contact Me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-12 flex-row sm:flex-col justify-between items-center mb-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Thanks for visiting.
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-10">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 p-2 cursor-pointer flex justify-center items-center bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.url} target="_blank">
                <img src={info.img} alt="icons" width={30} height={30} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
