import Pron from "./Pron";

export default function Prons(prons) {
    prons = prons["prons"];

    function RenderProns(prons) {
        if (Object.values(prons)[0] === null) {
            return(<></>);
        }
        return (
            <>
            <ul>
                {Object.entries(prons).map(([source, innerObj]) => (
                    <Pron source={source} pron={innerObj}></Pron>
                ))}
            </ul>
            </>
        );
        };
    
        return RenderProns(prons);
}