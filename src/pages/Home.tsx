import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <div style={{ padding: 20 }}>
                <h2>Home View</h2>
                <div>
                    <h1>Home</h1>
                    <nav>
                        <Link to="/">Home</Link> |{" "}
                        <Link to="/demons">Demon List</Link>
                    </nav>
                </div>
            </div>
        </>
    );
}
