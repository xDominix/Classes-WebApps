var submitButton = document.getElementById("sub");
submitButton.addEventListener('click',submitContact);

function submitContact() {
    /*
    <div>
        <b>contact1</b>
        <div class="square"><img src="bin.png"></div>
        <div>500 200 201</div>
    </div>
    */
    
    let nameInput = document.getElementById("name");
    let numberInput = document.getElementById("number");

    var letters = /^[A-Za-z]+$/;

    let number = numberInput.value.replace(/\s/g, '').replace('+','').replace('(','').replace(')','');
    let name = nameInput.value.replace(/\s/g, '');

    if(!isNaN(parseInt(number)) && String(number).length == 9 && name.match(letters) && String(name).charAt(0) == String(name).charAt(0).toUpperCase() )
    {
       
        
        const node = document.createTextNode(nameInput.value);
        const bold = document.createElement("b");
        bold.appendChild(node);
        
        var img = new Image();
        img.src = 'bin.png';
        const square = document.createElement("div");
        square.className = "square";
        square.appendChild(img);
        square.addEventListener('click',function(){deleteContact(square);},false);

        const number = document.createElement("div");
        const numberText = document.createTextNode(numberInput.value);
        number.appendChild(numberText);

        const element = document.createElement("div");
        element.appendChild(bold);
        element.appendChild(square);
        element.appendChild(number);

        const parent = document.getElementById("contacts");
        parent.appendChild(element);

        nameInput.value = "";
        numberInput.value="";
        document.getElementById("contacts").scrollTop = document.getElementById("contacts").scrollHeight;
        }
        else
        {
            alert("Wrong contact format...")
        }

       
  }

function deleteContact(el)
{
    var element = el.parentElement;
    element.remove();
}