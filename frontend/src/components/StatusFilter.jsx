const statuses = ["All", "Applied", "Interviewing", "Offer", "Rejected"];

export const StatusFilter = ({ status, setStatus }) => {
  return (
    <div className="flex gap-3 flex-wrap p-3 justify-end">
      {statuses.map((item, index) => (
        <button
          key={index}
          onClick={() => setStatus(item)}
          className={`px-4 py-2 rounded-lg border cursor-pointer ${status === item ? "bg-blue-500 text-white" : "bg-white"}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
