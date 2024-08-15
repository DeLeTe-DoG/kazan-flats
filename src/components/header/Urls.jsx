import {data_urls} from "../../data"

export default function Widgets() {
    const classesOfWidget = `widget anim`

    const widgets = data_urls.map(item => {
            return (
                <a href={item.href} key={item.id}>
                <img src={item.src} className={classesOfWidget} />
            </a>
            )
        }   
    )

    return (
        <div className="blocks urls anim">
            <h3>Контакты:</h3>

            <div className='widgets'>
                { widgets }
            </div>
        </div>
    )
}