import WA from './images/icons/whatsapp.png'
import TG from './images/icons/telegram.png'
import VK from './images/icons/vk.png'
import Tel from './images/icons/phone.png'
import Photo from './images/headerBackground.png'
import PhotoProspect from './images/sliderImages/prospect35a.jpg'
import PhotoNazarb47 from './images/sliderImages/nazarbaeva47.jpg'
import PhotoNazarb54 from './images/sliderImages/nazarbaeva54.jpg'
import PhotoMagadan from './images/sliderImages/magadanskaya.jpg'
// import 

let data_urls = [
    {
        id: 'a',
        href: "tel:+79172298405",
        src: Tel
    },
    {
        id: 'b',
        href: "https://t.me/akula_7779",
        src: TG
    },
    {
        id: 'c',
        href: "https://vk.com/club111404785",
        src: VK
    },
    {
        id: 'd',
        href: "https://wa.me/79172298405",
        src: WA
    },
]

let data_advantages = [
    {
        id: 1,
        title: 'Надежность',
        subtitle: 'Через нас прошли тысячи клиентов, 99% которых остались довольны'
    },
    {
        id: 2,
        title: 'Опыт',
        subtitle: 'Мы на рынке с 2009 года'
    },
    {
        id: 3,
        title: 'Доступность',
        subtitle: 'В кратчайшие сроки подберём квартиру в удобном для вас месте'
    },
    // {
    //     id: 4,
    //     title: '',
    //     subtitle: 'karaganda karaganda karaganda karaganda karaganda karaganda v'
    // },
]

let data_carusel = [
    {
        id: 0,
        src: PhotoProspect,
        heading: 'Проспект Победы, 35а',
        description: 'Рядом с домом станция метро "Проспект Победы"',
        cost: "3800 руб/сутки"
    },
    {
        id: 1,
        src: PhotoNazarb47,
        heading: 'Нурсултана Назарбаева, 47',
        description: 'Квартира в центре города, рядом станция метро "Суконная Слобода"',
        cost: "3500 руб/сутки"
    },
    {
        id: 2,
        src: PhotoNazarb54,
        heading: 'Нурсултана Назарбаева, 54',
        description: 'Квартира в центре города, рядом станция метро "Суконная Слобода"',
        cost: "2700 руб/сутки"
    },
    {
        id: 3,
        src: PhotoMagadan,
        heading: 'Магаданская, 18',
        description: 'Рядом с домом станция метро "Аметьево"',
        cost: "2700 руб/сутки"
    },
]

let Map_data = "https://yandex.ru/map-widget/v1/?um=constructor%3A16f43124c0429c477bffe6f39c336840ba719f4b03f8780817dffcab64a40486&amp;source=constructor"
export {data_urls,  data_advantages, Photo, data_carusel, Map_data}
