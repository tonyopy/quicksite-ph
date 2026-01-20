import React, { useState } from 'react';
import { Menu, X, Gamepad2, Tv, Wifi, Zap } from 'lucide-react';

const TransientDesign9 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-mono text-cyan-400 bg-black min-h-screen selection:bg-fuchsia-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-fuchsia-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
              CYBER<span className="text-white">STAY</span>
            </div>
            <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest uppercase text-slate-400">
              <a href="#" className="hover:text-cyan-400 hover:shadow-[0_0_10px_cyan] transition-all">Setup</a>
              <a href="#" className="hover:text-fuchsia-400 hover:shadow-[0_0_10px_fuchsia] transition-all">Games</a>
              <a href="#" className="hover:text-yellow-400 hover:shadow-[0_0_10px_yellow] transition-all">Book</a>
            </div>
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="relative z-10 text-center px-6">
          <div className="inline-block border border-fuchsia-500/50 bg-fuchsia-500/10 px-4 py-1 rounded-full text-fuchsia-400 text-xs font-bold tracking-widest uppercase mb-8 animate-pulse">
            Level Up Your Staycation
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            PLAYER <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600">ONE</span> <br/>
            READY.
          </h1>
          <p className="text-xl text-slate-400 mb-12 font-bold max-w-2xl mx-auto">
            High-speed fiber. 144Hz Monitors. Next-gen Consoles. <br/>
            The ultimate gamer's retreat.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-cyan-500 text-black px-8 py-4 text-sm font-black tracking-widest uppercase hover:bg-cyan-400 hover:shadow-[0_0_20px_cyan] transition-all transform hover:-translate-y-1 skew-x-[-10deg]">
              Start Game
            </button>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-24 px-6 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-xl blur-lg opacity-30" />
            <img src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="relative rounded-xl border border-zinc-700 w-full" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-black text-white mb-8 uppercase italic">Loadout</h2>
            <div className="space-y-6">
              <div className="bg-black p-6 border border-zinc-800 hover:border-cyan-500 transition-colors group">
                <div className="flex items-center gap-4 mb-2">
                  <Wifi className="text-cyan-500 w-6 h-6 group-hover:animate-pulse" />
                  <h3 className="text-xl font-bold text-white">1GBPS Fiber</h3>
                </div>
                <p className="text-slate-500 text-sm">Dedicated business line. 2ms ping.</p>
              </div>
              <div className="bg-black p-6 border border-zinc-800 hover:border-fuchsia-500 transition-colors group">
                <div className="flex items-center gap-4 mb-2">
                  <Gamepad2 className="text-fuchsia-500 w-6 h-6 group-hover:rotate-12 transition-transform" />
                  <h3 className="text-xl font-bold text-white">Console Corner</h3>
                </div>
                <p className="text-slate-500 text-sm">PS5, Xbox Series X, Nintendo Switch OLED.</p>
              </div>
              <div className="bg-black p-6 border border-zinc-800 hover:border-yellow-500 transition-colors group">
                <div className="flex items-center gap-4 mb-2">
                  <Tv className="text-yellow-500 w-6 h-6" />
                  <h3 className="text-xl font-bold text-white">Theater Mode</h3>
                </div>
                <p className="text-slate-500 text-sm">75" 4K TV with Surround Sound & Netflix.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransientDesign9;
