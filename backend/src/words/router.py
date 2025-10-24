from fastapi import APIRouter, HTTPException, status
from dependencies import SessionDep
from .service import get_words_db, create_word_db, update_word_db, delete_word_db

router = APIRouter(
  prefix="/words",
  tags=["Words"]
)

@router.get("/")
async def get_words(session = SessionDep):
    words = get_words_db(session)
    
    return words

@router.post("/")
async def create_word(session = SessionDep):
    word = create_word_db(session=session)
    
    if word is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Word not created"
        )
    
    return word

@router.put("/{id}")
async def update_word(
    id: int,
    hebrew: str | None = None,
    pronunciation: str | None = None,
    association: str | None = None,
    translation: str | None = None,
    emoji: str | None = None,
    is_male: bool | None = None,
    is_singular: bool | None = None,
    session = SessionDep
):
    word = update_word_db(
        session=session,
        id=id,
        hebrew=hebrew,
        pronunciation=pronunciation,
        association=association,
        translation=translation,
        emoji=emoji,
        is_male=is_male,
        is_singular=is_singular
    )
    
    if word is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Word not found"
        )
    
    return word

@router.delete("/{id}")
async def delete_word(id: int, session = SessionDep):
    word = delete_word_db(session=session, id=id)
    
    if word is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Word not found"
        )
    
    return word