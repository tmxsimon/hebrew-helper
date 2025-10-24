from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.responses import PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware
from db import init_db
from helper import TransHelper, PronHelper
from words.router import router as router_words

@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield
    pass

app = FastAPI(lifespan=lifespan)
app.include_router(router_words)

@app.get("/get-data", response_class=PlainTextResponse)
async def get_data():
    return "Hello world"

@app.get("/word/{word}")
async def translate_endpoint(word: str):
    translation = TransHelper.translate(word)
    prons = PronHelper.pronounce(translation["word"])
    return {"translation": translation, "word": word, "prons": prons}

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)