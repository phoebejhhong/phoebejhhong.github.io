---
title: A simple case for Do Repeat Yourself
date: '2019-07-04'
slug: 'do-repeat-yourself'
keywords: 'software development'
---

 The other day, I wrote a piece of code that went like this:

 ```jsx
 {panelType === "A" && <PanelA someProp={someProp} />}
 {panelType === "B" && <PanelB someProp={someProp} />}
 {panelType === "C" && <PanelC someProp={someProp} />}
 ```
<br />
<p>And it was just ✨liberating✨</p>

"Don't repeat yourself" was one of the first software development principles I've ever learned. (Who didn't?) And it took me considerable time and lots of frustration at prematurely abstracted code until I unlearned the dogma. The day I rage-googled and stumbled upon [duplication is far cheaper than the wrong abstraction](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction), I was born again as an appreciator of the beauty of simplicity and straightforwardness.

Say, for some reason, I "refactored" the code to look like this:

```jsx

const panelTypeComponentMap = {
  "A": PanelA,
  "B": PanelB,
  "C": PanelC,
};

const PanelComponent = panelTypeComponentMap[panelType];
return <PanelComponent someProp={someProp} />
```
<br />

❌ Things the "refactor" didn't do:

- It didn't make the code less bug-prone

Because the new code looks more organized, it might give you (false) sense of security. Still, any mistake you can make in the previous code (i.e. omitting a panel type), can be made in the latter code in the same manner.

✅ Things the "refactor" did do:

- It made it harder to change the code

It doesn't particularly reduce the amount of effort needed to do something as simple as adding `PanelD` or removing `PanelB`. In a case a future design change requires passing different props to different panels, however, you can imagine how much more configuration we have to add in the latter code, whereas in the former, to put it in a very technically accurate term, it'd be super easy.


- It made the code longer and more complex

 More lines of code means more work. I had to use my brain extra hard to come up with pretty much meaningless variable names like `panelTypeComponentMap` and `PanelComponent`. Imagine the toll on the future readers of the code, learning more *stuff*, jumping around the code because most likely `panelTypeComponentMap` is defined on the top of the file or, even worse, in a different file.

 More lines of code is bad, and to justify it, there has to be real good explicit benefit to cancel out its badness.

This is a very simple example, but the whole point is to spare writer and reader's effort with something small like this so that they can focus on more important matter. Principle here is simple. Don't fix a problem that does not exist (yet). Write naive code, your many if statements will do just fine. You can fix it later when it becomes a real problem.
