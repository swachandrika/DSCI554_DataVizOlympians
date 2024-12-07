// // // // import React, { useState, useEffect } from "react";

// // // // const AthleteSection = () => {
// // // //   const [htmlContent, setHtmlContent] = useState("");

// // // //   useEffect(() => {
// // // //     // Fetch the content of test2.html
// // // //     fetch("/test2.html")
// // // //       .then((response) => {
// // // //         if (!response.ok) {
// // // //           throw new Error(`Failed to load HTML file: ${response.statusText}`);
// // // //         }
// // // //         return response.text();
// // // //       })
// // // //       .then((data) => {
// // // //         setHtmlContent(data); // Set the fetched HTML content
// // // //       })
// // // //       .catch((error) => console.error("Error fetching HTML file:", error));
// // // //   }, []);

// // // //   return (
// // // //     <section className="athlete-section" style={{ background: "#f4f4f9" }}>
// // // //       <h3 style={{ textAlign: "center", color: "#4CAF50" }}>Athlete Highlights</h3>
// // // //       <div
// // // //         style={{
// // // //           position: "relative",
// // // //           maxWidth: "1200px",
// // // //           margin: "auto",
// // // //           overflow: "hidden",
// // // //           padding: "20px",
// // // //           borderRadius: "8px",
// // // //           boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
// // // //           backgroundColor: "#ffffff",
// // // //         }}
// // // //       >
// // // //         {/* Render the HTML content */}
// // // //         <div
// // // //           dangerouslySetInnerHTML={{ __html: htmlContent }}
// // // //           style={{ width: "100%", height: "100%" }}
// // // //         ></div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default AthleteSection;


// // // // // import React, { useState, useEffect } from "react";

// // // // // const AthleteSection = () => {
// // // // //   const [htmlContent, setHtmlContent] = useState("");

// // // // //   useEffect(() => {
// // // // //     // Fetch the content of test2.html
// // // // //     fetch("/test2.html") // Ensure the path is correct and relative to the public folder
// // // // //       .then((response) => {
// // // // //         if (!response.ok) {
// // // // //           throw new Error(`Failed to load HTML file: ${response.statusText}`);
// // // // //         }
// // // // //         return response.text();
// // // // //       })
// // // // //       .then((data) => {
// // // // //         // Optional: Parse and sanitize the HTML if needed
// // // // //         const parser = new DOMParser();
// // // // //         const doc = parser.parseFromString(data, "text/html");
// // // // //         const sanitizedContent = doc.body.innerHTML; // Get only the body content
// // // // //         setHtmlContent(sanitizedContent); // Set sanitized content
// // // // //       })
// // // // //       .catch((error) => console.error("Error fetching HTML file:", error));
// // // // //   }, []);

// // // // //   return (
// // // // //     <section className="athlete-section" style={{ background: "#f4f4f9" }}>
// // // // //       <h3 style={{ textAlign: "center", color: "#4CAF50" }}>Athlete Highlights</h3>
// // // // //       <div
// // // // //         style={{
// // // // //           position: "relative",
// // // // //           maxWidth: "1200px",
// // // // //           margin: "auto",
// // // // //           overflow: "hidden",
// // // // //           padding: "20px",
// // // // //           borderRadius: "8px",
// // // // //           boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
// // // // //           backgroundColor: "#ffffff",
// // // // //         }}
// // // // //       >
// // // // //         {/* Render the sanitized HTML content */}
// // // // //         <div
// // // // //           dangerouslySetInnerHTML={{ __html: htmlContent }}
// // // // //           style={{ width: "100%", height: "100%" }}
// // // // //         ></div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default AthleteSection;


// // // import React, { useState } from "react";

// // // const AthleteSection = () => {
// // //     const [currentSlide, setCurrentSlide] = useState(0); // State for tracking the current slide
// // //     const totalSlides = 3; // Total number of slides (adjust as necessary)

