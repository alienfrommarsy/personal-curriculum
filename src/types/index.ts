// src/types/index.ts

// Definition of User interface
export interface User {
    id: string;
    name: string;
    email: string;
    skills: SkillNode[];
}

// Definition of SkillNode interface
export interface SkillNode {
    id: string;
    name: string;
    level: number; // Level from 1 to 10
    resources: Resource[];
}

// Definition of Resource interface
export interface Resource {
    id: string;
    title: string;
    link: string;
}

// Definition of Goal interface
export interface Goal {
    id: string;
    description: string;
    targetDate: Date;
    achieved: boolean;
}

// Definition of Streak interface
export interface Streak {
    id: string;
    userId: string;
    startDate: Date;
    endDate: Date;
    count: number;
} 
