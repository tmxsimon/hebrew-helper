import Word from "../src/components/Word";
import Prons from "../src/components/Prons";
import { useState } from "react";
import api from "../src/api";

export default function Helper() {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState({
    word: "",
    extra: {},
  });
  const [prons, setProns] = useState({});
  const [input, setInput] = useState("");

  async function fetchData() {
    try {
      const response = await api.get(`/word/${input}`);
      setTranslation(response.data.translation);
      setProns(response.data.prons);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  return (
    <div className="flex flex-col items-end w-full">
      <h1 className="text-6xl mb-4">Hebrew Helper</h1>
      <form
        action="get"
        onSubmit={(e) => {
          e.preventDefault();
          setWord(input);
          setInput("");
          fetchData();
        }}
      >
        <input
          className="w-[300px] h-[50px] border-2 border-(--primary) indent-1"
          value={input}
          type="text"
          name="word"
          placeholder="Type your word"
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          className="
                w-[100px] h-[50px] ml-1 border-2 border-(--primary) 
                transition-colors cursor-pointer hover:bg-(--primary)
                hover:text-white 
                "
          type="submit"
          value="Help"
        />
      </form>
      <h2 className="text-6xl mt-8">{word}</h2>
      <Word translation={translation}></Word>
      <hr className="max-w-[600px] w-full mt-2" />
      <div>
        <Prons prons={prons}></Prons>
      </div>
    </div>
  );
}
