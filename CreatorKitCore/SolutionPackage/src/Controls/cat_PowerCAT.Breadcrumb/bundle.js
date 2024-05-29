/*! For license information please see bundle.js.LICENSE.txt */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;(()=>{"use strict";var e={d:(t,i)=>{for(var r in i)e.o(i,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:i[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Breadcrumb:()=>R});const i=React,r=FluentUIReactv8290;var o,n="data-is-focusable",s="data-focuszone-id",a="tabindex",l="data-no-vertical-wrap",c="data-no-horizontal-wrap",u=999999999,h=-999999999,m={},d=new Set,p=["text","number","password","email","tel","url","search"],f=!1;class _ extends i.Component{static getOuterZones(){return d.size}static _onKeyDownCapture(e){e.which===r.KeyCodes.tab&&d.forEach((e=>e._updateTabIndexes()))}constructor(e){super(e),this._root=i.createRef(),this._mergedRef=(0,r.createMergedRef)(),this._onFocus=e=>{if(!this._portalContainsElement(e.target)){var t,{onActiveElementChanged:i,doNotAllowFocusEventToPropagate:o,stopFocusPropagation:n,onFocusNotification:s,onFocus:a,shouldFocusInnerElementWhenReceivedFocus:l,defaultTabbableElement:c}=this.props,u=this._isImmediateDescendantOfZone(e.target);if(u)t=e.target;else for(var h=e.target;h&&h!==this._root.current;){if((0,r.isElementTabbable)(h)&&this._isImmediateDescendantOfZone(h)){t=h;break}h=(0,r.getParent)(h,f)}if(l&&e.target===this._root.current){var m=c&&"function"==typeof c&&c(this._root.current);m&&(0,r.isElementTabbable)(m)?(t=m,m.focus()):(this.focus(!0),this._activeElement&&(t=null))}var d=!this._activeElement;t&&t!==this._activeElement&&((u||d)&&this._setFocusAlignment(t,!0,!0),this._activeElement=t,d&&this._updateTabIndexes()),i&&i(this._activeElement,e),(n||o)&&e.stopPropagation(),a?a(e):s&&s()}},this._onBlur=()=>{this._setParkedFocus(!1)},this._onMouseDown=e=>{if(!this._portalContainsElement(e.target)){var{disabled:t}=this.props;if(!t){for(var i=e.target,o=[];i&&i!==this._root.current;)o.push(i),i=(0,r.getParent)(i,f);for(;o.length&&((i=o.pop())&&(0,r.isElementTabbable)(i)&&this._setActiveElement(i,!0),!(0,r.isElementFocusZone)(i)););}}},this._onKeyDown=(e,t)=>{if(!this._portalContainsElement(e.target)){var{direction:i,disabled:o,isInnerZoneKeystroke:n,pagingSupportDisabled:s,shouldEnterInnerZone:a}=this.props;if(!(o||(this.props.onKeyDown&&this.props.onKeyDown(e),e.isDefaultPrevented()||this._getDocument().activeElement===this._root.current&&this._isInnerZone))){if((a&&a(e)||n&&n(e))&&this._isImmediateDescendantOfZone(e.target)){var l=this._getFirstInnerZone();if(l){if(!l.focus(!0))return}else{if(!(0,r.isElementFocusSubZone)(e.target))return;if(!this.focusElement((0,r.getNextElement)(e.target,e.target.firstChild,!0)))return}}else{if(e.altKey)return;switch(e.which){case r.KeyCodes.space:if(this._tryInvokeClickForFocusable(e.target))break;return;case r.KeyCodes.left:if(i!==r.FocusZoneDirection.vertical&&(this._preventDefaultWhenHandled(e),this._moveFocusLeft(t)))break;return;case r.KeyCodes.right:if(i!==r.FocusZoneDirection.vertical&&(this._preventDefaultWhenHandled(e),this._moveFocusRight(t)))break;return;case r.KeyCodes.up:if(i!==r.FocusZoneDirection.horizontal&&(this._preventDefaultWhenHandled(e),this._moveFocusUp()))break;return;case r.KeyCodes.down:if(i!==r.FocusZoneDirection.horizontal&&(this._preventDefaultWhenHandled(e),this._moveFocusDown()))break;return;case r.KeyCodes.pageDown:if(!s&&this._moveFocusPaging(!0))break;return;case r.KeyCodes.pageUp:if(!s&&this._moveFocusPaging(!1))break;return;case r.KeyCodes.tab:if(this.props.allowTabKey||this.props.handleTabKey===r.FocusZoneTabbableElements.all||this.props.handleTabKey===r.FocusZoneTabbableElements.inputOnly&&this._isElementInput(e.target)){var u=!1;if(this._processingTabKey=!0,u=i!==r.FocusZoneDirection.vertical&&this._shouldWrapFocus(this._activeElement,c)?((0,r.getRTL)(t)?!e.shiftKey:e.shiftKey)?this._moveFocusLeft(t):this._moveFocusRight(t):e.shiftKey?this._moveFocusUp():this._moveFocusDown(),this._processingTabKey=!1,u)break;this.props.shouldResetActiveElementWhenTabFromZone&&(this._activeElement=null)}return;case r.KeyCodes.home:if(this._isContentEditableElement(e.target)||this._isElementInput(e.target)&&!this._shouldInputLoseFocus(e.target,!1))return!1;var h=this._root.current&&this._root.current.firstChild;if(this._root.current&&h&&this.focusElement((0,r.getNextElement)(this._root.current,h,!0)))break;return;case r.KeyCodes.end:if(this._isContentEditableElement(e.target)||this._isElementInput(e.target)&&!this._shouldInputLoseFocus(e.target,!0))return!1;var m=this._root.current&&this._root.current.lastChild;if(this._root.current&&this.focusElement((0,r.getPreviousElement)(this._root.current,m,!0,!0,!0)))break;return;case r.KeyCodes.enter:if(this._tryInvokeClickForFocusable(e.target))break;return;default:return}}e.preventDefault(),e.stopPropagation()}}},this._getHorizontalDistanceFromCenter=(e,t,i)=>{var r=this._focusAlignment.left||this._focusAlignment.x||0,o=Math.floor(i.top),n=Math.floor(t.bottom),s=Math.floor(i.bottom),a=Math.floor(t.top);return e&&o>n||!e&&s<a?r>=i.left&&r<=i.left+i.width?0:Math.abs(i.left+i.width/2-r):this._shouldWrapFocus(this._activeElement,l)?u:h},(0,r.initializeComponentRef)(this),this._id=(0,r.getId)("FocusZone"),this._focusAlignment={left:0,top:0},this._processingTabKey=!1}componentDidMount(){var{current:e}=this._root;if(m[this._id]=this,e){this._windowElement=(0,r.getWindow)(e);for(var t=(0,r.getParent)(e,f);t&&t!==this._getDocument().body&&1===t.nodeType;){if((0,r.isElementFocusZone)(t)){this._isInnerZone=!0;break}t=(0,r.getParent)(t,f)}this._isInnerZone||(d.add(this),this._windowElement&&1===d.size&&this._windowElement.addEventListener("keydown",_._onKeyDownCapture,!0)),this._root.current&&this._root.current.addEventListener("blur",this._onBlur,!0),this._updateTabIndexes(),this.props.defaultTabbableElement&&"string"==typeof this.props.defaultTabbableElement?this._activeElement=this._getDocument().querySelector(this.props.defaultTabbableElement):this.props.defaultActiveElement&&(this._activeElement=this._getDocument().querySelector(this.props.defaultActiveElement)),this.props.shouldFocusOnMount&&this.focus()}}componentDidUpdate(){var{current:e}=this._root,t=this._getDocument();if(t&&this._lastIndexPath&&(t.activeElement===t.body||null===t.activeElement||!this.props.preventFocusRestoration&&t.activeElement===e)){var i=(0,r.getFocusableByIndexPath)(e,this._lastIndexPath);i?(this._setActiveElement(i,!0),i.focus(),this._setParkedFocus(!1)):this._setParkedFocus(!0)}}componentWillUnmount(){delete m[this._id],this._isInnerZone||(d.delete(this),this._windowElement&&0===d.size&&this._windowElement.removeEventListener("keydown",_._onKeyDownCapture,!0)),this._root.current&&this._root.current.removeEventListener("blur",this._onBlur,!0),this._activeElement=null,this._defaultFocusElement=null}render(){var{as:e,elementType:t,rootProps:n,ariaDescribedBy:s,ariaLabelledBy:a,className:l}=this.props,c=(0,r.getNativeProps)(this.props,r.htmlElementProperties),u=e||t||"div";this._evaluateFocusBeforeRender();var h=(0,r.getTheme)();return i.createElement(u,Object.assign({"aria-labelledby":a,"aria-describedby":s},c,n,{className:(0,r.css)((o||(o=(0,r.mergeStyles)({selectors:{":focus":{outline:"none"}}},"ms-FocusZone")),o),l),ref:this._mergedRef(this.props.elementRef,this._root),"data-focuszone-id":this._id,onKeyDown:e=>this._onKeyDown(e,h),onFocus:this._onFocus,onMouseDownCapture:this._onMouseDown,tabIndex:0}),this.props.children)}focus(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this._root.current){if(!e&&"true"===this._root.current.getAttribute(n)&&this._isInnerZone){var t=this._getOwnerZone(this._root.current);if(t!==this._root.current){var i=m[t.getAttribute(s)];return!!i&&i.focusElement(this._root.current)}return!1}if(!e&&this._activeElement&&(0,r.elementContains)(this._root.current,this._activeElement)&&(0,r.isElementTabbable)(this._activeElement))return this._activeElement.focus(),!0;var o=this._root.current.firstChild;return this.focusElement((0,r.getNextElement)(this._root.current,o,!0))}return!1}focusLast(){if(this._root.current){var e=this._root.current&&this._root.current.lastChild;return this.focusElement((0,r.getPreviousElement)(this._root.current,e,!0,!0,!0))}return!1}focusElement(e,t){var{onBeforeFocus:i,shouldReceiveFocus:r}=this.props;return!(r&&!r(e)||i&&!i(e)||!e||(this._setActiveElement(e,t),this._activeElement&&this._activeElement.focus(),0))}setFocusAlignment(e){this._focusAlignment=e}_evaluateFocusBeforeRender(){var{current:e}=this._root,t=this._getDocument();if(t){var i=t.activeElement;if(i!==e){var o=(0,r.elementContains)(e,i,!1);this._lastIndexPath=o?(0,r.getElementIndexPath)(e,i):void 0}}}_setParkedFocus(e){var{current:t}=this._root;t&&this._isParked!==e&&(this._isParked=e,e?(this.props.allowFocusRoot||(this._parkedTabIndex=t.getAttribute("tabindex"),t.setAttribute("tabindex","-1")),t.focus()):this.props.allowFocusRoot||(this._parkedTabIndex?(t.setAttribute("tabindex",this._parkedTabIndex),this._parkedTabIndex=void 0):t.removeAttribute("tabindex")))}_setActiveElement(e,t){var i=this._activeElement;this._activeElement=e,i&&((0,r.isElementFocusZone)(i)&&this._updateTabIndexes(i),i.tabIndex=-1),this._activeElement&&(this._focusAlignment&&!t||this._setFocusAlignment(e,!0,!0),this._activeElement.tabIndex=this.props.tabIndex?this.props.tabIndex:0)}_preventDefaultWhenHandled(e){this.props.preventDefaultWhenHandled&&e.preventDefault()}_tryInvokeClickForFocusable(e){if(e===this._root.current||!this.props.shouldRaiseClicks)return!1;do{if("BUTTON"===e.tagName||"A"===e.tagName||"INPUT"===e.tagName||"TEXTAREA"===e.tagName)return!1;if(this._isImmediateDescendantOfZone(e)&&"true"===e.getAttribute(n)&&"true"!==e.getAttribute("data-disable-click-on-enter"))return(0,r.raiseClick)(e),!0;e=(0,r.getParent)(e,f)}while(e!==this._root.current);return!1}_getFirstInnerZone(e){if(!(e=e||this._activeElement||this._root.current))return null;if((0,r.isElementFocusZone)(e))return m[e.getAttribute(s)];for(var t=e.firstElementChild;t;){if((0,r.isElementFocusZone)(t))return m[t.getAttribute(s)];var i=this._getFirstInnerZone(t);if(i)return i;t=t.nextElementSibling}return null}_moveFocus(e,t,i){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],n=this._activeElement,s=-1,a=void 0,l=!1,c=this.props.direction===r.FocusZoneDirection.bidirectional;if(!n||!this._root.current)return!1;if(this._isElementInput(n)&&!this._shouldInputLoseFocus(n,e))return!1;var u=c?n.getBoundingClientRect():null;do{if(n=e?(0,r.getNextElement)(this._root.current,n):(0,r.getPreviousElement)(this._root.current,n),!c){a=n;break}if(n){var h=t(u,n.getBoundingClientRect());if(-1===h&&-1===s){a=n;break}if(h>-1&&(-1===s||h<s)&&(s=h,a=n),s>=0&&h<0)break}}while(n);if(a&&a!==this._activeElement)l=!0,this.focusElement(a);else if(this.props.isCircularNavigation&&o)return e?this.focusElement((0,r.getNextElement)(this._root.current,this._root.current.firstElementChild,!0)):this.focusElement((0,r.getPreviousElement)(this._root.current,this._root.current.lastElementChild,!0,!0,!0));return l}_moveFocusDown(){var e=-1,t=this._focusAlignment.left||this._focusAlignment.x||0;return!!this._moveFocus(!0,((i,r)=>{var o=-1,n=Math.floor(r.top),s=Math.floor(i.bottom);return n<s?this._shouldWrapFocus(this._activeElement,l)?u:h:((-1===e&&n>=s||n===e)&&(e=n,o=t>=r.left&&t<=r.left+r.width?0:Math.abs(r.left+r.width/2-t)),o)}))&&(this._setFocusAlignment(this._activeElement,!1,!0),!0)}_moveFocusUp(){var e=-1,t=this._focusAlignment.left||this._focusAlignment.x||0;return!!this._moveFocus(!1,((i,r)=>{var o=-1,n=Math.floor(r.bottom),s=Math.floor(r.top),a=Math.floor(i.top);return n>a?this._shouldWrapFocus(this._activeElement,l)?u:h:((-1===e&&n<=a||s===e)&&(e=s,o=t>=r.left&&t<=r.left+r.width?0:Math.abs(r.left+r.width/2-t)),o)}))&&(this._setFocusAlignment(this._activeElement,!1,!0),!0)}_moveFocusLeft(e){var t=this._shouldWrapFocus(this._activeElement,c);return!!this._moveFocus((0,r.getRTL)(e),((i,o)=>{var n=-1;return((0,r.getRTL)(e)?parseFloat(o.top.toFixed(3))<parseFloat(i.bottom.toFixed(3)):parseFloat(o.bottom.toFixed(3))>parseFloat(i.top.toFixed(3)))&&o.right<=i.right&&this.props.direction!==r.FocusZoneDirection.vertical?n=i.right-o.right:t||(n=h),n}),void 0,t)&&(this._setFocusAlignment(this._activeElement,!0,!1),!0)}_moveFocusRight(e){var t=this._shouldWrapFocus(this._activeElement,c);return!!this._moveFocus(!(0,r.getRTL)(e),((i,o)=>{var n=-1;return((0,r.getRTL)(e)?parseFloat(o.bottom.toFixed(3))>parseFloat(i.top.toFixed(3)):parseFloat(o.top.toFixed(3))<parseFloat(i.bottom.toFixed(3)))&&o.left>=i.left&&this.props.direction!==r.FocusZoneDirection.vertical?n=o.left-i.left:t||(n=h),n}),void 0,t)&&(this._setFocusAlignment(this._activeElement,!0,!1),!0)}_moveFocusPaging(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=this._activeElement;if(!i||!this._root.current)return!1;if(this._isElementInput(i)&&!this._shouldInputLoseFocus(i,e))return!1;var o=(0,r.findScrollableParent)(i);if(!o)return!1;var n=-1,s=void 0,a=-1,l=-1,c=o.clientHeight,u=i.getBoundingClientRect();do{if(i=e?(0,r.getNextElement)(this._root.current,i):(0,r.getPreviousElement)(this._root.current,i)){var h=i.getBoundingClientRect(),m=Math.floor(h.top),d=Math.floor(u.bottom),p=Math.floor(h.bottom),f=Math.floor(u.top),_=this._getHorizontalDistanceFromCenter(e,u,h);if(e&&m>d+c||!e&&p<f-c)break;_>-1&&(e&&m>a?(a=m,n=_,s=i):!e&&p<l?(l=p,n=_,s=i):(-1===n||_<=n)&&(n=_,s=i))}}while(i);var v=!1;if(s&&s!==this._activeElement)v=!0,this.focusElement(s),this._setFocusAlignment(s,!1,!0);else if(this.props.isCircularNavigation&&t)return e?this.focusElement((0,r.getNextElement)(this._root.current,this._root.current.firstElementChild,!0)):this.focusElement((0,r.getPreviousElement)(this._root.current,this._root.current.lastElementChild,!0,!0,!0));return v}_setFocusAlignment(e,t,i){if(this.props.direction===r.FocusZoneDirection.bidirectional&&(!this._focusAlignment||t||i)){var o=e.getBoundingClientRect(),n=o.left+o.width/2,s=o.top+o.height/2;this._focusAlignment||(this._focusAlignment={left:n,top:s}),t&&(this._focusAlignment.left=n),i&&(this._focusAlignment.top=s)}}_isImmediateDescendantOfZone(e){return this._getOwnerZone(e)===this._root.current}_getOwnerZone(e){for(var t=(0,r.getParent)(e,f);t&&t!==this._root.current&&t!==this._getDocument().body;){if((0,r.isElementFocusZone)(t))return t;t=(0,r.getParent)(t,f)}return t}_updateTabIndexes(e){var t=this.props.tabIndex?this.props.tabIndex.toString():"0";!this._activeElement&&this.props.defaultTabbableElement&&"function"==typeof this.props.defaultTabbableElement&&(this._activeElement=this.props.defaultTabbableElement(this._root.current)),!e&&this._root.current&&(this._defaultFocusElement=null,e=this._root.current,this._activeElement&&!(0,r.elementContains)(e,this._activeElement)&&(this._activeElement=null)),this._activeElement&&!(0,r.isElementTabbable)(this._activeElement)&&(this._activeElement=null);for(var i=e&&e.children,o=0;i&&o<i.length;o++){var s=i[o];(0,r.isElementFocusZone)(s)?"true"===s.getAttribute(n)&&(this._isInnerZone||(this._activeElement||this._defaultFocusElement)&&this._activeElement!==s?"-1"!==s.getAttribute(a)&&s.setAttribute(a,"-1"):(this._defaultFocusElement=s,s.getAttribute(a)!==t&&s.setAttribute(a,t))):(s.getAttribute&&"false"===s.getAttribute(n)&&s.setAttribute(a,"-1"),(0,r.isElementTabbable)(s)?this.props.disabled?s.setAttribute(a,"-1"):this._isInnerZone||(this._activeElement||this._defaultFocusElement)&&this._activeElement!==s?"-1"!==s.getAttribute(a)&&s.setAttribute(a,"-1"):(this._defaultFocusElement=s,s.getAttribute(a)!==t&&s.setAttribute(a,t)):"svg"===s.tagName&&"false"!==s.getAttribute("focusable")&&s.setAttribute("focusable","false")),this._updateTabIndexes(s)}}_isContentEditableElement(e){return e&&"true"===e.getAttribute("contenteditable")}_isElementInput(e){return!(!e||!e.tagName||"input"!==e.tagName.toLowerCase()&&"textarea"!==e.tagName.toLowerCase())}_shouldInputLoseFocus(e,t){if(!this._processingTabKey&&e&&e.type&&p.indexOf(e.type.toLowerCase())>-1){var i=e.selectionStart,r=i!==e.selectionEnd,o=e.value,n=e.readOnly;if(r||i>0&&!t&&!n||i!==o.length&&t&&!n||this.props.handleTabKey&&(!this.props.shouldInputLoseFocusOnArrowKey||!this.props.shouldInputLoseFocusOnArrowKey(e)))return!1}return!0}_shouldWrapFocus(e,t){return!this.props.checkForNoWrap||(0,r.shouldWrapFocus)(e,t)}_portalContainsElement(e){return e&&!!this._root.current&&(0,r.portalContainsElement)(e,this._root.current)}_getDocument(){return(0,r.getDocument)(this._root.current)}}_.defaultProps={isCircularNavigation:!1,direction:r.FocusZoneDirection.bidirectional,shouldRaiseClicks:!0};var v=(0,r.classNamesFunction)(),g=()=>null,b={styles:e=>{var{theme:t}=e;return{root:{selectors:{"&.is-disabled":{color:t.semanticColors.bodyText}}}}}};class E extends i.Component{constructor(e){super(e),this._focusZone=i.createRef(),this._onReduceData=e=>{var{renderedItems:t,renderedOverflowItems:i}=e,{overflowIndex:r}=e.props,o=t[r];if(o)return(t=[...t]).splice(r,1),i=[...i,o],Object.assign(Object.assign({},e),{renderedItems:t,renderedOverflowItems:i})},this._onGrowData=e=>{var{renderedItems:t,renderedOverflowItems:i}=e,{overflowIndex:r,maxDisplayedItems:o}=e.props,n=(i=[...i]).pop();if(n&&!(t.length>=o))return(t=[...t]).splice(r,0,n),Object.assign(Object.assign({},e),{renderedItems:t,renderedOverflowItems:i})},this._onRenderBreadcrumb=e=>{var{ariaLabel:t,dividerAs:o=r.Icon,onRenderItem:n,overflowAriaLabel:s,overflowIndex:a,onRenderOverflowIcon:l,overflowButtonAs:c}=e.props,{renderedOverflowItems:u,renderedItems:h}=e,m=u.map((e=>{var t=!(!e.onClick&&!e.href);return{text:e.text,name:e.text,key:e.key,onClick:e.onClick?this._onBreadcrumbClicked.bind(this,e):null,href:e.href,disabled:!t,itemProps:t?void 0:b}})),d=h.length-1,p=u&&0!==u.length,f=h.map(((e,t)=>{var s=this._onRenderItem;return e.onRender&&(s=(0,r.composeRenderFunction)(e.onRender,s)),n&&(s=(0,r.composeRenderFunction)(n,s)),i.createElement("li",{className:this._classNames.listItem,key:e.key||String(t)},s(e),(t!==d||p&&t===a-1)&&i.createElement(o,{className:this._classNames.chevron,iconName:(0,r.getRTL)(this.props.theme)?"ChevronLeft":"ChevronRight",item:e}))}));if(p){var v=l?{}:{iconName:"More"},E=l||g,I=c||r.IconButton;f.splice(a,0,i.createElement("li",{className:this._classNames.overflow,key:"overflow"},i.createElement(I,{className:this._classNames.overflowButton,iconProps:v,role:"button","aria-haspopup":"true",ariaLabel:s,onRenderMenuIcon:E,menuProps:{items:m,directionalHint:r.DirectionalHint.bottomLeftEdge}}),a!==d+1&&i.createElement(o,{className:this._classNames.chevron,iconName:(0,r.getRTL)(this.props.theme)?"ChevronLeft":"ChevronRight",item:u[u.length-1]})))}var y=(0,r.getNativeProps)(this.props,r.htmlElementProperties,["className"]);return i.createElement("div",Object.assign({className:this._classNames.root,role:"navigation","aria-label":t},y),i.createElement(_,Object.assign({componentRef:this._focusZone,direction:r.FocusZoneDirection.horizontal},this.props.focusZoneProps),i.createElement("ol",{className:this._classNames.list},f)))},this._onRenderItem=e=>{if(!e)return null;var{as:t,href:o,onClick:n,isCurrentItem:s,text:a,onRenderContent:l}=e,c=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(i[r[o]]=e[r[o]])}return i}(e,["as","href","onClick","isCurrentItem","text","onRenderContent"]),u=I;if(l&&(u=(0,r.composeRenderFunction)(l,u)),this.props.onRenderItemContent&&(u=(0,r.composeRenderFunction)(this.props.onRenderItemContent,u)),n||o)return i.createElement(r.Link,Object.assign({},c,{as:t,className:this._classNames.itemLink,href:o,"aria-current":s?"page":void 0,onClick:this._onBreadcrumbClicked.bind(this,e)}),i.createElement(r.TooltipHost,Object.assign({content:a,overflowMode:r.TooltipOverflowMode.Parent},this.props.tooltipHostProps),u(e)));var h=t||"span";return i.createElement(h,Object.assign({},c,{className:this._classNames.item}),i.createElement(r.TooltipHost,Object.assign({content:a,overflowMode:r.TooltipOverflowMode.Parent},this.props.tooltipHostProps),u(e)))},this._onBreadcrumbClicked=(e,t)=>{e.onClick&&e.onClick(t,e)},(0,r.initializeComponentRef)(this),this._validateProps(e)}focus(){this._focusZone.current&&this._focusZone.current.focus()}render(){this._validateProps(this.props);var{onReduceData:e=this._onReduceData,onGrowData:t=this._onGrowData,overflowIndex:o,maxDisplayedItems:n,items:s,className:a,theme:l,styles:c}=this.props,u=[...s],h=u.splice(o,u.length-n),m={props:this.props,renderedItems:u,renderedOverflowItems:h};return this._classNames=v(c,{className:a,theme:l}),i.createElement(r.ResizeGroup,{onRenderData:this._onRenderBreadcrumb,onReduceData:e,onGrowData:t,data:m})}_validateProps(e){var{maxDisplayedItems:t,overflowIndex:i,items:r}=e;if(i<0||t>1&&i>t-1||r.length>0&&i>r.length-1)throw new Error("Breadcrumb: overflowIndex out of range")}}function I(e){return e?i.createElement(i.Fragment,null,e.text):null}E.defaultProps={items:[],maxDisplayedItems:999,overflowIndex:0};var y={root:"ms-Breadcrumb",list:"ms-Breadcrumb-list",listItem:"ms-Breadcrumb-listItem",chevron:"ms-Breadcrumb-chevron",overflow:"ms-Breadcrumb-overflow",overflowButton:"ms-Breadcrumb-overflowButton",itemLink:"ms-Breadcrumb-itemLink",item:"ms-Breadcrumb-item"},F={whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},w=(0,r.getScreenSelector)(0,r.ScreenWidthMaxSmall),x=(0,r.getScreenSelector)(r.ScreenWidthMinMedium,r.ScreenWidthMaxMedium),C=(0,r.styled)(E,(e=>{var{className:t,theme:i}=e,{palette:o,semanticColors:n,fonts:s}=i,a=(0,r.getGlobalClassNames)(y,i),l=n.menuItemBackgroundHovered,c=n.menuItemBackgroundPressed,u=o.neutralSecondary,h=r.FontWeights.regular,m=o.neutralPrimary,d=o.neutralPrimary,p=r.FontWeights.semibold,f=o.neutralSecondary,_=o.neutralSecondary,v={fontWeight:p,color:d},g={":hover":{color:m,backgroundColor:l,cursor:"pointer",selectors:{[r.HighContrastSelector]:{color:"Highlight",backgroundColor:"transparent"}}},":active":{backgroundColor:c,color:m},"&:active:hover":{color:m,backgroundColor:c},"&:active, &:hover, &:active:hover":{textDecoration:"none"}},b={color:u,padding:"0 8px",lineHeight:36,fontSize:18,fontWeight:h};return{root:[a.root,s.medium,{margin:"11px 0 1px"},t],list:[a.list,{whiteSpace:"nowrap",padding:0,margin:0,display:"flex",alignItems:"stretch"}],listItem:[a.listItem,{listStyleType:"none",margin:"0",padding:"0",display:"flex",position:"relative",alignItems:"center",selectors:{"&:last-child .ms-Breadcrumb-itemLink":Object.assign(Object.assign({},v),{[r.HighContrastSelector]:{MsHighContrastAdjust:"auto",forcedColorAdjust:"auto"}}),"&:last-child .ms-Breadcrumb-item":v}}],chevron:[a.chevron,{color:f,fontSize:s.small.fontSize,selectors:{[r.HighContrastSelector]:Object.assign({color:"WindowText"},(0,r.getHighContrastNoAdjustStyle)()),[x]:{fontSize:8},[w]:{fontSize:8}}}],overflow:[a.overflow,{position:"relative",display:"flex",alignItems:"center"}],overflowButton:[a.overflowButton,(0,r.getFocusStyle)(i),F,{fontSize:16,color:_,height:"100%",cursor:"pointer",selectors:Object.assign(Object.assign({},g),{[w]:{padding:"4px 6px"},[x]:{fontSize:s.mediumPlus.fontSize}})}],itemLink:[a.itemLink,(0,r.getFocusStyle)(i),F,Object.assign(Object.assign({},b),{selectors:Object.assign({":focus":{color:o.neutralDark},[".".concat(r.IsFocusVisibleClassName," &:focus")]:{outline:"none"}},g)})],item:[a.item,Object.assign(Object.assign({},b),{selectors:{":hover":{cursor:"default"}}})]}}),void 0,{scope:"Breadcrumb"});function D(e){return{id:e,key:e,text:"Item "+e,clickable:!0}}var k=void 0;try{k=window}catch(e){}function T(e){if("undefined"!=typeof window&&window.document&&window.document.createElement&&void 0!==k){var t=e;return t&&t.ownerDocument&&t.ownerDocument.defaultView?t.ownerDocument.defaultView:k}}var A=function(){function e(e,t){this._timeoutIds=null,this._immediateIds=null,this._intervalIds=null,this._animationFrameIds=null,this._isDisposed=!1,this._parent=e||null,this._onErrorHandler=t,this._noop=function(){}}return e.prototype.dispose=function(){var e;if(this._isDisposed=!0,this._parent=null,this._timeoutIds){for(e in this._timeoutIds)this._timeoutIds.hasOwnProperty(e)&&this.clearTimeout(parseInt(e,10));this._timeoutIds=null}if(this._immediateIds){for(e in this._immediateIds)this._immediateIds.hasOwnProperty(e)&&this.clearImmediate(parseInt(e,10));this._immediateIds=null}if(this._intervalIds){for(e in this._intervalIds)this._intervalIds.hasOwnProperty(e)&&this.clearInterval(parseInt(e,10));this._intervalIds=null}if(this._animationFrameIds){for(e in this._animationFrameIds)this._animationFrameIds.hasOwnProperty(e)&&this.cancelAnimationFrame(parseInt(e,10));this._animationFrameIds=null}},e.prototype.setTimeout=function(e,t){var i=this,r=0;return this._isDisposed||(this._timeoutIds||(this._timeoutIds={}),r=setTimeout((function(){try{i._timeoutIds&&delete i._timeoutIds[r],e.apply(i._parent)}catch(e){i._logError(e)}}),t),this._timeoutIds[r]=!0),r},e.prototype.clearTimeout=function(e){this._timeoutIds&&this._timeoutIds[e]&&(clearTimeout(e),delete this._timeoutIds[e])},e.prototype.setImmediate=function(e,t){var i=this,r=0,o=T(t);return this._isDisposed||(this._immediateIds||(this._immediateIds={}),r=o.setTimeout((function(){try{i._immediateIds&&delete i._immediateIds[r],e.apply(i._parent)}catch(e){i._logError(e)}}),0),this._immediateIds[r]=!0),r},e.prototype.clearImmediate=function(e,t){var i=T(t);this._immediateIds&&this._immediateIds[e]&&(i.clearTimeout(e),delete this._immediateIds[e])},e.prototype.setInterval=function(e,t){var i=this,r=0;return this._isDisposed||(this._intervalIds||(this._intervalIds={}),r=setInterval((function(){try{e.apply(i._parent)}catch(e){i._logError(e)}}),t),this._intervalIds[r]=!0),r},e.prototype.clearInterval=function(e){this._intervalIds&&this._intervalIds[e]&&(clearInterval(e),delete this._intervalIds[e])},e.prototype.throttle=function(e,t,i){var r=this;if(this._isDisposed)return this._noop;var o,n,s=t||0,a=!0,l=!0,c=0,u=null;i&&"boolean"==typeof i.leading&&(a=i.leading),i&&"boolean"==typeof i.trailing&&(l=i.trailing);var h=function t(i){var h=Date.now(),m=h-c,d=a?s-m:s;return m>=s&&(!i||a)?(c=h,u&&(r.clearTimeout(u),u=null),o=e.apply(r._parent,n)):null===u&&l&&(u=r.setTimeout(t,d)),o};return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n=e,h(!0)}},e.prototype.debounce=function(e,t,i){var r=this;if(this._isDisposed){var o=function(){};return o.cancel=function(){},o.flush=function(){return null},o.pending=function(){return!1},o}var n,s,a=t||0,l=!1,c=!0,u=null,h=0,m=Date.now(),d=null;i&&"boolean"==typeof i.leading&&(l=i.leading),i&&"boolean"==typeof i.trailing&&(c=i.trailing),i&&"number"==typeof i.maxWait&&!isNaN(i.maxWait)&&(u=i.maxWait);var p=function(e){d&&(r.clearTimeout(d),d=null),m=e},f=function(t){p(t),n=e.apply(r._parent,s)},_=function e(t){var i=Date.now(),o=!1;t&&(l&&i-h>=a&&(o=!0),h=i);var s=i-h,p=a-s,_=i-m,v=!1;return null!==u&&(_>=u&&d?v=!0:p=Math.min(p,u-_)),s>=a||v||o?f(i):null!==d&&t||!c||(d=r.setTimeout(e,p)),n},v=function(){return!!d},g=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return s=e,_(!0)};return g.cancel=function(){v()&&p(Date.now())},g.flush=function(){return v()&&f(Date.now()),n},g.pending=v,g},e.prototype.requestAnimationFrame=function(e,t){var i=this,r=0,o=T(t);if(!this._isDisposed){this._animationFrameIds||(this._animationFrameIds={});var n=function(){try{i._animationFrameIds&&delete i._animationFrameIds[r],e.apply(i._parent)}catch(e){i._logError(e)}};r=o.requestAnimationFrame?o.requestAnimationFrame(n):o.setTimeout(n,0),this._animationFrameIds[r]=!0}return r},e.prototype.cancelAnimationFrame=function(e,t){var i=T(t);this._animationFrameIds&&this._animationFrameIds[e]&&(i.cancelAnimationFrame?i.cancelAnimationFrame(e):i.clearTimeout(e),delete this._animationFrameIds[e])},e.prototype._logError=function(e){this._onErrorHandler&&this._onErrorHandler(e)},e}();var O={bottom:0,left:0,right:0,top:0,overflowX:"hidden",overflowY:"hidden",position:"absolute",width:"100%",height:"100%"},P=i.memo((e=>{var{items:t,themeJSON:o,onSelected:n,setFocus:s,ariaLabel:a,tabIndex:l,maxDisplayedItems:c,overflowIndex:u}=e,h=i.useMemo((()=>{try{return o?(0,r.createTheme)(JSON.parse(o)):void 0}catch(e){console.error("Cannot parse theme",e)}}),[o]),m=i.useRef(null),d=function(){var e,t,r=(e=function(){return new A},void 0===(t=i.useRef()).current&&(t.current={value:e()}),t.current.value);return i.useEffect((function(){return function(){return r.dispose()}}),[r]),r}();i.useEffect((()=>{s&&""!==s&&m&&d.requestAnimationFrame((()=>{var e=m.current.getElementsByTagName("button");e&&e.length>0&&e[0].focus()}))}),[s,m,d]);var p=i.useMemo((()=>({tabIndex:l,shouldFocusInnerElementWhenReceivedFocus:!0,handleTabKey:1})),[l]),f=i.useCallback(((e,i)=>{var r=i&&t.find((e=>e.key===(null==i?void 0:i.key)));r&&n(r)}),[t,n]),_=function(e,t){return e.map((e=>!1===e.clickable?{id:e.id,key:e.key,text:e.text}:{id:e.id,key:e.key,text:e.text,onClick:t}))}(t,f);return i.createElement(r.ThemeProvider,{applyTo:"none",theme:h,ref:m,style:O},i.createElement(C,{items:_,focusZoneProps:p,maxDisplayedItems:c,"aria-label":a,overflowIndex:u}))}));P.displayName="CanvasBreadCrumb";class R{constructor(){this.focusKey="",this.onSelect=e=>{e&&e.data&&this.context.parameters.items.openDatasetItem(e.data.getNamedReference())}}init(e){this.context=e,this.context.mode.trackContainerResize(!0)}updateView(e){var t,r,o,n,s,a,l,c,u,h,m=this.context.parameters.InputEvent.raw;m&&this.inputEvent!==m&&m.startsWith("SetFocus")&&(this.focusKey=m);var d=e.parameters.items;(e.updatedProperties.indexOf("dataset")>-1||!this.items)&&(this.items=function(e){if(e.error||void 0===e.paging.totalResultCount)return[D("1"),D("2"),D("3")];var t={};return e.sortedRecordIds.map((i=>{var r=e.records[i],o=r.getValue("ItemKey");return void 0!==t[o]?(t[o]++,o+="_".concat(t[o])):t[o]=1,{id:r.getRecordId(),key:o,text:r.getFormattedValue("ItemDisplayName"),clickable:r.getValue("ItemClickable"),data:r}}))}(d));var p=null!==(r=null===(t=e.parameters)||void 0===t?void 0:t.AccessibilityLabel.raw)&&void 0!==r?r:"",f=null!==(n=null===(o=e.parameters)||void 0===o?void 0:o.MaxDisplayedItems.raw)&&void 0!==n?n:this.items.length;f=0===f||f>this.items.length?this.items.length:f;var _=null!==(a=null===(s=e.parameters)||void 0===s?void 0:s.OverflowIndex.raw)&&void 0!==a?a:0;_=_>=f?0:_;var v=parseInt(e.mode.allocatedWidth),g=parseInt(e.mode.allocatedHeight),b=null!==(c=null===(l=e.accessibility)||void 0===l?void 0:l.assignedTabIndex)&&void 0!==c?c:void 0,E={width:v,height:g,items:this.items,onSelected:this.onSelect,themeJSON:null!==(h=null===(u=e.parameters)||void 0===u?void 0:u.Theme.raw)&&void 0!==h?h:"",setFocus:this.focusKey,tabIndex:b,ariaLabel:p,maxDisplayedItems:f,overflowIndex:_};return i.createElement(P,E)}getOutputs(){return{}}destroy(){}}pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad=t})();
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('PowerCAT.Breadcrumb', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Breadcrumb);
} else {
	var PowerCAT = PowerCAT || {};
	PowerCAT.Breadcrumb = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Breadcrumb;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}