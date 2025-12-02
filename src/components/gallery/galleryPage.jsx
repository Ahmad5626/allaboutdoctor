"use client";
import { useState } from "react";

const gallery = [
  "/assets/img/gallery/48AF922B-3CB8-4279-B23B-A602371D09D9.webp",
  "/assets/img/gallery/IMG_6967.webp",
  "/assets/img/gallery/IMG_0204-scaled.jpg",
  "/assets/img/gallery/IMG_0231-scaled.jpg",
  "/assets/img/gallery/IMG_0235-scaled.jpg",
  "/assets/img/gallery/IMG_2722-scaled.jpg",
  "/assets/img/gallery/IMG_2742.jpg",
  "/assets/img/gallery/IMG_2743.jpg",
  "/assets/img/gallery/IMG_2844-scaled.jpg",
  "/assets/img/gallery/IMG_2861.jpg",
  "/assets/img/gallery/IMG_2934-scaled.jpg",
  "/assets/img/gallery/IMG_2938-scaled.jpg",
  "/assets/img/gallery/IMG_2952-scaled.jpg",
  "/assets/img/gallery/IMG_2963.jpg",
  "/assets/img/gallery/IMG_3048.jpg",
  "/assets/img/gallery/IMG_3049.jpg",
  "/assets/img/gallery/IMG_3050.jpg",
  "/assets/img/gallery/IMG_3140-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_3184.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_4904-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_4921-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_4922-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_4933-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_4942-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_4944-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_4945-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_4960-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_4992-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_4993-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_4997-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_4998-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_4999-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_5009-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_5012-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_5034-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_5035-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_5037-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_5112-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_5113-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_5119-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_5121-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_5122-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_5147-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_5148-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_5151-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_5175-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_5178-scaled.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_5234-1.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_5236.jpg",
//   "https://allaboutdoctor.in/wp-content/uploads/2025/02/IMG_5237.jpg"
];


export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
        {gallery.map((item, index) => (
          <div
            key={index}
            className="break-inside-avoid cursor-pointer"
            onClick={() => setSelectedImg(item)}
          >
            <img
              src={item}
              className="w-full rounded-xl object-cover"
              alt={item}
            />
         
          </div>
        ))}
      </div>

      {/* Fullscreen Image Popup */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-xl"
          />
        </div>
      )}
    </div>
  );
}
