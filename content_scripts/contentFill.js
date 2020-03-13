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
    linkedIn = "#job_application_answers_attributes_1_text_value",
    portfolio = "#job_application_answers_attributes_0_text_value";

var promise = browser.storage.sync.get('a');
var profileObject;
promise.then((res) => {
    profileObject = JSON.parse(res.a);
    if (profileObject.first_name)
        $(first_name).val(profileObject.first_name);
    if (profileObject.last_name)
        $(last_name).val(profileObject.last_name);
    if (profileObject.email)
        $(email).val(profileObject.email);
    if (profileObject.phone)
        $(phone).val(profileObject.phone);
    if (profileObject.job_application_location)
        $(job_application_location).val(profileObject.job_application_location);
    if (profileObject.school)
        $(school).text(profileObject.school);
    if (profileObject.degree)
        $(degree).text(profileObject.degree);
    if (profileObject.discipline)
        $(discipline).text(profileObject.discipline);
    if (profileObject.start_month)
        $(start_month).val(profileObject.start_month);
    if (profileObject.start_year)
        $(start_year).val(profileObject.start_year);
    if (profileObject.end_month)
        $(end_month).val(profileObject.end_month);
    if (profileObject.end_year)
        $(end_year).val(profileObject.end_year);
    if (profileObject.linkedIn)
        $(linkedIn).val(profileObject.linkedIn);
    if (profileObject.portfolio)
        $(portfolio).val(profileObject.portfolio);
});
