
import Banner from "../Components/Landing Page/Banner"
import ImageGrid from "../Components/Landing Page/Companys"
import ProductComparison from "../Components/Landing Page/Comparision"
import FAQ from "../Components/Landing Page/FAQ"
import Hero from "../Components/Landing Page/Hero"
import Navbar from "../Components/Landing Page/NavBar"
import ReviewComponent from "../Components/Landing Page/Reviews"
import StageoneNew from "../Components/Landing Page/StageoneNew"
import ContactForm from "../Components/Landing Page/contact_form"
import Features from "../Components/Landing Page/features"
import PricingComparison from "../Components/Landing Page/pricing"

const LandingPage = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <ImageGrid/>
            <Banner/>
            <Features/>
            {/* <StageOne/> */}
            <StageoneNew />
            <ReviewComponent/>
            <PricingComparison/>
            <ProductComparison />
            <ContactForm />
            <FAQ/>
            {/*<ArkiterBlog />*/}
            {/* <Footer /> */}
        </>
    )
}

export default LandingPage