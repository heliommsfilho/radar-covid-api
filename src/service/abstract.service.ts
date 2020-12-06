import { CasesQueryFilter } from "../database/cases-query.filter";
import { ICases } from "../database/case.model";
import * as restify from 'restify';

export abstract class AbstractCasesService {

    public abstract getResponse(request: restify.Request): any;

    protected static mapAllField(cases: ICases) {
        return { day: cases.date, all: cases.cases.get('all') };
    }

    protected static mapAllRegions(cases: ICases) {
        return { day: cases.date,
                 all: cases.cases.get('all'),
                 north: cases.cases.get('north'),
                 center: cases.cases.get('center'),
                 lvt: cases.cases.get('lvt'),
                 alentejo: cases.cases.get('alentejo'),
                 algarve: cases.cases.get('algarve'),
                 acores: cases.cases.get('acores'),
                 madeira: cases.cases.get('madeira') };
    }

    protected paramsToFilter(params: any): CasesQueryFilter {
        const filter: CasesQueryFilter = {};

        if (params?.day) {
            filter.date = params.day;
        }

        return filter;
    }
}