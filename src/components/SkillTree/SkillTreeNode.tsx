import React from 'react';
import './SkillTreeNode.css';

const SkillTreeNode = ({ skill, isActive, isCompleted }) => {
    return (
        <div className={`skill-tree-node ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}> 
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
            <div className="visual-indicator">
                {isActive && <span className="indicator active">🔹</span>}
                {isCompleted && <span className="indicator completed">✅</span>}
            </div>
        </div>
    );
};

export default SkillTreeNode;
