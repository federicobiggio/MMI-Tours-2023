(function($){$(function(){$('iframe.instagram-media,blockquote.instagram-media').wrap("<div class='embed'></div>")});$(function(){$('form.comment-form').removeAttr('novalidate')});$('form.comment-form button[type="submit"]').click(function(){$(this).closest('form').addClass('submitted')});$(function(){$(document).on('click','.comment-toggle',function(event){event.preventDefault();var elem=$('#'+$(this).data('form'));if(!elem.hasClass('active')){elem.slideDown(200,function(){elem.addClass('active')})}else{elem.slideUp(200,function(){elem.removeClass('active')})}});$(document).on('keyup change load','.comment-form textarea',function(event){var textarea_help=$(this).parent().find('.help');if(!textarea_help.length){$(this).parent().append('<span class="help t-size-xs">0/150 caractères minimum</span>');textarea_help=$(this).parent().find('.help')}
var min_textarea_char=$(this).attr('minlength');textarea_help.html(this.value.length+'/'+min_textarea_char+' caractères minimum')});if(window.location.hash&&$(window.location.hash).length&&window.location.hash.startsWith('#comment-')){$('.comments-area').show().addClass('active');$('html,body').animate({scrollTop:$(window.location.hash).offset().top-2*$('#main-menu').height()},'fast')}
if(window.location.hash&&window.location.hash=='#comment-open'){$('.comments-area').show().addClass('active');$('html,body').animate({scrollTop:$('.comments-area').offset().top-2*$('#main-menu').height()},'fast')}});function ProgressBar(elem){if(elem.length>0){var articleLength=elem.height();var scroll=$(window).scrollTop()-elem.offset().top;var progress=(scroll/(articleLength-$(window).height()))*100;if(progress>=0){$('.progress').addClass('fixed-progressbar')}else{if($(window).scrollTop()<100){$('.progress').removeClass('fixed-progressbar')}}
$('.progress > div').css('width',(progress)+'%')}}
$(function(){var timerId;var firstElem;var lastElem;var scrollTop;var lastScrollTop=0;var ajaxThrottle=!0;var launcher=!1;var oldMostVisible;var launchTracking=!1;var waitTracking=!1;var oldLaunch;var Events_posts=[];Events_posts.push($('#main > .post-content').data('id'));$.fn.isInViewport=function(){var elementTop=$(this).offset().top;var elementBottom=elementTop+$(this).outerHeight();var viewportTop=$(window).scrollTop();var viewportBottom=viewportTop+$(window).height();return elementBottom>viewportTop&&elementTop<viewportBottom};$.fn.percentWithinViewport=function(options){var settings=$.extend({offsetTop:0,offsetTopElement:!1,offsetBottom:0,offsetBottomElement:!1,},options);var offsetTop=settings.offsetTop+((settings.offsetTopElement!==!1&&settings.offsetTopElement.length>0)?settings.offsetTopElement.outerHeight():0);var offsetBottom=settings.offsetBottom+((settings.offsetBottomElement!==!1&&settings.offsetBottomElement>0)?settings.offsetBottomElement.outerHeight():0);var viewportTop=$(window).scrollTop()+offsetTop;var viewportHeight=($(window).height()-offsetTop)-offsetBottom;var viewportBottom=(viewportTop+viewportHeight);var visibleArray=[];this.each(function(){var elementTop=$(this).offset().top;var elementHeight=$(this).outerHeight();var elementBottom=elementTop+elementHeight;var totalHeight=Math.max(elementBottom,viewportBottom)-Math.min(elementTop,viewportTop);var heightDiff=totalHeight-viewportHeight;var elementInside=elementHeight-heightDiff;var percent=parseInt(elementInside<=0?0:elementInside/elementHeight*100);$(this).attr('data-viewpt',percent);if(percent>0){visibleArray.push($(this))}});return visibleArray};function ajaxLoadNextPost(){var load=$('.infinite-load');if(load.length<=0){lastElem.after('<div class="infinite-load"><div class="loader"><div></div><div></div><div></div><div></div></div></div>');load=$('.infinite-load')}
$.ajax({url:ajaxurl,data:{'action':'single_infinite_scroll','infinite_post':lastElem.data('id'),'infinite_exclude':firstElem.data('id'),'infinite_tax':firstElem.data('tax'),'infinite_nonce':lastElem.data('nonce'),},success:function(response){if(response.success){var timeoutId;timeoutId=window.setTimeout(function(){load.remove()},5000);window.clearTimeout(timeoutId);load.after(response.data).remove();var post=$('.post-content.loaded');post.show();post.removeClass('loaded');post.attr('data-elem',parseInt(lastElem.data('elem'))+1);if($(window).width()<=768&&post.offset().top<lastScrollTop){window.scrollTo(0,post.offset().top-$('.header-mobile').height())}
setTimeout(function(){ajaxThrottle=!0},200);if($.isFunction(window.autoLoadLightbox)){autoLoadLightbox()}
load_observer_list()}else{load.after(response.data);load.remove()}},error:function(){console.log('AJAX call error')
load.remove()}})}
function updateFocusPost(){var withinViewportArray=$('#main > .post-content').percentWithinViewport({'offsetTopElement':$('#single-title'),});var focusElem;var visibility=mostVisible=closest=closestElem=0;$.each(withinViewportArray,function(key,value){visibility=parseInt($(this).attr('data-viewpt'));if(visibility>mostVisible){closest=mostVisible;if(typeof focusElem==='object'){closestElem=focusElem.data('elem')}
mostVisible=visibility;focusElem=$(this)}else if(visibility>closest){closest=visibility;closestElem=$(this).data('elem')}});$.fn.updateProgress=function(){ProgressBar($(this))}
$.fn.updateFocusElem=function(){var Url="/"+$(this).data('slug')+"/";if(window.location.pathname!=Url){var title=$(this).find('h1').text();window.history.pushState($(this).data('slug'),title,Url);setTimeout(function(){window.oldPost=window.location.pathname},50);$('link[rel="canonical"]').attr('href',window.location);var menu_share=$('#single-share .sharing-button');var conten_share=$(this).find('.sharing-button');menu_share.attr('data-related',conten_share.data('related'));menu_share.attr('data-url',conten_share.data('url'));menu_share.attr('data-media',conten_share.data('media'));menu_share.attr('data-title',conten_share.data('title'));menu_share.attr('data-slug',conten_share.data('slug'));document.title=title;dataLayer.push({event:'VirtualPageview','VirtualPageUrl':window.location.pathname,'VirtualPageTitle':title,'typeSite':'blog','cateSite':'blogdumoderateur','site':'blogdumoderateur','categoryPage':'Detail','sujetPage':'Article','typePage':'DA-Infinite','Categorie':$(this).data('cat'),'Tag':$(this).data('tag'),});if($.isFunction(window.GA_events_posts)){if(Events_posts.indexOf($(this).data('id'))<0){events_all=!0;Events_posts.push($(this).data('id'))}else{events_all=!1}
window.GA_events_posts($(this),events_all)}
if($.isFunction(window.xhr_sponsored_views)){xhr_sponsored_views($(this).data('id'))}}};$('#main > .post-content[data-viewpt="'+mostVisible+'"]').updateProgress();if(!waitTracking&&typeof focusElem==='object'&&focusElem.data('slug')!=oldLaunch){if(!oldMostVisible||(mostVisible&&mostVisible!=oldMostVisible)){launchTracking=!0;oldMostVisible=mostVisible}else{if(launchTracking){waitTracking=!0;if(mostVisible==oldMostVisible){if(typeof oldLaunch!=='undefined'){$('#main > .post-content[data-viewpt="'+mostVisible+'"]').updateFocusElem()}
oldLaunch=focusElem.data('slug')}
waitTracking=!1}
launchTracking=!1}}}
function historyAutoScroll(){window.onpopstate2=window.onpopstate;window.popthrottle=!0;window.oldPost=window.location.pathname;window.onpopstate=function(){if(window.popthrottle){window.popthrottle=!1;window.onpopstate2();setTimeout(function(){window.popthrottle=!0;if(window.oldPost==window.location.pathname){window.history.back()}else{window.oldPost=window.location.pathname;slug=window.location.pathname.replace(/^\/|\/$/g,'');elem=$('#main > .post-content[data-slug='+slug+']');offset=$('#single-menu').height();if(elem.length){if(slug==$('#main > .post-content').first().data('slug')){window.scrollTo(0,0)}else{window.scrollTo(0,elem.offset().top-offset)}}}},100)}}};function infiniteScrollInit(){firstElem=$('#main > .post-content').first();lastElem=$('#main > .post-content').last();scrollTop=$(this).scrollTop();if(lastElem.find('.breadcrumb-section').isInViewport()&&ajaxThrottle){launcher=!0}
if(launcher&&ajaxThrottle&&$('.no-more-post').length===0&&scrollTop>lastScrollTop){launcher=!1;ajaxThrottle=!1;ajaxLoadNextPost()}
updateFocusPost();historyAutoScroll();lastScrollTop=scrollTop}
var throttleFunction=function(func,delay){if(timerId){return}
timerId=setTimeout(function(){func()
timerId=undefined},delay)}
if($('body').hasClass('single-post')){$(window).on('load scroll',function(){throttleFunction(infiniteScrollInit,200)})}})})(jQuery)