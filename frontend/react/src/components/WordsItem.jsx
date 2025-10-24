import EmojiPicker, { Emoji } from "emoji-picker-react";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "../themeProvider";
import InlineEditable from "./InlineEditable";

export function WordsItem({ word, deleteWord, editWord }) {
  const { theme } = useTheme();

  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(word.emoji);
  const [translation, setTranslation] = useState(word.translation);
  const [association, setAssociation] = useState(word.association);
  const [pronunciation, setPronunciation] = useState(word.pronunciation);
  const [hebrew, setHebrew] = useState(word.hebrew);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const pickerRef = useRef(null);
  const emojiBtnRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target) &&
        (!emojiBtnRef.current || !emojiBtnRef.current.contains(event.target))
      ) {
        setIsEmojiPickerOpen(false);
      }
    }
    if (isEmojiPickerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEmojiPickerOpen]);

  const handleEmojiButtonClick = () => {
    if (isEditMode) setIsEmojiPickerOpen((open) => !open);
  };

  const handleEmojiClick = (emojiData) => {
    setSelectedEmoji(emojiData.emoji);
    setIsEmojiPickerOpen(false);
  };

  const handleOnClickEdit = () => {
    if (isEditMode) {
      editWord.mutate({
        ...word,
        emoji: selectedEmoji,
        translation: translation,
        association: association,
        pronunciation: pronunciation,
        hebrew: hebrew,
      });
    }
    setIsEditMode(!isEditMode);
  };

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      handleOnClickEdit();
    }
  };

  return (
    <>
      <div
        className={`flex border-primary border-1 p-2 gap-2 w-284 h-18 ${isEditMode && "border-3"}`}
        style={{ position: "relative" }}
      >
        <button
          onClick={() => deleteWord.mutate(word.id)}
          className="border-primary border-1 py-4 min-w-22 h-full
          flex items-center justify-center text-2xl cursor-pointer"
        >
          Delete
        </button>
        <button
          onClick={handleOnClickEdit}
          className="border-primary border-1 py-4 min-w-14 h-full
          flex items-center justify-center text-2xl cursor-pointer"
        >
          Edit
        </button>
        <button
          ref={emojiBtnRef}
          onClick={handleEmojiButtonClick}
          className="border-primary border-1 py-4 min-w-14 h-full flex items-center justify-center text-3xl cursor-pointer"
        >
          {selectedEmoji || "😀"}
        </button>
        <InlineEditable
          value={translation}
          isEditMode={isEditMode}
          onValueChange={setTranslation}
          onKeyDown={handleOnKeyDown}
          placeholder="Translation"
          className="border-primary border-1 px-2 py-4 w-full min-w-48 h-full flex-4 text-2xl"
        />
        <InlineEditable
          value={association}
          isEditMode={isEditMode}
          onValueChange={setAssociation}
          onKeyDown={handleOnKeyDown}
          placeholder="Association"
          className="border-primary border-1 px-2 py-4 w-full min-w-36 h-full flex-3 text-2xl"
        />
        <InlineEditable
          value={pronunciation}
          isEditMode={isEditMode}
          onValueChange={setPronunciation}
          onKeyDown={handleOnKeyDown}
          placeholder="Pronunciation"
          className="border-primary border-1 px-2 py-4 w-full min-w-48 h-full flex-4 text-2xl"
        />
        <InlineEditable
          value={hebrew}
          isEditMode={isEditMode}
          onValueChange={setHebrew}
          onKeyDown={handleOnKeyDown}
          placeholder="Hebrew"
          className="border-primary border-1 px-2 py-4 w-full min-w-48 h-full flex-4 text-2xl"
          classNameText="text-end"
        />
        {isEmojiPickerOpen && (
          <div
            ref={pickerRef}
            style={{
              position: "absolute",
              top: "100%",
              left: emojiBtnRef.current ? emojiBtnRef.current.offsetLeft : 0,
              zIndex: 10,
            }}
          >
            <EmojiPicker theme={theme} onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </>
  );
}
