module.exports = {
    name: "OSINT Pivot",
    acronym: "PIVOT",
    entityTypes: ['IPv4', 'domain', 'hash', 'email', 'cve'],
    block: {
        component: {
            file: "./components/pivot-block.js"
        },
        template: {
            file: "./templates/pivot-block.hbs"
        }
    },
    logging:{
        level: 'info'
    },
    onDemandOnly: true,
    request: {
        cert: '',
        key: '',
        passphrase: '',
        ca: '',
        proxy: '',
        rejectUnauthorized: false
    }
};
