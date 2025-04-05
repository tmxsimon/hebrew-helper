import requests
from bs4 import BeautifulSoup
from enum import Enum
import re

headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:136.0) Gecko/20100101 Firefox/136.0'}

class WordEngine(Enum):
    doitinHebrew = "doitinHebrew"

class Translator():
    def __init__(self, word_engine: str, headers: dict | None = None):
        self.word_engine = word_engine
        self.headers = headers

    def get_word_engine(self):
        return self.word_engine

    def set_word_engine(self, word_engine):
        self.word_engine = word_engine


    def translate_doitinHebrew(self, word: str):
        url = f"https://www.doitinhebrew.com/Translate/Default.aspx?txt={word}&kb=US%20US&l1=en&l2=iw&s=1"
        markup = dict()
        r = requests.get(url, headers=self.headers)

        markup.update({
                "r": r,
                "word_id": "ctl00_ctl00_ContentPlaceHolder1_ContentMiddle_TranslationPanel1_div_right",
                "word_class": {},
                "word_tag": {},
        })

        if not markup:
            return None
        if str(markup["r"])[-5] != "2" or not word:
            return None 
        markup.update({
            "parsed_r": BeautifulSoup(markup["r"].content, 'html.parser'),
        })

        try:
            translated_word = markup["parsed_r"].find(id=markup["word_id"]).get_text().strip()
        except:
            return None

        translation = {"word": "", "extra": {"url": url}}
        
        translation["word"] = translated_word
        
        return translation


    def translate(self, word: str):
        if self.word_engine == WordEngine.doitinHebrew:
            return self.translate_doitinHebrew(word)

class PronSources(Enum):
    HowToPronounce = "HowToPronounce"

class Pronouncer():
    def __init__(self, sources: list[str], headers: dict | None = None):
        self.sources = sources
        self.headers = headers

    def pronounce_HowToPronounce(self, word: str):
        url = f"https://www.howtopronounce.com/hebrew/{word}"
        markup = dict()
        r = requests.get(url, headers=headers)
        markup.update({
            "r": r,
            "word_id": "ctl00_ctl00_ContentPlaceHolder1_ContentMiddle_TranslationPanel1_div_right",
            "word_class": None,
            "word_tag": None,
        })
        if str(markup["r"])[-5] != "2" or not word:
           return None
        markup.update({
            "parsed_r": BeautifulSoup(markup["r"].content, 'html.parser'),
        })
        # extra_word = markup["parsed_r"].find(class_="wordBreakWord").get_text().strip()
        audio_tags = markup["parsed_r"].find_all("audio")
        audio_tags.pop(0)
        rating_tags = markup["parsed_r"].find_all("span", class_="likesCount")

        prons = {"prons": {}, "extra": {"url": url}} # "extraWord": extra_word

        for audio, rating in zip(audio_tags, rating_tags):
            match = re.search(r"-?\d+", rating.get_text().strip())
            rating = match.group() if match else "0"
            try:
                prons["prons"].update({audio["src"]: rating})
            except:
                pass

        return prons

    def pronounce(self, word: str):
        prons = {}
        if PronSources.HowToPronounce in self.sources:
            prons.update({PronSources.HowToPronounce.value: self.pronounce_HowToPronounce(word)})

        return prons

TransHelper = Translator(WordEngine.doitinHebrew, headers=headers)
PronHelper = Pronouncer([PronSources.HowToPronounce])
