#pil.js
pil.js is a JavaScript libary to progressively load images. The libary hides all of the images you specify and replaces them with a placeholder while they are loading.
When they have finished it removes the placeholder and shows the completed image. The placeholder will generally have the same size, shape, and classes as the image it
is representing. 

##Usage
###Basic
For the most basic usage of this library simply add `pil-load` as a class to one of your images. This will load the default placeholder for your image. 

Example:
```
<img class="pil-load" src="https://yoursource.com">
```

It also works with multiple images.

Example: 
```
<img class="pil-load" src="https://yoursource.com">
<img class="pil-load" src="https://yoursource.com">
```

###Placeholder Classes
If you do not want the placeholder to share the same classes as the img you can use the `pil-class` attribute to the img. This allows you
to specify which classes should be given to the placeholder.

Example:
```
<img pil-class="your-class another-class" class="pil-load" src="https://yoursource.com">
```

###Placeholder Styling
The placeholder is a div. To give it the correct attributes it is styled within the JS file. Because it is styled witin the JS it will be inline styles.
This means that styles you apply to classes on the placeholder could be overwritten. If you do not want it to be given these
styles add the `pil-style` attribute and set it to false.

Example:
```
<img pil-style="false" class="pil-load" src="https://yoursource.com">
```

###Placeholder Width and Height
The placeholder gets its width and height from the image that is loading. If you would like a different width and/or height you
may use the `pil-width` and `pil-height` attributes respectively. The width and heights should be in pixels.

Example:
```
<img pil-width="240" pil-height="500" class="pil-load" src="https://yoursource.com">
```