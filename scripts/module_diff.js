var lowerLightnessThreshold$$module$Input_0=.5,upperLightnessThreshold$$module$Input_0=.8,predefinedColors$$module$Input_0="#E9E5E3 #FAEBDD #FBF3DB #DDEDEA #DDEBF1 #EAE4F2 #F4DFEB #FBE4E4".split(" "),isColorCloseToPredefinedColors$$module$Input_0=function(b){for(var a=0;a<predefinedColors$$module$Input_0.length;a++)if(5>chroma.deltaE(b,predefinedColors$$module$Input_0[a],2))return!0;return!1},generateRandomColor$$module$Input_0=function(){for(var b="#",a=0;6>a;a++)b+=("0"+Math.floor(16*Math.random()).toString(16)).slice(-1);
return b},isColorUsedInSidebar$$module$Input_0=function(b,a){var c=!1;document.querySelector("#"+a).querySelectorAll(".sidebar .color-item").forEach(function(d){5>chroma.deltaE(b,d.style.backgroundColor,2)&&(c=!0)});return c},getUniqueRandomColor$$module$Input_0=function(b){do var a=generateRandomColor$$module$Input_0(),c=chroma(a).get("hsl.l");while(isColorUsedInSidebar$$module$Input_0(a,b)||isColorCloseToPredefinedColors$$module$Input_0(a)||c<=lowerLightnessThreshold$$module$Input_0||c>=upperLightnessThreshold$$module$Input_0);
return a},module$Input_0={getUniqueRandomColor:getUniqueRandomColor$$module$Input_0,predefinedColors:predefinedColors$$module$Input_0,upperLightnessThreshold:upperLightnessThreshold$$module$Input_0};
