const fs = require('fs');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const setupDatabase = async () => {
  try {
    console.log('Running migrations...');
    
    // Run initial schema
    const initialSchema = fs.readFileSync('./migrations/20241122-1200-create-schema.sql', 'utf8');
    await pool.query(initialSchema);
    console.log('Initial schema created');

    // Run engagement metrics schema
    const metricsSchema = fs.readFileSync('./migrations/20241206-0800-engagement-metrics.sql', 'utf8');
    await pool.query(metricsSchema);
    console.log('Engagement metrics schema created');

    await pool.end();
    console.log('Migrations completed successfully');
  } catch (err) {
    console.error('Migration error:', err);
    process.exit(1);
  }
};

setupDatabase();