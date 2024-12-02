'use client'
import React, {CSSProperties, useState} from "react";

interface Stage {
    title: string;
    image: string;
    description: string;
}

interface TutorialProps {
    stages: Stage[];
    onComplete: () => void;
}


const styles: { [key: string]: CSSProperties } = {
    container: {
        maxWidth: "500px",
        margin: "auto",
        padding: "20px",
        textAlign: "center", // Ensures all child elements, including the image, are centered
        fontFamily: "Arial, sans-serif",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
    },
    title: {
        fontSize: "24px",
        marginBottom: "20px",
        color: "#4CAF50", // Change title color to a green shade
    },
    image: {
        maxWidth: "100%",
        height: "auto",
        margin: "0 auto", // Centers the image horizontally
        display: "block", // Necessary for margin auto to work
        borderRadius: "4px",
    },
    description: {
        fontSize: "16px",
        marginBottom: "30px",
        color: "#555",
    },
    navigation: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        backgroundColor: "#007bff",
        color: "#fff",
        outline: "none",
        opacity: 1,
    },
    progressBar: {
        fontSize: "14px",
        color: "#888",
    },
};;


const Tutorial: React.FC<TutorialProps> = ({ stages, onComplete }) => {
    const [currentStage, setCurrentStage] = useState<number>(0);

    const handleNext = () => {
        if (currentStage === stages.length - 1) {
            onComplete();
        } else {
            setCurrentStage(currentStage + 1);
        }
    };

    const handleBack = () => {
        if (currentStage > 0) {
            setCurrentStage(currentStage - 1);
        }
    };

    const isLastStage = currentStage === stages.length - 1;

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>{stages[currentStage].title}</h1>
            <img
                src={stages[currentStage].image}
                alt={stages[currentStage].title}
                style={styles.image}
            />
            <p style={styles.description}>{stages[currentStage].description}</p>

            <div style={styles.navigation}>
                <button
                    style={styles.button}
                    onClick={handleBack}
                    disabled={currentStage === 0}
                >
                    Back
                </button>
                <button style={styles.button} onClick={handleNext}>
                    {isLastStage ? "Done" : "Next"}
                </button>
            </div>

            {/* Progress Bar */}
            <div style={styles.progressBar}>
                Step {currentStage + 1} of {stages.length}
            </div>
        </div>
    );
};


export default Tutorial;