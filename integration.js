let Logger;

function startup(logger) {
  Logger = logger;
}

function doLookup(entities, options, cb) {
  let lookupResults = [];

  entities.forEach((entity) => {
    lookupResults.push({
      entity: entity,
      data: {
        summary: ['Expand to pivot out to external OSINT'],
        details: entity.value.toLowerCase()
      }
    });
  });
  cb(null, lookupResults);
}

module.exports = {
  doLookup: doLookup,
  startup: startup
};
