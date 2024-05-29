/*! For license information please see bundle.js.LICENSE.txt */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{CommandBar:()=>P});const o=React,r=FluentUIReactv8290;var i,n="data-is-focusable",s="data-focuszone-id",a="tabindex",l="data-no-vertical-wrap",u="data-no-horizontal-wrap",c=999999999,m=-999999999,h={},d=new Set,p=["text","number","password","email","tel","url","search"],f=!1;class _ extends o.Component{static getOuterZones(){return d.size}static _onKeyDownCapture(e){e.which===r.KeyCodes.tab&&d.forEach((e=>e._updateTabIndexes()))}constructor(e){super(e),this._root=o.createRef(),this._mergedRef=(0,r.createMergedRef)(),this._onFocus=e=>{if(!this._portalContainsElement(e.target)){var t,{onActiveElementChanged:o,doNotAllowFocusEventToPropagate:i,stopFocusPropagation:n,onFocusNotification:s,onFocus:a,shouldFocusInnerElementWhenReceivedFocus:l,defaultTabbableElement:u}=this.props,c=this._isImmediateDescendantOfZone(e.target);if(c)t=e.target;else for(var m=e.target;m&&m!==this._root.current;){if((0,r.isElementTabbable)(m)&&this._isImmediateDescendantOfZone(m)){t=m;break}m=(0,r.getParent)(m,f)}if(l&&e.target===this._root.current){var h=u&&"function"==typeof u&&u(this._root.current);h&&(0,r.isElementTabbable)(h)?(t=h,h.focus()):(this.focus(!0),this._activeElement&&(t=null))}var d=!this._activeElement;t&&t!==this._activeElement&&((c||d)&&this._setFocusAlignment(t,!0,!0),this._activeElement=t,d&&this._updateTabIndexes()),o&&o(this._activeElement,e),(n||i)&&e.stopPropagation(),a?a(e):s&&s()}},this._onBlur=()=>{this._setParkedFocus(!1)},this._onMouseDown=e=>{if(!this._portalContainsElement(e.target)){var{disabled:t}=this.props;if(!t){for(var o=e.target,i=[];o&&o!==this._root.current;)i.push(o),o=(0,r.getParent)(o,f);for(;i.length&&((o=i.pop())&&(0,r.isElementTabbable)(o)&&this._setActiveElement(o,!0),!(0,r.isElementFocusZone)(o)););}}},this._onKeyDown=(e,t)=>{if(!this._portalContainsElement(e.target)){var{direction:o,disabled:i,isInnerZoneKeystroke:n,pagingSupportDisabled:s,shouldEnterInnerZone:a}=this.props;if(!(i||(this.props.onKeyDown&&this.props.onKeyDown(e),e.isDefaultPrevented()||this._getDocument().activeElement===this._root.current&&this._isInnerZone))){if((a&&a(e)||n&&n(e))&&this._isImmediateDescendantOfZone(e.target)){var l=this._getFirstInnerZone();if(l){if(!l.focus(!0))return}else{if(!(0,r.isElementFocusSubZone)(e.target))return;if(!this.focusElement((0,r.getNextElement)(e.target,e.target.firstChild,!0)))return}}else{if(e.altKey)return;switch(e.which){case r.KeyCodes.space:if(this._tryInvokeClickForFocusable(e.target))break;return;case r.KeyCodes.left:if(o!==r.FocusZoneDirection.vertical&&(this._preventDefaultWhenHandled(e),this._moveFocusLeft(t)))break;return;case r.KeyCodes.right:if(o!==r.FocusZoneDirection.vertical&&(this._preventDefaultWhenHandled(e),this._moveFocusRight(t)))break;return;case r.KeyCodes.up:if(o!==r.FocusZoneDirection.horizontal&&(this._preventDefaultWhenHandled(e),this._moveFocusUp()))break;return;case r.KeyCodes.down:if(o!==r.FocusZoneDirection.horizontal&&(this._preventDefaultWhenHandled(e),this._moveFocusDown()))break;return;case r.KeyCodes.pageDown:if(!s&&this._moveFocusPaging(!0))break;return;case r.KeyCodes.pageUp:if(!s&&this._moveFocusPaging(!1))break;return;case r.KeyCodes.tab:if(this.props.allowTabKey||this.props.handleTabKey===r.FocusZoneTabbableElements.all||this.props.handleTabKey===r.FocusZoneTabbableElements.inputOnly&&this._isElementInput(e.target)){var c=!1;if(this._processingTabKey=!0,c=o!==r.FocusZoneDirection.vertical&&this._shouldWrapFocus(this._activeElement,u)?((0,r.getRTL)(t)?!e.shiftKey:e.shiftKey)?this._moveFocusLeft(t):this._moveFocusRight(t):e.shiftKey?this._moveFocusUp():this._moveFocusDown(),this._processingTabKey=!1,c)break;this.props.shouldResetActiveElementWhenTabFromZone&&(this._activeElement=null)}return;case r.KeyCodes.home:if(this._isContentEditableElement(e.target)||this._isElementInput(e.target)&&!this._shouldInputLoseFocus(e.target,!1))return!1;var m=this._root.current&&this._root.current.firstChild;if(this._root.current&&m&&this.focusElement((0,r.getNextElement)(this._root.current,m,!0)))break;return;case r.KeyCodes.end:if(this._isContentEditableElement(e.target)||this._isElementInput(e.target)&&!this._shouldInputLoseFocus(e.target,!0))return!1;var h=this._root.current&&this._root.current.lastChild;if(this._root.current&&this.focusElement((0,r.getPreviousElement)(this._root.current,h,!0,!0,!0)))break;return;case r.KeyCodes.enter:if(this._tryInvokeClickForFocusable(e.target))break;return;default:return}}e.preventDefault(),e.stopPropagation()}}},this._getHorizontalDistanceFromCenter=(e,t,o)=>{var r=this._focusAlignment.left||this._focusAlignment.x||0,i=Math.floor(o.top),n=Math.floor(t.bottom),s=Math.floor(o.bottom),a=Math.floor(t.top);return e&&i>n||!e&&s<a?r>=o.left&&r<=o.left+o.width?0:Math.abs(o.left+o.width/2-r):this._shouldWrapFocus(this._activeElement,l)?c:m},(0,r.initializeComponentRef)(this),this._id=(0,r.getId)("FocusZone"),this._focusAlignment={left:0,top:0},this._processingTabKey=!1}componentDidMount(){var{current:e}=this._root;if(h[this._id]=this,e){this._windowElement=(0,r.getWindow)(e);for(var t=(0,r.getParent)(e,f);t&&t!==this._getDocument().body&&1===t.nodeType;){if((0,r.isElementFocusZone)(t)){this._isInnerZone=!0;break}t=(0,r.getParent)(t,f)}this._isInnerZone||(d.add(this),this._windowElement&&1===d.size&&this._windowElement.addEventListener("keydown",_._onKeyDownCapture,!0)),this._root.current&&this._root.current.addEventListener("blur",this._onBlur,!0),this._updateTabIndexes(),this.props.defaultTabbableElement&&"string"==typeof this.props.defaultTabbableElement?this._activeElement=this._getDocument().querySelector(this.props.defaultTabbableElement):this.props.defaultActiveElement&&(this._activeElement=this._getDocument().querySelector(this.props.defaultActiveElement)),this.props.shouldFocusOnMount&&this.focus()}}componentDidUpdate(){var{current:e}=this._root,t=this._getDocument();if(t&&this._lastIndexPath&&(t.activeElement===t.body||null===t.activeElement||!this.props.preventFocusRestoration&&t.activeElement===e)){var o=(0,r.getFocusableByIndexPath)(e,this._lastIndexPath);o?(this._setActiveElement(o,!0),o.focus(),this._setParkedFocus(!1)):this._setParkedFocus(!0)}}componentWillUnmount(){delete h[this._id],this._isInnerZone||(d.delete(this),this._windowElement&&0===d.size&&this._windowElement.removeEventListener("keydown",_._onKeyDownCapture,!0)),this._root.current&&this._root.current.removeEventListener("blur",this._onBlur,!0),this._activeElement=null,this._defaultFocusElement=null}render(){var{as:e,elementType:t,rootProps:n,ariaDescribedBy:s,ariaLabelledBy:a,className:l}=this.props,u=(0,r.getNativeProps)(this.props,r.htmlElementProperties),c=e||t||"div";this._evaluateFocusBeforeRender();var m=(0,r.getTheme)();return o.createElement(c,Object.assign({"aria-labelledby":a,"aria-describedby":s},u,n,{className:(0,r.css)((i||(i=(0,r.mergeStyles)({selectors:{":focus":{outline:"none"}}},"ms-FocusZone")),i),l),ref:this._mergedRef(this.props.elementRef,this._root),"data-focuszone-id":this._id,onKeyDown:e=>this._onKeyDown(e,m),onFocus:this._onFocus,onMouseDownCapture:this._onMouseDown,tabIndex:0}),this.props.children)}focus(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this._root.current){if(!e&&"true"===this._root.current.getAttribute(n)&&this._isInnerZone){var t=this._getOwnerZone(this._root.current);if(t!==this._root.current){var o=h[t.getAttribute(s)];return!!o&&o.focusElement(this._root.current)}return!1}if(!e&&this._activeElement&&(0,r.elementContains)(this._root.current,this._activeElement)&&(0,r.isElementTabbable)(this._activeElement))return this._activeElement.focus(),!0;var i=this._root.current.firstChild;return this.focusElement((0,r.getNextElement)(this._root.current,i,!0))}return!1}focusLast(){if(this._root.current){var e=this._root.current&&this._root.current.lastChild;return this.focusElement((0,r.getPreviousElement)(this._root.current,e,!0,!0,!0))}return!1}focusElement(e,t){var{onBeforeFocus:o,shouldReceiveFocus:r}=this.props;return!(r&&!r(e)||o&&!o(e)||!e||(this._setActiveElement(e,t),this._activeElement&&this._activeElement.focus(),0))}setFocusAlignment(e){this._focusAlignment=e}_evaluateFocusBeforeRender(){var{current:e}=this._root,t=this._getDocument();if(t){var o=t.activeElement;if(o!==e){var i=(0,r.elementContains)(e,o,!1);this._lastIndexPath=i?(0,r.getElementIndexPath)(e,o):void 0}}}_setParkedFocus(e){var{current:t}=this._root;t&&this._isParked!==e&&(this._isParked=e,e?(this.props.allowFocusRoot||(this._parkedTabIndex=t.getAttribute("tabindex"),t.setAttribute("tabindex","-1")),t.focus()):this.props.allowFocusRoot||(this._parkedTabIndex?(t.setAttribute("tabindex",this._parkedTabIndex),this._parkedTabIndex=void 0):t.removeAttribute("tabindex")))}_setActiveElement(e,t){var o=this._activeElement;this._activeElement=e,o&&((0,r.isElementFocusZone)(o)&&this._updateTabIndexes(o),o.tabIndex=-1),this._activeElement&&(this._focusAlignment&&!t||this._setFocusAlignment(e,!0,!0),this._activeElement.tabIndex=this.props.tabIndex?this.props.tabIndex:0)}_preventDefaultWhenHandled(e){this.props.preventDefaultWhenHandled&&e.preventDefault()}_tryInvokeClickForFocusable(e){if(e===this._root.current||!this.props.shouldRaiseClicks)return!1;do{if("BUTTON"===e.tagName||"A"===e.tagName||"INPUT"===e.tagName||"TEXTAREA"===e.tagName)return!1;if(this._isImmediateDescendantOfZone(e)&&"true"===e.getAttribute(n)&&"true"!==e.getAttribute("data-disable-click-on-enter"))return(0,r.raiseClick)(e),!0;e=(0,r.getParent)(e,f)}while(e!==this._root.current);return!1}_getFirstInnerZone(e){if(!(e=e||this._activeElement||this._root.current))return null;if((0,r.isElementFocusZone)(e))return h[e.getAttribute(s)];for(var t=e.firstElementChild;t;){if((0,r.isElementFocusZone)(t))return h[t.getAttribute(s)];var o=this._getFirstInnerZone(t);if(o)return o;t=t.nextElementSibling}return null}_moveFocus(e,t,o){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],n=this._activeElement,s=-1,a=void 0,l=!1,u=this.props.direction===r.FocusZoneDirection.bidirectional;if(!n||!this._root.current)return!1;if(this._isElementInput(n)&&!this._shouldInputLoseFocus(n,e))return!1;var c=u?n.getBoundingClientRect():null;do{if(n=e?(0,r.getNextElement)(this._root.current,n):(0,r.getPreviousElement)(this._root.current,n),!u){a=n;break}if(n){var m=t(c,n.getBoundingClientRect());if(-1===m&&-1===s){a=n;break}if(m>-1&&(-1===s||m<s)&&(s=m,a=n),s>=0&&m<0)break}}while(n);if(a&&a!==this._activeElement)l=!0,this.focusElement(a);else if(this.props.isCircularNavigation&&i)return e?this.focusElement((0,r.getNextElement)(this._root.current,this._root.current.firstElementChild,!0)):this.focusElement((0,r.getPreviousElement)(this._root.current,this._root.current.lastElementChild,!0,!0,!0));return l}_moveFocusDown(){var e=-1,t=this._focusAlignment.left||this._focusAlignment.x||0;return!!this._moveFocus(!0,((o,r)=>{var i=-1,n=Math.floor(r.top),s=Math.floor(o.bottom);return n<s?this._shouldWrapFocus(this._activeElement,l)?c:m:((-1===e&&n>=s||n===e)&&(e=n,i=t>=r.left&&t<=r.left+r.width?0:Math.abs(r.left+r.width/2-t)),i)}))&&(this._setFocusAlignment(this._activeElement,!1,!0),!0)}_moveFocusUp(){var e=-1,t=this._focusAlignment.left||this._focusAlignment.x||0;return!!this._moveFocus(!1,((o,r)=>{var i=-1,n=Math.floor(r.bottom),s=Math.floor(r.top),a=Math.floor(o.top);return n>a?this._shouldWrapFocus(this._activeElement,l)?c:m:((-1===e&&n<=a||s===e)&&(e=s,i=t>=r.left&&t<=r.left+r.width?0:Math.abs(r.left+r.width/2-t)),i)}))&&(this._setFocusAlignment(this._activeElement,!1,!0),!0)}_moveFocusLeft(e){var t=this._shouldWrapFocus(this._activeElement,u);return!!this._moveFocus((0,r.getRTL)(e),((o,i)=>{var n=-1;return((0,r.getRTL)(e)?parseFloat(i.top.toFixed(3))<parseFloat(o.bottom.toFixed(3)):parseFloat(i.bottom.toFixed(3))>parseFloat(o.top.toFixed(3)))&&i.right<=o.right&&this.props.direction!==r.FocusZoneDirection.vertical?n=o.right-i.right:t||(n=m),n}),void 0,t)&&(this._setFocusAlignment(this._activeElement,!0,!1),!0)}_moveFocusRight(e){var t=this._shouldWrapFocus(this._activeElement,u);return!!this._moveFocus(!(0,r.getRTL)(e),((o,i)=>{var n=-1;return((0,r.getRTL)(e)?parseFloat(i.bottom.toFixed(3))>parseFloat(o.top.toFixed(3)):parseFloat(i.top.toFixed(3))<parseFloat(o.bottom.toFixed(3)))&&i.left>=o.left&&this.props.direction!==r.FocusZoneDirection.vertical?n=i.left-o.left:t||(n=m),n}),void 0,t)&&(this._setFocusAlignment(this._activeElement,!0,!1),!0)}_moveFocusPaging(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=this._activeElement;if(!o||!this._root.current)return!1;if(this._isElementInput(o)&&!this._shouldInputLoseFocus(o,e))return!1;var i=(0,r.findScrollableParent)(o);if(!i)return!1;var n=-1,s=void 0,a=-1,l=-1,u=i.clientHeight,c=o.getBoundingClientRect();do{if(o=e?(0,r.getNextElement)(this._root.current,o):(0,r.getPreviousElement)(this._root.current,o)){var m=o.getBoundingClientRect(),h=Math.floor(m.top),d=Math.floor(c.bottom),p=Math.floor(m.bottom),f=Math.floor(c.top),_=this._getHorizontalDistanceFromCenter(e,c,m);if(e&&h>d+u||!e&&p<f-u)break;_>-1&&(e&&h>a?(a=h,n=_,s=o):!e&&p<l?(l=p,n=_,s=o):(-1===n||_<=n)&&(n=_,s=o))}}while(o);var v=!1;if(s&&s!==this._activeElement)v=!0,this.focusElement(s),this._setFocusAlignment(s,!1,!0);else if(this.props.isCircularNavigation&&t)return e?this.focusElement((0,r.getNextElement)(this._root.current,this._root.current.firstElementChild,!0)):this.focusElement((0,r.getPreviousElement)(this._root.current,this._root.current.lastElementChild,!0,!0,!0));return v}_setFocusAlignment(e,t,o){if(this.props.direction===r.FocusZoneDirection.bidirectional&&(!this._focusAlignment||t||o)){var i=e.getBoundingClientRect(),n=i.left+i.width/2,s=i.top+i.height/2;this._focusAlignment||(this._focusAlignment={left:n,top:s}),t&&(this._focusAlignment.left=n),o&&(this._focusAlignment.top=s)}}_isImmediateDescendantOfZone(e){return this._getOwnerZone(e)===this._root.current}_getOwnerZone(e){for(var t=(0,r.getParent)(e,f);t&&t!==this._root.current&&t!==this._getDocument().body;){if((0,r.isElementFocusZone)(t))return t;t=(0,r.getParent)(t,f)}return t}_updateTabIndexes(e){var t=this.props.tabIndex?this.props.tabIndex.toString():"0";!this._activeElement&&this.props.defaultTabbableElement&&"function"==typeof this.props.defaultTabbableElement&&(this._activeElement=this.props.defaultTabbableElement(this._root.current)),!e&&this._root.current&&(this._defaultFocusElement=null,e=this._root.current,this._activeElement&&!(0,r.elementContains)(e,this._activeElement)&&(this._activeElement=null)),this._activeElement&&!(0,r.isElementTabbable)(this._activeElement)&&(this._activeElement=null);for(var o=e&&e.children,i=0;o&&i<o.length;i++){var s=o[i];(0,r.isElementFocusZone)(s)?"true"===s.getAttribute(n)&&(this._isInnerZone||(this._activeElement||this._defaultFocusElement)&&this._activeElement!==s?"-1"!==s.getAttribute(a)&&s.setAttribute(a,"-1"):(this._defaultFocusElement=s,s.getAttribute(a)!==t&&s.setAttribute(a,t))):(s.getAttribute&&"false"===s.getAttribute(n)&&s.setAttribute(a,"-1"),(0,r.isElementTabbable)(s)?this.props.disabled?s.setAttribute(a,"-1"):this._isInnerZone||(this._activeElement||this._defaultFocusElement)&&this._activeElement!==s?"-1"!==s.getAttribute(a)&&s.setAttribute(a,"-1"):(this._defaultFocusElement=s,s.getAttribute(a)!==t&&s.setAttribute(a,t)):"svg"===s.tagName&&"false"!==s.getAttribute("focusable")&&s.setAttribute("focusable","false")),this._updateTabIndexes(s)}}_isContentEditableElement(e){return e&&"true"===e.getAttribute("contenteditable")}_isElementInput(e){return!(!e||!e.tagName||"input"!==e.tagName.toLowerCase()&&"textarea"!==e.tagName.toLowerCase())}_shouldInputLoseFocus(e,t){if(!this._processingTabKey&&e&&e.type&&p.indexOf(e.type.toLowerCase())>-1){var o=e.selectionStart,r=o!==e.selectionEnd,i=e.value,n=e.readOnly;if(r||o>0&&!t&&!n||o!==i.length&&t&&!n||this.props.handleTabKey&&(!this.props.shouldInputLoseFocusOnArrowKey||!this.props.shouldInputLoseFocusOnArrowKey(e)))return!1}return!0}_shouldWrapFocus(e,t){return!this.props.checkForNoWrap||(0,r.shouldWrapFocus)(e,t)}_portalContainsElement(e){return e&&!!this._root.current&&(0,r.portalContainsElement)(e,this._root.current)}_getDocument(){return(0,r.getDocument)(this._root.current)}}_.defaultProps={isCircularNavigation:!1,direction:r.FocusZoneDirection.bidirectional,shouldRaiseClicks:!0};var v=(0,r.memoizeFunction)((e=>{var t={height:"100%"},o={whiteSpace:"nowrap"},r=e||{},{root:i,label:n}=r,s=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(o[r[i]]=e[r[i]])}return o}(r,["root","label"]);return Object.assign(Object.assign({},s),{root:i?[t,i]:t,label:n?[o,n]:o})})),g=(0,r.classNamesFunction)();class b extends o.Component{constructor(e){super(e),this._overflowSet=o.createRef(),this._resizeGroup=o.createRef(),this._onRenderData=e=>{var{ariaLabel:t,primaryGroupAriaLabel:i,farItemsGroupAriaLabel:n}=this.props,s=e.farItems&&e.farItems.length>0;return o.createElement(_,{className:(0,r.css)(this._classNames.root),direction:r.FocusZoneDirection.horizontal,role:"menubar","aria-label":t,tabIndex:this.props.tabIndex,shouldFocusInnerElementWhenReceivedFocus:!0},o.createElement(r.OverflowSet,{role:s?"group":"none","aria-label":s?i:void 0,componentRef:this._overflowSet,className:(0,r.css)(this._classNames.primarySet),items:e.primaryItems,overflowItems:e.overflowItems.length?e.overflowItems:void 0,onRenderItem:this._onRenderItem,onRenderOverflowButton:this._onRenderOverflowButton}),s&&o.createElement(r.OverflowSet,{role:"group","aria-label":n,className:(0,r.css)(this._classNames.secondarySet),items:e.farItems,onRenderItem:this._onRenderItem,onRenderOverflowButton:r.nullRender}))},this._onRenderItem=e=>{if(e.onRender)return e.onRender(e,(()=>{}));var t=e.text||e.name,i=Object.assign(Object.assign({allowDisabledFocus:!0,role:"menuitem"},e),{styles:v(e.buttonStyles),className:(0,r.css)("ms-CommandBarItem-link",e.className),text:e.iconOnly?void 0:t,menuProps:e.subMenuProps,onClick:this._onButtonClick(e)});return e.iconOnly&&(void 0!==t||e.tooltipHostProps)?o.createElement(r.TooltipHost,Object.assign({role:"none",content:t,setAriaDescribedBy:!1},e.tooltipHostProps),this._commandButton(e,i)):this._commandButton(e,i)},this._commandButton=(e,t)=>{var i=this.props.buttonAs,n=e.commandBarButtonAs,s=r.CommandBarButton;return n&&(s=(0,r.composeComponentAs)(n,s)),i&&(s=(0,r.composeComponentAs)(i,s)),o.createElement(s,Object.assign({},t))},this._onRenderOverflowButton=e=>{var{overflowButtonProps:t={}}=this.props,i=[...t.menuProps?t.menuProps.items:[],...e],n=Object.assign(Object.assign({role:"menuitem"},t),{styles:Object.assign({menuIcon:{fontSize:"17px"}},t.styles),className:(0,r.css)("ms-CommandBar-overflowButton",t.className),menuProps:Object.assign(Object.assign({},t.menuProps),{items:i}),menuIconProps:Object.assign({iconName:"More"},t.menuIconProps)}),s=this.props.overflowButtonAs?(0,r.composeComponentAs)(this.props.overflowButtonAs,r.CommandBarButton):r.CommandBarButton;return o.createElement(s,Object.assign({},n))},this._onReduceData=e=>{var{shiftOnReduce:t,onDataReduced:o}=this.props,{primaryItems:r,overflowItems:i,cacheKey:n}=e,s=r[t?0:r.length-1];if(void 0!==s){s.renderedInOverflow=!0,i=[s,...i],r=t?r.slice(1):r.slice(0,-1);var a=Object.assign(Object.assign({},e),{primaryItems:r,overflowItems:i});return n=this._computeCacheKey({primaryItems:r,overflow:i.length>0}),o&&o(s),a.cacheKey=n,a}},this._onGrowData=e=>{var{shiftOnReduce:t,onDataGrown:o}=this.props,{minimumOverflowItems:r}=e,{primaryItems:i,overflowItems:n,cacheKey:s}=e,a=n[0];if(void 0!==a&&n.length>r){a.renderedInOverflow=!1,n=n.slice(1),i=t?[a,...i]:[...i,a];var l=Object.assign(Object.assign({},e),{primaryItems:i,overflowItems:n});return s=this._computeCacheKey({primaryItems:i,overflow:n.length>0}),o&&o(a),l.cacheKey=s,l}},(0,r.initializeComponentRef)(this)}render(){var{items:e,overflowItems:t,farItems:i,styles:n,theme:s,dataDidRender:a,onReduceData:l=this._onReduceData,onGrowData:u=this._onGrowData,resizeGroupAs:c=r.ResizeGroup}=this.props,m={primaryItems:[...e],overflowItems:[...t],minimumOverflowItems:[...t].length,farItems:i,cacheKey:this._computeCacheKey({primaryItems:[...e],overflow:t&&t.length>0})};this._classNames=g(n,{theme:s});var h=(0,r.getNativeProps)(this.props,r.divProperties);return o.createElement(c,Object.assign({},h,{componentRef:this._resizeGroup,data:m,onReduceData:l,onGrowData:u,onRenderData:this._onRenderData,dataDidRender:a,tabIndex:void 0}))}focus(){var{current:e}=this._overflowSet;e&&e.focus()}remeasure(){this._resizeGroup.current&&this._resizeGroup.current.remeasure()}_onButtonClick(e){return t=>{e.inactive||e.onClick&&e.onClick(t,e)}}_computeCacheKey(e){var{primaryItems:t,overflow:o}=e;return[t&&t.reduce(((e,t)=>{var{cacheKey:o=t.key}=t;return e+o}),""),o?"overflow":""].join("")}}b.defaultProps={items:[],overflowItems:[]};var I=(0,r.styled)(b,(e=>{var{className:t,theme:o}=e,{semanticColors:r}=o;return{root:[o.fonts.medium,"ms-CommandBar",{display:"flex",backgroundColor:r.bodyBackground,padding:"0 14px 0 24px",height:44},t],primarySet:["ms-CommandBar-primaryCommand",{flexGrow:"1",display:"flex",alignItems:"stretch"}],secondarySet:["ms-CommandBar-secondaryCommand",{flexShrink:"0",display:"flex",alignItems:"stretch"}]}}),void 0,{scope:"CommandBar"}),y=void 0;try{y=window}catch(e){}function E(e){if("undefined"!=typeof window&&window.document&&window.document.createElement&&void 0!==y){var t=e;return t&&t.ownerDocument&&t.ownerDocument.defaultView?t.ownerDocument.defaultView:y}}var F=function(){function e(e,t){this._timeoutIds=null,this._immediateIds=null,this._intervalIds=null,this._animationFrameIds=null,this._isDisposed=!1,this._parent=e||null,this._onErrorHandler=t,this._noop=function(){}}return e.prototype.dispose=function(){var e;if(this._isDisposed=!0,this._parent=null,this._timeoutIds){for(e in this._timeoutIds)this._timeoutIds.hasOwnProperty(e)&&this.clearTimeout(parseInt(e,10));this._timeoutIds=null}if(this._immediateIds){for(e in this._immediateIds)this._immediateIds.hasOwnProperty(e)&&this.clearImmediate(parseInt(e,10));this._immediateIds=null}if(this._intervalIds){for(e in this._intervalIds)this._intervalIds.hasOwnProperty(e)&&this.clearInterval(parseInt(e,10));this._intervalIds=null}if(this._animationFrameIds){for(e in this._animationFrameIds)this._animationFrameIds.hasOwnProperty(e)&&this.cancelAnimationFrame(parseInt(e,10));this._animationFrameIds=null}},e.prototype.setTimeout=function(e,t){var o=this,r=0;return this._isDisposed||(this._timeoutIds||(this._timeoutIds={}),r=setTimeout((function(){try{o._timeoutIds&&delete o._timeoutIds[r],e.apply(o._parent)}catch(e){o._logError(e)}}),t),this._timeoutIds[r]=!0),r},e.prototype.clearTimeout=function(e){this._timeoutIds&&this._timeoutIds[e]&&(clearTimeout(e),delete this._timeoutIds[e])},e.prototype.setImmediate=function(e,t){var o=this,r=0,i=E(t);return this._isDisposed||(this._immediateIds||(this._immediateIds={}),r=i.setTimeout((function(){try{o._immediateIds&&delete o._immediateIds[r],e.apply(o._parent)}catch(e){o._logError(e)}}),0),this._immediateIds[r]=!0),r},e.prototype.clearImmediate=function(e,t){var o=E(t);this._immediateIds&&this._immediateIds[e]&&(o.clearTimeout(e),delete this._immediateIds[e])},e.prototype.setInterval=function(e,t){var o=this,r=0;return this._isDisposed||(this._intervalIds||(this._intervalIds={}),r=setInterval((function(){try{e.apply(o._parent)}catch(e){o._logError(e)}}),t),this._intervalIds[r]=!0),r},e.prototype.clearInterval=function(e){this._intervalIds&&this._intervalIds[e]&&(clearInterval(e),delete this._intervalIds[e])},e.prototype.throttle=function(e,t,o){var r=this;if(this._isDisposed)return this._noop;var i,n,s=t||0,a=!0,l=!0,u=0,c=null;o&&"boolean"==typeof o.leading&&(a=o.leading),o&&"boolean"==typeof o.trailing&&(l=o.trailing);var m=function t(o){var m=Date.now(),h=m-u,d=a?s-h:s;return h>=s&&(!o||a)?(u=m,c&&(r.clearTimeout(c),c=null),i=e.apply(r._parent,n)):null===c&&l&&(c=r.setTimeout(t,d)),i};return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n=e,m(!0)}},e.prototype.debounce=function(e,t,o){var r=this;if(this._isDisposed){var i=function(){};return i.cancel=function(){},i.flush=function(){return null},i.pending=function(){return!1},i}var n,s,a=t||0,l=!1,u=!0,c=null,m=0,h=Date.now(),d=null;o&&"boolean"==typeof o.leading&&(l=o.leading),o&&"boolean"==typeof o.trailing&&(u=o.trailing),o&&"number"==typeof o.maxWait&&!isNaN(o.maxWait)&&(c=o.maxWait);var p=function(e){d&&(r.clearTimeout(d),d=null),h=e},f=function(t){p(t),n=e.apply(r._parent,s)},_=function e(t){var o=Date.now(),i=!1;t&&(l&&o-m>=a&&(i=!0),m=o);var s=o-m,p=a-s,_=o-h,v=!1;return null!==c&&(_>=c&&d?v=!0:p=Math.min(p,c-_)),s>=a||v||i?f(o):null!==d&&t||!u||(d=r.setTimeout(e,p)),n},v=function(){return!!d},g=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return s=e,_(!0)};return g.cancel=function(){v()&&p(Date.now())},g.flush=function(){return v()&&f(Date.now()),n},g.pending=v,g},e.prototype.requestAnimationFrame=function(e,t){var o=this,r=0,i=E(t);if(!this._isDisposed){this._animationFrameIds||(this._animationFrameIds={});var n=function(){try{o._animationFrameIds&&delete o._animationFrameIds[r],e.apply(o._parent)}catch(e){o._logError(e)}};r=i.requestAnimationFrame?i.requestAnimationFrame(n):i.setTimeout(n,0),this._animationFrameIds[r]=!0}return r},e.prototype.cancelAnimationFrame=function(e,t){var o=E(t);this._animationFrameIds&&this._animationFrameIds[e]&&(o.cancelAnimationFrame?o.cancelAnimationFrame(e):o.clearTimeout(e),delete this._animationFrameIds[e])},e.prototype._logError=function(e){this._onErrorHandler&&this._onErrorHandler(e)},e}();function w(e){return{id:e,key:e,name:"Item "+e,iconName:"Unknown"}}function C(e,t,o){return e.filter((e=>!e.parentItemKey&&!1!==e.visible)).map((r=>D(e,r,t,o)))}function D(e,t,o,i){var n=e.filter((e=>e.parentItemKey===t.key&&e!==t&&!1!==e.visible)).map((t=>D(e,t,o,i))),s={root:{background:"rgba(255, 255, 255,0)"}},a=t.iconName&&{iconName:t.iconName};if(a&&t.iconColor){var l=t.iconColor;a.styles={root:{color:t.iconColor+" !important"}};var u=(0,r.getColorFromString)(l);if(u){var c=(0,r.getShade)(u,r.Shade.Shade8),m={color:(null==c?void 0:c.str)+" !important"};s.iconHovered=m,s.iconPressed=m,s.iconExpanded=m,s.iconChecked=m,s.iconExpandedHovered=m}}var h={key:t.key,text:t.name,disabled:!1===t.enabled||o,onClick:i,iconOnly:!0===t.iconOnly,iconProps:a,split:t.split,canCheck:void 0!==t.checked,checked:t.checked,data:t,buttonStyles:s,subMenuProps:n.length>0?{items:n}:void 0};return!0===t.isHeader&&n.length>0?(h.itemType=r.ContextualMenuItemType.Section,h.sectionProps={title:t.name,topDivider:t.topDivider,bottomDivider:t.divider,items:n}):!0===t.isHeader?h.itemType=r.ContextualMenuItemType.Header:!0===t.divider?h.itemType=r.ContextualMenuItemType.Divider:(h.itemType=r.ContextualMenuItemType.Normal,h.subMenuProps=n.length>0?{items:n}:void 0),h}function x(e){return A(e,void 0)}function A(e,t){return null===e?t:e}var T={ariaLabel:"More commands"},O=o.memo((e=>{var t,{items:i,width:n,height:s,disabled:a,onSelected:l,tabIndex:u,ariaLabel:c,setFocus:m,themeJSON:h,visible:d}=e,p=o.useCallback(((e,t)=>((null==t?void 0:t.canCheck)&&(null==e||e.preventDefault()),l(null==t?void 0:t.data),!0)),[l]),f=o.useMemo((()=>{var{rootItems:e,farItems:t,overflowItems:o}=function(e,t,o){return{rootItems:C(e.filter((e=>!0!==e.farItem&&!0!==e.overflow)),t,o),farItems:C(e.filter((e=>!0===e.farItem&&!0!==e.overflow)),t,o),overflowItems:C(e.filter((e=>!0===e.overflow)),t,o)}}(i,!0===a,p);return{rootItems:e,farItems:t,overflowItems:o}}),[i,a,p]),_=o.useMemo((()=>({display:"block",position:"absolute",width:n,height:s})),[n,s]),v=o.useMemo((()=>({root:{height:s,paddingLeft:0,background:"rgba(255, 255, 255,0)",minWidth:0}})),[s]),g=o.useMemo((()=>{try{return h?(0,r.createTheme)(JSON.parse(h)):void 0}catch(e){console.error("Cannot parse theme",e)}}),[h]),b=o.useRef(null),y=((t=o.useRef()).current||(t.current=new F),o.useEffect((function(){return function(){var e;null===(e=t.current)||void 0===e||e.dispose(),t.current=void 0}}),[]),t.current);o.useEffect((()=>{m&&""!==m&&y.requestAnimationFrame((()=>{var e=b.current.getElementsByTagName("button");e&&e.length>0&&e[0].focus()}))}),[m,b,y]);var E=o.useRef(null);o.useEffect((()=>{var e;E.current&&(null===(e=E.current)||void 0===e||e.remeasure())}),[n,i,d]);var w=i.length>0;return o.createElement(r.ThemeProvider,{applyTo:"none",theme:g,ref:b,style:_},w&&o.createElement(I,{componentRef:E,className:"PowerCATCommandBar",tabIndex:u,styles:v,items:f.rootItems,overflowItems:f.overflowItems,overflowButtonProps:T,farItems:f.farItems,ariaLabel:c||"Command Bar"}))}));O.displayName="CanvasCommandBar";class P{constructor(){this.focusKey="",this.onSelect=e=>{e&&e.data&&this.context.parameters.items.openDatasetItem(e.data.getNamedReference())}}init(e){this.context=e,this.context.mode.trackContainerResize(!0),this.context.parameters.items.paging.setPageSize(500)}updateView(e){var t,r,i=this.context.parameters.InputEvent.raw;i&&this.inputEvent!==i&&i.startsWith("SetFocus")&&(this.focusKey=i);var n=e.parameters.items;(e.updatedProperties.indexOf("dataset")>-1||!this.items)&&(this.items=function(e){if(e.error||void 0===e.paging.totalResultCount)return[w("1"),w("2"),w("3")];var t={};return e.sortedRecordIds.map((o=>{var r,i,n,s,a=e.records[o],l=null!==(r=a.getFormattedValue("ItemKey"))&&void 0!==r?r:"";return void 0!==t[l]?(t[l]++,l+="_".concat(t[l])):t[l]=1,{id:a.getRecordId(),key:l,name:a.getFormattedValue("ItemDisplayName"),enabled:A(a.getValue("ItemEnabled"),!0),iconName:a.getFormattedValue("ItemIconName"),iconColor:a.getFormattedValue("ItemIconColor"),farItem:x(a.getValue("ItemFarItem")),overflow:x(a.getValue("ItemOverflow")),parentItemKey:a.getFormattedValue("ItemParentKey"),iconOnly:x(a.getValue("ItemIconOnly")),checked:x(a.getValue("ItemChecked")),visible:A(a.getValue("ItemVisible"),!0),split:x(a.getValue("ItemSplit")),isHeader:null!==(i=a.getValue("ItemHeader"))&&void 0!==i?i:void 0,topDivider:null!==(n=a.getValue("ItemTopDivider"))&&void 0!==n?n:void 0,divider:null!==(s=a.getValue("ItemDivider"))&&void 0!==s?s:void 0,data:a}}))}(n));var s=parseInt(e.mode.allocatedWidth),a=parseInt(e.mode.allocatedHeight),l={tabIndex:null!==(r=null===(t=e.accessibility)||void 0===t?void 0:t.assignedTabIndex)&&void 0!==r?r:void 0,width:s,height:a,items:this.items,onSelected:this.onSelect,disabled:e.mode.isControlDisabled,setFocus:this.focusKey,themeJSON:e.parameters.Theme.raw,visible:e.mode.isVisible};return o.createElement(O,l)}getOutputs(){return{}}destroy(){}}pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad=t})();
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('PowerCAT.CommandBar', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.CommandBar);
} else {
	var PowerCAT = PowerCAT || {};
	PowerCAT.CommandBar = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.CommandBar;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}