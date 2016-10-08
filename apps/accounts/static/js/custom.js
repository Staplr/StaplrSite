/**
 * Created by Mauriel on 10/7/2016.
 */
$(document).ready(function () {
$(':file').on('fileselect', function(event, numFiles, label) {
        console.log(numFiles);
        console.log(label);
    });
// Update User Object


if(localStorage.getItem('user') != null){
    var user = JSON.parse(localStorage.getItem('user'))
    data_item = {'id':user.id}
    $.ajax({url: api + 'user/',
                method: "POST",
                data: data_item,
                success: function(result){
                    user = JSON.stringify(result);
                    localStorage.setItem('user', user);
                    window.location.href = 'dashboard';
                },
                error: function(jqXHR, textStatus, errorThrown) {
                  console.log(textStatus, errorThrown);
                },
                failure: function(result){
                    message = JSON.parse(result);
                    console.log(message);
                }
    });
}

$(document).on('change', ':file', function() {
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
});

});