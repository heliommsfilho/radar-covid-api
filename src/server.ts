import * as restify from 'restify';
import { FilterValidation } from './filter-validation';
import { AbstractCasesService } from './service/abstract.service';
import { ActiveCasesService } from './service/active-cases.service';
import { ConfirmedCasesService } from './service/confirmed-cases.service';
import { DeadCasesService } from './service/dead-cases.service';
import { LastUpdateCasesService } from './service/last-update-cases.service';
import { RecoveredCasesService } from './service/recovered-cases.service';
import { SuspectCasesService } from './service/suspect-cases.service';

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
        this.server.get('/last_update', CovidApi.getLastUpdate);
    }

    private static async getActiveCases(req: restify.Request, res: restify.Response, next: restify.Next) {
        const service = new ActiveCasesService();
        await CovidApi.sendResponse(req, res, service);
    }

    private static async getSuspectCases(req: restify.Request, res: restify.Response, next: restify.Next) {
        const service = new SuspectCasesService();
        await CovidApi.sendResponse(req, res, service);
    }

    private static async getConfirmedCases(req: restify.Request, res: restify.Response, next: restify.Next) {
        const service = new ConfirmedCasesService();
        await CovidApi.sendResponse(req, res, service);
    }

    private static async getDeadCases(req: restify.Request, res: restify.Response, next: restify.Next) {
        const service = new DeadCasesService();
        await CovidApi.sendResponse(req, res, service);
    }

    private static async getRecoveredCases(req: restify.Request, res: restify.Response, next: restify.Next) {
        const service = new RecoveredCasesService();
        await CovidApi.sendResponse(req, res, service);
    }

    private static async getLastUpdate(req: restify.Request, res: restify.Response, next: restify.Next) {
        const service = new LastUpdateCasesService();
        await CovidApi.sendResponse(req, res, service);
    }

    private static async sendResponse(request: restify.Request, response: restify.Response, service: AbstractCasesService): Promise<any> {
        if (!FilterValidation.isValidFilter(request.query)) {
            return Promise.resolve(response.send(400));
        }

        return Promise.resolve(response.send(200, await service.getResponse(request)));
    }
}