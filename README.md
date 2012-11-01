jQuery TE
=========

jQuery TE is an open source library of WYSIWYG model text editor (jQuery HTML
Editor Plugin) component.

Everything is as simple as the following:  
**$(“textarea”).jqte();**

[Demo page][]

[Documentation page][]

[Download page][]

  [Demo page]: http://jqueryte.com/demos
  [Documentation page]: http://jqueryte.com/documentation
  [Download page]: http://jqueryte.com/download

If you have created a textarea and the value of class, such as “editor”
used with the **$(“.editor”).jqte();** will be enough to write script.

Of course you can also use a different attribute value.

Usage
-----

First include the latest version of jQuery. Next, download and include jquery-te-Core.js and jquery-te-Style.css (inside to head tags)

``` html
<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
<script type="text/javascript" src="jquery-te-Core.js"></script>
<link type="text/css" rel="stylesheet" href="jquery-te-Style.css" charset="utf-8" />
```

After that, create a textarea inside to body tags

``` html
<textarea></textarea>
```

Finally, run this plugin
``` html
<script>
	$("textarea").jqte();
</script>
```

That's it!

Jeffijoe Fork:
-----

I've made this amazing thing responsive, so it works with jQuery mobile.

Added Image support as well - how to use:

``` javascript

	var config = {
	    onClick: function(){
                var src = "http://some.com/image.png";
		config.insertImage(src);
	    }
	}
	$("textarea").jqte().jqte_image(config);

```

The great thing about this setup, is that you decide WHEN to insert the image.

E.g:

``` javascript

    var config = {
        onClick: function () {
            $.get("imagerequest", function(result) {
                // The server has returned a string - our image!
                config.insertImage(result);
            });
        }
    }

```
This allows asynchronous logic.