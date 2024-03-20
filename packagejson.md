{
  "name": "next_js_learning", // Defines the project name. Without it: npm and other tools wont have a reference name to go off of
  "version": "0.1.0", // Shows the project version. Without it: Nothing functional fails but updates are unclear to users
  "private": true, // Marks the package as private. Without it: Risking an accidental npm publish
  "scripts": { // 
    "dev": "next dev", // Command to start the dev server. Without it: Giant manual next dev command required which is very inconvenient
    "build": "next build", // Builds the project for production. Without it: Giant manual build command needed which would lead to more issues (would be a massive command)
    "start": "next start", // Starts the production server. Without it: Giant manual start command needed which isn't as straight forward
    "lint": "next lint" // Lints the project code. Without it: Manual linting command required
  },
  "dependencies": { // Dependencies for the react library. Without it: React components won't work
    "react": "^18", // React DOM library. Without it: React can't interface with the DOM and you cannot use react components and rendering anything is impossible
    "react-dom": "^18", // React DOM library. Without it: React can't interface with the DOM and rendering is impossible
    "next": "14.1.3" // Next.js framework. Without it: None of Next.js would be usable
 
  },
  "devDependencies": { // Dependencies for development but not running the app
    "typescript": "^5", // Enables TypeScript support. Without it: No type checking or easy debugging
    "@types/node": "^20", // Node.js types for TypeScript. Without it: Missing Node.js types errors 
    "@types/react": "^18", // React types for TypeScript. Without it: Missing React types errors
    "@types/react-dom": "^18", // React DOM types for TypeScript. Without it: Missing ReactDOM types errors
    "autoprefixer": "^10.0.1", // Autoprefixes CSS. Without it: CSS compatibility issues in browsers that require prefixes
    "postcss": "^8", // CSS transformation tool. Without it: Required for TailwindCSS processing otherwise there is no CSS formating
    "tailwindcss": "^3.3.0", // TailwindCSS framework. Without it: No utility-first CSS which is when you put something directly in the class name without having a separate styles file
    "eslint": "^8", // JavaScript linter. Without it: Less code quality control
    "eslint-config-next": "14.1.3" // Linting config for Next.js. Without it: Missing Next.js specific lint rules meaning Next.js code might not work properly due to quality control issues
  }
}
