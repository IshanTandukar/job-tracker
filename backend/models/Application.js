const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
      minlength: 2,
    },

    job_title: {
      type: String,
      required: true,
    },

    job_type: {
      type: String,
      enum: ["Internship", "Full-time", "Part-time"],
      required: true,
    },

    status: {
      type: String,
      enum: ["Applied", "Interviewing", "Offer", "Rejected"],
      default: "Applied",
    },

    applied_date: {
      type: Date,
      default: Date.now(),
    },

    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Application", applicationSchema);
