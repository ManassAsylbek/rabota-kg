import {ReactNode} from "react";

export interface vacanciesType {
    title: string;
    path: string;
    element: ReactNode;
}

export interface IVacancyParams {
    region?: string;
    vacancy_category?: string;
    search?: string;
}


export interface IVacancyCategory {
    id: number,
    title: string;
}

export interface IRegion {
    "title": {
        "id": number,
        "region":string
    }
}

export interface vacancyType {
    "id": number,
    "vacancy_category": {
        "id": number,
        "title": string
    },
    "company_name": {
        "id": number,
        "name": string
    },
    "region": {
        "id": number,
        "title": string
    },
    "job_title": string,
    "description": string,
    "requirements": string,
    "responsibilities": string,
    "published_at": string,
    "views_count": number,
    "address": string,
    "salary": string,
    "contact": string,
    "is_active": boolean
}


