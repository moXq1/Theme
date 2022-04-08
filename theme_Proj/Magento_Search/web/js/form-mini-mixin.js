define([
    'jquery',
    'underscore',
    'mage/template',
    'matchMedia',
    'jquery-ui-modules/widget',
    'jquery-ui-modules/core',
    'mage/translate'
], function ($, _, mageTemplate, mediaCheck) {
    'use strict';

    return function(quickSearch){
       
        $.widget('mage.quickSearch',quickSearch,{
               _create:function(){
                this._super()
                mediaCheck({
                    media: 'all',
                    entry: function () {
                        this.isExpandable = true;
                    }.bind(this),
                    exit: function () {
                        this.isExpandable = false;
                        this.element.removeAttr('aria-expanded');
                    }.bind(this)
                });

            }
        })
      return $.mage.quickSearch;
    }

})