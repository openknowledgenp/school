import type { Metadata } from "next";
import AboutScreen from "@/components/screens/AboutScreen";

export const metadata: Metadata = {
  title: "About",
  description: "Open Knowledge Foundation Nepal — the Nepal chapter of the global Open Knowledge Network, building data, digital and AI literacy since 2013.",
};

export default function AboutPage() {
  return <AboutScreen />;
}
