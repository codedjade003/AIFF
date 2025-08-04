#!/bin/bash

# --- Configuration ---
PROJECT_NAME="aiff-website"

# --- Create Vite + React App ---
echo "🎬 Creating Vite + React app: $PROJECT_NAME"
npm create vite@latest $PROJECT_NAME -- --template react

cd $PROJECT_NAME

# --- Install Tailwind CSS ---
echo "🎨 Installing Tailwind CSS..."
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# --- Tailwind Config ---
cat > tailwind.config.js <<EOL
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

# --- Tailwind CSS Entry ---
mkdir -p src/styles
cat > src/styles/tailwind.css <<EOL
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL

# --- Install React Router ---
echo "🧭 Installing React Router..."
npm install react-router-dom

# --- Create Folder Structure ---
echo "📁 Creating folders..."
mkdir -p src/components src/pages src/assets src/utils src/data

# --- Create Basic Pages ---
echo "📝 Creating starter pages..."
for PAGE in Home About Films Schedule Venue Tickets Contact Submit Workshop Gallery; do
  cat > src/pages/${PAGE}.jsx <<EOL
import React from "react";

const ${PAGE} = () => {
  return (
    <div className="py-20 text-center">
      <h1 className="text-3xl font-bold">${PAGE} Page</h1>
    </div>
  );
};

export default ${PAGE};
EOL
done

# --- Main.jsx with Router ---
cat > src/main.jsx <<EOL
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
EOL

# --- App.jsx with Routes ---
cat > src/App.jsx <<EOL
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Films from "./pages/Films";
import Schedule from "./pages/Schedule";
import Venue from "./pages/Venue";
import Tickets from "./pages/Tickets";
import Contact from "./pages/Contact";
import Submit from "./pages/Submit";
import Workshop from "./pages/Workshop";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/films" element={<Films />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/venue" element={<Venue />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/submit" element={<Submit />} />
      <Route path="/workshop" element={<Workshop />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;
EOL

# --- Add Font Awesome to index.html ---
sed -i '' '/<head>/a\
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
' index.html 2>/dev/null || sed -i '/<head>/a\
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
' index.html

# --- Set base path for Hostinger (relative URLs) ---
sed -i '' 's|base: .*|base: "./",|' vite.config.js 2>/dev/null || sed -i 's|base: .*|base: "./",|' vite.config.js

# --- Done ---
echo "✅ Project is ready!"
echo "👉 cd $PROJECT_NAME"
echo "👉 npm install"
echo "👉 npm run dev"
