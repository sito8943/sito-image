import{forwardRef,useState}from"react";import{css}from"@emotion/css";import PropTypes from"prop-types";import"./style.css";import{jsx as _jsx}from"react/jsx-runtime";import{jsxs as _jsxs}from"react/jsx-runtime";const SitoImage=forwardRef((a,b)=>{const[c,d]=useState(1),{src:e,errorComponent:f,loadingComponent:g,onLoad:h,onError:i,alt:j,sx:k,id:l,name:m,style:n,className:o}=a,p=a=>0<=a.indexOf("%"),q=a=>p(a)?"100%":a,r=css({width:k.width?k.width:"100%",height:k.width?k.width:"100%",img:{filter:k.filter,borderRadius:k.borderRadius,objectFit:k.objectFit,objectPosition:k.objectPosition,...k,width:`${q(k.width?k.width:"100%")}`,height:`${q(k.height?k.height:"100%")}`,opacity:0,transition:"opacity 200ms ease"},...k});return _jsx("div",{ref:b,id:l,name:m,style:n,className:`${o} ${r}`,children:_jsxs("div",{className:css({position:"relative",width:"100%",height:"100%"}),children:[_jsx("img",{className:`${o} ${r}`,src:e,alt:j,loading:"lazy",onLoad:a=>{d(0),a.target.style.opacity=1,h(a)},onError:a=>{d(-1),i(a)}}),_jsxs("div",{className:css({zIndex:1===c?1:-1,position:"absolute",top:0,left:0,width:`${q(k.width?k.width:"100%")}`,height:`${q(k.height?k.height:"100%")}`,transition:"all 500ms ease",opacity:1===c?1:0,borderRadius:k.borderRadius,margin:k.margin,marginTop:k.marginTop,marginLeft:k.marginLeft,marginBottom:k.marginBottom,marginRight:k.marginRight}),children:[g?g:_jsx("div",{className:`shimmer ${css({width:`${q(k.width?k.width:"100%")}`,height:`${q(k.height?k.height:"100%")}`})}`}),-1===c&&f]})]})})});SitoImage.defaultProps={id:"",name:"",className:"",alt:"no-image",src:"",errorComponent:void 0,loadingComponent:void 0,sx:{},style:{},extraProps:{},onLoad:()=>{},onError:()=>{}},SitoImage.propTypes={id:PropTypes.string,name:PropTypes.string,className:PropTypes.string,alt:PropTypes.string.isRequired,src:PropTypes.string.isRequired,errorComponent:PropTypes.node,loadingComponent:PropTypes.node,sx:PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func,PropTypes.object,PropTypes.bool])),PropTypes.func,PropTypes.object]),style:PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func,PropTypes.object,PropTypes.bool])),PropTypes.func,PropTypes.object]),extraProps:PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func,PropTypes.object,PropTypes.bool])),PropTypes.func,PropTypes.object]),onLoad:PropTypes.func,onError:PropTypes.func};export default SitoImage;