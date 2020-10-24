<template>
  <div class="view">
    <v-main>
      <v-container>
        <div class="my-5">
          <v-btn to="/" large text color="primary">
            <v-icon large>mdi-arrow-left-circle-outline</v-icon>
          </v-btn>
        </div>
        <v-card width="600" class="mx-auto">
          <v-card-title class="headline primary white--text">
            This list
          </v-card-title>
          <v-card-text class="black--text">
            <!-- <div v-for="(item, i) in Contacts" :key="i"> -->
            <div class="container">
              <div class="container__item">
                <div class="my-3">
                  <span class="mr-3">ID:</span><span>{{ id }}</span>
                </div>

                <div class="my-3">
                  <span class="mr-3">Login:</span><span>{{ name }}</span>
                </div>
                <div class="my-3">
                  <span class="mr-3">Username:</span><span>{{ username }}</span>
                </div>
                <div class="my-3">
                    <span class="mr-3">phone:</span
                    ><span>{{ phone }}</span>
                  </div>
                <div class="my-3">
                    <span class="mr-3">Email:</span>
                   <a href="">
                      <span>{{ email }}</span>
                    </a>
                  </div>
                <div class="my-3">
                    <span class="mr-3">website:</span>
                    <a href="">
                      <span>{{ website }}</span>
                    </a>
                  </div>
              </div>
              <div class="container__item">
                <h2>COMPANY</h2>
                <div class="my-3">
                  <span class="mr-3">Company name:</span
                  ><span>{{ company_name}}</span>
                </div>
                <div class="my-3">
                  <span class="mr-3">Company bs:</span
                  ><span>{{ company_bs }}</span>
                </div>
                <div class="my-3">
                  <span class="mr-3">Company catch Phrase:</span
                  ><span>{{ catch_phrase }}</span>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  // props:['id'],
  // data(){
  //   return{
  //     name: his.$route.params.name
  //   }
  // }
  data: function () {
    return {
      id: this.$route.query.id,
      name: this.$route.query.name,
      username: this.$route.query.username,
      phone: this.$route.query.phone,
      email: this.$route.query.email,
      website: this.$route.query.website,
      company_name: this.$route.query.company_name,
      company_bs: this.$route.query.company_bs,
      catch_phrase: this.$route.query.catch_phrase,
    };
  },

  //   mounted: function () {
  //     this.axios
  //       .get("https://jsonplaceholder.typicode.com/users", {
  //         params: { id: this.$route.query.id },
  //       })
  //       .then((response) => {
  //         console.log(response.data);
  //         this.Contacts = response.data;
  //       });
  //   },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
.container__item {
  width: 50%;
}
</style>

