//adding field for certificate
function addcerti(){
    let newnode1 = document.createElement("input");
    newnode1.classList.add('form-control');
    newnode1.classList.add('certify');
    let add1 = document.getElementById("add1");
    let certibtn = document.getElementById("webtn1");

    add1.insertBefore(newnode1,certibtn);

}
//adding field for projects
function addproject(){

    let newnode2 = document.createElement("input")
    newnode2.classList.add('form-control')
    newnode2.classList.add('allprojects')
    let add2 = document.getElementById("add2")
    let projectbtn = document.getElementById("webtn2")

    add2.insertBefore(newnode2,projectbtn);
}
//adding field for qualification
function addquali(){
    let newnode3 = document.createElement("input")
    newnode3.classList.add('form-control')
    newnode3.classList.add('academic')
    let add3 = document.getElementById("add3")
    let qualitbtn = document.getElementById("webtn3")

    add3.insertBefore(newnode3,qualitbtn);
}
//generating CV
function generateCV()
{
    //console.log("hello done")
    let namefield = document.getElementById("namefield").value;
 // name
    let namet1 = document.getElementById("namet1");
    namet1.innerHTML = namefield;
    document.getElementById("namet2").innerHTML = namefield;

    // emal
    let emailaddressfield = document.getElementById("emailaddressfield").value;
    document.getElementById("emailt").innerHTML = emailaddressfield;

// number
    let numberfield = document.getElementById("numberfield").value;
    document.getElementById("contactt").innerHTML = numberfield;

// address
    let addressfield = document.getElementById("addressfield").value;
    document.getElementById("addresst").innerHTML = addressfield;


//linkedin
    let LinkedInfield = document.getElementById("LinkedInfield").value;
    document.getElementById("linkedt").innerHTML = LinkedInfield;


//github
    let Githubfield = document.getElementById("Githubfield").value;
    document.getElementById("gitt").innerHTML = Githubfield;

//certification
    
     let certifyobj = document.getElementsByClassName("certify")

     let str="" // taking string variable for making alice 

     for(let e of certifyobj)
     {
         str = str + `<li> ${e.value} </li>` ;
     }
     document.getElementById("certificatt").innerHTML = str;

//objective
    let objectivesfield = document.getElementById("objectivesfield").value;
    document.getElementById("objectivet").innerHTML = objectivesfield;

//tech
    let techfield = document.getElementById("techfield").value;
    document.getElementById("languaget2").innerHTML = techfield;

// project   
    let allprojectsobj = document.getElementsByClassName("allprojects")

    let str1="" // taking string variable for making alice 

    for(let e1 of allprojectsobj)
    {
        str1 = str1 + `<li> ${e1.value} </li>` ;
    }
    document.getElementById("projectt").innerHTML = str1;

//academic
   let academicobj = document.getElementsByClassName("academic")

    let str2="" // taking string variable for making alice 

    for(let e2 of academicobj)
    {
        str2 = str2 + `<li> ${e2.value} </li>` ;
    }
    document.getElementById("schoolt").innerHTML = str2;

    document.getElementById("cvform").style.display = 'none'; // for hiding the from
    document.getElementById("cvtemplate").style.display = 'block';


}
function printCV()
{
   window.print()   
}