import React from "react";

const Footer = () => {
  return (
    <div className="h-screen w-full bg-black text-center text-gray-200 font-serif">
<div className="w-full h-auto py-10 md:h-2/5 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
  {/* Logo Section */}
  <div className="h-full w-full md:w-1/5 flex justify-center items-center mb-8 md:mb-0">
    <h1 className="text-5xl md:text-7xl font-didot text-center">VOIDA</h1>
  </div>
  
  {/* Links Section */}
  <div className="h-full w-full md:w-2/5 flex flex-col md:flex-row justify-center md:justify-evenly items-center md:items-start text-center md:text-left">
    
    {/* Shop Links */}
    <div className="flex flex-col w-full md:w-1/3 mb-6 md:mb-0">
      <h2 className="text-gray-400 mb-3 text-lg">Shop</h2>
      <ul className="text-sm">
        <li className="mb-1">Shirts</li>
        <li className="mb-1">Trousers</li>
        <li className="mb-1">Jackets</li>
        <li>All</li>
      </ul>
    </div>
    
    {/* General Links */}
    <div className="flex flex-col w-full md:w-1/3 mb-6 md:mb-0">
      <h2 className="text-gray-400 mb-3 text-lg">General</h2>
      <ul className="text-sm">
        <li className="mb-1">About Us</li>
        <li className="mb-1">Blog</li>
        <li className="mb-1">Contact Us</li>
        <li>FAQ</li>
      </ul>
    </div>
    
    {/* Security Links */}
    <div className="flex flex-col w-full md:w-1/3">
      <h2 className="text-gray-400 mb-3 text-lg">Security</h2>
      <ul className="text-sm">
        <li className="mb-1">Cookies</li>
        <li className="mb-1">T&C</li>
        <li className="mb-1">Privacy</li>
        <li>Payment</li>
      </ul>
    </div>
  </div>
</div>
      <div className="w-full h-3/5  relative " >
        <div className="absolute inset-0 bg-cover bg-[url(../../public/zip.png)]"></div>
        <div className="absolute inset-0 bg-black opacity-80"></div> 
        <div className="absolute inset-0 bg-[url(/grain2.jpg)] bg-cover h-full bg-center opacity-20 mix-blend-overlay pointer-events-none"></div>
        
        <div className="h-full realtive flex flex-col justify-center items-center p-8">
          <h2 className="text-5xl z-10 text-gray-200">Stay in the Loop</h2>
        <h4 className="text-2xl z-10 text-gray-400 mt-2">
          Sign up for exclusive updates, new collection alerts, and special offers
          </h4>
          
          <div className="w-[350px]  md:w-[450px] h-14 py-1 rounded-lg bg-white z-10 mt-16 flex justify-center items-center">
            <input type="text" className="w-9/12 h-10 text-black border-none outline-none p-4" placeholder="Enter your email here..." />
            <button className="w-3/12  p-3 mr-1 rounded-lg bg-black text-gray-200 ">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
