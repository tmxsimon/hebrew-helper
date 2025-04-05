
export default function ClipboardButton({ text }) {
    function handleOnClick() {
        navigator.clipboard.writeText(text);
    }

    return (
        <img className="w-[30px] h-[30px] cursor-pointer hover:brightness-90 active:scale-95" src="https://img.icons8.com/?size=100&id=K8kreM1bK5fn&format=png&color=228BE6" alt="Copy" onClick={handleOnClick} />
    );
}