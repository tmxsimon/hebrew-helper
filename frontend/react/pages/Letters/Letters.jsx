
export default function Letters() {
    return(
        <main className="px-(--page-px) mt-4 flex flex-col items-center">
            <div className="max-w-[1000px] w-full mb-8">
                <h2 className="text-2xl font-bold">Hebrew alphabet</h2>
                <img className="w-full" src="../../src/assets/letters/hebrewAlphabet.png" alt="Hebrew alphabet" />
            </div>
            <div className="max-w-[400px] w-full mb-8">
                <h2 className="text-2xl font-bold">Hebrew final (sofit) letters</h2>
                <img className="w-full" src="../../src/assets/letters/hebrewFinalLetters.png" alt="Hebrew final letters" />
            </div>
            <div className="max-w-[600px] w-full mb-8">
                <h2 className="text-2xl font-bold">Hebrew niqqud</h2>
                <img className="w-full" src="../../src/assets/letters/hebrewNiqqud.jpg" alt="Hebrew niqqud" />
            </div>
            <div className="max-w-[1000px] w-full mb-8">
                <h2 className="text-2xl font-bold">Hebrew keyboard layout</h2>
                <img className="w-full" src="../../src/assets/letters/hebrewKeyboardLayout.jpg" alt="Hebrew keyboard layout" />
            </div>
        </main>
    );
}