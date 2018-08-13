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
        <input-form type="text" value="lvirot" disabled/>
        <input-form type="text" value="loick.virot@gmail.com" disabled/>
        <input-form type="password" placeholder="New password" />
        <input-form type="password" placeholder="Confirm password" />
      </card-content>
    </card-box>
  </div>
</template>
<script>
import CardBox from '../../mixins/card/CardBox.vue';
import CardContent from '../../mixins/card/CardContent.vue';
import InputForm from '../../mixins/form/InputForm.vue';

export default {
  components: {
    CardBox,
    CardContent,
    InputForm,
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
