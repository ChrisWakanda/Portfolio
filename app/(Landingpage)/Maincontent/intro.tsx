
import Link from "next/link"

<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300&display=swap" rel="stylesheet"></link>
export default function Intro() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw" }}>


            <div style={{
                background: "linear-gradient(135deg, #0f0f0f 0%, #0a0a0a 100%)",
                borderRadius: "20px",
                padding: "80px 60px",
                maxWidth: "1000px",
                minHeight: "600px",
                maxHeight: "700px",
                width: "95%",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 80px rgba(255, 255, 255, 0.03) inset"
            }}>

                <div style={{ padding: 0 }}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", margin: "auto" }}>
                        <div style={{ fontSize: "40px", fontWeight: 300, color: "#86868b" }}>Hey there! 👋 I&apos;m</div>
                        <div style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "64px",
                            fontWeight: 400,
                            background: "linear-gradient(135deg, #f5f5f7 0%, #86868b 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text", marginTop: "-10px"
                        }}>Aryan Raveshia</div>
                        <div style={{ fontSize: "24px", fontWeight: 300, color: "#ffd700", marginTop: "30px" }}>software engineer <span style={{ color: "#f5f5f7" }}>by trade</span></div>
                        <div style={{ fontSize: "24px", fontWeight: 300, color: "#C0C0C0", marginTop: "0px" }}>builder at <span style={{ color: "#f5f5f7" }}>heart</span></div>
                        <div style={{ fontSize: "24px", fontWeight: 300, color: "#cd7f32", marginTop: "0px" }}>global in <span style={{ color: "#f5f5f7" }}>spirit</span></div>
                        <div style={{ fontSize: "24px", fontWeight: 300, color: "#f5f5f7", marginTop: "45px" }}>wanna more? check out my resume! </div>
                        <div style={{ marginTop: "50px" }}>
                            <Link href="/Docs/aryan_resume.pdf" target="_blank" rel="noopener noreferrer">
                                <button
                                    style={{
                                        padding: "12px 24px",
                                        fontSize: "16px",
                                        fontWeight: 500,
                                        color: "#",
                                        //background: "linear-gradient(135deg, #FFD700, #B8860B)",
                                        background: "rgba(255, 255, 255, 0.1)",
                                        backdropFilter: "blur(10px)",
                                        border: "1px solid rgba(255, 255, 255, 0.2)",

                                        //border: "none",
                                        borderRadius: "8px",
                                        cursor: "pointer",
                                        fontFamily: "'Montserrat', sans-serif",
                                    }}
                                >
                                    View Resume
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}