<template>
  <div id="login-page">
    <div class="background"></div>
    <card-box class="login-card">
      <card-content>
        <h1>Connexion</h1>
        <input-form type="text" placeholder="Nom d'utilisateur" />
        <input-form type="password" placeholder="Mot de passe" />
        <input-form type="submit" value="Se connecter" />
        <a href="#" class="forgot-pass">Mot de passe oublié</a>
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
  }
}
</script>
<style>
#login-page {
  position: absolute;
  left: -250px;
  right: 0;
}

#login-page .background {
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100vh;
  background: url('/image/login-background.jpg');
  background-size: cover;
  opacity: 0.4;
}

.login-card {
  margin: auto;
  width: 450px;
  margin-top: 150px;
}

.login-card h1 {
  text-align: center;
}

.login-card .forgot-pass {
  text-align: left;
  font-size: 0.8em;
  color: #333;
}

</style>
