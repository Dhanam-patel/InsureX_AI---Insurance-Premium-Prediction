
# Insurance Premium Prediction - Full Stack Application

A production-ready full-stack ML application for insurance premium prediction. Features a FastAPI backend with a modern React frontend.

## 📋 Project Structure

```
Insurance Premium Prediction/
├── backend/                      # FastAPI backend
│   ├── app/
│   │   ├── main.py               # FastAPI application entry point
│   │   ├── routes/
│   │   │   ├── health.py         # Health check endpoints
│   │   │   └── predict.py        # Prediction endpoint
│   │   ├── services/
│   │   │   └── prediction.py     # ML prediction logic & model loading
│   │   ├── schemas/
│   │   │   └── insurance.py      # Pydantic validation models
│   │   └── utils/
│   │       └── config.py         # Configuration & city tiers
│   ├── models/                   # ML models directory
│   │   └── model.pkl             # Trained sklearn model
│   ├── requirements.txt
│   ├── .env                      # Environment variables
│   └── README.md
│
├── frontend/                     # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── PredictionForm.jsx    # Main form component
│   │   │   └── PredictionForm.css    # Professional styling
│   │   ├── services/
│   │   │   └── api.js                # API client
│   │   ├── App.jsx                   # Root component
│   │   ├── App.css                   # App styling
│   │   ├── main.jsx                  # React entry
│   │   └── index.css                 # Global styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── .env
│   └── README.md
│
└── README.md (this file)
```

## 🚀 Quick Start

### Backend

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv
source venv/Scripts/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start server
uvicorn app.main:app --reload
```

**Backend runs on:** `http://localhost:8000`
- API Docs: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

### Frontend

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```

**Frontend runs on:** `http://localhost:5173`

## 📡 API Endpoints

### Health Check
```
GET /health
```

### Predict Premium
```
POST /api/predict
Content-Type: application/json

{
  "age": 30,
  "weight": 70,
  "height": 1.75,
  "income_lpa": 10,
  "smoker": false,
  "city": "Mumbai",
  "occupation": "private_job"
}
```

**Response:**
```json
{
  "prediction": 45000.50,
  "risk_level": "medium"
}
```

## ✨ Features

### Backend
- ✅ Clean, modular architecture
- ✅ Pydantic input validation
- ✅ CORS middleware enabled
- ✅ Automatic computed fields (BMI, age group, risk level)
- ✅ Comprehensive error handling
- ✅ OpenAPI/Swagger documentation
- ✅ Type hints throughout
- ✅ Professional code quality

### Frontend
- ✅ Modern React with Hooks
- ✅ Vite for blazing fast development
- ✅ Professional SaaS-style UI
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Form validation & error handling
- ✅ Loading states
- ✅ Risk level visualization
- ✅ Clean, minimal CSS

## 🎨 UI/UX Design

The frontend is built to look like a professional SaaS product:
- **Clean spacing** with 4px base grid
- **Minimal color palette** (blue primary, with red/orange/green accents)
- **Subtle shadows** for depth
- **Professional typography** using system fonts
- **No overused gradients** - just meaningful visual hierarchy
- **Glassmorphic cards** with soft edges
- **Smooth transitions** for interactions

## 🔧 Configuration

### Backend (.env)
```
DEBUG=false
API_HOST=0.0.0.0
API_PORT=8000
ENVIRONMENT=production
ALLOWED_ORIGINS=http://localhost:5173
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:8000
```

## 📦 Production Deployment

### Backend
```bash
gunicorn -w 4 -b 0.0.0.0:8000 app.main:app
```

### Frontend
```bash
npm run build
# Deploy dist/ folder to any static hosting
```

## 📚 Additional Docs

- [Backend Documentation](backend/README.md)
- [Frontend Documentation](frontend/README.md)

## 🛠️ Technology Stack

**Backend**
- FastAPI (modern web framework)
- Pydantic (data validation)
- scikit-learn (ML inference)
- Uvicorn (ASGI server)
- Gunicorn (production server)

**Frontend**
- React 18
- Vite (build tool)
- Vanilla CSS (no dependencies)
- Modern ES6+ JavaScript

## 📝 License

Proprietary - 2024

3. Install dependencies for a specific project before running that project (instructions below). Each project typically includes its own `requirements.txt`.

Notes:

