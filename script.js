var form = document.getElementById("myform")


form.addEventListener('submit', function (e) {
    e.preventDefault()

    var search = document.getElementById("Search").value


    var originalName = search.split(' ').join('')

    //  alert(originalName)
    document.getElementById("result").innerHTML = ""

     fetch("http://api.github.com/users/"+originalName)
        .then((result) => result.json())
        .then((data) => {

            console.log(data)
            document.getElementById("result").innerHTML=`
            <a target="blank" href="https://www.github.com/${originalName}"> <img src="${data.avatar_url}"/></a>
            `
             })
     })