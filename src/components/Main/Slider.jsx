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
        <h3 class="sliderH anim">Примеры квартир в Казани:</h3>
        <div id="carouselExampleCaptions" class="carousel slide anim">
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
        </div>
      </div>
    )

    // return(
    //     <div class="slider">
    //                 <h3 class="sliderH anim">Примеры квартир в Казани:</h3>
    //                 <div id="carouselExampleCaptions" class="carousel slide anim">
    //                     <div class="carousel-indicators">
    //                       <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    //                       <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    //                       <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    //                       <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    //                     </div>
    //                     <div class="carousel-inner">
    //                       <div class="carousel-item active">
    //                         <img src={Photo} class="d-block w-100" alt="..." />
    //                         <div class="carousel-caption d-none d-md-block">
    //                           <h5>First slide label</h5>
    //                           <p>Some representative placeholder content for the first slide.</p>
    //                         </div>
    //                       </div>
    //                       <div class="carousel-item">
    //                         <img src={Photo} class="d-block w-100" alt="..." />
    //                         <div class="carousel-caption d-none d-md-block">
    //                           <h5>Second slide label</h5>
    //                           <p>Some representative placeholder content for the second slide.</p>
    //                         </div>
    //                       </div>
    //                       <div class="carousel-item">
    //                         <img src={Photo} class="d-block w-100" alt="..." />
    //                         <div class="carousel-caption d-none d-md-block">
    //                           <h5>Third slide label</h5>
    //                           <p>Some representative placeholder content for the third slide.</p>
    //                         </div>
    //                       </div>
    //                       <div class="carousel-item">
    //                         <img src={Photo} class="d-block w-100" alt="..." />
    //                         <div class="carousel-caption d-none d-md-block">
    //                           <h5>fourth slide label</h5>
    //                           <p>Some representative placeholder content for the third slide.</p>
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    //                       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //                       <span class="visually-hidden">Previous</span>
    //                     </button>
    //                     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    //                       <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //                       <span class="visually-hidden">Next</span>
    //                     </button>
    //                   </div>
    //             </div>
    // )
}