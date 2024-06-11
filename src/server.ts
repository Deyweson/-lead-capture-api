import { app } from "./app";
import { env } from "./envConfig";

app.listen({
    port: env.PORT, 
    host: '0.0.0.0'
}).then(() => console.log(`Server is running... at port: ${env.PORT}`))