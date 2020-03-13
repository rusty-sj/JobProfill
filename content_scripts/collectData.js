/*var labels = $('label');

var fNameRegex = /f(irst)?((\w+)*|\s|\w+\s|(\w+)?\W)name/i;
var lNameRegex = /l(ast)?((\w+)*|\s|\w+\s|(\w+)?\W)name/i;
var emailRegex = /email/i;
var phoneRegex = /phone/i;
var cellRegex = /cell/i;
var addressRegex = /address/i;
var streetRegex = /street/i;
var cityRegex = /city/i;
var stateRegex = /state/i;
var zipRegex = /zip/i;
var employerRegex = /employer/i;
var companyNameRegex = /organization/i;
var companyPositionRegex = /job((\w+)*|\s|\w+\s|(\w+)?\W)function/i;
var companyTitleRegex = /(job)?((\w+)*|\s|\w+\s|(\w+)?\W)title/i;
var schoolNameRegex = /school/i;
var institutionRegex = /institution/i;
var fieldOfStudyRegex = /discipline/i;
var degreeRegex = /degree/i;
var areaOfStudyRegex = /area\sof\sstudy/i;
var certificateRegex = /certificat/i;
var linkedInRegex = /LinkedIn/i;
var authorizationRegex = /authorized/i;
var visaStatusRegex = /visa/i;
var visasponsorshipRegex = /sponsorship/i;

var userProfile = {};

$.each(labels, function (key, label) {
    let findInput = $(label).next();
    let val;
    
    if (fNameRegex.test(label.innerText)) {
        val = $(findInput).val();
        if (val)
            userProfile['firstName'] = val;
    } else if (lNameRegex.test(label.innerText)) {
        val = $(findInput).val();
        if (val)
            userProfile['lastName'] = val;
    } else if (emailRegex.test(label.innerText)) {
        val = $(findInput).val();
        if (val)
            userProfile['email'] = val;
    } else if (phoneRegex.test(label.innerText)) {
        val = $(findInput).val();
        if (val)
            userProfile['phone'] = val;
    } else if (cellRegex.test(label.innerText)) {
        userProfile['cell'] = val;
    } else if (addressRegex.test(label.innerText)) {
        userProfile['address'] = val;
    } else if (streetRegex.test(label.innerText)) {
        userProfile['street'] = val;
    } else if (cityRegex.test(label.innerText)) {
        val = $(findInput).val();
        if (val)
            userProfile['city'] = val;
    } else if (stateRegex.test(label.innerText)) {
        userProfile['state'] = val;
    } else if (zipRegex.test(label.innerText)) {
        userProfile['zip'] = val;
    } else if (employerRegex.test(label.innerText)) {
        userProfile['employer'] = val;
    } else if (companyNameRegex.test(label.innerText)) {
        userProfile['organization'] = val;
    } else if (companyPositionRegex.test(label.innerText)) {
        userProfile['companyPosition'] = val;
    } else if (companyTitleRegex.test(label.innerText)) {
        userProfile['companyTitle'] = val;
    } else if (schoolNameRegex.test(label.innerText)) {
        //val = $(findInput).find('.select2-choice').find('.select2-chosen')[0].innerHTML;
        if (val)
            userProfile['school'] = val;
    } else if (institutionRegex.test(label.innerText)) {
        userProfile['institution'] = val;
    } else if (fieldOfStudyRegex.test(label.innerText)) {
        //val = $(findInput).find('.select2-choice').find('.select2-chosen')[0].innerHTML;
        if (val)
            userProfile['fieldOfStudy'] = val;
    } else if (degreeRegex.test(label.innerText)) {
        //val = $(findInput).find('.select2-choice').find('.select2-chosen')[0].innerHTML;
        if (val)
            userProfile['degree'] = val;
    } else if (areaOfStudyRegex.test(label.innerText)) {
        userProfile['areaOfStudy'] = val;
    } else if (certificateRegex.test(label.innerText)) {
        userProfile['certificate'] = val;
    } else if (linkedInRegex.test(label.innerText)) {
        userProfile['linkedIn'] = val;
    } else if (authorizationRegex.test(label.innerText)) {
        userProfile['authorization'] = val;
    } else if (visaStatusRegex.test(label.innerText)) {
        userProfile['visa'] = val;
    } else if (visasponsorshipRegex.test(label.innerText)) {
        userProfile['sponsorship'] = val;
    }
    
    
});*/

