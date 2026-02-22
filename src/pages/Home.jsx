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
                <p>© 2026 BennyUI. All Rights are reserved.</p>
                <p>Crafted with BennyUI by Amit</p>
                <p>Simple • Fast • Elegant — BennyUI</p>

                <h3>If anyone is interested in using or maintaining this for their side project, feel free to message me on LinkedIn.</h3>
            </footer>
        </div>
    );
}

export default Home;
