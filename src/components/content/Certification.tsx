import React, { useMemo, useState } from "react";

// ================= CERTIFICATION IMAGES =================

import springBootCert from "@/assets/certification/B_SpringBoot.jpg";
import cicdCert from "@/assets/certification/A_CICD_Beginner.jpg";
import ubuntuWslCert from "@/assets/certification/C_Ubuntu with WSL Certificate.png";
import reactPortfolioCert from "@/assets/certification/D_ReactPortfolio.jpg";
import dataStudioCert from "@/assets/certification/DataStudio.jpg";
import excelCert from "@/assets/certification/Z_Excel.jpg";
import uiuxFigmaCert from "@/assets/certification/UIUXFigma.jpg";
import uiuxFigma2Cert from "@/assets/certification/UIUXFigma2.jpg";

// =========================================================
// CERTIFICATION DATA
//
// Ordered to prioritize software development,
// backend engineering, and technical tooling.
// =========================================================

interface ICertification {
  image: string;
  title: string;
  category: string;
}

const certificates: ICertification[] = [
  {
    image: springBootCert,
    title: "Spring Boot",
    category: "Backend Development",
  },
  {
    image: cicdCert,
    title: "CI/CD Fundamentals",
    category: "DevOps",
  },
  {
    image: ubuntuWslCert,
    title: "Ubuntu & WSL",
    category: "Development Environment",
  },
  {
    image: reactPortfolioCert,
    title: "React Portfolio",
    category: "Frontend Development",
  },
  {
    image: dataStudioCert,
    title: "Google Data Studio",
    category: "Data & Analytics",
  },
  {
    image: excelCert,
    title: "Microsoft Excel",
    category: "Productivity & Data",
  },
  {
    image: uiuxFigmaCert,
    title: "UI/UX Design with Figma",
    category: "UI/UX Design",
  },
  {
    image: uiuxFigma2Cert,
    title: "Figma UI/UX",
    category: "UI/UX Design",
  },
];

const Certification: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = useMemo(() => {
    return showAll ? certificates : certificates.slice(0, 3);
  }, [showAll]);

  return (
    <section className="certifications" id="certifications">
      <div className="certifications__container">

        {/* ================= CERTIFICATIONS — HEADER ================= */}

        <div className="certifications__header">
          <p className="certifications__eyebrow">CERTIFICATIONS</p>

          <h2 className="certifications__title">
            Learning beyond
            <br />
            <span>the classroom.</span>
          </h2>

          <p className="certifications__description">
            Courses and certifications supporting my continued development
            across backend engineering, web development, DevOps, and software
            tooling.
          </p>
        </div>

        {/* ================= CERTIFICATIONS — GRID ================= */}

        <div className="certifications__grid">
          {visibleCertificates.map((certificate, index) => (
            <article
              className="certification-card"
              key={certificate.title}
            >
              <div className="certification-card__image">
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="certification-card__footer">
                <span className="certification-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="certification-card__info">
                  <span className="certification-card__label">
                    {certificate.title}
                  </span>

                  <span className="certification-card__category">
                    {certificate.category}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= CERTIFICATIONS — TOGGLE ================= */}

        {certificates.length > 3 && (
          <div className="certifications__actions">
            <button
              type="button"
              className="certifications__toggle"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
            >
              {showAll
                ? "Show less ↑"
                : `View all certifications (${certificates.length}) ↓`}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Certification;