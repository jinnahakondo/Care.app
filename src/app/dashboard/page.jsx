"use client";
import React from "react";
import UserDashboard from "@/components/dashboard/User/UserDashboard";
import { useSession } from "next-auth/react";

const DashboardPage = () => {
  const { data: session, status } = useSession();
  const role = session.user.role;
  console.log("session", status, session);
  if (role === "user") {
    return <UserDashboard />;
  }else{
    return 'hello'
  }
};

export default DashboardPage;
