angular.module('app').service('dobSrv', function ($http) {
    // =============== TESTS
    this.dobServiceTest = 'the dobSrv is connected'

    // =============== LISTS
    // ............... months
    this.monthsArr = function () {
        let monthObj = [{ name: 'January' }, { name: 'February' }, { name: 'March' }, { name: 'April' }, { name: 'May' }, { name: 'June' }, { name: 'July' }, { name: 'August' }, { name: 'September' }, { name: 'October' }, { name: 'November' }, { name: 'December' }]
        return monthObj
    }
    // ............... days in the month

    this.setDayOptions = (month, year) => {
        var dayOptions = [1, 2, 3]
        var leapYears = [1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020]
        if (month === 'April' || month === 'June' || month === 'September' || month === 'November') {
            for (let i = 1; i < 31; i++) {
                dayOptions.push(i)
            }
            return dayOptions
        }
        else if (month === 'February' && leapYears.indexOf(year) !== -1) {
            for (let i = 1; i < 30; i++) {
                dayOptions.push(i)
            }
            return dayOptions
        }
        else if (month === 'February' && leapYears.indexOf(year) === -1) {
            for (let i = 1; i < 29; i++) {
                dayOptions.push(i)
            }
            return dayOptions
        }
        else {
            for (let i = 1; i < 32; i++) {
                dayOptions.push(i)
            }
            return dayOptions
        }
    }
    // ............... years available
    this.yearsArr = [1980, 1981, 1982]
    this.makeYearArray = (numberOfYears) => {
        var d = new Date();
        var n = d.getFullYear();
        var p = n - numberOfYears
        for (let i = p; i <= n; i++) {
            yearsArr.push(i)
        }
        return yearsArr
    }

    // no code below this line
})