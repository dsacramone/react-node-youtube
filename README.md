# react-node-youtube
create a node server w/ react for search ability with google youtube api

## Synopsis

This small project is a POC working with node / react / sockets /es6 to achieve the goal of interfacing with YouTube’s public search API 
to search given a static set of artists, and return a finite set of results.

## Installation
<pre><code>
$ git clone https://github.com/dsacramone/react-node-youtube.git
$ cd -dir-
$ npm install
$ webpack
$ node server.js
</code></pre>
Then point your browser to: http://localhost:9002/

## Tests
TODO: this is immensely important, but I just didn't have the time to implement atm.
I will revisit shortly.

## TODOs

1. Tests
2. Create pagination within the playlists
3. Allow for creating of custom playlist

## License
MIT

--------------------------------------------------------------------------------------------
## DESIGN CONSIDERATIONS

## Keep it Simple
   I went with more of a modular/component based scheme than a traditiona MVC. Given the nature 
   of the project, it would have been too easy to over engineer it & turn it into something 
   that didn't fit the nature of its purpose.
   
   The goal was simple, given how I understood what I was trying to achieve. Allow for bi-directional 
   communication, and try to achieve this with as little overhead as possible. Which also allowed 
   for a bit of flexibility. How can we achieve this and retain a simple & viable playing field?
   
   
## Technology
   We achieve parity with the projects goals, the following technologies were used:
   1. **Node** - This was a requirment.
   2. **Socket.io**
   3. **React** - React is fast (Shadow Dom render). React philosophy is components/reusability. React lends itself to cleaner/more robust code. 
   4. **ES6** - Always try to stay at the forefront of tech :-)

## Why Sockets
     Sockets are faster than traditional ajax requests, and allows us to circumvent the constant need to ping the 
     server for data. I felt that this avenue of communication afforded us the speed, reduced load on network & worked 
     the best with "keep it simple" philosophy. Older browser support was not a consideration here, and the traffic thru the 
     sockets would be minimal. Security is a concern, but the user is confined to search only.
     
## File Structure
    I like to keep like minded code together. For instance, all jsx code goes into its own dir if if they 
    are attached to a same component tree. For instance, if we had another component on the page that dealth with a chat box.
    Then we can see it broken out as: 
    
     
       public
       |____ jsx
              |___ shared
              |___ chat
     

    Because our node code really only dealth with emitters, a folder was created for them -sockets/. The "request.js" file could be used 
    by other items/concerns, so that was drawn out into the -helper/ folder.
    
## Other considerations
    There were other interesting opportunities I could have gone down, unfortunetly I literally had one night to get this POC project off
    the ground. I would have liked to go down the Isomorphic route, and will probably enhance the project to achieve that. I feel 
    that would gain 100+ms faster load speed.
    

    
## Limitations
    Time. 
    Also, the task was 'new' to me in that I am usually very particular about requirements. Given the nature of the assignment, I felt
    as if I had to interpret the intent of the goals. Probably a bad assumption on my part. For instance, should I "plan ahead" for pagination? Should I create & capture 
    error conditions? etc.... :-) , but over engineering things can open up a huge can of worms.
    As such, I went with interpreting. It was a bit disconcerting. :-)
    
  **note** An appropriate situation is that when I read "...playlist should be rendered server side", I though "oh, ok -
  on pageload, the playlist needs to be handed off w/o the user searching....". But then I thought "hmmm, or does that mean they 
  want the page rendered on the server side so the initial load captures the playlist.." (isomorphic way)  :-)
    
