const StatusBadge = ({ status }) => {
  const base = "px-2 py-1 text-xs rounded-full font-semibold";
  const styles = {
    "New": "bg-blue-100 text-blue-600",
    "In-progress": "bg-yellow-100 text-yellow-700",
    "Completed": "bg-green-100 text-green-600",
  };
  return <span className={`${base} ${styles[status]}`}>{status}</span>;
};
export default StatusBadge;
