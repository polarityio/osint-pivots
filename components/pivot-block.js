'use strict';
polarity.export = PolarityComponent.extend({
    details: Ember.computed.alias('block.data.details'),
    isMsftkbEntity: Ember.computed('block.entity.types.[]', function () {
        return this.get('block.entity.types').includes('custom.msftkb');
    }),
    isAdobeEntity: Ember.computed('block.entity.types.[]', function () {
        return this.get('block.entity.types').includes('custom.adobe');
    }),
    entityIsHash: Ember.computed('block.entity.type', function () {
        let type = this.get('block.entity.type');
        return type === 'hash' || type === 'MD5' || type === 'SHA1' || type === 'SHA256';
    })
});
