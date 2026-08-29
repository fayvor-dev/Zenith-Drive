import SectionHeading from "@/components/SectionHeading";
import TestDriveForm from "@/components/TestDriveForm";

export const metadata = {
  title: "Book a Test Drive | Zenith Drive",
};

export default function TestDrivePage({
  searchParams,
}: {
  searchParams: { vehicle?: string };
}) {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10 max-w-3xl mx-auto">
      <SectionHeading
        eyebrow="Book a Test Drive"
        title="Experience it for yourself"
        description="Fill in your details and preferred time, and our team will confirm your test drive at the Zenith Drive showroom."
      />
      <div className="mt-12">
        <TestDriveForm preselectedVehicle={searchParams.vehicle ?? ""} />
      </div>
    </div>
  );
}
