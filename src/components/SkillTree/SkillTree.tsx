import React from 'react';
import './SkillTree.css';

const SkillTree = () => {
    const skills = [
        { name: 'Programming', subtasks: [
            { name: 'JavaScript' },
            { name: 'Python' },
            { name: 'C++' },
        ]},
        { name: 'Design', subtasks: [
            { name: 'UX/UI Design' },
            { name: 'Graphic Design' },
        ]},
        { name: 'Data Science', subtasks: [
            { name: 'Machine Learning' },
            { name: 'Data Visualization' },
        ]},
    ];

    return (
        <div className='skill-tree'>
            {skills.map((skill, index) => (
                <div key={index} className='skill-node'>
                    <h3>{skill.name}</h3>
                    <div className='subtasks'>
                        {skill.subtasks.map((subtask, subIndex) => (
                            <div key={subIndex} className='subtask-node'>
                                <p>{subtask.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillTree;