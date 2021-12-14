$(document).ready(function () {
   
  $(DATA).map((i, item) => {
    if (item["class"]) {
      let _class = "." + item["class"];
      $(_class).css("cursor", "pointer");
      $(_class).on("mouseenter", function (e) {
        console.log(e);
        $(this).css("fill", "rgb(125, 117, 72)");
        $("body").append(
          $(`<div class="popup">
          
           ${item.name} 
            <p>Զոհերի թիվը ${item.numberՕfVictims}</p>
          </div>`).css({
            position: "fixed",
            top: e.originalEvent.clientY - 100,
            left: e.originalEvent.clientX,
          })
        );
      });
      $(_class).on("mouseleave", function () {
        $(this).css("fill", "rgb(200, 189, 127)");
        $(".popup").remove();
      });
      console.log(`.${item["class"]}`, $(`.${item["class"]}`));
    }else{
        $('#other').append(`
            <div><span>${item["name"]}</span> - Զոհերի թիվը ${item["numberՕfVictims"]}</div>
        `)
    }
  });
});
