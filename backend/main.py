"""
Insurance Premium Prediction API
Simplified backend with robust error handling and fallback logic.
"""
import pickle
import pandas as pd
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

app = FastAPI(title="InsureAI API")

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# === MODELS ===
class PredictRequest(BaseModel):
    age: int
    weight: float
    height: float
    income_lpa: float
    smoker: bool
    city: str
    occupation: str

class PredictResponse(BaseModel):
    prediction: float
    risk_level: str
    message: str = "Success"

# === MODEL LOADING ===
MODEL_PATH = "model.pkl"
try:
    with open(MODEL_PATH, "rb") as f:
        model = pickle.load(f)
    print(f"✅ Model loaded from {MODEL_PATH}")
except Exception as e:
    model = None
    print(f"⚠️ Model not found or invalid: {e}. Using fallback formula.")

def fallback_prediction(data: PredictRequest):
    """Simple formula-based prediction if ML model is missing."""
    base_premium = 5000
    age_factor = (data.age - 18) * 200
    bmi = data.weight / (data.height ** 2)
    bmi_factor = max(0, (bmi - 25) * 500)
    smoker_factor = 10000 if data.smoker else 0
    income_factor = data.income_lpa * 100
    
    total = base_premium + age_factor + bmi_factor + smoker_factor + income_factor
    
    risk = "low"
    if data.smoker or bmi > 30:
        risk = "high"
    elif bmi > 27 or data.age > 50:
        risk = "medium"
        
    return total, risk

# === ENDPOINTS ===
@app.get("/")
def read_root():
    return {"status": "online", "service": "InsureAI Prediction Engine"}

@app.post("/predict", response_model=PredictResponse)
async def predict(req: PredictRequest):
    try:
        if model:
            # Prepare data for ML model
            # Note: This structure should match what the model expects
            bmi = req.weight / (req.height ** 2)
            city_tier = 1 if req.city in ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune'] else 2
            
            input_df = pd.DataFrame([{
                "bmi": bmi,
                "age_group": "Young" if req.age < 25 else "Middle-Aged" if req.age < 45 else "Senior",
                "Life_risk": "high" if (req.smoker and bmi > 30) else "medium" if (req.smoker and bmi > 27) else "low",
                "city_tier": city_tier,
                "income_lpa": req.income_lpa,
                "occupation": req.occupation
            }])
            
            prediction = float(model.predict(input_df)[0])
            risk_level = "high" if req.smoker else "medium" if bmi > 27 else "low"
            return PredictResponse(prediction=prediction, risk_level=risk_level)
        else:
            # Fallback
            val, risk = fallback_prediction(req)
            return PredictResponse(prediction=val, risk_level=risk, message="Using expert fallback system")
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
