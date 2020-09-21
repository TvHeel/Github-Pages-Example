function passwd(uri,name){
    var password = prompt('Enter the password to download the file:');
    if(password == "FHICTteacher"){
        downloadURI(uri,name);
    }
    else{
        alert("incorrect password!! please try again");
    }
}

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}
