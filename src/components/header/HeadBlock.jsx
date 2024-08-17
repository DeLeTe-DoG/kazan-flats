import { motion } from "framer-motion"

const textAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {
                duration: 0.4,
                delay: custom * 0.2 
            },
        
    }),
}

export default function() {
    return(
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{amount: 0.2, once: true}}
            className="blocks headBlock"
        >
            <motion.h1 custom={1} variants={textAnimation} className="headTitle anim">Посуточно <br /> Казань</motion.h1>
            <motion.h3 custom={2} variants={textAnimation} className="headSubTitle anim">Доступно  |  Удобно</motion.h3>
        </motion.div>
    )
}