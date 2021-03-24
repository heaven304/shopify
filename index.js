const { default: axios } = require('axios')
const express = require('express')

const cors = require('cors')
const app = express()
app.use(cors())
const port = process.env.PORT || 80

app.get('/orders', (req, res) => {
  // res.send('Hello World!')

//   #...
// Link: "<https://{shop}.myshopify.com/admin/api/{version}/products.json?page_info={page_info}&limit={limit}>; rel={next}, <https://{shop}.myshopify.com/admin/api/{version}/products.json?page_info={page_info}&limit={limit}>; rel={previous}"
// #...

  axios.get("https://b04073ec68aa548224d8ec8ed9040ccd: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@the-roy-in.myshopify.com/admin/api/2021-01/orders.json?status=any&limit=maximum").then(result=>{
      console.log('res',result.data);
      res.json(result.data)
  }  
  ).catch(err=>{
      console.error('err',err)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})