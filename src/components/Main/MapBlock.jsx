import { Map_data } from "../../data"

export default function MapBlock() {
    let MapBlockTitle = <h2 class="mapBlock_title anim">Наши квартиры на карте:</h2>
    let MapBlockSubText = <p class="subText anim">* Подробнее о квартирах и об актуальности можно узнать, <a class="textLink" href="#contacts">связавшись</a> с нами</p>
 
    return(
        <div className="mapBlock">
            <div className="word_block">
                {MapBlockTitle}
                {MapBlockSubText}
            </div>

            <div className="map anim">
            <iframe src={Map_data} width="500" height="700" frameborder="0"></iframe>
            </div>
        </div>
    )

}