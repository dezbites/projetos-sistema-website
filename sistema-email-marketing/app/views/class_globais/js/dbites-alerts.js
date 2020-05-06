const not = {
    ok:function(testo,func){
        const a = document.createElement("div");
        const al = document.createElement("div");
        a.id = "dbites-alert";
        a.className = "dbites-alert";
        a.setAttribute("style", "width:100vw;height:100vh;position:fixed;top:0;background-color:rgba(0,0,0,0.8);display:inline-flex;justify-content:center;align-items:center;z-index:9999;");

        al.id = "dbites-al";
        al.className = "dbites-al";
        al.setAttribute("style", "position:fixed;top:0;color:#000000 important;padding:20px;border-radius:10px;width:350px;height:fit-content;background-color:#ffffff;opacity:0;transition:all 0.5s;");
        setTimeout(function(){
            al.style.top="25vh";
            al.style.opacity="1";
        },300);
        a.appendChild(al);
        document.body.appendChild(a);
        const check = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 510 510" xml:space="preserve"><g id="check-circle-outline" fill="#8bc34a"><path d="M150.45,206.55l-35.7,35.7L229.5,357l255-255l-35.7-35.7L229.5,285.6L150.45,206.55z M459,255c0,112.2-91.8,204-204,204S51,367.2,51,255S142.8,51,255,51c20.4,0,38.25,2.55,56.1,7.65l40.801-40.8C321.3,7.65,288.15,0,255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255H459z"/></g></svg>';

        const obj = document.querySelector(".dbites-al");
        obj.innerHTML = "<div align='center' style='font-weight:600;color:#888888;'>"+check+"<br>" + testo + "</div><div align='center'><br><input type='button' style='background-color:#8bc34a;' id='ok' value='Ok' /></div>";
        document.querySelector("#ok").onclick=function(){
            document.querySelector(".dbites-alert").remove();
            if(func){
                func();
            }
        }
    },
    cautions:function(testos,funcoes){
        var as = document.createElement("div");
        var alls = document.createElement("div");
        as.id = "dbites-alert-caut";
        as.className = "dbites-alert-caut";
        as.setAttribute("style", "width:100vw;height:100vh;position:fixed;top:0;background-color:rgba(0,0,0,0.8);display:inline-flex;justify-content:center;align-items:center;z-index:9999;");

        alls.id = "dbites-all";
        alls.className = "dbites-all";
        alls.setAttribute("style", "position:fixed;top:0;color:#000000 important;padding:20px;border-radius:10px;width:350px;height:fit-content;background-color:#ffffff;opacity:0;transition:all 0.5s;");
        setTimeout(function(){
            alls.style.top="25vh";
            alls.style.opacity="1";
        },300);
        as.appendChild(alls);
        document.body.appendChild(as);
        var check = '<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 310.806 310.806" fill="#f54848" xml:space="preserve">\
        <path d="M305.095,229.104L186.055,42.579c-6.713-10.52-18.172-16.801-30.652-16.801c-12.481,0-23.94,6.281-30.651,16.801  L5.711,229.103c-7.145,11.197-7.619,25.39-1.233,37.042c6.386,11.647,18.604,18.883,31.886,18.883h238.079  c13.282,0,25.5-7.235,31.888-18.886C312.714,254.493,312.24,240.301,305.095,229.104z M155.403,253.631  c-10.947,0-19.82-8.874-19.82-19.82c0-10.947,8.874-19.821,19.82-19.821c10.947,0,19.82,8.874,19.82,19.821  C175.223,244.757,166.349,253.631,155.403,253.631z M182.875,115.9l-9.762,65.727c-1.437,9.675-10.445,16.353-20.119,14.916  c-7.816-1.161-13.676-7.289-14.881-14.692l-10.601-65.597c-2.468-15.273,7.912-29.655,23.185-32.123  c15.273-2.468,29.655,7.912,32.123,23.185C183.284,110.192,183.268,113.161,182.875,115.9z"/>\
        ';

        var obj = document.querySelector(".dbites-all");
        obj.innerHTML = "<div align='center' style='font-weight:600;color:#888888;'>"+check+"<br>" + testos + "</div><div align='center'><br><input type='button' style='background-color:#f54848;' id='ok' value='Ok' /></div>";
        document.querySelector("#ok").onclick=function(){
            document.querySelector(".dbites-alert-caut").remove();
            if(funcoes){
                funcoes();
            }
        }
    }
}
