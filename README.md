# <img src="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/shield-halved.svg" width="32" height="32" /> InsureX AI — Insurance Premium Prediction

[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Scikit-Learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)](https://scikit-learn.org/)
[![Status](https://img.shields.io/badge/Status-Production--Ready-success?style=for-the-badge)](https://github.com/Dhanam-patel)

> **InsureX AI** is a state-of-the-art insurance premium prediction platform. By combining a robust FastAPI-powered machine learning backend with a premium React-based glassmorphic interface, it delivers lightning-fast, data-driven insurance risk assessments and premium estimations.

---

## ✨ Key Features

### 🧠 Intelligent Backend
- **ML-Powered Predictions**: Leverages a trained Scikit-Learn model for accurate premium estimation.
- **Expert Fallback System**: Built-in algorithmic fallback logic ensures service availability even if the model is offline.
- **Auto-Computed Metrics**: Automatically calculates BMI, Risk Levels, and City Tiers from basic user input.
- **Robust Documentation**: Real-time interactive API docs powered by Swagger and ReDoc.

### 🎨 Premium Frontend
- **Modern UI/UX**: A sleek, glassmorphic design inspired by high-end SaaS dashboards.
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop viewing.
- **Real-time Feedback**: Interactive form validation with instant risk level visualization.
- **Micro-Animations**: Smooth transitions and hover effects for an engaging user experience.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite, Vanilla CSS. |
| **Backend** | FastAPI, Pydantic, Uvicorn, Gunicorn. |
| **Data Science** | Scikit-Learn, Pandas, Pickle. |
| **DevOps** | CORS Middleware, Environment Configs. |

---

## 📁 Project Structure

```bash
InsureX AI/
├── backend/               # FastAPI ML Engine
│   ├── main.py            # API Entry Point & Logic
│   ├── model.pkl          # Serialized ML Model
│   └── requirements.txt   # Python Dependencies
├── frontend/              # React Premium UI
│   ├── src/               # Application Source
│   │   ├── components/    # Reusable UI Blocks
│   │   └── services/      # API Integration
│   ├── index.html         # Entry point
│   └── package.json       # JS Dependencies
└── Readme.md              # Documentation (This file)
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Dhanam-patel/InsureX-AI-Insurance-Premium-Prediction.git
cd "InsureX AI - Insurance Premium Prediction"
```

### 2️⃣ Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```
*The API will be live at `http://localhost:8000`*

### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
*The Dashboard will be live at `http://localhost:5173`*

---

## 📡 API Documentation

### **POST** `/predict`
Predict the insurance premium based on user demographics and health data.

**Request Payload:**
```json
{
  "age": 30,
  "weight": 70,
  "height": 1.75,
  "income_lpa": 10.5,
  "smoker": false,
  "city": "Mumbai",
  "occupation": "private_job"
}
```

**Response Example:**
```json
{
  "prediction": 12500.0,
  "risk_level": "low",
  "message": "Success"
}
```

---

## 🖼️ User Interface
![Dashboard Mockup](https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/desktop.svg)
*Our glassmorphic UI provides a seamless experience for both agents and customers.*

---

## 🤝 Contributing & Support

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Contact:** [Dhanam-patel](https://github.com/Dhanam-patel)  
**License:** Distributed under the MIT License.

---
<p align="center">Built with ❤️ for the Insurance Industry</p>
