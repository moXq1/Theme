define(['jquery','matchMedia','accordion'],function($, mediaCheck,accordion){
    
    return function(){
    
        mediaCheck({
            media: '(min-width:700px)',
            entry:function(){
               
                // $("#accord").accordion({
                //     "active": false,
                //     "collapsible": false,
                //     "openedState": "active",
                //     })
                $("#accord").accordion({
                    "active": [0, 1],
                    "collapsible": true,
                    "openedState": "active",
                   
                });
                $("#accord").accordion('destroy')
                //$("footer__list").css({ display: "block" });
            },
            exit:function(){
                 $("#accord").accordion({
            "active": [0, 1],
            "collapsible": true,
            "openedState": "active",
           
        });
            }
        })
    
        
    }
})