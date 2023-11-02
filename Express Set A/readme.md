===// What is express.js -n packege, routing // ========================================
wy express js - http is difficult to use, express makes tis easier


===// routing - routes banaue process lai routing vaning  // ========================================
/profile
/home
/home/plans
/profile/sahil/sdkfsldkfefsf/sdfslkkjfsdlf
:get routes & post routes


===// middleware // ========================================
is an function which runs before route vanda paila chalxa. ani middleware vitra ko function paila run hunxa
when node goes in middleware and finishes it's work, it can't move itself to next code, so we write 'next' for allowing to move next


===// request and response, next // ========================================
res :outgoing: sending data from our server 
req :incoming: receving data from user/frontend
nxt : allowing fnc to go next step


===// route parameters // ========================================
eg. facebook.com/profile/sahil
eg. facebook.com/profile/sabin

dynamic routing   =>   /profile/:username
                       ↑route / ↑parameters,params

===// template engines: ejs, pug, handlerbars, jade  // ========================================
html sanga calc garne power xaina, ejs is like html format with calculating power, (advance version)
1) npm i ejs 
2) configure ejs: app.set('view engine', 'ejs')
3) views foleder banune, tesma ejs file banaune, send ko satta render lekhne


===// static files // ========================================
images, stylesheets, frontend JS , more likey ejs lai setup garnu ho

1) create a folder public
2) create three folders in it, images, styleseets, javascript
3) configure the express static in index.ejs : 
4) understand the path


===// error handling
