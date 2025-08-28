import React from "react";
import ImageCarousel from "@/components/ImageCarousel";

// Auto-import every image in /assets/certification (Vite)
const certImages = Object.values(
  import.meta.glob("@/assets/certification/*.{png,jpg,jpeg}", {
    eager: true,
    as: "url",
  })
) as string[];

//Cerf
const Certification: React.FC = () => {
  return (
    <div className="arlo_tm_section" id="certifications">
      <div className="container">
        <div className="arlo_tm_title_holder">
          <h3>Certifications</h3>
        </div>

        {/* Slider */}
        <div className="cert-slider">
          <ImageCarousel images={certImages} altPrefix="Certificate" />
        </div>
      </div>
    </div>
  );
};

export default Certification;
