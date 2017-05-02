Ionic.loadComponents("904d77e1",function(o,t,r){var n=function(){function o(){this.large=!1,this.small=!1,this.default=!1,this.disabled=!1,this.outline=!1,this.clear=!1,this.solid=!1,this.round=!1,this.block=!1,this.full=!1,this.strong=!1}return o.prototype.getElementClassList=function(o,t){return o?[o,o+"-"+t]:[]},o.prototype.getClassList=function(o,t,r){return t?(t=t.toLocaleLowerCase(),[o+"-"+t,o+"-"+t+"-"+r]):[]},o.prototype.getColorClassList=function(o,t,r,n){r="bar-button"!==t&&"solid"===r?"default":r;var e=t+(r&&"default"!==r?"-"+r.toLowerCase():"");return[].concat(e+"-"+n,o?e+"-"+n+"-"+o:[])},o.prototype.getStyleClassList=function(o){var t=[].concat(this.outline?this.getColorClassList(this.color,o,"outline",this.mode):[],this.clear?this.getColorClassList(this.color,o,"clear",this.mode):[],this.solid?this.getColorClassList(this.color,o,"solid",this.mode):[]);return 0===t.length&&(t=[this.getColorClassList(this.color,o,"default",this.mode)]),t},o.prototype.render=function(){var o="button",r=(this.large?"large":null)||(this.small?"small":null)||(this.default?"default":null),n=this.round?"round":null,e=(this.block?"block":null)||(this.full?"full":null),a=this.strong?"strong":null,d=[].concat(this.getElementClassList(o,this.mode),this.getClassList(o,n,this.mode),this.getClassList(o,e,this.mode),this.getClassList(o,r,this.mode),this.getClassList(o,a,this.mode),this.getStyleClassList(o)).reduce(function(o,t){return o[t]=!0,o},{});return t(this,t("button",{class:d,props:{disabled:this.disabled}},[t("span",{class:{"button-inner":!0}},t("slot")),t("div",{class:{"button-effect":!0}})]))},o}();o.Button=n},["ion-button","Button",[],[],1,2,":host{visibility:inherit!important}.button{-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;border:0;position:relative;z-index:0;display:inline-block;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;cursor:pointer;vertical-align:top;vertical-align:-webkit-baseline-middle;transition:background-color,opacity .1s linear;font-kerning:none;user-select:none;contain:content}.button-inner{display:flex;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%}[ion-button]{text-decoration:none}[ion-button][disabled],a[disabled],button[disabled]{cursor:default;opacity:.4;pointer-events:none}.button-block{display:block;clear:both;width:100%;contain:strict}.button-block::after{clear:both}.button-full{display:block;width:100%;contain:strict}.button-full.button-outline{border-right-width:0;border-left-width:0;border-radius:0}.button-md{overflow:hidden;margin:.4rem .2rem;padding:0 1.1em;height:3.6rem;border-radius:2px;font-size:1.4rem;font-weight:500;text-transform:uppercase;color:#fff;background-color:#327eff;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);transition:box-shadow .3s cubic-bezier(.4,0,.2,1),background-color .3s cubic-bezier(.4,0,.2,1),color .3s cubic-bezier(.4,0,.2,1)}.button-md:hover:not(.disable-hover){background-color:#327eff}.button-md.activated{background-color:#2e74eb;box-shadow:0 3px 5px rgba(0,0,0,.14),0 3px 5px rgba(0,0,0,.21)}.button-md .button-effect{background-color:#fff}.button-large-md{padding:0 1em;height:2.8em;font-size:2rem}.button-small-md{padding:0 .9em;height:2.1em;font-size:1.3rem}.button-small-md[icon-only] ion-icon{font-size:1.4em}.button-block-md{margin-right:0;margin-left:0}.button-full-md{margin-right:0;margin-left:0;border-right-width:0;border-left-width:0;border-radius:0}.button-outline-md{border-width:1px;border-style:solid;border-color:#327eff;color:#327eff;background-color:transparent;box-shadow:none}.button-outline-md:hover:not(.disable-hover){background-color:rgba(158,158,158,.1)}.button-outline-md.activated{background-color:transparent;box-shadow:none;opacity:1}.button-outline-md .button-effect{background-color:#327eff}.button-clear-md{border-color:transparent;color:#327eff;background-color:transparent;box-shadow:none;opacity:1}.button-clear-md.activated{background-color:rgba(158,158,158,.2);box-shadow:none}.button-clear-md:hover:not(.disable-hover){background-color:rgba(158,158,158,.1)}.button-clear-md .button-effect{background-color:#999}.button-round-md{padding:0 2.6rem;border-radius:64px}.button-md [icon-only]{padding:0}.button-effect{position:absolute;top:0;left:0;z-index:0;display:none;border-radius:50%;background-color:#555;opacity:.2;transform-origin:center center;transition-timing-function:ease-in-out;pointer-events:none}.md .button-effect{display:block}.button-md-primary{color:#fff;background-color:#327eff}.button-md-primary:hover:not(.disable-hover){background-color:#327eff}.button-md-primary.activated{background-color:#2e74eb;opacity:1}.button-md-primary .button-effect{background-color:#fff}.button-outline-md-primary{border-color:#3078f2;color:#3078f2;background-color:transparent}.button-outline-md-primary:hover:not(.disable-hover){background-color:rgba(158,158,158,.1)}.button-outline-md-primary.activated{background-color:transparent}.button-outline-md-primary .button-effect{background-color:#3078f2}.button-clear-md-primary{border-color:transparent;color:#327eff;background-color:transparent}.button-clear-md-primary.activated{background-color:rgba(158,158,158,.2);box-shadow:none}.button-clear-md-primary:hover:not(.disable-hover){color:#327eff}.button-md-secondary{color:#fff;background-color:#32db64}.button-md-secondary:hover:not(.disable-hover){background-color:#32db64}.button-md-secondary.activated{background-color:#2ec95c;opacity:1}.button-md-secondary .button-effect{background-color:#fff}.button-outline-md-secondary{border-color:#30d05f;color:#30d05f;background-color:transparent}.button-outline-md-secondary:hover:not(.disable-hover){background-color:rgba(158,158,158,.1)}.button-outline-md-secondary.activated{background-color:transparent}.button-outline-md-secondary .button-effect{background-color:#30d05f}.button-clear-md-secondary{border-color:transparent;color:#32db64;background-color:transparent}.button-clear-md-secondary.activated{background-color:rgba(158,158,158,.2);box-shadow:none}.button-clear-md-secondary:hover:not(.disable-hover){color:#32db64}.button-md-danger{color:#fff;background-color:#f53d3d}.button-md-danger:hover:not(.disable-hover){background-color:#f53d3d}.button-md-danger.activated{background-color:#e13838;opacity:1}.button-md-danger .button-effect{background-color:#fff}.button-outline-md-danger{border-color:#e93a3a;color:#e93a3a;background-color:transparent}.button-outline-md-danger:hover:not(.disable-hover){background-color:rgba(158,158,158,.1)}.button-outline-md-danger.activated{background-color:transparent}.button-outline-md-danger .button-effect{background-color:#e93a3a}.button-clear-md-danger{border-color:transparent;color:#f53d3d;background-color:transparent}.button-clear-md-danger.activated{background-color:rgba(158,158,158,.2);box-shadow:none}.button-clear-md-danger:hover:not(.disable-hover){color:#f53d3d}.button-md-light{color:#000;background-color:#f4f4f4}.button-md-light:hover:not(.disable-hover){background-color:#f4f4f4}.button-md-light.activated{background-color:#e0e0e0;opacity:1}.button-md-light .button-effect{background-color:#000}.button-outline-md-light{border-color:#e8e8e8;color:#e8e8e8;background-color:transparent}.button-outline-md-light:hover:not(.disable-hover){background-color:rgba(158,158,158,.1)}.button-outline-md-light.activated{background-color:transparent}.button-outline-md-light .button-effect{background-color:#e8e8e8}.button-clear-md-light{border-color:transparent;color:#f4f4f4;background-color:transparent}.button-clear-md-light.activated{background-color:rgba(158,158,158,.2);box-shadow:none}.button-clear-md-light:hover:not(.disable-hover){color:#f4f4f4}.button-md-dark{color:#fff;background-color:#222}.button-md-dark:hover:not(.disable-hover){background-color:#222}.button-md-dark.activated{background-color:#343434;opacity:1}.button-md-dark .button-effect{background-color:#fff}.button-outline-md-dark{border-color:#2d2d2d;color:#2d2d2d;background-color:transparent}.button-outline-md-dark:hover:not(.disable-hover){background-color:rgba(158,158,158,.1)}.button-outline-md-dark.activated{background-color:transparent}.button-outline-md-dark .button-effect{background-color:#2d2d2d}.button-clear-md-dark{border-color:transparent;color:#222;background-color:transparent}.button-clear-md-dark.activated{background-color:rgba(158,158,158,.2);box-shadow:none}.button-clear-md-dark:hover:not(.disable-hover){color:#222}.button-strong-md{font-weight:700}"]);