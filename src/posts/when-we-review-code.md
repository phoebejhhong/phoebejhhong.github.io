---
title: What we learn when we review code
date: '2019-07-22'
slug: 'when-we-review-code'
keywords: 'code review'
---

As a software developer, I consider code review a very important part of my job and I always try to argue the importance of it beyond the popular perspective of seeing it as a gatekeeping process, or when occasionally talked about in the context of knowledge sharing, as a way for more senior developers to educate their junior peers.

Yes, the reviewer might pick up critical mistakes that the author didn't see. Yes, authors who lack certain experience can always benefit from the eyes of the more knowledgeable.

But hey, code review is definitely a two-way street! Reviewers learn a ton too! So, here I have compiled a list of things we learn when we review code.

#### 🖍 We learn more about the codebase

In short term, we learn about that bit of code. And we say, 'I can fix bugs in this bit of code next time the author is on leave'. Also in long term, we obtain broader view of the codebase. What are the prevalent patterns that are being used? What are the 3rd party libraries we are using? Where are the parts of code that can potentially combined together? These are some of the questions that can be answered by those who often read code that they didn't write (unless codebase is written by one person!).

#### 🖍 We learn how to code better

There are small immediate wins when you go 'I didn't know you can do that! I will use it next time'. Then there are yet again the broader effect coming from having rich discussions. You can have discussions elsewhere too, but code review is a good place to start them. Here is one example of review comments that often lead to learning: `XXX is used here but it looks like we can achieve the same with YYY. What do you think are the reasons why one would prefer one to another?`

#### 🖍 We learn more about our colleagues

We notice their styles, strengths, weaknesses, growth and so on. People management may not be our job, but these are definitely nice-to-knows. You'll know who to talk to when you have certain issues, when to give kudos for great contribution, what relevant feedbacks to give to your peers.

#### 🖍 We learn how to read code better

#### 🖍 We learn how to communicate better

Our coworkers in different functions might exchange emails and spreadsheets. Well, actually I don't really know what they do. But I do know that we write code and read each other's code, and that is our primary way of communication.
