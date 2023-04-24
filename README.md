# odin-etch-a-sketch
initial set-up: create a 16x16 grid of squares in a set pixel container

tl;dr
implemented two functions:
- getSquares
- random_rgba

utilized 
- eventlistener "click" and "hover"
- flexbox

Thought process:
I broke down the work into three main categories:
1. getSquares 16x16
2. hover effect
3. button for new square

Initially, I didn't bother with putting anything into a function, though I could already tell that would be necessary. I knew that I would need a container square. At first I thought about creating n number of rows and then splitting each row into n number of squares, but then I realized you could just create the squares and then use flexwrap.

With that preliminary planning done, it was rather simple to implement the code, and I just needed some basic math to setup the lengths of the square sides. Once I figured out how to add styling before appending the new divs to the container, I was already done.

-----

With the research I did into adding styles for part 1, part 2 was just a matter of figuring out that background-color was camelcase for the method. 

for extra credit, I just googled to find a function for randomrgba.

----

For part 3, I had to figure out what I needed to set up as the parameters for the function I would implement for getSquare. I'd already written everything I needed, so it was just a matter of using console.log() to figure out why some things I tried didn't work. 

----
extra credit: incrementing shades of grey

My plan for this was to just set up new classes in the css sheet, grey1-10.
I would then have had the eventListener for hover include an if else;
I planned to use a helper variable to just track the number of times a square had been hovered over, and then use that helper variable in a template string to apply the corresponding class.
hover times over 10 would just return.

I eventually decided against implementing this because I felt like the random rgba colors looked better. I briefly considered implementing two new buttons that would switch between random rgba and the shades of grey effect, but decided that my time was better spent continuing with the course.