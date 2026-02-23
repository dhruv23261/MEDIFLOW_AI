const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 m-0 text-gray-300 px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            MediFlow<span className="text-orange-500">AI</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400">
            AI-powered hospital scheduling system that optimizes
            appointments, reduces conflicts, and improves workflow efficiency.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">
              Features
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Pricing
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Demo
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Blog
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Careers
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>Email: dhruv23261@gmail.com</li>
            <li>Phone: +91 9910170815</li>
            <li>Location: India</li>
          </ul>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MediFlowAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;