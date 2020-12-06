import * as dotenv from 'dotenv';
import { CovidApi } from "./resource/server";

(() => {
    dotenv.config();
    const server = new CovidApi();
    server.start();
})();