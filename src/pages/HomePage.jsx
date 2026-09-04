import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeatiresSection from "../components/FeatiresSection";
import CategoriesSection from "../components/CategoriesSection";
import ProductsSection from "../components/ProductsSection";
import AboutSection from "../components/AboutSection";
import CatSection from "../components/CatSection";
import Footer from "../components/Footer";

const HomePage = () => {



    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* ================= NAVBAR ================= */}
            <Header/>

            {/* ================= HERO ================= */}
            <HeroSection/>

            {/* ================= FEATURES ================= */}

            <FeatiresSection/>


            {/* ================= CATEGORIES ================= */}
            <CategoriesSection/>
            

            {/* ================= PRODUCTS ================= */}
            <ProductsSection/>
           

            {/* ================= ABOUT ================= */}
            <AboutSection/>
            

            {/* ================= CTA ================= */}
            <CatSection/>
            

            {/* ================= FOOTER ================= */}
            <Footer/>
            

        </div>
    );
}






export default HomePage