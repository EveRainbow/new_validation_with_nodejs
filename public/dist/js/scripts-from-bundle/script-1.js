//var message = require('./script-2');
//alert(message);


//Validator.localize('ru', ru);
//import VeeValidate, { Validator } from 'vee-validate';
//import ru from 'vee-validate/dist/locale/ru';
//import VeeValidate, { Validator } from 'vee-validate';
//import ru from 'vee-validate/dist/locale/ru';

Validator.localize('ru', ru);
//Vue.use(VeeValidate);

/*import messagesRu from 'vee-validate/dist/locale/ru';
import attributesRu from 'vee-validate/dist/locale/ru';

Vue.use(VeeValidate, {
  locale: 'ru',
  dictionary: {
    ru: { messages: messagesRu, attributes: attributesRu }
  }
});*/

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

VeeValidate.Validator.extend('lastName', {
  validate: value => {
      var strongRegex = new RegExp("^[а-яА-ЯёЁ\-]+$");
      return strongRegex.test(value);
  }
});

VeeValidate.Validator.extend('firstName', {
  validate: value => {
      var strongRegex = new RegExp("^[а-яА-ЯёЁ\-]+$");
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



/*import {VueTabs, VTab} from 'vue-nav-tabs/dist/vue-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'
components: {
  VueTabs,
  VTab
}

Vue.use(VueTabs);
new Vue({
  el:"#tabs",
})*/


//import VueMask from 'v-mask'
//Vue.use(VueMask);

//import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);

/*
import VeeValidatefrom 'vee-validate';
Vue.use(VeeValidate);
import messages from 'vee-validate/dist/locale/nl';*/

/*new Vue({
  el: '#app',
  data() {
    return {
      email: '',
      alpha: '',
      name: '',
      phone: '',
      myInputModel: ''
    }
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll()
      
      if (!this.errors.any()) {
        alert('submit')
      }
    }
  }
})*/

new Vue({
  el: '#apply',
  data() {
    return {
      lastName: '',
      firstName: '',
      middleName: '',
      birthday: '',
      placeOfBirth: '',
      phone: '',
      passport: '',
      passportGiver: '',
      passportGiverCode: '',
      passportDate: '',
      factaddrregion: '',
      factaddrcity: '',
      factaddr: '',
      factaddrhouse: '',
      factaddrhousebuilding: '',
      factaddrflat: '',
      factaddrsameasinpassport: false,
      regaddrregion: '',
      regaddrcity: '',
      regaddr: '',
      regaddrhouse: '',
      regaddrhousebuilding: '',
      regaddrflat: '',
      coborrower1status: '',  //Созаемщик 1
      coborrower1lastname: '',
      coborrower1name: '',
      coborrower1middlename: '',
      coborrower1birthday: '',
      coborrower1placeOfBirth: '',
      coborrower1phone: '',
      coborrower1passport: '',
      coborrower1passportGiver: '',
      coborrower1passportGiverCode: '',
      coborrower1passportDate: '',
      coborrower1notparticipating: false,
      coborrower1factaddrregion: '',
      coborrower1factaddrcity: '',
      coborrower1factaddr: '',
      coborrower1factaddrhouse: '',
      coborrower1factaddrhousebuilding: '',
      coborrower1factaddrflat: '',
      coborrower1factaddrsameasinpassport: false,
      coborrower1regaddrregion: '',
      coborrower1regaddrcity: '',
      coborrower1regaddr: '',
      coborrower1regaddrhouse: '',
      coborrower1regaddrhousebuilding: '',
      coborrower1regaddrflat: '', 
      coborrower2status: '',  //Созаемщик 2
      coborrower2lastname: '',
      coborrower2name: '',
      coborrower2middlename: '',
      coborrower2birthday: '',
      coborrower2placeOfBirth: '',
      coborrower2phone: '',
      coborrower2passport: '',
      coborrower2passportGiver: '',
      coborrower2passportGiverCode: '',
      coborrower2passportDate: '',
      coborrower2notparticipating: false,
      coborrower2factaddrregion: '',
      coborrower2factaddrcity: '',
      coborrower2factaddr: '',
      coborrower2factaddrhouse: '',
      coborrower2factaddrhousebuilding: '',
      coborrower2factaddrflat: '',
      coborrower2factaddrsameasinpassport: false,
      coborrower2regaddrregion: '',
      coborrower2regaddrcity: '',
      coborrower2regaddr: '',
      coborrower2regaddrhouse: '',
      coborrower2regaddrhousebuilding: '',
      coborrower2regaddrflat: '', 
      coborrower3status: '',  //Созаемщик 3
      coborrower3lastname: '',
      coborrower3name: '',
      coborrower3middlename: '',
      coborrower3birthday: '',
      coborrower3placeOfBirth: '',
      coborrower3phone: '',
      coborrower3passport: '',
      coborrower3passportGiver: '',
      coborrower3passportGiverCode: '',
      coborrower3passportDate: '',
      coborrower3notparticipating: false,
      coborrower3factaddrregion: '',
      coborrower3factaddrcity: '',
      coborrower3factaddr: '',
      coborrower3factaddrhouse: '',
      coborrower3factaddrhousebuilding: '',
      coborrower3factaddrflat: '',
      coborrower3factaddrsameasinpassport: false,
      coborrower3regaddrregion: '',
      coborrower3regaddrcity: '',
      coborrower3regaddr: '',
      coborrower3regaddrhouse: '',
      coborrower3regaddrhousebuilding: '',
      coborrower3regaddrflat: '', 
      sum: '',
      firstpayment: '',
      period: '',
      comments: '',  
    }
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll()
      
      if (!this.errors.any()) {
        alert('submit')
      }
    },
    copyFactAddressFromClient(event) {
      var getId = $(event.target).parents('div.tab-pane').attr('id');

      if (getId === "coborrower1") {
        this.coborrower1factaddrregion = this.factaddrregion;
        this.coborrower1factaddrcity = this.factaddrcity;
        this.coborrower1factaddr = this.factaddr;
        this.coborrower1factaddrhouse = this.factaddrhouse;
        this.coborrower1factaddrhousebuilding = this.factaddrhousebuilding;
        this.coborrower1factaddrflat = this.factaddrflat;
      } else if (getId === "coborrower2") {
        this.coborrower2factaddrregion = this.factaddrregion;
        this.coborrower2factaddrcity = this.factaddrcity;
        this.coborrower2factaddr = this.factaddr;
        this.coborrower2factaddrhouse = this.factaddrhouse;
        this.coborrower2factaddrhousebuilding = this.factaddrhousebuilding;
        this.coborrower2factaddrflat = this.factaddrflat;
      } else {
        this.coborrower3factaddrregion = this.factaddrregion;
        this.coborrower3factaddrcity = this.factaddrcity;
        this.coborrower3factaddr = this.factaddr;
        this.coborrower3factaddrhouse = this.factaddrhouse;
        this.coborrower3factaddrhousebuilding = this.factaddrhousebuilding;
        this.coborrower3factaddrflat = this.factaddrflat;
      }
    },
    copyRegAddressFromClient(event) {
      var getId = $(event.target).parents('div.tab-pane').attr('id');
      
      if (getId === "coborrower1") {
        this.coborrower1regaddrregion = this.regaddrregion;
        this.coborrower1regaddrcity = this.regaddrcity;
        this.coborrower1regaddr = this.regaddr;
        this.coborrower1regaddrhouse = this.regaddrhouse;
        this.coborrower1regaddrhousebuilding = this.regaddrhousebuilding;
        this.coborrower1regaddrflat = this.regaddrflat;
      } else if (getId === "coborrower2") {
        this.coborrower2regaddrregion = this.regaddrregion;
        this.coborrower2regaddrcity = this.regaddrcity;
        this.coborrower2regaddr = this.regaddr;
        this.coborrower2regaddrhouse = this.regaddrhouse;
        this.coborrower2regaddrhousebuilding = this.regaddrhousebuilding;
        this.coborrower2regaddrflat = this.regaddrflat;
      } else {
        this.coborrower3regaddrregion = this.regaddrregion;
        this.coborrower3regaddrcity = this.regaddrcity;
        this.coborrower3regaddr = this.regaddr;
        this.coborrower3regaddrhouse = this.regaddrhouse;
        this.coborrower3regaddrhousebuilding = this.regaddrhousebuilding;
        this.coborrower3regaddrflat = this.regaddrflat;
      }
    },
    addCoborrower() {
      var aCoborrower1 = $('a[href="#coborrower1"]');
      var liCoborrower1 = aCoborrower1.parent();

      var aCoborrower2 = $('a[href="#coborrower2"]');
      var liCoborrower2 = aCoborrower2.parent();

      var aCoborrower3 = $('a[href="#coborrower3"]');
      var liCoborrower3 = aCoborrower3.parent();
      var allTabsA = $('.nav-tabs a[role="tab"]');

      if (liCoborrower1.css('display') == 'none') {  //li coborrower1 not showing
        //make all other tabs not active
        allTabsA.removeClass('active');
        allTabsA.removeClass('show');
        //show li and a coborrower1, display block
        liCoborrower1.show(); //показываем таб
        aCoborrower1.show();
        //make current tab active
        aCoborrower1.addClass('active');//делаем таб активным
        aCoborrower1.addClass('show');//делаем таб активным
        //make all tab-panes not active
        $('.tab-pane').removeClass('active');
        $('.tab-pane').removeClass('show');
        //make current tab-pane active
        $('#coborrower1').addClass('active'); //добавляем активность формы
        $('#coborrower1').addClass('show'); //добавляем активность формы
      } else if (liCoborrower2.css('display') == 'none') {
        //make all other tabs not active
        allTabsA.removeClass('active');
        allTabsA.removeClass('show');
        //show li and a coborrower1, display block
        liCoborrower2.show(); //показываем таб
        aCoborrower2.show();
        //make current tab active
        aCoborrower2.addClass('active');//делаем таб активным
        aCoborrower2.addClass('show');//делаем таб активным
        //make all tab-panes not active
        $('.tab-pane').removeClass('active');
        $('.tab-pane').removeClass('show');
        //make current tab-pane active
        $('#coborrower2').addClass('active'); //добавляем активность формы
        $('#coborrower2').addClass('show'); //добавляем активность формы
      } else {
        //make all other tabs not active
        allTabsA.removeClass('active');
        allTabsA.removeClass('show');
        //show li and a coborrower1, display block
        liCoborrower3.show(); //показываем таб
        aCoborrower3.show();
        //make current tab active
        aCoborrower3.addClass('active');//делаем таб активным
        aCoborrower3.addClass('show');//делаем таб активным
        //make all tab-panes not active
        $('.tab-pane').removeClass('active');
        $('.tab-pane').removeClass('show');
        //make current tab-pane active
        $('#coborrower3').addClass('active'); //добавляем активность формы
        $('#coborrower3').addClass('show'); //добавляем активность формы
      }

      if(liCoborrower1.css('display') !== 'none' && liCoborrower2.css('display') !== 'none' && liCoborrower3.css('display') !== 'none') {
        $("button[name='addCoborrower']").hide();
        $("button[name='deleteCoborrower']").css('margin', '20px 0px');
      }
    },
    deleteThisCoborrower(event) {
      var thisId = $(event.target).parents('div.tab-pane').attr('id');
      thisId = '#'+thisId;
      var thisFullId = 'a[href="' + thisId + '"]';
      var thisTabA = $(thisFullId);
      var thisTabLi = thisTabA.parent();  
  
      //also delete coborrowers filled data, data=' ';
  
      //make active previous tab and this tab not active;
      thisTabA.removeClass('active');//убираем активность таба, если она есть
      thisTabA.removeClass('show');//убираем активность таба, если она есть
      $(event.target).parents('div.tab-pane').removeClass('active'); //убираем активность формы
      $(event.target).parents('div.tab-pane').removeClass('show'); //убираем активность формы
      //make current tab (li) display none
      thisTabLi.hide();
      //сделать другой таб активным 
      /*проверить предыдущий таб, если он не display=none, то сделать его активным,
      если он display=none, перейти к предыдущему и проверить его,
      когда обнаружится таб подходящий, сделать его активным*/
      thisId = $(event.target).parents('div.tab-pane').attr('id');

      var listOfTabs = {
        client_link: 0,
        coborrower1: 1,
        coborrower2: 2,
        coborrower3: 3,
        mortgage_link: 4,
        documents_link: 5
      };

      var thisNumber = listOfTabs[thisId]; //номер текущего таба
      var listOfTabsKeys = Object.keys(listOfTabs);
      listOfTabsKeys = Object.values(listOfTabsKeys);
      var prevNumber = thisNumber;

      var i;
      for (i=0; i < thisNumber+1; i++) {
        var prevNumber = prevNumber - 1;
        var prevId = '#' + listOfTabsKeys[prevNumber];
        var prevFullId = 'a[href="' + prevId + '"]';
        var prevTabA = $(prevFullId);
        var prevTabLi = prevTabA.parent();
  
        if (prevTabLi.css('display') !== 'none') {
          //сделать таб активным
          prevTabLi.show(); //показываем таб
          prevTabA.show();
          //make current tab active
          prevTabA.addClass('active');//делаем таб активным
          prevTabA.addClass('show');//делаем таб активным
          //make current tab-pane active
          $(prevId).addClass('active'); //добавляем активность формы
          $(prevId).addClass('show'); //добавляем активность формы
          break;
        } else {
            continue;
        }
      }
      $("button[name='addCoborrower']").show();
      $("button[name='deleteCoborrower']").css('margin', '20px 20px');
    }
  }
})

/*new Vue({
  data: {
    selected: ''
  }
})*/


/*
function addCoborrower() {
  var aCoborrower1 = $('a[href="#coborrower1"]');
  var liCoborrower1 = aCoborrower1.parent();

  var aCoborrower2 = $('a[href="#coborrower2"]');
  var liCoborrower2 = aCoborrower2.parent();

  var aCoborrower3 = $('a[href="#coborrower3"]');
  var liCoborrower3 = aCoborrower3.parent();
  var allTabsA = $('.nav-tabs a[role="tab"]');

  if (liCoborrower1.css('display') == 'none') {  //li coborrower1 not showing
    //make all other tabs not active
      allTabsA.removeClass('active');
      allTabsA.removeClass('show');
    //show li and a coborrower1, display block
      liCoborrower1.show(); //показываем таб
      aCoborrower1.show();
    //make current tab active
      aCoborrower1.addClass('active');//делаем таб активным
      aCoborrower1.addClass('show');//делаем таб активным
    //make all tab-panes not active
      $('.tab-pane').removeClass('active');
      $('.tab-pane').removeClass('show');
    //make current tab-pane active
      $('#coborrower1').addClass('active'); //добавляем активность формы
      $('#coborrower1').addClass('show'); //добавляем активность формы
  } else if (liCoborrower2.css('display') == 'none') {
        //make all other tabs not active
        allTabsA.removeClass('active');
        allTabsA.removeClass('show');
      //show li and a coborrower1, display block
        liCoborrower2.show(); //показываем таб
        aCoborrower2.show();
      //make current tab active
        aCoborrower2.addClass('active');//делаем таб активным
        aCoborrower2.addClass('show');//делаем таб активным
      //make all tab-panes not active
        $('.tab-pane').removeClass('active');
        $('.tab-pane').removeClass('show');
      //make current tab-pane active
        $('#coborrower2').addClass('active'); //добавляем активность формы
        $('#coborrower2').addClass('show'); //добавляем активность формы
  } else {
        //make all other tabs not active
        allTabsA.removeClass('active');
        allTabsA.removeClass('show');
      //show li and a coborrower1, display block
        liCoborrower3.show(); //показываем таб
        aCoborrower3.show();
      //make current tab active
        aCoborrower3.addClass('active');//делаем таб активным
        aCoborrower3.addClass('show');//делаем таб активным
      //make all tab-panes not active
        $('.tab-pane').removeClass('active');
        $('.tab-pane').removeClass('show');
      //make current tab-pane active
        $('#coborrower3').addClass('active'); //добавляем активность формы
        $('#coborrower3').addClass('show'); //добавляем активность формы
  }
};
*/

function deleteThisCoborrower() {
  var thisId = $('#addCoborrower').parents('div.tab-pane').attr('id');
  thisId = '#'+thisId;
  var thisFullId = 'a[href="' + thisId + '"]';
  var thisTabA = $(thisFullId);
  var thisTabLi = thisTabA.parent();

  //var aCoborrower1 = $('a[href="#coborrower1"]');
  //var liCoborrower1 = aCoborrower1.parent();


  //also delete coborrowers filled data, data=' ';

  //make active previous tab and this tab not active;
    thisTabA.removeClass('active');//убираем активность таба, если она есть
    thisTabA.removeClass('show');//убираем активность таба, если она есть
    $('#addCoborrower').parents('div.tab-pane').removeClass('active'); //убираем активность формы
    $('#addCoborrower').parents('div.tab-pane').removeClass('show'); //убираем активность формы
    //$(thisFullId).removeClass('active'); //убираем активность tab-pane
    //$(thisFullId).removeClass('show'); //убираем активность tab-pane
  //make current tab (li) display none
    thisTabLi.hide();
  //сделать другой таб активным 
  /*проверить предыдущий таб, если он не display=none, то сделать его активным,
  если он display=none, перейти к предыдущему и проверить его,
  когда обнаружится таб подходящий, сделать его активным*/
    var listOfTabs = {
      client_link: 0,
      coborrower1: 1,
      coborrower2: 2,
      coborrower3: 3,
      mortgage_link: 4,
      documents_link: 5
    };
    var listOfTabsKeys = Object.keys(listOfTabs);

    var thisNumber = listOfTabs[thisId] //номер текущего таба
    var prevNumber = thisNumber;

    //if ("#" + listOfTabsKeys[prevNumber] 
    for (var i =0; i < thisNumber+2; i++){
      console.log(thisNumber+2);
      var prevNumber =- 1;
      var prevId = '#' + listOfTabsKeys[prevNumber];
      var prevFullId = 'a[href="' + prevId + '"]';
      var prevTabA = $(prevFullId);
      var prevTabLi = prevTabA.parent();

      if (prevTabLi.css('display') !== 'none') {
      //сделать таб активным
        prevTabLi.show(); //показываем таб
        prevTabA.show();
      //make current tab active
        prevTabA.addClass('active');//делаем таб активным
        prevTabA.addClass('show');//делаем таб активным
      //make current tab-pane active
        $(prevId).addClass('active'); //добавляем активность формы
        $(prevId).addClass('show'); //добавляем активность формы
        break;
      } else {
        continue;
      }
    }
};

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
})