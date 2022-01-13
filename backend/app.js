const express = require('express')
const { v4 } = require('uuid')
const cors = require('cors');
const morgan = require('morgan');

const app = express()

const PORT = 3001
app.use(morgan('dev'))


let DB = {
  restaurants: [
    {
      id: 1,
      name: 'Club money',
      url: 'https://s3-media0.fl.yelpcdn.com/bphoto/kUlEaPpv0JGlHG_nrPr7wQ/348s.jpg',
      description: 'Goods restraunt',
      rating: 4,
      comment: ['This is comments', 'Goods'],
      status: false
    },
    {
      id: 2,
      name: 'Prime',
      url: 'https://s3-media0.fl.yelpcdn.com/bphoto/P4NfQ7KFvHpcfBcOwxBZJA/348s.jpg',
      description: 'Goods restraunt',
      rating: 2,
      comment: ['Qwerty'],
      status: false
    }, {
      id: 3,
      name: 'Nopa',
      url: 'https://s3-media0.fl.yelpcdn.com/bphoto/sR8PcJ_ASWEIOphlCqVfFw/348s.jpg',
      description: 'Goods restraunt',
      rating: 5,
      comment: ['Hello', 'Hay', 'Bay'],
      status: false
    },
    {
      id: 4,
      name: 'Nora',
      url: 'https://s3-media0.fl.yelpcdn.com/bphoto/X-dgyeI8RijCWSkuK0gyZg/348s.jpg',
      description: 'Goods restraunt',
      rating: 1,
      comment: ['Hello', 'Hay'],
      status: false
    },
    {
      id: 5,
      name: 'Miller & Lux',
      url: 'https://s3-media0.fl.yelpcdn.com/bphoto/yrB1ghsnmlISCIgIP44jGQ/348s.jpg',
      description: 'Love to code',
      rating: 4,
      comment: [],
      status: false
    },
  ],
  persons: [
    {
      id: 1,
      name: 'Hamzat',
      surname: 'Hasanov',
      url: 'https://baltic-grlk5lagedl.stackpathdns.com/production/baltic/images/1604943724864526-10.jpeg?w=450&h=800&fit=clip&crop=faces&auto=%5B%22format%22%2C%20%22compress%22%5D&cs=srgb',
      age: 24,
      work: 'Developer',
      description: 'Goods restraunt',
      rating: 9,
      comment: ['This is comments', 'Goods boy'],
    },
    {
      id: 2,
      name: 'Anton',
      surname: 'Antonov',
      url: 'https://media.gq.com/photos/5e5ebc2cb7235e00084122d3/1:1/w_2999,h_2999,c_limit/burna-boy-gq-style-spring-summer-2020-promo.jpg',
      age: 24,
      work: 'Developer',
      description: 'Goods restraunt',
      rating: 9,
      comment: ['This is comments', 'Goods boy'],
    },
    {
      id: 3,
      name: 'Petr',
      surname: 'Petrov',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Central_African_Republic_-_Boy_in_Birao.jpg/1200px-Central_African_Republic_-_Boy_in_Birao.jpg',
      age: 24,
      work: 'Developer',
      description: 'Goods restraunt',
      rating: 9,
      comment: ['This is comments', 'Goods boy'],
    },
  ]
}

app.use(cors())
app.use(express.json())


app.get('/persons', (req, res) => {
  res.json(DB.persons)
})



app.get('/restaurants', (req, res) => { // one rest

  const { _filter: filterName, _reviews: filterReviews } = req.query;
  let result = DB.restaurants;
  if (filterName) {
    let regexp = new RegExp(filterName, 'i');
    result = result.filter(el => regexp.test(el.name))
  }
  if (filterReviews) {
    result = result.filter(el => el.rating >= filterReviews)
  }
  setTimeout(() => {
    res.json(result);
  }, 500)
})

app.get('/restaurants/:id', (req, res) => { // detail card restraunt
  const currentRestaurants = DB.restaurants.find(el => el.id === +req.params.id)
  setTimeout(() => {
    res.json(currentRestaurants)
  }, 500)
})

app.get('/restaurants/:id/edit', (req, res) => { // detail card restraunt edit
  const currentRestaurants = DB.restaurants.find(el => el.id === +req.params.id)
  res.json(currentRestaurants)
})

app.get('/restaurants/favourites', (req, res) => {
  const currentRestaurants = DB.restaurants.find(el => el.id === +req.params.id)
  res.sendStatus(200);
})

app.post('/restaurants', (req, res) => {
  try {
    DB.restaurants.push(req.body);
    res.json(req.body)
  } catch (error) {
    console.log(error);
  }
})
app.patch('/restaurants/:id/edit/rest', (req, res) => {
  try {
    const currentRestaurants = DB.restaurants.find(el => el.id === +req.params.id)
    currentRestaurants.url = req.body.url
    currentRestaurants.name = req.body.name
    currentRestaurants.description = req.body.description
    res.json(currentRestaurants)
  } catch (error) {
    console.log(error);
  }
})

app.patch('/restaurants/:id', (req, res) => {
  console.log('!!!!!!!', req.params.id);

  const result = DB.restaurants.map(el => {
    if (el.id === +req.params.id) {
      return {
        ...el,
        status: !el.status
      };
    }
    return el
  })
  res.sendStatus(200)
})


app.post('/restaurants/:id/reviews/new', (req, res) => {
  try {
    const currentRestaurants = DB.restaurants.find(el => el.id === +req.params.id)
    currentRestaurants.comment.push(req.body.comment)
    res.json(currentRestaurants)
  } catch (error) {
    console.log(error);
  }
})


app.delete('/restaurants/:id', (req, res) => {
  DB.restaurants = DB.restaurants.filter(el => el.id !== +req.params.id)
  res.sendStatus(200)
})

app.listen(PORT, () => {
  console.log('Server has been started on PORT', PORT)
})


