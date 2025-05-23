// Main.jsx
import { createRoot } from "react-dom/client";
import LearnifyInfo from "./LearnifyInfo";
import Container from "./Container";
import "./custom.css";

createRoot(document.getElementById("root")).render(
    <Container>
        <LearnifyInfo />
    </Container>
);
