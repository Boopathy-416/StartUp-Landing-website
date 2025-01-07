import React from "react";

function Footer() {
  return (
    <div>
      <section className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Connect With Us
          </h2>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-2 bg-white text-black rounded-full">
              Discord
            </button>
            <button className="px-6 py-2 bg-white text-black rounded-full">
              Twitter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
