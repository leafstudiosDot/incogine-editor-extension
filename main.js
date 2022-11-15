const details = require('./details.json')
const settings = require('./settings.json')
const renderSettings = require('./settings')

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
        content: settings.settings,
        render: renderSettings.render
    }
};