import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
export const makeDb = (env: { DATABASE_URL: string }) => drizzle(neon(env.DATABASE_URL));
