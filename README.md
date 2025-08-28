# Next.js Assessment - AI Chat Interface

A modern, responsive chat interface built with Next.js that demonstrates emotion-aware conversations between users and AI assistants. This project showcases advanced React patterns, TypeScript implementation, and modern UI/UX design principles.

## Project Description

This application features an interactive chat interface that displays conversations with emotional context visualization. Each message includes emotion labels with confidence scores, providing insight into the emotional tone of the conversation. The interface includes a clean, modern design with dark/light theme support and responsive layout.

### Key Features

- **Emotion-Aware Chat**: Messages display emotional context with confidence levels
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI Components**: Built with Tailwind CSS and Shadcn UI
- **TypeScript Support**: Full type safety throughout the application
- **Code Syntax Highlighting**: Integrated Shiki for beautiful code blocks
- **Markdown Support**: Rich text rendering with react-markdown
- **Theme Support**: Dark/light mode toggle capability

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.17 or higher)
- **npm** (comes with Node.js) or **yarn** or **pnpm** or **bun**
- **Git** (for cloning the repository)

## Installation Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/sahedulislamrony/nextjs-assessment.git
cd nextjs-assessment
```

### Step 2: Install Dependencies

Choose one of the following package managers:

#### Using npm:

```bash
npm install
```

#### Using yarn:

```bash
yarn install
```

#### Using pnpm:

```bash
pnpm install
```

#### Using bun:

```bash
bun install
```

### Step 3: Environment Setup

This project doesn't require any environment variables for basic functionality. All configurations are handled through the existing config files.

## Running the Project Locally

### Development Mode

To start the development server with hot-reload:

```bash
npm run dev
```

Or with your preferred package manager:

```bash
yarn dev
# or
pnpm dev
# or
bun dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Production Build

To create an optimized production build:

```bash
npm run build
npm run start
```

### Linting

To run ESLint for code quality checks:

```bash
npm run lint
```

## Technology Stack

### Core Technologies

- **[Next.js 15.5.0](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://reactjs.org/)** - JavaScript library for building user interfaces
- **[TypeScript 5.x](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI

- **[Tailwind CSS 4.x](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/UI](https://ui.shadcn.com/)** - Re-usable components built with Radix UI and Tailwind CSS
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon pack
- **[prompt-kit](https://www.prompt-kit.com/)** - A set of customizable, high-quality components built for AI applications

### Development Tools

- **[ESLint](https://eslint.org/)** - JavaScript linting utility
- **[PostCSS](https://postcss.org/)** - CSS transformation tool
- **[Turbopack](https://turbo.build/pack)** - Fast bundler for development

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── favicon.ico        # App icon
├── components/            # Reusable React components
│   ├── chat/              # Chat-related components
│   │   ├── ChatContainer.tsx
│   │   ├── ChatWindow.tsx
│   │   ├── ChatInputBox.tsx
│   │   └── UserMessage.tsx
│   ├── main-window/       # Layout components
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── MainHomeLayout.tsx
│   └── ui/                # Reusable UI components
├── data/                  # Static data and constants
│   └── static_messages.ts # Sample chat messages
├── hooks/                 # Custom React hooks
│   └── use-mobile.ts      # Mobile detection hook
├── lib/                   # Utility functions
│   └── utils.ts           # Common utilities
├── styles/                # Global styles
│   └── globals.css        # Global CSS
└── types/                 # TypeScript type definitions
    └── chat.ts            # Chat-related types
```

## Additional Setup Requirements

### Code Editor Setup (Recommended)

For the best development experience, we recommend using **Visual Studio Code** with the following extensions:

- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **TypeScript Importer**
- **Prettier - Code formatter**
- **ESLint**

### Browser Requirements

This application supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration
- `postcss.config.mjs` - PostCSS configuration
- `components.json` - Shadcn/ui components configuration
- `.vscode/settings.json` - VS Code IDE configuration

## Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with zero configuration

### Other Deployment Options

- **Netlify**: Connect your GitHub repository
- **Docker**: Use the provided Dockerfile (if available)
- **Static Export**: Configure Next.js for static export

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [React Documentation](https://react.dev/) - learn React fundamentals
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - utility-first CSS framework
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - typed JavaScript

---

## Author

**Sahedul Islam Rony**

- GitHub: [@sahedulislamrony](https://github.com/sahedulislamrony)
- Email: sahedul.dev@gmail.com
- LinkedIn: [Sahedul Islam Rony](https://linkedin.com/in/sahedulislamrony)

---

**Happy Coding!** 🎉
