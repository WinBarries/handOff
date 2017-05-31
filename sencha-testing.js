Ext.onReady(function () {
    var container = new Ext.draw.Container({
        renderTo: Ext.getBody(),
        width: 400,
        height: 400
    });
    var mainSurface = container.getSurface();
    
    //Static circle
    var useMainSurface= mainSurface.add({
        type: 'circle',
        cx: 50,
        cy: 50,
        r: 50,
        lineWidth: 5,
        fillStyle: 'red',
        lineDash: [4, 4],
        strokeStyle: 'black'
    });
    
    //The motion circle
    var circleSprite = mainSurface.add({
        type: 'circle',
        cx: 50,
        cy: 50,
        r: 50,
        lineWidth: 5,
        fillStyle: 'red',
        lineDash: [4, 4],
        strokeStyle: 'black'
    });
    
    circleSprite.setAnimation({
        duration: 5000,
       // easing: 'bounceOut'
      
    });
    
    useMainSurface.setAnimation({
        duration: 5000,
       // easing: 'bounceOut'
      
    });
    // Now this change to circle radius will animate automatically.
    
    setTimeout(function () {
        circleSprite.setAttributes({
        fillStyle: 'blue',
        lineDash: [20, 10],
        r: 100,
        cx: 250,
        cy: 250,
        
    });
    
    useMainSurface.setAttributes({
        fillStyle: 'blue',
       
    });
    
        // Don't forget to repaint the surface
        // after changing sprite's attributes.
        mainSurface.renderFrame();
    }, 50);
});
