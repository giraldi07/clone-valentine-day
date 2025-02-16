import FlipBook from "../components/new-comp/FlipBook"; // Sesuaikan path dengan struktur folder Anda

function Fliping() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 flex flex-col items-center justify-center p-4">
      {/* Judul dengan Tema Valentine */}
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8 text-center" style={{ fontFamily: "Lobster Two, cursive" }}>
        Our Love Story Flipbook
      </h1>

      {/* Deskripsi */}
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl" style={{ fontFamily: "Dancing Script, cursive" }}>
        Every page tells a story of our love, laughter, and unforgettable moments. Flip through and relive our journey together.
      </p>

      {/* Container Flipbook */}
      <div className="w-full max-w-4xl mx-auto">
        <FlipBook />
      </div>

      {/* Tombol Kembali */}
      <button
        onClick={() => window.history.back()} // Kembali ke halaman sebelumnya
        className="mt-8 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
        style={{ fontFamily: "Lobster Two, cursive" }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default Fliping;