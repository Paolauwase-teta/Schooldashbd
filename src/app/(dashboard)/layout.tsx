import React from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";
import AdminPage from "./admin/page" ;

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex">
      {/*SideBar*/}
      <div className="w-[14%] lg:w-[16%] xl:w-[14%] p-4 md:w-[8%]">
      <Link href= "/" className="flex items-center justify-center gap-2 ">
      <Image src="/logo.png" alt= "logo" width={32} height={32} />
      <span className="hidden lg:block text-black">SchoolLama</span>
       </Link>
       <Menu/>
      </div>
      
      {/*MainContent*/}
      <div className=" xl:w-[86%] lg:w-[92%] md:w-[84%] bg-[#F7F8FA] max-h-full flex-auto overflow-y-auto ">
         <NavBar/>
         <AdminPage/>
      </div>
    </div>
  );
}