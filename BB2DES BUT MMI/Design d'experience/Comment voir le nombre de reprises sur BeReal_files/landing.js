(function($){window.addEventListener('message',event=>{if(event.data.type==='hsFormCallback'&&event.data.eventName==='onFormReady'){if($('form.hs-form').length){$('.hs-form-field > label').each(function(){var form_forval=$(this).attr('for');var form_input=$(this).parent().find('.input > input');form_input.attr('placeholder',' ');if(form_input.attr('aria-required')=='true'){form_input.prop('required',!0)}
if(form_input.attr('id')==form_forval&&!$(this).parent().find('.input > label').length){$('<label for="'+form_forval+'">'+$(this).html()+'</label>').insertAfter(form_input)}})}}});$(window).on('load resize',function(){if($('body').hasClass('hw_landing-template-hw_landing-redirect')){var windowH=$(window).height();var wrapperH=$('#primary').outerHeight(!0);var headerFooter=$('body > header').outerHeight(!0)+$('body > footer').outerHeight(!0);if(windowH>wrapperH+headerFooter){$('#primary').css({'height':(windowH-headerFooter)+'px'})}}});$(document).ready(function(){var event=Cookies.get('BDM_ldform');if(event){event=$.parseJSON(event);dataLayer.push({'event':'EventGeneric','EventCat':'Formulaire','EventAction':event.Action,'EventLibelle':event.Label});if(event.Lead==!0){dataLayer.push({'event':'EventGeneric','EventCat':'Formulaire','EventAction':'Acquisition','EventLibelle':'Lead - OK - Formulaire-'+event.Zone})}
Cookies.remove('BDM_ldform')}});$('#primary').find('div.type-telechargement a').on('click',function(){var event=$(this).data('vars-event-label');dataLayer.push({'event':'EventGeneric','EventCat':'Actualite','EventAction':'Téléchargement','EventLibelle':event})});function tracking_file_download(elem,redirect=!1){var customAction='';if(elem.data('vars-event-action')){customAction=elem.data('vars-event-action')}
dataLayer.push({'event':'EventGeneric','EventCat':'Actualite','EventAction':'Téléchargement'+customAction,'EventLibelle':elem.data('vars-event-label'),'eventCallback':function(){if(redirect!=!1){window.open(redirect,'_self','')
return}},})}
$('a#ld-dl').on('click',function(){tracking_file_download($(this))});window.onload=function(){if($('a#ld-dl').length){AutoDownloadFile($('a#ld-dl'))}};function AutoDownloadFile(elem){var file=elem.attr('download');if(typeof file!=='undefined'&&file!==!1){var fileName=file.split('/').pop();var url=new URL(file);var filePath=window.location.protocol+'//'+window.location.hostname+url.pathname.replace('/blogdumoderateur/','/wp-content/uploads/');var req=new XMLHttpRequest();req.open("GET",filePath,!0);req.send();req.responseType="blob";req.onload=function(){if(req.status!=200){console.log('File does not exist');return}
var blob=new Blob([req.response],{type:"application/octetstream"});var isIE=!1||!!document.documentMode;if(isIE){window.navigator.msSaveBlob(blob,fileName)}else{var url=window.URL||window.webkitURL;link=url.createObjectURL(blob);var a=document.createElement("a");a.setAttribute("download",fileName);a.setAttribute("href",link);document.body.appendChild(a);a.click();document.body.removeChild(a)}
setTimeout(function(){redirect=elem.attr('data-redirect');if(typeof redirect==='undefined'){redirect=!1}
tracking_file_download(elem,redirect)},500)}}}})(jQuery)