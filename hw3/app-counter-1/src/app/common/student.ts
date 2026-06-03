import { Grades } from './grades';

export interface Student {
    id: number,
    name: string,
    major: string,
    grade: Grades
}