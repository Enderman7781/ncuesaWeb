$(document).ready(function () {
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

    $("input[name='report']").change(function (e) {
        e.preventDefault();
        if ($(this).val() === "yes") {
            $("div#email_fill").removeClass("hidden");
        } else {
            $("div#email_fill").addClass("hidden");
        }
    });

    $("select#event_type").change(function (e){
        e.preventDefault();
        if($(this).val() === "other"){
            $("div#other_event").removeClass("hidden");
        }
        else{
            $("div#other_event").addClass("hidden");
        }
    })
});