<template>
    <div :class="'error error-' + type">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: [
        'type'
    ]
}
</script>
<style>
.error{
    display: block;
}

.error-danger {
    background: rgb(255, 80, 80);
    padding: 10px;
    border-radius: 5px;
    color: #FFF;
}
</style>
