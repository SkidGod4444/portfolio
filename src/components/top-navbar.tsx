"use client";
import React from "react";
import { FloatingNav } from "./acternityui/floating-nav";
import { navItems } from "@/data/config/nav.config";
export function TopNavbar() {
  return (
    <div className="flex h-full w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
