import VeeValidate, { Validator } from 'vee-validate';
//import ru from 'vee-validate/dist/locale/ru'; TODO: пернести в папку SRC (в dist должен лежать только продакшн)
import ru from '../dist/js/ru';

Validator.localize('ru', ru);

Vue.use(VeeValidate, {
  locale: 'ru'
});

//**********************НИЖЕ ИДЕТ БЛОК КАСТОМНЫХ ПРАВИЛ ВАЛИДАЦИИ*********************/

var interval;
var curDate = new Date();
var month = curDate.getMonth()+1;
var day = curDate.getDate();
var curDateFmt = curDate.getFullYear()+"-"+((month<10)?"0":"")+month+"-"+((day<10)?"0":"")+day;
var minDateFmt = (curDate.getFullYear()-22)+"-"+((month<10)?"0":"")+month+"-"+((day<10)?"0":"")+day;


VeeValidate.Validator.extend('verify_password', {
  getMessage: field => `The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)`,
  validate: value => {
      var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
      return strongRegex.test(value);
  }
});

/*VeeValidate.Validator.extend('fio', {
  validate: value => {
      var strongRegex = new RegExp(/^(([а-яА-ЯёЁ]+(\s*|-))+([а-яА-ЯёЁ]+))$/);
      return strongRegex.test(value);
  }
});*/

VeeValidate.Validator.extend('fio', {
  validate: value => {
      var strongRegex = new RegExp(/^[а-яА-ЯёЁ-\s]+$/);
      return strongRegex.test(value);
  }
});

VeeValidate.Validator.extend('blNumber', {
  validate: value => {
      var strongRegex = new RegExp(".");
      return strongRegex.test(value);
  }
});

VeeValidate.Validator.extend('blDate', {
  validate: value => {
      var strongRegex = new RegExp(".");
      return strongRegex.test(value);
  }
});

VeeValidate.Validator.extend('earlyDatesNumber', {
  validate: value => {
      var strongRegex = new RegExp(".");
      return strongRegex.test(value);
  }
});

VeeValidate.Validator.extend('earlyDatesDate', {
  validate: value => {
      var strongRegex = new RegExp(".");
      return strongRegex.test(value);
  }
});

VeeValidate.Validator.extend('number24', {
  validate: value => {
      var strongRegex = new RegExp(".");
      return strongRegex.test(value);
  }
});

VeeValidate.Validator.extend('date24', {
  validate: value => {
      var strongRegex = new RegExp(".");
      return strongRegex.test(value);
  }
});

VeeValidate.Validator.extend('birthSerDate', {
  validate: value => {
      var strongRegex = new RegExp(".");
      return strongRegex.test(value);
  }
});

VeeValidate.Validator.extend('birthSerSerial', {
  validate: value => {
      var strongRegex = new RegExp(/^[а-яА-ЯёЁ0-9-]+$/);
      return strongRegex.test(value);
  }
});

VeeValidate.Validator.extend('birthSerNum', {
  validate: value => {
      var strongRegex = new RegExp(/^[0-9]+$/);
      return strongRegex.test(value);
  }
});

VeeValidate.Validator.extend('anotherParentDate', {
  validate: value => {
      var strongRegex = new RegExp(".");
      return strongRegex.test(value);
  }
});

VeeValidate.Validator.extend('anotherParentNum', {
  validate: value => {
      var strongRegex = new RegExp(".");
      return strongRegex.test(value);
  }
});

VeeValidate.Validator.extend('firstName', {
  validate: value => {
      //var strongRegex = new RegExp("^([а-яА-ЯёЁ]+\s)+$");
      var strongRegex = new RegExp("([а-яА-ЯёЁ]+\s)+");
      return strongRegex.test(value);
  }
});

VeeValidate.Validator.extend('middleName', {
  validate: value => {
      var strongRegex = new RegExp("^[а-яА-ЯёЁ\-]+$");
      return strongRegex.test(value);
  }
});

VeeValidate.Validator.extend('birthday', {
  validate: value => {
        if (value.match(/\d{2}\.\d{2}\.\d{4}/)){
          var ar = value.split(".");
          value=ar[2]+"-"+ar[1]+"-"+ar[0];
        }
        var dt = Date.parse(value);
        if (isNaN(dt) || dt<-694310400000 || value>minDateFmt){
          return false;
        }
        return true;
      }
});

VeeValidate.Validator.extend('phone', {
  validate: value => {
    var strongRegex = new RegExp(/^\+7\s\([9]{1}[0-9]{2}\)\s[0-9]{3}\-[0-9]{2}\-[0-9]{2}$/);
    return strongRegex.test(value);
  }
})

VeeValidate.Validator.extend('passport', {
  validate: value => {
    var strongRegex = new RegExp(/^[0-9]{4}\s[0-9]{6}$/);
    return strongRegex.test(value);
  }
})

