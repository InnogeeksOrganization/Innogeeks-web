
//to display text after click on search!
function functionName() {
    document.querySelector(".box").classList.toggle("b1")
  }
  
  //fetch data from form!
  var form = document.getElementById("myForm");
  
  
  form.addEventListener('submit', function (e) {
  
    //prevent the auto submission of form
    e.preventDefault();
  
    var search = document.getElementById("search").value;
  
    //to remove space in b/w firstName & lastName
    var originalName = search.split(' ').join('');
  
    document.getElementById("result").innerHTML = '';
  
    fetch("https://api.github.com/users/" + originalName)
      .then((result) => result.json())
      .then((data) => {
        console.log(data)
  
        document.getElementById("result").classList.add("discription");
  
        document.getElementById("result").innerHTML = `
         <a target="_blank" href="https://www.github.com/${originalName}"> <img  src="${data.avatar_url}"/></a>
          `
      })
  })