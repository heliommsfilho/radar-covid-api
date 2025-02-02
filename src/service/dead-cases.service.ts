import { Request } from "restify";
import { ApplicationDatabase } from "../database/application-database";
import { AbstractCasesService } from "./abstract.service";

export class DeadCasesService extends AbstractCasesService {

    public async getResponse(request: Request) {
        const filter = this.paramsToFilter(request.query);
        const deadCases = await ApplicationDatabase.getDeadCases(filter);

        return deadCases.map(cases => AbstractCasesService.mapAllRegions(cases));
    }

}