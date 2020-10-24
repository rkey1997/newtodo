<template>
  <v-dialog v-model="UpdatePopup" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn small color="primary" text dark v-bind="attrs" v-on="on">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2">
        <span> Update the list </span>
        <v-spacer></v-spacer>
        <v-btn @click="UpdatePopup = false" text color="primary"> close </v-btn>
      </v-card-title>
       <v-card-text>
              <v-text-field
                v-model="NewName"
                label="name"
              ></v-text-field>
              <v-text-field
                v-model="NewEmail"
                label="email"
              ></v-text-field>
              <v-text-field
                v-model="NewPhone"
                label="phone"
              ></v-text-field>
              <v-text-field
                v-model="NewUserName"
                label="username"
              ></v-text-field>
              <v-text-field
                v-model="NewWebiste"
                label="website"
              ></v-text-field>
              <v-text-field
                v-model="NewCompanyName"
                label="company name"
              ></v-text-field>
              <v-text-field
                v-model="NewCompanyBs"
                label="company bs"
              ></v-text-field>
              <v-text-field
                v-model="NewCompanyCatchPhrase"
                label="company CatchPhrase"
              ></v-text-field>
            </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="update" color="primary">add</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ["name", "email", "phone", "id", 'username','website','company_name','company_bs','company_catchPhrase'],
  data() {
    return {
      popup: false,
      NewName: this.name,
      NewPhone: this.phone,
      NewEmail: this.email,
      NewUserName: this.username,
      NewWebiste: this.website,
      NewCompanyName: this.company_name,
      NewCompanyBs: this.company_bs,
      NewCompanyCatchPhrase: this.company_catchPhrase,

      UpdatePopup: false,
    };
  },

  methods: {
    update() {
      this.$emit("udate", this.NewName, this.NewEmail, this.NewPhone, this.id, this.NewUserName, this.NewWebiste, this.NewCompanyName, this.NewCompanyBs, this.NewCompanyCatchPhrase);
      this.UpdatePopup = false;
    },
  },
};
</script>