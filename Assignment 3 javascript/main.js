var siteName=document.getElementById("site-name")
var siteUrl=document.getElementById("site-url")
var alerSite=document.getElementById("alert-site")
var alerName=document.getElementById("alert-name")
var sites=[]
if(localStorage.getItem("sites")!=null){
    sites=JSON.parse(localStorage.getItem("sites"))
    display()
}
function addSites(){
    if(validationSiteName()==true&&validationSiteUrl()==true){
        var site={
       Name: siteName.value,
        Url:siteUrl.value
    }
    sites.push(site)
    localStorage.setItem("sites",JSON.stringify(sites))
    display()
    }
    
}
function display(){
    var box=''

    for(var i=0;i<sites.length;i++){
        box+=`
        <tr>
                <td>${i+1}</td>
                <td>${sites[i].Name}</td>
                <td><button class="btn btn-success" onclick="visit(siteUrl.value)" > Visit</button></td>
                <td><button class="btn btn-danger" onclick="deleteSite(${i})"> Delete</button></td>
            </tr>

        `
    }
    document.getElementById("body-table").innerHTML=box
}
function deleteSite(index){
    sites.splice(index,1)
    localStorage.setItem("sites",JSON.stringify(sites))
    display()
}
function visit(url){
     window.open(url, '_blank')
}

function validationSiteName(){
    var regex=/^[A-Z]{1}[a-z]{5,20}$/
    var text=siteName.value
    if(regex.test(text)==true){
        siteName.classList.add("is-valid")
        siteName.classList.remove("is-invalid")
        alerName.classList.add("d-none")
        return true
    }else{
        siteName.classList.add("is-invalid")
        siteName.classList.remove("is-valid")
        alerName.classList.remove("d-none")
        return false
    }
}
function validationSiteUrl(){
    var regex=/^(https:|http:)\/\/[a-z]{5,20}\.com/
    var text=siteUrl.value
    if(regex.test(text)==true){
        siteUrl.classList.add("is-valid")
        siteUrl.classList.remove("is-invalid")
        alerSite.classList.add("d-none")
        return true
    }else{
        siteUrl.classList.add("is-invalid")
        siteUrl.classList.remove("is-valid")
        alerSite.classList.remove("d-none")
        
        return false
    }
}