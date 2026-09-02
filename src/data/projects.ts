import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "semantic-search",
    title: "Semantic Search Dokumen Hukum",
    category: "Skripsi",
    description:
      "Sistem pencarian semantik yang memanfaatkan pemrosesan bahasa alami dan Neo4j untuk menemukan informasi berdasarkan kemiripan makna.",
    technologies: [
      "Python",
      "NLP",
      "Neo4j",
      "Semantic Search",
    ],
    image: "/projects/semantic-search.webp",
    gallery: [
      "/projects/semantic-search/1.webp",
      "/projects/semantic-search/2.webp",
    ],
    featured: true,
    links: [
      {
        type: "github",
        url: "https://github.com/example/semantic-search",
      },
      {
        type: "huggingface",
        url: "https://example-semantic-search.hf.space",
      },
    ],
    year: 2026,
  },

  {
    slug: "unity-adventure-game",
    title: "Adventure Game",
    category: "Proyek Mata Kuliah",
    description:
      "Game adventure yang dikembangkan menggunakan Unity dan C# dengan berbagai mekanisme gameplay dan sistem interaksi.",
    technologies: [
      "Unity",
      "C#",
      "Game Development",
    ],
    image: "/projects/unity-game.webp",
    gallery: [
      "/projects/unity-game/1.webp",
      "/projects/unity-game/2.webp",
    ],
    featured: true,
    links: [
      {
        type: "github",
        url: "https://github.com/example/unity-game",
      },
      {
        type: "gameplay",
        url: "https://youtube.com/watch?v=example",
      },
    ],
    year: 2025,
  },

  {
    slug: "cpp-platformer",
    title: "2D Platformer",
    category: "Proyek Mata Kuliah",
    description:
      "Game 2D berbasis C++ yang menerapkan konsep object-oriented programming, game loop, input handling, dan collision detection.",
    technologies: [
      "C++",
      "OOP",
      "Game Development",
    ],
    image: "/projects/cpp-game.webp",
    featured: true,
    links: [
      {
        type: "github",
        url: "https://github.com/example/cpp-game",
      },
      {
        type: "gameplay",
        url: "https://youtube.com/watch?v=example",
      },
    ],
    year: 2025,
  },

  {
    slug: "laravel-information-system",
    title: "Sistem Informasi Akademik",
    category: "Proyek Mata Kuliah",
    description:
      "Aplikasi web untuk mengelola data akademik dengan fitur autentikasi, pengelolaan data, dan dashboard.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
    ],
    image: "/projects/academic-system.webp",
    featured: true,
    links: [
      {
        type: "github",
        url: "https://github.com/example/academic-system",
      },
    ],
    year: 2025,
  },

  {
    slug: "react-dashboard",
    title: "Interactive Dashboard",
    category: "Personal Project",
    description:
      "Dashboard interaktif berbasis React.js untuk menampilkan dan mengelola data secara dinamis.",
    technologies: [
      "React.js",
      "JavaScript",
      "CSS",
    ],
    image: "/projects/react-dashboard.webp",
    featured: true,
    links: [
      {
        type: "github",
        url: "https://github.com/example/react-dashboard",
      },
      {
        type: "demo",
        url: "https://example-dashboard.com",
      },
    ],
    year: 2024,
  },

  {
    slug: "flutter-mobile-app",
    title: "Mobile Application",
    category: "Proyek Mata Kuliah",
    description:
      "Aplikasi mobile sederhana yang dikembangkan menggunakan Flutter dan Dart.",
    technologies: [
      "Flutter",
      "Dart",
    ],
    image: "/projects/flutter-app.webp",
    featured: true,
    links: [
      {
        type: "github",
        url: "https://github.com/example/flutter-app",
      },
    ],
    year: 2024,
  },
];