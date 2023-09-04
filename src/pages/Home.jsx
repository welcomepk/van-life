import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>You got the travel plans.</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ipsum cumque molestiae ipsa corrupti? Nisi pariatur exercitationem omnis, ducimus sint necessitatibus velit minus nostrum dolor perspiciatis mollitia voluptates? Molestiae id excepturi sed vel consectetur odio, tenetur, ducimus voluptas quod cum temporibus reprehenderit harum perspiciatis quidem. Magnam, iusto vitae? Voluptate, ut.</p>
            <Link to='vans'>Find your vans</Link>
        </div>
    )
}

