export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-10 mt-4 px-4 text-2xl font-medium sm:text-4xl">
      {children}
    </h2>
  );
}
