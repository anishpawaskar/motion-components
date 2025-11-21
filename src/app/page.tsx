import { AceternityCard } from "@/components/aceternity-card";
import { Dashboard } from "@/components/dashboard";
import { HoverButton } from "@/components/hover-button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HoverButton />
      <AceternityCard />
      <Dashboard />
    </div>
  );
}
