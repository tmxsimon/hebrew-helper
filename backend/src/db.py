from sqlmodel import SQLModel, Session, create_engine
from words.models import *

db_file_name = "main.db"
db_url = f"sqlite:///../db/{db_file_name}"

engine = create_engine(db_url, echo=True)

def get_session():
    with Session(engine) as session:
        yield session

def init_db():
    SQLModel.metadata.create_all(engine)

init_db()