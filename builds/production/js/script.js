!function e(r,t,o){function n(a,s){if(!t[a]){if(!r[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var l=t[a]={exports:{}};r[a][0].call(l.exports,function(e){var t=r[a][1][e];return n(t||e)},l,l.exports,e,r,t,o)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)n(o[a]);return n}({1:[function(e,r,t){function o(e){this.dd=e,this.placeholder=this.dd.children("span"),this.opts=this.dd.find("ul.dropdown > li"),this.val="",this.index=-1,this.initEvents()}d3.csv("./data/labor_hours.csv",function(e){return{Total:+e.Total,Time:e.Date,Roofer:+e.Roofer,Plumber:+e.Plumber,Painter:+e.Painter,Other:+e.Other,MachineOps:+e.MachineOps,Laborer:+e.Laborer,Ironworker:+e.Ironworker,Electrician:+e.Electrician,Bricklayer:+e.Bricklayer,Carpenter:+e.Carpenter}},function(e,r){var t=r,o=[],n=[],i=[],a=[],s=[],c=[],l=[],u=[],d=[],h=[],f=[];o[0]="x",n[0]="Roofers",i[0]="Plumbers",a[0]="Painters",s[0]="Other",c[0]="Machine Ops",l[0]="Laborers",u[0]="Ironworkers",d[0]="Electricians",h[0]="Bricklayers",f[0]="Carpenters";for(var p=0;p<t.length;p++)o[p+1]=t[p].Time,n[p+1]=t[p].Roofer,i[p+1]=t[p].Plumber,a[p+1]=t[p].Painter,s[p+1]=t[p].Other,c[p+1]=t[p].MachineOps,l[p+1]=t[p].Laborer,u[p+1]=t[p].Ironworker,d[p+1]=t[p].Electrician,h[p+1]=t[p].Bricklayer,f[p+1]=t[p].Carpenter;var m={top:20,right:60,bottom:20,left:30},y=c3.generate({bindto:"#chart",size:{height:400},padding:m,data:{x:"x",columns:[o,f,l,d,u,i,c,h,a,n,s],type:"area",order:"desc",groups:[["Carpenters","Laborers","Electricians","Ironworkers","Plumbers","Machine Ops","Bricklayers","Painters","Roofers","Other"]],axes:{Carpenters:"y2",Bricklayers:"y2",Electricians:"y2",Ironworkers:"y2",Laborers:"y2","Machine Ops":"y2",Other:"y2",Painters:"y2",Plumbers:"y2",Roofers:"y2"}},legend:{show:!1},point:{show:!1},color:{pattern:["#DEE7EB","#D8E5E8","#BCD1DC","#B7C9D1","#A7BCC8","#B6C4D5","#B2BAC6","#A8ACB9","#D4D0CE","#C5C1BF"]},axis:{y:{show:!1},y2:{show:!0,min:0,max:25e4,padding:{bottom:0,top:0,right:0,left:0},tick:{count:6,values:[0,25e3,75e3,125e3,175e3,225e3],format:d3.format(",.0f")}},x:{type:"categories",padding:{bottom:0,top:0,right:0,left:0},tick:{count:4,multiline:!1}}},subchart:{show:!1},tooltip:{contents:function(e,t,o,n){var i,a,s,c,l,u=this,d=u.config,h=d.tooltip_format_title||t,f=d.tooltip_format_name||function(e){return e},p=d.tooltip_format_value||o;for(a=0;a<e.length;a++)if(e[a]&&(e[a].value||0===e[a].value)){if(f(e[a].name),c=p(e[a].value,e[a].ratio,e[a].id,e[a].index),l=u.levelColor?u.levelColor(e[a].value):n(e[a].id),!i){s=h?h(e[a].x):e[a].x;for(var m=0;m<r.length;m++)if(String(r[m].Time)==String(s)){var y=d3.format(",")(r[m].Total);break}i="<table class='"+u.CLASS.tooltip+"'>"+(s||0===s?"<tr><th colspan='2'>"+s+" - "+y+" hours</th></tr>":"")}i+="<tr class='"+u.CLASS.tooltipName+"-"+e[a].id+"'>",i+="<td class='name'><span style='background-color:"+l+"'></span>"+e[a].id+"</td>",i+="<td class='value'>"+c+"</td>",i+="</tr>"}return i+"</table>"}}}),C=c3.generate({bindto:"#chart_m",size:{height:400},padding:m,data:{x:"x",columns:[o,f,l,d,u,i,c,h,a,n,s],type:"bar",order:"desc",groups:[["Carpenters","Laborers","Electricians","Ironworkers","Plumbers","Machine Ops","Bricklayers","Painters","Roofers","Other"]],axes:{Carpenters:"y2",Bricklayers:"y2",Electricians:"y2",Ironworkers:"y2",Laborers:"y2","Machine Ops":"y2",Other:"y2",Painters:"y2",Plumbers:"y2",Roofers:"y2"}},legend:{show:!1},point:{show:!1},bar:{width:{ratio:.9}},color:{pattern:["#DEE7EB","#D8E5E8","#BCD1DC","#B7C9D1","#A7BCC8","#B6C4D5","#B2BAC6","#A8ACB9","#D4D0CE","#C5C1BF"]},tooltip:{show:!1},axis:{y:{show:!1},y2:{show:!0,min:0,max:25e4,padding:{bottom:0,top:0,right:0,left:0},tick:{values:[0,25e3,75e3,125e3,175e3,225e3],format:d3.format(",.0f")}},x:{type:"categories",padding:{bottom:0,top:0,right:0,left:0},tick:{count:4,multiline:!1}}},subchart:{show:!1}});$("#all").click(function(){y.revert(),C.revert(),$("#total").html("3,497,834")}),function(){d3.select(".legendChart").selectAll("div").data(["Carpenters","Laborers","Electricians","Ironworkers","Plumbers","Machine Ops","Bricklayers","Painters","Roofers","Other"]).enter().append("div").attr("data-id",function(e){return e}).attr("class","clickyButton").html(function(e){return e}).each(function(e){d3.select(this).style("background-color",y.color(e))}).on("mouseover",function(e){}).on("mouseout",function(e){}).on("click",function(e){y.focus(e),C.focus(e),console.log(e);for(var t=0,o=0;o<r.length;o++)"Carpenters"==e?t+=r[o].Carpenter:"Roofers"==e?t+=r[o].Roofer:"Plumbers"==e?t+=r[o].Plumber:"Painters"==e?t+=r[o].Painter:"Other"==e?t+=r[o].Other:"Machine Ops"==e?t+=r[o].MachineOps:"Laborers"==e?t+=r[o].Laborer:"Ironworkers"==e?t+=r[o].Ironworker:"Electricians"==e?t+=r[o].Electrician:"Bricklayers"==e&&(t+=r[o].Bricklayer);$("#total").html(d3.format(",.0f")(t))}),$(".clickyButton").click(function(){$(".clickyButton").removeClass("selected2"),$(this).addClass("selected2")})}()}),o.prototype={initEvents:function(){var e=this;e.dd.on("click",function(e){return $(this).toggleClass("active"),!1}),e.opts.on("click",function(){var r=$(this);e.val=r.text(),e.index=r.index(),e.placeholder.text(e.val)})},getValue:function(){return this.val},getIndex:function(){return this.index}},$(function(){new o($("#dd")),new o($("#ddY"));$(document).click(function(){$(".wrapper-dropdown-1").removeClass("active")})})},{}]},{},[1]);