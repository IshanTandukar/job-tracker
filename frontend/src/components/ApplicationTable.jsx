const statusColors = {
  Applied: "bg-blue-100 text-blue-700",
  Interviewing: "bg-yellow-100 text-yellow-700",
  Offer: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};

export const ApplicationTable = ({
  applications,
  setEditingApplication,
  setShowModal,
  deleteApplication,
}) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto mt-3 m-3">
      <table className="w-full   ">
        <thead className="bg-blue-500 text-white ">
          <tr>
            <th className="p-3 text-left">Company</th>
            <th className="p-3 text-left">Job Title</th>
            <th className="p-3 text-left">Job Type</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Applied Date</th>
            <th className="p-3 text-left">Notes</th>
            <th className="p-3 text-left">Created</th>
            <th className="p-3 text-left">Updated</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app._id} className="border-b">
              <td className="p-3">{app.company_name}</td>
              <td className="p-3">{app.job_title}</td>
              <td className="p-3">{app.job_type}</td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${statusColors[app.status]}`}
                >
                  {app.status}
                </span>
              </td>
              <td className="p-3">{app.applied_date}</td>
              <td className="p-3">{app.notes}</td>
              <td className="p-3">{app.createdAt}</td>
              <td className="p-3">{app.updatedAt}</td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => {
                    setEditingApplication(app);
                    setShowModal(true);
                  }}
                  className="bg-yellow-500 text-white px-3 py-1 rounded cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    const confirmDelete = window.confirm(
                      "Are you sure you want to delete this application?",
                    );
                    if (confirmDelete) {
                      deleteApplication(app._id);
                      setEditingApplication(null);
                    }
                  }}
                  className="bg-red-500 text-white px-3 py-1 ml-1 rounded cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
