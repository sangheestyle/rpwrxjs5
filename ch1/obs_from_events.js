/***
 * Excerpted from "Reactive Programming with RxJS 5",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/smreactjs5 for more book information.
***/
import { Observable } from "rxjs";

const allMoves$ = Observable.fromEvent(document, "mousemove");
allMoves$.subscribe(e => console.log(e.clientX, e.clientY));

const movesOnTheRight$ = allMoves$.filter(
  e => e.clientX > window.innerWidth / 2
);

const movesOnTheLeft$ = allMoves$.filter(
  e => e.clientX < window.innerWidth / 2
);

movesOnTheRight$.subscribe(e => {
  console.log("Mouse is on the right:", e.clientX);
});

movesOnTheLeft$.subscribe(e => {
  console.log("Mouse is on the left:", e.clientX);
});
