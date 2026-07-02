import type { Metadata } from "next";
import CoursesScreen from "@/components/screens/CoursesScreen";

export const metadata: Metadata = {
  title: "Courses",
  description: "Free, openly licensed courses in open data, data visualisation, gender data, AI, digital security, and data journalism — built from real Nepali examples.",
};

export default function CoursesPage() {
  return <CoursesScreen />;
}
