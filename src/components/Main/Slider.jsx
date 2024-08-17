import { motion } from "framer-motion"
import { data_carusel } from "../../data"

export default function Slider() {
    let CaruselIndicators = data_carusel.map(item => {
      let Label = `Slide ${item.id + 1}`

      return (
        item.id === 0 ?
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={item.id} class="active" aria-current="true" aria-label={Label}></button>
        :
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={item.id} aria-label={Label}></button>
      )
    })

    let CaruselItems = data_carusel.map(item => {
      let DivClassA = 'carousel-item active'
      let DivClass = 'carousel-item'
      let ImageClass = "d-block w-100"
      let ChildDivClass = "carousel-caption d-none d-md-block"

      return (
        item.id === 0 ?
        <div className={DivClassA}>
          <img src={item.src} class={ImageClass} alt="..." />
          <div class={ChildDivClass}>
            <h5>{item.heading}</h5>
            <p>{item.description}</p>
            <p>Стоимость: {item.cost}</p>
          </div>
        </div>
        :
        <div className={DivClass}>
          <img src={item.src} class={ImageClass} alt="..." />
          <div class={ChildDivClass}>
            <h5>{item.heading}</h5>
            <p>{item.description}</p>
            <p>Стоимость: {item.cost}</p>
          </div>
        </div>
      )
    })

    return (
      <div className="slider">
        <motion.h3 initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.6, delay: 0.2}}} viewport={{amount: 0.5, once: true}} class="sliderH anim">Примеры квартир в Казани:</motion.h3>
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {duration: 0.6, delay: 0.2}}} viewport={{amount: 0.2, once: true}} id="carouselExampleCaptions" class="carousel slide anim">
          <div class="carousel-indicators">
            {CaruselIndicators}
          </div>

          <div class="carousel-inner">
            {CaruselItems}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
          </button>
        </motion.div>
      </div>
    )
}