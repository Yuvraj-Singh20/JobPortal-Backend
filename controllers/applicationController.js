const Application = require('../models/application');
const Job = require('../models/job');

// Apply for a job
exports.applyForJob = async (req, res) => {
  try {
    const { jobId } = req.body;

    // Check if job exists
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    // Check if already applied
    const existingApp = await Application.findOne({ user: req.user._id, job: jobId });
    if (existingApp) return res.status(400).json({ message: 'Already applied for this job' });

    const application = new Application({ user: req.user._id, job: jobId });
    await application.save();

    res.status(201).json({ message: 'Applied successfully', application });
  } catch (err) {
    res.status(500).json({ message: 'Failed to apply' });
  }
};

// Get all applications of logged-in user
exports.getUserApplications = async (req, res) => {
  try {
    const applications = await Application.find({ user: req.user._id }).populate('job');
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch applications' });
  }
};

// Delete an application
exports.deleteApplication = async (req, res) => {
  try {
    const application = await Application.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });

    if (!application) return res.status(404).json({ message: 'Application not found' });

    res.json({ message: 'Application deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete application' });
  }
};
