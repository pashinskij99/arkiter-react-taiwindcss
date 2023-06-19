import ArkiterBlog from "../Components/Landing Page/ArkiterBlog"
import Banner from "../Components/Landing Page/Banner"
import ImageGrid from "../Components/Landing Page/Companys"
import ProductComparison from "../Components/Landing Page/Comparision"
import FAQ from "../Components/Landing Page/FAQ"
import Footer from "../Components/Landing Page/Footer"
import Hero from "../Components/Landing Page/Hero"
import Navbar from "../Components/Landing Page/NavBar"
import ReviewComponent from "../Components/Landing Page/Reviews"
import StageOne from "../Components/Landing Page/Stageone"
import ContactForm from "../Components/Landing Page/contact_form"
import Features from "../Components/Landing Page/features"
import PricingComparison from "../Components/Landing Page/pricing"

const LandingPage = () => {
    return (
        <>
            {/* <Navbar/> */}
            <Hero/>
            <ImageGrid/>
            <Banner/>
            <Features/>
            <StageOne/>
            <ReviewComponent/>
            <PricingComparison/>
            <ProductComparison />
            <ArkiterBlog />
            <FAQ/>
            <ContactForm />
            {/* <Footer /> */}
        </>
    )
}

export default LandingPage