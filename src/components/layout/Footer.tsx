import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4 text-glow">MLHK<span className="text-white/40">.</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed">Innovative Tech Solutions for Modern Businesses</p>
            <p className="text-gray-500 mt-3 text-sm">Shajapur, Madhya Pradesh, India</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-white">Services</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <Link href="/services" className="block hover:text-[#00F5FF] transition">Web Development</Link>
              <Link href="/services" className="block hover:text-[#00F5FF] transition">Mobile Apps</Link>
              <Link href="/services" className="block hover:text-[#00F5FF] transition">Digital Marketing</Link>
              <Link href="/services" className="block hover:text-[#00F5FF] transition">IT Consultancy</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-white">Company</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <Link href="/about" className="block hover:text-[#00F5FF] transition">About Us</Link>
              <Link href="/portfolio" className="block hover:text-[#00F5FF] transition">Portfolio</Link>
              <Link href="/blog" className="block hover:text-[#00F5FF] transition">Blog</Link>
              <Link href="/contact" className="block hover:text-[#00F5FF] transition">Contact</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-white">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-[#00F5FF]/20 hover:text-[#00F5FF] transition"><FaFacebook size={18} /></a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-[#00F5FF]/20 hover:text-[#00F5FF] transition"><FaTwitter size={18} /></a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-[#00F5FF]/20 hover:text-[#00F5FF] transition"><FaLinkedin size={18} /></a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-[#00F5FF]/20 hover:text-[#00F5FF] transition"><FaInstagram size={18} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2024 MLHK Infotech. Founded by <span className="text-[#00F5FF]">Hariom Vishwkarma</span>. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#00F5FF] transition">Privacy</Link>
            <Link href="#" className="hover:text-[#00F5FF] transition">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
