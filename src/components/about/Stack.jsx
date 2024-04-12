import React from "react";
import "./styles/stacks.css";

const Stack = ({ title, description, logo, level }) => {
    const renderProgressBar = () => {
        let colorClass;
        switch (level) {
            case "beginner":
                colorClass = "bg-red-500";
                return <progress value="25" max="90" ></progress>;
            case "intermediate":
                colorClass = "bg-orange-500";
                return <progress value="50" max="90"></progress>;
            case "advanced":
                colorClass = "bg-yellow-500";
                return <progress value="75" max="90"></progress>;
            case "expert":
                colorClass = "bg-green-500";
                return <progress value="90" max="90"></progress>;
            default:
                return null;
        }
    };

    return (
        <div className="stack-item">
            <img src={logo} alt={title} className="stack-logo" />
            <h3 className="stack-title">{title}</h3>
            {description && <p className="stack-description">{description}</p>}
            <div className="stack-progress-bar ">{renderProgressBar()}</div>
        </div>
    );
};

export default Stack;
