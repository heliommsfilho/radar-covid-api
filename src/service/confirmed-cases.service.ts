import { Request } from "restify";
import { ApplicationDatabase } from "../database/application-database";
import { AbstractCasesService } from "./abstract.service";

export class ConfirmedCasesService extends AbstractCasesService {

    public async getResponse(request: Request) {
        const filter = this.paramsToFilter(request.query);
        const activeCases = await ApplicationDatabase.getConfirmedCases(filter);

        return activeCases.map(cases => AbstractCasesService.mapAllField(cases));
    }

}