import { reactive, readonly } from 'vue'
import exhuast1 from '../assets/a7Products/exhuast1.jpg'
import rims from '../assets/a7Products/rims.jpg'
import exhuast2 from '../assets/a7Products/exhuast2.jpg'
import grille from '../assets/a7Products/grille.jpg'
import aero from '../assets/a7Products/skirts.jpg'
import frontlip from '../assets/a7Products/frontlip.jpg'
import spoiler from '../assets/a7Products/spoiler.jpg'
import spray from '../assets/a7Products/spray.jpg'
import cold from '../assets/a7Products/intake.jpg'
import interior from '../assets/a7Products/interior.jpg'
import apple from '../assets/a7Products/apple.jpg'
import coilovers from '../assets/a7Products/coilovers.jpg'

const productsData = reactive({
    products: [{
            name: 'Honeycomb Front Grill ',
            price: '$300',
            imageSrc: grille,
            link: 'https://wildliner.com/products/gloss-black-front-grille-honeycomb-grill-for-2016-2018-audi-a7-c7-s7-fg46?currency=AUD&variant=44341311471868&utm_medium=cpc&utm_source=google&utm_campaign=Google%20Shopping',
        },
        {
            name: 'HUSSLA POWER GLOSS BLACK',
            price: '$2500',
            imageSrc: rims,
            link: 'https://www.ozzytyres.com.au/wheel-and-tyre-packages/hussla-power-gloss-black-20x8-5',
        },
        {
            name: 'ARMYTRIX Valvetronic Exhaust System',
            price: '$4000',
            imageSrc: exhuast1,
            link: 'https://www.armytrixusa.com/armytrix-stainless-steel-valvetronic-catback-exhaust-system-quad-matte-coated-tips-audi-tfsi-20112021-p-151391996.html',
        },
        {
            name: 'MagnaFlow Touring CatBack',
            price: '$1600',
            imageSrc: exhuast2,
            link: 'https://www.magnaflow.com/collections/audi-a7-quattro-exhaust-systems',
        },
        {
            name: 'BKM Side Skirts',
            price: '$800',
            imageSrc: aero,
            link: 'https://bk-motorsport.com/tuning/audi/audi-a7/audi-a7-c7/bkm-side-skirt-set-fits-audi-a7-s7-c7-0/',
        },
        {
            name: 'Front Splitter V.1',
            price: '$600',
            imageSrc: frontlip,
            link: 'https://maxtondesign.net.au/products/front-splitter-v-1-audi-s7-a7-s-line-c7',
        },
        {
            name: 'SPOILER CAP AUDI A7 ',
            price: '$300',
            imageSrc: spoiler,
            link: 'https://maxtondesign.com/product-eng-8213-Spoiler-Cap-Audi-S7-A7-S-Line-C7-C7-FL.html',
        },
        {
            name: 'Matte Back Spray',
            price: '$4000',
            imageSrc: spray,
            link: 'https://i.pinimg.com/564x/ec/14/b3/ec14b3b6491d77b335da5fd40b58be58.jpg',
        },
        {
            name: 'IE Audi 3.0T Cold Air Intake',
            price: '$1000',
            imageSrc: cold,
            link: 'https://www.dubaddiction.com.au/shop/product/ie-audi-3-0t-cold-air-intake-fits-c7-a6-a7/',
        },
        {
            name: 'Carbon Interior',
            price: '$300',
            imageSrc: interior,
            link: 'https://www.ebay.com/itm/354330347236?fits=Model%3AA7%7CMake%3AAudi&hash=item527fbc06e4:g:8FAAAOSwv2ZjR3mn',
        },
        {
            name: 'Apple Car Play',
            price: '$1000',
            imageSrc: apple,
            link: 'https://autonaviplus.com.au/product/a7-retrofit-apple-carplay-android-auto/',
        },
        {
            name: 'BC RACING COILOVER',
            price: '$1800',
            imageSrc: coilovers,
            link: 'https://bcracing.com.au/products/bc-racing-coilover-kit-br-rn-audi-a6-s6-a7-s7-rs7-2wd-awd-c7-12-18',
        }
    ]
})

export const products = readonly(productsData)