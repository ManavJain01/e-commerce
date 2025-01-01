// Importing Local Files
import PageHeader from "./components/PageHeader";
import Labs from "./components/Labs";
import InformationSection from "./components/InformationSection";
import VideoShowcase from "./components/VideoShowcase";

export default function LabTests() {
  return (
    <div className="bg-blue-100 min-w-[100vw] min-h-[60vh] px-10 py-28 flex flex-col gap-20">
      <PageHeader />
      <Labs />
      <VideoShowcase />
      <InformationSection />
    </div>
  )
}