export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-green-100 to-green-300 text-green-800">
            <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-lg font-semibold animate-pulse">Memuat data, harap tunggu...</p>
        </div>
    );
}
