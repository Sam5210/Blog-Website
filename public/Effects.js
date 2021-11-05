$(handleEffects);
function handleEffects(){
    handleCircleEffects();
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

    var supportedFlag = $.keyframe.isSupported();
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
function handleTimelineEffects(){
    
}