const n = {
    alert: function (testo,func) {
        const a = document.createElement("div");
        const al = document.createElement("div");
        a.id = "dbites-alert";
        a.className = "dbites-alert";
        a.setAttribute("style", "width:100vw;height:100vh;position:fixed;top:0;background-color:rgba(0,0,0,0.8);display:inline-flex;justify-content:center;align-items:center;z-index:9999;");

        al.id = "dbites-al";
        al.className = "dbites-al";
        al.setAttribute("style", "color:#000000 important;padding:20px;border-radius:10px;width:250px;height:fit-content;background-color:#ffffff;");

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
    }
}
