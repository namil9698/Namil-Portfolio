
new fullpage('#full-page',{
    licenseKey: '',
    sectionsColor: ['#ff0000','#00ff00','#0000ff','#aaaaaa'],
    navigation:true,
    navigationTooltips:['Home','About','Contact','Xtras'],
    scrollingSpeed:2000,
    onLeave: function(origin,destination,direction) {
        console.log('onLeave');
    },
    afterLoad:function(origin,destination,direction) {
        console.log('afterLoad');
    }
});
