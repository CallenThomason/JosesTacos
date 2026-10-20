# Jose's Taco Truck

Isaiah's truck has competition. Jose has a truck now, and he has a page for it, except nothing on the page says anything yet.

Every bit of real information is already sitting in `script.js` as data. Your job is to get it onto the page.

## What you are starting with

- `index.html` has the whole page already built. Headings, sections, a table, a list. Every element that should say something currently says "goes here".
- `styles.css` has three classes already written for you. Do not change them.
- `script.js` has all the data already written for you. Do not change it until the last task.

You are only writing the JavaScript that connects the two.

Two different jobs are in here. Most of the page already exists and needs filling in. One part of it does not exist at all and you have to build it.

## Before you write any JavaScript

None of those elements have an `id`. That is on purpose.

Go through `index.html` and give an `id` to every element you are going to need to reach. You pick the names. Nobody is going to tell you what to call them, and that is the point, because from Wednesday onwards you will be naming things nobody has named for you.

Two rules only: an id belongs to one element, and the name should tell you what the element is for six weeks from now.

## The work

### 1. The header

The `<h1>` gets the truck's name. The paragraph under it gets the tagline.

### 2. Today's special

The first paragraph in that section gets the name of the special.

The second one gets the price, with a dollar sign in front of it. Write a small function that takes a number and gives you back the price as text, and use it. You wrote one almost exactly like this on Monday morning.

### 3. The status line

The paragraph at the bottom of the header is the status.

If the truck is sold out, it should say `Sold out for today` and have the `closed` class on it. If it is not sold out, it should say `Open now` and not have that class.

Use an `if`. The data already tells you which one it is.

### 4. The special, when it is special

Not every day has a featured special. If this one is featured, the special's name gets the `featured` class. If it is not, it gets nothing.

That is a second `if`, and a second reason to use `classList`.

### 5. The crew list, which does not exist yet

Look at that section in `index.html`. There is a `<ul>` and it is empty. There are no list items at all, and you are not going to add any by typing them.

The `crew` array has three names in it. Make a list item for each one, give it the name, and attach it to the list.

Write a loop. Three names today, but the code should not care if Jose hires a fourth tomorrow.

Notice that this is a different job from everything above it. Tasks 1 through 4 found elements that were already on the page and changed them. This one puts something on the page that was never there.

### 6. The schedule

Five rows, and each row has two cells: a day and a location. The `schedule` array has five objects in it, each with a `day` and a `location`.

One loop. Two elements filled per trip around it.

### 7. Today's row

`todayIndex` in the data says which row is today. Both cells in that row get the `today` class.

## The three classes

These are in `styles.css` and they are already written. You are deciding which elements get them and adding them from JavaScript.

| Class | Use it for |
|---|---|
| `closed` | The status line, but only when the truck is sold out |
| `featured` | The special's name, but only when the special is featured |
| `today` | Both cells of the row that matches `todayIndex` |

Notice what you are not doing. You are never writing a color or a font in JavaScript. JavaScript decides the situation, the stylesheet decides what that situation looks like.

# Callen Thomason
10/19/26
Jose's Taco Truck
I was able to change everything on the website, only using JavaScript. I had a challenge accessing the table and changing each value using one for loop, but was able to solve it with my naming convention. I made the last part of each id change as the index would in my for loop. textContent and textList.add where the main contributers top changing the DOM.
Peer Reviewer: Chris Estrada
Review- everything looks great! your code is a bit more streamlined than mine i'll have to note the day/location one. great job.