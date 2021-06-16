$(function() {
    $("#calc-form").submit(function (e) {
        try {
            hash = CryptoJS.SHA1($("#salt").val() + $("#answer").val()).toString();
            length = parseInt($("#digits").val(), 10);
            if (!isNaN(length) && length > 0) {
                hash = hash.substr(0, length);
            } // no else
            $("#hash").val(hash);
        } catch (e) {
        }

        // don't submit form
        e.preventDefault();
        return false;
    });
});
