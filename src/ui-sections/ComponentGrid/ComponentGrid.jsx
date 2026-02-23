import { Link } from "react-router-dom";
import { components } from "../../data/components";
import "./ComponentGrid.css";

export default function ComponentGrid() {
    return (
        <section id="components" className="component-grid-section">

            <div className="usage">
                <h3 className="highlight-text">10+ Components</h3>
                <h3 className="highlight-text">Simple to use</h3>
                <h3 className="highlight-text">Easy to customize</h3>
                <h3 className="highlight-text">Ready Made Components</h3>
            </div>

            <h2 className="component-grid-title">COMPONENTS</h2>

            <div className="component-grid">
                {components.map((component) => (
                    <Link key={component.name} to={`/components/${component.name.toLowerCase()}`} className="component-card-link">
                        <div className="component-card">
                            {/* Preview Image */}
                            {component.previewImage && (
                                <div className="component-preview-image">
                                    <img src={component.previewImage} alt={`${component.name} preview`} />
                                </div>
                            )}

                            <div className="component-info">
                                <h3 className="component-name">{component.name}</h3>
                                <p className="component-description">{component.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
