import type { Config } from "tailwindcss"; /* Imports the Config type from tailwind for type safety to make sure the following code is error free */

const config: Config = { /* Declares a constant config of type Config from tailwind to set up the tailwind structure */
  content: [ /* Specifies the paths to all of the template files which tailwind will use to purge unused styles in production builds */
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", /* Includes the paths of all files with the suffixes listed in the pages directory */
    "./components/**/*.{js,ts,jsx,tsx,mdx}", /* Includes all paths of files with the listed suffixes in the components directory */
    "./app/**/*.{js,ts,jsx,tsx,mdx}", /* Includes all paths of the files with the listed suffixes in the app directory */
  ],
  theme: { /* Defines the theme section where you can customize the tailwind design system */
    extend: { /* Extends the default theme rather than overwriting enabling adding new styling*/
      backgroundImage: { /* Adds custom backgroundImage theme category */
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))", /* Defines a custom radial gradient */
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))", /* Defines a custom conic gradient*/
      },
    },
  },
  plugins: [], /* Makes an empty array of plugins to use with tailwind */
};

export default config; /* Exports the configured object as the default export of the module which makes it available in the tailwind setup*/