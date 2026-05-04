from sqlalchemy.orm import Session
from database import SessionLocal
from models.property import Property

def seed():
    db = SessionLocal()
    try:
        # Check if already seeded
        if db.query(Property).count() > 0:
            print("Database already seeded.")
            return

        properties = [
            Property(
                title="Azure Horizon Penthouse",
                description="A stunning penthouse with panoramic ocean views.",
                price=4250000,
                location="Malibu, CA",
                address="123 Ocean Drive",
                property_type="Penthouse",
                status="For Sale",
                beds=4,
                baths=5,
                sqft=3850,
                main_image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
                is_featured=True,
                is_exclusive=True
            ),
            Property(
                title="The Onyx Villa",
                description="Modern luxury at its finest. Sleek design and ultimate privacy.",
                price=8900000,
                location="Beverly Hills, CA",
                address="456 Canyon Road",
                property_type="Villa",
                status="For Sale",
                beds=6,
                baths=8,
                sqft=7200,
                main_image="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
                is_featured=True,
                is_exclusive=False
            ),
            Property(
                title="Elysian Fields Estate",
                description="Classic elegance meets modern amenities in this sprawling estate.",
                price=12500000,
                location="Bel Air, CA",
                address="789 Highland Ave",
                property_type="Mansion",
                status="For Sale",
                beds=8,
                baths=10,
                sqft=12000,
                main_image="https://images.unsplash.com/photo-1600585154340-be6199f7e009?q=80&w=2070&auto=format&fit=crop",
                is_featured=False,
                is_exclusive=True
            )
        ]
        
        db.add_all(properties)
        db.commit()
        print("Database seeded successfully.")
    except Exception as e:
        print(f"Error seeding database: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    seed()
