import moment from 'moment';

export class FilterValidation {

    public static isValidFilter(queryParams: any): boolean {
        const day = queryParams.day;
        const endDay = queryParams.endDay;

        /* Day param should a valid YYYYMMDD */
        if (day && this.isInvalidDayParam(day)) {
            return false;
        }

        /* End Day param should a valid YYYYMMDD */
        if (endDay && this.isInvalidDayParam(endDay)) {
            return false;
        }

        /* Day cannot be after End Day */
        if (day && endDay && this.isInvalidRange(day, endDay)) {
            return false;
        }

        return true;
    }

    private static isInvalidDayParam(day: string): boolean {
        return !moment(day, 'YYYYMMDD').isValid();
    }

    private static isInvalidRange(day: string, endDay: string): boolean {
        return moment(day, 'YYYYMMDD').isAfter(moment(endDay, 'YYYYMMDD'));
    }
}