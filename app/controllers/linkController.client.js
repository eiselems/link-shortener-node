'use strict';

(function () {
   var form = document.querySelector('form');
   var textField = document.querySelector('#linkInput');
   var getLinkBtn = document.querySelector('#getLinkButton');
   var output = document.querySelector('#output');

   var addButton = document.querySelector('.btn-add');
   var deleteButton = document.querySelector('.btn-delete');
   var clickNbr = document.querySelector('#click-nbr');
   var apiUrl = appUrl + '/api/';

   function updateClickCount (data) {
      var clicksObject = JSON.parse(data);
      clickNbr.innerHTML = clicksObject.clicks;
   }

   //ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount));

   /**addButton.addEventListener('click', function () {

      ajaxFunctions.ajaxRequest('POST', apiUrl, function () {
         ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
      });

   }, false);

   deleteButton.addEventListener('click', function () {

      ajaxFunctions.ajaxRequest('DELETE', apiUrl, function () {
         ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
      });

   }, false);

**/

   getLinkInput.addEventListener('click', function (e) {
      e.preventDefault();
      console.log(textField.checkValidity());
      if(!textField.checkValidity()){
         picoModal("Invalid link - it needs to start with http(s).").show();   
      }else{
      ajaxFunctions.ajaxRequest('POST', apiUrl+encodeURIComponent(textField.value), function (data) {
         console.log(data);
         var json = JSON.parse(data);
         output.innerHTML = apiUrl + json.short;
      });
      }
   }, false);


})();
