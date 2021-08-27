<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
        <div class="modal">

            <section class="modal-body">
            <slot />
            </section>

            <button type="button" class="btn-green" @click="close">
            Close Modal
            </button>
            
        </div>
    </div>
  </transition>
</template>


<script>
  export default {
    name: 'InfoModal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>


<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 400px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
    text-align: justify;
  }


  .btn-green {
    color: white;
    background: #058026;
    border: 1px solid #05a12e;
    height: 30px;
    border-radius: 2px;
  }
  .btn-green:hover{
    background: #05a12e;
  }
  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }

</style>