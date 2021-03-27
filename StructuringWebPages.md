# Structuring Web Pages
## Process and Design
### Who is the site for?
Understanding the audience for your website is important. Websites should be designed for the traget audience. Look for the individuals that will use your site and think about that demographic. 
- Age Range
- Sex
- Country
- Are they live in
- Income
- Education
- Marital Status
- Occupation
- Frequency of Web Use
- Device

If your website's target demographic is companies then think about factors that might affect how they view your website.
- Size of Company
- Department of Company
- Are they accessing the site for themselves or others?
- How large is their budget?

Think about why people are coming and what they want to do on your website. What information will they need?
**Key Motivations**  **Specific Goals**

## Site Maps
After figuring out what you need on your site, a site map helps you organize and sort what pages you want and the information you want on those pages.

## Wireframes
Wireframes are simple sketches of the page showing the elements and information you are going to put on there. It shows a heirarchy of the information and how much space it might need.
## Visual Design 
Visual design communicates to your users by organizing a prioritizing information on a page to help them understand importance and order of information. Elements to keep in mind will designing a website include:
- Content
- Prioritzation
- Organization
- Visual Heirarchy
- Grouping 
- Similarity

## HTML Structure Summary
- HTML pages are text documents.
- HTML uses tags that are in angled brackets.
- Tags are also reffered to as elements.
- There are usually opening and closing tags.
- Opening tags can have attributes that gives infromation about the content inside.
- Attributes have a name and a value

## HTML 5 Layout
### Elements
```
- <header>/<footer>
- <nav>
- <article>
- <aside>
- <section>
- <hgroup>
- <figure>/<figurecaption>
- <div>
```
## Extra Markup 
Web pages should begin with a DOCTYPE decloration to tell the browser what version of HTML the page uses but it will typically work without it.

### Comments

Comments can help fimiliarize others with your code or remind yourself. To add a comment in HTML that users will not see:
```
<!-- "comment" -->
```
### Attributes
#### ID Attribute
ID attributes allows you to identify an element from other elements. It should start with a letter or underscore and shouldnt have the same value for their ID.
```
<html>
<body>

<h1 id="myHeader">Hello World!</h1>
<button onclick="displayResult()">Change text</button>

<script>
function displayResult() {
  document.getElementById("myHeader").innerHTML = "Have a nice day!";
}
</script>

</body>
</html>
```
#### Class Attribute
A class attribute is similar to a **id attribute** but instead of identifying one element a class attribute identifies several elements.
### Block Elements
Block elements are denoted by how they will always appear as they are starting on a new line. Examples include:
```
- <h1>
- <p>
- <ul>
- <li>
```
### Inline Elements
Inline elements look as if they are continuing on the same line as the previous element. Examples of these elements are:
```
- <a>
- <b>
- <em>
- <img>
```
### Grouping Text & Elements 
You can group elements together in a **block** using:
```
<div>
```
You can group elements inline with:
```
<span>
```
### Iframes
Iframes allow you to implement another website into your page. Most commonly used for implementing things like Google Maps. You will need to add attributes to you iframe. These include:
- src - specifies URL
- height - height of iframe
- width - width of iframe
- seamless
```
<iframe
    width="450"
    height="350"
    src="http://maps.google.com"
</iframe>
```
## Information About Page
### Meta
Meta lies inside the head element and contains information about the web page. It is not visible to users and can be anything but commonly attributes are:
- descriptions
- keywords
- robots
- author
- pragma
- expires
## EScape Characters
Some characters are reserved for HTML so if you wish to display these charecters you need to use escape character otherwise known as escape codes. You can also add special characters such as copyright symbol this way.