var busqueda = "";
var icnSelected = [];

// input de datos cuando tecleas
$("#searchInput").keyup(function () {
    icnSelected = [];
  $(".card").show();
  // guarda los datos en la variable
  let searchValue = $("#searchInput").val().toLowerCase();
  if (searchValue == ""){
    $(".card").show();
    return;
  }

  for (var icn in icnTags){
    if (icn.startsWith(searchValue) && !icnSelected.includes(icn)){
      icnSelected.push(icn)
    }
    var icnTag = icnTags[icn];
    $.each(icnTag, function(key, tag){
      if (tag.startsWith(searchValue) && !icnSelected.includes(icn)){
        icnSelected.push(icn)
      }
    });
  }

  $(".card").hide();
  $(searchValue).show();

  $.each(icnSelected, function (arrayPosition, icnValue){
    $(icnValue).show();
  });
  $(".card").each(function (arrayPosition){
    var iconName = this.id.substring(4);
    var iconNameSplitted = iconName.split("_");
    // console.log(iconNameSplitted);

    if(iconName.includes(searchValue)){
      $(this).show();
      }
  });
});


$("#searchInput").focus();
