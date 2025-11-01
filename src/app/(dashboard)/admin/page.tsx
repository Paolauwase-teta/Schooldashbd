import React from 'react'
import UserCard from '@/components/UserCard';
import CountChart from '@/components/CountChart';
import AttendantChart from '@/components/AttendantChart';
import FinanceChart from '@/components/FinanceChart';
import EventCalendar from '@/components/EventCalendar';


const AdminPage = () => {
  return (
    <div className="p-4 flex flex-row md:flex-row gap-4">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-5">
        {/* User Cards */}
        <div className="flex justify-between gap-2 flex-wrap">
          <UserCard type="Students" />
          <UserCard type="Teachers" />
          <UserCard type="Parents" />
          <UserCard type="Staff" />
        </div>

        {/* Middle Charts */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Count Chart */}
          <div className="w-[500px] h-[450px] mb-3">
            <CountChart />
          </div>

          {/* Attendance Chart */}
          <div className="w-[600px] h-[450px]">
            <AttendantChart />
          </div>
        </div>

        {/* Bottom Chart */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 text-black flex flex-col gap-8">
        <EventCalendar />
      </div>
    </div>
  );
};

export default AdminPage;
