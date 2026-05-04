from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class PropertyBase(BaseModel):
    title: str
    description: Optional[str] = None
    price: float
    currency: str = "USD"
    location: str
    address: Optional[str] = None
    property_type: Optional[str] = None
    status: Optional[str] = "For Sale"
    beds: Optional[int] = None
    baths: Optional[int] = None
    sqft: Optional[int] = None
    year_built: Optional[int] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    is_featured: bool = False
    is_exclusive: bool = False
    main_image: Optional[str] = None

class PropertyCreate(PropertyBase):
    pass

class Property(PropertyBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class PropertyImageBase(BaseModel):
    image_url: str
    is_primary: bool = False

class PropertyImageCreate(PropertyImageBase):
    property_id: int

class PropertyImage(PropertyImageBase):
    id: int

    class Config:
        from_attributes = True
