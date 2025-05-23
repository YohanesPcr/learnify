export default function TailwindCSS() {  
    return (  
      <div>  
        {/* ✅ Heading utama dengan border dan margin */}
        <h1 className="border m-4">Belajar Tailwind CSS 4</h1>  

        {/* ✅ Tombol dengan warna biru, teks putih, padding, margin, border radius, dan shadow */}
        <button className="bg-blue-500 text-white px-4 py-2 mx-4 rounded shadow-lg">Click Me</button>  

        {/* ✅ Memanggil komponen tambahan untuk mendemonstrasikan fitur Tailwind */}
        <Spacing/> 
        <Typography/>
        <BorderRadius/>
        <BackgroundColors/>
        <FlexboxGrid/>
        <ShadowEffects/>
      </div>  
    );  
    
    // ✅ Komponen untuk mendemonstrasikan spacing (padding & margin)
    function Spacing(){
        return (
            <div className="bg-white shadow-lg p-6 m-4 rounded-lg">
                <h2 className="text-lg font-semibold">Card Title</h2>
                <p className="mt-2 text-gray-600">Ini adalah contoh penggunaan padding dan margin di Tailwind.</p>
            </div>
        );
    }

    // ✅ Komponen untuk mendemonstrasikan penggunaan Typography (font, ukuran teks, warna)
    function Typography(){
        return (
            <div>
                <h1 className="text-3xl font-bold text-blue-600">Tailwind Typography</h1>
                <p className="text-gray-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
            </div>
        );
    }

    // ✅ Komponen untuk mendemonstrasikan penggunaan border radius pada tombol
    function BorderRadius(){
        return (
            <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-lg"> Klik Saya </button>
        );
    }

    // ✅ Komponen untuk mendemonstrasikan penggunaan warna latar belakang (background colors)
    function BackgroundColors(){
        return(
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">Tailwind Colors</h3>
                <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
            </div>
        );
    }

    // ✅ Komponen untuk mendemonstrasikan penggunaan Flexbox dan Grid dalam Tailwind
    function FlexboxGrid(){
        return (
            <nav className="flex justify-between bg-gray-800 p-4 text-white">
                <h1 className="text-lg font-bold">MyWebsite</h1>
                <ul className="flex space-x-4">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        );
    }

    // ✅ Komponen untuk mendemonstrasikan efek bayangan (shadow effects) dan efek hover
    function ShadowEffects(){
        return (
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
                <h3 className="text-xl font-semibold">Hover me!</h3>
                <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
            </div>
        );
    }
}  
