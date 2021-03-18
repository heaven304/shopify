const { default: axios } = require('axios')
const express = require('express')
const app = express()
const port = process.env.PORT || 80

app.get('/orders', (req, res) => {
  res.send('Hello World!')
  axios.get("https://b04073ec68aa548224d8ec8ed9040ccd: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@the-roy-in.myshopify.com/admin/api/2021-01/orders.json?status=any").then(res=>{
      console.log('res',res.data);
      res.status(200).send(res.data)
  }  
  ).catch(err=>{
      console.error('err',err)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})