import sqlalchemy
from sqlalchemy import create_engine, text

def check_db():
    try:
        # Connect to default postgres DB to check if realestate exists
        engine = create_engine("postgresql://postgres@localhost/postgres")
        with engine.connect() as conn:
            conn.execution_options(isolation_level="AUTOCOMMIT")
            result = conn.execute(text("SELECT 1 FROM pg_database WHERE datname='realestate'"))
            exists = result.fetchone()
            if not exists:
                print("Database 'realestate' does not exist. Creating...")
                conn.execute(text("CREATE DATABASE realestate"))
                print("Database 'realestate' created.")
            else:
                print("Database 'realestate' already exists.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    check_db()
