$(document).ready(function(){
    $(window).on("resize", function(event){
        setUpTimelineAndBranchesParameters();
        if($(window).width() >= 562){
            main();
        }
        else if($(window).width() < 562){
            
        }
    });
    main();
});
function main() {
    //Circle animation parameters
    let circles = setUpCirclesParameters();

    //timeline and branch total parameters
    //get timeline
    let timeline = $("#timeline");
    let timelineSlide = $("#timeline-slide");
    setUpTimelineAndBranchesParameters();
    
    //get branches
    let leftbranchSlide = $(".align-hor-left .branch-slide");
    let rightbranchSlide = $(".align-hor-right .branch-slide");
    //Setting up animations
    let totalAnimationDuration = setUpAndPlayAnimations(circles, timeline, leftbranchSlide, rightbranchSlide);
    if(totalAnimationDuration != 0)
        playEntryAnimations(totalAnimationDuration);
    else
        console.log("Warning: animation duration: 0");
}

function playEntryAnimations(initialAnimationDelay){
    let images = $(".img-thumbnail");
    let leftText = $(".align-hor-left .entry-text");
    let rightText = $(".align-hor-right .entry-text");
    let leftTextWidth = leftText.css('width');
    let rightTextWidth = rightText.css('width');
    console.log("righttextwidth = " + rightTextWidth);
    images.css('opacity', '0');
    leftText.css('opacity', '0');
    rightText.css('opacity', '0');
    let textOffset = "7%";
    let imageFadeInDuration = 0.5;
    let textFadeInDuration = 0.5;
    $.keyframe.define([{
        name:   'fade-in',
        '0%':   {'opacity': '0'},
        '100%': {'opacity': '1'}
    },{
        name:   'fade-in-left',
        '0%':   {'opacity': '0', 'left':  leftTextWidth},
        '100%': {'opacity': '1', 'left':  textOffset}
    },{
        name:   'fade-in-right',
        '0%':   {'opacity': '0', 'right':  rightTextWidth},
        '100%': {'opacity': '1', 'right':  "-" + textOffset}
    }]);
    images.playKeyframe({
        name:   'fade-in',
        duration:   String(imageFadeInDuration) + 's',
        delay: String(initialAnimationDelay) + 's',
        timingFunction: 'linear',
        iterationCount: 1,
        fillMode: 'forwards',
    });
    leftText.playKeyframe({
        name:       'fade-in-left',
        duration:   String(textFadeInDuration) + 's',
        delay:      String(initialAnimationDelay + imageFadeInDuration) + 's',
        timingFunction: 'ease-in-out',
        iterationCount: 1,
        fillMode: 'forwards',
    });
    rightText.playKeyframe({
        name:       'fade-in-right',
        duration:   String(textFadeInDuration) + 's',
        delay:      String(initialAnimationDelay + imageFadeInDuration) + 's',
        timingFunction: 'ease-in-out',
        iterationCount: 1,
        fillMode: 'forwards',
    });
}


