/*
File: jQuery-TE-Image.js
Author: Jeff Hansen
Description: An extension to the jQuery-TE plugin - TE source was obsfucated, despite being Open Source.
*/
/*
 *
 * Copyright (c) 2010 C. F., Wong (<a href="http://cloudgen.w0ng.hk">Cloudgen Examplet Store</a>)
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */


(function ($) {
    $.fn.extend({
        insertImageAtCaret: function(myValue) {
            var obj = $(this);
            if ($.browser.msie) {
                var sel = document.selection.createRange();
                sel.execCommand("InsertImage", false, myValue);
            } else if ($.browser.mozilla || $.browser.webkit) {
                document.execCommand("StyleWithCSS", false, false);
                document.execCommand("InsertImage", false, myValue);
                //obj.find("img[src='" + myValue + "']").prop({ width: 100, height: 100 });
                
            }
        }
    });

    jQuery.fn.jqte_image = function (config) {
        var elements = $(this).each(function() {
            var $this = $(this);
            var panel = $this.siblings(".jqte").children(".jqte_Panel");
            panel.append('<a class="image"></>');
            panel.find(".image").click(config.onClick);
        });

        config.insertImage = function (imageSrc) {
            
            elements.parent().find(".jqte_Content").insertImageAtCaret(imageSrc);
        };
        return elements;
        
    };
})(jQuery);