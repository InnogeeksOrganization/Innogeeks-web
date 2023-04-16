var form = document.getElementById("myform")




form.addEventListener("submit",function(e){
    e.preventDefault()
    var search = document.getElementById("search").value
    var original = search.split(' ').join('')
    fetch("https://api.github.com/users/"+original)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)

        document.getElementById("result").innerHTML = `
        <div style="margin-left:570px; margin-top:40px; width:70%"><img style="width: 100px" src="${data.avatar_url}"/>
        <p style="margin-top:25px">Created at: ${data.created_at}</p>
        <p>User's url: <a target="_blank" href="https://github.com/${original}">https://github.com/${original}</a></p></div>
        `
    })
})