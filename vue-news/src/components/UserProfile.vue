<template>
    <div class="user-container">
        
        <div>
            <i class="fas fa-user"></i>
        </div>
        <div class='user-description'>
            <!-- <div>username : {{ info.id }}</div> -->
            <slot name="username"></slot>
            <div class="time">
                <slot name="time"></slot>
            </div>
        </div>
        <slot name="karma">
        </slot>
    </div>
</template>

<script>
export default {
  props : {
      info : Object
  }
}
</script>

<style>
.user-container {
    padding: 0.5rem;
    display: flex;
    align-items: center;
}

.fa-user {
    font-size: 2.5rem
}

.user-description {
    padding-left: 8px;
}
</style>