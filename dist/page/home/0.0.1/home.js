"use strict";define("page/home/home",["site/kernel/kernel"],function(e){var n="home",t=0;return $("#"+n+">a").on("click",function(){t++,e.openPopup("samplePopup",t)}),{onload:function(t){t&&e.alert("loading "+n)},onunload:function(){console.log("leaving "+n)}}});