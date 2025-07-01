function addingEventListener() {
    const input = document.getElementById('button');

    function clickAlert() {
        alert('i was clicked!');
    }
    input.addEventListener('click', clickAlert);
}
 
