# OCR Text Server

## Overview

The OCR Text Server is a web application that utilizes Optical Character Recognition (OCR) technology to extract text from images. Users can upload images, and the server processes them to retrieve any text present. This project is built using **Node.js** for the backend and **React** for the frontend.

## Features

- Upload images to extract text.
- Support for both English and Thai languages.
- User-friendly interface with loading indicators.
- Option to copy extracted text to the clipboard.

## Technology Stack

- **Frontend:**
  - React
  - Axios (for API requests)
  - Tailwind CSS (for styling)
  - Tesseract.js (for OCR processing)

- **Backend:**
  - Node.js
  - Express.js
  - Multer (for handling file uploads)
  - Tesseract.js (for OCR processing)
  - CORS (to handle cross-origin requests)

## Project Structure

```
/ocr-text-server
│
├── server.js              # Entry point for the Express server
├── routes
│   └── main.js            # Main routing file for API endpoints
└── sys
    └── ocr.js             # OCR processing logic
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nomadsdev/ocr-text-server.git
   cd ocr-text-server
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```

## Usage

1. Navigate to the React application in your browser.
2. Upload an image file to extract text.
3. Click the "Extract Data" button to retrieve the text.
4. You can copy the extracted text to your clipboard.

## Contact

For support or inquiries, please contact us at:  
**Email:** support@jmmentertainment.com
