import Ember from 'ember';

var articles = [{
  title: "The Scary Story To Read Based On Your Zodiac Sign",
  image: "https://typeset-beta.imgix.net/rehost/2016/10/25/6b66d3e6-c774-48c2-b395-961871db291e.jpg?w=461&h=245&fit=crop&crop=faces&auto=format&q=70",
  content: "It is that time of year again: everyone is drinking gourd-flavored coffee and warding off violent clowns in the streets. Orange has become temporarily fashionable. Halloween is almost upon us, and now is the time to read horror stories, as assigned by your horoscope. So here is the one scary story to read, based on your zodiac sign.",
  author: "CHARLOTTE AHLIN",
  isMain: false,
  isFeatured: true,
  timestamp: moment.now()
}, {
  title: "7 Butterbeer Recipes To Enjoy This Fall",
  image: "https://typeset-beta.imgix.net/rehost/2016/10/25/6c1bc598-24b3-4ed4-8aae-3908cdc8aae4.jpg?w=461&h=245&fit=crop&crop=faces&auto=format&q=70",
  content: "Harry Potter fans first read about Butterbeer in Harry Potter and the Prisoner of Azkaban. Students took trips to Hogsmeade, where they tasted the sweet beverage at the Three Broomsticks. Harry believes it is “the most delicious thing he'd ever tasted” and describes how it “seemed to heat every bit of him from the inside.” So how does it really taste, and how can you make Butterbeer? I'm here to tell you",
  author: "JULIA SEALES",
  isMain: false,
  isFeatured: true,
  timestamp: moment.now()
}, {
  title: "6 David Szalay Quotes On The Human Condition",
  image: "https://typeset-beta.imgix.net/rehost/2016/10/25/ff1faa58-fc1f-45e9-ab90-5aac79456a05.jpg?w=461&h=245&fit=crop&crop=faces&auto=format&q=70",
  content: "The Man Booker Prize shortlist this year covers an impressive range of topics from murder to madness — but the novel by nominee David Szalay is about a topic that, on the surface, seems far less mysterious: masculinity. I mean, men have been at the center of history and literature for centuries, right? But somehow, in Szalay's masterful hands, the topic seems brand new again.",
  author: "EMMA OULTON",
  isMain: false,
  isFeatured: true,
  timestamp: moment.now()
}, {
  title: "6 David Szalay Quotes On The Human Condition",
  image: "https://typeset-beta.imgix.net/rehost/2016/10/25/ff1faa58-fc1f-45e9-ab90-5aac79456a05.jpg?w=461&h=245&fit=crop&crop=faces&auto=format&q=70",
  content: "The Man Booker Prize shortlist this year covers an impressive range of topics from murder to madness — but the novel by nominee David Szalay is about a topic that, on the surface, seems far less mysterious: masculinity. I mean, men have been at the center of history and literature for centuries, right? But somehow, in Szalay's masterful hands, the topic seems brand new again.",
  author: "EMMA OULTON",
  isMain: false,
  isFeatured: false,
  timestamp: moment.now()
}, {
  title: "The Scary Story To Read Based On Your Zodiac Sign",
  image: "https://typeset-beta.imgix.net/rehost/2016/10/25/6b66d3e6-c774-48c2-b395-961871db291e.jpg?w=461&h=245&fit=crop&crop=faces&auto=format&q=70",
  content: "It is that time of year again: everyone is drinking gourd-flavored coffee and warding off violent clowns in the streets. Orange has become temporarily fashionable. Halloween is almost upon us, and now is the time to read horror stories, as assigned by your horoscope. So here is the one scary story to read, based on your zodiac sign.",
  author: "CHARLOTTE AHLIN",
  isMain: true,
  isFeatured: false,
  timestamp: moment.now()
}, {
  title: "6 David Szalay Quotes On The Human Condition",
  image: "https://typeset-beta.imgix.net/rehost/2016/10/25/ff1faa58-fc1f-45e9-ab90-5aac79456a05.jpg?w=461&h=245&fit=crop&crop=faces&auto=format&q=70",
  content: "The Man Booker Prize shortlist this year covers an impressive range of topics from murder to madness — but the novel by nominee David Szalay is about a topic that, on the surface, seems far less mysterious: masculinity. I mean, men have been at the center of history and literature for centuries, right? But somehow, in Szalay's masterful hands, the topic seems brand new again.",
  author: "EMMA OULTON",
  isMain: false,
  isFeatured: false,
  timestamp: moment.now()
}];


export default Ember.Route.extend({
  model() {
    return articles;
  }
});
