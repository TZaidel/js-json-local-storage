const t=document.querySelector(".stop-btn"),e=document.querySelector(".start-btn"),s=(document.querySelector("[data-days"),document.querySelector("[data-hours"),document.querySelector("[data-minutes"),document.querySelector("[data-seconds"));const n=new class{constructor({onTick:t}){this.isActive=!1,this.timerId=null,this.onTick=t}start(){const t=Date.now();this.isActive||(this.timerId=setInterval((()=>{this.isActive=!0;const e=Date.now()-t,s=this.getTimeComponent(e);this.onTick(s)}),1e3))}stop(){this.isActive=!1,clearInterval(this.timerId)}pad(t){return String(t).padStart(2,"0")}getTimeComponent(t){return{hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}}({onTick:function({hours:t,mins:e,secs:n}){s.textContent=n}});e.addEventListener("click",n.start.bind(n)),t.addEventListener("click",n.stop.bind(n));
//# sourceMappingURL=data-timer.abc79fe6.js.map