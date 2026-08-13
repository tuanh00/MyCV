import React, { useMemo, useState } from "react";

// Auto-import certificate images from /assets/certification
const certImages = Object.values(
  import.meta.glob("@/assets/certification/*.{png,jpg,jpeg}", {
    eager: true,
    query: "?url",
    import: "default",
  })
) as string[];

const Certification: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = useMemo(() => {
    return showAll ? certImages : certImages.slice(0, 3);
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
            Certifications and technical training supporting my development
            in software engineering, backend development, and DevOps.
          </p>
        </div>

        {/* ================= CERTIFICATIONS — GRID ================= */}

        <div className="certifications__grid">
          {visibleCertificates.map((image, index) => (
            <article className="certification-card" key={image}>
              <div className="certification-card__image">
                <img
                  src={image}
                  alt={`Technical certification ${index + 1}`}
                  loading="lazy"
                />
              </div>

              <div className="certification-card__footer">
                <span className="certification-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="certification-card__label">
                  Technical Certification
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* ================= CERTIFICATIONS — TOGGLE ================= */}

        {certImages.length > 3 && (
          <div className="certifications__actions">
            <button
              type="button"
              className="certifications__toggle"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll
                ? "Show less ↑"
                : `View all certifications (${certImages.length}) ↓`}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Certification;