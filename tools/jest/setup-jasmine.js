/* global jasmine */

const jasmineReporters = require('jasmine-reporters')

jasmine.VERBOSE = true

jasmine.getEnv().addReporter(
  new jasmineReporters.JUnitXmlReporter({
    consolidateAll: false,
    savePath: './reports/junit',
    filePrefix: 'test-results-',
    // useFullTestName: true,
  })
)
