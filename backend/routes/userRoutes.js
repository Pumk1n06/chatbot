// routes/userRoutes.js
import express from 'express';
import { setupOrganization } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';  // Protect route with authentication
import { body, validationResult } from 'express-validator'; // Add validation

const router = express.Router();

// Validation middleware for the /organisation-setup route
const validateOrganization = [
  body('companyName').notEmpty().withMessage('Company Name is required'),
  body('companyWebsite').isURL().withMessage('Invalid Company Website URL'),
  body('companyDescription').notEmpty().withMessage('Company Description is required'),
];

router.post(
  '/organisation-setup',
  protect,  // Apply the protect middleware to authenticate the user
  validateOrganization,  // Validate the request body
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  setupOrganization  // Call the controller function after validation
);

export default router;
