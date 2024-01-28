---
title: Custom Form
weight: 1
lastmod: "2022-08-01"
reviewer: "Chris Ketron"
notes: ""
---

### What's Up

Use the following to display a customized What's Up page:

<form action="/notes/images/whats-up.html" target="_blank">
  Object Name<br/>&nbsp;&nbsp;&nbsp;<input type="text" name="name"><br/>
  Object Description<br/>&nbsp;&nbsp;&nbsp;<textarea cols="100" name="desc"></textarea><br/>
  &nbsp;&nbsp;&nbsp; - use of HTML codes, like line break: &lt;br/&gt;, are allowed<br/>
  Object Image Filename<br/>&nbsp;&nbsp;&nbsp;<input type="text" name="image"><br/>
  &nbsp;&nbsp;&nbsp; - use "other" for the image name to display a blank image area and to place the logo and description areas to the left<br/>
  &nbsp;&nbsp;&nbsp; - referenced image files must be located in the _**/images/whats-up**_ folder
  <br/><br/>
  &nbsp;&nbsp;&nbsp;<input type="submit" value="What's Up?">
</form>
