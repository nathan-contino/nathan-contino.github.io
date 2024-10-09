---
title:  "The Hitchhiker's Guide to Kotlin"
date:   2020-12-11 14:14:22 -0700
layout: default
categories: techblog
permalink: /:categories/:year/:month/:day/:title:output_ext
---

Lately I've been doing a lot of work in a relatively new programming
language: Kotlin. From my experience, I've concluded that Kotlin is
pretty rad. If you've considered learning Kotlin, or just using it
in a personal project, this post might help you with your decision.
Below, I hope I'll (attempt) to tell you a little bit about my
experience with Kotlin, and describe what I liked about Kotlin and
what I didn't like.

<!-- readmore -->

Firstly, you should know Kotlin is a JVM (Java Virtual Machine) language,
which means that like Java, Scala, and Clojure, Kotlin (usually)
compiles to Java bytecode. That means that Kotlin is compatible with
libraries written in Java, so if there's a Java library that solves
a problem you're dealing with, you can just pull that Java library
into your Kotlin project without any need for translation or
hoop-jumping. Given the popularity of Java in the software development
world for the last 20 years, that's a powerful set of tools to start
with for a new language.

Now, of course, you're probably wondering: if I want to use a Java
library, why wouldn't I just write Java? A good question, of course;
it's not like there's anything inherently wrong with Java! Many of us
learned Java syntax in college, the workforce, or even high school for
one reason or another. If you know C++, C, or even Javascript syntax,
it's not a huge hurdle to learn Java, or at least get to a point of
vague competence -- though let's not pretend that the subtleties of
Java, like managing dependencies or producing build artifacts
(properly) isn't a big hurdle of itself!

