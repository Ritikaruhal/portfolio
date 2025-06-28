export function Button({ children, className }) {
  return (
    <button className={`bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 ${className}`}>
      {children}
    </button>
  );
}