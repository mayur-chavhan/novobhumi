-- Novobhumi Database Initialization Script
-- This script runs on first database initialization

-- Set character encoding
SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;

-- Create additional indexes for performance (if not created by Prisma)
-- These will be applied after Prisma migrations

-- Grant permissions
GRANT ALL PRIVILEGES ON novobhumi.* TO 'novobhumi'@'%';
FLUSH PRIVILEGES;

-- Log initialization
SELECT 'Novobhumi database initialized successfully' AS status;
