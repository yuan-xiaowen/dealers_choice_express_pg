const express = require('express')
const router = express.Router()
const client = require ('./database/db.js')

module.exports = router

router.post('/', async(req,res,next)=>{
    let date
        if(Number(req.body.day)<10){
        date = Number(req.body.month)+'0'+Number(req.body.day)  
        date = Number(date)
        }else{
        date = Number(req.body.month+req.body.day)
        } 
        
    if (date >= 201 && date <=215){
        const termId = 1  
        const term = 'The Beginning of Spring'
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    
    }
    else if (date >= 216 && date <= 229){
        const termId = 2  
        const term = 'Rain Water'
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    }
    else if (date >= 301 && date <=315){
        const termId = 3  
        const term = 'The Waking of Insects'
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    }
    else if (date >= 316 && date <= 331){
        const termId = 4 
        const term = 'The Spring Equinox'
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    }
    else if (date >= 401 && date <=415){
        const termId = 5 
        const term = 'Pure Brightness'
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    }
    else if (date >= 416 && date <= 430){
        const termId = 6 
        const term = 'Grain Rain' 
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    }
    else if (date >= 501 && date <=515){
        const termId = 7 
        const term = 'The Beginning of Summer' 
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    }
    else if (date >= 516 && date <= 531){
        const termId = 8 
        const term = 'Lesser Fullness of Grain'   
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    }
    else if (date >= 601 && date <=615){
        const termId = 9 
        const term = 'Grain in Beard'   
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    }
    else if (date >= 616 && date <= 630){
        const termId = 10 
        const term = 'The Summer Solstice'   
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    }
    else if (date >= 701 && date <=715){
        const termId = 11 
        const term = 'Lesser Heat'   
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    }
    else if (date >= 716 && date <= 731){
        const termId = 12 
        const term = 'Greater Heat'   
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    }
    else if (date >= 801 && date <=815){
        const termId = 13 
        const term = 'The Beginning of Autum'
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term]) 
    }
    else if (date >= 816 && date <= 831){
        const termId = 14 
        const term = 'The End of Heat'   
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    }
    else if (date >= 901 && date <=915){
        const termId = 15 
        const term = 'White Dew'  
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    }
    else if (date >= 916 && date <= 930){
        const termId = 16 
        const term = 'The Autumn Equinox' 
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    }
    else if (date >= 1001 && date <=1015){
        const termId = 17 
        const term = 'Cold Dew'   
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    }
    else if (date >= 1016 && date <= 1031){
        const termId = 18 
        const term = 'Frosts Descent'
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term]) 
    }
    else if (date >= 1101 && date <=1115){
        const termId = 19 
        const term = 'The Beginning of Winter'   
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])  
    }
    else if (date >= 1116 && date <= 1130){
        const termId = 20 
        const term = 'Lesser Snow'   
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    }
    else if (date >= 1201 && date <=1215){
        const termId = 21
        const term = 'Greater Snow'
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    }
    else if (date >= 1216 && date <= 1231){
        const termId = 22 
        const term = 'The Winter Solstice'
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    }
    else if (date >= 101 && date <=115){
        const termId = 23 
        const term = 'Lesser Cold'
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    }
    else if (date >= 116 && date <= 130){
        const termId = 24 
        const term = 'Greater Cold'
        const record = await client.query('insert into list(date, termid, term) values ($1, $2, $3)',[date,termId,term])
    }
     try{
        res.redirect('/')
    }catch(err){
      next(err)
    }
  })
  
  router.get('/', async(req,res,next)=>{
      try{
        const response = await client.query('select * from list')
        const records = response.rows
        console.log('records=',records)
        res.send(`
        <html>
          <head>
            <link rel="stylesheet" href="main.css">
            <title>Date To Solar Terms Conversion</title>
          </head>
          <body>
            <h1>Date To Solar Terms Conversion</h1>
            <form method ='POST'>
              <label>MONTH</label>
              <input name = 'month'/>  
              <label>DAY</label>
              <input name = 'day' />    
              <button>SUBMIT</button>
            </form>
            <ul>
             ${records.map(record =>{
                 console.log('record.termId=',record.termid)
                 let month= Math.floor(record.date/100) 
                 let day = record.date%100
                 return `<li>${month}/${day} <a href = '/${record.termid}'>${record.term}</a></li>`
             }).join('')}
            </ul>
          </body>
        </html>
        `)  
      }catch(err){
          next(err)
      }
  })

  router.get('/:id',async(req, res, next)=> {
    try{
    const id = req.params.id
    console.log('id=', id)
    const response = await client.query('select * from terms where id = $1',[id] )
    const records = response.rows
    console.log('records = ', records)
    res.send (
        `<html>
            <head>
            <link rel="stylesheet" href="main.css">
            </head>
         <body>
           <header> 24 SOLAR TERMS</header>    
             <h1>${records[0].season}</h1>
           <div>
             <img src=${records[0].image} >
             <b></b>
             <p>${records[0].name}</p>
           </div>                    
           <ul><a href='./'>back</a></ul>
         </body>
         <script>
           const div=document.querySelector('div')
           div.addEventListener('click',(event)=>{
           if(event.target.tagName==='IMG'){
             event.target.nextElementSibling.innerHTML='${records[0].page}'
             event.target.nextElementSibling.classList.remove('hide')
         }
          if(event.target.tagName==='B'){
           event.target.classList.add('hide')
        }
      })    
        </script>
      </html>`)
    } catch(err){
        next(err)
    } 
  })

  