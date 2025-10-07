export default function Currentfocus() {

    const courses = [
        {
            course_number: "CS 5010",
            title: "Programming Design Paradigms",
            credits: 4,
            description: "Advanced programming concepts in Java, including object-oriented and functional programming, data structures, algorithms, and software design principles.",
        },
        {
            course_number: "CS 5610",
            title: "Web Development",
            credits: 4,
            description: "Comprehensive study of web development technologies, including HTML, CSS, JavaScript, front-end frameworks like React, back-end development (Node.js, Express), and database integration (MongoDB, SQL).",
        }
    ]

    return (
        <div className="aboutme-card" style={{
            marginTop: "40px",
            background: "linear-gradient(135deg, #0f0f0f 0%, #0a0a0a 100%)",
            borderRadius: "20px",
            padding: "30px 60px",
            maxWidth: "1300px",
            minHeight: "400px",
            maxHeight: "750px",
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
                Fall 2025 at Northeastern
            </p>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "25px"
                }}>
                {courses.map((course, index) => (
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
        </div>
    )
}