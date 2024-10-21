import { useState } from "react";

// Definisikan tipe untuk media
type MediaType = {
  id: number;
  type: "foto" | "video";
  url: string;
  thumbnail?: string; // Tambahkan properti thumbnail untuk video
};

const Gallery = () => {
  const [filter, setFilter] = useState<"all" | "foto" | "video">("all");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState<MediaType | null>(null);

  const handleFilter = (type: "all" | "foto" | "video") => {
    setFilter(type);
  };

  const mediaData: MediaType[] = [
    {
      id: 1,
      type: "foto",
      url: "/gallery/gal1.jpeg",
    },
    {
      id: 2,
      type: "foto",
      url: "/gallery/gal2.jpeg",
    },
    {
      id: 3,
      type: "video",
      url: "/gallery/gVideo.mp4",
      thumbnail: "/gallery/gal3.png", // Thumbnail untuk video
    },
  ];

  const openLightbox = (media: MediaType) => {
    setActiveMedia(media);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setActiveMedia(null);
  };

  const filteredData =
    filter === "all"
      ? mediaData
      : mediaData.filter((item) => item.type === filter);

  return (
    <div
      id="gallery"
      data-aos="fade-right"
      data-aos-duration="1000"
      style={{ paddingTop: 75 }}
    >
      <h1 className="text-center mb-5 text-customBlueText">Galeri</h1>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => handleFilter("all")}
          className={`btn ${filter === "all" ? "active" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => handleFilter("foto")}
          className={`btn ${filter === "foto" ? "active" : ""}`}
        >
          Foto
        </button>
        <button
          onClick={() => handleFilter("video")}
          className={`btn ${filter === "video" ? "active" : ""}`}
        >
          Video
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {filteredData.map((media) => (
          <div
            key={media.id}
            className="media-item"
            onClick={() => openLightbox(media)}
          >
            {media.type === "foto" ? (
              <img
                src={media.url}
                alt="Foto"
                className="w-full h-64 object-cover rounded cursor-pointer"
              />
            ) : (
              <img
                src={media.thumbnail}
                alt="Video Thumbnail"
                className="w-full h-64 object-cover rounded cursor-pointer"
              />
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && activeMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            {/* Tombol close, pastikan memiliki z-index yang lebih tinggi */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white text-4xl z-50"
            >
              &times;
            </button>

            {activeMedia.type === "foto" ? (
              <img
                src={activeMedia.url}
                alt="Foto"
                className="max-w-screen-md max-h-screen-md"
              />
            ) : (
              <video
                controls
                autoPlay
                className="max-w-screen-md max-h-screen-md"
              >
                <source src={activeMedia.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
