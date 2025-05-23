import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import PageHeader from "../components/PageHeader";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { CalendarDays, Circle } from "lucide-react";

const Dashboard = () => {
  const chartData = [
    { name: "Jan", performance: 70, impression: 40 },
    { name: "Feb", performance: 60, impression: 35 },
    { name: "Mar", performance: 75, impression: 50 },
    { name: "Apr", performance: 80, impression: 45 },
    { name: "May", performance: 85, impression: 60 },
    { name: "Jun", performance: 65, impression: 55 },
    { name: "Jul", performance: 90, impression: 65 },
    { name: "Aug", performance: 70, impression: 50 },
    { name: "Sep", performance: 75, impression: 55 },
    { name: "Oct", performance: 85, impression: 65 },
    { name: "Nov", performance: 80, impression: 60 },
    { name: "Dec", performance: 95, impression: 70 },
  ];

  const statCards = [
    {
      title: "Total Students",
      value: "12,345",
      change: "+5.4% than last year",
      chart: (
        <BarChart width={120} height={60} data={[{ a: 5 }, { a: 8 }, { a: 6 }, { a: 9 }]}>
          <Bar dataKey="a" fill="#00B074" radius={[4, 4, 0, 0]} />
        </BarChart>
      ),
    },
    {
      title: "Courses",
      value: "100",
      change: "+15% than last year",
      chart: (
        <LineChart width={120} height={60} data={[{ a: 1 }, { a: 3 }, { a: 2 }, { a: 4 }]}>
          <Line type="monotone" dataKey="a" stroke="#f59e0b" strokeWidth={2} dot={false} />
        </LineChart>
      ),
    },
    {
      title: "Earnings",
      value: "$45,741",
      change: "+11%",
      chart: (
        <LineChart width={120} height={60} data={[{ a: 3 }, { a: 4 }, { a: 2 }, { a: 5 }, { a: 4.5 }]}>
          <Line type="monotone" dataKey="a" stroke="#3b82f6" strokeWidth={2} dot={true} />
        </LineChart>
      ),
    },
  ];

  const events = [
    {
      date: "5 Jan",
      items: [
        { time: "08.00 AM", label: "Introduction Wireframe", type: "UI Design" },
        { time: "10.00 AM", label: "Golden Ratio", type: "Graphic Design" },
        { time: "01.00 PM", label: "Basic HTML", type: "Web Design" },
      ],
    },
    {
      date: "5 Jan",
      items: [
        { time: "08.00 AM", label: "Prototyping", type: "UI Design" },
        { time: "10.00 AM", label: "Photo Manipulation", type: "Graphic Design" },
        { time: "02.00 PM", label: "Interaction Design", type: "UX Design" },
        { time: "04.00 PM", label: "Basic React.js", type: "Programming" },
      ],
    },
  ];

  return (
    <div className="flex font-poppins bg-gray-50 min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <PageHeader title="Dashboard" breadcrumb="Home / Dashboard" />

        <div className="p-6 space-y-8">
          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {statCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white shadow rounded-2xl p-4 space-y-2 flex flex-col justify-between"
              >
                <p className="text-gray-500 text-sm">{card.title}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">{card.value}</span>
                  <span className="text-xs text-green-600">{card.change}</span>
                </div>
                <div className="mt-2">{card.chart}</div>
              </div>
            ))}
          </div>

          {/* Working Activity */}
          <div className="bg-white shadow rounded-2xl p-4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600 font-semibold">Working Activity</p>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <span className="inline-block w-3 h-3 bg-[#00B074] rounded-full" /> Performance
                </div>
                <div className="flex items-center gap-1">
                  <span className="inline-block w-3 h-3 bg-[#f59e0b] rounded-full" /> Impression
                </div>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="performance" fill="#00B074" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="impression" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Calendar and Events */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-2xl p-4">
              <p className="text-gray-600 font-semibold mb-4">January, 2022</p>
              <div className="h-52 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400">
                <CalendarDays className="w-6 h-6 mr-2" /> Calendar Placeholder
              </div>
            </div>

            <div className="bg-white shadow rounded-2xl p-4">
              <p className="text-gray-600 font-semibold mb-4">Upcoming Events</p>
              <div className="space-y-4">
                {events.map((event, idx) => (
                  <div key={idx}>
                    <p className="text-gray-500 font-medium mb-1">{event.date}</p>
                    {event.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between border-l-2 pl-3 border-dashed border-green-400"
                      >
                        <span className="text-sm text-gray-400">{item.time}</span>
                        <div className="text-sm">
                          <span className="font-medium text-gray-800">{item.label}</span>
                          <p className="text-xs text-gray-500">{item.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;