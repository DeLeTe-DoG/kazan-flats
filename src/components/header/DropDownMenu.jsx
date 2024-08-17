import { data_urls, icon_ddurls } from "../../data";
import { motion } from "framer-motion";

export default function DDMenu() {

    let DDUrls = data_urls.map(item => {
        return(
            <li key={item.id}>
                <motion.div initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {duration: 0.5, delay: item.id * 0.2}}}>
                    <a href={item.href}>
                        <h3 className="dropDown_title">{item.DDHeadings}</h3>
                        <img src={item.src} className="widget" />
                    </a>
                </motion.div>
            </li>
        )
    })

    return(
        <div className="dropDown">
            <img className="iconDM" src={icon_ddurls} />
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.4}}} className="blockDD">
                <ul className="dropDown_menu anim">
                    {DDUrls}
                </ul>
            </motion.div>
        </div>
    )
}