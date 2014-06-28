var data=[
  {
    "id": 1,
    "name": "30.000 Millas",
    "desc": "Tenemos que volar más de 30.000 millas para hacer los safaris en el parque nacional Serengeti, disfrutar del paisaje del crater en Ngorongoro, y disfrutar en las playas paradisíacas de Zanzibar. Acercanos a esos lugares regalandonos una parte de ese recorrido!",
    "price": "100 cada 100 millas",
    "img": "http://www.turisticaonline.com/images/news/5386_1.jpg",
    "mail_title": "parte de las 30.000 millas"
  },
  {
    "id": 2,
    "name": "4 noches en Sun City Hotel, Sudáfrica",
    "desc": "Vamos a pasar 4 noches en el complejo Sun City, a 200km de Johanesburgo.",
    "price": "2800 por noche",
    "img": "http://cdn-imglib-01.go2africa.com/img/20140414_083719_1_1.jpg",
    "mail_title": "una noche en Sun City Hotel, Sudáfrica"
  },
  {
    "id": 3,
    "name": "2 noches en Peermont Metcourt Suits, Johannesburg, Sudáfrica",
    "desc": "Para poder llegar a Tanzania tenemos que hacer escala en Johanesburgo. En este hotel vamos a pasar la última noche de nuestra luna de miel.",
    "price": "1000 por noche",
    "img": "http://q-ec.bstatic.com/images/hotel/840x460/332/3324334.jpg",
    "mail_title": "una noche en Peermont Metcourt Suits, Johannesburg, Sudáfrica"
  },
  {
    "id": 4,
    "name": "Visa para Tanzania",
    "desc": "Sin la visa para entrar a Tanzania no podemos hacer los safaris ni disfrutar de las playas de Zanzibar. Importantisimo este regalo!",
    "price": "1200",
    "img": "http://gogetfunding.com/img/extra_project_images/49211/Tanzania_Safari_Of_Tanzania.jpg",
    "mail_title": "la visas para entrar a Tanzania"
  },
  {
    "id": 5,
    "name": "1 noche en Arusha Hotel, Tanzania",
    "desc": "La primer noche en Tanzania. Al otro día empezamos un safari de 8 días!",
    "price": "1200",
    "img": "http://media-cdn.tripadvisor.com/media/ProviderThumbnails/dirs/71/e5/71e561baa4d433fa98f4d999419baf016large.jpg",
    "mail_title": "una noche en Arusha Hotel, Tanzania"
  },
  {
    "id": 6,
    "name": "1 noche en Lake Manyara Serena Lodge, Tanzania",
    "desc": "El Lago Manyara es uno de los lugares que vamos a conocer en Tanzania.",
    "price": "2900",
    "img": "http://exp.cdn-hotels.com/hotels/1000000/550000/548900/548892/548892_11_y.jpg",
    "mail_title": "una noche en Lake Manyara Serena Lodge, Tanzania"
  },
  {
    "id": 7,
    "name": "2 Noches En Serengeti Serena Lodge, Tanzania",
    "desc": "Vamos a pasar 2 noches en el parque nacional Serengeti, donde vamos a hacer safaris para ver los animales.",
    "price": "4000",
    "img": "http://media-cdn.tripadvisor.com/media/photo-w/02/63/3d/42/exterior-view.jpg",
    "mail_title": "una noche en Serengeti Serena Lodge, Tanzania"
  },
  {
    "id": 8,
    "name": "1 Noche En Ngorongoro Serena Lodge Hotel, Tanzania",
    "desc": "Uno de los lugares que vamos a conocer en Tanzania es el crater Ngorongoro.",
    "price": "4300",
    "img": "http://www.serenahotels.com/d/serenangorongoro/media/Ngorongoro/__thumbs_980_312_crop/NGORONGOROcrater.jpg?1268229019",
    "mail_title": "una noche en Ngorongoro Serena Lodge Hotel, Tanzania"
  },
  {
    "id": 9,
    "name": "7 Noches En Hideaway Of Nungwi, Tanzania",
    "desc": "Después de conocer el crater Ngorongoro, el parque nacional Serengeti, y el lago Manyara, nos quedamos en Zanzibar para disfrutar del mar.",
    "price": "2000 por noche",
    "img": "http://www.hideawaynungwi.com/wp-content/uploads/2012/10/Spiaggia-5-sito.jpg",
    "mail_title": "una noche en Hideaway Of Nungwi, Tanzania"
  }/*,
  {
    "id": 10,
    "name": "",
    "desc": "",
    "price": "",
    "img": "",
    "mail_title": ""
  },
  {
    "id": 11,
    "name": "",
    "desc": "",
    "price": "",
    "img": "",
    "mail_title": ""
  },
  {
    "id": 12,
    "name": "",
    "desc": "",
    "price": "",
    "img": "",
    "mail_title": ""
  },
  {
    "id": 13,
    "name": "",
    "desc": "",
    "price": "",
    "img": "",
    "mail_title": ""
  },
  {
    "id": 14,
    "name": "",
    "desc": "",
    "price": "",
    "img": "",
    "mail_title": ""
  },
  {
    "id": 15,
    "name": "",
    "desc": "",
    "price": "",
    "img": "",
    "mail_title": ""
  },
  {
    "id": 16,
    "name": "",
    "desc": "",
    "price": "",
    "img": "",
    "mail_title": ""
  },
  {
    "id": 17,
    "name": "",
    "desc": "",
    "price": "",
    "img": "",
    "mail_title": ""
  },
  {
    "id": 18,
    "name": "",
    "desc": "",
    "price": "",
    "img": "",
    "mail_title": ""
  },
  {
    "id": 19,
    "name": "",
    "desc": "",
    "price": "",
    "img": "",
    "mail_title": ""
  },
  {
    "id": 20,
    "name": "",
    "desc": "",
    "price": "",
    "img": "",
    "mail_title": ""
  },
  {
    "id": 21,
    "name": "",
    "desc": "",
    "price": "",
    "img": "",
    "mail_title": ""
  }*/

];

$(function() {
  var id = getParameterByName('id');
  item = findItem(id);
  var mail_to = "mailto:beatriz@tiempolibreviajes.com.ar, ventas2@tiempolibreviajes.com.ar?subject=Luna de miel de Lucila y Nicolas&body=Hola Sonia y Beatriz, %0D%0AQuiero regalar "+item.mail_title;
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
