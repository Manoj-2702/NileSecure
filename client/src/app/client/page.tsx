"use client";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const userAgent = navigator.userAgent;
  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
  const isDesktop = !isMobile;
  const platform = navigator.platform;
  const vendor = navigator.vendor;
  //   const nav = navigator.vendor;

  return (
    <main className="h-screen text-white p-4 space-y-4">
      <div>User Agent: {userAgent}</div>
      <div>Is Mobile: {isMobile ? "Yes" : "No"}</div>
      <div>Is Desktop: {isDesktop ? "Yes" : "No"}</div>
      <div>Platform: {platform}</div>
      <div>Vendor: {vendor}</div>
    </main>
  );
}
