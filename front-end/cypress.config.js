import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        // Já vamos adicionar a URL base da sua aplicação aqui
        baseUrl: 'http://localhost:5173',

        supportFile: false,

        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});