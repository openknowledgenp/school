import type { Metadata } from "next";
import ResourcesScreen from "@/components/screens/ResourcesScreen";

export const metadata: Metadata = {
  title: "Resources",
  description: "Download open guides, toolkits, datasets and templates to learn on your own or run your own data and digital literacy sessions.",
};

export default function ResourcesPage() {
  return <ResourcesScreen />;
}
