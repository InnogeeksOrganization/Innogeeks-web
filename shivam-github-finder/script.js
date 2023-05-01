var form= document.getElementById("myForm")
let link="";
form.addEventListener('submit', function(e){
    e.preventDefault()

    var search = document.getElementById("search").value
    var originalName = search.split(' ').join('')
    
    
    
    fetch("https://api.github.com/users/"+originalName).then((result) => result.json())
    .then((data) => {
        link=data.avatar_url;
        // console.log(data.avatar_url)
// console.log(link);
// console.log(originalName);
       
        document.getElementById("result").innerHTML = `<a href="https:github.com/${originalName}">
        <img src="${link}"/>
        </a>
         `
   
    })
    
})

// console.log(link);