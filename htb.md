#### Hack The Box (HTB)

Voor Hack The Box heb ik voor zowel Linux en Windows writeups gemaakt.

<input type="button" value="Linux (Passage) writeup" onClick="passwd()"/>

<script>
function passwd(){
  var password = prompt('Enter the password to download the file:');
  if(password.toLowerCase() == "teacher"){
    downloadURI("./files/TvH_TICT.pdf","hoi");  
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
</script>
