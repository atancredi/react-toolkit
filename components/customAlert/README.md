## Next.JS
### Install Tailwind
- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`
- edit template paths in tailwind.config.js
    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
    ```
- add import alias to tsconfig.json
    ```js
    "compilerOptions": {
        "paths": {
            "@/*": ["./src/*"]
        },
    }
    ```
- add directives to global.css
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

### Install Component
- `npx shadcn@latest init`
- `npx shadcn@latest add alert`

### Usage
- add this in root component
```js
    const customAlert = useCustomAlert()
```

```jsx
    <CustomAlert customAlert={customAlert} />
```