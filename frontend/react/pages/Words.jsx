import { WordsItem } from "../src/components/WordsItem";
import { useWord } from "../src/hooks/useWord";

export function Words() {
  const { words, isLoading, error, addWord, deleteWord, editWord } = useWord();

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>{error.message}</div>;
  console.log(words);

  const wordsList = words.map((word) => (
    <WordsItem
      key={word.id}
      word={word}
      deleteWord={deleteWord}
      editWord={editWord}
    />
  ));

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-3"> {wordsList}</div>
      <button
        onClick={() => addWord.mutate()}
        className="my-4 border-primary border-1 p-2 min-w-48 text-2xl cursor-pointer"
      >
        Add Word
      </button>
    </div>
  );
}
