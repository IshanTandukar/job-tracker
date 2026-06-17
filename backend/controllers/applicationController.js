const Application = require("../models/Application");

// - GET /applications — list all applications, supporting ?status= and ?search=
// - GET /applications/:id — get a single application
// - POST /applications — create a new application
// - PATCH /applications/:id — update an application partially
// - DELETE /applications/:id — delete an application

// GET /applications
const getApplications = async (req, res) => {
  const { status, search } = req.query;

  let query = {};

  if (status) {
    query.status = status;
  }

  if (search) {
    query.$or = [
      {
        company_name: {
          $regex: search,
          $options: "i",
        },
      },

      {
        job_title: {
          $regex: search,
          $options: "i",
        },
      },
    ];
  }

  const applications = await Application.find(query);
  res.json(applications);
};

// - GET /applications/:id — get a single application
const getApplicationById = async (req, res) => {
  const application = await Application.findById(req.params.id);

  if (!application) {
    return res.status(404).json({ message: "Application not found" });
  }

  res.json(application);
};

// - POST /applications — create a new application
const createApplication = async (req, res) => {
  const application = await Application.create(req.body);
  res.status(201).json(application);
};

// - PATCH /applications/:id — update an application partially
const updateApplication = async (req, res) => {
  const application = await Application.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    },
  );
  res.json(application);
};

// - DELETE /applications/:id — delete an application
const deleteApplication = async (req, res) => {
  await Application.findByIdAndDelete(req.params.id);

  res.json({
    message: "Application deleted",
  });
};

module.exports = {
  getApplications,
  getApplicationById,
  createApplication,
  updateApplication,
  deleteApplication,
};
