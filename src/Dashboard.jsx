import React, { useState } from "react";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend
} from "recharts";
import { MessageSquare, Users, Clock, TrendingUp, BarChart2, PieChart, Settings, FileText, Award, HelpCircle, Bell, Mail, Search } from "lucide-react";

/* ------------------ Mock Data ------------------ */

const kpis = [
  { title: "Total Queries", value: "19,626", delta: "+15.3%", trend: "up", color: "bg-blue-50", iconBg: "bg-blue-500" },
  { title: "Active Students", value: "3,200", delta: "+12% this week", trend: "up", color: "bg-purple-50", iconBg: "bg-purple-500" },
  { title: "Pending Queries", value: "926", delta: "+0.00% this week", trend: "neutral", color: "bg-amber-50", iconBg: "bg-amber-500" },
  { title: "Resolution Rate", value: "92%", delta: "67% completed", trend: "up", color: "bg-green-50", iconBg: "bg-green-500" }
];

const revenueTrend = [
  { month: "Jan", value: 8000 },
  { month: "Feb", value: 12000 },
  { month: "Mar", value: 9500 },
  { month: "Apr", value: 15000 },
  { month: "May", value: 11000 },
  { month: "Jun", value: 16500 },
  { month: "Jul", value: 14000 }
];

const transactions = [
  { id: "00001", name: "Christine Brooks", email: "christine@college.edu", amount: "485", date: "2024-12-15", status: "Resolved" },
  { id: "00002", name: "Rosie Pearson", email: "rosie@college.edu", amount: "312", date: "2024-12-14", status: "In Progress" },
  { id: "00003", name: "Darrell Caldwell", email: "darrell@college.edu", amount: "528", date: "2024-12-13", status: "Resolved" },
  { id: "00004", name: "Gilbert Johnston", email: "gilbert@college.edu", amount: "156", date: "2024-12-12", status: "Escalated" },
  { id: "00005", name: "Alan Cain", email: "alan@college.edu", amount: "692", date: "2024-12-11", status: "Resolved" }
];

const categoryData = [
  { name: "Admissions", x: 45000, y: 28000, z: 850, color: "#3b82f6" },
  { name: "Academics", x: 38000, y: 32000, z: 720, color: "#8b5cf6" },
  { name: "Placements", x: 52000, y: 24000, z: 950, color: "#ec4899" },
  { name: "Campus Life", x: 28000, y: 18000, z: 520, color: "#f59e0b" },
  { name: "Fees", x: 42000, y: 35000, z: 680, color: "#10b981" },
  { name: "Sports", x: 25000, y: 12000, z: 420, color: "#06b6d4" },
  { name: "Events", x: 35000, y: 22000, z: 590, color: "#f97316" }
];

const metrics = [
  { label: "Queries Received", value: "12k", percent: "55%" },
  { label: "Auto Resolved", value: "8.5k", percent: "42%" },
  { label: "Escalated", value: "2.1k", percent: "21%" },
  { label: "Satisfaction Rate", value: "4.6", percent: "92%" }
];

/* ------------------ Component ------------------ */

