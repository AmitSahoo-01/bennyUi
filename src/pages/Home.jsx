import Hero from "../ui-sections/Hero/Hero";
import ComponentGrid from "../ui-sections/ComponentGrid/ComponentGrid";

function Home() {
    return (
        <div style={{ paddingBottom: '20px' }}>
            {/* Section 1: Hero */}
            <Hero />

            {/* Section 2: Browse Components */}
            <ComponentGrid />

            <footer style={{ marginTop: '50px', borderTop: '1px solid var(--border)', padding: '50px 20px', textAlign: 'center', color: 'var(--secondary-text)' }}>
                <p>Crafted with BennyUI by Amit</p>
                <p>Simple • Fast • Elegant — BennyUI</p>
                <p>© 2026 BennyUI. All Rights are reserved.</p> 
            </footer>
        </div>
    );
}

export default Home;
