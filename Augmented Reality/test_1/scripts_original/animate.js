function animate(nowMsec) {
    requestAnimationFrame(animate);
    lastTimeMsec = lastTimeMsec || nowMsec - 1000 / 60;
    var deltaMsec = Math.min(200, nowMsec - lastTimeMsec);
    lastTimeMsec = nowMsec;
    pulse = Date.now() * 0.0009;
    onRenderFcts.forEach(function (onRenderFct) {
        onRenderFct(deltaMsec / 1000, nowMsec / 1000);
    });

    assetsReady();
    
    visibilityCheck();

    if (pc >= 2) {
        video.pause();
        pc = 0;
    }

    if (pc != 1) {
        btext = "PLAY";
        var b = document.getElementById('middlebutton');
        b.setAttribute('content', 'PLAY');
        b.setAttribute('class', 'btn');
        b.innerHTML = 'PLAY';

    }
}
