
// HelloWorld.jsx
export default function Learnify() {
    return (
        <div>
            
            <ArtikelDetail />
            <QnASection />
            <ListProduct />
        </div>
    );
}

function ArtikelDetail() {
    return (
        <div className="card">
            <h2>Artikel learnify</h2>
            <ArtikelGambar src="img/el.webp" alt="Gambar Artikel" />
            <ArtikelTanggal tanggal="10 Maret 2025" />
            <ArtikelItem 
                judul="Pilar Utama dalam Transformasi Pendidikan" 
                isi="Dalam dunia pendidikan, murid atau siswa bukan hanya sekadar penerima ilmu, tetapi juga merupakan elemen utama dalam proses belajar-mengajar. Mereka adalah individu yang bertumbuh, berkembang, dan berperan aktif dalam membentuk masa depan melalui pengetahuan yang mereka serap. Di era digital seperti sekarang, konsep pembelajaran telah berkembang pesat, dari metode konvensional di dalam kelas hingga platform berbasis teknologi yang memberikan fleksibilitas bagi siswa untuk belajar di mana saja dan kapan saja. Kemampuan murid dalam beradaptasi dengan perubahan ini menjadi kunci utama dalam menciptakan lingkungan belajar yang lebih dinamis, inovatif, dan relevan dengan kebutuhan zaman.

                Setiap murid memiliki gaya belajar yang berbeda-beda, ada yang lebih efektif memahami materi melalui pendekatan visual, ada yang lebih nyaman dengan metode auditori, dan ada pula yang lebih memahami konsep melalui praktik langsung. Inilah yang membuat peran guru semakin kompleks dalam memastikan bahwa setiap siswa dapat memperoleh pembelajaran secara optimal. Namun, di balik semua itu, kunci utama keberhasilan belajar tetap terletak pada motivasi dan keinginan murid itu sendiri. Ketika seorang siswa memiliki rasa ingin tahu yang tinggi dan semangat untuk terus menggali ilmu, maka proses belajar akan menjadi pengalaman yang lebih bermakna dan tidak hanya sekadar kewajiban akademis.
                
                Di dalam lingkungan sekolah, siswa tidak hanya belajar mengenai teori dan akademik, tetapi juga mengembangkan berbagai keterampilan sosial dan karakter yang membentuk kepribadian mereka di masa depan. Interaksi dengan teman sebaya, diskusi dalam kelompok, hingga partisipasi dalam kegiatan ekstrakurikuler memberikan pengalaman berharga dalam membangun kepercayaan diri, kerja sama tim, serta kemampuan berpikir kritis dan kreatif. Pendidikan bukan hanya tentang menghafal pelajaran, tetapi lebih dari itu, bagaimana seorang murid mampu menerapkan ilmu yang didapatkan dalam kehidupan sehari-hari. Oleh karena itu, sistem pendidikan modern saat ini semakin menekankan pada pendekatan berbasis proyek dan pembelajaran kontekstual agar siswa tidak hanya menjadi individu yang cerdas secara akademis, tetapi juga memiliki kecerdasan emosional dan sosial yang tinggi."
            />
        </div>
    );
}

function ArtikelItem({ judul, isi }) {
    return (
        <div className="artikel-item">
            <ArtikelJudul judul={judul} />
            <ArtikelIsi isi={isi} />
        </div>
    );
}

function ArtikelGambar({ src, alt }) {
    return <img className="artikel-gambar" src="img/el.webp" alt="el" width="400" height="250"/>;
}

function ArtikelTanggal({ tanggal }) {
    return <p className="artikel-tanggal">Diposting pada: {tanggal}</p>;
}

function ArtikelJudul({ judul }) {
    return <h3 className="artikel-judul">{judul}</h3>;
}

function ArtikelIsi({ isi }) {
    return <p className="artikel-isi">{isi}</p>;
}


function QnASection() {
    return (
        <div className="card">
            <h2>Q&A Siswa</h2>
            <QnAGambar />
            <QnAItem pertanyaan="Bagaimana cara meningkatkan nilai ujian?" jawaban="Rutin latihan soal dan memahami konsep dasar." tanggal="12 Maret 2025" />
            <QnAItem pertanyaan="Apakah belajar di malam hari efektif?" jawaban="Tergantung preferensi, tapi istirahat cukup itu penting!" tanggal="10 Maret 2025" />
            <QnAItem pertanyaan="Bagaimana cara mengatasi stres belajar?" jawaban="Ambil istirahat, olahraga, dan kelola waktu dengan baik." tanggal="8 Maret 2025" />
            <QnAItem pertanyaan="Apakah penting belajar kelompok?" jawaban="Belajar kelompok bisa membantu memahami materi lebih baik." tanggal="5 Maret 2025" />
        </div>
    );
}

function QnAItem({ pertanyaan, jawaban, tanggal }) {
    return (
        <div className="qna-item">
            <QnATanggal tanggal={tanggal} />
            <QnAPertanyaan pertanyaan={pertanyaan} />
            <QnAJawaban jawaban={jawaban} />
        </div>
    );
}

function QnAGambar() {
    return <img className src="img/5.png" alt="el" width="400" height="250"/>;
}

function QnATanggal({ tanggal }) {
    return <p className="qna-tanggal">Tanggal: {tanggal}</p>;
}

function QnAPertanyaan({ pertanyaan }) {
    return <h4 className="qna-pertanyaan">{pertanyaan}</h4>;
}

function QnAJawaban({ jawaban }) {
    return <p className="qna-jawaban">{jawaban}</p>;
}
function ListProduct() {
    return (
        <div className="card">
            <h2>Rekomendasi Buku untuk Siswa</h2>
            <ProductItem 
                nama="Matematika Cerdas" 
                harga="Rp50.000"
                gambar="img/1.jpg"
                width={100}
                height={150}
                tema="Buku edukasi untuk meningkatkan pemahaman matematika."
            />
            <ProductItem 
                nama="Belajar Bahasa Inggris" 
                harga="Rp45.000"
                gambar="img/2.jpg"
                width={100}
                height={150}
                tema="Panduan lengkap belajar bahasa Inggris."
            />
            <ProductItem 
                nama="Panduan Ilmu Pengetahuan Alam" 
                harga="Rp60.000"
                gambar="img/3.jpeg"
                width={100}
                height={150}
                tema="Materi lengkap tentang IPA untuk siswa."
            />
            <ProductItem 
                nama="Sejarah Indonesia" 
                harga="Rp55.000"
                gambar="img/4.jpeg"
                width={100}
                height={150}
                tema="Menjelajahi sejarah bangsa Indonesia secara mendalam."
            />
        </div>
    );
}

function ProductItem({ nama, harga, gambar, width, height, tema }) {
    return (
        <div className="product-item">
            <ProductGambar gambar={gambar} width={width} height={height} />
            <ProductNama nama={nama} />
            <ProductHarga harga={harga} />
            <ProductTema tema={tema} />
        </div>
    );
}

function ProductGambar({ gambar, width, height }) {
    return <img src={gambar} alt="Gambar Buku" width={width} height={height} className="product-img" />;
}

function ProductNama({ nama }) {
    return <h4>{nama}</h4>;
}

function ProductHarga({ harga }) {
    return <p>Harga: {harga}</p>;
}

function ProductTema({ tema }) {
    return <p className="product-tema">{tema}</p>;
}