// // //     const nextSlide = () => {
// // //         setCurrentSlide((currentSlide + 1) % totalSlides); // Move to the next slide
// // //     };

// // //     const prevSlide = () => {
// // //         setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides); // Move to the previous slide
// // //     };

// // //     return (
// // //         <section className="athlete-section" style={{ background: "#f4f4f9", padding: "20px 0" }}>
// // //             <h3 style={{ textAlign: "center", color: "#4CAF50" }}>Athlete Highlights</h3>
// // //             <div className="carousel-container">
// // //                 <div
// // //                     className="carousel"
// // //                     style={{ transform: `translateX(-${currentSlide * 100}%)` }}
// // //                 >
// // //                     {/* Slide 1 */}
// // //                     <div className="carousel-item">
// // //                         <iframe
// // //                             src="medal.html"
// // //                             title="Medal Tracking Visualization"
// // //                             sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
// // //                         ></iframe>
// // //                     </div>
// // //                     {/* Slide 2 */}
// // //                     <div className="carousel-item">
// // //                         <iframe
// // //                             src="country.html"
// // //                             title="Country Tracking Visualization"
// // //                             sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
// // //                         ></iframe>
// // //                     </div>
// // //                     {/* Slide 3 */}
// // //                     <div className="carousel-item">
// // //                         <iframe
// // //                             src="gender.html"
// // //                             title="Gender Tracking Visualization"
// // //                             sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
// // //                         ></iframe>
// // //                     </div>
// // //                 </div>
// // //                 {/* Carousel Controls */}
// // //                 <div className="carousel-controls">
// // //                     <button onClick={prevSlide} aria-label="Previous Slide">&lt;</button>
// // //                     <button onClick={nextSlide} aria-label="Next Slide">&gt;</button>
// // //                 </div>
// // //             </div>
// // //         </section>
// // //     );
// // // };

// // // export default AthleteSection;
// // import React, { useState, useEffect } from "react";

// // const AthleteSection = () => {
// //   const [htmlContent, setHtmlContent] = useState(null);

// //   useEffect(() => {
// //     let isMounted = true; // Prevent unnecessary state updates after unmounting

// //     // Fetch the HTML content only once
// //     fetch("/test2.html") // Ensure the path is correct and matches your directory structure
// //       .then((response) => {
// //         if (!response.ok) {
// //           throw new Error(`Failed to fetch HTML: ${response.statusText}`);
// //         }
// //         return response.text();
// //       })
// //       .then((data) => {
// //         if (isMounted) {
// //           setHtmlContent(data); // Store the HTML content in state
// //         }
// //       })
// //       .catch((error) => console.error("Error fetching HTML:", error));

// //     return () => {
// //       isMounted = false; // Clean up to avoid memory leaks
// //     };
// //   }, []); // Empty dependency array ensures this only runs once

// //   return (
// //     <section
// //       className="athlete-section"
// //       style={{
// //         background: "#f4f4f9",
// //         padding: "20px",
// //         textAlign: "center",
// //       }}
// //     >
// //       <h3 style={{ color: "#4CAF50" }}>Athlete Highlights</h3>
// //       <div
// //         style={{
// //           position: "relative",
// //           maxWidth: "1200px",
// //           margin: "auto",
// //           overflow: "hidden",
// //           borderRadius: "8px",
// //           boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
// //           backgroundColor: "#ffffff",
// //         }}
// //       >
// //         {htmlContent ? (
// //           <div
// //             dangerouslySetInnerHTML={{ __html: htmlContent }}
// //             style={{
// //               width: "100%",
// //               height: "100%",
// //             }}
// //           />
// //         ) : (
// //           <p>Loading...</p> // Optional: Add a loading indicator
// //         )}
// //       </div>
// //     </section>
// //   );
// // };

// // export default AthleteSection;

// import React, { useState, useEffect, useRef } from "react";

