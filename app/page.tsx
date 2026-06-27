"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeScreen from "@/components/screens/HomeScreen";
import TrainingScreen from "@/components/screens/TrainingScreen";
import CoursesScreen from "@/components/screens/CoursesScreen";
import ResourcesScreen from "@/components/screens/ResourcesScreen";
import ProjectsScreen from "@/components/screens/ProjectsScreen";
import AboutScreen from "@/components/screens/AboutScreen";
import { type Page } from "@/lib/data";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const goTo = (p: Page) => {
    setPage(p);
    try {
      window.scrollTo({ top: 0, behavior: "auto" });
    } catch {
      // noop in SSR context
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header page={page} setPage={goTo} />
      <main style={{ flex: 1 }}>
        {page === "home" && <HomeScreen setPage={goTo} />}
        {page === "training" && <TrainingScreen />}
        {page === "courses" && <CoursesScreen setPage={goTo} />}
        {page === "resources" && <ResourcesScreen />}
        {page === "projects" && <ProjectsScreen />}
        {page === "about" && <AboutScreen />}
      </main>
      <Footer setPage={goTo} />
    </div>
  );
}
