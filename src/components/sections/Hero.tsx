export function Hero() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
          Welcome to MyStarter
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Your Next.js + Tailwind App Router starter with Header, Footer, Hero & 404.
        </p>
        <a
          href="#"
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
