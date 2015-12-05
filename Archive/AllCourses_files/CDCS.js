// JScript File

//var prm = Sys.WebForms.PageRequestManager.getInstance();
//prm.add_initializeRequest(InitializeRequest);
//prm.add_endRequest(EndRequest);


var postBackElement;

function InitializeRequest(sender, args) {
    document.getElementById(PanelID).style.width = '400px';
    document.getElementById(PanelID).style.height = '200px';
    document.getElementById(PanelID).style.position = 'absolute';
    document.getElementById(PanelID).style.top = '40%';
    document.getElementById(PanelID).style.left = '30%';
}
//----------------------------------------------------------------------------

function EndRequest(sender, args) {
    document.getElementById(PanelID).style.width = '0px';
    document.getElementById(PanelID).style.height = '0px';
}
//----------------------------------------------------------------------------

function limitLength(field, maxLength, id) {
    if (navigator.userAgent.toLowerCase().indexOf("safari") != -1) {
        //document.getElementById(field).value = inspect(document.getElementById(id),1);
        if (document.getElementById(field).value.length > maxLength) {
            alert("Maximum number of characters has been reached.\nDescription must be " + maxLength + " characters or smaller.");
            document.getElementById(field).value = document.getElementById(field).value.substring(0,maxLength);   
        }
            if (id != "none")  document.getElementById(id).innerText = "# Chars Left: " + String(maxLength - document.getElementById(field).value.length);
    } else if (navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
        //alert(inspect(document.getElementById(field),1)); 
        if (document.getElementById(field).textLength > maxLength) {
            alert("Maximum number of characters has been reached.\nDescription must be " + maxLength + " characters or smaller.");
            document.getElementById(field).value = document.getElementById(field).value.substr(0,maxLength);
        }
        if (id != "none")  document.getElementById(id).textContent = "# Chars Left: " + String(maxLength - document.getElementById(field).textLength);
    } else if (navigator.userAgent.toLowerCase().indexOf("msie") != -1) {
        if (document.getElementById(field).innerText.length > maxLength) {
            alert("Maximum number of characters has been reached.\nDescription must be " + maxLength + " characters or smaller.");
            document.getElementById(field).value = document.getElementById(field).value.substring(0,maxLength);   
         }
         if (id != "none")  document.getElementById(id).innerText = "# Chars Left: " + String(maxLength - document.getElementById(field).innerText.length);
    }
}
//----------------------------------------------------------------------------
function verifyAction() {
    if (document.getElementById('ctl00_ContentPlaceHolder1_fvDetails_ckFinal').checked) {
        if (confirm("*** CONFIRM ***  Promote Draft Description to Final.  Once saved this can not be undone.  Is this what you want to do?")) {
            //do nothing if they confirm "yes"
        } else {
            document.getElementById('ctl00_ContentPlaceHolder1_fvDetails_ckFinal').checked = false;    
        }
    }
}
//----------------------------------------------------------------------------
function getHiddenArray(){
    return HiddenIds;
}
//----------------------------------------------------------------------------
function OpenPrior(pYrTerm, pCRN, pCal, pSchool, pSubject, pCN, pCode) {
    if (navigator.userAgent.toLowerCase().indexOf("safari") != -1 ||
        navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
      
        var lYrTerm = document.getElementById(pYrTerm).textContent
        if ( lYrTerm == null || lYrTerm.replace(/^\s+|\s+$/g,"") == '' )
            lYrTerm = document.getElementById(pYrTerm).value
        
        var lCRN = document.getElementById(pCRN).textContent
        if ( lCRN == null || lCRN.replace(/^\s+|\s+$/g,"") == '' )
            lCRN = document.getElementById(pCRN).value
        
        var lCal = document.getElementById(pCal).textContent
        if ( lCal == null || lCal.replace(/^\s+|\s+$/g,"") == '' )
            lCal = document.getElementById(pCal).value
            
        var vYrTermCRNCal = lYrTerm + '-' + lCRN + '-' + lCal;
        
        var vSchool = document.getElementById(pSchool).textContent;
        if ( vSchool == null || vSchool.replace(/^\s+|\s+$/g,"") == '' )
            vSchool = document.getElementById(pSchool).value
            
        var vSubject = document.getElementById(pSubject).textContent;
        if ( vSubject == null || vSubject.replace(/^\s+|\s+$/g,"") == '' )
            vSubject = document.getElementById(pSubject).value
            
        var vCN = document.getElementById(pCN).textContent;
        if ( vCN == null || vCN.replace(/^\s+|\s+$/g,"") == '' )
            vCN = document.getElementById(pCN).value
            
        var vCode = document.getElementById(pCode).textContent;
        if ( vCode == null || vCode.replace(/^\s+|\s+$/g,"") == '' )
            vCode = document.getElementById(vCode).value
            
    } else if (navigator.userAgent.toLowerCase().indexOf("msie") != -1) { 
        var vYrTermCRNCal = document.getElementById(pYrTerm).value + '-' + document.getElementById(pCRN).innerText + '-' +  document.getElementById(pCal).value;
        var vSchool = document.getElementById(pSchool).value;
        var vSubject = document.getElementById(pSubject).innerText;
        var vCN = document.getElementById(pCN).innerText;
        var vCode = document.getElementById(pCode).innerText;
    }
    window.open('Detail_Desc.aspx?vYrTermCRNCal=' + vYrTermCRNCal + '&vSchool=' + vSchool + '&vSubject=' + vSubject + '&vCN=' + vCN + '&vCode=' + vCode, 'Prior', 'alwaysRaised=yes,toolbar=no,width=800,height=600,resizable=yes,scrollbars=yes');
}
//----------------------------------------------------------------------------
function newLookup() {  
    if (navigator.userAgent.toLowerCase().indexOf("safari") != -1) {
        document.getElementById('ctl00_ContentPlaceHolder1_lblErrorMessage').value = '';
    } else if (navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
        document.getElementById('ctl00_ContentPlaceHolder1_lblErrorMessage').textContent = '';
    } else if (navigator.userAgent.toLowerCase().indexOf("msie") != -1) { 
        document.getElementById('ctl00_ContentPlaceHolder1_lblErrorMessage').innerText = '';
    }
    window.open('LDAPLookUp.aspx', 'LDAP', 'alwaysRaised=yes,toolbar=no,width=1000,height=750,resizable=yes');
}


