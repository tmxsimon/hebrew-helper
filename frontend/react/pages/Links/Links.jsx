import Link from "../../src/components/Link";

export default function Links() {

    return (
        <>
        <main className="px-(--page-px) mt-8 flex flex-col items-center">
            <div className="flex flex-col gap-4">
                <Link name="doitinHebrew" description="dictionary" link="https://doitinhebrew.com/translate/default.aspx?kb=US%20US&l1=en&l2=iw"></Link>
                <Link name="Morfix" description="dictionary" link="https://www.morfix.co.il/en/"></Link>
                <Link name="Dict" description="dictionary" link="https://www.dict.com/hebrew-english"></Link>
                <Link name="Glosbe" description="dictionary" link="https://en.glosbe.com/en/he"></Link>
                <Link name="Freelang" description="romanized dictionary" link="https://www.freelang.net/online/hebrew.php"></Link>
                <Link name="HowToPronounce" description="pronouncer" link="https://www.howtopronounce.com/hebrew/index.php"></Link>
                <Link name="Forvo" description="pronouncer" link="https://he.forvo.com/search/"></Link>
                <Link name="Pealim" description="verb tables" link="https://www.pealim.com/"></Link>
            </div>
        </main>
        </>
    );
}