export default {
  data(){
    return{
      size: 200,
    }
  },
  methods: {
    fillArray(){
      this.array = [];
      for (let i =1; i< this.size+1; i++) {
          this.array.push([i*2,'grey'])
      }
    },
    shuffle(array) {
      var j, x, i;
      for (i = array.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = array[i];
          array[i] = array[j];
          array[j] = x;
      }
      this.paintArray('grey')
    },
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    },
    sleep(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    },
    paintArray(color){
      for(var i = 0;i<this.size;i++){
          this.array[i][1] = color
      }
    }
  }
}
