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
      <v-btn text @click="showStudentsComponent()"> Admin </v-btn>
    </v-app-bar>
    <div v-show="home">
      <p class="text-center headline pa-16">Bem vindo ao Módulo Acadêmico</p>
    </div>
    <StudentComponent v-show="studentComponent" id="student-component" />
  </v-app>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    studentComponent: false,
    home: true,
  }),

  methods: {
    showHome() {
      (this.studentComponent = false), (this.home = true);
    },
    showStudentsComponent() {
      (this.home = false), (this.studentComponent = true);
    },
  },
};
</script>
