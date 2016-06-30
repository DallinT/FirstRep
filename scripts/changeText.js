function listing() 
{
    var numTasks = 0;
    
    if (event.keyCode === 13)
        {
            //Number of tasks
            numTasks++;
            document.getElementById("counter").text = "";
            document.getElementById("counter").value = numTasks + "Items Left";
            
            //Listing
            var listItem = document.createElement("li");
            var text = document.createTextNode(document.getElementById("textBox").value);
    
            listItem.appendChild(text);
            document.getElementById("tasks").appendChild(listItem);
            
            //Clear Text Box
            document.getElementById("textBox").value = "";
        }
}

function testing() 
{
    var cbElem = document.getElementById("cb");
    var val = "1";
    var cap = "Jan";
    
    var cb = document.createElement("input");
    cb.type = "checkbox";
    cbElem.appendChild(cb);
    cb.name = val;
    cb.value = cap;
    cb.appendChild(document.createTextNode(cap));
}