import { motion } from "framer-motion";
import { data_advantages } from "../../data";

export default function AdvantagesSection() {
    const AdvantageCards = data_advantages.map(item => {
        return(
            <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0, transition: {duration: 0.8, delay: item.id * 0.2}}} viewport={{amount: 0.2, once: true}} className="blocksOfSect card anim" key={item.id}>
                <h2 className="cardTitle">{ item.title }</h2>
                <p className="cardDescription">{ item.subtitle }</p>
            </motion.div>
            )
        }
    )

    const AdvTitle = <motion.h2 initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.6, delay: 0.2}}} viewport={{amount: 0.5, once: true}} className="advTitle anim">О нас:</motion.h2>

    return(
        <div className="advantages">
            {AdvTitle}
            <div className="cards anim">
                {AdvantageCards}
            </div>
            
        </div>
    )
}