export default function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-white to-indigo-50">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
        Supercharge your workflow with <span className="text-indigo-600">AIboost</span>
      </h1>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        AIboost helps you generate, optimize, and automate tasks — so you can focus on what truly matters.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700">
          Start Free Trial
        </button>
        <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50">
          Learn More
        </button>
      </div>
    </section>
  );
}
