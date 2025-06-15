export default function AlertBox({ type = "info", message }) {
  const color = {
    info: "bg-blue-100 text-blue-700",
    success: "bg-green-100 text-green-700",
    error: "bg-red-100 text-red-700",
  }[type];

  return (
    <div className={`p-4 rounded mt-4 text-sm ${color}`}>
      {message}
    </div>
  );
}
