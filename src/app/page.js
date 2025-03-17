export default function Home() {
  const labs = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <nav className="mx-auto max-w-xs space-y-4">
        {labs.map((labNumber) => (
          <a
            key={labNumber}
            href={`/labs${labNumber}`}
            className="block transform rounded-lg bg-white px-6 py-4 text-center shadow-md transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:text-white hover:shadow-lg"
          >
            <span className="text-lg font-semibold">
              Лабораторная работа {labNumber}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
}