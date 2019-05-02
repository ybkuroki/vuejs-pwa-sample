<template>
    <md-app md-mode="reveal">
        <md-app-toolbar class="md-primary">
          <div class="md-toolbar-row">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
 
            <slot name="header-content">
            </slot>
 
            <div class="md-toolbar-section-end">
              <md-button class="md-icon-button" @click="clickGithub">
                <md-icon class="md-icon-image" v-html="githubIcon" />
              </md-button>
            </div>
          </div>
        </md-app-toolbar>
 
        <md-app-drawer :md-active.sync="menuVisible">
          <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>
 
          <md-list>
            <md-list-item @click="clickHome">
              <md-icon>home</md-icon>
              <span class="md-list-item-text">Home</span>
            </md-list-item>
 
            <md-list-item @click="clickAbout">
              <md-icon>info</md-icon>
              <span class="md-list-item-text">About</span>
            </md-list-item>
 
            <md-list-item @click="clickGithub">
              <md-icon class="md-icon-image" v-html="githubIcon" />
              <span class="md-list-item-text">GitHub</span>
            </md-list-item>
          </md-list>
        </md-app-drawer>
 
        <md-app-content>
            <slot name="app-content">
            </slot>
        </md-app-content>
      </md-app>
</template>

<script>
import Icons from 'simple-icons/icons/github'

export default {
  name: 'Header',
  data: () => ({
    menuVisible: false,
    githubIcon: Icons.svg
  }),
  methods: {
    clickHome() {
      this.$router.push('home')
    },
    clickAbout() {
      this.$router.push('about')
    },
    clickGithub() {
      window.open('https://github.com/ybkuroki/vuejs-pwa-sample')
    }
  },
}
</script>

<style>
.md-app {
  min-height: 800px;
}
</style>