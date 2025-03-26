import React from "react";
import Image from "next/image";

const Benefits = () => {
  return (
    <section className="w-full mt-12">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="image-container">
          <Image
            src="/benefits.png"
            alt="benefits"
            fill
            className="object-contain pt-3"
          />
        </div>
        {/* <div className="hidden sm:flex h-[500px] relative">
          <Image
            src="/benefits-cropped.svg"
            alt="benefits"
            fill
            className="object-contain"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Benefits;
