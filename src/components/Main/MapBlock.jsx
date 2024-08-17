import { motion } from "framer-motion"
import { Map_data } from "../../data"

export default function MapBlock() {
    let MapBlockTitle = <motion.h2  initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0, transition: {duration: 0.6, delay: 0.2}}} viewport={{amount: 0.2, once: true}} class="mapBlock_title anim">Наши квартиры на карте:</motion.h2>
    let MapBlockSubText = <motion.p  initial={{opacity: 0, y: -100}} whileInView={{opacity: 1, y: 0, transition: {duration: 0.6, delay: 0.2}}} viewport={{amount: 0.6, once: true}} class="subText anim">* Подробнее о квартирах и об актуальности можно узнать, <a class="textLink" href="#contacts">связавшись</a> с нами</motion.p>
 
    return(
        <motion.div className="mapBlock">
            <div className="word_block">
                {MapBlockTitle}
                {MapBlockSubText}
            </div>

            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.6, delay: 0.2}}} viewport={{amount: 0.5, once: true}} className="map">
            <iframe src={Map_data} width="500" height="700" frameborder="0"></iframe>
            </motion.div>
        </motion.div>
    )

}