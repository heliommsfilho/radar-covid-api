# Radar Covid API - Web Service for COVID-19 cases in Portugal

Provides information about the recorded cases of COVID-19 in Portugal (from official API).

_For more information about database deployment see: [Radar COVID Updater Tool](https://github.com/heliommsfilho/radar-covid-updater)_.

## Requirements

- A running instance of MongoDB populated by [Radar COVID Updater Tool](https://github.com/heliommsfilho/radar-covid-updater).

## Available endpoints

### Last update
```
[GET] /last_update
/* Returns the most recent information for all types of cases */
```

### Active cases
```
[GET] /active
/* Full record of active cases by day */

[GET] /active?day=YYYMMMDDD
/* Record of active cases for a specific day */

[GET] /active?day=YYYMMMDDD&endDay=YYYMMMDDD
/* Record of active cases for a range of days */
```

### Suspect cases
```
[GET] /suspect
/* Full record of suspect cases by day */

[GET] /suspect?day=YYYMMMDDD
/* Record of suspect cases for a specific day */

[GET] /suspect?day=YYYMMMDDD&endDay=YYYMMMDDD
/* Record of suspect cases for a range of days */
```

### Confirmed cases
```
[GET] /confirmed
/* Full record of confirmed cases by day */

[GET] /confirmed?day=YYYMMMDDD
/* Record of confirmed cases for a specific day */

[GET] /confirmed?day=YYYMMMDDD&endDay=YYYMMMDDD
/* Record of confirmed cases for a range of days */
```

### Active cases
```
[GET] /active
/* Full record of active cases by day */

[GET] /active?day=YYYMMMDDD
/* Record of active cases for a specific day */

[GET] /active?day=YYYMMMDDD&endDay=YYYMMMDDD
/* Record of active cases for a range of days */
```

### Recovered cases
```
[GET] /recovered
/* Full record of recovered cases by day */

[GET] /recovered?day=YYYMMMDDD
/* Record of recovered cases for a specific day */

[GET] /recovered?day=YYYMMMDDD&endDay=YYYMMMDDD
/* Record of recovered cases for a range of days */
```

### Dead cases
```
[GET] /dead
/* Full record of dead cases by day */

[GET] /dead?day=YYYMMMDDD
/* Record of dead cases for a specific day */

[GET] /dead?day=YYYMMMDDD&endDay=YYYMMMDDD
/* Record of dead cases for a range of days */
```
