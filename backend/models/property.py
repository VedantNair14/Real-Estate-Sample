from sqlalchemy import Column, Integer, String, Float, Text, Boolean, DateTime, ForeignKey
from sqlalchemy.sql import func
from database import Base

class Property(Base):
    __tablename__ = "properties"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(Text)
    price = Column(Float, nullable=False)
    currency = Column(String, default="USD")
    location = Column(String, nullable=False)
    address = Column(String)
    property_type = Column(String) # Villa, Apartment, Penthouse, etc.
    status = Column(String) # For Sale, For Rent, Sold
    
    beds = Column(Integer)
    baths = Column(Integer)
    sqft = Column(Integer)
    year_built = Column(Integer)
    
    latitude = Column(Float)
    longitude = Column(Float)
    
    is_featured = Column(Boolean, default=False)
    is_exclusive = Column(Boolean, default=False)
    
    main_image = Column(String) # URL
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

class PropertyImage(Base):
    __tablename__ = "property_images"
    
    id = Column(Integer, primary_key=True, index=True)
    property_id = Column(Integer, ForeignKey("properties.id"))
    image_url = Column(String, nullable=False)
    is_primary = Column(Boolean, default=False)
