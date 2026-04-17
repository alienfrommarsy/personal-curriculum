import React from 'react';
import { useState } from 'react';

const KnowledgeKnapsack = () => {
    const [resources, setResources] = useState([]);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState('');

    const addResource = () => {
        setResources([...resources, { title, category, tags: tags.split(',').map(tag => tag.trim()) }]);
        setTitle('');
        setCategory('');
        setTags('');
    };

    return (
        <div>
            <h2>Knowledge Knapsack</h2>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Resource Title" />
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
            <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags (comma separated)" />
            <button onClick={addResource}>Add Resource</button>
            <ul>
                {resources.map((resource, index) => (
                    <li key={index}>Title: {resource.title}, Category: {resource.category}, Tags: {resource.tags.join(', ')}</li>
                ))}
            </ul>
        </div>
    );
};

export default KnowledgeKnapsack;