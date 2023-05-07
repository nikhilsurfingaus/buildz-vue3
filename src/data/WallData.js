import { reactive, readonly } from 'vue'

const wallpaper = reactive({
    imageAddresses: [
        "https://4kwallpapers.com/images/wallpapers/abt-audi-rs7-r-2020-3840x2160-222.jpg",
        "https://wallpaperaccess.com/full/1448606.jpg",
        "https://scontent.fsyd8-1.fna.fbcdn.net/v/t39.30808-6/260784085_4747892945272090_2645609701079314680_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=HoY6C7MsDIUAX_ufvsI&_nc_ht=scontent.fsyd8-1.fna&oh=00_AfDrUh3L7fKTe3wDa8d9y8uAN9XA93NF1kw2iGjfMbyUqw&oe=645B9292",
        "https://i.ytimg.com/vi/CLdHzPcCWAU/maxresdefault.jpg",
        "https://i.ytimg.com/vi/CLdHzPcCWAU/maxresdefault.jpg",
    ]

})

export const imageAddresses = readonly(wallpaper)