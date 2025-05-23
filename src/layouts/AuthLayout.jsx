// Mengimpor Outlet dari react-router-dom untuk menampilkan halaman anak (nested route)
import { Outlet } from "react-router-dom";

// Komponen AuthLayout: digunakan sebagai layout khusus halaman login, register, dll
export default function AuthLayout() {
    return (
        // Wrapper utama: membuat layout full screen dan menengahkan kontennya secara vertikal dan horizontal
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            // Menambahkan gambar latar belakang secara inline style
            style={{
                backgroundImage: "url('https://file-cdn.sider.ai/u/U03VH4LWYJW/file/50e5f12c-0d3c-4270-ba69-e00704aa8b3d/19698c645b048.png?Key-Pair-Id=K344F5VVSSM536&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9maWxlLWNkbi5zaWRlci5haS8qL1UwM1ZINExXWUpXLyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3NDg5MjMwNDN9fX1dfQ__&Signature=gKMpoABJaK7Q4JkdJQiPaAwE3HR1ifevv5Xn4IkGtsC7LXWbG13p8VIVwFqw2~t3SgTlLdvYDQaJaYLOqy5R8SwF0y1cz1InKlxv9o1LjpJMWFUmDuxvFdbV1pLCcNMI-tbcByJi8YS559EJ~ngbQ-anlA5KZukg2kVppnS8uo2jGvsDU3flyEJ-HrTP-6cRFfJAVfCiQZ4T1YFEjC5ZIFjGsFGwr3dr6zCWiT2EMYUxM7IviriYCrZ3FEvyFgf7ftKcFx9Kz25nWipfIh2dRsWYlbzcQEHMIcZrqp6vV84WGUR~PAzVVAIQUU6PNXqNiAx~TExmCSfbz0lLrH~WpA__')" // Gambar daun sebagai background
            }}
        >
            {/* Kontainer konten form login/register */}
            <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg w-full max-w-sm">
                {/* Outlet akan menampilkan halaman sesuai dengan rute yang cocok, misalnya Login atau Register */}
                <Outlet />
            </div>
        </div>
    );
}
