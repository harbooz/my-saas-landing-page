export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-sm">
      <h1 className="text-xl font-bold text-indigo-600">AIboost</h1>
      <ul className="hidden md:flex space-x-6">
        <li><a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a></li>
        <li><a href="#pricing" className="text-gray-600 hover:text-indigo-600">Pricing</a></li>
        <li><a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a></li>
      </ul>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">Get Started</button>
    </nav>
  );
}
