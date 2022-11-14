var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;(()=>{"use strict";var r={};r.d=(t,e)=>{for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var b={};/*!****************************************!*\
  !*** ./SearchBox/index.ts + 4 modules ***!
  \****************************************/r.r(b),r.d(b,{SearchBox:()=>C});const n=React,i=FluentUIReactv8290,g=n.memo(t=>{const{onChanged:e,themeJSON:a,ariaLabel:u,placeholderText:d,underLined:h,disabled:m,disableAnimation:p,setFocus:s}=t,f={iconName:t.iconName},o=n.useRef(null),c=n.useMemo(()=>{try{return a?(0,i.createTheme)(JSON.parse(a)):void 0}catch(l){console.error("Cannot parse theme",l)}},[a]),S=(l,w)=>{e(w)},_=(0,i.mergeStyles)({width:t.width});return n.useEffect(()=>{if(s&&s!==""&&o){const l=o.current.getElementsByClassName("ms-SearchBox-field");l&&l.length>0&&l[0].focus()}},[s,o]),n.createElement(i.ThemeProvider,{theme:c},n.createElement(i.SearchBox,{placeholder:d,onChange:S,ariaLabel:u,underlined:h,iconProps:f,disabled:m,disableAnimation:p,className:_,ref:o}))});g.displayName="SearchBoxComponent";var v=(t=>(t.SetFocus="SetFocus",t))(v||{}),y=(t=>(t.InputEvent="InputEvent",t.SelectedKey="SelectedKey",t))(y||{});class C{constructor(){this.setFocus="",this.onChange=e=>{this.searchTextValue=e!=null?e:null,this.notifyOutputChanged()}}init(e,a){this.context=e,this.context.mode.trackContainerResize(!0),this.notifyOutputChanged=a}updateView(e){var a,u,d,h,m,p,s;const f=parseInt(e.mode.allocatedWidth),o=parseInt(e.mode.allocatedHeight),c=this.context.parameters.InputEvent.raw;c&&this.setFocus!==c&&c.startsWith(v.SetFocus)&&(this.setFocus=c);const _={onChanged:this.onChange,themeJSON:(a=e.parameters.Theme.raw)!=null?a:"",ariaLabel:(d=(u=e.parameters)==null?void 0:u.AccessibilityLabel.raw)!=null?d:"",underLined:(h=e.parameters.Underlined.raw)!=null?h:!1,iconName:(m=e.parameters.IconName.raw)!=null?m:"",placeholderText:(p=e.parameters.PlaceHolderText.raw)!=null?p:"",disabled:e.mode.isControlDisabled,disableAnimation:(s=e.parameters.DisableAnimation.raw)!=null?s:!1,width:f,height:o,setFocus:this.setFocus};return n.createElement(g,_)}getOutputs(){return{SearchText:this.searchTextValue}}destroy(){}}pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad=b})();

if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('PowerCAT.SearchBox', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.SearchBox);
} else {
	var PowerCAT = PowerCAT || {};
	PowerCAT.SearchBox = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.SearchBox;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}