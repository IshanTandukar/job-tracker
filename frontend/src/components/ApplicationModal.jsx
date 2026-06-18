import { useState, useEffect } from "react";

export const ApplicationModal = ({
  loading,
  showModal,
  setShowModal,
  editingApplication,
  saveApplication,
  setEditingApplication,
}) => {
  const initialState = {
    company_name: "",
    job_title: "",
    job_type: "Internship",
    status: "Applied",
    applied_date: "",
    notes: "",
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingApplication) {
      setFormData({
        company_name: editingApplication.company_name,
        job_title: editingApplication.job_title,
        job_type: editingApplication.job_type,
        status: editingApplication.status,
        applied_date: editingApplication.applied_date?.slice(0, 10),
        notes: editingApplication.notes || "",
      });
    } else {
      setFormData(initialState);
    }
  }, [editingApplication, showModal]);

  if (!showModal) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    saveApplication(formData);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingApplication(null);
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center"
      onClick={() => closeModal()}
    >
      <form
        onSubmit={submit}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[90%] max-w-2xl rounded-2xl p-6 shadow-xl"
      >
        <div className="flex  flex-col justify-between mb-6 relative">
          <h2 className=" text-2xl font-bold text-center">
            {editingApplication ? "Edit Application" : "Add New Application"}
          </h2>

          <button
            onClick={closeModal}
            className="text-xl cursor-pointer absolute top-0.5 right-3 font-bold"
          >
            X
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            placeholder="Company Name"
            className="border p-3 rounded-lg focus:outline-none"
          />

          <input
            name="job_title"
            value={formData.job_title}
            onChange={handleChange}
            placeholder="Job Title"
            className="border p-3 rounded-lg focus:outline-none"
          />

          <select
            name="job_type"
            value={formData.job_type}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:outline-none"
          >
            <option>Internship</option>
            <option>Full-time</option>
            <option>Part-time</option>
          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:outline-none"
          >
            <option>Applied</option>
            <option>Interviewing</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>

          <input
            name="applied_date"
            value={formData.applied_date}
            onChange={handleChange}
            placeholder="Applied Date"
            type="date"
            className="border  p-3 rounded-lg  col-span-2 focus:outline-none"
          />

          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={4}
            placeholder="Notes"
            className="border p-3 rounded-lg col-span-2 focus:outline-none resize-none"
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={closeModal}
            className="border px-4 py-2 rounded-lg bg-red-500 text-white"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="border px-4 py-2 rounded-lg bg-green-500 text-white"
          >
            {loading ? "Saving..." : editingApplication ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};
