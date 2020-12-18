import { Request } from "restify";
import { ApplicationDatabase } from "../database/application-database";
import { AbstractCasesService } from "./abstract.service";

export class SuspectCasesService extends AbstractCasesService {

    public async getResponse(request: Request) {
        const filter = this.paramsToFilter(request.query);
        const suspectCases = await ApplicationDatabase.getSuspectCases(filter);

        return suspectCases.map(cases => AbstractCasesService.mapAllField(cases));
    }

}