import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorder";

export default function Experience() {
  return (
    <div className="p-20" id="experiences">
      <h1 className="heading">
        My previous
        <span className="text-purple">experiences</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((item) => {
          <Button>
            <div>
              <img
                src={item.thumbnail}
                alt={item.thumbnail}
                className="lg:w-32 md:w-20"
              />
            </div>
          </Button>;
        })}
      </div>
    </div>
  );
}
