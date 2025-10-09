/**
 * Global Configuration File
 * Import this file anywhere in your project to access global settings
 * Usage: import config from './config.js' or import { API_BASE_URL } from './config.js'
 */

const config = {
    // Website Information
    github_repo_name: "/PersonalWebsite/",

    // Company Information
    company: {
        name: "Ben H",
        fullName: "Benjamin Herrera",
        website: "https://benherrera.dev",
        email: "b10@asu.edu",
        phone: "",
    },

    // Environment Settings
    env: {
        isDevelopment: import.meta.env.DEV,
        isProduction: import.meta.env.PROD,
        mode: import.meta.env.MODE,
    },

    // Navigation Configuration
    navigation: {
        items: [
            { label: "Posts", link: "/news", external: false },
            { label: "Research", link: "/research", external: false },
            { label: "Experiences", link: "/experiences", external: false },
            { label: "Projects", link: "/projects", external: false },
            { label: "Contact Me", link: "/contact", external: false },
        ],
    },

    // Development Settings
    dev: {
        enableDebugMode: import.meta.env.DEV,
        showGrid: false,
        logLevel: import.meta.env.DEV ? "debug" : "error",
    },
};

// Export individual config sections for convenience
export const { company, api, env, ui, navigation, seo, features, services, dev } = config;

// Export specific commonly used values
export const COMPANY_NAME = config.company.name;
export const IS_DEVELOPMENT = config.env.isDevelopment;
export const IS_PRODUCTION = config.env.isProduction;

// Default export
export default config;
