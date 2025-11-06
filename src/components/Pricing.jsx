export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      {["Basic", "Pro", "Enterprise"].map((plan) => (
        <div key={plan} className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-xl font-semibold mb-2">{plan}</h3>
          <p className="mb-4">$XX / month</p>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
            Choose Plan
          </button>
        </div>
      ))}
    </section>
  );
}
