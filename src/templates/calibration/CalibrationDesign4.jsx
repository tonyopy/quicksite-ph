import React, { useState } from 'react';
import { LayoutDashboard, Box, FileText, Calendar, Settings, Bell, Search, LogOut, CheckCircle, AlertTriangle, Clock, Download, Filter, ChevronDown, User } from 'lucide-react';

function CalibrationDesign4() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex-col hidden lg:flex shadow-xl z-20">
        <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950">
          <div className="font-bold text-white text-lg tracking-wide">
            PURE<span className="text-blue-500">CAL</span> <span className="text-xs font-normal text-slate-500 ml-1">PORTAL</span>
          </div>
        </div>

        <div className="p-4 space-y-1 overflow-y-auto flex-1">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-2 mt-4">Main Menu</div>
          
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
          >
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </button>
          
          <button 
            onClick={() => setActiveTab('assets')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'assets' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
          >
            <Box className="w-5 h-5" /> My Assets
          </button>

          <button 
            onClick={() => setActiveTab('certificates')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'certificates' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
          >
            <FileText className="w-5 h-5" /> Certificates
          </button>

          <button 
            onClick={() => setActiveTab('schedule')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === 'schedule' ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
          >
            <Calendar className="w-5 h-5" /> Schedule
          </button>

          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-2 mt-8">System</div>

          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors">
            <Settings className="w-5 h-5" /> Settings
          </button>
          
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors">
            <User className="w-5 h-5" /> User Management
          </button>
        </div>

        <div className="p-4 border-t border-slate-800">
          <div className="bg-slate-800 rounded-lg p-3 flex items-center gap-3 mb-3">
             <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs">JD</div>
             <div className="flex-1 overflow-hidden">
                <div className="text-sm font-bold text-white truncate">John Doe</div>
                <div className="text-xs text-slate-500 truncate">Facility Mgr</div>
             </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border border-slate-700 hover:bg-slate-800 hover:text-white transition-colors">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-8 z-10">
           <div className="flex items-center gap-4 lg:hidden">
              <div className="font-bold text-slate-900 tracking-wide">PURECAL</div>
           </div>
           
           {/* Search */}
           <div className="hidden md:flex items-center flex-1 max-w-md ml-4">
              <div className="relative w-full">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                 <input 
                   type="text" 
                   placeholder="Search assets, serial numbers, or certificates..." 
                   className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
                 />
              </div>
           </div>

           {/* Actions */}
           <div className="flex items-center gap-4 lg:gap-6">
              <button className="relative text-slate-500 hover:text-blue-600 transition">
                 <Bell className="w-5 h-5" />
                 <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="h-8 w-px bg-slate-200 hidden md:block"></div>
              <div className="hidden md:flex flex-col items-end">
                 <span className="text-xs font-bold text-slate-700">Tech Manufacturing Inc.</span>
                 <span className="text-[10px] text-slate-500 uppercase tracking-wide">Enterprise Plan</span>
              </div>
           </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-slate-50 p-6 lg:p-8">
           <div className="max-w-7xl mx-auto">
              
              {/* Page Title */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                 <div>
                    <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
                    <p className="text-sm text-slate-500">Welcome back! Here's what's happening with your equipment today.</p>
                 </div>
                 <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition shadow-sm flex items-center gap-2">
                       <Filter className="w-4 h-4" /> Filter View
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition shadow-md flex items-center gap-2">
                       <Download className="w-4 h-4" /> Export Report
                    </button>
                 </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                 {[
                    { title: "Total Assets", value: "1,248", icon: Box, color: "blue", trend: "+12% vs last month" },
                    { title: "Compliance", value: "98.5%", icon: CheckCircle, color: "emerald", trend: "Top 5% of industry" },
                    { title: "Due Soon", value: "14", icon: Clock, color: "amber", trend: "Action required" },
                    { title: "Out of Service", value: "3", icon: AlertTriangle, color: "red", trend: "Requires attention" },
                 ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                       <div className="flex justify-between items-start mb-4">
                          <div className={`p-3 rounded-lg bg-${stat.color}-50 text-${stat.color}-600`}>
                             <stat.icon className="w-6 h-6" />
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-1 rounded-full bg-${stat.color}-50 text-${stat.color}-700 uppercase`}>
                             {stat.color === 'emerald' ? 'Good' : stat.color === 'red' ? 'Alert' : 'Info'}
                          </span>
                       </div>
                       <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                       <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                       <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-100">{stat.trend}</p>
                    </div>
                 ))}
              </div>

              {/* Main Chart/Table Area */}
              <div className="grid lg:grid-cols-3 gap-8">
                 {/* Recent Assets Table */}
                 <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                       <h3 className="font-bold text-slate-800">Recent Calibrations</h3>
                       <a href="#" className="text-sm text-blue-600 font-bold hover:underline">View All</a>
                    </div>
                    <div className="overflow-x-auto">
                       <table className="w-full text-sm text-left">
                          <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-100">
                             <tr>
                                <th className="px-6 py-4">Asset Name</th>
                                <th className="px-6 py-4">ID / Serial</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Certificate</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                             {[
                                { name: "Fluke 87V Multimeter", id: "EQ-2023-001", date: "Oct 24, 2025", status: "Pass" },
                                { name: "Tektronix Oscilloscope", id: "EQ-2023-045", date: "Oct 23, 2025", status: "Pass" },
                                { name: "Pressure Gauge 500PSI", id: "PG-100-22", date: "Oct 22, 2025", status: "Fail" },
                                { name: "Mitutoyo Caliper", id: "MC-004-99", date: "Oct 21, 2025", status: "Pass" },
                                { name: "Temp Chamber A", id: "TC-001-01", date: "Oct 20, 2025", status: "Pass" },
                             ].map((row, i) => (
                                <tr key={i} className="hover:bg-slate-50 transition-colors">
                                   <td className="px-6 py-4 font-medium text-slate-900">{row.name}</td>
                                   <td className="px-6 py-4 text-slate-500 font-mono text-xs">{row.id}</td>
                                   <td className="px-6 py-4 text-slate-500">{row.date}</td>
                                   <td className="px-6 py-4">
                                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                                         row.status === 'Pass' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                                      }`}>
                                         {row.status}
                                      </span>
                                   </td>
                                   <td className="px-6 py-4">
                                      <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
                                         <Download className="w-3 h-3" /> PDF
                                      </button>
                                   </td>
                                </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>

                 {/* Upcoming Schedule / Alerts */}
                 <div className="space-y-6">
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                       <h3 className="font-bold text-slate-800 mb-4">Upcoming Schedule</h3>
                       <div className="space-y-4">
                          {[
                             { date: "Tomorrow", event: "On-Site Calibration Visit", time: "09:00 AM", type: "Visit" },
                             { date: "Nov 01", event: "Equipment Pickup", time: "02:00 PM", type: "Logistics" },
                             { date: "Nov 05", event: "Audit Preparation Review", time: "10:00 AM", type: "Meeting" },
                          ].map((item, i) => (
                             <div key={i} className="flex gap-4 items-start">
                                <div className="flex flex-col items-center min-w-[3rem] bg-slate-50 rounded p-2 text-center border border-slate-100">
                                   <span className="text-[10px] text-slate-500 uppercase font-bold">{item.date.split(' ')[0]}</span>
                                   <span className="text-sm font-bold text-slate-900">{item.date.split(' ')[1] || '25'}</span>
                                </div>
                                <div>
                                   <div className="text-sm font-bold text-slate-900">{item.event}</div>
                                   <div className="text-xs text-slate-500 flex items-center gap-2 mt-1">
                                      <Clock className="w-3 h-3" /> {item.time} • {item.type}
                                   </div>
                                </div>
                             </div>
                          ))}
                       </div>
                       <button className="w-full mt-6 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50 transition">
                          View Full Calendar
                       </button>
                    </div>

                    <div className="bg-indigo-900 rounded-xl shadow-lg p-6 text-white relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-8 opacity-10">
                          <Box className="w-32 h-32" />
                       </div>
                       <div className="relative z-10">
                          <h3 className="font-bold text-lg mb-2">Need New Equipment?</h3>
                          <p className="text-indigo-200 text-sm mb-4">Browse our catalog of pre-calibrated instruments ready for immediate deployment.</p>
                          <button className="bg-white text-indigo-900 px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-50 transition">
                             Browse Catalog
                          </button>
                       </div>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </main>
    </div>
  );
}

export default CalibrationDesign4;
