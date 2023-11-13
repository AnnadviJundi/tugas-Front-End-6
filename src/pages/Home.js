import Hero from '../Components/Hero/Hero';
import Movies from '../Components/Movies/Movies';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer'
function Main() {
    return (
        <main>
            <Hero />
            <Movies/>
        </main>
    );
}

function Home() {
    return (
        <>
            <Navbar/>
            <Main/>
            <Footer/>
        </>
    )
}

export default Home