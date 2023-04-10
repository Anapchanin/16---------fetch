let linkS = document.querySelector('img')
let inputSearch = document.querySelector('#inputSearch')
let btnSearchImg = document.querySelector('#btnSearchImg')
let btnRandomImg = document.querySelector('#btnRandomImg')

let request = false;

let API = 'UFEdl8cp8odlx1KXnHKsaTtFJgVroFLD'
let RequestURLRandom = `https://api.giphy.com/v1/gifs/random?api_key=${API}&tag=&rating=g`


btnRandomImg.addEventListener('click', async () => {
    requestRandom()
})

const requestRandom = async () =>{
    fetch(RequestURLRandom)
    .then((res)=>res.json())
    .then(res => {
        console.log(res)
        let link = res['data']['images']['original']['url']
        linkS.src = link
       
    })
}

inputSearch.addEventListener('keydown',async (event) =>{
    if(event.key === 'Enter')
    {
       
       await requestSearch()
    }
})

const requestSearch = async() =>{
    let RequestURLSearch = `https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${inputSearch.value}&limit=1&offset=0&rating=g&lang=en`
    fetch(RequestURLSearch)
    .then((res)=>res.json())
    .then(res => {
        //console.log(res ['data'])
        //console.log(res ['data'][0])
        //console.log(res ['data'][0]['images'])
        //console.log(res ['data'][0]['images']['original'])
        //console.log(res ['data'][0]['images']['original']['url'])
       link = res ['data'][0]['images']['original']['url']
       linkS.src = link
       inputSearch.value = ''
    })
    .catch((err) =>{
        link = "devtools://devtools/bundled/devtools_app.html?remoteBase=https://chrome-devtools-frontend.appspot.com/serve_file/@0a2e5078088fc9f9a29247aaa40af9e7ada8b79f/&can_dock=true&panel=elements#:~:text=Current%20source%3A-,https%3A//www.elegantthemes.com/blog/wp%2Dcontent/uploads/2020/08/000%2Dhttp%2Derror%2Dcodes.png"
        console.log(err)
    })

}