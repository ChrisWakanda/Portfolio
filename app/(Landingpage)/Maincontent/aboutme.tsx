export default function Aboutme() {
    return (
        <div className="aboutme-card" style={{
            marginTop: "40px",
            display: "flex",
            background: "linear-gradient(135deg, #0f0f0f 0%, #0a0a0a 100%)",
            borderRadius: "20px",
            padding: "30px 60px",
            maxWidth: "1300px",
            minHeight: "400px",
            maxHeight: "800px",
            width: "95%",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 80px rgba(255, 255, 255, 0.03) inset",
            fontFamily: "'Montserrat', sans-serif"
        }}>
            <div style={{ padding: 0 }}>

                <div id="aboutme-greeting" style={{
                    marginTop: "10px",
                    background: "linear-gradient(135deg, #f5f5f7 0%, #86868b 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent", fontSize: "34px", fontWeight: "400"
                }}>About Me
                </div>
                <br/>
                <div>
                
                    <p style={{
                        fontSize: "20px",
                        fontWeight: 300,
                        color: "#d2d2d7",
                        lineHeight: "1.8",
                        marginBottom: "20px"
                    }}>
                        I&apos;m currently a <span style={{ color: "#ffd700" }}>computer science</span> grad student at <span style={{color: "#FF6B35"}}>Northeastern University</span> in Boston,
                        originally from the lively city of <span style={{ color: "#cd7f32" }}>Mumbai, India</span>.
                        If I had to sum up why I chose tech in one line, it’d be this:<br/><br/>

                        <q style={{fontStyle: "italic", color: "#0071e3"}}>The quickest way to make a difference to 8 billion people is through the power of software.</q><br/><br/>
                        
                        And I genuinely believe that. I&apos;m motivated by <span style={{color: "red"}}>impact</span>—building systems that scale, models that make sense, 
                        and software that people actually want to use. These words have taken me from engineering flight simulation systems at <span style={{color: "#ffd700"}}>Boeing</span> to
                        exploring the frontiers of explainable AI.
                    </p>
                    <p style={{
                        fontSize: "20px",
                        fontWeight: 300,
                        color: "#d2d2d7",
                        lineHeight: "1.8",
                        marginBottom: "20px"
                    }}>
                        I love the challenge of <span style={{ color: "#f5f5f7" }}>making complex systems simple,
                            fast, and reliable</span>.  When I&apos;m not coding, you&apos;ll find me exploring Boston&apos;s club scene, diving into research papers,
                        or tinkering with side projects that push my limits.
                    </p>
                    
                </div>
            </div>
        </div>

    )
}