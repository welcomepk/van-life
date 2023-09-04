import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <div className="about-page-content">
                <h1>You got the travel plans.</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ipsum cumque molestiae ipsa corrupti? Nisi pariatur exercitationem omnis, ducimus sint necessitatibus velit minus nostrum dolor perspiciatis mollitia voluptates? Molestiae id excepturi sed vel consectetur odio, tenetur, ducimus voluptas quod cum temporibus reprehenderit harum perspiciatis quidem. Magnam, iusto vitae? Voluptate, ut.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit laboriosam illo sequi consequatur. Beatae, porro. Voluptatem totam culpa temporibus. Assumenda.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your destination is waiting <br />Your van is ready</h2>
                <Link className="link-button" to='/vans'>Explore our vans</Link>
            </div>
        </div>
    )
}