function setUpCirclesParameters(){
    let leftCircles = $(".align-hor-left .circle");
    let rightCircles = $(".align-hor-right .circle");
    let topCircle = $(".circle-center.top");
    let bottomCircle = $(".circle-center.bottom");
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
    topCircle.css("box-shadow", boxShadowValue);
    const leftBranchCircleAnimation = {};
    leftBranchCircleAnimation.Percent0 = `${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
        -${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
        -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
        ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
        0 0 ${blurSize} ${spreadSize} ${color}`;
    leftBranchCircleAnimation.Percent25 = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
        -${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
        -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
        ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
        0 0 ${blurSize} ${spreadSize} ${color}`;
    leftBranchCircleAnimation.Percent50 = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
        -${offsetBig} 0px 0 2px ${circleBackgroundColor},\
        -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor}, \
        ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
        0 0 ${blurSize} ${spreadSize} ${color}`;
    leftBranchCircleAnimation.Percent75 = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
        -${offsetBig} 0px 0 2px ${circleBackgroundColor},\
        0px ${offsetBig} 0 2px ${circleBackgroundColor},\
        ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
        0 0 ${blurSize} ${spreadSize} ${color}`;
    leftBranchCircleAnimation.Percent100 = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
        -${offsetBig} 0px 0 2px ${circleBackgroundColor},\
        0px ${offsetBig} 0 2px ${circleBackgroundColor},\
        ${offsetBig} ${offsetMedium} 0 2px ${circleBackgroundColor},\
        0 0 ${blurSize} ${spreadSize} ${color}`;

    const rightBranchCircleAnimation = {};
    rightBranchCircleAnimation.Percent0 = `${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
        -${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
        -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
        ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
        0 0 ${blurSize} ${spreadSize} ${color}`;
    rightBranchCircleAnimation.Percent25 = `${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
        -${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
        0px ${offsetBig} 0 2px ${circleBackgroundColor},\
        ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
        0 0 ${blurSize} ${spreadSize} ${color}`;
    rightBranchCircleAnimation.Percent50 = `${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
        -${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
        0px ${offsetBig} 0 2px ${circleBackgroundColor},\
        ${offsetBig} ${offsetMedium} 0 2px ${circleBackgroundColor},\
        0 0 ${blurSize} ${spreadSize} ${color}`;
    rightBranchCircleAnimation.Percent75 = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
        -${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
        0px ${offsetBig} 0 2px ${circleBackgroundColor},\
        ${offsetBig} ${offsetMedium} 0 2px ${circleBackgroundColor},\
        0 0 ${blurSize} ${spreadSize} ${color}`;
    rightBranchCircleAnimation.Percent100 = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
        -${offsetBig} -${offsetBig} 0 2px ${circleBackgroundColor},\
        0px ${offsetBig} 0 2px ${circleBackgroundColor},\
        ${offsetBig} ${offsetMedium} 0 2px ${circleBackgroundColor},\
        0 0 ${blurSize} ${spreadSize} ${color}`;

    const topCircleAnimation = {}; 
    topCircleAnimation.Percent0 = `${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
        -${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
        -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
        ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
        0 0 ${blurSize} ${spreadSize} ${color}`;
    topCircleAnimation.Percent25 = `${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
        -${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
        -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
        ${offsetBig} ${offsetMedium} 0 2px ${circleBackgroundColor},\
        0 0 ${blurSize} ${spreadSize} ${color}`;
    topCircleAnimation.Percent50 = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
        -${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
        -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor}, \
        ${offsetBig} ${offsetMedium} 0 2px ${circleBackgroundColor},\
        0 0 ${blurSize} ${spreadSize} ${color}`;
    topCircleAnimation.Percent75 = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
        -${offsetBig} 0px 0 2px ${circleBackgroundColor},\
        -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor}, \
        ${offsetBig} ${offsetMedium} 0 2px ${circleBackgroundColor},\
        0 0 ${blurSize} ${spreadSize} ${color}`;
    topCircleAnimation.Percent100 = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
        -${offsetBig} 0px 0 2px ${circleBackgroundColor},\
        0px ${offsetBig} 0 2px ${circleBackgroundColor},\
        ${offsetBig} ${offsetMedium} 0 2px ${circleBackgroundColor},\
        0 0 ${blurSize} ${spreadSize} ${color}`;

    const bottomCircleAnimation = {};
    bottomCircleAnimation.Percent0 = `${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
        -${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
        -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
        ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
        0 0 ${blurSize} ${spreadSize} ${color}`;
    bottomCircleAnimation.Percent25 = `${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
        -${offsetBig} 0px 0 2px ${circleBackgroundColor},\
        -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
        ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
        0 0 ${blurSize} ${spreadSize} ${color}`;
    bottomCircleAnimation.Percent50 = `${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
        -${offsetBig} 0px 0 2px ${circleBackgroundColor},\
        0px ${offsetBig} 0 2px ${circleBackgroundColor},\
        ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
        0 0 ${blurSize} ${spreadSize} ${color}`;
    bottomCircleAnimation.Percent75 = `${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
        -${offsetBig} 0px 0 2px ${circleBackgroundColor},\
        0px ${offsetBig} 0 2px ${circleBackgroundColor},\
        ${offsetBig} ${offsetMedium} 0 2px ${circleBackgroundColor},\
        0 0 ${blurSize} ${spreadSize} ${color}`;
    bottomCircleAnimation.Percent100 = `0 -${offsetBig} 0 2px ${circleBackgroundColor},\
        -${offsetBig} 0px 0 2px ${circleBackgroundColor},\
        0px ${offsetBig} 0 2px ${circleBackgroundColor},\
        ${offsetBig} ${offsetMedium} 0 2px ${circleBackgroundColor},\
        0 0 ${blurSize} ${spreadSize} ${color}`;
        
    const Circles = {
        leftCircles: leftCircles,
        rightCircles: rightCircles,
        topCircle: topCircle,
        bottomCircle: bottomCircle,
        boxShadowValue: boxShadowValue,
        leftBranchCircleAnimation: leftBranchCircleAnimation,
        rightBranchCircleAnimation: rightBranchCircleAnimation,
        topCircleAnimation: topCircleAnimation,
        bottomCircleAnimation: bottomCircleAnimation

    };
    return Circles;
}
function setUpTimelineAndBranchesParameters(){
    //calculate timeline and the bottom circle's vertical position
    let navbarTotalHeight = String($(".navbar").css("height"));
    let navbarMarginBottom = String($(".navbar").css("margin-bottom"));
    let blogTopPadding = $(".blog-content").css("padding-top");
    let blogBottomPadding = $(".blog-content").css("padding-bottom");
    let timelineHeight = "-25";
    $(".container.align-hor-left").each(function(index){
        timelineHeight = String(Number(timelineHeight) + $(this).height());
    });
    $(".container.align-hor-right").each(function(index){
        timelineHeight = String(Number(timelineHeight) + $(this).height());
    });
    timelineHeight = String(Number(timelineHeight) 
            + Number(blogTopPadding.substring(0, blogTopPadding.length-2)) 
            + Number(blogBottomPadding.substring(0, blogBottomPadding.length-2))) 
            + "px";
    $("#timeline").css('top', `calc(1.2rem + ${navbarTotalHeight} + ${navbarMarginBottom})`);
    $("#timeline").css("height", timelineHeight);
    $("#timeline-slide").css("height", timelineHeight);
    $(".circle-center.bottom").css('top', `calc(${navbarTotalHeight} + ${timelineHeight} + ${navbarMarginBottom} + 1.5rem`);
    console.log("timeline height = " + timelineHeight);
}
function setUpAndPlayAnimations(circles, timelineSlide, leftbranchSlide, rightbranchSlide){
    var supportedFlag = $.keyframe.isSupported();
    console.log("window width = " + String($(window).width()));
    if (supportedFlag && $(window).width() >= 992) {
        $.keyframe.define([{
            //Setting up circle animations
            name: 'left-branch-circle-animation',
            '0%': {
                'box-shadow': circles.leftBranchCircleAnimation.Percent0
            },
            '25%': {
                'box-shadow': circles.leftBranchCircleAnimation.Percent25
            },
            '50%': {
                'box-shadow': circles.leftBranchCircleAnimation.Percent50
            },
            '70%': {
                'box-shadow': circles.leftBranchCircleAnimation.Percent75
            },
            '100%': {
                'box-shadow': circles.leftBranchCircleAnimation.Percent100
            }
        },{
            name: 'right-branch-circle-animation',
            '0%': {
                'box-shadow': circles.rightBranchCircleAnimation.Percent0
            },
            '25%': {
                'box-shadow': circles.rightBranchCircleAnimation.Percent25
            },
            '50%': {
                'box-shadow': circles.rightBranchCircleAnimation.Percent50
            },
            '70%': {
                'box-shadow': circles.rightBranchCircleAnimation.Percent75
            },
            '100%': {
                'box-shadow': circles.rightBranchCircleAnimation.Percent100
            }
        },{
            name: 'bottom-circle-animation',
            '0%': {
                'box-shadow': circles.bottomCircleAnimation.Percent0
            },
            '25%': {
                'box-shadow': circles.bottomCircleAnimation.Percent25
            },
            '50%': {
                'box-shadow': circles.bottomCircleAnimation.Percent50
            },
            '70%': {
                'box-shadow': circles.bottomCircleAnimation.Percent75
            },
            '100%': {
                'box-shadow': circles.bottomCircleAnimation.Percent100
            }
        },{
            name: 'top-circle-animation',
            '0%': {
                'box-shadow': circles.topCircleAnimation.Percent0
            },
            '25%': {
                'box-shadow': circles.topCircleAnimation.Percent25
            },
            '50%': {
                'box-shadow': circles.topCircleAnimation.Percent50
            },
            '70%': {
                'box-shadow': circles.topCircleAnimation.Percent75
            },
            '100%': {
                'box-shadow': circles.topCircleAnimation.Percent100
            }
        },{
            //Setting up branch animations
            name: 'slideOut-horizontal-towards-left',
            '0%': {
                'right': '0',
                'box-shadow': '0 0 0 0 rgb(10, 10, 10)'
            },
            '100%': {
                'right': '100%'
            }

        },{
            name: 'slideOut-horizontal-towards-right',
            '0%': {
                'left': '0',
                'box-shadow': '0 0 0 0 rgb(10, 10, 10)'
            },
            '100%': {
                'left': '100%'
            }
        }, {
            //Setting up timeline animation
            name: 'slideOut-vertical',
            '0%': {
                'opacity': '0'
            },
            '100%': {
                'opacity': '1'
            }
        }]);
        //Animation duration and delay parameters setup
        let initialAnimationDelay = 0.5;
        let centerCirclesAnimationDuration = 0.35;
        let timelineSlideDuration = 0.5;
        let branchSlideDuration = 0.5;
        let branchCirclesAnimationDuration = 0.3;
        let totalAnimationDuration = initialAnimationDelay;
        totalAnimationDuration += centerCirclesAnimationDuration;
        totalAnimationDuration += timelineSlideDuration;
        totalAnimationDuration += branchSlideDuration;
        totalAnimationDuration += branchCirclesAnimationDuration;

        //Play the animations of circles, branches and timeline
        circles.topCircle.playKeyframe({
            name: 'top-circle-animation',
            duration: String(centerCirclesAnimationDuration) + 's',
            delay: String(initialAnimationDelay) + 's',
            timingFunction: 'ease',
            iterationCount: 1,
            fillMode: 'forwards'
        });
        circles.bottomCircle.playKeyframe({
            name: 'bottom-circle-animation',
            duration: String(centerCirclesAnimationDuration) + 's',
            delay: String(initialAnimationDelay) + 's',
            timingFunction: 'ease',
            iterationCount: 1,
            fillMode: 'forwards'
        });
        timelineSlide.playKeyframe({
            name: 'slideOut-vertical',
            duration: String(timelineSlideDuration) + 's',
            delay: String(initialAnimationDelay + centerCirclesAnimationDuration) + 's',
            timingFunction: 'linear',
            iterationCount: 1,
            fillMode: 'forwards'
            // animation: slideOut-vertical 4s linear 1 1.2s forwards; 
        });
        leftbranchSlide.playKeyframe({
            name: 'slideOut-horizontal-towards-left',
            duration: String(branchSlideDuration) + 's',
            delay: String(initialAnimationDelay + centerCirclesAnimationDuration + timelineSlideDuration) + 's',
            timingFunction: 'linear',
            iterationCount: 1,
            fillMode: 'forwards'
            // animation: slideOut-horizontal-towards-left 1s linear 1 1.2s forwards; 
        });
        rightbranchSlide.playKeyframe({
            name: 'slideOut-horizontal-towards-right',
            duration: String(branchSlideDuration) + 's',
            delay: String(initialAnimationDelay + centerCirclesAnimationDuration + timelineSlideDuration) + 's',
            timingFunction: 'linear',
            iterationCount: 1,
            fillMode: 'forwards'
            // animation: slideOut-horizontal-towards-left 1s linear 1 1.2s forwards; 
        })
        circles.leftCircles.playKeyframe({
            name: 'left-branch-circle-animation',
            duration: String(branchCirclesAnimationDuration) + 's',
            delay: String(initialAnimationDelay + centerCirclesAnimationDuration + timelineSlideDuration + branchSlideDuration) + 's',
            timingFunction: 'ease',
            iterationCount: 1,
            fillMode: 'forwards'
        });
        circles.rightCircles.playKeyframe({
            name: 'right-branch-circle-animation',
            duration: String(branchCirclesAnimationDuration) + 's',
            delay: String(initialAnimationDelay + centerCirclesAnimationDuration + timelineSlideDuration + branchSlideDuration) + 's',
            timingFunction: 'linear',
            iterationCount: 1,
            fillMode: 'forwards'
        });
        return totalAnimationDuration;
    }
    return 0;
}