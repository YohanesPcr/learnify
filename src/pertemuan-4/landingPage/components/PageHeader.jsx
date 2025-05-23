// File: components/PageHeader.jsx
export default function PageHeader({ title, subtitle }) {
    return (
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-10 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
        <p className="text-lg md:text-xl font-light">{subtitle}</p>
      </div>
    );
  }