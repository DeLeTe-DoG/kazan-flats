import { motion } from "framer-motion"

const textAnimation = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}

export default function() {
    return(
        <motion.div 
            initial="hidden"
            whileInView="visible"
            className="blocks headBlock"
        >
            <motion.h1 variants={textAnimation} className="headTitle anim">Посуточно <br /> Казань</motion.h1>
            <h3 className="headSubTitle anim">Доступно  |  Удобно</h3>
        </motion.div>
    )
}