//----------------------------------------------------------------------------
//The below function for is for developer use---------------------------------
//Outputs all properties of the object passed in
 
function inspect(obj, maxLevels, level)
{
    var str = '', type, msg;

    // Start Input Validations
    // Don't touch, we start iterating at level zero
    if(level == null)  level = 0;

    // At least you want to show the first level
    if(maxLevels == null) maxLevels = 1;
    if(maxLevels < 1)     
    return '<font color="red">Error: Levels number must be > 0</font>';

    // We start with a non null object
    if(obj == null)
    return '<font color="red">Error: Object <b>NULL</b></font>';
    // End Input Validations

    // Each Iteration must be indented
    str += '<ul>';

    // Start iterations for all objects in obj
    for(property in obj)
    {
    try
    {
    // Show "property" and "type property"
    type =  typeof(obj[property]);
    str += '<li>(' + type + ') ' + property + 
    ( (obj[property]==null)?(': <b>null</b>'):(": " + obj[property])) + '</li>';

    // We keep iterating if this property is an Object, non null
    // and we are inside the required number of levels
    if((type == 'object') && (obj[property] != null) && (level+1 < maxLevels))
    str += inspect(obj[property], maxLevels, level+1);
    }
    catch(err)
    {
    // Is there some properties in obj we can't access? Print it red.
    if(typeof(err) == 'string') msg = err;
    else if(err.message)        msg = err.message;
    else if(err.description)    msg = err.description;
    else                        msg = 'Unknown';

    str += '<li><font color="red">(Error) ' + property + ': ' + msg +'</font></li>';
    }
    }

    // Close indent
    str += '</ul>';

    return str;
}