'use client';
import { useRef } from 'react';
export default function Experience() {

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            if (scrollContainerRef.current) {
                const scrollAmount = 400; // Adjust scroll amount as needed
                scrollContainerRef.current.scrollBy({
                    left: direction === 'left' ? -scrollAmount : scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
    };

    const experiences = [
        {
            company: "The Boeing Company",
            role: "Entry Level Software Engineer",
            duration: "Aug 2024 - Aug 2025 (1yr)",
            location: "Bangalore, India",
            color: "#00D4FF",
            highlights: [
                "Built high-performance aircraft-state streaming with ZeroMQ",
                "Achieved <20ms latency, 5K+ msgs/sec",
                "Reduced serialized payload size by 40% with Protobuf",
                "Automated Windows runtime packaging in Linux containers"
            ]
        },
        {
            company: "Calendar Management System",
            role: "Java Developer",
            duration: "Project",
            location: "Boston, MA",
            color: "#4A90E2",
            highlights: [
                "Architected robust MVC system using Java & Swing for strict modularity",
                "Engineered flexible controller using Command & Builder design patterns",
                "Implemented custom AnalyticsHub using Immutable DTOs & defensive copying",
                "Developed complex algorithms for recurring event scheduling & conflict detection"
            ]
        },
        {
            company: "Learning Management System",
            role: "Full Stack Web Developer",
            duration: "Project",
            location: "Boston, MA",
            color: "#2A9D8F",
            highlights: [
                "Developed scalable RBAC system with RESTful APIs using Express & MongoDB",
                "Optimized persistent data storage queries using Mongoose ODM",
                "Built responsive Next.js & TypeScript frontend with real-time enrollment",
                "Implemented secure session-based authentication & deployed on Vercel/Render"
            ]
        },
        {
            company: "Airtime Analytics",
            role: "ML Flight Delay Forecasting",
            duration: "Project",
            location: "Manipal, India",
            color: "#C0C0C0",
            highlights: [
                "Built Regressor models achieving 93% R² score",
                "Extensive feature engineering on weather & schedules",
                "Presented at 5th Springer IDEA-2K Conference",
                "Submitted for Springer LNEE publication"
            ]
        },
        {
            company: "Explainable AI Researcher",
            role: "AI Research Assistant",
            duration: "Jan 2024 - Jul 2024 (6mos)",
            location: "Manipal, India",
            color: "#ffd700",
            highlights: [
                "Authored thesis on Explainable AI in Regression Models",
                "Improved explanation fidelity by 15% on benchmarks",
                "Built visualization pipelines using SHAP and LIME",
                "Evaluated model transparency through quantitative metrics"
            ]
        }
    ];

    return (
        <div className="intro-card" style={{
            marginTop: "40px",
            background: "linear-gradient(135deg, #0f0f0f 0%, #0a0a0a 100%)",
            borderRadius: "20px",
            padding: "30px 60px",
            maxWidth: "1300px",
            width: "95%",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37), 0 0 80px rgba(255, 255, 255, 0.03) inset",
            fontFamily: "'Montserrat', sans-serif",
            position: "relative"
        }}>
            <div id="aboutme-greeting" style={{
                marginTop: "0px",
                background: "linear-gradient(135deg, #f5f5f7 0%, #86868b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent", fontSize: "34px", fontWeight: "400"
            }}>Experience
            </div><br />
            <p style={{
                fontSize: "18px",
                fontWeight: 300,
                color: "#86868b",
                fontStyle: "italic"
            }}>
                Scroll through my journey →
            </p>
            <br />
            <div ref={scrollContainerRef}
                style={{
                    display: "flex",
                    gap: "30px",
                    overflowX: "auto",
                    scrollbarWidth: "thin",
                    scrollbarColor: "rgba(255, 255, 255, 0.3) transparent",
                    paddingBottom: "20px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    marginLeft: "-10px",
                    marginRight: "-10px",
                }}>

                {/* 
                
                .map() - Loops through the experiences array
                For each experience (exp), creates a card 
                key={index} - React needs unique keys for list items (uses array position)
                
                */}
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        style={{ //this is the experience card container styles
                            minWidth: "400px",
                            maxWidth: "400px",
                            background: "linear-gradient(135deg, rgba(20, 20, 20, 0.9) 0%, rgba(15, 15, 15, 0.95) 100%)",
                            borderRadius: "16px",
                            padding: "40px 30px",
                            border: `1px solid ${exp.color}40`,
                            boxShadow: `0 4px 20px ${exp.color}20`,

                        }}>
                        {/* Company/Project Header */}
                        <div style={{
                            fontSize: "28px",
                            fontWeight: 500,
                            color: exp.color,
                            marginBottom: "8px"
                        }}>
                            {exp.company}
                        </div>

                        {/* Role */}
                        <div style={{
                            fontSize: "18px",
                            fontWeight: 400,
                            color: "#f5f5f7",
                            marginBottom: "8px"
                        }}>
                            {exp.role}
                        </div>

                        {/* Duration & Location */}
                        <div style={{
                            fontSize: "14px",
                            fontWeight: 300,
                            color: "#86868b",
                            marginBottom: "25px"
                        }}>
                            {exp.duration} • {exp.location}
                        </div>


                        {/* Highlights */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            {exp.highlights.map((highlight, i) => ( //Maps through highlights array to create bullet points.
                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "10px"
                                    }}
                                >
                                    <span style={{ color: exp.color, fontSize: "18px", marginTop: "2px" }}>•</span>
                                    <span style={{
                                        fontSize: "15px",
                                        fontWeight: 300,
                                        color: "#d2d2d7",
                                        lineHeight: "1.5"
                                    }}>
                                        {highlight}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}