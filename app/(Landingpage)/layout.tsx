import { ReactNode } from "react";
import LpSidebar from "./lpsidebar";
import "./styles.css";
import { Col, Row } from "react-bootstrap";
import LpTopbar from "./lptopbar";

export default function LPLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <>
            <div style={{width: "100%", position: "fixed", top: 0, zIndex: 20, backgroundColor: "#0a0a0a", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <LpTopbar/>
            </div>

            <div style={{ display: "flex" }}>
                <div className="sidebar-desktop side-bar-bg" style={{ width: "10%", height: "100vh", position: "fixed" }}>
                    <LpSidebar />
                </div>
                <div className="sidebar-divider" style={{
                    position: "fixed",
                    left: "10%",
                    top: 0,
                    width: "1px",
                    height: "100vh",
                    background: "rgba(255, 255, 255, 0.1)",
                    zIndex: 10
                }}></div>
                <div className="main-content-wrapper" style={{ display: "flex", width: "90%", marginLeft: "auto"}}>
                    {children}
                </div>
            </div>
        </>
    )
}