import { Request } from "restify";
import { ApplicationDatabase } from "../database/application-database";
import { AbstractCasesService } from "./abstract.service";

export class RecoveredCasesService extends AbstractCasesService {

    public async getResponse(request: Request) {
        const filter = this.paramsToFilter(request.query);
        const recoveredCases = await ApplicationDatabase.getRecoveredCases(filter);

        return recoveredCases.map(cases => AbstractCasesService.mapAllRegions(cases));
    }

}