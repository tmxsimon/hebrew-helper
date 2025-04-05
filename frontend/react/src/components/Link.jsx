

export default function Link({ name, description, link }) {
    return (
        <div className="flex justify-end items-center">
            <span className="text-4xl mr-2">{name} <span className="text-2xl text-gray-600 italic">{description}</span></span>
            <span className="text-4xl underline">
                <a href={link} target="_blank">
                    <img className="w-[30px] h-[30px] cursor-pointer hover:brightness-90" src="https://img.icons8.com/?size=100&id=7867&format=png&color=228BE6" alt="Link" />
                </a>
            </span>
        </div>
    );
}