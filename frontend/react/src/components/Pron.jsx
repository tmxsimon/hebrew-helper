import AudioButton from "./AudioButton";

export default function Pron({ source, pron }) {
    return (
        <>
        <h1 className="mb-2 text-3xl underline"><a href={pron["extra"]["url"]} target="_blank">{source}</a></h1>
        {Object.entries(pron["prons"]).map(([key, value]) => (
            <li className="flex justify-end mb-1" key={key}>
            <AudioButton src={key}></AudioButton>{" "}
            <span className="min-w-[40px] text-2xl text-end">{value}</span>
            </li>
        ))}
        </>
    );
}