Anyway, Java works just fine.
But Java is also a language whose syntax was designed literally
decades ago. Despite the best intentions of the original language
creators, some syntax decisions haven't been popular in the long term,
and Java still struggles with the repercussions of those decisions.
Kotlin, on the other hand, was designed in the past couple of years.
While newer does not necessarily mean better, in terms of syntax it
*definitely* translates to "simpler" in this case. Anyone who's
written Java can appreciate that while Java syntax is hardly as
opaque as [C++ template programming](https://en.wikipedia.org/wiki/Template_metaprogramming)
or [Perl](https://old.reddit.com/r/perl/comments/2tdgcy/why_is_perl_considered_awful/), it can be, at the very least, a tad
bit verbose. For example, consider the following class declaration that
describes a dog:

```java
import java.awt.Color;

public class Dog {
    private String name;
    private int age;
    private Color color;

    public Dog(String name, int age, Color color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Color getColor() {
        return color;
    }

    public void setColor(Color color) {
        this.color = color;
    }
}
```

Nothing unexpected, right? The class is called `Dog`. It's `public`,
which means that other classes in this package can reference this
class (though this class is top-level in a file, so the `public`
modifier is redundant). This class contains
values for the dog's name, the dog's age, and the color of the dog.
There's a constructor, which accepts parameters matching each of
those values and assigns the parameter values to the fields stored
within the class. And of course, there are accessors and mutators
(getters and setters for the unwashed masses, myself included),
which actually allow code outside of this class to access and
modify the fields of this class, which are set to `private` because
encapsulation best practices say that code outside of a class
should never directly access class fields.

Now let's look at the same class in Kotlin, which functions exactly
the same, with accessors, mutators, a constructor, and encapsulation
best practices:

```kotlin
import java.awt.Color

data class Dog(var name: String,
               var age: Int,
               var color: Color)
```

Woof. As you can see, the Kotlin class is a lot, lot, lot shorter.
And that's because Kotlin's ethos is all about setting
*sensible defaults*. There's no need to label this class public,
because that's implicit. There's no need to define a constructor
AND a getter and a setter for every single field; because this
is a [data class](https://kotlinlang.org/docs/reference/data-classes.html)
whose sole purpose is to store data, Kotlin "just knows" that
we want accessors, mutators, and a constructor. But this is just
the beginning of the benefits of Kotlin.

A JIRA ticket comes in, priority 1. "Clients love these Dog thingies",
sales says. "But we need to do **more** with dogs! The clients want
to add two dogs together. Can you implement this?" Fortunately, as
a seasoned Kotlin developer, you know that you can throw a solution
together in just a few simple story points. So you get cracking, and
decide to get fancy by
[overriding the behavior](https://kotlinlang.org/docs/reference/operator-overloading.html)
of the `+` operator for operations involving two `Dog` objects:

```kotlin
operator fun plus(dog : Dog) : Dog {
    return Dog(dog.name + this.name, dog.age
           + this.age, dog.color + this.color)
}
```

But you've hit a snag. The `String` and `Int` classes define behavior
for the `+` operator. But the `Color` class doesn't. Worse yet, `Color`
isn't even a Kotlin class -- it's a member of the Java standard
library! Fortunately, Kotlin lets you add member functions to any
class using something called
[Kotlin Extensions](https://kotlinlang.org/docs/reference/extensions.html):

```kotlin
operator fun Color.plus(color: Color) : Color {
    return Color(color.red + this.red, color.blue + this.blue,
        color.green + this.green)
}
```

Because the `red`, `blue`, and `green` fields stored within the `Color` class
are actually integers, we can just add those together for an (admittedly
simple) additive color implementation. And the `Color` class even handles
capping the values at 255 for us!

Thanks to your fancy coding skills, you can add two dogs together
like so:

```kotlin
val dog1 : Dog = Dog("henry", 3, Color.RED)
var dog2 = Dog("indiana", 7, Color.GREEN)
val dog3 = dog1 + dog2
```

What else does Kotlin offer? Well, anybody familiar with Java has
inevitably experienced the dreaded `NullPointerException` at some
point. We've all indexed past the end of an array or a string,
incorrectly handled a null value when a network call timed out,
or any of a million other things that threw a null value right
into an object that we forgot to check for a null value with
`!= null`. Because writing all those null checks isn't just a
pain -- it makes code harder to read! Kotlin makes this issue a
lot easier to avoid with explicit nullability. Consider the
code snippet above, where we instantiated two `Dog` objects.
Both `dog1` and `dog2` are non-nullable: they can never point at
a null object. If you want to assign a value a nullable type in
Kotlin, you have to use the `?` operator:

```kotlin
fun maybeDog() : Dog? {
    if (Random.nextInt() % 2 == 0) {
        return Dog("casper", 3, Color.GRAY)
    }
    return null
}

val mightBeDog : Dog? = maybeDog()
println(mightBeDog?.name)
if (mightBeDog != null) {
    println(mightBeDog.name)
}
println(mightBeDog!!.name)
```

In this example, `mightbeDog` is of type `Dog?` -- in other words,
it is a *nullable* Dog type. Whenever you access a nullable value,
you need to do so safely: usually, using the safe nullable lookup
operator: `?`, which you can see when we print out the name of
`mightBeDog`. Basically this operator resolves to "the field
you're trying to look up, or null if the base object is null"
instead of triggering a `NullPointerException`. However, you can
also use the unsafe nullable lookup operator: `!!`, which lets you
trigger `NullPointerException` just like you could in Java (see
above). Finally, Kotlin includes a feature called *smart casting*,
which basically says "if I check a value in an `if` statement,
assume the implication of that statement in the `if` statement
codeblock". In the above example, in the codeblock corresponding
to the `mightBeDog != null` if check, we don't have to use a
safe lookup operator. That's because in that code block,
`mightBeDog` is actually cast to type `Dog` instead of just `Dog?`.
This also works with types themselves, not just nullability, so
if you had an instance of `Animal` with an if check that checked if
the instance was actually subtype `Dog`, you wouldn't have to
perform an if check *and* cast to type `Dog`, a common Java-ism.

Did you like this post? Let me know! Coming up: part 2, where I
discuss coroutines and a few interesting parts of Kotlin *besides*
mere syntax.



