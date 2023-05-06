import { reactive, readonly } from 'vue'
import exhuast from '../assets/gtProducts/exhuast.jpg'
import spoiler from '../assets/gtProducts/trd.jpg'
import tail from '../assets/gtProducts/tail.jpg'
import rims from '../assets/gtProducts/rims.jpg'
import aero from '../assets/gtProducts/aero.jpg'
import coilovers from '../assets/gtProducts/coilovers.jpg'
import brake from '../assets/gtProducts/brake.jpg'
import apple from '../assets/gtProducts/apple.jpg'
import diff from '../assets/gtProducts/diff.jpg'
import interior from '../assets/gtProducts/interior.jpg'
import dragon from '../assets/gtProducts/dragon.jpg'
import tint from '../assets/gtProducts/tint.jpg'

const productsData = reactive({
    products: [{
            name: 'X Force 3" Catback Exhuast',
            price: '$1000',
            imageSrc: exhuast,
            link: 'https://www.performexauto.com.au/toyota-86-brz-2.0l-xforce-3-stainless-steel-catbac',
        },
        {
            name: 'TRD Style Spoiler',
            price: '$400',
            imageSrc: spoiler,
            link: 'https://www.zerooffset.com.au/products/12-18-toyota-86-trd-style-spoilers-painted-range?variant=42378867015907',
        },
        {
            name: 'Intec Coplus Taillight',
            price: '$1200',
            imageSrc: tail,
            link: 'https://www.ctautoparts.com.au/product/intec-japan-coplus-carbon-smoke-led-tail-light-for-toyota-86-ft86-gt-gts-subaru-brz-taillights/',
        },
        {
            name: 'Hussla Rims + Tyres',
            price: '$2000',
            imageSrc: rims,
            link: 'https://www.ozzytyres.com.au/',
        },
        {
            name: 'Zero Offset Aero Kit',
            price: '$1400',
            imageSrc: aero,
            link: 'https://www.zerooffset.com.au/',
        },
        {
            name: 'HSD Coilovers',
            price: '$1600',
            imageSrc: coilovers,
            link: 'https://www.hsdcoilovers.com.au/toyota-gt86-2012-2021-hsd-coilovers-dualtech?gclid=Cj0KCQjw0tKiBhC6ARIsAAOXutkRlVpicXfSDlpoPoMswTqbOjToNxK8C8a71fmdTknJ6o0VqYQSVyQaAvo_EALw_wcB',
        },
        {
            name: 'VLAND F1 Brake  Light',
            price: '$200',
            imageSrc: brake,
            link: 'https://www.vland-official.com/en-au/products/vland-led-bumper-light-for-toyota-86-subaru-brz-sicon-fr-s',
        },
        {
            name: 'Apple Car Head Unit',
            price: '$600',
            imageSrc: apple,
            link: 'https://gtzone.com.au/product/toyota-86-subaru-brz-wireless-apple-carplay-android-auto-head-unit-7-inch-navigation-bluetooth-wifi-radio/?attribute_model=2G-ram+32G-storage&utm_source=Google+Shopping&utm_medium=cpc&utm_campaign=gtzone&gclid=Cj0KCQjw0tKiBhC6ARIsAAOXutmWl32GgFRYswHRHJRQRqld8ZXxIFscJY4fJFS1XSyyDf2ZVfu9m60aAhyMEALw_wcB',
        },
        {
            name: 'AimGain GT Rear Diffuser',
            price: '$800',
            imageSrc: diff,
            link: 'https://www.aerospeedperformance.com/products/aimgain-gt-style-rear-diffuser-toyota-86-subaru-brz',
        },
        {
            name: 'Carbon Interior',
            price: '$300',
            imageSrc: interior,
            link: 'https://www.aliexpress.com/?spm=a2g0o.detail.1000002.1.14b46cd2AFFnVE',
        },
        {
            name: 'Window Tint',
            price: '$400',
            imageSrc: tint,
            link: 'https://www.oneflare.com.au/costs/car-window-tinting#:~:text=The%20cost%20of%20getting%20your,is%20between%20%24200%20and%20%24500.',
        },
        {
            name: 'Dragon Badge',
            price: '$50',
            imageSrc: dragon,
            link: 'https://www.amazon.com.au/Chinese-Dragon-Chrome-Emblem-Sticker/dp/B01EKPEWY0',
        }
    ]
})

export const products = readonly(productsData)