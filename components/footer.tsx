export default function Footer() {
  return (
    <footer className="bg-[#172337] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">ABOUT</h3>
            <ul className="space-y-2 text-sm">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">HELP</h3>
            <ul className="space-y-2 text-sm">
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation & Returns</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">CONSUMER POLICY</h3>
            <ul className="space-y-2 text-sm">
              <li>Return Policy</li>
              <li>Terms Of Use</li>
              <li>Security</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">SOCIAL</h3>
            <ul className="space-y-2 text-sm">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>YouTube</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
          <p>&copy; 2025 Fake Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}