let Logger;

function startup(logger) {
  Logger = logger;
}

function doLookup(entities, options, cb) {
  let lookupResults = [];

  entities.forEach(entity => {
    let searchObject = [];
    lookupResults.push({
      entity: entity,
      data: {
        summary: ['Expand to pivot our to external OSINT'],
        details: {
          searchObject: entity.object
        }
      }
    });
  });
  Logger.trace({lookupResults:lookupResults}, "Logging lookup results");
  cb(null, lookupResults);
}

module.exports = {
  doLookup: doLookup,
  startup:startup
};
