

if (!window.location.origin) {
    window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '')
}

const rootApiUrlLookup = []
rootApiUrlLookup['http://localhost:8080'] = 'http://localhost:21790'
// rootApiUrlLookup['http://localhost:8080'] = 'http://mfec-sq.azurewebsites.net'
// rootApiUrlLookup['http://localhost:8080'] = 'http://172.19.20.26/pwf'
rootApiUrlLookup['http://localhost:21790'] = ''

if (window.location.origin !== 'http://localhost:8080' && window.location.origin !== 'http://localhost:21790') {
    rootApiUrlLookup[window.location.origin] = window.location.origin
}

const rootImageUrlLookup = []
rootImageUrlLookup['http://localhost:8080'] = 'http://localhost:8080'
rootImageUrlLookup['http://localhost:21790'] = 'http://localhost:21790'

if (window.location.origin !== 'http://localhost:8080' && window.location.origin !== 'http://localhost:21790') {
    rootImageUrlLookup[window.location.origin] = window.location.origin
}

const utils = {
    isBlank: function (v) {
        return (v === undefined || v === null || v === '')
    },
    toNumberFormatString: function (number, decimal) {
        return number.toFixed(decimal).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
    },
    toDateFormatString: function (dateObj) {
        var dateParts = dateObj.toISOString().substring(0, 10).split('-')
        return dateParts[2] + '/' + dateParts[1] + '/' + dateParts[0]
    },
    addDaysToDate: function (dateObj, days) {
        var dateObjReturn = new Date(dateObj)
        dateObjReturn.setDate(dateObjReturn.getDate() + days)
        return dateObjReturn
    },
    getRootApiUrl: function () { 
        if (!window.location.origin) {
            window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '')
        }
        return rootApiUrlLookup[window.location.origin]        
    },
    getRootImageUrl: function () {
        if (!window.location.origin) {
            window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '')
        }
        return rootImageUrlLookup[window.location.origin]
    }

}


export default utils
