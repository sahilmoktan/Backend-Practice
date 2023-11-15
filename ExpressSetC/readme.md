endgame part2

flash message: npm i connect-flash  =============================================
don't forget to set session: npm i express-session
put connect flash in  app.use function

bootstrap cdn index shown in ejs file. put an error aleart message also from bootstrap
abo hami /route ma jada error auuda flash message le respond gareko error agi ko bootstrap ko aleret ma auune banaune xau
    flash message vanaale serverko katai route ma message banayera rakhne ani aru route ma show garne

indexjs /login ma flash message create gareu, /check ma flash message ko respond hereu
use case: login route ma jana khoje but login ta vayena, but login vayena vanera arko route ma ta message dina paryo ni, euto route ko data arko ma access garnu lai flash message ko help linxau


intermediate mongodb =============================================
fully model path follow gareko xaina, routes/user.js mai mongoose lai set gareko xa, mongoo ma user = users
/create ma lekhera hit garda data create hunxa mongoodb ma
/find ma data ko name send garera pauna sakinxa but
    case sensetivity xa, uppera/lower case
    so we use RegExp() but again similar included comes along
    use: new RegExp(searchgarneName, flags:insesetive)
    so again we use ^weNeed$ checks from both side
    allowes no case sensetive even in middle letters are mixmached

//find in array=> use below insted of username: 'safal' 
        categories: {$all: ['music']}

//find that are made in particular date
    datecreated: {$gte: date1, $lte:date2}
    $graterThenEqualto  $lessThenEqualto

//find by specfic length of an field/catagory
    video ko 1:05:00 najik or find ko bracket vitra
    $expr:{
        $and:[
            {$gte:[{$strlencp:'nickname'},12]},
            {$lte:[{$strlencp:'nickname'},20]},
        ]
    }


