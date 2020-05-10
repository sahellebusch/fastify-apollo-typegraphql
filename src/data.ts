export interface ProjectData {
  id: number;
  name: string;
  created: Date;
  updated: Date;
}

export const projects: ProjectData[] = [
  {
    id: 1,
    name: 'Learn React Native',
    created: new Date(),
    updated: new Date(),
  },
  { id: 2, name: 'Workout', created: new Date(), updated: new Date() },
];
