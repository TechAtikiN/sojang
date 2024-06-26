import '@/db/envConfig';
import { defineConfig } from 'drizzle-kit';
 
export default defineConfig({
  schema: './db/schema.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL!,
  },
});