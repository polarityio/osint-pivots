module.exports = {
  name: 'OSINT Pivot',
  acronym: 'PIVOT',
  entityTypes: ['IPv4', 'domain', 'MD5', 'SHA1', 'SHA256', 'email', 'cve'],
  customTypes: [
    {
      key: 'msftkb',
      regex: /KB\s?[0-9]{7}/
    },
    {
      key: 'adobe',
      regex: /APSB\d{2}-\d{2}/
    }
  ],
  defaultColor: 'light-gray',
  block: {
    component: {
      file: './components/pivot-block.js'
    },
    template: {
      file: './templates/pivot-block.hbs'
    }
  },
  logging: {
    level: 'info'
  },
  onDemandOnly: true,
  request: {
    cert: '',
    key: '',
    passphrase: '',
    ca: '',
    proxy: ''
  }
};
