import { Request } from "restify";
import { ApplicationDatabase } from "../database/application-database";
import { AbstractCasesService } from "./abstract.service";

export class LastUpdateCasesService extends AbstractCasesService {

    public async getResponse() {
        const lastCases = await ApplicationDatabase.getLastUpdate();
        const lastActive = lastCases.lastActive.map(active => AbstractCasesService.mapAllField(active));
        const lastSuspect = lastCases.lastSuspect.map(suspect => AbstractCasesService.mapAllField(suspect));
        const lastConfirmed = lastCases.lastConfirmed.map(confirmed => AbstractCasesService.mapAllRegions(confirmed));
        const lastRecovered = lastCases.lastRecovered.map(recovered => AbstractCasesService.mapAllRegions(recovered));
        const lastDead = lastCases.lastDead.map(dead => AbstractCasesService.mapAllRegions(dead));

        return { active: lastActive, suspect: lastSuspect, confirmed: lastConfirmed, recovered: lastRecovered, dead: lastDead };
    }

}