import ClipboardButton from "./ClipboardButton";

export default function Word({ translation }) {
    if (translation["word"] === "") {
        return <></>
    }
    return (
        <div className="flex items-center">
            <div className="mr-2"><ClipboardButton text={translation["word"]}></ClipboardButton></div>
            <h2 className="text-8xl mb-6"><a href={translation["extra"]["url"]} target="_blank">{translation["word"]}</a></h2>
        </div>
    );
}