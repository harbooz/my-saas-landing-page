const features = [
  { title: "AI Automation", desc: "Automate repetitive workflows with AI." },
  { title: "Smart Insights", desc: "Understand trends through intelligent analytics." },
  { title: "Easy Integration", desc: "Connect with your favorite tools effortlessly." },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Powerful Features</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        {features.map((f, i) => (
          <div key={i} className="p-6 border rounded-lg hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
