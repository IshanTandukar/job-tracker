import { useState, useEffect, useCallback } from "react";
import { Navbar } from "../components/Navbar.jsx";
import { SearchBar } from "../components/SearchBar.jsx";
import { StatusFilter } from "../components/StatusFilter.jsx";
import { ApplicationTable } from "../components/ApplicationTable.jsx";
import { ApplicationModal } from "../components/ApplicationModal.jsx";

import api from "../services/api.js";

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editingApplication, setEditingApplication] = useState(null);
  const [loading, setLoading] = useState(false);

  //get data from backend
  const fetchApplications = useCallback(async () => {
    try {
      const res = await api.get("/applications");
      setApplications(res.data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  }, []);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  //add and edit application
  const saveApplication = async (data) => {
    setLoading(true);
    try {
      if (editingApplication) {
        await api.patch(`applications/${editingApplication._id}`, data);
      } else {
        await api.post("applications", data);
      }
      await fetchApplications();
      setShowModal(false);
      setEditingApplication(null);
    } catch (error) {
      console.error("Error saving application:", error);
    } finally {
      setLoading(false);
    }
  };

  //delete application
  const deleteApplication = async (id) => {
    try {
      await api.delete(`applications/${id}`);
      await fetchApplications();
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  //filter applications based on search and status
  const filteredApplications = applications.filter((app) => {
    const searchMatch =
      app.company_name.toLowerCase().includes(search.toLowerCase()) ||
      app.job_title.toLowerCase().includes(search.toLowerCase());

    const statusMatch = status === "All" || app.status === status;

    return searchMatch && statusMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar
        setShowModal={setShowModal}
        setEditingApplication={setEditingApplication}
      />

      <SearchBar search={search} setSearch={setSearch} />

      <StatusFilter status={status} setStatus={setStatus} />

      <ApplicationTable
        applications={filteredApplications}
        setEditingApplication={setEditingApplication}
        setShowModal={setShowModal}
        deleteApplication={deleteApplication}
      />

      <ApplicationModal
        loading={loading}
        showModal={showModal}
        setShowModal={setShowModal}
        editingApplication={editingApplication}
        setEditingApplication={setEditingApplication}
        saveApplication={saveApplication}
      />
    </div>
  );
};

export default Dashboard;
