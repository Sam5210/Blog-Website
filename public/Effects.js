$(handleEffects);

function handleEffects() {
    //Circle effects parameters
    let leftCircles = $(".align-hor-left .circle");
    let rightCircles = $(".align-hor-right .circle");
    let centerCircles = $(".circle-center");
    let offsetSmall = String(Number(leftCircles.css("width").substring(0, leftCircles.css("width").length - 2)) / 2) + "px";
    let offsetBig = String(Number(offsetSmall.substring(0, offsetSmall.length - 2)) * 5) + "px";
    let offsetMedium = String(Number(offsetSmall.substring(0, offsetSmall.length - 2)) * (3)) + "px";
    let color = "aqua";
    let circleBackgroundColor = "rgb(10, 10, 10)";
    let blurSize = "3px";
    let spreadSize = "5px";
    let boxShadowValue = `${offsetSmall}  -${offsetSmall} 0 2px ${circleBackgroundColor}, -${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
                                -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor}, ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
                                0 0 ${blurSize} ${spreadSize} ${color}`;
    leftCircles.css("box-shadow", boxShadowValue);
    centerCircles.css("box-shadow", boxShadowValue);
    let branchCircleAnimation0Percent = `${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    -${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    0 0 ${blurSize} ${spreadSize} ${color}`;
    let branchCircleAnimation25Percent = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
                                    -${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    0 0 ${blurSize} ${spreadSize} ${color}`;
    let branchCircleAnimation50Percent = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
                                    -${offsetBig} 0px 0 2px ${circleBackgroundColor},\
                                    -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor}, \
                                    ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    0 0 ${blurSize} ${spreadSize} ${color}`;
    let branchCircleAnimation75Percent = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
                                    -${offsetBig} 0px 0 2px ${circleBackgroundColor},\
                                    0px ${offsetBig} 0 2px ${circleBackgroundColor},\
                                    ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    0 0 ${blurSize} ${spreadSize} ${color}`;
    let branchCircleAnimation100Percent = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
                                    -${offsetBig} 0px 0 2px ${circleBackgroundColor},\
                                    0px ${offsetBig} 0 2px ${circleBackgroundColor},\
                                    ${offsetBig} ${offsetMedium} 0 2px ${circleBackgroundColor},\
                                    0 0 ${blurSize} ${spreadSize} ${color}`;

    let timelineCircleAnimation0Percent = `${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    -${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    0 0 ${blurSize} ${spreadSize} ${color}`;
    let timelineCircleAnimation25Percent = `${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    -${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    ${offsetBig} ${offsetMedium} 0 2px ${circleBackgroundColor},\
                                    0 0 ${blurSize} ${spreadSize} ${color}`;
    let timelineCircleAnimation50Percent = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
                                    -${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
                                    -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor}, \
                                    ${offsetBig} ${offsetMedium} 0 2px ${circleBackgroundColor},\
                                    0 0 ${blurSize} ${spreadSize} ${color}`;
    let timelineCircleAnimation75Percent = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
                                    -${offsetBig} 0px 0 2px ${circleBackgroundColor},\
                                    -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor}, \
                                    ${offsetBig} ${offsetMedium} 0 2px ${circleBackgroundColor},\
                                    0 0 ${blurSize} ${spreadSize} ${color}`;
    let timelineCircleAnimation100Percent = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
                                    -${offsetBig} 0px 0 2px ${circleBackgroundColor},\
                                    0px ${offsetBig} 0 2px ${circleBackgroundColor},\
                                    ${offsetBig} ${offsetMedium} 0 2px ${circleBackgroundColor},\
                                    0 0 ${blurSize} ${spreadSize} ${color}`;

    //timeline and branch effects parameters
    let timelineSlide = $("#timeline-slide");
    let branchSlide = $(".branch-slide");
    console.log(branchSlide);
    //play circle effects
    var supportedFlag = $.keyframe.isSupported();
    if (supportedFlag) {
        $.keyframe.define([{
            name: 'branch-circle-animation',
            '0%': {
                'box-shadow': branchCircleAnimation0Percent
            },
            '25%': {
                'box-shadow': branchCircleAnimation25Percent
            },
            '50%': {
                'box-shadow': branchCircleAnimation50Percent
            },
            '70%': {
                'box-shadow': branchCircleAnimation75Percent
            },
            '100%': {
                'box-shadow': branchCircleAnimation100Percent
            }
        }, {
            name: 'center-circle-animation',
            '0%': {
                'box-shadow': timelineCircleAnimation0Percent
            },
            '25%': {
                'box-shadow': timelineCircleAnimation25Percent
            },
            '50%': {
                'box-shadow': timelineCircleAnimation50Percent
            },
            '70%': {
                'box-shadow': timelineCircleAnimation75Percent
            },
            '100%': {
                'box-shadow': timelineCircleAnimation100Percent
            }
        },{
            name: 'slideOut-horizontal',
            '0%': {
                'right': '0',
                'box-shadow': '0 0 0 0 rgb(10, 10, 10)'
            },
            '100%': {
                'right': '100%'
            }

        }, {
            name: 'slideOut-vertical',
            '0%': {
                'top': '0'
            },
            '100%': {
                'top': '100%'
            }
        }]);
        let initialAnimationDelay = 1;
        let centerCirclesAnimationDuration = 0.5;
        let timelineSlideDuration = 4;
        let branchSlideDuration = 1;
        let branchCirclesAnimationDuration = 0.2;
        centerCircles.playKeyframe({
            name: 'center-circle-animation',
            duration: String(centerCirclesAnimationDuration) + 's',
            delay: String(initialAnimationDelay) + 's',
            timingFunction: 'ease',
            iterationCount: 1,
            fillMode: 'forwards',
        });
        timelineSlide.playKeyframe({
            name: 'slideOut-vertical',
            duration: String(timelineSlideDuration) + 's',
            delay: String(initialAnimationDelay + centerCirclesAnimationDuration) + 's',
            timingFunction: 'linear',
            iterationCount: 1,
            fillMode: 'forwards',
            // animation: slideOut-vertical 4s linear 1 1.2s forwards; 
        });
        branchSlide.playKeyframe({
            name: 'slideOut-horizontal',
            duration: String(branchSlideDuration) + 's',
            delay: String(initialAnimationDelay + centerCirclesAnimationDuration + timelineSlideDuration) + 's',
            timingFunction: 'linear',
            iterationCount: 1,
            fillMode: 'forwards',
            // animation: slideOut-horizontal 1s linear 1 1.2s forwards; 
        });
        leftCircles.playKeyframe({
            name: 'branch-circle-animation',
            duration: String(branchCirclesAnimationDuration) + 's',
            delay: String(initialAnimationDelay + centerCirclesAnimationDuration + timelineSlideDuration + branchSlideDuration) + 's',
            timingFunction: 'ease',
            iterationCount: 1,
            fillMode: 'forwards',
        });
        rightCircles.playKeyframe({
            name: 'branch-circle-animation',
            duration: String(branchCirclesAnimationDuration) + 's',
            delay: String(initialAnimationDelay + centerCirclesAnimationDuration + timelineSlideDuration + branchSlideDuration) + 's',
            timingFunction: 'linear',
            iterationCount: 1,
            fillMode: 'forwards',
        });
    }
}
