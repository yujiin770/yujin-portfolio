export interface Project {
  id: number;
  title: string;
  tags: string[];
  description: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'CineFlix Platform',
    tags: ['React', 'Tailwind', 'TMDB API'],
    description: "A modern, responsive web application for discovering movies and TV shows.",
    image: '/assets/movie.jpg'
  },
  // ... add your other projects from your old list here
];