const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');

dotenv.config();

const createAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: 'admin@umpcferi.ac.za' });
    
    if (existingAdmin) {
      console.log('✅ Admin already exists!');
      console.log('Email: admin@umpcferi.ac.za');
      console.log('Password: admin123');
      await mongoose.disconnect();
      process.exit();
    }

    // Create new admin
    const admin = new Admin({
      name: 'Admin User',
      email: 'admin@umpcferi.ac.za',
      password: 'admin123'
    });

    await admin.save();
    
    console.log('✅ Admin created successfully!');
    console.log('Email:', admin.email);
    console.log('Password: admin123');
    
    await mongoose.disconnect();
    process.exit();
  } catch (error) {
    console.error('❌ Error:', error.message);
    await mongoose.disconnect();
    process.exit(1);
  }
};

createAdmin();