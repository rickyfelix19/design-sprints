/* 
    Javascript Bootstrap 5 Links:
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js - metadata
*/ 

function lang() {
    var select_lang = document.getElementById("languages");
    var result = document.getElementById("selected_languages");

    select_lang.addEventListener('change', function(event) {
        var select_value = this.value;
        var select_text = this.options[this.selectedIndex].text;
        result.innerText = select_value + '\n' + select_text;
    });
}