const Dashboard = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 w-64 h-screen bg-white border-r flex flex-col overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
              C
            </div>
            <div>
              <div className="font-bold text-gray-900">CampusBot</div>
              <div className="text-xs text-gray-500">Admin Panel</div>
            </div>
          </div>
          <nav className="space-y-1">
            {[
              { name: "Dashboard", icon: <BarChart2 size={18} />, active: true },
              { name: "Live Chats", icon: <MessageSquare size={18} />, active: false },
              { name: "Analytics", icon: <PieChart size={18} />, active: false },
              { name: "Students", icon: <Users size={18} />, active: false },
              { name: "Knowledge Base", icon: <FileText size={18} />, active: false },
              { name: "Reports", icon: <Award size={18} />, active: false },
              { name: "Help Center", icon: <HelpCircle size={18} />, active: false },
              { name: "Settings", icon: <Settings size={18} />, active: false }
            ].map((item, i) => (
              <button
                key={i}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${
                  item.active ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
        
      
      </aside>

      {/* Main Content */}
      <main className="ml-64 overflow-auto pt-20">
        {/* Header */}
        <header className="fixed top-0 left-64 right-0 bg-white border-b px-8 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search students, queries, reports..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Mail size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Settings size={20} className="text-gray-600" />
            </button>
            <div className="w-9 h-9 bg-linear-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
              AD
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Page Title */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Chatbot Analytics</h1>
            <p className="text-gray-500 text-sm">Monitor your college chatbot performance and student engagement</p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi, i) => (
              <div key={i} className={`${kpi.color} rounded-2xl p-6 border border-gray-100`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`${kpi.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-white`}>
                    {i === 0 && <MessageSquare size={24} />}
                    {i === 1 && <Users size={24} />}
                    {i === 2 && <Clock size={24} />}
                    {i === 3 && <TrendingUp size={24} />}
                  </div>
                  {kpi.trend === "up" && <span className="text-green-500 text-sm">↗</span>}
                </div>
                <div className="text-xs text-gray-600 mb-1">{kpi.title}</div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{kpi.value}</div>
                <div className={`text-xs ${kpi.trend === "up" ? "text-green-600" : "text-gray-500"}`}>
                  {kpi.delta}
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Query Volume</h3>
                  <p className="text-sm text-gray-500">Monthly chatbot interactions</p>
                </div>
                <button className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 flex items-center gap-2">
                  <FileText size={16} />
                  Export
                </button>
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold text-gray-900">86,320</div>
                <div className="text-sm text-gray-500">Total queries this period</div>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={revenueTrend}>
                  <defs>
                    <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#999" style={{ fontSize: "12px" }} />
                  <YAxis stroke="#999" style={{ fontSize: "12px" }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "#1f2937", 
                      border: "none", 
                      borderRadius: "8px",
                      color: "white"
                    }} 
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    fill="url(#revenue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Metrics Circle */}
            <div className="bg-white rounded-2xl p-6 border">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Response Metrics</h3>
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="80" cy="80" r="70" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                    <circle 
                      cx="80" 
                      cy="80" 
                      r="70" 
                      fill="none" 
                      stroke="url(#gradient)" 
                      strokeWidth="12"
                      strokeDasharray="439.6"
                      strokeDashoffset="110"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-3xl font-bold text-gray-900">92%</div>
                    <div className="text-xs text-gray-500">Resolution</div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {metrics.map((metric, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        i === 0 ? "bg-blue-500" : i === 1 ? "bg-purple-500" : i === 2 ? "bg-pink-500" : "bg-gray-400"
                      }`}></div>
                      <span className="text-gray-600">{metric.label}</span>
                    </div>
                    <div className="font-semibold text-gray-900">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Scatter Chart */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Category Analysis</h3>
                  <p className="text-sm text-gray-500">Query distribution by category</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={320}>
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    type="number" 
                    dataKey="x" 
                    name="Engagement" 
                    stroke="#999"
                    style={{ fontSize: "12px" }}
                  />
                  <YAxis 
                    type="number" 
                    dataKey="y" 
                    name="Resolution" 
                    stroke="#999"
                    style={{ fontSize: "12px" }}
                  />
                  <Tooltip 
                    cursor={{ strokeDasharray: '3 3' }}
                    contentStyle={{ 
                      backgroundColor: "white", 
                      border: "1px solid #e5e7eb", 
                      borderRadius: "8px"
                    }}
                  />
                  <Scatter data={categoryData} fill="#8884d8">
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} opacity={0.7} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap gap-3 mt-4">
                {categoryData.map((cat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></div>
                    <span className="text-gray-600">{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-2xl p-6 border">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {transactions.slice(0, 5).map((tx, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
                      {tx.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 truncate">{tx.name}</div>
                      <div className="text-xs text-gray-500">{tx.date}</div>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      tx.status === "Complete" ? "bg-green-100 text-green-700" :
                      tx.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                      "bg-red-100 text-red-700"
                    }`}>
                      {tx.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="bg-white rounded-2xl border overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase">Order ID</th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx, i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm text-gray-600">{tx.id}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs">
                            {tx.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-sm font-medium text-gray-900">{tx.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600">{tx.email}</td>
                      <td className="py-4 px-6 text-sm font-semibold text-gray-900">{tx.amount}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          tx.status === "Complete" ? "bg-green-100 text-green-700" :
                          tx.status === "Pending" ? "bg-purple-100 text-purple-700" :
                          "bg-red-100 text-red-700"
                        }`}>
                          {tx.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600">{tx.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;