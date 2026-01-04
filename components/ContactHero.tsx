import React from "react";

const ContactHero = () => {
  return (
    <section className="section-padding w-full">
      <div className="py-10 lg:py-24 px-4 sm:px-12 bg-white mx-auto max-w-3xl relative">
        <div className=" flex flex-col lg:flex-row flex-wrap gap-8 lg:gap-16 items-start justify-end relative">
          <div className="hidden lg:block absolute left-[-120px] bg-(--accent-color) text-white px-6 pt-12 pb-20  flex-[0.4] shadow-2xl">
            <h2 className="text-3xl font-semibold mb-12">CONTACT US</h2>

            <ul className="space-y-8">
              <li className="flex items-center gap-4">
                <span>📍</span>
                <span>Ulica Petra Kružića 6, Senj</span>
              </li>

              <li className="flex items-center gap-4">
                <span>📞</span>
                <span>+30 0000 000</span>
              </li>

              <li className="flex items-center gap-4">
                <span>✉️</span>
                <span>mail@example.com</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 lg:flex-[0.6]">
            <h2 className="text-3xl font-semibold mb-12 uppercase">
              Get In Touch
            </h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-100 px-6 py-4 rounded-md"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-100 px-6 py-4 rounded-md"
              />

              <textarea
                placeholder="Message"
                rows={6}
                className="w-full bg-gray-100 px-6 py-4 rounded-md resize-none"
              />

              <button
                type="submit"
                className="bg-[#A7B58A] text-white px-10 py-3 rounded-full hover:opacity-90 transition"
              >
                Send
              </button>
            </form>
          </div>
          <div className="block lg:hidden flex-1 bg-(--accent-color) w-full px-2 py-12 sm:p-12 text-white">
            <h2 className="text-3xl text-center sm:text-left font-semibold mb-12">
              CONTACT US
            </h2>

            <ul className="space-y-8">
              <li className="flex items-center gap-4">
                <span>📍</span>
                <span>Ulica Petra Kružića 6, Senj</span>
              </li>

              <li className="flex items-center gap-4">
                <span>📞</span>
                <span>+30 0000 000</span>
              </li>

              <li className="flex items-center gap-4">
                <span>✉️</span>
                <span>mail@example.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
