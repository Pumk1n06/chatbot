// controllers/userController.js
import Organization from '../models/Organization.js'; // Make sure you have the model

export const setupOrganization = async (req, res) => {
  const { companyName, companyWebsite, companyDescription } = req.body;

  try {
    const newOrganization = new Organization({
      user: req.user._id,  // Assuming user ID is stored in `req.user` by `protect`
      companyName,
      companyWebsite,
      companyDescription
    });

    await newOrganization.save();
    res.status(201).json({ message: 'Organization setup successful', data: newOrganization });
  } catch (error) {
    res.status(500).json({ message: 'Error setting up organization', error: error.message });
  }
};
