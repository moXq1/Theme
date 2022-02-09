define([
    "jquery",
    'ko',
    'uiComponent',
    'Magento_Customer/js/customer-data',
],function($,ko,Component,customerData){
    "use strict";
    // function callHello(){
    //     console.log(1);
    //     return '123'
    // }

return function(config,element){
    return {
        items:customerData.get('wishlist')().counter
    }
    //element.innerText = customerData.get('wishlist')().counter
}

    return Component.extend({
        firstName: customerData.get('wishlist')().counter,
        template: 'BRUH',
             /**
         * @return {String}
         */
              getFullName: function () {
                return this.customerData().firstname + ' ' + this.customerData().lastname;
            },
        initialize: function() {
            this._super();
            alert(this.firstName)
            console.log(customerData.get('wishlist')());
            console.log(customerData.get('wishlist'));
        }
    });
    // return Component.extend({
    //     hello:callHello,
    //     initialize: function () {
    //         this._super();
    // this.sayHello = "Hello this is content populated with KO!";
    //     }
    // });


    return function(config,element){
        // console.log(customerData)
        // console.log(config)
        // const wh = customerData.get('wishlist');
        // console.log(wh)
        alert(config.message)
        // alert(customerData.get('cart'))
 
            // this.firstName='Bob'

       //this.firstName = ko.observable('3232');

        //console.log(myViewModel)

        return Component.extend({
            firstName: 'ddd',
            initialize: function() {
                this._super();
            }
        });
    }
})