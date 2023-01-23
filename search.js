const XHRequest = new XMLHttpRequest();
let sourceSearch = [];

XHRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
XHRequest.send();

XHRequest.responseType = 'json';

XHRequest.onload = () => {
    if (XHRequest.readyState === 4 && XHRequest.status === 200) {
        const response = XHRequest.response;

        // getting all name from api to a list of search
        for (let i = 0; i < response.length; i++) {
            sourceSearch.push(response[i].name);
        }

        $('#search').click('input',function(e)
        {
            searchString($(this).val(), sourceSearch);
        });

        $('#search').on('input',function(e)
        {
            searchString($(this).val(), sourceSearch);
        });

        $('#search').blur('input',function(e)
        {
            removeSearchOutput();
        });

    } else {
        console.error("Error: ", XHRequest.status);
    }
}

let formParent = document.getElementById("search-parent");
let firstChild = document.getElementById("search");

function searchString(str, sourceSearch) {
    removeSearchOutput();
    let searchOutput = document.createElement('ul');
    searchOutput.id = 'search-output';
    searchOutput.classList.add('list-group');

    let index;

    for (let i=0; i < sourceSearch.length; i++) {
        name = sourceSearch[i];
        url = "https://kinsta.com/fr/blog/erreur-405-method-not-allowed/" // months[i].getAttribute('urltarget');

        index = name.toLowerCase().indexOf(str.toLowerCase())

        if (index !== -1) {
            newElement = document.createElement('a');
            newElement.textContent = name
            newElement.classList.add('list-group-item');
            newElement.classList.add('list-group-item-action');
            //element = '<a class="list-group-item list-group-item-action" onclick=redirectTo('+'"'+url+'"'+')>' + name + '</a>'
            newElement.href = url;
            
            searchOutput.appendChild(newElement)
        }
    }

    formParent.appendChild(searchOutput);
}

function removeSearchOutput() {
    
    try {
        document.getElementById('search-output').remove();
    } catch (e) {
    
    };
}
