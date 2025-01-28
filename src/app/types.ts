export interface Skill {
    name: string;
    icon: string;
}

export interface PersonalInfo {
    name: string;
    surname: string;
    age: number;
    profession: string;
    based: string;
    technologiesKnown: string[];
}

interface JobDuration {
    years?: number;
    months?: number;
}

export interface Experience {
    period: string;
    duration: JobDuration;
    description: string;
    company: string;
    position: string;
    color: string;
    logo: string;
}

export interface Portfolio {
    image: string;
    name: string;
    position: string;
    projectUrl: string;
    codeUrl?: string;
    technologies: string[];
}

export interface PersonalInformationResponse {
    personalInfo: PersonalInfo;
    skills: Skill[];
    totalSkills: number;
    experience: Experience[];
    portfolio: Portfolio[];
}
