import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorder";

export default function Experience() {
  return (
    <div className="p-20" id="experiences">
      <h1 className="heading">
        My previous <span className="text-purple">experiences</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((item) => (
          <Button
            key={item.id}
            duration={2000 + Math.floor(Math.random() * 3000)}
            borderRadius="1.75rem"
            className="text-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={item.thumbnail}
                alt={item.thumbnail}
                className="lg:w-32 md:w-20"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl text-bold">
                  {item.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {item.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