- Replace `<your-username>` with your GitHub user or use your fork/clone URL.
- If you prefer virtualenv/conda, use those instead.

---

## Projects

This repository contains one (or more) sub-project directories. Each project has its own files and README (if present). Below is a detailed description of the included project(s).

### Insurance Premium ML

Brief: A compact FastAPI service that predicts an insurance premium category using a serialized ML model. A Streamlit app demonstrates the prediction UI.

Key concepts & technologies:

- FastAPI for the API endpoints and auto-generated interactive docs (`/docs`, `/redoc`).
- Pydantic for request validation and computed fields.
- Scikit-learn model served from a pickle file (`Model/model.pkl`) loaded in `Model/Predict.py`.
- Streamlit for a simple interactive frontend (`Streamlit/app.py`).

Main files and their roles:

- `api.py` — FastAPI application and route definitions (root, health, predict endpoints).
- `Model/Predict.py` — loads `Model/model.pkl` via `pickle`, provides a `Predict()` helper and exposes `Model_Version` and `Model_Loaded` flags.
- `Model/model.pkl` — the serialized ML model used by the API (expected to be located in the `Model` folder).
- `Schema/User_Input.py` — Pydantic model that defines input fields and computed properties (BMI, age group, life risk, city tier).
- `config/City_Tier.py` — helper lists of Tier 1 and Tier 2 cities used by the schema.
- `Streamlit/app.py` — a small UI that collects user input and (optionally) calls the API to show predictions.
- `requirements.txt` — project dependencies (`fastapi`, `uvicorn[standard]`, `scikit-learn`, `pandas`, `pydantic`, etc.).

How to run this project locally

1. Change into the project folder and create/activate a virtual environment (if not already done):

```powershell
cd "Insurance Premium ML"
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

2. Install dependencies:

```powershell
pip install -r requirements.txt
```

3. Run the API (FastAPI + Uvicorn):

```powershell
# from the project root (Insurance Premium ML)
uvicorn api:app --reload --port 8000
```

After the API starts, open the auto-generated Swagger UI at:

http://127.0.0.1:8000/docs

And Redoc at:

http://127.0.0.1:8000/redoc

4. Run the Streamlit frontend (in a separate terminal/session):

```powershell
cd "Insurance Premium ML"
.\.venv\Scripts\Activate.ps1   # if needed
streamlit run Streamlit/app.py
```

The Streamlit UI will open in your browser (or show a local URL in the terminal).

Project-specific README: None included. This repository README contains run instructions for this project.

---

## Usage examples

API endpoints (Insurance Premium ML):

- GET `/` — root message.
- GET `/health` — returns service status, model version, and whether the model loaded.
- POST `/predict` — accepts the validated JSON user input and returns a predicted insurance premium category.

Example POST (curl):

```bash
curl -X POST "http://127.0.0.1:8000/predict" -H "Content-Type: application/json" -d @- <<'JSON'
{
	"age": 30,
	"weight": 70,
	"height": 1.7,
	"income_lpa": 6.5,
	"smoker": false,
	"city": "Mumbai",
	"occupation": "private_job"
}
JSON
```

Or use the interactive Swagger UI at `/docs` to test requests.

Notes & common issues:

- Ensure `Model/model.pkl` is present. `Model/Predict.py` expects that file to exist and will load it with `pickle`.
- If you get import errors, check that you are running commands from the project folder and that the virtual environment is active.

---

## Contributing

Contributions, suggestions, and improvements are welcome. A simple workflow:

1. Open an issue describing the enhancement or bug.
2. Create a feature branch from `main`: `git checkout -b feat/your-change`.
3. Make changes, add tests where applicable, and ensure code runs locally.
4. Open a pull request with a clear description of what you changed and why.

Guidelines:

- Keep each mini-project small and focused.
- Prefer readable code and explicit comments where helpful.
- Add or update project README entries when you add new projects or change run steps.

---

## License

This repository is provided under the MIT License. See the `LICENSE` file for details (if you prefer a different license, update this section accordingly).

---

## Contact

- Owner: `Dhanam-patel` (GitHub profile: https://github.com/Dhanam-patel)
- For questions, open an issue or contact via the GitHub profile.

---

Thank you for checking out this collection of API mini-projects — I hope they help you prototype ideas quickly and learn practical integration patterns.
