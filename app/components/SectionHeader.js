export default function SectionHeader({ children, className }) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl font-bold underline">{children}</h2>
    </div>
  );
}