const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

dotenv.config();

const createAdminDirect = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Get the admin collection directly
    const db = mongoose.connection.db;
    const collection = db.collection('admins');

    // Check if admin exists
    const existing = await collection.findOne({ email: 'admin@umpcferi.ac.za' });
    
    if (existing) {
      console.log('✅ Admin already exists!');
      console.log('Email: admin@umpcferi.ac.za');
      console.log('Password: admin123');
      await mongoose.disconnect();
      process.exit();
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);

    // Create admin
    await collection.insertOne({
      name: 'Admin User',
      email: 'admin@umpcferi.ac.za',
      password: hashedPassword,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    });

    console.log('✅ Admin created successfully!');
    console.log('Email: admin@umpcferi.ac.za');
    console.log('Password: admin123');
    
    await mongoose.disconnect();
    process.exit();
  } catch (error) {
    console.error('❌ Error:', error.message);
    await mongoose.disconnect();
    process.exit(1);
  }
};

createAdminDirect();