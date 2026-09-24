import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Features', href: '#' },
    { name: 'Enterprise', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'API', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Liscence', href: '#' },

]



export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
  <div className="relative min-h-screen bg-[#0b1220] overflow-hidden">

    {/* NAVBAR */}
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="flex items-center justify-between p-6 lg:px-12">
        
        <div className="flex items-center gap-10">
          <span className="text-indigo-500 text-2xl font-bold">hubhopper</span>

          <div className="hidden lg:flex gap-8 text-sm text-white">
            <a href="#">Features</a>
            <a href="#">Enterprise</a>
            <a href="#">Services</a>
            <a href="#">API</a>
            <a href="#">Pricing</a>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <a href="#" className="text-white text-sm">Log in</a>
          <button className="bg-indigo-500 px-4 py-2 rounded-lg text-white text-sm">
            Start my podcast
          </button>
        </div>
      </nav>
    </header>

    {/* GRADIENT OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220] via-[#0b1220]/80 to-transparent z-10" />

    {/* RIGHT IMAGE */}
    <img
      src="https://files.hubhopper.com/studio-assets/images/2025-12-17/Hero-img.svg"
      alt=""
      className="absolute right-0 top-0 h-full w-auto object-cover"
    />

    {/* CONTENT */}
    <div className="relative z-20 px-6 pt-32 lg:px-16 max-w-3xl">

      {/* SMALL TEXT */}
      <p className="text-gray-400 text-sm mb-6">
        Join our growing community of{" "}
        <span className="text-indigo-400 font-semibold">40k+ creators.</span>
      </p>

      {/* HEADING */}
      <h1 className="text-5xl sm:text-7xl font-semibold text-white leading-tight">
        Best Platform To <br />
        <span className="text-indigo-400">
          Distribute Audio & Video
        </span><br />
        Podcast Effortlessly
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-6 text-gray-400 text-lg">
        Hubhopper helps you launch on 15+ platforms in just 5 minutes!
        Build, track, and grow your podcast with the help of our easy-to-use
        free podcast software.
      </p>

      {/* BUTTONS */}
      <div className="mt-8 flex gap-4">
        <button className="bg-indigo-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-indigo-400">
          Start Your 7-Day Trial
        </button>

        <button className="bg-gray-200 px-6 py-3 rounded-lg text-black font-semibold">
          Book a Call
        </button>
      </div>

      {/* FREE TEXT */}
      <p className="mt-4 text-sm text-gray-400">
        or{" "}
        <span className="text-indigo-400 font-semibold">
          Get Started for Free.
        </span>
      </p>

      {/* RATINGS */}
      <div className="mt-6">
        <img
          src="https://files.hubhopper.com/studio-assets/images/2025-12-17/Ratings-03.png"
          alt="ratings"
          className="w-64"
        />
      </div>

    </div>
  </div>
)
}
