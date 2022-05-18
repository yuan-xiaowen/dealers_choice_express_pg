const express = require('express')
const app = express()
const morgan = require('morgan')
const client = require ('./database/db.js')
const router = require('./router.js')

app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded()); //this is for body parsing
app.use(router)

const setUp = async()=>{
    try{
    const SQL = `
    drop table if exists terms;
    drop table if exists list;
    
    create table terms(
        id serial primary key,
        name varchar(30) default null,
        page text default null,
        season varchar(10) default null,
        image varchar(20) default null
    );
    create table list(
        id serial primary key,
        date integer default null,
        termid integer default null,
        term varchar(30) default null
    );
    
    insert into terms(name, page, season, image) values ('The Beginning of Spring', 'Everything recovers, cultivates and sows, sings warblers and dances swallows, green buds sprout, and stingers begin to vibrate Yang.','spring','spring1.jpg');
    insert into terms(name, page, season, image) values ('Rain Water', 'Its drizzling, the day is getting warmer, and the rain is sending fertilizer and busy one after another.','spring','spring2.jpg');
    insert into terms(name, page, season, image) values ('The Waking of Insects', 'Spring thunder rings, everything grows, a thunderbolt wakes up snakes and insects, the weather warms up and rain falls.','spring','spring3.jpg');
    insert into terms(name, page, season, image) values ('The Spring Equinox', 'The courtyard is a little deep. Willows and willows brush the heart. The day and night are divided equally, and the swallows return in spring.','spring','spring4.jpg');
    insert into terms(name, page, season, image) values ('Pure Brightness', 'Drizzle in succession, spring tea is fragrant, tomb sweeping and ancestor worship, spring outing, afforestation and willow evergreen.','spring','spring5.jpg');
    insert into terms(name, page, season, image) values ('Grain Rain', 'Rain begets a hundred valleys, rain breaks frost, pray for disaster elimination and sacrifice Cangjie','spring','spring6.jpg');
    
    insert into terms(name, page, season, image) values ('The Beginning of Summer', 'Mole crows, earthworms come out, and wild vegetables grow day by day','summer', 'summer1.jpg');
    insert into terms(name, page, season, image) values ('Lesser Fullness of Grain', 'Birds with cherry blossoms smile at transplanting seedlings, and the ridge head wheat ears begin to fill.','summer', 'summer2.jpg');
    insert into terms(name, page, season, image) values ('Grain in Beard', 'In grain in ear season, everything is busy, birds and fish sing, and plum rain rises up the pond','summer', 'summer3.jpg');
    insert into terms(name, page, season, image) values ('The Summer Solstice', 'Antlers fall off, cicadas chirp endlessly, plum rain continues in the south of the Yangtze River, and Koi swim in the pond.','summer', 'summer4.jpg');
    insert into terms(name, page, season, image) values ('Lesser Heat', 'Its hot and windy. Ice cream can relieve the summer heat. Pedestrians go out with umbrellas. Dumplings are used to appetize their appetites.','summer', 'summer5.jpg');
    insert into terms(name, page, season, image) values ('Greater Heat', 'In dog days of high temperature and extreme heat, the lazy fan is cool, the pond is playing to avoid the heat, and the watermelon is delicious and sweet.','summer', 'summer6.jpg');
    
    insert into terms(name, page, season, image) values ('The Beginning of Autumn', 'When the summer is gone, the leaves fall and the autumn is known. The cicadas are sad and the grain is ripe.','fall', 'fall1.jpg');
    insert into terms(name, page, season, image) values ('The End of Heat', 'The autumn rain is cold, the granary is full of grain, the autumn is high and crisp, and the world is thundering.','fall', 'fall2.jpg');
    insert into terms(name, page, season, image) values ('White Dew', 'The cool wind comes, the white dew falls, the cold cicadas chirp and the wild geese return, just when the citrus is plump.','fall', 'fall3.jpg');
    insert into terms(name, page, season, image) values ('The Autumn Equinox', 'The autumnal equinox is dedicated to the moon, day and night are long, the water is dry, the field is cracked, and the osmanthus fragrance.','fall', 'fall4.jpg');
    insert into terms(name, page, season, image) values ('Cold Dew', 'Curling up cool breeze, drinking chrysanthemum, wine, night cool as water, grass Wutong yellow.','fall', 'fall5.jpg');
    insert into terms(name, page, season, image) values ('Frosts Descent', 'The weather is getting colder, the dew is freezing, the red persimmon is sweet and soft, and the maple leaves are like fire.','fall', 'fall6.jpg');
    
    insert into terms(name, page, season, image) values ('The Beginning of Winter', 'When the river water begins to condense, it is shocked by thunder in winter. All things are collected to avoid the cold.','winter', 'winter1.jpg');
    insert into terms(name, page, season, image) values ('Lesser Snow', 'At the beginning of Taihang, snow fell and birds flew away from thousands of mountains. Farmers were busy storing vegetables to keep out the winter cold.','winter', 'winter2.jpg');
    insert into terms(name, page, season, image) values ('Greater Snow', 'Thousands of miles of ice, thousands of miles of snow, cold weather, bacon incense.','winter', 'winter3.jpg');
    insert into terms(name, page, season, image) values ('The Winter Solstice', 'Blizzard low temperature, no business for thousands of tourists, south hot pot, North dumplings and Chimonanthus grandiflorum.','winter', 'winter4.jpg');
    insert into terms(name, page, season, image) values ('Lesser Cold', 'Light cold and heavy cold, cold into ice, you close the snow, red stove warm.','winter', 'winter5.jpg');
    insert into terms(name, page, season, image) values ('Greater Cold', 'Rain and snow, Laba fragrance, firecracker sound, strong annual flavor.','winter', 'winter6.jpg');
    
    insert into list (date, termid, term) values (1216,22,'The Winter Solstice');
    `
    
    await client.query(SQL)
    
    }catch(err){
        console.log(err)
    }
}

const port = process.env.port || 1337
    app.listen(port, ()=>{
    console.log(`App is listening at port ${port}`)
})

setUp()


