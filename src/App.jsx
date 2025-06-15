// Import file Tailwind CSS untuk styling global
import './assets/tailwind.css';  

// Import React dan Suspense untuk lazy loading
import React, { Suspense } from 'react';

// Import Router, Routes, dan Route dari react-router-dom untuk mengatur navigasi halaman
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  

// Import komponen loading yang ditampilkan saat menunggu lazy component dimuat
import Loading from './components/Loading';
import Categories from './components/Categories';
import MentorDetail from './pages/MentorDetail';
import ContactUs from './pages/ContactUs';
import RegisterPaketForm from './pages/RegisterPaketForm';


// Komponen-komponen yang awalnya di-import secara langsung tapi dikomentari untuk digantikan dengan lazy loading
// import AuthLayout from './layouts/AuthLayout';
// import Register from './pages/auth/Register';
// import Forgot from './pages/auth/Forgot';
// import BlogList from './pages/BlogList';
// import FaqPage from './pages/FaqPage';
// import Error403 from './error/Error403';
// import Error400 from './error/Error400';
// import Error401 from './error/Error401';
// import MainLayout from './layouts/MainLayouts';
// import Login from './pages/auth/Login';

// Menggunakan React.lazy untuk menunda load komponen sampai dibutuhkan (lazy loading)
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const HeroSection = React.lazy(() => import("./pages/HeroSection"));
const MentorList = React.lazy(() => import("./pages/MentorList"));
const BlogList = React.lazy(() => import("./pages/BlogList"));
const FaqPage = React.lazy(() => import("./pages/FaqPage"));
const Error403 = React.lazy(() => import("./error/Error403"));
const Error400 = React.lazy(() => import("./error/Error400"));
const Error401 = React.lazy(() => import("./error/Error401"));
const MainLayout = React.lazy(() => import("./layouts/MainLayouts"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const CourseDetail = React.lazy(() => import("./pages/Coursedetail"));

// Fungsi utama App
function App() {  
  return (  
    // Suspense digunakan untuk menangani loading saat komponen-komponen lazy sedang dimuat
    <Suspense fallback={<Loading />}> 

      {/* Router digunakan untuk membungkus semua Route (bagian navigasi) */}
      <Router> 

        {/* Routes adalah tempat daftar rute aplikasi didefinisikan */}
        <Routes>

          {/* Rute yang menggunakan layout utama */}
          <Route element={<MainLayout />}>
            {/* Halaman utama */}
            <Route path="/" element={<HeroSection />} />
            {/* Halaman blog */}
            <Route path="/blog" element={<BlogList />} />
            {/* Halaman FAQ */}
            <Route path="/faq" element={<FaqPage />} />
            {/* Halaman daftar mentor */}
            <Route path="/mentor" element={<MentorList />} />
             <Route path="/contact" element={<ContactUs/>} />
            {/* Halaman error khusus */}
            <Route path="/401" element={<Error401 />} />
            <Route path="/403" element={<Error403 />} />
            {/* Halaman error untuk route yang tidak ditemukan */}
            <Route path="*" element={<Error400 />} />
            <Route path="/categories" element={<Categories />} />
<Route path="/course/:title" element={<CourseDetail />} />
     <Route path="/mentor/:id" element={<MentorDetail />} />
         <Route path="/register/:slug" element={<RegisterPaketForm />} />
    
          </Route>

          {/* Rute yang menggunakan layout autentikasi */}
          <Route element={<AuthLayout/>}>
            {/* Halaman login */}
            <Route path="/login" element={<Login />} />
            {/* Halaman register */}
            <Route path="/register" element={<Register/>} />
            {/* Halaman lupa password */}
            <Route path="/forgot" element={<Forgot/>} />
          </Route>

        </Routes>
      </Router>
    </Suspense>
  );  
}  

// Mengekspor komponen App agar bisa digunakan di index.js
export default App;  
