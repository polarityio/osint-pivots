'use strict';
polarity.export = PolarityComponent.extend({
  details: Ember.computed.alias('block.data.details'),
  isMsftkbEntity: Ember.computed('block.entity.types.[]', function () {
    return this.get('block.entity.types').includes('custom.msftkb');
  }),
  isAdobeEntity: Ember.computed('block.entity.types.[]', function () {
    return this.get('block.entity.types').includes('custom.adobe');
  })
});
