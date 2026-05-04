from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import property

app = FastAPI(
    title="Premium Real Estate API",
    description="API for high-conversion luxury real estate platform",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(property.router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "Welcome to the Premium Real Estate API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8001, reload=True)
