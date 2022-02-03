import { useEffect, useState } from "react"

export function SmallCard(props){
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(count + 1);
    }, [props]);
    return(
        <div>
            <button onClick={() => setCount(count + 1)}>
                    Click Me
            </button>
            <div>
            {count}
            {props.cardName}
            </div>
        </div>
     
    )
}

export function LargeCard(){
    return (
    <div>
        Bigger Card
    </div>
    )
}
