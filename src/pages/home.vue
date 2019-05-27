<template>
  <f7-page ptr @ptr:refresh="loadMore">
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:arrow_back_ios" panel-open="left"></f7-link>
      </f7-nav-left>

      <f7-nav-title :title="$t('home.titleMsg')"></f7-nav-title>
    <f7-list>
       <f7-list-item link="/login/" :title="$t('home.logIn')"></f7-list-item>
     </f7-list>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:arrow_forward_ios" panel-open="right"></f7-link>
      </f7-nav-right>


    </f7-navbar>

    <f7-panel right cover theme-dark>
        <f7-page>
          <f7-navbar :title="$t('rightPanel.rightPanelTi')"></f7-navbar>
          <f7-block strong>
            <p>{{$t('home.menu')}}</p>
          </f7-block>
          <f7-menu>
            <f7-menu-item href="/table-tabs/"  :text="$t('rightPanel.tabsP')" panel-close></f7-menu-item>
            <f7-menu-item href="/about/" :text="$t('rightPanel.aboutP')" panel-close></f7-menu-item>

            <f7-menu-item icon-f7="settings" dropdown>
           <f7-menu-dropdown right>
             <f7-menu-dropdown-item href="#" @click="setLocale('en')">
               <span>English</span>
               <f7-icon class="margin-left"></f7-icon>
             </f7-menu-dropdown-item>
             <f7-menu-dropdown-item href="#" @click="setLocale('ru')">
               <span>Русский</span>
               <f7-icon class="margin-left"></f7-icon>
             </f7-menu-dropdown-item>
           </f7-menu-dropdown>
         </f7-menu-item>

        </f7-menu>




        </f7-page>
    </f7-panel>

    <f7-block strong>
      <p>{{ $t("home.clients") }}</p>
    </f7-block>

    <f7-list
      media-list
      virtual-list
      :virtual-list-params="{ items, renderExternal, height: $theme.ios ? 63 : ($theme.md ? 73 : 46)}"
    >
      <f7-list>
        <f7-list-item
          v-for="(item, index) in vlData.items"
          :key="index"
          media-item
          :title="item.title"
          :subtitle="item.subtitle"
          :style="`top: ${vlData.topPosition}px`"
        >
          <p>{{ $t("home.userName") }}{{" "+randomNameFunc()}}</p>
          <p>{{ $t("home.surName") }}{{" "+randomSurnameFunc()}}</p>
        </f7-list-item>
    </f7-list>
    </f7-list>

  </f7-page>
</template>
<script>
export default {
    data() {

  const items = []
  for (let i = 1; i <= 10000; i += 1) {
    items.push({
      title: `UserID ${i}`,
    });
  }
  return {
     Names: [ "Bogdan", "Vladimir", "Nikolay", "Stepan", "Sergey", "Igor", "Vladislav", "Miroslav", "Nikita", "Alexander", "Ivan", "Ruslan", "Maria", "Victoria", "Angella", "Zhanna", "Irina", "Marina", "Yulya", "Olya", "Dasha", "Natasha", "Masha"],
      Surname: [ "Borovik", "Zulu", "Kolesnik", "Smolnik", "Ivanchuk", "Rezno", "Filipenko", "Matvienko", "Boroda", "Stecenko", "Magar", "Artish", "Guber", "Vinec", "Zeratool", "Skripnik", "Gaas", "Melnik"],
    items,
    vlData: {
      items: [],
    },
  };
},
methods: {
  renderExternal(vl, vlData) {
    this.vlData = vlData;
  },
  loadMore(event, done) {
      window.location.reload();  //обновление свайпом
  },
  randomNameFunc(){
      return this.Names[Math.floor(Math.random() * this.Names.length)]
  },
  randomSurnameFunc(){
      return this.Surname[Math.floor(Math.random() * this.Surname.length)]
  },
  setLocale(locale){
      import(`../langs/${locale}.json`).then((msgs) => {
        this.$i18n.setLocaleMessage(locale, msgs)
        this.$i18n.locale = locale
        localStorage.setItem('language', locale);
      })
      // this.$i18n.locale = locale
  }
},
beforeCreate(){
    // localStorage.clear();
    if(localStorage.getItem('language') === null){
            let lng = window.navigator.systemLanguage || window.navigator.language;
            lng = lng.substr(0, 2).toLowerCase();
            localStorage.setItem('language', lng);
            this.$i18n.locale = lng;
     }
}
}
</script>
