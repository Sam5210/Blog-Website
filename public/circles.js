exports.setUpCirclesParameters = function(){
    alert("Been here");
    let leftCircles = $(".align-hor-left .circle");
    let rightCircles = $(".align-hor-right .circle");
    let topCircle = $(".circle-center.top");
    let bottomCircle = $(".circle-center.bottom");
    let offsetSmall = String(Number(leftCircles.css("width").substring(0, leftCircles.css("width").length - 2)) / 2) + "px";
    let offsetBig = String(Number(offsetSmall.substring(0, offsetSmall.length - 2)) * 5) + "px";
    let offsetMedium = String(Number(offsetSmall.substring(0, offsetSmall.length - 2)) * (3)) + "px";
    let color = "aqua";
    let circleBackgroundColor = "rgb(10, 10, 10)";
    let centerCirclesBackgroundColor = "rgb(10, 10, 10)";
    let blurSize = "3px";
    let spreadSize = "5px";
    let boxShadowValue = `${offsetSmall}  -${offsetSmall} 0 2px ${circleBackgroundColor}, -${offsetSmall} -${offsetSmall} 0 2px ${circleBackgroundColor},\
                                -${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor}, ${offsetSmall} ${offsetSmall} 0 2px ${circleBackgroundColor},\
                                0 0 ${blurSize} ${spreadSize} ${color}`;
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
    leftBranchCircleAnimation.After = `0 -${offsetBig} 0 2px orangered,\
        -${offsetBig} 0px 0 2px orangered,\
        0px ${offsetBig} 0 2px orangered,\
        ${offsetBig} ${offsetMedium} 0 2px orangered,\
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
    rightBranchCircleAnimation.Percent100 = `0 -${offsetBig} 0 2px transparent,\
        -${offsetBig} -${offsetBig} 0 2px transparent,\
        0px ${offsetBig} 0 2px transparent,\
        ${offsetBig} ${offsetMedium} 0 2px transparent,\
        0 0 ${blurSize} ${spreadSize} ${color}`;

        const topCircleAnimation = {}; 
        topCircleAnimation.Percent0 = `${offsetSmall} -${offsetSmall} 0 2px ${centerCirclesBackgroundColor},\
            -${offsetSmall} -${offsetSmall} 0 2px ${centerCirclesBackgroundColor},\
            -${offsetSmall} ${offsetSmall} 0 2px ${centerCirclesBackgroundColor},\
            ${offsetSmall} ${offsetSmall} 0 2px ${centerCirclesBackgroundColor},\
            0 0 ${blurSize} ${spreadSize} ${color}`;
        topCircleAnimation.Percent25 = `${offsetSmall} -${offsetSmall} 0 2px ${centerCirclesBackgroundColor},\
            -${offsetSmall} -${offsetSmall} 0 2px ${centerCirclesBackgroundColor},\
            -${offsetSmall} ${offsetSmall} 0 2px ${centerCirclesBackgroundColor},\
            ${offsetBig} ${offsetMedium} 0 2px ${centerCirclesBackgroundColor},\
            0 0 ${blurSize} ${spreadSize} ${color}`;
        topCircleAnimation.Percent50 = `0 -${offsetBig} 0 2px ${centerCirclesBackgroundColor},\
            -${offsetSmall} -${offsetSmall} 0 2px ${centerCirclesBackgroundColor},\
            -${offsetSmall} ${offsetSmall} 0 2px ${centerCirclesBackgroundColor}, \
            ${offsetBig} ${offsetMedium} 0 2px ${centerCirclesBackgroundColor},\
            0 0 ${blurSize} ${spreadSize} ${color}`;
        topCircleAnimation.Percent75 = `0 -${offsetBig} 0 2px ${centerCirclesBackgroundColor},\
            -${offsetBig} 0px 0 2px ${centerCirclesBackgroundColor},\
            -${offsetSmall} ${offsetSmall} 0 2px ${centerCirclesBackgroundColor}, \
            ${offsetBig} ${offsetMedium} 0 2px ${centerCirclesBackgroundColor},\
            0 0 ${blurSize} ${spreadSize} ${color}`;
        topCircleAnimation.Percent100 = `0 -${offsetBig} 0 2px ${centerCirclesBackgroundColor},\
            -${offsetBig} 0px 0 2px ${centerCirclesBackgroundColor},\
            -${offsetBig} ${offsetBig} 0 2px ${centerCirclesBackgroundColor},\
            ${offsetBig} ${offsetMedium} 0 2px ${centerCirclesBackgroundColor},\
            0 0 ${blurSize} ${spreadSize} ${color}`;
        
        const bottomCircleAnimation = {};
        bottomCircleAnimation.Percent0 = `${offsetSmall} -${offsetSmall} 0 2px ${centerCirclesBackgroundColor},\
            -${offsetSmall} -${offsetSmall} 0 2px ${centerCirclesBackgroundColor},\
            -${offsetSmall} ${offsetSmall} 0 2px ${centerCirclesBackgroundColor},\
            ${offsetSmall} ${offsetSmall} 0 2px ${centerCirclesBackgroundColor},\
            0 0 ${blurSize} ${spreadSize} ${color}`;
        bottomCircleAnimation.Percent25 = `${offsetSmall} -${offsetSmall} 0 2px ${centerCirclesBackgroundColor},\
            -${offsetBig} 0px 0 2px ${centerCirclesBackgroundColor},\
            -${offsetSmall} ${offsetSmall} 0 2px ${centerCirclesBackgroundColor},\
            ${offsetSmall} ${offsetSmall} 0 2px ${centerCirclesBackgroundColor},\
            0 0 ${blurSize} ${spreadSize} ${color}`;
        bottomCircleAnimation.Percent50 = `${offsetSmall} -${offsetSmall} 0 2px ${centerCirclesBackgroundColor},\
            -${offsetBig} 0px 0 2px ${centerCirclesBackgroundColor},\
            0px ${offsetBig} 0 2px ${centerCirclesBackgroundColor},\
            ${offsetSmall} ${offsetSmall} 0 2px ${centerCirclesBackgroundColor},\
            0 0 ${blurSize} ${spreadSize} ${color}`;
        bottomCircleAnimation.Percent75 = `${offsetSmall} -${offsetSmall} 0 2px ${centerCirclesBackgroundColor},\
            -${offsetBig} 0px 0 2px ${centerCirclesBackgroundColor},\
            0px ${offsetBig} 0 2px ${centerCirclesBackgroundColor},\
            ${offsetBig} ${offsetMedium} 0 2px ${centerCirclesBackgroundColor},\
            0 0 ${blurSize} ${spreadSize} ${color}`;
        bottomCircleAnimation.Percent100 = `${offsetBig} -${offsetBig} 0 2px ${centerCirclesBackgroundColor},\
            -${offsetBig} 0px 0 2px ${centerCirclesBackgroundColor},\
            0px ${offsetBig} 0 2px ${centerCirclesBackgroundColor},\
            ${offsetBig} ${offsetMedium} 0 2px ${centerCirclesBackgroundColor},\
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
};