import { Request } from "restify";
import { ApplicationDatabase } from "../database/application-database";
import { AbstractCasesService } from "./abstract.service";

export class ConfirmedCasesService extends AbstractCasesService {

    public async getResponse(request: Request) {
        const filter = this.paramsToFilter(request.query);
        const confirmedCases = await ApplicationDatabase.getConfirmedCases(filter);

        return confirmedCases.map(cases => AbstractCasesService.mapAllRegions(cases));
    }

}