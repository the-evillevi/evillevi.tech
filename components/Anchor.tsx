export default function Anchor({
  children,
  href,
  download = false,
}: {
  children: React.ReactNode;
  href: string;
  download?: boolean;
}) {
  return (
    <a
      download={download}
      href={href}
      target="_blank"
      className="group flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 outline-none transition hover:scale-110 hover:bg-gray-50 focus:scale-110 active:scale-105"
    >
      {children}
    </a>
  );
}
