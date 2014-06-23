var data=[
  {
    "id": 1,
    "name": "30.000 Millas",
    "desc": "Tenemos que volar más de 30.000 millas para hacer los safaris en el parque nacional Serengeti, disfrutar del paisaje del crater en Ngorongoro, y descansar en las playas paradisíacas de Zanzibar. Acercanos a esos lugares regalandonos una parte de ese recorrido!",
    "price": "100 cada 100 millas",
    "img": "http://www.turisticaonline.com/images/news/5386_1.jpg",
    "mail_title": "parte de las 30.000 millas"
  },
  {
    "id": 2,
    "name": "bla2",
    "desc": 12345,
    "price": 30004
  }
];

$(function() {
  var id = getParameterByName('id');
  item = findItem(id);
  var mail_to = "mailto:beatriz@tiempolibreviajes.com.ar?subject=Luna de miel de Lu y Nico&body=Hola Beatriz, Quiero regalar "+item.mail_title;
  $("#data-title").html(item.name);
  $("#breadcrumb-item").html(item.name);
  $("#data-desc").html(item.desc);
  $("#data-price").html("$"+item.price);
  $("#data-img").attr("src", item.img);
  $("#mail-url").attr("href", mail_to);
});

function findItem(id){
  var i = 0;
  for(i =0; i < data.length; i++){
    if (data[i].id == id){
      return data[i];
    }
  }
  return data[0];
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
