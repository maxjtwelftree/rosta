import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { 
  FiLogOut, 
  FiMenu, 
  FiHome, 
  FiCalendar, 
  FiUsers, 
  FiSettings,
  FiBarChart
} from 'react-icons/fi';

import logo from '../assets/logo.png';


function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const menuItems = [
    { icon: <FiHome />, label: 'Overview', active: true },
    { icon: <FiCalendar />, label: 'Schedule' },
    { icon: <FiUsers />, label: 'Staff' },
    { icon: <FiBarChart />, label: 'Analytics' },
    { icon: <FiSettings />, label: 'Settings' }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <motion.aside 
        initial={{ width: isSidebarOpen ? 240 : 80 }}
        animate={{ width: isSidebarOpen ? 240 : 80 }}
        className="bg-zinc-900/50 border-r border-zinc-800/50 backdrop-blur-sm fixed h-full"
      >
        <div className="p-4">
          <div className="flex items-center gap-3 mb-8">
            {isSidebarOpen && <span className="font-bold text-xl">Rosta</span>}
          </div>
          
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active 
                    ? 'bg-purple-500/10 text-purple-400' 
                    : 'hover:bg-zinc-800/50'
                }`}
              >
                {item.icon}
                {isSidebarOpen && <span>{item.label}</span>}
              </motion.button>
            ))}
          </nav>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className={`flex-1 ${isSidebarOpen ? 'ml-60' : 'ml-20'}`}>
        {/* Top Navigation */}
        <header className="bg-zinc-900/50 border-b border-zinc-800/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 hover:bg-zinc-800/50 rounded-lg transition-colors"
              >
                <FiMenu />
              </motion.button>
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-400">{user?.email}</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSignOut}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors"
              >
                <FiLogOut />
                Sign Out
              </motion.button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Stats Cards */}
            {[
              { label: 'Total Staff', value: '124' },
              { label: 'Active Shifts', value: '45' },
              { label: 'Hours Scheduled', value: '1,240' },
              { label: 'Weekly Cost', value: '$24,500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 backdrop-blur-sm"
              >
                <h3 className="text-gray-400 mb-2">{stat.label}</h3>
                <p className="text-2xl font-bold">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4">Weekly Schedule</h2>
              {/* Add schedule component here */}
              <div className="h-96 flex items-center justify-center text-gray-400">
                Schedule Component Coming Soon
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              {/* Add activity feed here */}
              <div className="space-y-4">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
                    <div>
                      <p className="text-sm">John updated their availability</p>
                      <p className="text-xs text-gray-400">2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;