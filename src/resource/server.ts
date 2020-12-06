import * as restify from 'restify';
import { ApplicationDatabase } from '../database/application-database';
import { ActiveCasesService } from '../service/active-cases.service';
import { ConfirmedCasesService } from '../service/confirmed-cases.service';
import { DeadCasesService } from '../service/dead-cases.service';
import { RecoveredCasesService } from '../service/recovered-cases.service';
import { SuspectCasesService } from '../service/suspect-cases.service';

export class CovidApi {

    server: restify.Server;

    constructor() {
        if (!process.env.SERVER_PORT) {
            throw new Error('Server port not defined (check .env file)');
        }

        this.server = restify.createServer();
        this.server.name = 'radar-covid-api';
        this.server.use(restify.plugins.queryParser({ mapParams: false }));

        this.registerEndpoints();
    }

    public start() {
        this.server.listen(process.env.SERVER_PORT, () => {
            console.log(`${this.server.name} listening at ${this.server.url}`);
        });
    }

    private registerEndpoints() {
        this.server.get('/active', CovidApi.getActiveCases);
        this.server.get('/suspect', CovidApi.getSuspectCases);
        this.server.get('/confirmed', CovidApi.getConfirmedCases);
        this.server.get('/dead', CovidApi.getDeadCases);
        this.server.get('/recovered', CovidApi.getRecoveredCases);
    }

    private static async getActiveCases(req: restify.Request, res: restify.Response, next: restify.Next) {
        const service = new ActiveCasesService();
        res.send(200, await service.getResponse(req));
    }

    private static async getSuspectCases(req: restify.Request, res: restify.Response, next: restify.Next) {
        const service = new SuspectCasesService();
        res.send(200, await service.getResponse(req));
    }

    private static async getConfirmedCases(req: restify.Request, res: restify.Response, next: restify.Next) {
        const service = new ConfirmedCasesService();
        res.send(200, await service.getResponse(req));
    }

    private static async getDeadCases(req: restify.Request, res: restify.Response, next: restify.Next) {
        const service = new DeadCasesService();
        res.send(200, await service.getResponse(req));
    }

    private static async getRecoveredCases(req: restify.Request, res: restify.Response, next: restify.Next) {
        const service = new RecoveredCasesService();
        res.send(200, await service.getResponse(req));
    }
}