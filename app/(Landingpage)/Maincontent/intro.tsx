import Link from "next/link"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Intro() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            width: "100%",
            padding: "80px 0 20px 0"
        }}>
            <div className="intro-card" style={{
                display: "flex",
                background: "linear-gradient(135deg, #0f0f0f 0%, #0a0a0a 100%)",
                borderRadius: "20px",
                padding: "80px 60px",
                maxWidth: "1300px",
                minHeight: "400px",
                maxHeight: "675px",
                width: "95%",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 80px rgba(255, 255, 255, 0.03) inset"
            }}>
                <div style={{ display: "flex", padding: 0 }}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", margin: "auto" }}>
                        <div className="intro-greeting" style={{
                            fontSize: "40px",
                            fontWeight: 300,
                            color: "#86868b"
                        }}>
                            Hey there! 👋 I&apos;m
                        </div>

                        <div className="intro-name" style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "64px",
                            fontWeight: 400,
                            background: "linear-gradient(135deg, #f5f5f7 0%, #86868b 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            marginTop: "-10px"
                        }}>
                            Aryan Raveshia
                        </div>

                        <div className="intro-tagline" style={{
                            fontSize: "24px",
                            fontWeight: 300,
                            color: "#ffd700",
                            marginTop: "30px"
                        }}>
                            software engineer <span style={{ color: "#f5f5f7" }}>by trade</span>
                        </div>

                        <div className="intro-tagline" style={{
                            fontSize: "24px",
                            fontWeight: 300,
                            color: "#C0C0C0",
                            marginTop: "0px"
                        }}>
                            builder at <span style={{ color: "#f5f5f7" }}>heart</span>
                        </div>

                        <div className="intro-tagline" style={{
                            fontSize: "24px",
                            fontWeight: 300,
                            color: "#cd7f32",
                            marginTop: "0px"
                        }}>
                            global in <span style={{ color: "#f5f5f7" }}>spirit</span>
                        </div>

                        <div className="intro-description" style={{
                            fontSize: "24px",
                            fontWeight: 300,
                            color: "#f5f5f7",
                            marginTop: "45px"
                        }}>
                            check out my resume below! <br/>
                            <span style={{fontStyle: "italic", fontWeight: "100", fontSize: "16px", fontFamily: "'Montserrat', sans-serif", color: "#a1a1a6"}} id="intern-seek-message-intro">I&apos;m currently seeking Summer 2026 Internships in SWE!</span>
                        </div>

                        <div className="intro-button-wrapper" style={{ marginTop: "15px" }}>
                            <Link href="/Docs/aryan_resume.pdf" target="_blank" rel="noopener noreferrer">
                                <button style={{
                                    padding: "12px 24px",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    color: "#f5f5f7",
                                    background: "rgba(255, 255, 255, 0.1)",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255, 255, 255, 0.2)",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    fontFamily: "'Montserrat', sans-serif",
                                    transition: "all 0.3s ease"
                                }}>
                                    View Resume
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div id="intro-art" style={{ display: "flex", alignItems: "center", marginLeft: "auto", marginRight: "auto" }}>
                    <img src="/intro_art_png_version.png" width="550px"></img>
                </div>
            </div>

            <div className="mobile-social-footer" style={{
                            display: "none",
                            justifyContent: "center",
                            gap: "30px",
                            marginTop: "30px",
                            paddingBottom: "30px"
                        }}>
                            <Link href="https://www.linkedin.com/in/aryanraveshia/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={28} color="#86868b" />
                            </Link>
                            <Link href="https://x.com/aryan_raveshia" target="_blank" rel="noopener noreferrer">
                                <FaXTwitter size={28} color="#86868b" />
                            </Link>
                            <Link href="https://github.com/ChrisWakanda" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={28} color="#86868b" />
                            </Link>
                            <Link href="mailto:aryan.raveshia12@gmail.com">
                                <FaEnvelope size={28} color="#86868b" />
                            </Link>
                            <Link href="tel:+18573511142">
                                <FaPhone size={28} color="#86868b" />
                            </Link>
            </div>

        </div>
        
    )
}