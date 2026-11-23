"use client";

import React from "react";
import SmoothScrollProvider from "@/components/storytelling/SmoothScrollProvider";
import StoryProgress from "@/components/storytelling/StoryProgress";
import Navbar from "@/components/layout/Navbar";
import Scene01Hero from "@/components/scenes/Scene01Hero";
import Scene02Problem from "@/components/scenes/Scene02Problem";
import Scene03Solution from "@/components/scenes/Scene03Solution";
import Scene04Workflow from "@/components/scenes/Scene04Workflow";
import Scene05ScientificCore from "@/components/scenes/Scene05ScientificCore";
import Scene06AppShowcase from "@/components/scenes/Scene06AppShowcase";
import Scene07Journey from "@/components/scenes/Scene07Journey";
import Scene08Team from "@/components/scenes/Scene08Team";
import Scene09Future from "@/components/scenes/Scene09Future";
import Scene10Finale from "@/components/scenes/Scene10Finale";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#FFF7EA] text-[#273141] flex flex-col justify-between overflow-x-hidden relative">
        {/* Floating Story Progress Tracker */}
        <StoryProgress />

        {/* Brand Header & Navigation */}
        <Navbar />

        {/* The 10 Cinematic Story Chapters */}
        <main className="flex-1 w-full flex flex-col items-center">
          <Scene01Hero />
          <Scene02Problem />
          <Scene03Solution />
          <Scene04Workflow />
          <Scene05ScientificCore />
          <Scene06AppShowcase />
          <Scene07Journey />
          <Scene08Team />
          <Scene09Future />
          <Scene10Finale />
        </main>
      </div>
    </SmoothScrollProvider>
  );
}
