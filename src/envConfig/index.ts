import 'dotenv/config'
import { z } from 'zod';

const envSchema = z.object({
    PORT: z.coerce.number(),
    DATABASE_URL: z.string(),

    EMAILSERVICE: z.string(),
    EMAILHOST: z.string(),
    EMAILPORT: z.coerce.number(),
    EMAILUSER: z.string(),
    EMAILPASS: z.string(),
});


const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
    throw new Error('Invalid enviroment variables');
}

export const env = _env.data;
