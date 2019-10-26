// ==UserScript==
// @name         Twitch ChannelPoints Autoclaim
// @version      0.1
// @description  Automate claiming of bonus chests
// @author       Evanito
// @include      *://*.twitch.tv/*
// @namespace    https://github.com/Evanito/twCPAuto
// @run-at document-idle
// ==/UserScript==
// TO USE: automatically starts when watching a stream with userpoints, triggers once every 5 seconds <-----

// ==== SETTINGS ====
var autoRun = true;
// == END SETTINGS ==

// Do not edit below this line!
// ==========================================
(function() {
    console.log(timeString() + " [CPA] Begin ChannelPoints Autoclaim by Evanito.");
    if (autoRun) {
        console.log(timeString() + " [CPA] Running...");
        run();
    }
})();

function run() {
    var plays = document.getElementsByClassName("claimable-bonus__icon");
    for (var i = 0; i < plays.length; i++) {
        plays[i].click();
        console.log(timeString() + " [CPA] Clicked a bonus chest.");
    }
    setTimeout(function(){ run(); }, 5000);
}

function timeString() {
    let d = new Date();
    let h = (d.getHours()<10?'0':'') + d.getHours();
    let m = (d.getMinutes()<10?'0':'') + d.getMinutes();
    let s = (d.getSeconds()<10?'0':'') + d.getSeconds();
    let dstr = h + ':' + m + ":" + s;
    return dstr;
}
