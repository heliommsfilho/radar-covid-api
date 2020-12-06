import { CasesQueryFilter } from "../database/cases-query.filter";

export function paramsToFilter(params: any): CasesQueryFilter {
    const filter: CasesQueryFilter = {};

    if (params) {

        if (params.day) {
            filter.date = params.day;
        }

        if (params.region) {
            switch(params.region) {
                case 'all': {
                    filter.all = params.region;
                    break;
                }
                case 'north': {
                    filter.north = params.region;
                    break;
                }
                case 'center': {
                    filter.center = params.region;
                    break;
                }
                case 'lvt': {
                    filter.lvt = params.region;
                    break;
                }
                case 'alentejo': {
                    filter.alentejo = params.region;
                    break;
                }
                case 'algarve': {
                    filter.algarve = params.region;
                    break;
                }
                case 'acores': {
                    filter.acores = params.region;
                    break;
                }
                case 'madeira': {
                    filter.madeira = params.region;
                    break;
                }
            }
        }
    }

    return filter;
}