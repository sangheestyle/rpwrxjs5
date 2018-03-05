/***
 * Excerpted from "Reactive Programming with RxJS 5",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/smreactjs5 for more book information.
***/
import { div } from "@cycle/dom";
import xs from "xstream";

export function App(sources) {
  const vtree$ = xs.of(div("My Awesome Cycle.js app"));
  const sinks = {
    DOM: vtree$
  };
  return sinks;
}
