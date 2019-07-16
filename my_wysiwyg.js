(function($)
{
    jQuery.fn.my_wysiwyg = function()
    {
        $("gras").click(function(){
            $("p").css("font-weigth", "bold");
        });

        this.each(function()
        {
            $(this).wrap("<b><i><u></u></i></b>");
        });
        return this;
    };
})(jQuery);

$(function()
{
    $("textarea").my_wysiwyg (
    {
        // if -> option1: "default buttons" -> ex: buttons: ["bold", "italic", "color"]
        // else -> option2: "selected buttons"
    });
});