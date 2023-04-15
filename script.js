var form = document.getElementById("myform")


form.addEventListener('submit',function(e){
    e.preventDefault()

    var search = document.getElementById("search").value
    
    

    var originalName = search.split(' ').join('')

    document.getElementById("result").innerHTML = ""

fetch("https://api.github.com/users/"+originalName)
.then((result) => result.json())
.then((data) => {


    console.log(data)
    document.getElementById("result").innerHTML =`
  <a target= "blank" href="https://www.github.com/${originalName}"> <img src="${data.avatar_url}"/></a>
    `
})
}) 