var first_name = "#first_name",
    last_name = "#last_name",
    email = "#email",
    phone = "#phone",
    job_application_location = "#job_application_location",
    school = "#s2id_education_school_name_0 > a:nth-child(1) > span:nth-child(1)",
    degree = "#s2id_education_degree_0 > a:nth-child(1) > span:nth-child(1)",
    discipline = "#s2id_education_discipline_0 > a:nth-child(1) > span:nth-child(1)",
    start_month = "div.education:nth-child(1) > fieldset:nth-child(2) > div:nth-child(4) > fieldset:nth-child(1) > input:nth-child(2)",
    start_year = "div.education:nth-child(1) > fieldset:nth-child(2) > div:nth-child(4) > fieldset:nth-child(1) > input:nth-child(3)",
    end_month = "div.education:nth-child(1) > fieldset:nth-child(2) > div:nth-child(5) > fieldset:nth-child(1) > input:nth-child(2)",
    end_year = "div.education:nth-child(1) > fieldset:nth-child(2) > div:nth-child(5) > fieldset:nth-child(1) > input:nth-child(3)",
    school1 = "#s2id_education_school_name_1 > a:nth-child(1) > span:nth-child(1)",
    degree1 = "#s2id_education_degree_1 > a:nth-child(1) > span:nth-child(1)",
    discipline1 = "#s2id_education_discipline_1 > a:nth-child(1) > span:nth-child(1)",
    start_month1 = "#education_section > div:nth-child(2) > fieldset:nth-child(2) > div:nth-child(4) > fieldset:nth-child(1) > input:nth-child(2)",
    start_year1 = "#education_section > div:nth-child(2) > fieldset:nth-child(2) > div:nth-child(4) > fieldset:nth-child(1) > input:nth-child(3)",
    end_month1 = "#education_section > div:nth-child(2) > fieldset:nth-child(2) > div:nth-child(5) > fieldset:nth-child(1) > input:nth-child(2)",
    end_year1 = "#education_section > div:nth-child(2) > fieldset:nth-child(2) > div:nth-child(5) > fieldset:nth-child(1) > input:nth-child(3)",
    linkedIn = "#job_application_answers_attributes_1_text_value",
    portfolio = "#job_application_answers_attributes_0_text_value";

var userProfile = {};
if ($(first_name).val())
    userProfile['first_name'] = $(first_name).val();
if ($(last_name).val())
    userProfile['last_name'] = $(last_name).val();
if ($(email).val())
    userProfile['email'] = $(email).val();
if ($(phone).val())
    userProfile['phone'] = $(phone).val();
if ($(job_application_location).val())
    userProfile['job_application_location'] = $(job_application_location).val();
if ($(school).text())
    userProfile['school'] = $(school).text();
if ($(degree).text())
    userProfile['degree'] = $(degree).text();
if ($(discipline).text())
    userProfile['discipline'] = $(discipline).text();
if ($(start_month).val())
    userProfile['start_month'] = $(start_month).val();
if ($(start_year).val())
    userProfile['start_year'] = $(start_year).val();
if ($(end_month).val())
    userProfile['end_month'] = $(end_month).val();
if ($(end_year).val())
    userProfile['end_year'] = $(end_year).val();
if ($(school1).text())
    userProfile['school1'] = $(school1).text();
if ($(degree1).text())
    userProfile['degree1'] = $(degree1).text();
if ($(discipline1).text())
    userProfile['discipline1'] = $(discipline1).text();
if ($(start_month1).val())
    userProfile['start_month1'] = $(start_month1).val();
if ($(start_year1).val())
    userProfile['start_year1'] = $(start_year1).val();
if ($(end_month1).val())
    userProfile['end_month1'] = $(end_month1).val();
if ($(end_year1).val())
    userProfile['end_year1'] = $(end_year1).val();
if ($(linkedIn).val())
    userProfile['linkedIn'] = $(linkedIn).val();
if ($(portfolio).val())
    userProfile['portfolio'] = $(portfolio).val();


var promise = browser.storage.sync.get('recentProfile');
promise.then((res) => {
    let a = res.recentProfile;
    if (res.recentProfile) {
        browser.storage.sync.set({
            a: JSON.stringify(userProfile)
        });
    }
});

var promise2 = browser.storage.sync.get('a');
promise2.then((res) => {
    console.log(res.a);
});

undefined;