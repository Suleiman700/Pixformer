// This file job is to setup the fuzzy search to work with datatables


// Add class to datatables search input
const datatables_setup_search_elm = (datatableID) => {
    $ (datatableID).attr ('class', `fuzzySearch`);
}


// Setup FuzzySearch on input element
const inputSetup = (datatableID, src) => {
    // Example: datatableID = (#stockGrid_filter label input)
    $(datatableID).typeahead({
        minLength: 1,
        highlight: false,
    }, {
        name: 'items',
        source: src, // Source example: fuzzyhound
        templates: {
            suggestion: function(result){return `<li class="autoComplete_result" data-itemname="${result}">${src.highlight(result)}</li>`}
        }
    });
}


// Set search items background
const setSearchItemsBG = () => {
    $ ('.tt-menu').css('background', 'white');
}


// Main job that does everything
const setupFuzzySearch =  (datatableID, src) => {
    /*
        datatableID: the destination of the search input inside the datatable
        src: the FuzzySearch object in the index.php (since we have multipie FuzzySearches, the source can be diffirent)
     */
    datatables_setup_search_elm(datatableID)
    inputSetup(datatableID, src)
    setSearchItemsBG()

    // Hide annoying hint text above input field
    $('.twitter-typeahead').children().first().hide()
}


export default setupFuzzySearch