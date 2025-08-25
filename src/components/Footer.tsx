import React from "react";

const Footer = () => {
  return (
    <div className="h-screen w-full bg-black text-center text-gray-200 font-serif">
      <div className="w-full h-2/5 flex justify-between">
        <div className=" h-full w-1/5 flex justify-center items-center">
          <h1 className="text-7xl font-didot">VOIDA</h1>
        </div>
        <div className=" h-full w-2/5 flex justify-evenly items-center">
          <div className="flex flex-col text-left w-1/3">
            <h2 className="text-gray-400 mb-3">Shop</h2>
            <div>
              <ul>
                <li>Shirts</li>
                <li>Trousers</li>
                <li>Jackets</li>
                <li>All</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col text-left w-1/3">
            <h2 className="text-gray-400 mb-3">General</h2>
            <div>
              <ul>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div className=" flex flex-col text-left w-1/3">
            <h2 className="text-gray-400 mb-3">Security</h2>
            <div>
              <ul>
                <li>Cookies</li>
                <li>T&C</li>
                <li>Privacy</li>
                <li>Payment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-3/5  relative" >
        <div className="absolute inset-0 bg-cover bg-[url(../../public/zip.png)]"></div>
        <div className="absolute inset-0 bg-black opacity-80"></div> 
        <div className="absolute inset-0 bg-[url(/grain2.jpg)] bg-cover h-full bg-center opacity-20 mix-blend-overlay pointer-events-none"></div>
        
        <div className="h-full realtive flex flex-col justify-center items-center p-8">
          <h2 className="text-5xl z-10 text-gray-200">Stay in the Loop</h2>
        <h4 className="text-2xl z-10 text-gray-400">
          Sign up for exclusive updates, new collection alerts, and special offers
          </h4>
          
          <div className="w-[45vw] h-14 py-1 rounded-lg bg-white z-10 mt-16 flex justify-center items-center">
            <input type="text" className="w-full h-10 text-black border-none outline-none p-4" placeholder="Enter your email here..." />
            <button className="w-[9vw] p-3 mr-1 rounded-lg bg-black text-gray-200 ">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
