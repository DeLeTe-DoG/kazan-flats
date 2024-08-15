import { data_advantages } from "../../data";

export default function AdvantagesSection() {
    const AdvantageCards = data_advantages.map(item => {
        return(
            <div className="blocksOfSect card anim" key={item.id}>
                <h2 className="cardTitle">{ item.title }</h2>
                <p className="cardDescription">{ item.subtitle }</p>
            </div>
            )
        }
    )

    const AdvTitle = <h2 className="advTitle anim">О нас:</h2>

    return(
        <div className="advantages">
            {AdvTitle}
            <div className="cards anim">
                {AdvantageCards}
            </div>
            
        </div>
    )
}