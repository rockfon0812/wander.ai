# WanderAI - Smart Travel Companion

WanderAI is a mobile-first intelligent travel assistant that helps you discover local gems with Google Maps integration and generates detailed, personalized itineraries using Gemini AI.

## Features

*   **Explore**: Chat with AI to find places nearby, get recommendations, and see Google Maps links.
*   **Plan Trip**: Generate structured day-by-day itineraries based on your interests and duration.
*   **Saved Trips**: Save your favorite itineraries for offline access.

## Tech Stack

*   React 19
*   Vite
*   Tailwind CSS
*   Google Gemini API (@google/genai)
*   React Router DOM

## Getting Started

### Prerequisites

*   Node.js (v18 or higher recommended)
*   A Google Gemini API Key

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/wander-ai.git
    cd wander-ai
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Create an environment file:
    Create a file named `.env` in the root directory and add your API key:
    ```
    API_KEY=your_gemini_api_key_here
    ```

4.  Start the development server:
    ```bash
    npm run dev
    ```

## Deployment to GitHub Pages

1.  Update the `homepage` field in `package.json` to match your GitHub repository URL:
    ```json
    "homepage": "https://<your-username>.github.io/<your-repo-name>"
    ```

2.  Run the deploy script:
    ```bash
    npm run deploy
    ```
    *Note: Since GitHub Pages is a static host, you need to ensure your API Key is handled correctly during the build process if using GitHub Actions, or built locally with the `.env` file present.*
