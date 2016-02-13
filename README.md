#pil.js
pil.js is a JavaScript libary to progressively load images. The libary hides all of the images you specify and replaces them with a placeholder while they are loading.
When they have finished it removes the placeholder and shows the completed image. The placeholder will generally have the same size, shape, and classes as the image it
is representing. 

##Usage
###Basic
For the most basic usage of this library simply add `pil-load` as a class to one of your images. This will load the default placeholder for your image. 

Example:
```
<img class="pil-load" src="https://yoursource.com">
```

It also works with multiple images.

Example: 
```
<img class="pil-load" src="https://yoursource.com">
<img class="pil-load" src="https://yoursource.com">
```

###Classes
If you do not want the placeholder to share the same classes as the img you can use the `pil-class` attribute to the img. This allows you
to specify which classes should be given to the placeholder. 

Example:
```
<img pil-class="your-class" class="pil-load" src="https://yoursource.com">
```