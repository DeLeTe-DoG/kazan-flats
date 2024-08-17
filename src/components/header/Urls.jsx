import { motion } from "framer-motion"
import {data_urls} from "../../data"

const HeadingAnim = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.6 },
    }
}

export default function Widgets() {
    const classesOfWidget = `widget anim`

    const widgets = data_urls.map(item => {
            return (
                <motion.div 
                        initial={{opacity: 0, x: -100}} 
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.5,
                                delay: item.id * 0.2,
                            }
                        }} 
                        viewport={{amount: 0.2, once: true}}
                    >
                    <a href={item.href} key={item.id}>
                        <img src={item.src} className={classesOfWidget} />
                    </a>
                </motion.div>
            )
        }   
    )

    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{amount: 0.2, once: true}} className="blocks urls anim">
            <motion.h3 variants={HeadingAnim}>Контакты:</motion.h3>

            <div className='widgets'>
                { widgets }
            </div>
        </motion.div>
    )
}