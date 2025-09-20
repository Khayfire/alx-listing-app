interface PillProps {
  label: string;
}

const Pill: React.FC<PillProps> = ({ label }) => {
  return (
    <button className="px-4 py-2 rounded-full border bg-gray-100 hover:bg-gray-200">
      {label}
    </button>
  );
};

export default Pill;
