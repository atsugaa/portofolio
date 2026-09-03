import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "semantic-search",
    title: "Semantic Search Dokumen Putusan Pengadilan",
    category: "Skripsi",
    description:
      "Sistem pencarian semantik dokumen putusan yang memanfaatkan entitas knowledge graph untuk menemukan informasi berdasarkan makna kata.",
    technologies: [
      "Python",
      "Flask",
      "Neo4j",
    ],
    image: "/projects/semantic-search.webp",
    gallery: [
      "/projects/semantic-search/1.webp",
      "/projects/semantic-search/2.webp",
    ],
    featured: true,
    links: [
      {
        type: "huggingface",
        url: "https://huggingface.co/spaces/atsuga/search-engine",
      },
    ],
    year: 2026,
  },

  {
    slug: "unity-adventure-game",
    title: "Pulau Tanpa Cahaya",
    category: "Proyek Mata Kuliah",
    description:
      "Game adventure yang dikembangkan menggunakan Unity dan C# yang merupakan game petualangan berbasis 2D bergaya piksel dengan genre adventure-survival, di mana pemain harus menemukan jalan keluar sambil menghindari serangan monster di lingkungan yang minim cahaya.",
    technologies: [
      "Unity",
      "C#",
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
        url: "https://github.com/atsugaa/game",
      },
      {
        type: "gameplay",
        url: "https://youtu.be/jHtVG318oZQ",
      },
    ],
    year: 2024,
  },

  {
    slug: "cpp-platformer",
    title: "Ular Tangga",
    category: "Proyek Mata Kuliah",
    description:
      "Game ular tangga 2D dan 3D berbasis C++ yang menerapkan konsep object-oriented programming, looping, dan vector.",
    technologies: [
      "C++",
    ],
    image: "/projects/cpp-game.webp",
    featured: true,
    links: [
      {
        type: "github",
        url: "https://github.com/example/cpp-game",
      },
    ],
    year: 2024,
  },

  {
    slug: "laravel-information-system",
    title: "Prediksi Harga Emas",
    category: "Proyek Mata Kuliah",
    description:
      "Sistem prediksi harga emas berdasarkan data historis harian dengan metode regresi linear menggunakan python dan flask.",
    technologies: [
      "Python",
      "Flask",
    ],
    image: "/projects/academic-system.webp",
    featured: true,
    links: [
      {
        type: "huggingface",
        url: "https://huggingface.co/spaces/atsuga/emas",
      },
      {
        type: "demo",
        url: "https://atsuga-emas.hf.space",
      }
    ],
    year: 2024,
  },

  {
    slug: "react-dashboard",
    title: "Pemetaan Kasus di Jawa Timur",
    category: "Proyek Mata Kuliah",
    description:
      "Dashboard interaktif yang menampilkan insight dan peta persebaran kasus kejahatan di Jawa Timur berdasarkan dokumen putusan pengadilan.",
    technologies: [
      "Python",
      "Flask",
    ],
    image: "/projects/react-dashboard.webp",
    featured: true,
    links: [
      {
        type: "huggingface",
        url: "https://huggingface.co/spaces/atsuga/map",
      },
      {
        type: "demo",
        url: "https://atsuga-map.hf.space/",
      },
    ],
    year: 2024,
  },

  {
    slug: "flutter-mobile-app",
    title: "Evote",
    category: "Proyek Mata Kuliah",
    description:
      "Aplikasi mobile sederhana yang dikembangkan menggunakan Flutter",
    technologies: [
      "Flutter",
    ],
    image: "/projects/flutter-app.webp",
    featured: true,
    links: [
      {
        type: "github",
        url: "https://github.com/example/flutter-app",
      },
    ],
    year: 2025,
  },

  {
    slug: "hardware-troubleshooting",
    title: "To-Do List",
    category: "Proyek Pribadi",
    description:
      "Proyek pribadi untuk mengembangkan website todo list menggunakan Laravel.",
    technologies: [
      "Laravel",
      "PHP",
    ],
    image: "/projects/flutter-app.webp",
    featured: true,
    links: [
      {
        type: "github",
        url: "https://github.com/atsugaaa/todo-list",
      },
    ],
    year: 2025,
  },
  {
    slug: "react-website",
    title: "Penilaian Akademik",
    category: "Proyek Pribadi",
    description:
      "Website penilaian akademik sekolah yang dikembangkan menggunakan React.js sebagai frontend dan Laravel sebagai backend.",
    technologies: [
      "React.js",
      "Laravel",
    ],
    image: "/projects/react-website.webp",
    featured: true,
    year: 2026,
  }
];