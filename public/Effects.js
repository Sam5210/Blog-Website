/*jshint esversion: 6 */
$(handleEffects);
function handleEffects(){
    handleCircleEffects();
}
function handleTimelineEffects(){
    let particleDiameter = 0.7;
    let waveMotionDelayPerParticle = "0.5s";
    let particleCount = 5;
    let particleSpaceSize = 2; 
    let waveInitialPosition = particleCount * (particleSpaceSize + particleDiameter);
    let wavePositionOffsetY = "-6rem";
    let wavePositionOffsetX = "1rem";
    let amplitude = "3rem";
    let step = 10;
    let waves = $(".waves");
    let supportedFlag = $.keyframe.isSupported();
    if(supportedFlag){
        $.keyframe.define([{
            name: 'wave-motion-y',
            '0%':   {'transform': `translateY(1rem)`},
            '10%':  {'transform': `translateY(${step})`},
            '30%':  {'transform': `translateY(${String(2*step)}rem)`},
            '50%':  {'transform': `translateY(${String(3*step)}rem)`},
            '70%':  {'transform': `translateY(${String(4*step)}rem)`},
            '90%':  {'transform': `translateY(${String(5*step)}rem)`},
            '100%': {'transform': `translateY(${String(6*step)}rem)`}
        },{
            name: 'wave-motion-x',
            '0%':   {'transform': `translateX(1rem)`},
            '10%':  {'transform': `translateX(-${amplitude});`},
            '30%':  {'transform': `translateX(${amplitude});`},
            '50%':  {'transform': `translateX(-${amplitude});`},
            '70%':  {'transform': `translateX(${amplitude});`},
            '90%':  {'transform': `translateX(-${amplitude});`},
            '100%': {'transform': `translateX(0rem)`}
        }]);
        let waveUnit = "<div class='wave-motion-x'><div class='wave-particle'></div></div>";
        let waveUnits = "";
        for(let index = 1; index <= particleCount; index++){
            waveUnits += waveUnit;
        }
        waves.html(waveUnits);
        let waveMotionXs = $(".wave-motion-x");
        let waveParticles = $(".wave-particle");
        waveMotionXs.each(function(index){
            $(this).playKeyframe({
                name: 'wave-motion-x',
                duration: '10s',
                iterationCount: 'infinite',
                direction: 'alternate',
                timingFunction: 'ease-in-out',
                delay: waveMotionDelayPerParticle * index
            });
        });
        waveParticles.each(function(index){
            $(this).playKeyframe({
                name: 'wave-motion-y',
                duration: '10s',
                iterationCount: 'infinite',
                direction: 'alternate',
                timingFunction: 'linear',
                delay: waveMotionDelayPerParticle * index
            });
            $(this).css('top', '$wave-position-offsetY + $wave-particle-position');
        });
    }
}
function handleCircleEffects(){
    let leftCircles = $(".align-hor-left .circle");
    let rightCircles = $(".align-hor-right .circle");
    let offsetSmall = String(Number(leftCircles.css("width").substring(0, leftCircles.css("width").length - 2))/2) + "px";
    let offsetBig = String(Number(offsetSmall.substring(0, offsetSmall.length-2))*5) + "px";
    let offsetMedium = String(Number(offsetSmall.substring(0, offsetSmall.length-2))*(0.2)) + "px";
    console.log(offsetBig);
    let color = "aqua";
    let circleBackgroundColor = "rgb(10,10,10)";
    let blurSize = "3px";
    let spreadSize = "5px"; 
    let boxShadowValue = `${offsetSmall}  -${offsetSmall} 0 2px ${circleBackgroundColor}, -${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
                            -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor}, ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
                            0 0 ${blurSize} ${spreadSize} ${color}`;
    leftCircles.css("box-shadow", boxShadowValue);
    // console.log(leftCircles.css("animation-name"));
    let borderAnimation0Percent = `${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    -${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    0 0 ${blurSize} ${spreadSize} ${color}`;
    let borderAnimation25Percent = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
                                    -${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    0 0 ${blurSize} ${spreadSize} ${color}`;
    let borderAnimation50Percent = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
                                    -${offsetBig} 0px 0 2px ${circleBackgroundColor},\
                                    -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor}, \
                                    ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    0 0 ${blurSize} ${spreadSize} ${color}`;
    let borderAnimation75Percent = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
                                    -${offsetBig} 0px 0 2px ${circleBackgroundColor},\
                                    0px ${offsetBig} 0 2px ${circleBackgroundColor},\
                                    ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    0 0 ${blurSize} ${spreadSize} ${color}`;
    let borderAnimation100Percent = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
                                    -${offsetBig} 0px 0 2px ${circleBackgroundColor},\
                                    0px ${offsetBig} 0 2px ${circleBackgroundColor},\
                                    ${offsetBig} ${offsetMedium} 0 2px ${circleBackgroundColor},\
                                    0 0 ${blurSize} ${spreadSize} ${color}`;

    let supportedFlag = $.keyframe.isSupported();
    $.keyframe.define([{
        name: 'border',
        '0%': {'box-shadow': borderAnimation0Percent},
        '25%': {'box-shadow': borderAnimation25Percent},
        '50%': {'box-shadow': borderAnimation50Percent},
        '70%': {'box-shadow': borderAnimation75Percent},
        '100%': {'box-shadow': borderAnimation100Percent}
    }]);

    leftCircles.playKeyframe({
        name:'border',
        duration: '.2s',
        delay: '0.5s',
        timingFunction: 'ease',
        iterationCount: 1,
        fillMode: 'forwards'
    });
    rightCircles.playKeyframe({
        name:'border',
        duration: '.3s',
        delay: '2s',
        timingFunction: 'linear',
        iterationCount: 1,
        fillMode: 'forwards'
    });
}