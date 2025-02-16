import HTMLFlipBook from "react-pageflip";
import data from "../../data/fliping-book/data.json"; // Import data dari JSON

function FlipBook() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Memories Flipbook</h1>
      <div className="shadow-2xl">
        <HTMLFlipBook
          width={400} // Lebar flipbook
          height={600} // Tinggi flipbook
          size="stretch"
          minWidth={300}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1200}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="flipbook"
          style={{}} // Tambahkan style sebagai objek kosong
          startPage={0} // Halaman awal
          drawShadow={true} // Tampilkan shadow
          flippingTime={1000} // Durasi animasi flip (dalam ms)
          usePortrait={true} // Mode portrait
          startZIndex={0} // Z-index awal
          autoSize={false} // Auto size
          clickEventForward={false} // Forward click event
          useMouseEvents={true} // Gunakan mouse events
          swipeDistance={30} // Jarak swipe untuk flip
          showPageCorners={false} // Tampilkan sudut halaman
          disableFlipByClick={false} // Nonaktifkan flip dengan klik
        >
          {data.map((page, index) => (
            <div key={index} className="page bg-yellow-50 p-8">
              {page.type === "image" ? (
                <div className="flex flex-col items-center">
                  <img
                    src={page.content}
                    alt={`Page ${index + 1}`}
                    className="w-full h-auto max-h-[500px] object-cover rounded-lg"
                  />
                  {page.caption && (
                    <p className="mt-4 text-lg font-semibold text-gray-700">
                      {page.caption}
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-xl text-gray-700 text-center">{page.content}</p>
              )}
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default FlipBook;