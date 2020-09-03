



new fullpage('#full-page', {
    licenseKey: '',
    sectionsColor: ['#a5d8ff', '', '#ffffff', '#ffffff', '#ffffff'],
    navigation: true,
    navigationTooltips: ['Home', 'About', 'Contact', 'Xtras'],
    scrollingSpeed: 2000,
    onLeave: function (origin, destination, direction) {
        console.log('onLeave');
  
    },
    afterLoad: function (origin, destination, direction) {
        console.log('afterLoad');
    }
});