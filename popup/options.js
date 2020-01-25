$(document).ready(function (e) {
    var profiles = JSON.parse(localStorage.getItem('profileOptions'));
    
    if (!localStorage.getItem('profileOptions')) {
        let initValues = {
            "invalid": "--Select Profile--",
            "new": "Create New..."
        };
        localStorage.setItem('profileOptions', JSON.stringify(initValues));
    }
    
    $.each(profiles, function (key, value) {
        $('#profiles').append($("<option></option>").attr("value", key).text(value).append("&nbsp;&nbsp;"));
    });
    $('#profiles').on('change', function (e) {
        e.preventDefault();
        if (this.value === "new") {
            $('.name-card').removeClass('d-none');
        }
    });
    $('#btnOK').on('click', function (e) {
        e.preventDefault();
        $('.name-card').addClass('d-none');
        let name = $('#profileName').val();
        let key = name.replace(/\s+/g, '').toLowerCase();
        profiles[key] = name;
        $('#profiles').append($("<option></option>").attr("value", key).text(name).append("&nbsp;&nbsp;"));
        $('#profiles').val(key).change();
        localStorage.setItem('profileOptions', JSON.stringify(profiles));
    });
    $('#btnCancel').on('click', function (e) {
        e.preventDefault();
        $('.name-card').addClass('d-none;');
    });
    
});