from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from database import get_db
from models.property import Property as PropertyModel
from schemas import property as property_schema

router = APIRouter(
    prefix="/properties",
    tags=["properties"]
)

@router.get("/", response_model=List[property_schema.Property])
async def get_properties(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    properties = db.query(PropertyModel).offset(skip).limit(limit).all()
    return properties

@router.post("/", response_model=property_schema.Property)
async def create_property(property_in: property_schema.PropertyCreate, db: Session = Depends(get_db)):
    db_property = PropertyModel(**property_in.model_dump())
    db.add(db_property)
    db.commit()
    db.refresh(db_property)
    return db_property

@router.get("/{property_id}", response_model=property_schema.Property)
async def get_property(property_id: int, db: Session = Depends(get_db)):
    property = db.query(PropertyModel).filter(PropertyModel.id == property_id).first()
    if not property:
        raise HTTPException(status_code=404, detail="Property not found")
    return property

@router.delete("/{property_id}")
async def delete_property(property_id: int, db: Session = Depends(get_db)):
    property = db.query(PropertyModel).filter(PropertyModel.id == property_id).first()
    if not property:
        raise HTTPException(status_code=404, detail="Property not found")
    db.delete(property)
    db.commit()
    return {"message": "Property deleted"}
