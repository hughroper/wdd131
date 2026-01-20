
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); 




// button click… 
button.addEventListener('click', function () {

    // check if field is empty
    if (input.value.trim() !== '') { 

        // create <li>
        const li = document.createElement('li');

        // create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', 'Close');
        deleteButton.id = 'close-button';

        // add text
        li.textContent = input.value;

        // append delete button 
        li.append(deleteButton);

        // add <li> to list
        list.append(li);
        
        // listen for delete button
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // clear input and set focus on input
        input.value = '';
        input.focus();
    }

});

