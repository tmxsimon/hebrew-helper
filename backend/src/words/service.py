from sqlmodel import Session, select
from .models import Word

def get_words_db(
    session: Session
):
  return session.exec(select(Word)).all()

def create_word_db(
    session: Session
):
  word = Word()

  if word is None:
    return None
  
  session.add(word)
  session.commit()
  session.refresh(word)

  return word


def update_word_db(
    session: Session,
    id: int,
    hebrew: str | None = None,
    pronunciation: str | None = None,
    association: str | None = None,
    translation: str | None = None,
    emoji: str | None = None,
    is_male: bool | None = None,
    is_singular: bool | None = None,
):
  word = session.get(Word, id)

  if word is None:
    return None
  
  if hebrew:
    word.hebrew = hebrew

  if pronunciation:
    word.pronunciation = pronunciation

  if association:
    word.association = association

  if translation:
    word.translation = translation

  if emoji:
    word.emoji = emoji

  if is_male:
    word.is_male = is_male

  if is_singular:
    word.is_singular = is_singular

  session.add(word)
  session.commit()
  session.refresh(word)

  return word

def delete_word_db(
    session: Session,
    id: int
):
  word = session.get(Word, id)

  if word is None:
    return None
  
  session.delete(word)
  session.commit()

  return word