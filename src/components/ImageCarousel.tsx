import React, { useEffect, useRef, useState } from "react";

type Props = { images?: string[]; altPrefix?: string };

export default function ImageCarousel({ images = [], altPrefix = "" }: Props) {
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const deltaX = useRef(0);
  const frameRef = useRef<HTMLDivElement | null>(null);

  const count = images.length;
  const showControls = count > 1;

  useEffect(() => {
    if (index >= count) setIndex(0);
  }, [count, index]);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (!showControls) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setIndex((i) => (i + 1) % count);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setIndex((i) => (i - 1 + count) % count);
      }
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [showControls, count]);

  const onDown = (x: number) => {
    setDragging(true);
    startX.current = x;
    deltaX.current = 0;
  };
  const onMove = (x: number) => {
    if (dragging) deltaX.current = x - startX.current;
  };
  const onUp = () => {
    if (!dragging) return;
    const threshold = (frameRef.current?.offsetWidth || 300) * 0.15;
    if (deltaX.current > threshold) setIndex((i) => (i - 1 + count) % count);
    if (deltaX.current < -threshold) setIndex((i) => (i + 1) % count);
    setDragging(false);
    deltaX.current = 0;
  };

  return (
    <div
      ref={frameRef}
      tabIndex={0}
      className="ic-wrap"
      onMouseDown={(e) => onDown(e.clientX)}
      onMouseMove={(e) => onMove(e.clientX)}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchStart={(e) => onDown(e.touches[0].clientX)}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      onTouchEnd={onUp}
      aria-roledescription="carousel"
      aria-label="Project screenshots"
    >
      <div
        className="ic-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {(images.length ? images : [null]).map((src, i) => (
          <div className="ic-slide" key={i} aria-hidden={i !== index}>
            {src ? (
              <img src={src} alt={`${altPrefix || "Screenshot"} ${i + 1}`} />
            ) : (
              <div className="ic-empty">No screenshots available</div>
            )}
          </div>
        ))}
      </div>

      {showControls && (
        <>
          <button
            className="ic-arrow ic-left"
            aria-label="Previous"
            onClick={() => setIndex((i) => (i - 1 + count) % count)}
          >
            ‹
          </button>
          <button
            className="ic-arrow ic-right"
            aria-label="Next"
            onClick={() => setIndex((i) => (i + 1) % count)}
          >
            ›
          </button>
          <div className="ic-dots" role="tablist">
            {images.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                className={`ic-dot ${i === index ? "is-active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}

     <style>{`
  /* Smaller, responsive container — works for both orientations */
  .ic-wrap {
    position: relative;
    width: 100%;
    height: clamp(220px, 40vh, 480px); /* <= was aspect-ratio:16/9 */
    border-radius: 12px;
    overflow: hidden;
    background: #0f172a0d;
    margin-bottom: 16px;
    outline: none;
  }

  .ic-track { display:flex; height:100%; transition:transform .3s ease; }
  .ic-slide { min-width:100%; height:100%; display:grid; place-items:center; background:#1118270d; }

  /* Let the image size to container height, maintaining aspect ratio */
  .ic-slide img { width: auto; height: 100%; max-height: 100%; object-fit: contain; }

  .ic-empty { color:#6b7280; font-size:.95rem; }

  /* Fix invalid rgba values (need decimals) */
  .ic-arrow {
    position:absolute; top:50%; transform:translateY(-50%);
    width:36px; height:36px; border:none; border-radius:999px;
    background: rgba(17,24,39,0.55); color:#fff; cursor:pointer;
  }
  .ic-left{ left:8px; } .ic-right{ right:8px; }
  .ic-arrow:hover{ background: rgba(17,24,39,0.80); }

  .ic-dots{ position:absolute; bottom:8px; left:0; right:0; display:flex; gap:6px; justify-content:center; }
  .ic-dot{ width:8px; height:8px; border:none; border-radius:999px; background: rgba(17,24,39,0.35); cursor:pointer; }
  .ic-dot.is-active{ background: rgba(17,24,39,0.90); }

  @media (max-width: 520px) {
    .ic-wrap { height: clamp(200px, 36vh, 420px); }
  }
`}</style>

    </div>
  );
}
