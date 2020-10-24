<template>
  <div class="index">
    <v-app-bar dark dense color="primary" app>
      <div class="text-center">
        <v-dialog v-model="createPopup" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text dark v-bind="attrs" v-on="on">
              <v-icon>mdi-plus-circle</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2">
              <span> add a list </span>
              <v-spacer></v-spacer>
              <v-btn @click="close" text color="primary"> close </v-btn>
            </v-card-title>

            <v-card-text>
              <v-text-field
                v-model="newContact.name"
                label="name"
              ></v-text-field>
              <v-text-field
                v-model="newContact.email"
                label="email"
              ></v-text-field>
              <v-text-field
                v-model="newContact.phone"
                label="phone"
              ></v-text-field>
              <v-text-field
                v-model="newContact.username"
                label="username"
              ></v-text-field>
              <v-text-field
                v-model="newContact.website"
                label="website"
              ></v-text-field>
              <v-text-field
                v-model="newContact.company.name"
                label="company name"
              ></v-text-field>
              <v-text-field
                v-model="newContact.company.bs"
                label="company bs"
              ></v-text-field>
              <v-text-field
                v-model="newContact.company.catchPhrase"
                label="company catchPhrase"
              ></v-text-field>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="addNewList()">add</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-title>some list</v-toolbar-title>
      <v-spacer></v-spacer>
      <Found/>
    </v-app-bar>
    <div class="serch">
      <v-text-field
        class
        name="name"
        v-model="search"
        label="search for login, tel, email"
        @keyup="checkLength"
      ></v-text-field>
    </div>
    <div v-if="notFound" class="notFound">
      <span> NOTHIHG FOUND:(( </span>
    </div>

    <v-simple-table v-if="table" fixed-header height="400">
      <template v-slot:default>
        <thead>
          <tr>
            <th>
              <b>ID</b>
            </th>
            <th>
              <b>NAME</b>
            </th>
            <th>
              <b>TEl</b>
            </th>
            <th>
              <b>MAIL</b>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr class="item" v-for="(item, i) in filterContacts" :key="i">
            <td>{{ i + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.email }}</td>
            <td>
              <span>
                <v-btn @click="del(i)" text small color="primary">
                  <v-icon>mdi-trash-can-outline</v-icon>
                </v-btn>
              </span>
              <span>
                <UpdatePopup
                  @udate="update"
                  :id="item.id"
                  :name="item.name"
                  :phone="item.phone"
                  :email="item.email"
                  :username='item.username'
                  :website="item.website"
                  :company_name="item.company.name"
                  :company_bs=' item.company.bs'
                  :company_catchPhrase='item.company.catchPhrase'
                ></UpdatePopup>
              </span>
              <span>
                <v-btn
                  @click="
                    onViewClickHandler(
                      item.id,
                      item.name,
                      item.username,
                      item.phone,
                      item.email,
                      item.website,
                      item.company.name,
                      item.company.bs,
                      item.company.catchPhrase
                    )
                  "
                  color="primary"
                  small
                  text
                >
                  <v-icon>mdi-eye-outline</v-icon>
                </v-btn>
              </span>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-footer app dark color="primary">
      <v-spacer></v-spacer>
      <span>RKEY 2020 &copy</span>
      <v-spacer></v-spacer>
    </v-footer>
  </div>
</template>
<script>
import UpdatePopup from "@/components/UpdatePopup";
// import Create from "@/components/CardComp/Create";
import Found from "@/components/Found";
export default {
  components: {
    UpdatePopup,
    // Create,
    Found,
  },
  data: () => ({
    Contacts: [],
    timer: null,
    updateDialog: false,
    updateDialogId: 0,
    CreateDialog: false,
    search: "",
    notFound: false,
    table: true,
    createPopup: false,
    popup: false,
    name: "",

    newContact: {
      login: "",
      phone: "",
      email: "",
      id: "",
      username: "",
      website: "",
      company: {
        name: "",
        bs: "",
        catchPhrase: "",
      },
    },
  }),
  mounted: function () {
    this.getObnov();
  },
  methods: {
    addNewList() {
      if (this.newContact.name != "") {
        this.Contacts.push({
          id: this.Contacts.length + 1,
          name: this.newContact.name,
          email: this.newContact.email,
          phone: this.newContact.phone,
          username: this.newContact.username,
          website: this.newContact.website,
          company: {
            name: this.newContact.company.name,
            bs: this.newContact.company.bs,
            catchPhrase: this.newContact.company.catchPhrase,
          },
        });
        (this.newContact.name = ""),
          (this.newContact.email = ""),
          (this.newContact.phone = ""),
          (this.newContact.username = ""),
          (this.newContact.website = ""),
          (this.newContact.company.name = ""),
          (this.newContact.company.bs = ""),
          (this.newContact.company.catchPhrase = ""),
          (this.createPopup = false);
      }
    },
    update(name, phone, email, id, username, website, company_name, company_bs, company_catchPhrase) {
      this.Contacts.map((item) => {
        if (item.id == Number(id)) {
          item.name = name;
          item.phone = phone;
          item.email = email;
          item.username = username;
          item.website = website;
          item.company.name = company_name;
          item.company.bs = company_bs;
          item.company.catchPhrase = company_catchPhrase;

        }
      });
    },
    onViewClickHandler(
      id,
      name,
      username,
      phone,
      email,
      website,
      company_name,
      company_bs,
      catch_phrase
    ) {
      this.$router.push({
        path: "/view",
        query: {
          id: id,
          name: name,
          username: username,
          phone: phone,
          email: email,
          website: website,
          company_name: company_name,
          company_bs: company_bs,
          catch_phrase: catch_phrase,
        },
      });
    },
    getObnov() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/users", {})
        .then((response) => {
          this.Contacts = response.data.slice();
        });
    },
    del(id) {
      this.Contacts.splice(id, 1);
    },

    close() {
      (this.newContact.name = ""),
        (this.newContact.email = ""),
        (this.newContact.phone = ""),
        (this.createPopup = false);
    },
    checkLength() {
      if (this.filterContacts.length == 0) {
        this.notFound = true;
        this.table = false;
      } else {
        this.notFound = false;
        this.table = true;
      }
    },
  },
  computed: {
    filterContacts() {
      return this.Contacts.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          item.phone.indexOf(this.search) > -1 ||
          item.email.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
    },
  },
};
</script>

<style scoped>
.serch {
  max-width: 400px;
  margin: 60px auto 0;
}
.notFound {
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
}
</style>


