const axios = require('axios');



const baseURL = `https://www.superheroapi.com/api.php/${process.env.REACT_APP_API_KEY}/`

const getSearch = async (input) =>{
  const res = await axios.get(baseURL+"search/"+input)
  return res
}
const getChar = async (id) =>{
  const res = await axios.get(baseURL+id)
  return res
}

const getToken = async ({email, password}) =>{
  const res = await axios({
    method: 'post',
    url: "http://challenge-react.alkemy.org/",
    data: {
      email: email,
      password: password
    }
  })
  return res
}


module.exports = {getSearch, getChar, getToken}