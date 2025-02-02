// models/Organization.js
import mongoose from 'mongoose';

const organizationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // Link to the User model
    },
    companyName: {
      type: String,
      required: true,
    },
    companyWebsite: {
      type: String,
      required: true,
    },
    companyDescription: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Organization = mongoose.model('Organization', organizationSchema);
export default Organization;
