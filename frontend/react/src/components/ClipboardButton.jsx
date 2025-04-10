
export default function ClipboardButton({ text }) {
    function handleOnClick() {
        navigator.clipboard.writeText(text);
    }

    return (
        <svg className="w-[30px] h-[30px] cursor-pointer hover:brightness-90 active:scale-95" onClick={handleOnClick} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-(--primary)" d="M0 0H10V4H4V10H0V0Z" fill="#000000"/>
            <path className="fill-(--primary)" d="M16 6H6V16H16V6Z" fill="#000000"/>
        </svg>
    );
}