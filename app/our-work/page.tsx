import type { Metadata } from "next";
import ProjectsScreen from "@/components/screens/ProjectsScreen";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Ten years of data, digital and AI literacy programmes across Nepal — from community datathons to national conferences to hands-on training for local government.",
};

export default function OurWorkPage() {
  return <ProjectsScreen />;
}
