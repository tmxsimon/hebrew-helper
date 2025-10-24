from sqlmodel import SQLModel, Field

class Word(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    hebrew: str = Field(default="")
    pronunciation: str = Field(default="")
    association: str = Field(default="")
    translation: str = Field(default="")
    emoji: str = Field(default="")
    is_male: bool = Field(default=True)
    is_singular: bool = Field(default=True)