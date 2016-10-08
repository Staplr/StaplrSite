/**
 * Created by Mauriel on 10/7/2016.
 */
$(document).ready(function () {
    $(':file').on('fileselect', function (event, numFiles, label) {
        console.log(numFiles);
        console.log(label);
    });

    // Update User Object
    if (localStorage.getItem('user') != null) {
        var user = JSON.parse(localStorage.getItem('user'));
        data_item = {'id': user.id}
        $.ajax({
            url: api + 'user/',
            method: "POST",
            data: data_item,
            success: function (result) {
                user = JSON.stringify(result);
                localStorage.setItem('user', user);
                $("#login-dropdown").hide();

                $("#user-info-dropdown > a").text(user.username);
                $("#user-info-dropdown").show();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
                localStorage.clear();
                $("#login-dropdown").show();
                $("#user-info-dropdown").hide();
            },
        });
    }

    $(document).on('change', ':file', function () {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });

});

$("#btn-login").click(function () {
    var datadict = $("#login-form").serialize();
    $.ajax({
        url: api + '/login_user/',
        data: datadict,
        method: "POST",
        success: function (result) {
            user = JSON.stringify(result);
            localStorage.setItem('user', user);
            $("#login-dropdown").hide();
            $("#user-info-dropdown").show();
        },
        error: function (result) {
            localStorage.clear();
            $("#login-dropdown").show();
            $("#user-info-dropdown").hide();
        }
    })
});

function getUserObject(user_id) {
    return $.ajax({
        url: api + 'user/',
        data: {'id': user_id},
        success: function (result) {
            user_object = result;
        },
    })
}
