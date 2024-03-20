{
  "compilerOptions": { // Configuration options for the TypeScript compiler
    "lib": ["dom", "dom.iterable", "esnext"], // Specify a list of library files to be included in the compilation ensuring the compiler understands the features
    "allowJs": true, // Allows javascript files to be compiled along with typescript files
    "skipLibCheck": true, // Skip type checking of declaration files which will speed up compilation by ignoring stuff like node_modules
    "strict": true, // Enable all strict type checking options which improves the ability to catch errors
    "noEmit": true, // Do not emit outputs (no files are written)
    "esModuleInterop": true, // Compatability for ES Models in CommonJS environments
    "module": "esnext", // Set the module code generation method to ESNext
    "moduleResolution": "bundler", // Determine how modules get resolved
    "resolveJsonModule": true, // Allows importing of modules with '.json' extension
    "isolatedModules": true, // Transpile each file as a separate module without relying on other files
    "jsx": "preserve", // Preserve JSX to be processed by another transform step
    "incremental": true, // Enable incremental compilation by saving information about the project from the last compilation
    "plugins": [ // Array of plugins to use with the compiler
      {
        "name": "next" // Specifies Next.js as a plugin to be used by the compiler
      }
    ],
    "paths": { // A series of entries which re-map imports to lookup locations relative to the 'baseUrl'
      "@/*": ["./*"] // Allows import from '@' to map to the current directory
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"], // Specify files that need to be included in the program
  "exclude": ["node_modules"] // Exclude node_modules files from the program for performance
}