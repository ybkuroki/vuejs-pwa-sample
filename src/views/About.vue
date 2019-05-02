<template>
  <Header>
    <template slot="header-content">
      <span class="md-title">About</span>
    </template>
    
    <template slot="app-content">
      <md-list>
        <md-subheader class="md-primary">Application Name</md-subheader>
        <md-list-item>
          <span class="md-list-item-text">vuejs-pwa-sample</span>
        </md-list-item>
        
        <md-subheader class="md-primary">Author</md-subheader>
        <md-list-item>
          <span class="md-list-item-text">ybkuroki</span>
        </md-list-item>
        
        <md-subheader class="md-primary">Github</md-subheader>
        <md-list-item>
          <span class="md-list-item-text">https://github.com/ybkuroki/vuejs-pwa-sample</span>
        </md-list-item>
      </md-list>
    </template>
  </Header>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'About',
  components: {
    'Header': Header,
  },
}
</script>