import { Hero } from '../Hero/Hero'
import { Offer } from '../Shop/Offer'
import { GalleryTop } from '../Products/GalleryTop/GalleryTop'
import { Banner } from '../Banner/Banner'
// import { OurClients } from '../Clients/OurClients/OurClients'




export const Home = () => {
    return (
        <>
        <Hero/>
        <GalleryTop/>
        <Offer/>
        <Banner/>
        </>
    )
}