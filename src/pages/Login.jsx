import React from 'react';
import { 
  RiShieldStarLine, 
  RiShareLine, 
  RiCpuLine, 
  RiUser3Line, 
  RiLock2Line, 
  RiEyeOffLine, 
  RiCustomerService2Line, 
  RiLinkedinFill, 
  RiYoutubeFill, 
  RiCheckboxCircleLine 
} from '@remixicon/react';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col relative font-sans text-gray-800">
      {/* Background Image / Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-blue-100"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Lighter, more transparent overlay: lets the background image show through while keeping text readable */}
        <div className="absolute inset-0 bg-white/20 bg-gradient-to-r from-white/40 via-white/40 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center lg:pr-16 xl:pr-24 mb-12 lg:mb-0">
          {/* Logo */}
          <div className="mb-12 flex items-center">
            <img 
              src="https://mpsedc.mp.gov.in/Uploaded%20Document/header/28072020125926mpsedclogo.png" 
              alt="MPSeDC Logo" 
              className="h-28 object-contain"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] leading-tight mb-6 drop-shadow-sm">
            Empowering Madhya Pradesh<br />
            <span className="text-[#1e3a8a]">Through Technology & Innovation</span>
          </h1>
          
          <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-blue-600 mb-8 rounded-full"></div>

          <p className="text-lg text-gray-800 mb-12 max-w-xl font-medium drop-shadow-sm">
            MPSeDC drives digital transformation, e-governance and technology-led development across the state.
          </p>

          <div className="flex items-center space-x-8 mb-16">
            <div className="flex flex-col items-center">
              <div className="bg-white/60 backdrop-blur-sm p-3 rounded-full mb-3 text-[#1e3a8a] shadow-sm border border-white/40">
                <RiShieldStarLine size={24} />
              </div>
              <span className="text-sm font-bold text-[#1e3a8a] drop-shadow-sm">Secure</span>
            </div>
            <div className="h-12 w-px bg-gray-400/50"></div>
            <div className="flex flex-col items-center">
              <div className="bg-white/60 backdrop-blur-sm p-3 rounded-full mb-3 text-[#1e3a8a] shadow-sm border border-white/40">
                <RiShareLine size={24} />
              </div>
              <span className="text-sm font-bold text-[#1e3a8a] drop-shadow-sm">Reliable</span>
            </div>
            <div className="h-12 w-px bg-gray-400/50"></div>
            <div className="flex flex-col items-center">
              <div className="bg-white/60 backdrop-blur-sm p-3 rounded-full mb-3 text-[#1e3a8a] shadow-sm border border-white/40">
                <RiCpuLine size={24} />
              </div>
              <span className="text-sm font-bold text-[#1e3a8a] drop-shadow-sm">Future Ready</span>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="mt-auto bg-[#1e3a8a]/90 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center max-w-md shadow-xl text-white">
             <div className="mr-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
             </div>
             <div>
               <p className="text-sm font-bold text-white">A Government of Madhya Pradesh Undertaking</p>
               <p className="text-xs text-blue-100 font-medium mt-0.5">Committed to building a Digital, Transparent & Empowered MP</p>
             </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-[480px] flex flex-col justify-center">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 text-gray-800 border border-white/50">
            {/* Gov Logo */}
            <div className="flex items-center justify-center mb-8">
               <img 
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Emblem_of_Madhya_Pradesh.svg/1280px-Emblem_of_Madhya_Pradesh.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail" 
                 alt="Emblem of Madhya Pradesh" 
                 className="w-16 h-16 object-contain mr-4"
               />
               <div>
                 <h2 className="text-xl font-bold text-gray-900">मध्यप्रदेश शासन</h2>
                 <p className="text-[10px] text-gray-500 font-bold tracking-wider">GOVERNMENT OF MADHYA PRADESH</p>
               </div>
            </div>

            <h3 className="text-3xl font-bold text-[#1e3a8a] mb-2 text-center md:text-left">Welcome Back</h3>
            <p className="text-sm text-gray-500 mb-8 text-center md:text-left font-medium">Sign in to continue to your account</p>

            <form>
              <div className="mb-5">
                <label className="block text-sm font-bold text-gray-700 mb-2">User ID / Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <RiUser3Line size={18} />
                  </div>
                  <input 
                    type="text" 
                    className="w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm font-medium"
                    placeholder="Enter User ID or Email"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <RiLock2Line size={18} />
                  </div>
                  <input 
                    type="password" 
                    className="w-full pl-11 pr-11 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm font-medium"
                    placeholder="Enter your password"
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-gray-400 hover:text-gray-600">
                    <RiEyeOffLine size={18} />
                  </div>
                </div>
              </div>

              <button 
                type="button" 
                className="w-full cursor-pointer bg-[#1e3a8a] hover:bg-blue-900 text-white font-bold py-4 px-4 rounded-xl flex items-center justify-center transition-all mb-8 shadow-lg shadow-blue-900/30 active:scale-[0.98]"
              >
                Sign In
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>

              <div className="flex items-center justify-center mb-8 bg-green-50/50 p-3 rounded-lg border border-green-100">
                <RiCheckboxCircleLine size={20} className="mr-2 text-green-600" />
                <div className="text-xs font-semibold text-center flex items-center gap-1">
                  <span className="text-gray-700">Your connection is secure</span>
                  <span className="text-green-600 bg-green-100 px-1.5 py-0.5 rounded text-[10px]">256-bit SSL</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6 flex items-center justify-center">
                <RiCustomerService2Line size={18} className="text-gray-500 mr-2" />
                <span className="text-sm font-bold text-gray-600 mr-2">Need Help?</span>
                <a href="#" className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">Contact Support</a>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-[#1e293b]/95 backdrop-blur-md border-t border-white/10 text-gray-400 text-xs py-5 px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap items-center justify-center space-x-2 md:space-x-4 mb-4 md:mb-0 font-medium">
            <span className="text-gray-300">© 2026 MPSeDC. All rights reserved.</span>
            <span className="hidden md:inline opacity-50">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="hidden md:inline opacity-50">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <span className="hidden md:inline opacity-50">|</span>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            <span className="hidden md:inline opacity-50">|</span>
            <a href="#" className="hover:text-white transition-colors">Accessibility Statement</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="font-bold text-gray-300">Follow Us</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><RiYoutubeFill size={14} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
