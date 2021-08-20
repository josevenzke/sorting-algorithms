export default {
  methods: {
    fillArray(){
      this.array = [];
      for (let i =0; i< this.size; i++) {
          this.array.push([this.getRndInteger(5, 400),'grey'])
      }
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
