//adapted from function on http://www.htmlforums.com/archive/index.php/t-10688.html
function SaveVarAsFile(someVar,extension){
  $(document).ready(function() {
    setTimeout(function() {
      var ifrm = document.getElementById('SaveFrame');
      ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
      ifrm.document.open();
      ifrm.document.write(someVar);
      ifrm.document.close();
      ifrm.focus();
      ifrm.document.execCommand('SaveAs',true,'MrCSVTransformer-output.'+extension);
    });
    
    /*var SaveFrame = frames['SaveFrame'].document;
    SaveFrame.open("text/html","replace");
    SaveFrame.write(someVar);
    SaveFrame.close();
    SaveFrame.contentWindow.focus();
    SaveFrame.contentWindow.document.execCommand('SaveAs',true,'MrCSVTransformer-output.'+extension);*/
  });
}
