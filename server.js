const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the public folder (for styles.css)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Serve the extension file for download
app.get('/download-extension', (req, res) => {
    const file = path.join(__dirname, 'EduCompanion.zip');
    res.download(file); // Set disposition and send it.
});

// Start the server
const PORT = process.env.PORT || 8005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
