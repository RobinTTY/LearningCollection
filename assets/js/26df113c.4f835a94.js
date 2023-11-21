"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[1716],{8721:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=s(5893),o=s(1151);const i={id:"promise",title:"Promise",sidebar_position:5},t=void 0,a={id:"web/javascript/core-concepts/promise",title:"Promise",description:"Definition: The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.",source:"@site/docs/web/javascript/core-concepts/promise.md",sourceDirName:"web/javascript/core-concepts",slug:"/web/javascript/core-concepts/promise",permalink:"/LearningCollection/web/javascript/core-concepts/promise",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/web/javascript/core-concepts/promise.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"promise",title:"Promise",sidebar_position:5},sidebar:"docs",previous:{title:"JSON",permalink:"/LearningCollection/web/javascript/core-concepts/json"},next:{title:"Destructuring Assignment",permalink:"/LearningCollection/web/javascript/core-concepts/destructuring-assignment"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Flow of execution",id:"flow-of-execution",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example: Using a Promise",id:"example-using-a-promise",level:2},{value:"Replacing a callback with a Promise",id:"replacing-a-callback-with-a-promise",level:2},{value:"Promise.prototype.then()",id:"promiseprototypethen",level:2},{value:"Syntax",id:"syntax-1",level:3},{value:"Example",id:"example",level:3},{value:"Promise.prototype.catch()",id:"promiseprototypecatch",level:2},{value:"Syntax",id:"syntax-2",level:3},{value:"Example",id:"example-1",level:3},{value:"<code>catch()</code> vs <code>then()</code>",id:"catch-vs-then",level:2},{value:"Flow diagram",id:"flow-diagram",level:3},{value:"Reference",id:"reference",level:3},{value:"Promise.all()",id:"promiseall",level:2},{value:"Promise.race()",id:"promiserace",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Definition: The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"A Promise is a proxy for a value not necessarily known when the promise is created. A promise can be in one of three states:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"pending: initial state, neither fulfilled nor rejected"}),"\n",(0,r.jsx)(n.li,{children:"resolved (or fulfilled): meaning that the operation was completed successfully"}),"\n",(0,r.jsx)(n.li,{children:"rejected: meaning that the operation failed"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["A pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's ",(0,r.jsx)(n.code,{children:"then"})," method are called."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Note: If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"flow-of-execution",children:"Flow of execution"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"ProjectStructure",src:s(8090).Z+"",width:"801",height:"297"})}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// A promise is created like this:\nlet promise = new Promise(executor);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"executor"})," is a function which is custom code that ties an outcome to a promise. You, the programmer, write the ",(0,r.jsx)(n.code,{children:"executor"}),". Its signature is expected to be:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function(resolutionFunc, rejectionFunc){\n    // typically, some asynchronous operation.\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"resolutionFunc"})," and ",(0,r.jsx)(n.code,{children:"rejectionFunc"})," are also functions, and you can give them whatever actual names you want."]}),"\n",(0,r.jsx)(n.p,{children:"Their signatures are simple, they accept a single parameter of any type:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"resolutionFunc(value); // call on resolved\nrejectionFunc(reason); // call on rejected\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"resolutionFunc"})," ",(0,r.jsx)(n.code,{children:"value"})," parameter can be another promise object, in which case the promise gets dynamically inserted into the ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises",children:"promise chain"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"example-using-a-promise",children:"Example: Using a Promise"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// the resolutionFunc is called 'resolve' here, and the rejectionFunc 'reject'\nlet promise = new Promise((resolve, reject) => {\n  let a = 1 + 1;\n  if (a === 2) {\n    resolve(\"Success\");\n  } else {\n    reject(\"Failure\");\n  }\n});\n\npromise.then(\n    // on success\n    (message) => {\n        // Called on resolve: Success\n        console.log(message);\n    })\n    .catch((message) => {\n        // Called on reject: Failure\n        console.log(message);\n    })\n);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"replacing-a-callback-with-a-promise",children:"Replacing a callback with a Promise"}),"\n",(0,r.jsxs)(n.p,{children:["Promises can replace callbacks ",(0,r.jsx)(n.a,{href:"https://stackoverflow.com/questions/45041462/node-js-when-to-use-promises-vs-callbacks",children:"most of the time"}),". This can have several advantages, see ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises",children:"MDN"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["An example of replacing a callback with a ",(0,r.jsx)(n.code,{children:"Promise"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'// Using a callback\nfunction watchTutorialCallback(callback, errorCallback) {\n  let userLeft = false;\n  let userWatchingCatMeme = false;\n\n  if (userLeft) {\n    errorCallback({\n      name: "User Left",\n      message: ":(",\n    });\n  } else if (userWatchingCatMeme) {\n    errorCallback({\n      name: "User Watching Cat Meme",\n      message: "WebDevSimplified < Cat",\n    });\n  } else {\n    callback("Thumbs up and Subscribe");\n  }\n}\n\n// Using a promise\nfunction watchTutorialPromise() {\n  let userLeft = false;\n  let userWatchingCatMeme = false;\n  return new Promise((resolve, reject) => {\n    if (userLeft) {\n      reject({\n        name: "User Left",\n        message: ":(",\n      });\n    } else if (userWatchingCatMeme) {\n      reject({\n        name: "User Watching Cat Meme",\n        message: "WebDevSimplified < Cat",\n      });\n    } else {\n      resolve("Thumbs up and Subscribe");\n    }\n  });\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"We call these methods like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'watchTutorialCallback(\n  (message) => {\n    console.log(message);\n  },\n  (error) => {\n    console.log(error.name + " " + error.message);\n  }\n);\n\nwatchTutorialPromise()\n  .then((message) => {\n    console.log(message);\n  })\n  .catch((error) => {\n    console.log(error.name + " " + error.message);\n  });\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Using the promise we have a nicer method signature. More importantly we avoid things like ",(0,r.jsx)(n.a,{href:"http://callbackhell.com/",children:"callback hell"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"promiseprototypethen",children:"Promise.prototype.then()"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"then()"})," method returns a ",(0,r.jsx)(n.code,{children:"Promise"}),". It takes up to two arguments: callback functions for the success and failure cases of the ",(0,r.jsx)(n.code,{children:"Promise"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"syntax-1",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"p.then(onFulfilled[, onRejected]);\n\np.then(value => {\n  // fulfillment\n}, reason => {\n  // rejection\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const promise1 = new Promise((resolve, reject) => {\n  resolve("Success!");\n});\n\npromise1.then((value) => {\n  console.log(value);\n  // expected output: "Success!"\n});\n'})}),"\n",(0,r.jsx)(n.h2,{id:"promiseprototypecatch",children:"Promise.prototype.catch()"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"catch()"})," method returns a ",(0,r.jsx)(n.code,{children:"Promise"})," and deals with rejected cases only. It behaves the same as calling ",(0,r.jsx)(n.code,{children:"Promise.prototype.then(undefined, onRejected)"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"syntax-2",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"p.catch(onRejected);\n\np.catch(function (reason) {\n  // rejection\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const promise1 = new Promise((resolve, reject) => {\n  throw "Uh-oh!";\n});\n\npromise1.catch((error) => {\n  console.error(error);\n});\n// expected output: Uh-oh!\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"catch-vs-then",children:[(0,r.jsx)(n.code,{children:"catch()"})," vs ",(0,r.jsx)(n.code,{children:"then()"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"The code fragments:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"promise.then(f1).catch(f2);\n// and\npromise.then(f1, f2);\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"are not equal!"})}),"\n",(0,r.jsxs)(n.p,{children:["The difference is that ",(0,r.jsxs)(n.strong,{children:["if an error happens in ",(0,r.jsx)(n.code,{children:"f1"})]}),", then it is handled by ",(0,r.jsx)(n.code,{children:".catch"})," here:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// error in f1 will be caught by catch\npromise.then(f1).catch(f2);\n"})}),"\n",(0,r.jsx)(n.p,{children:"but not here:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// error in f1 will not be caught\npromise.then(f1, f2);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["That\u2019s because an error is passed down the chain, and in the second code piece there\u2019s no chain below ",(0,r.jsx)(n.code,{children:"f1"}),". In other words, ",(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:".then"})," passes results/errors to the next ",(0,r.jsx)(n.code,{children:".then/catch"}),"."]})," So in the first example, there\u2019s a catch below, and in the second one there isn\u2019t, so the error is unhandled."]}),"\n",(0,r.jsx)(n.h3,{id:"flow-diagram",children:"Flow diagram"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"PromiseFlow",src:s(5187).Z+"",width:"300",height:"480"})}),"\n",(0,r.jsx)(n.h3,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(n.p,{children:["For more info see: ",(0,r.jsx)(n.a,{href:"https://stackoverflow.com/questions/24662289/when-is-thensuccess-fail-considered-an-antipattern-for-promises",children:"StackOverflow"})]}),"\n",(0,r.jsx)(n.h2,{id:"promiseall",children:"Promise.all()"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Promise.all()"})," method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const promise1 = Promise.resolve(3);\nconst promise2 = 42;\nconst promise3 = new Promise((resolve, reject) => {\n  setTimeout(resolve, 100, "foo");\n});\n\nPromise.all([promise1, promise2, promise3]).then((values) => {\n  console.log(values);\n});\n// expected output: Array [3, 42, "foo"]\n'})}),"\n",(0,r.jsx)(n.h2,{id:"promiserace",children:"Promise.race()"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Promise.race()"})," method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const promise1 = new Promise((resolve, reject) => {\n  setTimeout(resolve, 500, "one");\n});\n\nconst promise2 = new Promise((resolve, reject) => {\n  setTimeout(resolve, 100, "two");\n});\n\nPromise.race([promise1, promise2]).then((value) => {\n  console.log(value);\n  // Both resolve, but promise2 is faster\n});\n// expected output: "two"\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5187:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/catchVsThen-43164d857ee964477533f407383292c7.png"},8090:(e,n,s)=>{s.d(n,{Z:()=>r});const r="data:image/png;base64,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"},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>t});var r=s(7294);const o={},i=r.createContext(o);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);