// const AthleteSection = () => {
//   const [carouselContent, setCarouselContent] = useState("");
//   const carouselRef = useRef(null); // Reference to the carousel container
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalSlidesRef = useRef(0);

//   // Fetch and set carousel content
//   useEffect(() => {
//     fetch("/test2.html")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Failed to load HTML file: ${response.statusText}`);
//         }
//         return response.text();
//       })
//       .then((htmlString) => {
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(htmlString, "text/html");
//         const carousel = doc.querySelector("#carousel-container");
//         if (carousel) {
//           setCarouselContent(carousel.outerHTML);
//           totalSlidesRef.current = carousel.querySelectorAll(".carousel-item").length;
//         } else {
//           console.error("Carousel container not found in the loaded HTML");
//         }
//       })
//       .catch((error) => console.error("Error fetching HTML file:", error));
//   }, []);

//   // Handle iframe loading visibility
//   useEffect(() => {
//     if (carouselContent) {
//       document.querySelectorAll("iframe").forEach((iframe) => {
//         iframe.onload = () => {
//           iframe.style.visibility = "visible";
//         };
//         iframe.style.visibility = "hidden"; // Initially hidden
//       });
//     }
//   }, [carouselContent]);

//   useEffect(() => {
//     if (carouselRef.current) {
//       const carousel = carouselRef.current.querySelector(".carousel");
//       if (carousel) {
//         carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
//       }
//     }
//   }, [currentSlide]);

//   useEffect(() => {
//     if (carouselRef.current && carouselContent) {
//       const totalSlides = carouselRef.current.querySelectorAll(".carousel-item").length;
//       totalSlidesRef.current = totalSlides;
//     }
//   }, [carouselContent]);

//   const goToPrevSlide = () => {
//     setCurrentSlide((prev) =>
//       prev === 0 ? totalSlidesRef.current - 1 : prev - 1
//     );
//   };

//   const goToNextSlide = () => {
//     setCurrentSlide((prev) =>
//       prev === totalSlidesRef.current - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <section className="athlete-section" style={{ background: "#f4f4f9" }}>
//       <h3 style={{ textAlign: "center", color: "#4CAF50" }}>Athlete Highlights</h3>
//       <div
//         ref={carouselRef}
//         style={{
//           position: "relative",
//           maxWidth: "1200px",
//           margin: "auto",
//           overflow: "hidden",
//           padding: "20px",
//           borderRadius: "8px",
//           boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//           backgroundColor: "#ffffff",
//         }}
//       >
//         <div
//           dangerouslySetInnerHTML={{ __html: carouselContent }}
//           style={{ width: "100%", height: "100%" }}
//         ></div>
//         <div
//           className="carousel-controls"
//           style={{
//             position: "absolute",
//             top: "50%",
//             width: "100%",
//             display: "flex",
//             justifyContent: "space-between",
//             transform: "translateY(-50%)",
//           }}
//         >
//           <button
//             onClick={goToPrevSlide}
//             style={{
//               backgroundColor: "rgba(0, 0, 0, 0.5)",
//               color: "#fff",
//               border: "none",
//               padding: "10px 20px",
//               cursor: "pointer",
//               borderRadius: "50%",
//             }}
//           >
//             &lt;
//           </button>
//           <button
//             onClick={goToNextSlide}
//             style={{
//               backgroundColor: "rgba(0, 0, 0, 0.5)",
//               color: "#fff",
//               border: "none",
//               padding: "10px 20px",
//               cursor: "pointer",
//               borderRadius: "50%",
//             }}
//           >
//             &gt;
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AthleteSection;

import React, { useState, useEffect, useRef } from "react";

const AthleteSection = () => {
  const [carouselContent, setCarouselContent] = useState("");
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlidesRef = useRef(0);

  // Load carousel content
  useEffect(() => {
    fetch("/test2.html")
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
      <h3 style={{ textAlign: "center", color: "#4CAF50" }}>Athlete Highlights</h3>
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

export default AthleteSection;
