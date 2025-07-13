import { strapi } from "@strapi/client";

export const client = strapi({baseURL: import.meta.env.VITE_strapiEndpoint});