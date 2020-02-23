# KogaChat Usage Pastes

KogaChat is made explicitly with use in tandom with Streamlabs. That said, it'd get pretty tedious to copy and paste new code any time KogaChat got updated. Thus, I've provided some handy "evergreen" links that will work so long as KogaChat continues to function through Streamlabs (which is for the forseeable future).

To use KogaChat, just go under your chatbox settings, set "Enable Custom HTML/CSS" to Enabled, and copy and paste each of the snippets below into the respective tabs. This will keep each file on their latest update with the exception of HTML, which I don't see myself ever changing so that shouldn't be an issue.

If your chatbox ever breaks while using KogaChat through the below snippets, you can let me know in this repo's [issues](https://github.com/dististik/chatbox.kogachat/issues) and go to the [releases page](https://github.com/dististik/chatbox.kogachat/releases) to grab the previous version's files which will hopefully work better for you. I understand this is incredibly tedious so I'll always try my best to thoroughly make sure updates work well before pushing them out.

## HTML Snippet

```html
<!-- Template will append to this div -->
<div id="log" class="sl__chat__layout">
</div>

<!-- Message template -->
<script type="text/template" id="chatlist_item">
  <div data-from="{from}" data-id="{messageId}" class="{from}">
    <span class="meta" style="color: {color}">
      <span class="badges">
      </span><span class="name">{from}</span><span style="color:white">:</span>
    </span>

    <span class="message">
      {message}
    </span>
  </div>
</script>

<!-- Link to jQuery for JS link -->
<script src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js"></script>
```

## CSS Snippet

```css
@import url(https://cdn.jsdelivr.net/gh/dististik/chatbox.kogachat@latest/src/style.css);
```

## JS Snippet

```javascript
$.getScript("https://cdn.jsdelivr.net/gh/dististik/chatbox.kogachat@latest/src/script.js", function() {
   console.log("Script loaded.");
});
```