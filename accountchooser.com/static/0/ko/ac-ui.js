/* Copyright 2012 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(){window.accountchooser = window.accountchooser || {};
window.cds = window.accountchooser;
var MSG_CONTAINER_ABOUT_DEPLOY_BUTTON = function(beginLink, endLink) {
  return beginLink + ("\uc0ac\uc774\ud2b8\uc5d0\uc11c \uacc4\uc815 \uc120\ud0dd\uae30\ub97c \uc774\uc6a9\ud558\ub294 \ubc29\ubc95 \uc54c\uc544\ubcf4\uae30" + endLink)
};
window.accountchooser.images = jQuery.extend(window.accountchooser.images || {}, {noPhoto:"static/image/generic_avatar.png", manHome:"static/image/man-personal.jpg", manWork:"static/image/man-professional.jpg", womanHome:"static/image/woman-personal.jpg", womanWork:"static/image/woman-professional.jpg"});
window.accountchooser.labels = jQuery.extend(window.accountchooser.labels || {}, {shareAccountPage:{title:"\uacc4\uc815 \ucd94\uac00", titleMultiple:"\uacc4\uc815 \ucd94\uac00", confirm:"\uacc4\uc815\uc815\ubcf4 \uae30\uc5b5", confirmMultiple:"\uacc4\uc815\uc815\ubcf4 \uae30\uc5b5", cancel:"\uac74\ub108\ub6f0\uae30"}, updateAccountPage:{title:"\uacc4\uc815 \uc5c5\ub370\uc774\ud2b8", confirm:"\uacc4\uc815 \uc5c5\ub370\uc774\ud2b8", cancel:"\ucde8\uc18c"}, selectAccountPage:{title:"\ub2e4\uc74c \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778:", 
seeMoreAccounts:"\ub354\ubcf4\uae30", notUsable:"\uc774 \uc0ac\uc774\ud2b8\uc5d0\uc11c \uc774\uc6a9\ud560 \uc218 \uc5c6\uc74c", addAccount:"\uacc4\uc815 \ucd94\uac00"}, manageAccountPage:{title:"\uacc4\uc815 \uad00\ub9ac", deleteReminder:"\uacc4\uc815\uc774 \uc81c\uac70\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc77c\ubd80 \uc6f9\uc0ac\uc774\ud2b8\uc5d0\uc11c\ub294 \uc774 \uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778\ub418\uc5b4 \uc788\uc744 \uc218\ub3c4 \uc788\uace0 \uc774 \uacc4\uc815\uc744 \uc0ac\uc6a9\ud55c \uae30\ub85d\uc774 \ub0a8\uc544 \uc788\uc744 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."}, 
manageContainer:{header:"\ub0b4 \uacc4\uc815", description:"\uacc4\uc815 \uc120\ud0dd\uae30\uc5d0\uc11c \uc0ad\uc81c\ud558\ub824\ub294 \uacc4\uc815\uc744 \ud074\ub9ad\ud558\uc138\uc694."}, selectContainer:{header:"\ub85c\uadf8\uc778\ud560 \uacc4\uc815 \uc120\ud0dd"}, storeContainer:{header:"\uc774 \uae30\uae30\uc5d0 \uacc4\uc815 \ucd94\uac00", headerMultiple:"\uc774 \uae30\uae30\uc5d0 \uacc4\uc815 \ucd94\uac00", description:"\ub9e4\ubc88 \ub85c\uadf8\uc778\ud558\uae30 \ubc88\uac70\ub85c\uc6b0\uc2ed\ub2c8\uae4c? \uc5ec\uae30\uc5d0 \uacc4\uc815\uc744 \ucd94\uac00\ud558\uc138\uc694. \uacc4\uc815\uc744 \ud074\ub9ad\ud558\uac70\ub098 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ub9cc \ud574\ub3c4 \uc1fc\ud551 \uc6f9\uc0ac\uc774\ud2b8\uc640 \uac19\uc740 \uc0c8\ub85c\uc6b4 \uc571\uc5d0 \uac00\uc785\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", 
descriptionMultiple:"\ub9e4\ubc88 \ub85c\uadf8\uc778\ud558\uae30 \ubc88\uac70\ub85c\uc6b0\uc2ed\ub2c8\uae4c? \uc5ec\uae30\uc5d0 \uacc4\uc815\uc744 \ucd94\uac00\ud558\uc138\uc694. \uacc4\uc815\uc744 \ud074\ub9ad\ud558\uac70\ub098 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ub9cc \ud574\ub3c4 \uc1fc\ud551 \uc6f9\uc0ac\uc774\ud2b8\uc640 \uac19\uc740 \uc0c8\ub85c\uc6b4 \uc571\uc5d0 \uac00\uc785\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.", benefits:["\uc774 \uae30\uae30\uc5d0 \uacc4\uc815\uc744 \ucd94\uac00\ud558\uba74 \ud398\uc774\uc9c0\uc5d0 \ub85c\uadf8\uc778\ud560 \ub54c\ub9c8\ub2e4 \uc774\uba54\uc77c \uc8fc\uc18c\ub97c \uc785\ub825\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ubaa9\ub85d\uc5d0\uc11c \uc62c\ubc14\ub978 \uacc4\uc815\uc744 \uc120\ud0dd\ud558\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4.", 
"\uc77c\ubd80 \ud398\uc774\uc9c0\ub294 \ube44\ubc00\ubc88\ud638\ub97c \uc694\uad6c\ud560 \uc218 \uc788\uc9c0\ub9cc \ub2e4\ub978 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 \uacc4\uc815 \uc774\ub984\uc744 \ud074\ub9ad\ud558\uba74 \uc790\ub3d9\uc73c\ub85c \ub85c\uadf8\uc778\ub429\ub2c8\ub2e4."]}, updateContainer:{header:"\uacc4\uc815 \uc138\ubd80\uc815\ubcf4 \uc5c5\ub370\uc774\ud2b8", description:"\uacc4\uc815 \uc120\ud0dd\uae30\uc5d0 \ud45c\uc2dc\ub420 \uc138\ubd80\uc815\ubcf4\ub97c \ud655\uc778\ud558\uc138\uc694."}, 
aboutContainer:{title:"\uacc4\uc815 \uc120\ud0dd\uae30 \uc815\ubcf4", header:"\uacc4\uc815 \uc120\ud0dd\uae30 \uc815\ubcf4", sec1Par1:"\uc6f9\uc0ac\uc774\ud2b8\uc5d0\uc11c \uc77c\ubc18\uc801\uc778 \ub85c\uadf8\uc778 \uc0c1\uc790\uac00 \uacc4\uc815 \uc120\ud0dd\uae30\ub85c \ubc14\ub00c\uc5b4 \uc0ac\uc774\ud2b8\uac00 \ub354 \uc548\uc804\ud558\uace0 \uc0ac\uc6a9\ud558\uae30 \uc26c\uc6cc\uc9d1\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc0ac\uc774\ud2b8\uc5d0 \ub85c\uadf8\uc778\ud558\uba74 \ub2e4\uc74c \ud398\uc774\uc9c0\uc5d0\uc11c \ubcf4\uc5ec\uc9c0\ub294 \uac83\ucc98\ub7fc \ucef4\ud4e8\ud130\uc5d0\uc11c \uac00\uc7a5 \uc790\uc8fc \uc0ac\uc6a9\ud558\ub294 \uacc4\uc815 \ubaa9\ub85d\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4.", 
subHeader1:"\uc0ac\uc6a9\uc790: \uc791\ub3d9 \ubc29\uc2dd", sec2Par1:"\uc774 \uae30\uae30\uc5d0 \uacc4\uc815\uc744 \ucd94\uac00\ud558\uba74 \ud398\uc774\uc9c0\uc5d0 \ub85c\uadf8\uc778\ud560 \ub54c\ub9c8\ub2e4 \uc774\uba54\uc77c \uc8fc\uc18c\ub97c \uc785\ub825\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ubaa9\ub85d\uc5d0\uc11c \uc62c\ubc14\ub978 \uacc4\uc815\uc744 \uc120\ud0dd\ud558\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4.", sec2Par2:"\uc77c\ubd80 \ud398\uc774\uc9c0\ub294 \ube44\ubc00\ubc88\ud638\ub97c \uc694\uad6c\ud560 \uc218 \uc788\uc9c0\ub9cc \ub2e4\ub978 \ud398\uc774\uc9c0\uc5d0\uc11c\ub294 \uacc4\uc815 \uc774\ub984\uc744 \ud074\ub9ad\ud558\uba74 \uc790\ub3d9\uc73c\ub85c \ub85c\uadf8\uc778\ub429\ub2c8\ub2e4.", 
subHeader2:"\uc6f9\uc0ac\uc774\ud2b8 \uc18c\uc720\uc790: \uc0ac\uc774\ud2b8\ub97c \uc5c5\uadf8\ub808\uc774\ub4dc\ud558\ub294 \ubc29\ubc95 \uc54c\uc544\ubcf4\uae30", sec3Par1:"\uacc4\uc815 \uc120\ud0dd\uae30\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \uc0ac\uc774\ud2b8\ub97c \uc5c5\uadf8\ub808\uc774\ub4dc\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uba87 \uac00\uc9c0 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.", sec3Par1List1:"\uc0ac\uc774\ud2b8 \ub85c\uadf8\uc778 \ubc0f \uac00\uc785 \uc18d\ub3c4 \uc99d\uac00", 
sec3Par1List2:"\ud5a5\ud6c4 \uc0ac\uc774\ud2b8\uc5d0\uc11c ID \uc81c\uacf5\uc5c5\uccb4\ub97c \uc9c0\uc6d0\ud558\uae30 \uc6a9\uc774\ud574\uc9d0", sec3Par1List3:"\uc0ac\uc774\ud2b8\uc758 \uadf9\ud788 \uc77c\ubd80\ubd84\ub9cc \ubcc0\uacbd\ud558\uba74 \ub428", deployButton:MSG_CONTAINER_ABOUT_DEPLOY_BUTTON('<a href="http://accountchooser.net/owners">', "</a>"), accountManHome:{email:"john.garcia@gmail.com", displayName:"John Garcia", photoUrl:window.accountchooser.images.manHome}, accountManWork:{email:"jgarcia@summitmedgroup.com", 
displayName:"John Garcia", photoUrl:window.accountchooser.images.manWork}, accountWomanHome:{email:"sara_corlett@yahoo.com", displayName:"Sara Corlett", photoUrl:window.accountchooser.images.womanHome}, accountWomanWork:{email:"corlett@alertblue.com", displayName:"Mrs. Corlett", photoUrl:window.accountchooser.images.womanWork}}, footerContainer:{copyright:"Copyright 2012 OpenID Foundation.", learnMore:"\uacc4\uc815 \uc120\ud0dd\uae30 \uc815\ubcf4", learnMoreLink:"/learnmore.html"}});
window.accountchooser = window.accountchooser || {};
window.accountchooser.config = window.accountchooser.config || {};
window.accountchooser.config.popup = {};
window.accountchooser.config.popup.width = 520;
window.accountchooser.config.popup.height = 550;
window.accountchooser.config.popup.HTML = '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>%%title%%</title>\n    <style type="text/css">\n      html,\n      body {\n        background: #f6f6f6;\n        text-align: center;\n        margin: 0;\n        padding: 0;\n      }\n      #message span {\n        display: inline-block;\n        margin: 20% 0 0;\n        padding: 20px;\n        font-weight: 300;\n        font-size: 16px;\n        text-align: center;\n        background: #fff;\n        border: 1px solid #ddd;\n        border-radius: 4px;\n        -moz-border-radius: 4px;\n        -webkit-border-radius: 4px;\n      }\n    </style>\n  </head>\n  <body>\n    <div id="message">\n      <span>%%message%%</span>\n    </div>\n  </body>\n</html>\n';
window.accountchooser.Page = window.accountchooser.Page || function() {
};
window.accountchooser.Page.prototype.render = function(container, resource, opt_showCloseIcon) {
  window.accountchooser.param.notNull(container, "container");
  window.accountchooser.param.notNull(resource, "resource");
  this.container_ = container;
  this.resource_ = resource;
  this.showCloseIcon_ = !!opt_showCloseIcon
};
window.accountchooser.Page.prototype.getContainer = function() {
  return this.container_
};
window.accountchooser.Page.prototype.getResource = function() {
  return this.resource_
};
window.accountchooser.Page.prototype.isShowCloseIcon = function() {
  return this.showCloseIcon_
};
window.accountchooser.Page.prototype.createTable = function(opt_styleClass) {
  var table = jQuery("<table>").attr("cellspacing", 0).attr("cellpadding", 0).attr("border", 0);
  opt_styleClass && table.addClass(opt_styleClass);
  return table
};
window.accountchooser.Page.prototype.createButton = function(caption, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(caption, "caption");
  window.accountchooser.param.notEmpty(handler, "handler");
  var btn = jQuery("<input type=button>").val(caption).addClass("widget-input-button");
  opt_styleClass && btn.addClass(opt_styleClass);
  var self = this;
  btn.click(function() {
    self[handler].call(self)
  });
  return btn
};
window.accountchooser.Page.prototype.createLinkButton = function(caption, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(caption, "caption");
  window.accountchooser.param.notEmpty(handler, "handler");
  var btn = jQuery("<a>").addClass("widget-link").html(caption);
  opt_styleClass && btn.addClass(opt_styleClass);
  var self = this;
  btn.click(function() {
    self[handler].call(self);
    return!1
  });
  return btn
};
window.accountchooser.Page.prototype.createRenderedButton = function(caption, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(caption, "caption");
  window.accountchooser.param.notEmpty(handler, "handler");
  var link = jQuery("<a>").html(caption).addClass("widget-button-link");
  var table = this.createTable("widget-button");
  opt_styleClass && table.addClass(opt_styleClass);
  var btnLine = jQuery("<tr>").appendTo(table);
  jQuery("<td>").addClass("widget-button-left").appendTo(btnLine);
  jQuery("<td>").addClass("widget-button-middle").append(link).appendTo(btnLine);
  jQuery("<td>").addClass("widget-button-right").appendTo(btnLine);
  var self = this;
  jQuery(table).click(function() {
    self[handler].call(self);
    return!1
  });
  return table
};
window.accountchooser.Page.prototype.createTextBox = function(inputClass, isPassword, opt_handler) {
  window.accountchooser.param.notEmpty(inputClass, "inputClass");
  var type = isPassword ? "password" : "text";
  var textBox = jQuery("<input type=" + type + ">");
  textBox.addClass(inputClass);
  if(opt_handler) {
    var self = this;
    textBox.keypress(function(origianlEvent) {
      self[opt_handler].call(self, origianlEvent)
    })
  }
  return textBox
};
window.accountchooser.Page.prototype.createCheckbox = function(labelHtml, checked, opt_styleClass) {
  window.accountchooser.param.notNull(labelHtml, "labelHtml");
  var checkBox = jQuery("<input type=checkbox>").attr("checked", !!checked);
  var label = jQuery("<label>").addClass("widget-checkbox-text").append(checkBox).append(labelHtml);
  var div = jQuery("<div>").addClass("widget-checkbox").append(label);
  opt_styleClass && div.addClass(opt_styleClass);
  return div
};
window.accountchooser.Page.prototype.createChoiceLink = function(caption, handler) {
  window.accountchooser.param.notEmpty(caption, "caption");
  window.accountchooser.param.notEmpty(handler, "handler");
  var div = jQuery("<div>").addClass("widget-choice-link");
  this.createLinkButton(caption, handler).appendTo(div);
  return div
};
window.accountchooser.Page.prototype.createInfoLinkSection = function(infoHtml, linkHtml, handler, styleClass) {
  window.accountchooser.param.notEmpty(infoHtml, "infoHtml");
  window.accountchooser.param.notEmpty(linkHtml, "linkHtml");
  window.accountchooser.param.notEmpty(handler, "handler");
  window.accountchooser.param.notEmpty(styleClass, "styleClass");
  var link = jQuery("<a>").html(linkHtml);
  var div = jQuery("<div>").addClass(styleClass).append(infoHtml).append(link);
  var self = this;
  link.click(function() {
    self[handler].call(self);
    return!1
  });
  return div
};
window.accountchooser.Page.prototype.createInfoLink = function(infoHtml, linkHtml, linkUrl, styleClass, opt_target) {
  window.accountchooser.param.notEmpty(linkHtml, "linkHtml");
  window.accountchooser.param.notEmpty(linkUrl, "linkUrl");
  window.accountchooser.param.notEmpty(styleClass, "styleClass");
  var link = jQuery("<a>").html(linkHtml).attr("href", linkUrl).attr("target", opt_target || "_blank");
  var div = jQuery("<div>").addClass(styleClass);
  infoHtml && div.append(infoHtml);
  div.append(link);
  return div
};
window.accountchooser.Page.prototype.createNascarLink_ = function(idp, idpId, handler) {
  window.accountchooser.param.notEmpty(idp, "idp");
  window.accountchooser.param.notEmpty(idpId, "idpId");
  window.accountchooser.param.notEmpty(handler, "handler");
  var idpDiv = jQuery("<div>").addClass("widget-idp");
  var idpLink = jQuery("<a>").attr("href", "javascript: void(0)").appendTo(idpDiv);
  var table = this.createTable("widget-idp-link").appendTo(idpLink);
  var idpTableLine = jQuery("<tr>").appendTo(table);
  idpTableLine.append(jQuery("<td>").append(jQuery("<img>").attr("src", idp.image).addClass("widget-idp-icon")));
  idpTableLine.append(jQuery("<td>").append(idp.label));
  var self = this;
  idpLink.click(function() {
    self[handler].call(self, idpId);
    return!1
  });
  return idpDiv
};
window.accountchooser.Page.prototype.createNascarList = function(idps, nascarIdpList, handler) {
  window.accountchooser.param.notEmpty(idps, "idps");
  window.accountchooser.param.notEmptyArray(nascarIdpList, "nascarIdpList");
  window.accountchooser.param.notEmpty(handler, "handler");
  var nascar = jQuery("<div>").addClass("widget-nascar-list");
  for(var i = 0;i < nascarIdpList.length;i++) {
    var idpId = nascarIdpList[i];
    this.createNascarLink_(idps[idpId], idpId, handler).appendTo(nascar)
  }
  return nascar
};
window.accountchooser.Page.prototype.createNascarSection = function(label, idps, nascarIdpList, handler) {
  window.accountchooser.param.notNull(label, "label");
  window.accountchooser.param.notEmpty(idps, "idps");
  window.accountchooser.param.notEmptyArray(nascarIdpList, "nascarIdpList");
  window.accountchooser.param.notEmpty(handler, "handler");
  var nascarSection = jQuery("<p>").append(label);
  this.createNascarList(idps, nascarIdpList, handler).appendTo(nascarSection);
  return nascarSection
};
window.accountchooser.Page.prototype.createHeader = function(title, opt_showCloseIcon, opt_closeIcon, opt_handler, opt_closeTitle) {
  window.accountchooser.param.notNull(title, "title");
  var headerBar = jQuery("<div>").addClass("widget-header-bar");
  this.header = jQuery("<div>").html(title).addClass("widget-header").appendTo(headerBar);
  if(opt_showCloseIcon) {
    window.accountchooser.param.notEmpty(opt_closeIcon, "opt_closeIcon");
    window.accountchooser.param.notEmpty(opt_handler, "opt_handler");
    var closeIcon = jQuery("<img>").attr("src", opt_closeIcon).addClass("widget-close-icon").appendTo(headerBar);
    opt_closeTitle && closeIcon.attr("title", opt_closeTitle);
    var self = this;
    closeIcon.click(function() {
      self[opt_handler].call(self)
    })
  }
  headerBar.append(jQuery("<div>").css("clear", "both"));
  return headerBar
};
window.accountchooser.Page.prototype.appendLabelledTextBox = function(parent, label, inputClass, isPassword, opt_handler) {
  window.accountchooser.param.notNull(parent, "parent");
  window.accountchooser.param.notNull(label, "label");
  window.accountchooser.param.notEmpty(inputClass, "inputClass");
  label && parent.append(label).append("<br>");
  parent.append(this.createTextBox(inputClass, isPassword, opt_handler))
};
window.accountchooser.Page.prototype.appendErrorDiv = function(parent) {
  window.accountchooser.param.notNull(parent, "parent");
  var errorDiv = jQuery("<div>").addClass("widget-error").appendTo(parent);
  return errorDiv
};
window.accountchooser.Page.prototype.appendMessageDiv = function(parent) {
  window.accountchooser.param.notNull(parent, "parent");
  var message = jQuery("<div>").addClass("widget-message").appendTo(parent).hide();
  return message
};
window.accountchooser.Page.prototype.appendClearDiv = function(parent) {
  window.accountchooser.param.notNull(parent, "parent");
  jQuery("<div>").addClass("cl").appendTo(parent)
};
window.accountchooser.Page.prototype.putCenter = function(opt_child, opt_parent) {
  var center = jQuery("<center>");
  opt_child && center.append(opt_child);
  opt_parent && center.appendTo(opt_parent);
  return center
};
window.accountchooser.Page.prototype.createIconButton = function(icon, handler, opt_param, opt_styleClass) {
  var buttonDiv = jQuery("<div>").addClass("wizard-idp");
  opt_styleClass && buttonDiv.addClass(opt_styleClass);
  var buttonLink = jQuery("<a>").attr("href", "javascript: void(0)");
  buttonLink.append(jQuery("<img>").attr("src", icon));
  var self = this;
  buttonDiv.click(function() {
    self[handler].call(self, opt_param);
    return!1
  });
  buttonLink.appendTo(buttonDiv);
  return buttonDiv
};
window.accountchooser.Page.prototype.createNascarLink_ = function(idp, idpId, handler) {
  window.accountchooser.param.notEmpty(idp, "idp");
  window.accountchooser.param.notEmpty(idpId, "idpId");
  window.accountchooser.param.notEmpty(handler, "handler");
  var li = jQuery("<li>").css("backgroundImage", 'url("' + idp.image + '")').addClass("widget-idp");
  var idpLink = jQuery("<a>").attr("href", "javascript: void(0)").append(jQuery("<span>").html(idp.label)).appendTo(li);
  var self = this;
  idpLink.click(function() {
    self[handler].call(self, idpId);
    return!1
  });
  return li
};
window.accountchooser.Page.prototype.createNascarList = function(idps, nascarIdpList, handler) {
  window.accountchooser.param.notEmpty(idps, "idps");
  window.accountchooser.param.notEmptyArray(nascarIdpList, "nascarIdpList");
  window.accountchooser.param.notEmpty(handler, "handler");
  var nascar = jQuery("<ol>");
  for(var i = 0;i < nascarIdpList.length;i++) {
    var idpId = nascarIdpList[i];
    this.createNascarLink_(idps[idpId], idpId, handler).appendTo(nascar)
  }
  return nascar
};
window.accountchooser.Page.prototype.createNascarSection = function(label, idps, nascarIdpList, handler) {
  window.accountchooser.param.notEmpty(idps, "idps");
  window.accountchooser.param.notEmptyArray(nascarIdpList, "nascarIdpList");
  window.accountchooser.param.notEmpty(handler, "handler");
  var nascarSection = jQuery("<div>").addClass("widget-nascar-list").append(jQuery("<h2>").html(label));
  this.createNascarList(idps, nascarIdpList, handler).appendTo(nascarSection);
  return nascarSection
};
window.accountchooser.Page.prototype.createHeader = function(title, opt_showCloseIcon, opt_closeIcon, opt_handler, opt_closeTitle, opt_styleClass) {
  window.accountchooser.param.notNull(title, "title");
  var headerBar = jQuery("<div>").addClass("widget-header").append(jQuery("<h1>").html(title));
  opt_styleClass && headerBar.addClass(opt_styleClass);
  if(opt_showCloseIcon) {
    window.accountchooser.param.notEmpty(opt_handler, "opt_handler");
    var closeIcon = jQuery("<span>").addClass("widget-close-icon").appendTo(headerBar);
    opt_closeTitle && closeIcon.attr("title", opt_closeTitle);
    var self = this;
    closeIcon.click(function() {
      self[opt_handler].call(self)
    })
  }
  return headerBar
};
window.accountchooser.Page.prototype.createAccountBox = function(email, legacy, displayName, photoUrl, handler, removeIconUrl, removeHandler, removeTitle, opt_providerId) {
  window.accountchooser.param.notEmpty(email, "email");
  window.accountchooser.param.notNull(legacy, "legacy");
  window.accountchooser.param.notEmpty(photoUrl, "photoUrl");
  window.accountchooser.param.notEmpty(handler, "handler");
  window.accountchooser.param.notEmpty(removeHandler, "removeHandler");
  window.accountchooser.param.notEmpty(removeTitle, "removeTitle");
  var li = jQuery("<li>").addClass("widget-account");
  jQuery("<img>").attr("src", photoUrl).addClass("widget-account-photo").appendTo(li);
  var account = jQuery("<p>").appendTo(li);
  displayName ? account.append(jQuery("<strong>").addClass("widget-account-name").html(displayName)) : account.addClass("widget-email-only");
  account.append(jQuery("<span>").addClass("widget-account-email").html(email));
  var removeLink = jQuery("<a>").addClass("widget-account-remove").attr("title", removeTitle).attr("href", "javascript: void(0)").appendTo(li);
  removeLink.append(jQuery("<img>").attr("src", removeIconUrl));
  var self = this;
  li.click(function() {
    self[handler].call(self, {email:email, displayName:displayName, legacy:!!legacy, photoUrl:photoUrl, providerId:opt_providerId});
    return!1
  });
  removeLink.click(function() {
    self[removeHandler].call(self, {email:email, displayName:displayName, legacy:!!legacy, photoUrl:photoUrl, providerId:opt_providerId});
    return!1
  });
  return li
};
window.accountchooser.Page.prototype.createPopupIndicator = function(busyIcon, busyLabel, handler) {
  window.accountchooser.param.notEmpty(busyIcon, "busyIcon");
  window.accountchooser.param.notEmpty(busyLabel, "busyLabel");
  window.accountchooser.param.notEmpty(handler, "handler");
  var main = jQuery("<div>").addClass("widget-main");
  var loading = jQuery("<div>").addClass("widget-loading").appendTo(main);
  loading.append(jQuery("<img>").attr("src", busyIcon));
  loading.append(jQuery("<p>").html(busyLabel));
  var self = this;
  main.click(function() {
    self[handler].call(self);
    return!1
  });
  return main
};
window.accountchooser.Page.prototype.createLegacyAccountSignInBox = function(email, displayName, photoUrl, opt_styleClass) {
  window.accountchooser.param.notEmpty(email, "email");
  window.accountchooser.param.notEmpty(photoUrl, "photoUrl");
  var li = jQuery("<li>").addClass("widget-account");
  opt_styleClass && li.addClass(opt_styleClass);
  jQuery("<img>").attr("src", photoUrl).addClass("widget-account-photo").appendTo(li);
  var account = jQuery("<p>").appendTo(li);
  displayName ? account.append(jQuery("<strong>").addClass("widget-account-name").html(displayName)) : account.addClass("widget-email-only");
  account.append(jQuery("<span>").addClass("widget-account-email").html(email));
  return li
};
window.accountchooser.Page.prototype.createKeyholeButton = function(keyholeUrl, caption, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(keyholeUrl, "keyholeUrl");
  window.accountchooser.param.notEmpty(caption, "caption");
  window.accountchooser.param.notEmpty(handler, "handler");
  var button = jQuery("<a>").attr("href", "javascript: void(0)").addClass("widget-keyhole-button");
  opt_styleClass && button.addClass(opt_styleClass);
  jQuery("<img>").attr("src", keyholeUrl).appendTo(button);
  button.append(caption);
  var self = this;
  button.click(function() {
    self[handler].call(self);
    return!1
  });
  return button
};
window.accountchooser.Page.prototype.createRenderedButton = function(caption, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(caption, "caption");
  window.accountchooser.param.notEmpty(handler, "handler");
  var button = jQuery("<a>").attr("href", "javascript: void(0)").addClass("widget-keyhole-button");
  opt_styleClass && button.addClass(opt_styleClass);
  button.append(caption);
  var self = this;
  button.click(function() {
    self[handler].call(self);
    return!1
  });
  return button
};
window.accountchooser.Page.prototype.appendErrorDiv = function(parent) {
  window.accountchooser.param.notNull(parent, "parent");
  var errorDiv = jQuery("<div>").addClass("widget-error").append(jQuery("<p>")).appendTo(parent);
  return errorDiv
};
window.accountchooser.Page.prototype.createAccountBox_ = function(account, defaultPhotoUrl, mode, opt_handler) {
  window.accountchooser.param.notNull(account, "account");
  window.accountchooser.param.notEmpty(account.email, "account.email");
  window.accountchooser.param.notEmpty(defaultPhotoUrl, "defaultPhotoUrl");
  window.accountchooser.param.notEmpty(mode, "mode");
  var title = account.email;
  account.providerId && (title += " (" + account.providerId + ")");
  var li = jQuery("<li>").attr("title", title);
  var photoUrl;
  /^https?:\/\//i.test(account.photoUrl) && (photoUrl = account.photoUrl);
  var img = jQuery("<img>").attr("src", photoUrl || defaultPhotoUrl).addClass("widget-account-photo").appendTo(li);
  img.error(function() {
    img.attr("src", defaultPhotoUrl)
  });
  var accountInfo = jQuery("<p>").appendTo(li);
  account.displayName ? accountInfo.append(jQuery("<strong>").addClass("widget-account-name").text(account.displayName)) : accountInfo.addClass("widget-email-only");
  var emailLine = jQuery("<span>").addClass("widget-account-email").text(account.email).appendTo(accountInfo);
  if(account.providerId) {
    var idpLine = jQuery("<span>").addClass("widget-account-idp").text(account.providerId).appendTo(accountInfo);
    var faviconUrl = "http://" + account.providerId + "/favicon.ico";
    var favicon = jQuery("<img>").attr("src", faviconUrl).attr("title", account.providerId).attr("alt", account.providerId);
    favicon.load(function() {
      idpLine.hide();
      emailLine.prepend(favicon)
    })
  }
  "removable" == mode ? (jQuery("<span>").addClass("widget-account-remove").appendTo(li), li.addClass("widget-selectable-account")) : "selectable" == mode ? (jQuery("<span>").addClass("widget-account-select").appendTo(li), li.addClass("widget-selectable-account")) : "disabled" == mode && li.addClass("widget-disabled-account");
  if(opt_handler && "disabled" != mode) {
    var self = this;
    li.click(function() {
      self[opt_handler].call(self, account);
      return!1
    })
  }
  return li
};
window.accountchooser.Page.prototype.createSelectableAccountBox = function(account, defaultPhotoUrl, handler) {
  window.accountchooser.param.notEmpty(handler, "handler");
  return this.createAccountBox_(account, defaultPhotoUrl, "selectable", handler)
};
window.accountchooser.Page.prototype.createRemovableAccountBox = function(account, defaultPhotoUrl, handler) {
  window.accountchooser.param.notEmpty(handler, "handler");
  return this.createAccountBox_(account, defaultPhotoUrl, "removable", handler)
};
window.accountchooser.Page.prototype.createDisabledAccountBox = function(account, defaultPhotoUrl) {
  return this.createAccountBox_(account, defaultPhotoUrl, "disabled")
};
window.accountchooser.Page.prototype.createAccountBox = function(account, defaultPhotoUrl) {
  return this.createAccountBox_(account, defaultPhotoUrl, "readonly")
};
window.accountchooser.Page.prototype.createLearnMoreLink = function(text, url, opt_Language) {
  opt_Language && (url = 0 > url.indexOf("?") ? url + ("?lang=" + opt_Language) : url + ("&lang=" + opt_Language));
  return jQuery("<a>").attr("href", url).attr("target", "_blank").html(text)
};
window.accountchooser.Page.prototype.createHeader = function(title, opt_subTitle, opt_showCloseIcon, opt_closeIcon, opt_handler, opt_closeTitle, opt_styleClass) {
  window.accountchooser.param.notNull(title, "title");
  var headerBar = jQuery("<div>").addClass("widget-header").append(jQuery("<h1>").html(title));
  opt_subTitle && (jQuery("<h2>").html(opt_subTitle).appendTo(headerBar), headerBar.addClass("widget-header-with-sub"));
  opt_styleClass && headerBar.addClass(opt_styleClass);
  if(opt_showCloseIcon) {
    window.accountchooser.param.notEmpty(opt_handler, "opt_handler");
    var closeIcon = jQuery("<span>").addClass("widget-close-icon").appendTo(headerBar);
    opt_closeTitle && closeIcon.attr("title", opt_closeTitle);
    var self = this;
    closeIcon.click(function() {
      self[opt_handler].call(self)
    })
  }
  return headerBar
};
window.accountchooser.Page.prototype.clearError = function() {
  jQuery(".widget-error", this.container_).hide();
  this.getErrorElement().empty()
};
window.accountchooser.Page.prototype.isShowingError = function() {
  return"none" != jQuery(".widget-error", this.container_).css("display")
};
window.accountchooser.Page.prototype.setError = function(errorHtml) {
  jQuery(".widget-error", this.container_).show();
  this.getErrorElement().html(errorHtml)
};
window.accountchooser.Page.prototype.getErrorElement = function() {
  return jQuery(".widget-error p", this.container_)
};
window.accountchooser.Page.prototype.getAccountElements = function() {
  return jQuery("li", this.container_)
};
window.accountchooser.Page.prototype.getAccountElement = function(index) {
  window.accountchooser.param.notNull(index, "index");
  return jQuery("li:eq(" + index + ")", this.container_)
};
window.accountchooser.Page.prototype.getConfirmElement = function() {
  return jQuery(".widget-footer a.widget-keyhole-button", this.container_)
};
window.accountchooser.Page.prototype.getCancelElement = function() {
  return jQuery(".widget-footer a.widget-button-skip", this.container_)
};
window.accountchooser.Page.prototype.getAddAccountElement = function() {
  return jQuery(".widget-footer a.widget-account-add", this.container_)
};
window.accountchooser.Page.prototype.createSigninBar = function(photoUrl, label, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(photoUrl, "photoUrl");
  window.accountchooser.param.notEmpty(label, "label");
  window.accountchooser.param.notEmpty(handler, "handler");
  return this.createKeyholeButton(photoUrl, label, handler, opt_styleClass)
};
window.accountchooser.Page.prototype.createNavBar = function(photoUrl, label, handler, arrowUrl, opt_styleClass) {
  window.accountchooser.param.notEmpty(photoUrl, "photoUrl");
  window.accountchooser.param.notEmpty(label, "label");
  window.accountchooser.param.notEmpty(handler, "handler");
  window.accountchooser.param.notEmpty(arrowUrl, "arrowUrl");
  var button = jQuery("<a>").attr("href", "javascript: void(0)").addClass("widget-keyhole-button");
  opt_styleClass && button.addClass(opt_styleClass);
  jQuery("<img>").attr("src", photoUrl).appendTo(button);
  button.append(jQuery("<span>").html(label));
  jQuery("<img>").addClass("widget-navbar-arrow").attr("src", arrowUrl).appendTo(button);
  var self = this;
  button.click(function() {
    self[handler].call(self);
    return!1
  });
  return button
};
window.accountchooser.Page.prototype.createDropMenu = function(menuArray) {
  window.accountchooser.param.notEmpty(menuArray, "menuArray");
  var menu = jQuery("<ol>").addClass("widget-navbar-menu");
  for(var i = 0;i < menuArray.length;i++) {
    var item = menuArray[i];
    item && (item.label && (item.url || item.handler)) && menu.append(this.createMenuItem_(item.label, item.url, item.handler, item.opt_styleClass))
  }
  return menu
};
window.accountchooser.Page.prototype.createMenuItem_ = function(label, url, handler, opt_styleClass) {
  window.accountchooser.param.notEmpty(label, "label");
  window.accountchooser.param.notEmpty(url || handler, "url or handler");
  var item = jQuery("<li>").addClass("widget-navbar-menuitem");
  opt_styleClass && item.addClass(opt_styleClass);
  var link = jQuery("<a>").append(jQuery("<nobr>").html(label)).appendTo(item);
  var self = this;
  link.click(function() {
    jQuery.isFunction(handler) ? handler.call(self) : handler ? self[handler].call(self) : window.location.href = url;
    return!1
  });
  return item
};
window.accountchooser.page = window.accountchooser.page || {};
window.accountchooser.page.EmptyRequestPage = function() {
};
window.accountchooser.page.EmptyRequestPage.inheritsFrom(window.accountchooser.Page);
window.accountchooser.page.EmptyRequestPage.prototype.render = function(container, opt_clientDomain, opt_resource) {
  this.clientDomain_ = opt_clientDomain;
  var resource = opt_resource || window.accountchooser.labels.emptyRequestPage;
  this.parentClass.render.call(this, container, resource, !1);
  this.render_()
};
window.accountchooser.page.EmptyRequestPage.prototype.render_ = function() {
  this.createHeader(this.resource_.title, this.showCloseIcon_, this.resource_.closeIcon, "onCloseIconClicked", this.resource_.close).appendTo(this.container_);
  var main = jQuery("<div>").addClass("widget-empty-request widget-main").appendTo(this.container_);
  this.appendErrorDiv(main).html(this.resource_.msg);
  var action = jQuery("<div>").appendTo(main);
  this.clientDomain_ ? action.html(this.resource_.actionWithDomain.replace(/\%\%domain\%\%/g, this.clientDomain_)) : action.html(this.resource_.action);
  var footer = jQuery("<div>").addClass("widget-footer").appendTo(this.container_);
  jQuery("<a>").attr("href", this.resource_.acSiteUrl).attr("target", "_blank").html(this.resource_.acSiteText).appendTo(footer)
};
window.accountchooser.page.ShareAccountPage = function() {
};
window.accountchooser.page.ShareAccountPage.inheritsFrom(window.accountchooser.Page);
window.accountchooser.page.ShareAccountPage.prototype.render = function(container, accounts, opt_resource) {
  this.accounts_ = accounts;
  var resource = opt_resource;
  resource || (resource = window.accountchooser.labels.shareAccountPage);
  this.parentClass.render.call(this, container, resource, !1);
  this.render_()
};
window.accountchooser.page.ShareAccountPage.prototype.render_ = function() {
  var title = 1 >= this.accounts_.length ? this.resource_.title : this.resource_.titleMultiple;
  this.createHeader(title, null, this.showCloseIcon_, this.resource_.closeIcon, "onCloseIconClicked", this.resource_.close).appendTo(this.container_);
  var main = jQuery("<div>").addClass("widget-accounts widget-main").appendTo(this.container_);
  var defaultPhotoUrl = window.accountchooser.images.noPhoto;
  if(this.accounts_.length) {
    var accounts = jQuery("<ol>").appendTo(main);
    for(var index = 0;index < this.accounts_.length;index++) {
      var account = this.accounts_[index];
      account && this.createAccountBox(account, defaultPhotoUrl).appendTo(accounts)
    }
  }
  var footer = jQuery("<div>").addClass("widget-footer").appendTo(this.container_);
  var confirm = 1 >= this.accounts_.length ? this.resource_.confirm : this.resource_.confirmMultiple;
  this.createRenderedButton(confirm, "onShareConfirmedClicked").appendTo(footer);
  this.createLinkButton(this.resource_.cancel, "onShareCancelClicked", "widget-button-skip").appendTo(footer)
};
window.accountchooser.page.ShareAccountPage.prototype.onShareConfirmedClicked = function() {
};
window.accountchooser.page.ShareAccountPage.prototype.onShareCancelClicked = function() {
};
window.accountchooser.page.SelectAccountPage = function() {
};
window.accountchooser.page.SelectAccountPage.inheritsFrom(window.accountchooser.Page);
window.accountchooser.page.SelectAccountPage.prototype.render = function(container, accounts, opt_otherAccounts, opt_domain, opt_resource) {
  this.accounts_ = accounts || [];
  this.otherAccounts_ = opt_otherAccounts || [];
  var resource = opt_resource;
  resource || (resource = window.accountchooser.labels.selectAccountPage);
  this.parentClass.render.call(this, container, resource, !1);
  this.siteDomain_ = opt_domain || "";
  this.render_()
};
window.accountchooser.page.SelectAccountPage.prototype.render_ = function() {
  this.createHeader(this.resource_.title, this.siteDomain_, this.showCloseIcon_, this.resource_.closeIcon, "onCloseIconClicked", this.resource_.close).appendTo(this.container_);
  var main = jQuery("<div>").addClass("widget-accounts widget-main").appendTo(this.container_);
  var defaultPhotoUrl = window.accountchooser.images.noPhoto;
  var accounts = jQuery("<ol>").appendTo(main);
  for(var i = 0;i < this.accounts_.length;i++) {
    var account = this.accounts_[i];
    account && account.email && this.createSelectableAccountBox(account, defaultPhotoUrl, "onAccountClicked").appendTo(accounts)
  }
  if(this.otherAccounts_.length) {
    var moreLink = jQuery("<div>").addClass("widget-more-accounts-button").appendTo(main);
    jQuery("<a>").attr("href", "javascript:void(0);").text(this.resource_.seeMoreAccounts).appendTo(moreLink);
    jQuery("<span>").addClass("widget-more-accounts-indicator").appendTo(moreLink);
    var moreAccounts = jQuery("<div>").addClass("widget-more-accounts").appendTo(main).hide();
    jQuery("<h2>").text(this.resource_.notUsable).appendTo(moreAccounts);
    accounts = jQuery("<ol>").appendTo(moreAccounts);
    for(i = 0;i < this.otherAccounts_.length;i++) {
      account = this.otherAccounts_[i], account && account.email && this.createDisabledAccountBox(account, defaultPhotoUrl).appendTo(accounts)
    }
    moreLink.click(function() {
      jQuery(moreLink).toggleClass("widget-more-accounts-expanded");
      moreAccounts.toggle()
    })
  }
  var footer = jQuery("<div>").addClass("widget-footer").appendTo(this.container_);
  this.createLinkButton(this.resource_.addAccount, "onAddAccountClicked", "widget-account-add").appendTo(footer)
};
window.accountchooser.page.SelectAccountPage.prototype.onAccountClicked = function() {
};
window.accountchooser.page.SelectAccountPage.prototype.onAddAccountClicked = function() {
};
window.accountchooser.Page.prototype.getAccountElements = function() {
  return jQuery("li:visible", this.container_)
};
window.accountchooser.Page.prototype.getAccountElement = function(index) {
  window.accountchooser.param.notNull(index, "index");
  return jQuery("li:visible:eq(" + index + ")", this.container_)
};
window.accountchooser.Page.prototype.getHiddenAccountElements = function() {
  return jQuery("li:hidden", this.container_)
};
window.accountchooser.Page.prototype.getHiddenAccountElement = function(index) {
  window.accountchooser.param.notNull(index, "index");
  return jQuery("li:hidden:eq(" + index + ")", this.container_)
};
window.accountchooser.Page.prototype.getSeeMoreAccountsElement = function() {
  return jQuery(".widget-more-accounts-button", this.container_)
};
window.accountchooser.page.UpdateAccountPage = function() {
};
window.accountchooser.page.UpdateAccountPage.inheritsFrom(window.accountchooser.Page);
window.accountchooser.page.UpdateAccountPage.prototype.render = function(container, account, opt_language, opt_resource) {
  this.account_ = account;
  var resource = opt_resource;
  resource || (resource = window.accountchooser.labels.updateAccountPage);
  this.parentClass.render.call(this, container, resource, !1);
  this.language = opt_language;
  this.render_()
};
window.accountchooser.page.UpdateAccountPage.prototype.render_ = function() {
  this.createHeader(this.resource_.title, null, this.showCloseIcon_, this.resource_.closeIcon, "onCloseIconClicked", this.resource_.close).appendTo(this.container_);
  var main = jQuery("<div>").addClass("widget-accounts widget-main").appendTo(this.container_);
  var updateAccount = jQuery("<ol>").appendTo(main);
  var defaultPhotoUrl = window.accountchooser.images.noPhoto;
  this.createAccountBox(this.account_, defaultPhotoUrl).appendTo(updateAccount);
  var footer = jQuery("<div>").addClass("widget-footer").appendTo(this.container_);
  this.createRenderedButton(this.resource_.confirm, "onUpdateConfirmedClicked").appendTo(footer);
  this.createLinkButton(this.resource_.cancel, "onUpdateCancelClicked", "widget-button-skip").appendTo(footer)
};
window.accountchooser.page.UpdateAccountPage.prototype.onUpdateConfirmedClicked = function() {
};
window.accountchooser.page.UpdateAccountPage.prototype.onUpdateCancelClicked = function() {
};
window.accountchooser.page.ManageAccountPage = function() {
};
window.accountchooser.page.ManageAccountPage.inheritsFrom(window.accountchooser.Page);
window.accountchooser.page.ManageAccountPage.prototype.render = function(container, opt_accounts, opt_language, opt_resource) {
  this.accounts_ = opt_accounts || [];
  var resource = opt_resource || window.accountchooser.labels.manageAccountPage;
  this.parentClass.render.call(this, container, resource, !1);
  this.language = opt_language;
  this.render_()
};
window.accountchooser.page.ManageAccountPage.prototype.render_ = function() {
  this.createHeader(this.resource_.title, null, this.showCloseIcon_, this.resource_.closeIcon, "onCloseIconClicked", this.resource_.close).appendTo(this.container_);
  var main = jQuery("<div>").addClass("widget-accounts widget-main").appendTo(this.container_);
  this.appendErrorDiv(main).hide();
  var defaultPhotoUrl = window.accountchooser.images.noPhoto;
  if(this.accounts_.length) {
    var accounts = jQuery("<ol>").appendTo(main);
    for(var i = 0;i < this.accounts_.length;++i) {
      var account = this.accounts_[i];
      account && account.email && this.createRemovableAccountBox(account, defaultPhotoUrl, "onAccountClicked").appendTo(accounts)
    }
  }
};
window.accountchooser.page.ManageAccountPage.prototype.onAccountClicked = function() {
};
window.accountchooser.Service = function() {
};
window.accountchooser.Service.prototype.setCdsConfig = function(cdsConfig) {
  this.cdsConfig_ = cdsConfig
};
window.accountchooser.Service.prototype.setContainer = function(container) {
  this.container_ = container
};
window.accountchooser.Service.prototype.checkRequestType_ = function(expectType, opt_notToClient) {
  var error = null;
  !this.request_ instanceof window.accountchooser.rpc.Request ? error = {code:-32600, message:"Invalid Request", data:"Parameter must be a Request type."} : !this.request_ instanceof expectType && (error = {code:-32600, message:"Invalid Request", data:"Error request type: expect type is {" + expectType + "}."});
  return error ? (this.sendErrorResponse_(error, opt_notToClient), !1) : !0
};
window.accountchooser.Service.prototype.executeRequest = function(request, clientDomain) {
  request ? (this.request_ = request, this.clientDomain_ = clientDomain, window.accountchooser.util.browserconfig.isDisabled() && !(this instanceof window.accountchooser.ManageService) && !(this instanceof window.accountchooser.AboutService) ? this.sendDisabledErrorResponse_() : this.execute()) : window.accountchooser.util.log("Empty request received, ignored.")
};
window.accountchooser.Service.prototype.execute = function() {
  var error = {code:-32601, message:"Method not found", data:"Unimplemented 'execute' method!"};
  this.sendErrorResponse_(error)
};
window.accountchooser.Service.prototype.sendResponse_ = function(response, opt_notToClient) {
  window.accountchooser.rpc.callClient(response);
  opt_notToClient || this.goToClient()
};
window.accountchooser.Service.prototype.sendErrorResponse_ = function(error, opt_notToClient) {
  var response = new window.accountchooser.rpc.Response(this.request_.getId(), void 0, error);
  this.sendResponse_(response, opt_notToClient)
};
window.accountchooser.Service.prototype.sendDisabledErrorResponse_ = function(opt_notToClient) {
  var error = {code:-32601, message:"Method not found", data:"Service is disabled. Method is not available."};
  this.sendErrorResponse_(error, opt_notToClient)
};
window.accountchooser.Service.prototype.sendDoneResponse_ = function(result, opt_notToClient) {
  var response = new window.accountchooser.rpc.Response(this.request_.getId(), result);
  this.sendResponse_(response, opt_notToClient)
};
window.accountchooser.Service.prototype.sendStoreResponse = function(stored, opt_notToClient) {
  var positiveCallbackUrl = this.getClientConfigValue("positiveCallbackUrl");
  var negativeCallbackUrl = this.getClientConfigValue("negativeCallbackUrl");
  stored && positiveCallbackUrl ? window.location.replace(positiveCallbackUrl) : !stored && negativeCallbackUrl ? window.location.replace(negativeCallbackUrl) : this.sendDoneResponse_({stored:stored}, opt_notToClient)
};
window.accountchooser.Service.prototype.sendSelectResponse = function(account, opt_idpAssertion, opt_notToClient) {
  this.sendDoneResponse_({account:account, idpAssertion:opt_idpAssertion}, opt_notToClient)
};
window.accountchooser.Service.prototype.sendAddAccountResponse = function(opt_notToClient) {
  this.sendDoneResponse_({addAccount:!0}, opt_notToClient)
};
window.accountchooser.Service.prototype.sendUpdateResponse = function(updated, opt_notToClient) {
  var positiveCallbackUrl = this.getClientConfigValue("positiveCallbackUrl");
  var negativeCallbackUrl = this.getClientConfigValue("negativeCallbackUrl");
  updated && positiveCallbackUrl ? window.location.replace(positiveCallbackUrl) : !updated && negativeCallbackUrl ? window.location.replace(negativeCallbackUrl) : this.sendDoneResponse_({updated:updated}, opt_notToClient)
};
window.accountchooser.Service.prototype.goToClient = function() {
  var request = this.request_;
  this.request_ = null;
  this.clientDomain_ = null;
  this.cdsConfig_.popupMode ? request.params_.clientConfig.keepPopup || window.close() : window.location = request.params_.clientConfig.clientCallbackUrl
};
window.accountchooser.Service.prototype.getClientConfigValue = function(config) {
  return config && this.request_ && this.request_.params_ && this.request_.params_.clientConfig && this.request_.params_.clientConfig[config]
};
window.accountchooser.ServiceType = {MANAGE:"manage", SELECT:"select", STORE:"store", UPDATE:"update", ABOUT:"about"};
window.accountchooser.ManageService = function() {
};
window.accountchooser.ManageService.inheritsFrom(window.accountchooser.Service);
window.accountchooser.ManageService.prototype.execute = function() {
  if(this.checkRequestType_(window.accountchooser.rpc.ManageRequest)) {
    var accounts = window.accountchooser.util.accountstorage.readAccounts();
    this.showManageAccountPage_(accounts)
  }
};
window.accountchooser.ManageService.prototype.showManageAccountPage_ = function(accounts$$0) {
  this.container_.empty();
  this.page_ = new window.accountchooser.page.ManageAccountPage;
  var self = this;
  this.page_.onAccountClicked = function(account) {
    window.accountchooser.util.accountstorage.removeAccount(account);
    var accounts = window.accountchooser.util.accountstorage.readAccounts();
    self.showManageAccountPage_(accounts);
    self.page_.setError(window.accountchooser.labels.manageAccountPage.deleteReminder)
  };
  this.page_.render(this.container_, accounts$$0, void 0, void 0, !1)
};
window.accountchooser.StoreService = function() {
};
window.accountchooser.StoreService.inheritsFrom(window.accountchooser.Service);
window.accountchooser.StoreService.prototype.execute = function() {
  if(this.checkRequestType_(window.accountchooser.rpc.StoreRequest)) {
    var cdsAccounts = window.accountchooser.util.accountstorage.readAccounts();
    var accounts = window.accountchooser.util.sanitizeAccounts(this.request_.params_.accounts || [], window.accountchooser.util.accountSanitizer);
    this.accounts_ = [];
    var i = 0;
    for(var length = accounts.length;i < length;i++) {
      var account = accounts[i];
      var stored = !1;
      for(var j = 0;j < cdsAccounts.length;j++) {
        if(window.accountchooser.util.accountstorage.matchAccount(cdsAccounts[j], account)) {
          stored = !0;
          break
        }
      }
      stored || this.accounts_.push(account)
    }
    0 == this.accounts_.length ? this.sendStoreResponse(!0) : this.showShareAccountPage_()
  }
};
window.accountchooser.StoreService.prototype.showShareAccountPage_ = function() {
  this.container_.empty().addClass("widget-panel-chooser");
  var self = this;
  this.page_ = new window.accountchooser.page.ShareAccountPage;
  this.page_.onShareConfirmedClicked = function() {
    for(var i = 0;i < self.accounts_.length;i++) {
      window.accountchooser.util.accountstorage.addAccount(self.accounts_[i])
    }
    self.sendStoreResponse(!0)
  };
  this.page_.onShareCancelClicked = function() {
    self.sendStoreResponse(!1)
  };
  this.page_.render(this.container_, this.accounts_, void 0, !1)
};
window.accountchooser.SelectService = function() {
};
window.accountchooser.SelectService.inheritsFrom(window.accountchooser.Service);
window.accountchooser.SelectService.prototype.execute = function() {
  if(this.checkRequestType_(window.accountchooser.rpc.SelectRequest)) {
    var showAll = this.getClientConfigValue("showAll");
    this.filter = {withEmail:!showAll, idpList:this.getClientConfigValue("idpFilter")};
    var cdsAccounts = window.accountchooser.util.accountstorage.readAccounts(this.filter) || [];
    var localAccounts = window.accountchooser.util.sanitizeAccounts(this.request_.params_.localAccounts || [], window.accountchooser.util.accountSanitizer);
    var accounts = this.removeDuplicatedAccount_(localAccounts.concat(cdsAccounts));
    var result = this.filterAccountByProviders_(accounts, this.getClientConfigValue("providers") || []);
    var qualified = result.qualified;
    var rest = result.rest;
    this.getClientConfigValue("showAll") || (qualified = this.removeUsernameOnlyAccount_(qualified), rest = this.removeUsernameOnlyAccount_(rest));
    qualified.length ? (this.getClientConfigValue("language"), this.showSelectAccountPage_(qualified, rest)) : this.sendAddAccountResponse()
  }
};
window.accountchooser.SelectService.prototype.getAssertion_ = function(account) {
  var idp = window.accountchooser.rpc.isSupportedIdp(account);
  if(idp) {
    var self = this;
    var callback = function(response) {
      response && response.getResult() ? self.sendSelectResponse(account, response.getResult().idpAssertion) : self.sendSelectResponse(account)
    };
    var timeout = function() {
      self.sendSelectResponse(account)
    };
    var request = new window.accountchooser.rpc.IdpAuthRequest(account, {clientCallbackUrl:this.getClientConfigValue("clientCallbackUrl")});
    window.accountchooser.rpc.callIdp(idp, request, callback, timeout)
  }else {
    this.sendSelectResponse(account)
  }
};
window.accountchooser.SelectService.prototype.showSelectAccountPage_ = function(accounts, otherAccounts) {
  this.container_.empty().addClass("widget-panel-chooser");
  var self = this;
  this.page_ = new window.accountchooser.page.SelectAccountPage;
  this.page_.onAccountClicked = function(account) {
    account.synthesized || window.accountchooser.util.accountstorage.addAccount(account);
    delete account.synthesized;
    self.getAssertion_(account)
  };
  this.page_.onAddAccountClicked = function() {
    self.sendAddAccountResponse()
  };
  var callbackDomain = this.request_.params_.clientConfig.clientCallbackUrl && window.accountchooser.util.getDomainFromUrl(this.request_.params_.clientConfig.clientCallbackUrl);
  this.page_.render(this.container_, accounts, otherAccounts, callbackDomain, void 0, !1)
};
window.accountchooser.SelectService.prototype.removeDuplicatedAccount_ = function(accounts) {
  var result = [];
  var i = 0;
  for(var length = accounts.length;i < length;i++) {
    0 > window.accountchooser.util.accountstorage.inAccountList(accounts[i], result) && result.push(accounts[i])
  }
  return result
};
window.accountchooser.SelectService.prototype.removeUsernameOnlyAccount_ = function(accounts) {
  var result = [];
  var i = 0;
  for(var length = accounts.length;i < length;i++) {
    var account = accounts[i];
    (window.accountchooser.util.isValidEmail(account.email) || account.providerId) && result.push(account)
  }
  return result
};
window.accountchooser.SelectService.prototype.filterAccountByProviders_ = function(accounts, providers) {
  var qualified = [];
  var rest = [];
  var qualifiedEmail = {};
  var i = 0;
  for(var length = accounts.length;i < length;i++) {
    var account = accounts[i];
    !account.providerId || 0 <= window.accountchooser.util.indexOf(account.providerId, providers) ? (qualified.push(account), qualifiedEmail[account.email] = !0) : rest.push(account)
  }
  qualified = qualified.concat(this.synthesizeAccounts_(rest, qualifiedEmail));
  return{qualified:qualified, rest:rest}
};
window.accountchooser.SelectService.prototype.synthesizeAccounts_ = function(accounts, excluded) {
  var result = [];
  var emailIndex = {};
  var i = 0;
  for(var length = accounts.length;i < length;i++) {
    var email = accounts[i].email;
    if(!excluded[email]) {
      var index = emailIndex[email];
      if("undefined" == typeof index) {
        var account = jQuery.extend({synthesized:!0}, accounts[i]);
        delete account.providerId;
        result.push(account);
        emailIndex[email] = result.length - 1
      }else {
        account = result[index], account.displayName = account.displayName || accounts[i].displayName, account.photoUrl = account.photoUrl || accounts[i].photoUrl
      }
    }
  }
  return result
};
window.accountchooser.UpdateService = function() {
};
window.accountchooser.UpdateService.inheritsFrom(window.accountchooser.Service);
window.accountchooser.UpdateService.prototype.execute = function() {
  if(this.checkRequestType_(window.accountchooser.rpc.UpdateRequest)) {
    var account = window.accountchooser.util.sanitizeAccount(this.request_.params_.account, window.accountchooser.util.accountSanitizer);
    var cdsAccounts = window.accountchooser.util.accountstorage.readAccounts() || [];
    var found = !1;
    for(var i = 0;i < cdsAccounts.length;i++) {
      var other = cdsAccounts[i];
      if(window.accountchooser.util.accountstorage.matchAccount(account, other)) {
        window.accountchooser.util.accountstorage.checkCompatible(account, other) && (account.displayName = account.displayName || other.displayName, account.photoUrl = account.photoUrl || other.photoUrl);
        found = !0;
        break
      }
    }
    if(found) {
      var language = this.getClientConfigValue("language");
      this.showUpdateAccountPage_(account, language)
    }else {
      this.sendUpdateResponse(!1)
    }
  }
};
window.accountchooser.UpdateService.prototype.showUpdateAccountPage_ = function(account, opt_language) {
  this.container_.empty().addClass("widget-panel-chooser");
  var self = this;
  this.page_ = new window.accountchooser.page.UpdateAccountPage;
  this.page_.onUpdateConfirmedClicked = function() {
    window.accountchooser.util.accountstorage.refreshAccount(account);
    self.sendUpdateResponse(!0)
  };
  this.page_.onUpdateCancelClicked = function() {
    self.sendUpdateResponse(!1)
  };
  this.page_.render(this.container_, account, opt_language, void 0, !1)
};
window.accountchooser.AboutService = function() {
};
window.accountchooser.AboutService.inheritsFrom(window.accountchooser.Service);
window.accountchooser.AboutService.prototype.execute = function() {
};
})()
