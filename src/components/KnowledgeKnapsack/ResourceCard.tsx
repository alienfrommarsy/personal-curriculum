import React from 'react';

interface Resource {
    title: string;
    description: string;
    link: string;
    curriculumItems: string[];
}

interface ResourceCardProps {
    resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
    return (
        <div className="resource-card">
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">View Resource</a>
            <div>
                <h3>Linked Curriculum Items:</h3>
                <ul>
                    {resource.curriculumItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ResourceCard;