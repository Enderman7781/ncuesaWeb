$(document).ready(function () {

    /* @brief 
    *   Form Validation
    *
    */
   {
        var forms = document.querySelectorAll('.needs-validation')
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            });
    }

    /*  @brief
    *    Toogle button of function list
    *   @param
    *    fill_form: function list switch button
    *    find_progress: function list switch button
    *    form:  apply page
    *    progress:  progress finding page
    */
    $("button#fill_form").click(function (e) {
        e.preventDefault();
        $("div#form").removeClass("hidden");
        $("div#progress").addClass("hidden");
    });
    $("button#find_progress").click(function (e) {
        e.preventDefault();
        $("div#form").addClass("hidden");
        $("div#progress").removeClass("hidden");
    });


    /*  @brief
    *    Toogle button of sending resulting Email to user
    *   @param
    *    input[name='report']:  the radio button of email required switch
    *   
    *    email_fill: the space of the entire email area
    *    email: the column where user fill their email
    *    email_validation: the div area of validation message
    */
    $("input[name='report']").change(function (e) {
        e.preventDefault();
        if ($(this).val() === "yes") {
            $("div#email_fill").removeClass("hidden");
            $("input#email").removeAttr("readonly");
            $("div#email_validation").attr("required", true);
            $("div#email_validation").removeClass("hidden");
        }
        else {
            $("div#email_fill").addClass("hidden");
            $("input#email").attr("readonly", true);
            $("div#email_validation").attr("required", false);
            $("div#email_validation").addClass("hidden");
        }
    });

    /*  @brief
    *    Toogle list of selecting event type
    *   @param
    *    event_type: event_type
    *   
    *    other_event: the filling area of other event
    *    other_input: the input area
    *    other_validation: the div area of validation message
    */
    $("select#event_type").change(function (e) {
        e.preventDefault();
        if ($(this).val() === "other") {
            $("div#other_event").removeClass("hidden");
            $("input#other_input").attr("required", true);
            $("div#other_validation").attr("required", true);
            $("div#other_validation").removeClass("hidden");
        }
        else {
            $("div#other_event").addClass("hidden");
            $("input#other_input").attr("required", false);
            $("div#other_validation").attr("required", true);
            $("div#other_validation").removeClass("hidden");
        }
    });







});