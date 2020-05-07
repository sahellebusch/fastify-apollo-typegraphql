// src/data.ts

export interface ProjectData {
  id: number;
  name: string;
}

export const projects: ProjectData[] = [
  {id: 1, name: 'Learn React Native'},
  {id: 2, name: 'Workout'}
];
