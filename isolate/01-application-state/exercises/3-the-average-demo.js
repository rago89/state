const a0_0x51fd=['the\x20average\x20is:\x20','push','average','isNaN','reduce','numbers','input\x20number','length','state','\x0a:\x20','number','\x22\x20is\x20not\x20valid\x20number','enter\x20a\x20number\x20to\x20include\x20in\x20the\x20average\x20\x0a\x0aclick\x20\x22cancel\x22\x20to\x20finish\x20inputting\x20numbers'];(function(_0x38f641,_0x51fdb0){const _0x6e6966=function(_0x57c418){while(--_0x57c418){_0x38f641['push'](_0x38f641['shift']());}};_0x6e6966(++_0x51fdb0);}(a0_0x51fd,0x153));const a0_0x6e69=function(_0x38f641,_0x51fdb0){_0x38f641=_0x38f641-0x0;let _0x6e6966=a0_0x51fd[_0x38f641];return _0x6e6966;};'use strict';const state={'numbers':[],'average':0x0},stateLog=[{'state':deepClone(state)}],average=_0xbf1b48=>{if(_0xbf1b48[a0_0x6e69('0x6')]===0x0)return 0x0;const _0x1137ea=_0xbf1b48[a0_0x6e69('0x6')],_0x399484=_0xbf1b48['reduce']((_0x3f4145,_0x22958b)=>_0x3f4145+_0x22958b),_0x331a37=_0x399484/_0x1137ea;return _0x331a37;};while(!![]){const nextInput=prompt(a0_0x6e69('0xb')),inputLog={'action':a0_0x6e69('0x5'),'input':nextInput};stateLog['push'](inputLog);if(nextInput===null||nextInput==='')break;const nextNumber=Number(nextInput);inputLog[a0_0x6e69('0x9')]=nextNumber;if(Number[a0_0x6e69('0x2')](nextNumber)){const message='\x22'+nextInput+a0_0x6e69('0xa');alert(message),inputLog['invalid']=message;continue;}state[a0_0x6e69('0x4')][a0_0x6e69('0x0')](nextNumber),state[a0_0x6e69('0x1')]=average(state['numbers']),inputLog[a0_0x6e69('0x7')]=deepClone(state);};const firstLine=a0_0x6e69('0xc')+state[a0_0x6e69('0x1')],renderedNumbers=state[a0_0x6e69('0x4')][a0_0x6e69('0x3')]((_0x14059b,_0x20ecc1)=>{return _0x14059b+a0_0x6e69('0x8')+_0x20ecc1;},''),fullMessage=firstLine+renderedNumbers;alert(fullMessage),stateLog[a0_0x6e69('0x0')]({'state':deepClone(state)}),console['log'](stateLog);