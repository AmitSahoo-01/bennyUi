import CodeCopyAnimation from "./CodeCopyAnimation";
import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-grid">
                {/* Left Column: Hero Text & Buttons */}
                <div className="hero-content">
                    <h1 className="hero-title">
                        Ship landing pages <br />
                        <span>at lightning speed.</span>
                    </h1>
                    <p className="hero-description">
                        Copy source code instantly. Fully customizable.
                        Download as a mini-package and drop into your project.
                    </p>

                    <div className="hero-badges">
                        <div className="hero-badge">100% Free</div>
                        <div className="hero-badge">Live Preview</div>
                    </div>

                    <div className="hero-cta">
                        <a href="#components" className="browse-button">
                            BROWSE COMPONENTS
                        </a>
                    </div>
                </div>

                {/* Right Column: Animation Video */}
                <div className="hero-animation">
                    <CodeCopyAnimation />
                </div>
            </div>
        </section>
    );
}
