// Container.jsx
export default function Container({ children }) {
    return (
        <div className="container-card">
            <h1>Learnify</h1>
            <br />
            {children}
            <br />
            <footer>
                <p>2025 - Learnify</p>
            </footer>
        </div>
    );
}