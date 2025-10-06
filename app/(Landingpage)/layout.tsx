import { ReactNode } from "react";
import LpSidebar from "./lpsidebar";
import "./styles.css";
import { Col, Row } from "react-bootstrap";

export default function LPLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (

        <div style={{ display: "flex" }}>
            <div className="side-bar-bg" style={{ width: "10%", height: "100vh", position: "fixed" }}>
                <LpSidebar />
            </div>
            <div style={{
                position: "fixed",
                left: "10%",
                top: 0,
                width: "1px",
                height: "100vh",
                background: "rgba(255, 255, 255, 0.1)",
                zIndex: 10
            }}></div>
            <div style={{ display: "flex", width: "90%", marginLeft: "auto" }}>
                {children}
            </div>
        </div>
    )
}