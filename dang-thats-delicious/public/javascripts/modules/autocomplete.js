function autocomplete(input, latInput, lngInput) {
    if(!input) return; //skips functions if no address is provided

    const dropdown = new google.maps.places.Autocomplete(input);

    /*
    Come back to include more details in regards to that address location!
     */
    dropdown.addListener('place_changed', ()=> {
        const place= dropdown.getPlace();
        latInput.value = place.geometry.location.lat();
        lngInput.value = place.geometry.location.lng();
    });

    //don't submit form when 'Enter' is hit on submit form
    input.on('keydown', (e)=> {
        if(e.keyCode === 13) e.preventDefault();
    });
}

export default autocomplete;