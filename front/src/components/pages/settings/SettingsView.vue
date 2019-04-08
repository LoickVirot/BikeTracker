<template>
  <div class="settings-view">
    <h1>Paramètres</h1>
    <card-box>
      <card-content>
        <h2>Mes trackers</h2>
      </card-content>
    </card-box>
    <card-box>
      <card-content>
        <h2>Mon compte</h2>
        <input-form type="text" :value="user.user.username" disabled/>
        <input-form type="text" :value="user.user.email" disabled/>
        <input-form type="password" placeholder="New password" />
        <input-form type="password" placeholder="Confirm password" />
        <a href="#" @click='logout'>Logout from account</a>
      </card-content>
    </card-box>
  </div>
</template>
<script>
import CardBox from '../../mixins/card/CardBox.vue';
import CardContent from '../../mixins/card/CardContent.vue';
import InputForm from '../../mixins/form/InputForm.vue';
import { mapState } from 'vuex';

export default {
  components: {
    CardBox,
    CardContent,
    InputForm,
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.push({name: 'login'})
    }
  },
  computed: {
    ...mapState({
      user: state => state.auth,
    }),
  },
};
</script>
<style>
  .settings-view {
    padding: 40px;
  }

  .settings-view .card {
    margin-bottom: 20px;
  }
</style>
