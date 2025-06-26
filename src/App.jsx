import './assets/tailwind.css';

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Loading from './components/Loading';
import Categories from './components/Categories';
import InstuctorDetail from './pages/InstuctorDetail';
import ContactUs from './pages/ContactUs';
import RegisterPaketForm from './pages/RegisterPaketForm';

// Lazy load pages and layouts
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const HeroSection = React.lazy(() => import("./pages/HeroSection"));
const InstuctorList = React.lazy(() => import("./pages/InstuctorList"));
const BlogList = React.lazy(() => import("./pages/BlogList"));
const FaqPage = React.lazy(() => import("./pages/FaqPage"));
const Error403 = React.lazy(() => import("./error/Error403"));
const Error400 = React.lazy(() => import("./error/Error400"));
const Error401 = React.lazy(() => import("./error/Error401"));
const MainLayout = React.lazy(() => import("./layouts/MainLayouts"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const CourseDetail = React.lazy(() => import("./pages/Coursedetail"));
const MyLearning = React.lazy(() => import("./pages/MyLearning"));
const Courses = React.lazy(() => import("./pages/Courses")); // ✅ Tambahkan halaman Courses baru

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          {/* Route dengan Main Layout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HeroSection />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/instuctor" element={<InstuctorList />} />
            <Route path="/instuctor/:id" element={<InstuctorDetail />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/courses" element={<Courses />} /> {/* ✅ Rute Courses ditambahkan */}
            <Route path="/course/:title" element={<CourseDetail />} />
            <Route path="/register/:slug" element={<RegisterPaketForm />} />
            <Route path="/my-learning" element={<MyLearning />} />
            <Route path="/401" element={<Error401 />} />
            <Route path="/403" element={<Error403 />} />
            <Route path="*" element={<Error400 />} />
          </Route>

          {/* Route untuk halaman autentikasi */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
