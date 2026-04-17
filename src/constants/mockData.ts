const mockData = {
    skills: [
        { id: 1, name: 'JavaScript', category: 'Programming', level: 'Intermediate' },
        { id: 2, name: 'React', category: 'Framework', level: 'Intermediate' },
        { id: 3, name: 'Node.js', category: 'Backend', level: 'Beginner' },
        { id: 4, name: 'CSS', category: 'Design', level: 'Intermediate' },
        { id: 5, name: 'HTML', category: 'Design', level: 'Intermediate' }
    ],
    resources: [
        { id: 1, title: 'JavaScript.info', type: 'website', link: 'https://javascript.info' },
        { id: 2, title: 'React Documentation', type: 'website', link: 'https://reactjs.org/docs/getting-started.html' },
        { id: 3, title: 'Node.js Official Guide', type: 'book', link: 'https://nodejs.dev/learn' },
        { id: 4, title: 'CSS Tricks', type: 'website', link: 'https://css-tricks.com' }
    ],
    userProgress: [
        { userId: 1, skillId: 1, progress: 85 },
        { userId: 1, skillId: 2, progress: 40 },
        { userId: 1, skillId: 3, progress: 60 }
    ]
};

export default mockData;