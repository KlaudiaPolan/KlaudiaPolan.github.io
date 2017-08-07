$(document).ready(function(){
  /* MALOWANIE */
  var mobileViewport = window.matchMedia("screen and (max-width: 386px)");


  var click1=1;
  $(".btn-malowanie").on('click',function(event) {
    event.preventDefault();
    console.log('click');
    click1++;
    if(click1%2==0){
      $(this).text('POWRÓT');
      $(this).attr('data-wipe','POWRÓT');
      var newP = $('<p> Malowanie hydrodynamiczne, natryskowe jest najwydajniejszą forma malowania, a zarazem najbardziej jakościową. Malowanie hydrodynamiczne pozwala na osiągnięcie idealnie gładkie struktury zużywając przy tym dużo mniej materiału.<p>')
      $(".malowanie-text").removeClass('col-lg-7');
      $(".malowanie-text").addClass('col-lg-12');
      $(".malowanie-text").addClass('malowanie-p');
      $(".descriptions").find(".malowanie").css("background-image","none");
      $(".malowanie").find('p').hide();
      $(".malowanie").find('.btn').before(newP);

      $(".malowanie").css("-webkit-animation","slideInLeft .6s");
      $(".malowanie").css("animation","slideInLeft .6s");
      $(".malowanie").css("opacity","1");

    }else{
      $(this).text('PRZECZYTAJ WIĘCEJ');
      $(this).attr('data-wipe','PRZECZYTAJ WIĘCEJ');
      var newP = $('<p> Malujemy profesjonalnym agregatem malarskim marki GRACO. Jest to technika zwana malowaniem hydrodynamiczne.<p>')
      $(".malowanie-text").removeClass('col-lg-12');
      $(".malowanie-text").addClass('col-lg-7');
      $(".malowanie-text").addClass('malowanie-p');
      if(mobileViewport.matches) {
          $(".descriptions").find(".malowanie").css("background-image","none");
      } else {
          $(".descriptions").find(".malowanie").css("background-image","url('./images/malowanie.png')");
      }
      $(".malowanie").find('p').hide();
      $(".malowanie").find('.btn').before(newP);
    }
  });
  /* PIASKOWANIE */
  var click2=1;
  $(".btn-piaskowanie").on('click',function(event) {
    event.preventDefault();
    console.log('click');
    click2++;
    if(click2%2==0){
      $(this).text('POWRÓT');
      $(this).attr('data-wipe','POWRÓT');
      var newP = $("<p>Zastosowanie obróbki strumieniowo-sciernej: oczyszczanie powierzchni, usuwanie starych powłok, rdzy, szlaki po paleniu i innych zanieczyszczeń, wykończenie, ujednolicenie powierzchni-usunięcie skutków poprzedzających obróbek, rozwinięcie powierzchni-nadanie odpowiedniej chropowatości w celu przygotowania powierzchni, pod malowanie, klejenie, usunięcie zadziorów.</p>");
      $(".piaskowanie-text").removeClass('col-lg-7');
      $(".piaskowanie-text").addClass('col-lg-12');
      $(".piaskowanie-text").addClass('piaskowanie-p');
      $(".descriptions").find(".piaskowanie").css("background-image","none");
      $(".piaskowanie").find('p').hide();
      $(".piaskowanie").find('.btn').before(newP);

      $(".piaskowanie").css("-webkit-animation","slideInLeft .6s");
      $(".piaskowanie").css("animation","slideInLeft .6s");
      $(".piaskowanie").css("opacity","1");

    }else{
      $(this).text('PRZECZYTAJ WIĘCEJ');
      $(this).attr('data-wipe','PRZECZYTAJ WIĘCEJ');
      var newP = $('<p> Obróbka strumieniowo – ścierna inaczej (piaskowanie,śrutowanie) – polega na działaniu strumienia ścierniwa wyrzucanego w kierunku oczyszczanej powierzchni za pomocą sprężonego powietrza</p>');
      $(".piaskowanie-text").removeClass('col-lg-12');
      $(".piaskowanie-text").addClass('col-lg-7');
      $(".piaskowanie-text").addClass('piaskowanie-p');
      if(mobileViewport.matches) {
          $(".descriptions").find(".piaskowanie").css("background-image","none");
      } else {
          $(".descriptions").find(".piaskowanie").css("background-image","url('./images/piaskowanie.png')");
      }

      $(".piaskowanie").find('p').hide();
      $(".piaskowanie").find('.btn').before(newP);
    }
  });
  /* SZKIEŁKOWANIE */
  var click3=1;
  $(".btn-szkielkowanie").on('click',function(event) {
    event.preventDefault();
    console.log('click');
    click3++;
    if(click3%2==0){
      $(this).text('POWRÓT');
      $(this).attr('data-wipe','POWRÓT');
      var newP = $("<p>Szkiełkowanie jest doskonałą alternatywą dla żmudnego polerowania silnika szczotkami drucianymi, płótnem ściernym, ewentualnie innymi druciakami. Wykorzystuje się je do nadawania estetycznego wyglądu oczyszczanych powierzchni, usuwania zgorzelin po spawaniu, tlenków metali, mas formierskich, zbędnych oznaczeń, plam, intensywnych zanieczyszczeń olejowych itp. Doskonale sprawdza się do oczyszczania wyrobów cienkich i kruchych.</p>");
      $(".szkielkowanie-text").removeClass('col-lg-7');
      $(".szkielkowanie-text").addClass('col-lg-12');
      $(".szkielkowanie-text").addClass('szkielkowanie-p');
      $(".descriptions .szkielkowanie").css('padding-right','0');
      $(".descriptions").find(".szkielkowanie").css("background-image","none");
      $(".szkielkowanie").find('p').hide();
      $(".szkielkowanie").find('.btn').before(newP);


      $(".szkielkowanie").css("-webkit-animation","slideInLeft .6s");
      $(".szkielkowanie").css("animation","slideInLeft .6s");
      $(".szkielkowanie").css("opacity","1");


    }else{
      $(this).text('PRZECZYTAJ WIĘCEJ');
      $(this).attr('data-wipe','PRZECZYTAJ WIĘCEJ');
      var newP = $('<p> Oferujemy obróbkę mikrokulkami szklanymi. Metoda ta nadaje się idealnie do obróbki metali kolorowych, różnych części aluminiowych takich jak kartery silników motocyklowych, głowice, pokrywy itp. Mikrokulki szklane nadają obrabianym elementom wygląd najbardziej zbliżony do nowego odlewu. Nie powodują erozyjnego ścierania powierzchni obrabianej, nadają tylko odpowiednią fakturę i jedwabisty, satynowy połysk.</p>');
      $(".szkielkowanie-text").removeClass('col-lg-12');
      $(".szkielkowanie-text").addClass('col-lg-7');
      $(".szkielkowanie-text").addClass('szkielkowanie-p');
      if(mobileViewport.matches) {
          $(".descriptions").find(".szkielkowanie").css("background-image","none");
      } else {
          $(".descriptions").find(".szkielkowanie").css("background-image","url('./images/szkielkowanie.png')");
      }

      $(".szkielkowanie").find('p').hide();
      $(".szkielkowanie").find('.btn').before(newP);

    }
  });












});
