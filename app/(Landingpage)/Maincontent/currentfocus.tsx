export default function Currentfocus() {

    const f25courses = [
        {
            course_number: "CS 5010",
            title: "Programming Design Paradigms",
            credits: 4,
            grade: "A",
            description: "Advanced programming concepts in Java, including object-oriented and functional programming, data structures, algorithms, and software design principles.",
            stack: "Stack: Java, Design Paradigms (Adapter, MVC, Builder etc), JUnit, Swing",
        },
        {
            course_number: "CS 5610",
            title: "Web Development",
            credits: 4,
            grade: "A",
            description: "Comprehensive study of web development technologies, including HTML, CSS, JavaScript, front-end frameworks like React, back-end development (Node.js, Express), and database integration (MongoDB, SQL).",
            stack: "Stack: JavaScript, React, Nextjs, Bootstrap CSS, Node.js, Express, MongoDB",
        }
    ]

    const s26courses = [
        {
            course_number: "CS 5800",
            title: "Algorithms",
            credits: 4,
            grade: "TBA",
            description: "In-depth study of algorithm design and analysis. Covers big-O notation, recurrences, sorting, hashing, and binary search trees. Focuses on Dynamic Programming and comprehensive Graph Algorithms (BFS, DFS, shortest paths, spanning trees). Emphasis is on proving correctness and analyzing complexity.",
        },
        {
            course_number: "CS 5100",
            title: "Foundations of Artificial Intelligence",
            credits: 4,
            grade: "TBA",
            description: "Introduction to the core theoretical models of Artificial Intelligence. Topics include uninformed, informed, and adversarial search algorithms, Decision Making under Uncertainty using Markov Decision Processes (MDPs), and Graphical Models (Bayes Nets, HMMs), and fundamental Machine Learning concepts, including Supervised and Deep Learning.",
        }
    ]


    return (
        <div className="currentfocus-card" style={{
            marginTop: "40px",
            background: "linear-gradient(135deg, #0f0f0f 0%, #0a0a0a 100%)",
            borderRadius: "20px",
            padding: "30px 60px",
            maxWidth: "1300px",
            minHeight: "400px",
            width: "95%",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 80px rgba(255, 255, 255, 0.03) inset",
            fontFamily: "'Montserrat', sans-serif"
        }}>
            <div id="aboutme-greeting" style={{
                marginTop: "10px",
                background: "linear-gradient(135deg, #f5f5f7 0%, #86868b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent", fontSize: "34px", fontWeight: "400"
            }}>Current Academic Focus
            </div><br />
            <p style={{
                fontSize: "18px",
                fontWeight: 300,
                color: "#86868b",
                fontStyle: "italic",
                marginBottom: "40px"
            }}>
                Fall 2025 at Northeastern • Semester 1
            </p>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "25px"
                }}>
                {f25courses.map((course, index) => (
                    <div key={index}
                        style={{
                            background: "linear-gradient(135deg, rgba(20, 20, 20, 0.9) 0%, rgba(15, 15, 15, 0.95) 100%)",
                            borderRadius: "16px",
                            padding: "20px",
                            border: `1px solid #C0C0C040`,
                            boxShadow: `0 4px 15px #20`,
                        }}>
                        <div style={{
                            fontSize: "17px",
                            fontWeight: 500,
                            color: "#ffd700",
                            letterSpacing: "1px",
                            marginBottom: "8px"
                        }}>
                            {course.course_number} <span style={{fontSize: "12px"}}>• {course.credits} Credits • Grade: {course.grade} </span>
                        </div>

                        {/* Course Name */}
                        <div style={{
                            fontSize: "24px",
                            fontWeight: 400,
                            color: "#f5f5f7",
                            marginBottom: "12px"
                        }}>
                            {course.title}
                        </div>

                        {/* Focus Area */}
                        <div style={{
                            fontSize: "15px",
                            fontWeight: 300,
                            color: "#d2d2d7",
                            lineHeight: "1.5",
                            marginBottom: "8px"
                        }}>
                            {course.description}
                        </div>

                        <div style={{
                            fontSize: "15px",
                            fontWeight: 400,
                            color: "#d2d2d7",
                            lineHeight: "2.5"
                        }}>
                            {course.stack}
                        </div>

                    </div>
                ))}

            </div>
            
            <div style={{
                marginTop: "20px",
                padding: "15px 20px",
                display: "flex",
                gap: "30px",
                borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                background: "rgba(255, 255, 255, 0.02)",
                borderRadius: "0 0 16px 16px",
                borderBlockColor: "rgba(255, 255, 255, 0.1)",
            }}>

                <div>
                    <span style={{ color: "#86868b", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px" }}>Term GPA: </span>
                    <span style={{ color: "#ffd700", fontSize: "15px", fontWeight: "600" }}>4.0 / 4.0</span>
                </div>
                <div>
                    <span style={{ color: "#86868b", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px" }}>Credits: </span>
                    <span style={{ color: "#f5f5f7", fontSize: "15px", fontWeight: "500" }}>8.0</span>
                </div>

            </div>
            
            <br/><br/>

            <p style={{
                fontSize: "18px",
                fontWeight: 300,
                color: "#86868b",
                fontStyle: "italic",
                marginBottom: "40px"
            }}>
                Spring 2026 at Northeastern • Semester 2
            </p>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "25px"
                }}>
                {s26courses.map((course, index) => (
                    <div key={index}
                        style={{
                            background: "linear-gradient(135deg, rgba(20, 20, 20, 0.9) 0%, rgba(15, 15, 15, 0.95) 100%)",
                            borderRadius: "16px",
                            padding: "20px",
                            border: `1px solid #C0C0C040`,
                            boxShadow: `0 4px 15px #20`,
                        }}>
                        <div style={{
                            fontSize: "17px",
                            fontWeight: 500,
                            color: "#ffd700",
                            letterSpacing: "1px",
                            marginBottom: "8px"
                        }}>
                            {course.course_number} <span style={{fontSize: "12px"}}>• {course.credits} Credits</span>
                        </div>

                        {/* Course Name */}
                        <div style={{
                            fontSize: "24px",
                            fontWeight: 400,
                            color: "#f5f5f7",
                            marginBottom: "12px"
                        }}>
                            {course.title}
                        </div>

                        {/* Focus Area */}
                        <div style={{
                            fontSize: "15px",
                            fontWeight: 300,
                            color: "#d2d2d7",
                            lineHeight: "1.5"
                        }}>
                            {course.description}
                        </div>

                    </div>
                ))}

            </div>

            <div style={{
                marginTop: "20px",
                padding: "15px 20px",
                display: "flex",
                gap: "30px",
                borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                background: "rgba(255, 255, 255, 0.02)",
                borderRadius: "0 0 16px 16px",
                borderBlockColor: "rgba(255, 255, 255, 0.1)"
            }}>

                <div>
                    <span style={{ color: "#86868b", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px" }}>Term GPA: </span>
                    <span style={{ color: "#ffd700", fontSize: "15px", fontWeight: "600" }}>TBD</span>
                </div>
                <div>
                    <span style={{ color: "#86868b", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px" }}>Credits: </span>
                    <span style={{ color: "#f5f5f7", fontSize: "15px", fontWeight: "500" }}>8.0</span>
                </div>
                
            </div>

        </div>
        
        
    )
}