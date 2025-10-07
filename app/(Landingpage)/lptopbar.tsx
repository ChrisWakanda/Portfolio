import { FaLocationArrow, FaPhone, FaUniversity } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

export default function LpTopbar() {
    return (
        <>
            <div className="topbar-lines" style={{ display: "flex", justifyContent: "flex-end", padding: "15px 30px", fontFamily: "'Montserrat', sans-serif", fontSize: "15px", fontWeight: "100", color: "#f5f5f7" }}>
                <FaUniversity style={{ marginRight: "10px", color: "#ffd700"}} />
                MSCS&apos;27 @ Northeastern University
                <FaLocationPin style={{ marginLeft: "20px", marginRight: "10px", color: "#ffd700"}} />
                Boston, MA
                <FaPhone id="desktop-phone-topbar"style={{ marginLeft: "20px", marginRight: "10px", color: "#ffd700"}} />
                <span id="desktop-phone-topbar">+1 (857) 351-1142</span>
            </div>
        </>
    )
}