import { gridItems } from "@/data";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { TracingBeam } from "./ui/TracingBeam";
export default function Grid() {
  return (
    <section id="about">
      <TracingBeam className="hidden sm:block p-6">
        <BentoGrid>
          {gridItems.map(
            ({
              id,
              title,
              description,
              className,
              img,
              imgClassName,
              titleClassName,
              spareImg,
            }) => (
              <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
              />
            )
          )}
        </BentoGrid>
      </TracingBeam>
    </section>
  );
}
