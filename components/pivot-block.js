'use strict';
polarity.export = PolarityComponent.extend({
  details: Ember.computed.alias('block.data.details'),
  isMsftkbEntity: false,
  isAdobeEntity: false,
  init() {
    if (this.get('block.entity.type') === 'custom') {
      if (this.get('block.entity.types').includes('custom.msftkb')) this.set('isMsftkbEntity', true);
      if (this.get('block.entity.types').includes('custom.adobe')) this.set('isAdobeEntity', true);
    }
    this._super(...arguments);
  }
});
