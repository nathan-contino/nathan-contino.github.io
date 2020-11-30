---
title:  "Why \"λ Lovers?\""
date:   2017-02-24 19:26:53 -0500
layout: default
categories: lambda lovers calculus
---
Since I created this site, I've received many questions about the name. As a result, I've created this blog post to try to address the issue. In short, the name of this site stems from Alonzo Church's Lambda Calculus. Lambda Calculus was a highly influential mode of computation invented in the 1930s that eventually influenced a great deal of programming. This is most obvious in the form of the Lisp family of languages, where lambda functions have been present from day one, and where the very structure of code is based off of lambda calculus. However, the Lambda Calculus has now managed to seep into other programming styles-- most famously, C++ and Java have variants of lambda functions.

Now that you're familiar with the tip of the lambda iceberg, you're probably wondering: just what the hell is lambda calculus anyway? The wikipedia page is not particularly good at teaching the basics, so you probably expect me to demonstrate something. As it turns out, you're in luck. Behold: a lambda calculus example:

~~~ bash
λparameter.(function parameter parameter) input
~~~

Which is equivalent to this function in C:

~~~ c
int lambda(int parameter){
	function(parameter, parameter);
 }

 int main(){
	lambda(input);
 }
~~~

That's pretty basic, but it shows you the way that lambda functions work: the lambda function pulls in an input item and replaces "parameter" in its body with the value of input. Now I can show you something a lot cooler:

~~~ bash
λg.(λx.g (x x)) (λx.g (x x))
~~~

Above is a \*magical\* function the lambda calculus calls a fixed-point combinator. Basically, it's a recursive function that repeatedly applies itself. Of course this is probably all pretty nonsensical because you've probably never seen or heard, much less played with, the lambda calculus before you saw this blog post. So now I'll get back to my story about why this page is called &#955; Lovers.

Long story short: in my junior year of college, I was a teaching assistant for a theory-based class. That class had a unit on lambda calculus (coupled with scheme programming), and I drew the short straw and ended up writing and grading the homework assignments for that unit. Eventually I ended up spending so much time steeped in lambda calculus that my friends starting associating me with the symbol, and nicknamed me "lambda lover" after it was all over based on a loose reference to Homer's <i>The Odyssey</i> (Land of the Lotus Eaters -> Land of the Lambda Lovers). I ended up liking the name, so here we are.