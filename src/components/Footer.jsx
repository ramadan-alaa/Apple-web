import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-10 px-6 bg-neutral-900 text-gray-300">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Message */}
        <div className="text-sm space-y-1">
          <p>
            More ways to shop:{" "}
            <span className="underline text-blue-400 hover:text-blue-300 cursor-pointer transition">
              Find an Apple Store
            </span>{" "}
            or{" "}
            <span className="underline text-blue-400 hover:text-blue-300 cursor-pointer transition">
              other retailer
            </span>{" "}
            near you.
          </p>
          <p>Or call 000800-040-1966</p>
        </div>

        {/* Divider */}
        <div className="bg-neutral-700 my-6 h-px w-full" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © 2025 Apple Inc. All rights reserved.
          </p>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {footerLinks.map((link, i) => (
              <span
                key={link}
                className="text-sm text-gray-300 hover:text-white cursor-pointer transition"
              >
                {link}
                {i !== footerLinks.length - 1 && (
                  <span className="text-gray-500 mx-1">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
