import { useEffect, useState } from "react";
import ReactCurvedText from "react-curved-text";

const CurvedText = () => {
  const [fontSize, setFontSize] = useState(90); // Ukuran font default

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // Jika lebar layar < 768px (mobile)
        setFontSize(40); // Ukuran font lebih kecil untuk mobile
      } else {
        setFontSize(90); // Ukuran font default untuk desktop
      }
    };

    // Panggil fungsi handleResize saat komponen dimount dan saat window di-resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Bersihkan event listener saat komponen di-unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ReactCurvedText
      width={400} // Lebar area teks
      height={120} // Tinggi area teks (disesuaikan dengan lengkungan)
      cx={200} // Titik pusat X
      cy={150} // Titik pusat Y (atur agar lebih rendah untuk melengkung ke bawah)
      rx={200} // Radius horizontal (sesuaikan agar tidak terlalu melengkung)
      ry={70} // Radius vertikal untuk menyesuaikan bentuk lengkungan
      startOffset={40} // Mengatur posisi teks di jalur lengkungan
      reversed={true} // Membuat teks melengkung ke bawah
      text="This is For"
      textProps={{
        style: {
          fontFamily: "Lobster Two, cursive",
          fontSize: fontSize, // Ukuran font dinamis
          fontWeight: "bold",
          fill: "#ee746e", // Warna teks
        },
      }}
      textPathProps={{
        startOffset: "25%",
        textAnchor: "middle",
      }}
    />
  );
};

export default CurvedText;