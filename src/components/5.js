import React, { useState, useEffect, useRef } from "react";

const Sport = () => {
  const [carouselContent, setCarouselContent] = useState("");
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlidesRef = useRef(0);

  // Load carousel content
  useEffect(() => {
    fetch("/test1.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load HTML file: ${response.statusText}`);
        }
        return response.text();
      })
      .then((htmlString) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");
        const carousel = doc.querySelector("#carousel-container");
        if (carousel) {
          setCarouselContent(carousel.outerHTML);
          totalSlidesRef.current = carousel.querySelectorAll(".carousel-item").length;
        } else {
          console.error("Carousel container not found in the loaded HTML");
        }
      })
      .catch((error) => console.error("Error fetching HTML file:", error));
  }, []);

  // Reload iframe content on navigation
  useEffect(() => {
    if (carouselRef.current) {
      const iframes = carouselRef.current.querySelectorAll("iframe");
      iframes.forEach((iframe, index) => {
        iframe.style.visibility = index === currentSlide ? "visible" : "hidden";
        if (index === currentSlide) iframe.src = iframe.src; // Force reload
      });
    }
  }, [currentSlide]);

  // Navigation controls
  const goToPrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? totalSlidesRef.current - 1 : prev - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === totalSlidesRef.current - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="athlete-section" style={{ background: "#f4f4f9" }}>
      <h3 style={{ textAlign: "center", color: "#4CAF50" }}>Sport Highlights</h3>
      <div
        ref={carouselRef}
        style={{
          position: "relative",
          maxWidth: "1200px",
          margin: "auto",
          overflow: "hidden",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          dangerouslySetInnerHTML={{ __html: carouselContent }}
          style={{ width: "100%", height: "100%" }}
        ></div>

        {/* Carousel Controls */}
        <div
          className="carousel-controls"
          style={{
            position: "absolute",
            top: "50%",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            transform: "translateY(-50%)",
          }}
        >
          <button
            onClick={goToPrevSlide}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
              borderRadius: "50%",
            }}
          >
            &lt;
          </button>
          <button
            onClick={goToNextSlide}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
              borderRadius: "50%",
            }}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sport;
