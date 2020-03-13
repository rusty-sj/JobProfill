$(document).ready(function (e) {
    var optionsPromise = browser.storage.sync.get('profileOptions');
    var profiles;
    optionsPromise.then((res) => {
        if (!res.profileOptions) {
            let initValues = {
                "invalid": "--Select Profile--",
                "new": "Create New..."
            };
            browser.storage.sync.set({
                profileOptions: JSON.stringify(initValues)
            });
        }
        profiles = JSON.parse(res.profileOptions);
        $.each(profiles, function (key, value) {
            $('#profiles').append($("<option></option>").attr("value", key).text(value).append("&nbsp;&nbsp;"));
            var recentPromise = browser.storage.sync.get('recentProfile');
            recentPromise.then((res) => {
                $('#profiles').val(res.recentProfile).change();
            });
        });
    });
    
    function onCreated() {
        if (browser.runtime.lastError) {
            console.log("error creating item:" + browser.runtime.lastError);
        } else {
            console.log("item created successfully");
        }
    }
    
    browser.contextMenus.create({
        id: "run-profile",
        title: "Run Profile",
        contexts: ["all"]
    }, onCreated);
    
    browser.contextMenus.onClicked.addListener(function (info, tab) {
        if (info.menuItemId === "run-profile") {
            fillForm(info, tab);
        }
    });
    
    function fillForm(info, tab) {
        browser.tabs.executeScript({
            file: "/content_scripts/contentFill.js"
        }).then(listenForClicks)
            .catch(reportExecuteScriptError);
    }
    
    $('#profiles').on('change', function (e) {
        e.preventDefault();
        if (this.value === "new") {
            $('.name-card').removeClass('d-none');
            $('#profileName').focus();
        } else {
            $('.name-card').addClass('d-none');
        }
    });
    $('#btnOK').on('click', function (e) {
        e.preventDefault();
        let name = $('#profileName').val();
        if (name) {
            $('#profileName').removeClass('error-focused');
            $('.name-card').addClass('d-none');
            let key = name.replace(/\s+/g, '').toLowerCase();
            profiles[key] = name;
            $('#profiles').append($("<option></option>").attr("value", key).text(name).append("&nbsp;&nbsp;"));
            $('#profiles').val(key).change();
            
            browser.storage.sync.set({
                profileOptions: JSON.stringify(profiles),
                recentProfile: key
            });
        } else {
            $('#profileName').addClass('error-focused');
        }
    });
    $('#btnCancel').on('click', function (e) {
        e.preventDefault();
        $('.name-card').addClass('d-none');
    });
    $('#saveProfile').on('click', function (e) {
        e.preventDefault();
        var profileNameVal = $('#profiles').val();
        console.log(profileNameVal);
        
        if (profileNameVal !== 'invalid' && profileNameVal !== 'new') {
            browser.tabs.executeScript({file: "/content_scripts/collectData.js"})
                .then(listenForClicks)
                .catch(reportExecuteScriptError);
            
        } else {
            $('#profiles').focus();
        }
    });
    
    function listenForClicks(result) {
        $('#saveSuccess').show().delay(2000).fadeOut();
    }
    
    function reportExecuteScriptError(error) {
        console.log(`Error: ${error}`);
    }
    
});
