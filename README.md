# AI Product Dashboard Backend

This project provides the server-side components for an AI product's dashboard. It utilizes Node.js with Express for the backend and includes Python for simulating AI-related functionality.

## Getting Started

Follow these steps to set up and run the backend for the AI product's dashboard.

### Prerequisites

- Node.js and npm: Make sure you have Node.js and npm (Node Package Manager) installed on your system.

### Installation

1. Clone the repository:

```bash
  git clone https://github.com/akshay058/ai-dashboard-backend.git
   cd ai-dashboard-backend
```

### Install dependencies:

```bash
  npm install
```

### Running the Backend

Start the Node.js server:

```bash
  node index.js

```

The backend server will be running at http://localhost:8080 by default. You can access the API endpoints through this URL.

### Generating Prediction Data

1. Navigate to the python_scripts folder:

```bash
  cd python_ai_script
```

2. Run the Python script to generate prediction data:

```bash
  python prediction_ai_script.py
```

### API Endpoints

- /api/metrics:Fetch mock AI model metrics data in JSON format.
- /api/predictions: Fetch simulated AI predictions and actual results for data visualization.

## Error Handling

The backend includes error handling to provide meaningful responses in case of errors. Invalid JSON data or Python script errors are also handled gracefully.

## Contributing

Contributions are welcome! If you find issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## Author

- [@Akshay](https://www.github.com/akshay058)

Thank you for your patience, and I hope this version provides all the necessary information for you to set up and run the server.
