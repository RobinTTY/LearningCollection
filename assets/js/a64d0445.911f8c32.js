"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[1860],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(h,s(s({ref:n},c),{},{components:t})):a.createElement(h,s({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<r;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5476:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),s=["components"],l={id:"unmanagedVsManagedResources",title:"Unmanaged vs managed resources"},i=void 0,u={unversionedId:"C-Sharp/unmanagedVsManagedResources",id:"C-Sharp/unmanagedVsManagedResources",title:"Unmanaged vs managed resources",description:'- Managed resources basically means "managed memory" that is managed by the garbage collector.',source:"@site/docs/C-Sharp/unmanaged vs managed resources.md",sourceDirName:"C-Sharp",slug:"/C-Sharp/unmanagedVsManagedResources",permalink:"/LearningCollection/C-Sharp/unmanagedVsManagedResources",editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/C-Sharp/unmanaged vs managed resources.md",tags:[],version:"current",frontMatter:{id:"unmanagedVsManagedResources",title:"Unmanaged vs managed resources"},sidebar:"mySidebar",previous:{title:"Unmanaged constraint",permalink:"/LearningCollection/C-Sharp/unmanagedConstraint"},next:{title:"Volatile Keyword",permalink:"/LearningCollection/C-Sharp/volatileKeyword"}},c={},p=[{value:"IDisposable",id:"idisposable",level:2},{value:"Couldn&#39;t I use Finalize to cleanup unmanaged resources",id:"couldnt-i-use-finalize-to-cleanup-unmanaged-resources",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'Managed resources basically means "managed memory" that is managed by the garbage collector.')),(0,r.kt)("li",{parentName:"ul"},"When you no longer have any references to a managed object (which uses managed memory), the garbage collector will (eventually) release that memory for you.")),(0,r.kt)("p",null,"Unmanaged resources are then everything that the garbage collector does not know about. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open files"),(0,r.kt)("li",{parentName:"ul"},"Open network connections"),(0,r.kt)("li",{parentName:"ul"},"Open Gpio Ports"),(0,r.kt)("li",{parentName:"ul"},"Unmanaged memory")),(0,r.kt)("p",null,"Normally you want to release those unmanaged resources before you lose all the references you have to the object managing them.\nYou do this by calling Dispose on that object, or (in C#) using the using statement which will handle calling Dispose for you."),(0,r.kt)("p",null,"If you neglect to Dispose of your unmanaged resources correctly, the garbage collector will eventually handle it for you when the object containing that resource is garbage collected (this is \"finalization\").\nBut because the garbage collector doesn't know about the unmanaged resources, it can't tell how badly it needs to release them - so it's possible for your program to perform poorly or run out of resources entirely."),(0,r.kt)("p",null,"If you implement a class yourself that handles unmanaged resources, it is up to you to implement Dispose and Finalize correctly."),(0,r.kt)("h2",{id:"idisposable"},"IDisposable"),(0,r.kt)("p",null,"The point of Dispose is to free unmanaged resources. It needs to be done at some point, otherwise they will never be cleaned up. The garbage collector doesn't know how to call DeleteHandle() on a variable of type IntPtr, it doesn't know whether or not it needs to call DeleteHandle()."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," What is an unmanaged resource? If you found it in the Microsoft .NET Framework: it's managed. If you went poking around MSDN yourself, it's unmanaged. Anything you've used P/Invoke calls to get outside of the nice comfy world of everything available to you in the .NET Framework is unmanaged \u2013 and you're now responsible for cleaning it up."),(0,r.kt)("p",null,"The object that you've created needs to expose some method, that the outside world can call, in order to clean up unmanaged resources. There is a standardized name for this method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void Dispose()\n")),(0,r.kt)("p",null,"The IDisposable interface has just this one method that needs to be implemented."),(0,r.kt)("p",null,"So you make your object expose the IDisposable interface, and that way you promise that you've written that single method to clean up your unmanaged resources:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void Dispose()\n{\n   Win32.DestroyHandle(this.CursorFileBitmapIconServiceHandle);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"But we can do more:")),(0,r.kt)("p",null,"What if your object has allocated a 250MB System.Drawing.Bitmap (i.e. the .NET managed Bitmap class) as some sort of frame buffer? Sure, this is a managed .NET object, and the garbage collector will free it. But do you really want to leave 250MB of memory just sitting there \u2013 waiting for the garbage collector to eventually come along and free it?"),(0,r.kt)("p",null,"If the user has called ",(0,r.kt)("inlineCode",{parentName:"p"},"Dispose()")," (meaning they no longer plan to use the object) why not get rid of those wasteful bitmaps and database connections?"),(0,r.kt)("p",null,"So now we will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"get rid of unmanaged resources (because we have to), and"),(0,r.kt)("li",{parentName:"ul"},"get rid of managed resources (because we want to be helpful)")),(0,r.kt)("p",null,"So let's update our ",(0,r.kt)("inlineCode",{parentName:"p"},"Dispose()")," method to get rid of those managed objects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void Dispose()\n{\n   //Free unmanaged resources\n   Win32.DestroyHandle(this.CursorFileBitmapIconServiceHandle);\n\n   //Free managed resources too\n   if (this.databaseConnection != null)\n   {\n      this.databaseConnection.Dispose();\n      this.databaseConnection = null;\n   }\n   if (this.frameBufferImage != null)\n   {\n      this.frameBufferImage.Dispose();\n      this.frameBufferImage = null;\n   }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We can still do more:")),(0,r.kt)("p",null,"What if the person forgot to call ",(0,r.kt)("inlineCode",{parentName:"p"},"Dispose()")," on your object? Then they would leak some unmanaged resources!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," They won't leak managed resources, because eventually the garbage collector is going to run, on a background thread, and free the memory associated with any unused objects. This will include your object, and any managed objects you use (e.g. the Bitmap and the DbConnection)."),(0,r.kt)("p",null,"If the person forgot to call ",(0,r.kt)("inlineCode",{parentName:"p"},"Dispose()"),", we can still save their bacon! We still have a way to call it for them: when the garbage collector finally gets around to freeing (i.e. finalizing) our object."),(0,r.kt)("p",null,"The garbage collector will eventually free all managed objects. When it does, it calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"Finalize")," method on the object. ",(0,r.kt)("strong",{parentName:"p"},"The GC doesn't know, or care, about your ",(0,r.kt)("inlineCode",{parentName:"strong"},"Dispose")," method. That was just a name we chose for a method we call when we want to get rid of unmanaged stuff.")),(0,r.kt)("p",null,"The destruction of our object by the Garbage collector is the perfect time to free those unmanaged resources. We do this by overriding the ",(0,r.kt)("inlineCode",{parentName:"p"},"Finalize()")," method."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," In C#, you don't explicitly override the Finalize() method. You write a method that looks like a C++ destructor, and the compiler takes that to be your implementation of the Finalize() method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"~MyObject()\n{\n   //we're being finalized (i.e. destroyed), call Dispose in case the user forgot to\n   Dispose(); //<--Warning: subtle bug! Keep reading!\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"But there's a bug in that code.")," You see, the garbage collector runs on a background thread; you don't know the order in which two objects are destroyed. It is entirely possible that in your Dispose() code, the managed object you're trying to get rid of (because you wanted to be helpful) is no longer there:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void Dispose()\n{\n   //Free unmanaged resources\n   Win32.DestroyHandle(this.gdiCursorBitmapStreamFileHandle);\n\n   //Free managed resources too\n   if (this.databaseConnection != null)\n   {\n      this.databaseConnection.Dispose(); //<-- crash, GC already destroyed it\n      this.databaseConnection = null;\n   }\n   if (this.frameBufferImage != null)\n   {\n      this.frameBufferImage.Dispose(); //<-- crash, GC already destroyed it\n      this.frameBufferImage = null;\n   }\n}\n")),(0,r.kt)("p",null,"So what you need is a way for ",(0,r.kt)("inlineCode",{parentName:"p"},"Finalize()")," to tell ",(0,r.kt)("inlineCode",{parentName:"p"},"Dispose()")," that it should not touch any managed resources (because they might not be there anymore), while still freeing unmanaged resources."),(0,r.kt)("p",null,"The standard pattern to do this is to have ",(0,r.kt)("inlineCode",{parentName:"p"},"Finalize()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Dispose()")," both call a third(!) method; where you pass a Boolean saying if you're calling it from ",(0,r.kt)("inlineCode",{parentName:"p"},"Dispose()")," (as opposed to ",(0,r.kt)("inlineCode",{parentName:"p"},"Finalize()"),"), meaning it's safe to free managed resources."),(0,r.kt)("p",null,'This internal method could be given some arbitrary name like "CoreDispose", or "MyInternalDispose", but is tradition to call it Dispose(Boolean):'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"protected void Dispose(Boolean disposing)\n")),(0,r.kt)("p",null,"But a more helpful parameter name might be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"protected void Dispose(Boolean itIsSafeToAlsoFreeManagedObjects)\n{\n   //Free unmanaged resources\n   Win32.DestroyHandle(this.CursorFileBitmapIconServiceHandle);\n\n   //Free managed resources too, but only if I'm being called from Dispose\n   //(If I'm being called from Finalize then the objects might not exist\n   //anymore\n   if (itIsSafeToAlsoFreeManagedObjects)\n   {\n      if (this.databaseConnection != null)\n      {\n         this.databaseConnection.Dispose();\n         this.databaseConnection = null;\n      }\n      if (this.frameBufferImage != null)\n      {\n         this.frameBufferImage.Dispose();\n         this.frameBufferImage = null;\n      }\n   }\n}\n")),(0,r.kt)("p",null,"And you change your implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"IDisposable.Dispose()")," method to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void Dispose()\n{\n   Dispose(true); //I am calling you from Dispose, it's safe\n}\n")),(0,r.kt)("p",null,"and your finalizer to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"~MyObject()\n{\n   Dispose(false); //I am *not* calling you from Dispose, it's *not* safe\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," If your object descends from an object that implements Dispose, then don't forget to call their base Dispose method when you override Dispose:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"    public override void Dispose()\n    {\n        try\n        {\n            Dispose(true); //true: safe to free managed resources\n        }\n        finally\n        {\n            base.Dispose();\n        }\n    }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We can do even more:")),(0,r.kt)("p",null,"If the user calls ",(0,r.kt)("inlineCode",{parentName:"p"},"Dispose()")," on your object, then everything has been cleaned up. Later on, when the garbage collector comes along and calls Finalize, it will then call Dispose again."),(0,r.kt)("p",null,"Not only is this wasteful, but if your object has junk references to objects you already disposed of from the last call to ",(0,r.kt)("inlineCode",{parentName:"p"},"Dispose()"),", you'll try to dispose them again!"),(0,r.kt)("p",null,"You'll notice in my code I was careful to remove references to objects that I've disposed, so I don't try to call Dispose on a junk object reference. But that didn't stop a subtle bug from creeping in."),(0,r.kt)("p",null,"When the user calls ",(0,r.kt)("inlineCode",{parentName:"p"},"Dispose()"),": the handle ",(0,r.kt)("strong",{parentName:"p"},"CursorFileBitmapIconServiceHandle")," is destroyed. Later when the garbage collector runs, it will try to destroy the same handle again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"protected void Dispose(Boolean iAmBeingCalledFromDisposeAndNotFinalize)\n{\n   //Free unmanaged resources\n   Win32.DestroyHandle(this.CursorFileBitmapIconServiceHandle); //<--double destroy\n   ...\n}\n")),(0,r.kt)("p",null,"The way you fix this is tell the garbage collector that it doesn't need to bother finalizing the object \u2013 its resources have already been cleaned up, and no more work is needed. You do this by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"GC.SuppressFinalize()")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dispose()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"public void Dispose()\n{\n   Dispose(true); //I am calling you from Dispose, it's safe\n   GC.SuppressFinalize(this); //Hey, GC: don't bother calling finalize later\n}\n")),(0,r.kt)("p",null,"Now that the user has called ",(0,r.kt)("inlineCode",{parentName:"p"},"Dispose()"),", we have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"freed unmanaged resources"),(0,r.kt)("li",{parentName:"ul"},"freed managed resources")),(0,r.kt)("p",null,"There's no point in the GC running the finalizer \u2013 everything's taken care of."),(0,r.kt)("h2",{id:"couldnt-i-use-finalize-to-cleanup-unmanaged-resources"},"Couldn't I use Finalize to cleanup unmanaged resources"),(0,r.kt)("p",null,"The documentation for Object.Finalize says:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Finalize method is used to perform cleanup operations on unmanaged resources held by the current object before the object is destroyed.")),(0,r.kt)("p",null,"But the MSDN documentation also says, for ",(0,r.kt)("inlineCode",{parentName:"p"},"IDisposable.Dispose"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.")),(0,r.kt)("p",null,"So which is it? Which one is the place for me to cleanup unmanaged resources? The answer is:"),(0,r.kt)("p",null,"It's your choice! But choose Dispose."),(0,r.kt)("p",null,"You certainly could place your unmanaged cleanup in the finalizer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"~MyObject()\n{\n   //Free unmanaged resources\n   Win32.DestroyHandle(this.CursorFileBitmapIconServiceHandle);\n\n   //A C# destructor automatically calls the destructor of its base class.\n}\n")),(0,r.kt)("p",null,"The problem with that is you have no idea when the garbage collector will get around to finalizing your object. Your un-managed, un-needed, un-used native resources will stick around until the garbage collector eventually runs. Then it will call your finalizer method; cleaning up unmanaged resources. The documentation of Object.Finalize points this out:"),(0,r.kt)("p",null,"The exact time when the finalizer executes is undefined. To ensure deterministic release of resources for instances of your class, implement a Close method or provide a IDisposable.Dispose implementation."),(0,r.kt)("p",null,'This is the virtue of using Dispose to cleanup unmanaged resources; you get to know, and control, when unmanaged resource are cleaned up. Their destruction is "deterministic".'))}m.isMDXComponent=!0}}]);