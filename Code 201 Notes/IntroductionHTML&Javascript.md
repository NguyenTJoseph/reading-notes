# Introduction to HTML and Javascript
## Introduction
### Access to the Web
- Browsers 
Provide access to websites with web browsers
- Web Severs
Hosts websites 
- Screen Readers
Content is read out to user and is commonly used by the visually impaired
### Website Creation
HTML and CSS are basis for website creation but things like content management software are added.
### How the Web Works
To find the location of a web server you connect from your ISP to a DNS server.
## Structure
HTML elements inform you of the information inside it. The opening tag of an element can give more information on the content of the element.

## Extra Markup 
Web pages should begin with a DOCTYPE declaration to tell the browser what version of HTML the page uses but it will typically work without it.

### Comments

Comments can help familiarize others with your code or remind yourself. To add a comment in HTML that users will not see:
```
<!-- "comment" -->
```
### Attributes
#### ID Attribute
ID attributes allows you to identify an element from other elements. It should start with a letter or underscore and shouldn't have the same value for their ID.
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

## Escape Characters
Some characters are reserved for HTML so if you wish to display these characters you need to use escape character otherwise known as escape codes. You can also add special characters such as copyright symbol this way.

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
## Process and Design
### Who is the site for?
Understanding the audience for your website is important. Websites should be designed for the target audience. Look for the individuals that will use your site and think about that demographic. 
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

# Javascript
## Introduction 
Javascript allows web pages to be more interactive.
- Access Content
- Modify Content
- Program Rules
- React to Events
## Abc of Programing
### What is a script?
Scripts are a series of instruction that a computer follows to do something.
### How do computers fit in with the world around them?
Computers use objects that can have properties and perform tasks using the properties of those objects. You make web pages interactive by writing code around the pages model.
### Writing script for a web page.
The script element is used to load a javascript file in your page. Javascript code is best kept in its own file.