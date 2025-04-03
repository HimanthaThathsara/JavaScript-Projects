function RunIn(){
    let html = document.getElementById("html").value;
    let css = document.getElementById("css").value;
    let js = document.getElementById("js").value;

    let result = document.getElementById("output");

    result.contentWindow.eval(js);
    result.contentDocument.body.innerHTML = html + "<style>" + css + "</style>" + "<script>" + js + "</script>";
}