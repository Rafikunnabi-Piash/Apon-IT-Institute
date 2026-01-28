
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Info, 
  BookOpen, 
  CheckCircle, 
  LayoutDashboard, 
  Menu, 
  X,
} from 'lucide-react';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import VerifyPage from './pages/VerifyPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboard from './pages/AdminDashboard';

/**
 * LOGO CONFIGURATION
 * To use your own JPG/PNG logo:
 * 1. Set 'useImage' to true.
 * 2. Set 'path' to your image file (e.g., "/assets/logo.jpg").
 */
export const LOGO_CONFIG = {
  useImage: true, // Change to true to use a JPG/PNG file
  path: 'Assets/l.png', // Replace with your actual file path
  siteName: 'Apon IT'
};
/**
 * SIGNATURE CONFIGURATION
 * To use your own signature JPG/PNG:
 * 1. Set 'useImage' to true.
 * 2. Set 'path' to your image file.
 */
export const SIGNATURE_CONFIG = {
  useImage: true, // Change to true to use a JPG/PNG signature
  path: 'Assets/sig.png', // Replace with your signature image path
  name: 'Apon' // Default authority name
};

export const AppLogo = ({ className = "h-12", showText = true }) => {
  if (LOGO_CONFIG.useImage) {
    return (
      <div className="flex items-center gap-2">
        <img src={LOGO_CONFIG.path} alt={LOGO_CONFIG.siteName} className={className} />
       
      </div>
    );
  }

  
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');
  

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Courses', path: '/courses', icon: BookOpen },
    { name: 'Verify', path: '/verify', icon: CheckCircle },
  ];

  if (isAdminPath && location.pathname !== '/admin/login') return null;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <AppLogo />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.name}
              </Link>
            ))}
            <Link 
              to="/admin/login" 
              className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2"
            >
              <LayoutDashboard className="w-4 h-4" />
              Portal
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/admin/login" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 bg-indigo-50"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');
  if (isAdminPath) return null;
  

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="mb-4 block">
              <AppLogo />
            </Link>
            <p className="text-slate-400 max-w-sm">
             শিল্প-প্রাসঙ্গিক প্রশিক্ষণ, পরামর্শদাতা এবং বিশ্বব্যাপী স্বীকৃত সার্টিফিকেশনের মাধ্যমে পরবর্তী প্রজন্মের আইটি পেশাদারদের ক্ষমতায়ন করা।
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-indigo-400 transition-colors">Courses</Link></li>
              <li><Link to="/verify" className="hover:text-indigo-400 transition-colors">Verification</Link></li>
              <li><Link to="/admin/login" className="hover:text-indigo-400 transition-colors">Admin Login</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-slate-400 mb-2 text-sm">aponit94@gmail.com</p>
            <p className="text-slate-400 mb-2 text-sm">+880 1571135061, +880 1600263160</p>
            <p className="text-slate-400 text-xs">পলাশবাড়ী বাসস্ট্যান্ড, এস. এম. টাওয়ার, স্বপ্ন সুপার শপ এর বিপরীত পাশে, আশুলিয়া, সাভার, ঢাকা। </p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Apon IT Training Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/verify" element={<VerifyPage />} />
            <Route path="/verify/:id" element={<VerifyPage />} />
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
