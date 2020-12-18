import * as dotenv from 'dotenv';
import { CovidApi } from "./server";

(() => {
    dotenv.config();
    const server = new CovidApi();
    server.start();
})();