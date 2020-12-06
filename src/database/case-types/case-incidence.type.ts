export enum Control {
    DATE = 'data'
}

export enum Active {
    ALL = 'ativos',
}

export enum Suspect {
    ALL = 'suspeitos'
}

export enum Confirmed {
    ALL = 'confirmados',
    /* By sex in the future
    WOMEN = 'confirmados_f',
    MEN = 'confirmados_m',
    */
    NORTH = 'confirmados_arsnorte',
    CENTER = 'confirmados_arscentro',
    LVT = 'confirmados_arslvt',
    ALENTEJO = 'confirmados_arsalentejo',
    ALGARVE = 'confirmados_arsalgarve',
    ACORES = 'confirmados_acores',
    MADEIRA = 'confirmados_madeira'
    /* By age in the future
    _00_09_WOMEN = 'confirmados_0_9_f',
    _10_19_WOMEN = 'confirmados_10_19_f',
    _20_29_WOMEN = 'confirmados_20_29_f',
    _30_39_WOMEN = 'confirmados_30_39_f',
    _40_49_WOMEN = 'confirmados_40_49_f',
    _50_59_WOMEN = 'confirmados_50_59_f',
    _60_69_WOMEN = 'confirmados_60_69_f',
    _70_79_WOMEN = 'confirmados_70_79_f',
    _80_PLUS_WOMEN = 'confirmados_80_plus_f',
    _00_09_MEN = 'confirmados_0_9_m',
    _10_19_MEN = 'confirmados_10_19_m',
    _20_29_MEN = 'confirmados_20_29_m',
    _30_39_MEN = 'confirmados_30_39_m',
    _40_49_MEN = 'confirmados_40_49_m',
    _50_59_MEN = 'confirmados_50_59_m',
    _60_69_MEN = 'confirmados_60_69_m',
    _70_79_MEN = 'confirmados_70_79_m',
    _80_PLUS_MEN = 'confirmados_80_plus_m'
    */
}

export enum Dead {
    ALL = 'obitos',
    /* By sex in the future
    WOMEN = 'obitos_f',
    MEN = 'obitos_m',
    */
    NORTH = 'obitos_arsnorte',
    CENTER = 'obitos_arscentro',
    LVT = 'obitos_arslvt',
    ALENTEJO = 'obitos_arsalentejo',
    ALGARVE = 'obitos_arsalgarve',
    ACORES = 'obitos_acores',
    MADEIRA = 'obitos_madeira'
    /* By age in the future
    _00_09_WOMEN = 'obitos_0_9_f',
    _10_19_WOMEN = 'obitos_10_19_f',
    _20_29_WOMEN = 'obitos_20_29_f',
    _30_39_WOMEN = 'obitos_30_39_f',
    _40_49_WOMEN = 'obitos_40_49_f',
    _50_59_WOMEN = 'obitos_50_59_f',
    _60_69_WOMEN = 'obitos_60_69_f',
    _70_79_WOMEN = 'obitos_70_79_f',
    _80_PLUS_WOMEN = 'obitos_80_plus_f',
    _00_09_MEN = 'obitos_0_9_m',
    _10_19_MEN = 'obitos_10_19_m',
    _20_29_MEN = 'obitos_20_29_m',
    _30_39_MEN = 'obitos_30_39_m',
    _40_49_MEN = 'obitos_40_49_m',
    _50_59_MEN = 'obitos_50_59_m',
    _60_69_MEN = 'obitos_60_69_m',
    _70_79_MEN = 'obitos_70_79_m',
    _80_PLUS_MEN = 'obitos_80_plus_m'
    */
}

export enum Recovered {
    ALL = 'recuperados',
    NORTH = 'recuperados_arsnorte',
    CENTER = 'recuperados_arscentro',
    LVT = 'recuperados_arslvt',
    ALENTEJO = 'recuperados_arsalentejo',
    ALGARVE = 'recuperados_arsalgarve',
    ACORES = 'recuperados_acores',
    MADEIRA = 'recuperados_madeira'
}

