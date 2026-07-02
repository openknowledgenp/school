import type { Metadata } from "next";
import TrainingScreen from "@/components/screens/TrainingScreen";

export const metadata: Metadata = {
  title: "Training",
  description: "Request a tailored data, digital or AI literacy workshop for your organisation, school, newsroom or local government.",
};

export default function TrainingPage() {
  return <TrainingScreen />;
}
