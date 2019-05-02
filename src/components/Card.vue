<template>
    <md-card md-with-hover v-if="update == false">
      <md-card-header>
        <div class="md-title">{{ title }}</div>
      </md-card-header>

      <md-card-content>
       {{ this.removeTag(content) }}
      </md-card-content>

      <md-card-actions>
        <md-button @click="clickDetail">Detail</md-button>
      </md-card-actions>
    </md-card>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: String,
        content: String,
        url: String,
        update: Boolean,
    },
    methods: {
        clickDetail() {
            window.open(this.url);
        },
        removeTag(text) {
          return text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'').substr(0, 200) + "..."
        }
    }
}
</script>