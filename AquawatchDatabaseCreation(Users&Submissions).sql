-- Users Table
CREATE TABLE Users (
    UserId INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Username VARCHAR(50) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL, -- Store hashed passwords, not plain text
    UserRole ENUM('volunteer', 'scientist') NOT NULL
);

-- Data Submissions Table
CREATE TABLE Submissions (
    SubmissionId INT AUTO_INCREMENT PRIMARY KEY,
    UserId INT NOT NULL,
    pH DECIMAL(3, 2) CHECK (pH BETWEEN 0 AND 14), -- pH typically ranges from 0 to 14
    Salinity DECIMAL(5, 2) CHECK (Salinity BETWEEN 0 AND 40), -- Practical salinity range (0 - 40 PSU for most natural waters)
    Purity DECIMAL(5, 2) CHECK (Purity BETWEEN 0 AND 100), -- Assuming purity percentage (0 - 100%)
    Density DECIMAL(5, 3) CHECK (Density BETWEEN 0.9 AND 1.5), -- Typical range for liquid density (g/cm³)
    Temperature DECIMAL(5, 2) CHECK (Temperature BETWEEN -10 AND 100), -- Temperature range in Celsius
    Turbidity DECIMAL(5, 2) CHECK (Turbidity BETWEEN 0 AND 1000), -- Turbidity in NTU (0 - 1000 NTU for a broad range)
    SubmissionTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserId) REFERENCES Users(UserId)
);

