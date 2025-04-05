
export default function AudioButton({ src }) {
    const audio = new Audio(src);
    function handleAudioClick() {
        audio.play();
    }
    return (
        <img className="w-[30px] h-[30px] cursor-pointer hover:brightness-90" src="https://img.icons8.com/?size=100&id=41563&format=png&color=228BE6" alt="Play" onClick={handleAudioClick}></img>
    );
}