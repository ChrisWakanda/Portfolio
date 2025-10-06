import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEnvelope, FaXTwitter } from "react-icons/fa6";
import "./styles.css";
export default function LpSidebar() {
    return (
        <div style={{ height: "100%" }}>
            <ListGroup className="side-bar-bg z-2" id="lp-sidebar" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <ListGroupItem>
                    <Link href="https://www.linkedin.com/in/aryanraveshia/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={35} />
                    </Link>
                </ListGroupItem>
                <br /><br /><br /><br />
                <ListGroupItem>
                    <Link href="https://x.com/aryan_raveshia" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter size={35} />
                    </Link>
                </ListGroupItem>
                <br /><br /><br /><br />
                <ListGroupItem>
                    <Link href="https://github.com/ChrisWakanda" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={35} />
                    </Link>
                </ListGroupItem>
                <br /><br /><br /><br />
                <ListGroupItem>
                    <Link href="mailto:aryan.raveshia12@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope size={35} />
                    </Link>
                </ListGroupItem>
            </ListGroup>
        </div>
    )
}