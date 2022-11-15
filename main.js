const details = require('./details.json')
const settings = require('./settings.json')

module.exports = {
    detail: {
        extid: details.extid,
        name: details.name,
        author: details.author,
        version: details.version,
        description: details.description
    },
    settings: {
        title: settings.title,
        content: settings.settings
    }
};