VeeValidate.Validator.extend('passportGiverCode', {
  validate: value => {
    var strongRegex = new RegExp(/^[0-9]{3}\s[0-9]{3}$/);
    return strongRegex.test(value);
  }
})

VeeValidate.Validator.extend('coborrowerstatus', {
  validate: value => {
    var strongRegex = new RegExp("^[а-яА-ЯёЁ\-]+$");
    return strongRegex.test(value);
  }
})

//******************КОНЕЦ БЛОКА КАСТОМНЫХ ПРАВИЛ ВАЛИДАЦИИ**************/


import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);


new Vue({
  el: '#apply',
  data() {
    return {
      fio: '',
      blNumber: '',
      blDate: '',
      earlyDatesNumber: '',
      earlyDatesDate: '',
      number24: '',
      date24: '',
      birthSerDate: '',
      birthSerSerial: '',
      birthSerNum: '',
      anotherParentDate: '',
      anotherParentNum: ''
    }
  },
  methods: {
    onSubmit() {
      /*this.$validator.validateAll()
      
      if (!this.errors.any()) {
        alert('submit')
      }
    }*/
    this.$validator.validate().then(result => {
      if (!result) {
        //alert('not valid');
      } else {

        //document.querySelector('#apply').submit();


          //$(document).ready(function() { // вся мaгия пoслe зaгрузки стрaницы
            window.alert = function(msg){return false};
            $(function (e) { // пeрeхвaтывaeм всe при сoбытии oтпрaвки

              //console.log('e  ' + e);
              console.log('$("form").serialize()   ' + $("form").serialize());
              var form = $('form'); // зaпишeм фoрму, чтoбы пoтoм нe былo прoблeм с this
              var error = false;		// прeдвaритeльнo oшибoк нeт
          //		form.find('input, textarea').each( function(){ // прoбeжим пo кaждoму пoлю в фoрмe
          //			if ($(this).val() == '') { // eсли нaхoдим пустoe
          //				alert('Зaпoлнитe пoлe "'+$(this).attr('placeholder')+'"!'); // гoвoрим зaпoлняй!
          //				error = true; // oшибкa
          //			}
          //		});

          //e.preventDefault(); // останавливаем отправку
              if (!error) { // eсли oшибки нeт
                var data = form.serialize(); // пoдгoтaвливaeм дaнныe
                $.ajax({ // инициaлизируeм ajax зaпрoс
                  type: 'POST', // oтпрaвляeм в POST фoрмaтe, мoжнo GET
                  url: '/thank', // путь дo oбрaбoтчикa, у нaс oн лeжит в тoй жe пaпкe
                  dataType: 'json', // oтвeт ждeм в json фoрмaтe
                  data: data, // дaнныe для oтпрaвки
                    beforeSend: function(data) { // сoбытиe дo oтпрaвки
                          form.find('input[type="submit"]').attr('disabled', 'disabled'); // нaпримeр, oтключим кнoпку, чтoбы нe жaли пo 100 рaз
                        },
                    success: function(data){ // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
          //					$(".suc").show();
                        if (data['error'] == 1) { // eсли oбрaбoтчик вeрнул oшибку
                        
                          $("#apply").html(`<div class="sendResponse">Что-то пошло не так:(<br>Пожалуйста, попробуйте еще раз или напишите нам.</div>`)
                          
                        } else { // eсли всe прoшлo oк
                    
                          $("#apply").html(`<div class="sendResponse">Данные успешно отправлены!</div>`)
                          console.log(data);
                        }
                      },
                    error: function (xhr, ajaxOptions, thrownError) { // в случae нeудaчнoгo зaвeршeния зaпрoсa к сeрвeру
                          alert(xhr.status); // пoкaжeм oтвeт сeрвeрa
                          alert(thrownError); // и тeкст oшибки
                      },
                    complete: function(data) { // сoбытиe пoслe любoгo исхoдa
                          form.find('input[type="submit"]').prop('disabled', false); // в любoм случae включим кнoпку oбрaтнo   FIXME: другой селектор должен быть здесь
          //					$(".suc").show(); 
                      }
          //		        $(".suc").show();          
                    });
          //				 $(".suc").show();
              }
              return false; 
          //		return false; // вырубaeм стaндaртную oтпрaвку фoрмы -->
          //		$("#suc").show();
            }) 

      }
    });
    },
    searchEmloyee() {

      var fioInput = $("#fio").val();
      var urlForFio = 'http://vld-portal.pskb.ad/api/search/' + fioInput ;
      urlForFio = encodeURI(urlForFio);
      console.log("urlForFio  " + urlForFio);

      $.ajax({
        type: 'POST', // oтпрaвляeм в POST фoрмaтe, мoжнo GET
        url: '/getEmployees', 
        dataType: 'json', // oтвeт ждeм в json фoрмaтe
        data: urlForFio, // дaнныe для oтпрaвки

        success: function(data){
          console.log("result  " + data);
          console.log('result.depts  ' + data.depts);

          //depts.rows
          //users.rows
      }});
    }
  }
})

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
})