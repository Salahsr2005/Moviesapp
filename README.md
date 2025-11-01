# Movie Discovery Application

<div align="center">
  <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
  <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
</div>

<div align="center">
  <h3>A Modern Movie Discovery Platform</h3>
  <p>Developed by <strong>Parabex Labs</strong></p>
</div>

---

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)
5. [Code Snippets](#snippets)

---

## 🤖 Introduction

A sleek and modern movie discovery application built with cutting-edge technologies. This platform allows users to browse trending movies, search for specific titles, and explore a vast collection of content powered by the TMDB API. Built with React.js for a dynamic user interface, Appwrite for robust backend services, and styled with TailwindCSS for a responsive, modern design.

**Developed by Parabex Labs** - Your trusted partner in innovative software solutions.

---

## ⚙️ Tech Stack

- **[React.js](https://react.dev/reference/react)** - A JavaScript library for building user interfaces with reusable components and efficient rendering through virtual DOM.

- **[Appwrite](https://appwrite.io/)** - An open-source Backend-as-a-Service (BaaS) platform providing APIs for authentication, databases, storage, and more.

- **[React-use](https://github.com/streamich/react-use)** - A collection of essential React hooks that simplify state management, side effects, and lifecycle events.

- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework for rapid and responsive UI development without writing custom CSS.

- **[Vite](https://vite.dev/)** - A modern build tool offering fast development environment with hot module replacement (HMR) and optimized builds.

- **[TMDB API](https://developer.themoviedb.org/)** - The Movie Database API for accessing comprehensive movie data and information.

---

## 🔋 Features

✨ **Browse All Movies** - Explore an extensive collection of movies from various genres and eras.

🔍 **Search Functionality** - Quickly find specific movies using an intuitive search interface.

📈 **Trending Movies** - Discover what's popular with a dynamic trending algorithm that highlights hot content.

🎨 **Modern UI/UX** - Experience a sleek, user-friendly interface designed for optimal user engagement.

📱 **Fully Responsive** - Seamless experience across all devices - desktop, tablet, and mobile.

⚡ **Fast Performance** - Optimized loading times and smooth interactions powered by Vite.

🏗️ **Clean Architecture** - Well-structured, maintainable codebase with reusable components.

---

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v16 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation Steps

**1. Clone the Repository**

```bash
git clone https://github.com/parabex-labs/movie-app.git
cd movie-app
```

**2. Install Dependencies**

```bash
npm install
```

**3. Set Up Environment Variables**

Create a `.env.local` file in the root directory:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here

VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

Replace the placeholder values with your actual credentials:
- Get your TMDB API key from [The Movie Database](https://developer.themoviedb.org/reference/intro/getting-started)
- Set up your Appwrite backend at [Appwrite](https://appwrite.io/)

**4. Run the Development Server**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

**5. Build for Production**

```bash
npm run build
```

---

## 🕸️ Code Snippets

<details>
<summary><code>index.css</code> - Main Stylesheet</summary>

```css
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

@import "tailwindcss";

@theme {
  --color-primary: #030014;

  --color-light-100: #cecefb;
  --color-light-200: #a8b5db;

  --color-gray-100: #9ca4ab;

  --color-dark-100: #0f0d23;

  --font-dm-sans: DM Sans, sans-serif;

  --breakpoint-xs: 480px;

  --background-image-hero-pattern: url("/hero-bg.png");
}

@layer base {
  body {
    font-family: "DM Sans", serif;
    font-optical-sizing: auto;
    background: #030014;
  }

  h1 {
    @apply mx-auto max-w-4xl text-center text-5xl font-bold leading-tight tracking-[-1%] text-white sm:text-[64px] sm:leading-[76px];
  }

  h2 {
    @apply text-2xl font-bold text-white sm:text-3xl;
  }

  main {
    @apply min-h-screen relative bg-primary;
  }

  header {
    @apply sm:mt-10 mt-5;
  }

  header img {
    @apply w-full max-w-lg h-auto object-contain mx-auto drop-shadow-md;
  }
}

@layer components {
  .pattern {
    @apply bg-hero-pattern w-full h-screen bg-center bg-cover absolute z-0;
  }

  .wrapper {
    @apply px-5 py-12 xs:p-10 max-w-7xl mx-auto flex flex-col relative z-10;
  }

  .trending {
    @apply mt-20;

    & ul {
      @apply flex flex-row overflow-y-auto gap-5 -mt-10 w-full hide-scrollbar;
    }

    & ul li {
      @apply min-w-[230px] flex flex-row items-center;
    }

    & ul li p {
      @apply fancy-text mt-[22px] text-nowrap;
    }

    & ul li img {
      @apply w-[127px] h-[163px] rounded-lg object-cover -ml-3.5;
    }
  }

  .search {
    @apply w-full bg-light-100/5 px-4 py-3 rounded-lg mt-10 max-w-3xl mx-auto;

    & div {
      @apply relative flex items-center;
    }

    & img {
      @apply absolute left-2 h-5 w-5;
    }

    & input {
      @apply w-full bg-transparent py-2 sm:pr-10 pl-10 text-base text-gray-200 placeholder-light-200 outline-hidden;
    }
  }

  .all-movies {
    @apply space-y-9;

    & ul {
      @apply grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4;
    }
  }

  .movie-card {
    @apply bg-dark-100 p-5 rounded-2xl shadow-inner shadow-light-100/10;

    & img {
      @apply rounded-lg h-auto w-full;
    }

    & h3 {
      @apply text-white font-bold text-base line-clamp-1;
    }

    & .content {
      @apply mt-2 flex flex-row items-center flex-wrap gap-2;
    }

    & .rating {
      @apply flex flex-row items-center gap-1;
    }

    & .rating img {
      @apply size-4 object-contain;
    }

    & .rating p {
      @apply font-bold text-base text-white;
    }

    & .content span {
      @apply text-sm text-gray-100;
    }

    & .content .lang {
      @apply capitalize text-gray-100 font-medium text-base;
    }

    & .content .year {
      @apply text-gray-100 font-medium text-base;
    }
  }
}

@utility text-gradient {
  @apply bg-linear-to-r from-[#D6C7FF] to-[#AB8BFF] bg-clip-text text-transparent;
}

@utility fancy-text {
  -webkit-text-stroke: 5px rgba(206, 206, 251, 0.5);
  font-size: 190px;
  font-family: "Bebas Neue", sans-serif;
}

@utility hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}
```

</details>

<details>
<summary><code>components/Spinner.jsx</code> - Loading Component</summary>

```jsx
import React from 'react'

const Spinner = () => {
  return (
    <div role="status">
      <svg aria-hidden="true"
           className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-indigo-600"
           viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"/>
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"/>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Spinner
```
</details>

---

## 📞 Contact

**Parabex Labs** - Building innovative software solutions

For inquiries about this project or custom development services, reach out to Parabex Labs.

---

## 📄 License

This project is part of Parabex Labs' portfolio. All rights reserved.

---

<div align="center">
  <p>Made with ❤️ by <strong>Parabex Labs</strong></p>
</div>