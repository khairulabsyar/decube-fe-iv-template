import { cn } from "@/lib/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

import { Inter } from "next/font/google";
import Image from "next/image";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <main
        className={cn(
          "min-h-[100vh] flex flex-col items-center bg-[#FFFFF0] text-black antialiased justify-center p-24 gap-4 *:max-w-[1920px] *:px-5",
          inter.className,
        )}
      >
        <Navbar />
        {children}
      </main>
    </QueryClientProvider>
  );
}
