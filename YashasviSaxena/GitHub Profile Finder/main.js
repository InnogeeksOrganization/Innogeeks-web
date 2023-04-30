var form = document.getElementById("myform")
form.addEventListener('submit',function(e)
{
    e.preventDefault()
    var search=document.getElementById("input").value
    var original= search.split(' ').join('')

    document.getElementById("result").innerHTML =""
    
    fetch("https://api.github.com/users/"+original)
    .then((result)=>result.json())
    .then((data)=>{
        console.log(data)

        document.getElementById("result").innerHTML = 
        `
        <a target="_blank" href="https://www.github.com/${original}"> <img src="${data.avatar_url}"/></a>
        <p>Name: ${data.name}</p>
        <p>Link: ${data.html_url}</p>
        <p>Created at: ${data.created_at}</p>
        `
    })
})