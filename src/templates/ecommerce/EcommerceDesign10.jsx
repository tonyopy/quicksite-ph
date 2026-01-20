import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, ChevronDown, Plus, Minus, X, Star, Apple, Carrot, Milk, Coffee, CheckCircle, ArrowRight } from 'lucide-react';

const EcommerceDesign10 = () => {
  const [cartCount, setCartCount] = useState(2);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      setShowCheckout(false);
      setCartCount(0);
      alert("Order Received! Notification sent to owner.");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-green-50/30 font-sans text-slate-800 relative">
      {/* Checkout Modal Overlay */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            {!orderPlaced ? (
              <>
                <div className="bg-green-500 p-4 text-white flex justify-between items-center">
                  <h3 className="font-bold text-lg">Secure Checkout</h3>
                  <button onClick={() => setShowCheckout(false)}><X size={20} /></button>
                </div>
                <form onSubmit={handleCheckout} className="p-6 space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Contact Info</label>
                    <input required type="text" placeholder="Full Name" className="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-green-500 outline-none" />
                    <input required type="text" placeholder="Phone Number" className="w-full border border-gray-200 rounded-lg p-2.5 text-sm mt-2 focus:ring-2 focus:ring-green-500 outline-none" />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Delivery Address</label>
                    <textarea required placeholder="Unit / Street / City" className="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-green-500 outline-none h-20"></textarea>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Payment Method</label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="border border-green-200 bg-green-50 rounded-lg p-3 flex items-center gap-2 cursor-pointer ring-1 ring-green-500">
                        <input type="radio" name="payment" defaultChecked className="text-green-600" />
                        <span className="font-bold text-sm text-blue-900">GCash</span>
                      </label>
                      <label className="border border-gray-200 rounded-lg p-3 flex items-center gap-2 cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="payment" className="text-green-600" />
                        <span className="font-bold text-sm text-gray-700">Maya</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-gray-500">Subtotal</span>
                      <span className="font-bold">$42.50</span>
                    </div>
                    <div className="flex justify-between mb-4 text-sm">
                      <span className="text-gray-500">Delivery Fee</span>
                      <span className="font-bold text-green-600">Free</span>
                    </div>
                    <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-green-500/30 transition-all active:scale-95 flex items-center justify-center gap-2">
                      <span>Place Order</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-black text-gray-800 mb-2">Order Confirmed!</h3>
                <p className="text-gray-500 mb-6">We've sent the receipt to your email. The store owner has been notified.</p>
                <div className="bg-gray-50 p-4 rounded-xl border border-dashed border-gray-200">
                  <p className="text-xs text-gray-400 uppercase font-bold">Order Reference</p>
                  <p className="text-lg font-mono font-bold text-gray-700">#ORD-PH-8821</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="bg-white border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-green-500 text-white p-2 rounded-lg">
                <Apple size={24} fill="currentColor" />
              </div>
              <div className="hidden md:block">
                <h1 className="text-2xl font-black text-green-800 tracking-tight leading-none">FRESH<br/><span className="text-orange-500">MARKET</span></h1>
              </div>
            </div>

            {/* Location & Search */}
            <div className="hidden md:flex flex-1 max-w-2xl gap-4">
              <button className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg text-sm font-bold text-green-700 hover:bg-green-100">
                <span>Delivery to: </span>
                <span className="underline decoration-dashed underline-offset-4">New York, 10012</span>
                <ChevronDown size={16} />
              </button>
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  placeholder="Search for apples, milk, bread..." 
                  className="w-full bg-slate-100 border-none rounded-lg py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-green-500 outline-none transition-all"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Cart & Account */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:block font-bold text-sm text-slate-600 hover:text-green-600">Sign In</button>
              <button 
                onClick={() => setShowCheckout(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-bold shadow-lg shadow-orange-500/20 flex items-center gap-2 transition-all active:scale-95"
              >
                <ShoppingCart size={20} />
                <span className="hidden sm:inline">$42.50</span>
                <span className="bg-white text-orange-500 text-xs w-6 h-6 rounded-full flex items-center justify-center ml-1">{cartCount}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Search (below nav) */}
      <div className="md:hidden p-4 bg-white border-b border-green-100">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full bg-slate-100 border-none rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-green-500 outline-none"
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar Menu */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 sticky top-28">
              <h3 className="font-bold text-lg mb-4 px-2">Categories</h3>
              <ul className="space-y-1">
                {[
                  { icon: Apple, name: 'Fruits & Vegetables', color: 'text-green-500' },
                  { icon: Milk, name: 'Dairy & Eggs', color: 'text-blue-500' },
                  { icon: Coffee, name: 'Bakery', color: 'text-orange-500' },
                  { icon: Carrot, name: 'Meat & Seafood', color: 'text-red-500' },
                ].map((cat, i) => (
                  <li key={i}>
                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors font-medium text-slate-600 hover:text-green-700">
                      <cat.icon className={cat.color} size={20} />
                      {cat.name}
                      <ChevronDown size={16} className="ml-auto opacity-30 -rotate-90" />
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 bg-green-50 p-4 rounded-xl border border-green-100">
                <h4 className="font-bold text-green-800 mb-2">Organic Membership</h4>
                <p className="text-xs text-green-600 mb-3">Get free delivery on all orders over $35</p>
                <button className="w-full bg-green-500 text-white text-sm font-bold py-2 rounded-lg hover:bg-green-600 transition-colors">Join Now</button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            {/* Banner */}
            <div className="bg-[#FFEDD5] rounded-3xl p-8 md:p-12 mb-10 relative overflow-hidden">
              <div className="relative z-10 max-w-lg">
                <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-4">WEEKEND DEAL</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 leading-tight">Fresh Vegetables <br/> <span className="text-green-600">Big Discount</span></h2>
                <p className="text-slate-600 mb-8 font-medium">Save up to 30% on all organic locally sourced vegetables this weekend only.</p>
                <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">Shop Now</button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80" 
                alt="Vegetables" 
                className="absolute right-0 top-0 h-full w-1/2 object-cover object-left mask-image-gradient hidden md:block"
                style={{ maskImage: 'linear-gradient(to left, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to left, black 60%, transparent 100%)' }}
              />
            </div>

            {/* Popular Categories (Mobile Grid) */}
            <div className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {['Fruits', 'Meat', 'Bakery', 'Drinks'].map((cat, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm text-center border border-slate-100">
                  <div className={`w-12 h-12 mx-auto rounded-full mb-2 flex items-center justify-center ${
                    i === 0 ? 'bg-green-100 text-green-600' : 
                    i === 1 ? 'bg-red-100 text-red-600' : 
                    i === 2 ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {i === 0 ? <Apple size={20} /> : i === 1 ? <Carrot size={20} /> : i === 2 ? <Coffee size={20} /> : <Milk size={20} />}
                  </div>
                  <h3 className="font-bold text-sm">{cat}</h3>
                </div>
              ))}
            </div>

            {/* Product Grid */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Best Selling Products</h2>
              <a href="#" className="text-green-600 font-bold text-sm hover:underline">View All</a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Organic Bananas', price: 1.99, unit: 'bunch', img: '1603052875879-fa732697a61d', bg: 'bg-yellow-50' },
                { name: 'Fresh Red Strawberries', price: 4.99, unit: '1lb pack', img: '1587393855524-087f83d95bc9', bg: 'bg-red-50' },
                { name: 'Whole Milk', price: 3.49, unit: '1 gallon', img: '1550583724-426989417028', bg: 'bg-blue-50' },
                { name: 'Avocado', price: 1.49, unit: 'each', img: '1523049398829-d06400bbfccf', bg: 'bg-green-50' },
                { name: 'Sourdough Bread', price: 5.99, unit: 'loaf', img: '1585476263060-b7a676b9a1f1', bg: 'bg-orange-50' },
                { name: 'Fresh Eggs', price: 4.29, unit: 'dozen', img: '1506976785307-8732e854ad03', bg: 'bg-slate-50' },
              ].map((product, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all group">
                  <div className={`${product.bg} p-6 relative h-48 flex items-center justify-center`}>
                    <img 
                      src={`https://images.unsplash.com/photo-${product.img}?auto=format&fit=crop&w=400&q=80`}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                    />
                    <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500">
                      <Star size={18} />
                    </button>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-lg text-slate-800">{product.name}</h3>
                        <p className="text-sm text-slate-400">{product.unit}</p>
                      </div>
                      <span className="font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg text-sm">${product.price}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-1">
                        {[1,2,3,4,5].map(s => <Star key={s} size={14} className="text-yellow-400 fill-current" />)}
                        <span className="text-xs text-slate-400 ml-1">(128)</span>
                      </div>
                      <button 
                        className="bg-slate-900 text-white p-2 rounded-lg hover:bg-green-500 transition-colors flex items-center justify-center gap-2 w-10 hover:w-24 group/btn"
                        onClick={() => setCartCount(c => c + 1)}
                      >
                        <Plus size={18} />
                        <span className="hidden group-hover/btn:inline text-sm font-bold overflow-hidden whitespace-nowrap">Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceDesign10;
