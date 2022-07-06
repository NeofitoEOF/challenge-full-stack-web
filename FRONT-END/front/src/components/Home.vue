<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
      elevate-on-scroll
      scroll-target="#student-component"
    >
      <v-toolbar-title>Módulo Acadêmico</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="showHome()">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn text @click="showStudentsComponent()"> Aluno </v-btn>
    </v-app-bar>
    <div v-show="home">
      <p class="text-center headline pa-16">Bem vindo ao Módulo Acadêmico</p>
    </div>
    <StudentComponent v-show="studentComponent" id="student-component" />
  </v-app>
</template>

<script>
export default {
  name: "StudentComponent",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Roadmap",
        href: "https://vuetifyjs.com/introduction/roadmap/",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
