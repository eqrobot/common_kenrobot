!function(i,e){"use strict";var s="model",o="name",r="type",n="vendor",a="version",t="mobile",w="tablet",l={extend:function(i,e){var s={};for(var o in i)e[o]&&e[o].length%2==0?s[o]=e[o].concat(i[o]):s[o]=i[o];return s},has:function(i,e){return"string"==typeof i&&-1!==e.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return"string"==typeof i?i.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(i){return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},d={rgx:function(i,e){for(var s,o,r,n,a,t,w=0;w<e.length&&!a;){var l=e[w],d=e[w+1];for(s=o=0;s<l.length&&!a;)if(a=l[s++].exec(i))for(r=0;r<d.length;r++)t=a[++o],"object"==typeof(n=d[r])&&n.length>0?2==n.length?"function"==typeof n[1]?this[n[0]]=n[1].call(this,t):this[n[0]]=n[1]:3==n.length?"function"!=typeof n[1]||n[1].exec&&n[1].test?this[n[0]]=t?t.replace(n[1],n[2]):void 0:this[n[0]]=t?n[1].call(this,t,n[2]):void 0:4==n.length&&(this[n[0]]=t?n[3].call(this,t.replace(n[1],n[2])):void 0):this[n]=t||void 0;w+=2}},str:function(i,e){for(var s in e)if("object"==typeof e[s]&&e[s].length>0){for(var o=0;o<e[s].length;o++)if(l.has(e[s][o],i))return"?"===s?void 0:s}else if(l.has(e[s],i))return"?"===s?void 0:s;return i}},c={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},u={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[o,a],[/(opios)[\/\s]+([\w\.]+)/i],[[o,"Opera Mini"],a],[/\s(opr)\/([\w\.]+)/i],[[o,"Opera"],a],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i],[o,a],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[o,"IE"],a],[/(edge)\/((\d+)?[\w\.]+)/i],[o,a],[/(yabrowser)\/([\w\.]+)/i],[[o,"Yandex"],a],[/(puffin)\/([\w\.]+)/i],[[o,"Puffin"],a],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/juc.+(ucweb)[\/\s]?([\w\.]+)/i,/(ucbrowser)\/([\w\.]+)/i],[[o,"UCBrowser"],a],[/(comodo_dragon)\/([\w\.]+)/i],[[o,/_/g," "],a],[/(micromessenger)\/([\w\.]+)/i],[[o,"WeChat"],a],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[o,a],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[a,[o,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[a,[o,"Facebook"]],[/(headlesschrome) ([\w\.]+)/i],[a,[o,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[o,/(.+)/,"$1 WebView"],a],[/android.+samsungbrowser\/([\w\.]+)/i,/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[a,[o,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[o,a],[/(dolfin)\/([\w\.]+)/i],[[o,"Dolphin"],a],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[o,"Chrome"],a],[/(coast)\/([\w\.]+)/i],[[o,"Opera Coast"],a],[/fxios\/([\w\.-]+)/i],[a,[o,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[a,[o,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[a,o],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[o,[a,d.str,c.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[o,a],[/(navigator|netscape)\/([\w\.-]+)/i],[[o,"Netscape"],a],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[o,a]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",l.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",l.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",l.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[s,n,[r,w]],[/applecoremedia\/[\w\.]+ \((ipad)/],[s,[n,"Apple"],[r,w]],[/(apple\s{0,1}tv)/i],[[s,"Apple TV"],[n,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[n,s,[r,w]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[s,[n,"Amazon"],[r,w]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[s,d.str,c.device.amazon.model],[n,"Amazon"],[r,t]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[s,n,[r,t]],[/\((ip[honed|\s\w*]+);/i],[s,[n,"Apple"],[r,t]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[n,s,[r,t]],[/\(bb10;\s(\w+)/i],[s,[n,"BlackBerry"],[r,t]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[s,[n,"Asus"],[r,w]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[n,"Sony"],[s,"Xperia Tablet"],[r,w]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[n,"Sony"],[s,"Xperia Phone"],[r,t]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[n,s,[r,"console"]],[/android.+;\s(shield)\sbuild/i],[s,[n,"Nvidia"],[r,"console"]],[/(playstation\s[34portablevi]+)/i],[s,[n,"Sony"],[r,"console"]],[/(sprint\s(\w+))/i],[[n,d.str,c.device.sprint.vendor],[s,d.str,c.device.sprint.model],[r,t]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[n,s,[r,w]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[n,[s,/_/g," "],[r,t]],[/(nexus\s9)/i],[s,[n,"HTC"],[r,w]],[/(nexus\s6p)/i],[s,[n,"Huawei"],[r,t]],[/(microsoft);\s(lumia[\s\w]+)/i],[n,s,[r,t]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[s,[n,"Microsoft"],[r,"console"]],[/(kin\.[onetw]{3})/i],[[s,/\./g," "],[n,"Microsoft"],[r,t]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[s,[n,"Motorola"],[r,t]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[s,[n,"Motorola"],[r,w]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[n,l.trim],[s,l.trim],[r,"smarttv"]],[/hbbtv.+maple;(\d+)/i],[[s,/^/,"SmartTV"],[n,"Samsung"],[r,"smarttv"]],[/\(dtv[\);].+(aquos)/i],[s,[n,"Sharp"],[r,"smarttv"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[n,"Samsung"],s,[r,w]],[/smart-tv.+(samsung)/i],[n,[r,"smarttv"],s],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[n,"Samsung"],s,[r,t]],[/sie-(\w+)*/i],[s,[n,"Siemens"],[r,t]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[n,"Nokia"],s,[r,t]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[s,[n,"Acer"],[r,w]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[n,"LG"],s,[r,w]],[/(lg) netcast\.tv/i],[n,s,[r,"smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[s,[n,"LG"],[r,t]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[s,[n,"Lenovo"],[r,w]],[/linux;.+((jolla));/i],[n,s,[r,t]],[/((pebble))app\/[\d\.]+\s/i],[n,s,[r,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[n,s,[r,t]],[/crkey/i],[[s,"Chromecast"],[n,"Google"]],[/android.+;\s(glass)\s\d/i],[s,[n,"Google"],[r,"wearable"]],[/android.+;\s(pixel c)\s/i],[s,[n,"Google"],[r,w]],[/android.+;\s(pixel xl|pixel)\s/i],[s,[n,"Google"],[r,t]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],[[s,/_/g," "],[n,"Xiaomi"],[r,t]],[/android.+a000(1)\s+build/i],[s,[n,"OnePlus"],[r,t]],[/\s(tablet)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[r,l.lowerize],n,s]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[a,[o,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[o,a],[/rv\:([\w\.]+).*(gecko)/i],[a,o]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[o,a],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[o,[a,d.str,c.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[o,"Windows"],[a,d.str,c.os.windows.version]],[/\((bb)(10);/i],[[o,"BlackBerry"],a],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[o,a],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[o,"Symbian"],a],[/\((series40);/i],[o],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[o,"Firefox OS"],a],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[o,a],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[o,"Chromium OS"],a],[/(sunos)\s?([\w\.]+\d)*/i],[[o,"Solaris"],a],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[o,a],[/(haiku)\s(\w+)/i],[o,a],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[[o,"iOS"],[a,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[o,"Mac OS"],[a,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[o,a]]},m=function(i,e){this[o]=i,this[a]=e},p=function(i){this.architecture=i},h=function(i,e,o){this[n]=i,this[s]=e,this[r]=o},b=m,f=m,g=function(e,s){if(!(this instanceof g))return new g(e,s).getResult();var o=e||(i&&i.navigator&&i.navigator.userAgent?i.navigator.userAgent:""),r=s?l.extend(u,s):u,n=new m,a=new p,t=new h,w=new b,c=new f;return this.getBrowser=function(){return d.rgx.call(n,o,r.browser),n.major=l.major(n.version),n},this.getCPU=function(){return d.rgx.call(a,o,r.cpu),a},this.getDevice=function(){return d.rgx.call(t,o,r.device),t},this.getEngine=function(){return d.rgx.call(w,o,r.engine),w},this.getOS=function(){return d.rgx.call(c,o,r.os),c},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(i){return o=i,n=new m,a=new p,t=new h,w=new b,c=new f,this},this};g.VERSION="0.7.13",g.BROWSER={NAME:o,MAJOR:"major",VERSION:a},g.CPU={ARCHITECTURE:"architecture"},g.DEVICE={MODEL:s,VENDOR:n,TYPE:r,CONSOLE:"console",MOBILE:t,SMARTTV:"smarttv",TABLET:w,WEARABLE:"wearable",EMBEDDED:"embedded"},g.ENGINE={NAME:o,VERSION:a},g.OS={NAME:o,VERSION:a},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=g),exports.UAParser=g):"function"==typeof define&&define.amd?define(function(){return g}):i.UAParser=g;var v=i.jQuery||i.Zepto;if(void 0!==v){var x=new g;v.ua=x.getResult(),v.ua.get=function(){return x.getUA()},v.ua.set=function(i){x.setUA(i);var e=x.getResult();for(var s in e)v.ua[s]=e[s]}}}("object"==typeof window?window:this);