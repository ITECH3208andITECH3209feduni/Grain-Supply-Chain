const dayJs = require('dayjs');
const logger = require('pino');
//Houyuan
const log = logger({ //Log beautification processing
    prettyprint: true,
    base: {
        pid: false
    },
    timestamps: () => `time: ${dayJs().format()}`
})

module.exports = log;//Houyuan