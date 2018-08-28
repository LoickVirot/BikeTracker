<template>
  <div id="login-page">
    <div class="background"></div>
    <card-box class="login-card">
      <card-content>
        <h1>Connexion</h1>
        <div class="form-group">
          <input-form type="text" id="login-username" placeholder="Nom d'utilisateur" />
        </div>
        <div class="form-group">
          <input-form type="password" id="login-password" placeholder="Mot de passe" />
        </div>
        <div class="form-group buttons">
          <a href="#" class="forgot-pass">Mot de passe oublié</a>
          <button-item type="primary" value="Se connecter" />
        </div>
      </card-content>
    </card-box>
  </div>
</template>
<script>
import CardBox from '../../mixins/card/CardBox.vue';
import CardContent from '../../mixins/card/CardContent.vue';
import InputForm from '../../mixins/form/InputForm.vue';
import ButtonItem from '../../mixins/form/ButtonItem.vue';

export default {
  components: {
    CardBox,
    CardContent,
    InputForm,
    ButtonItem,
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
  text-align: right;
  font-size: 0.8em;
  color: #333;
  margin: 10px;
}

#login-page .form-group {
  margin-top: 20px;
}

#login-page .form-group label {
  font-size: 0.9em;
  font-weight: bold;
}

#login-page .buttons {
  display: flex;
  justify-content: space-between
}

</style>
