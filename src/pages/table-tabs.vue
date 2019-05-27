<template>
<f7-page>
  <f7-navbar :title="$t('tabs.tabTitle')" back-link="Back"></f7-navbar>
  <f7-toolbar tabbar bottom>
    <f7-link tab-link="#tab-1" tab-link-active>Tab 1</f7-link>
    <f7-link tab-link="#tab-2">Tab 2</f7-link>
    <f7-link tab-link="#tab-3">Tab 3</f7-link>
  </f7-toolbar>
  <f7-tabs animated>
    <f7-tab id="tab-1" class="page-content" tab-active>
      <f7-block>
        <p>{{ $t("tabs.tabContent") }}</p>

{{ $t("tabs.tabText1") }}

      </f7-block>
    </f7-tab>
    <f7-tab id="tab-2" class="page-content">
      <f7-block>
        <p>{{ $t("tabs.tabContent2") }}</p>
{{ $t("tabs.tabText2") }}


      </f7-block>
    </f7-tab>
    <f7-tab id="tab-3" class="page-content">
      <f7-block>
        <p>{{ $t("tabs.tabContent3") }}</p>
{{ $t("tabs.tabText3") }}

      </f7-block>
    </f7-tab>
  </f7-tabs>
</f7-page>
</template>

<script>
export default {}
</script>
