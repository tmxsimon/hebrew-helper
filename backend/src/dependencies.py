from fastapi import Depends
from sqlmodel import Session
from db import get_session

SessionDep: Session = Depends(get_session)