const InMemoryDatabaseServices = require('../frameworks/persistence/InMemory/InMemoryDatabaseServices')
const UniversityCrmServices = require('../frameworks/externalServices/UniversityCrmServices')

module.exports = (() => {
    return {
        DatabaseService: new InMemoryDatabaseServices(),
        CrmService: new UniversityCrmServices()
    }
})()