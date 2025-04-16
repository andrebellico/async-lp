// src/components/about/ImageSection.tsx
import React from "react";
import Image from "next/image";

const ImageSection = () => {
  return (
    <section>
      <Image
        src="/people.avif"
        alt="Equipe colaborando" // Added a more descriptive alt text
        width={1200}
        height={1} // Consider adjusting height if needed for layout
        priority
        className="w-full rounded-2xl"
      />
    </section>
  );
};

export default ImageSection;
