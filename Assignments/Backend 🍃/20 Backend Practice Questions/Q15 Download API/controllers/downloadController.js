import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Ensure the directory is created in the ROOT folder
const fileDir = path.join(process.cwd(), "files");

// Check and create 'files' directory if it doesn't exist
if (!fs.existsSync(fileDir)) {
    fs.mkdirSync(fileDir, { recursive: true });
    console.log(`✅ Directory '${fileDir}' created in ROOT successfully.`);
} else {
    console.log(`📂 Directory '${fileDir}' already exists in ROOT.`);
}

const download = async (req, res) => {
    try {
        const filePath = path.join(fileDir, "img.png");

        // ✅ Check if the file exists
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({
                success: false,
                message: "File not found",
            });
        }

        res.download(filePath, "downloaded-img.png", (err) => {
            if (err) {
                console.error("❌ File download error:", err);
                return res.status(500).json({
                    success: false,
                    message: "Error downloading file",
                });
            }
        });

    } catch (err) {
        console.error("❌ Server error:", err);
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

export { download };
