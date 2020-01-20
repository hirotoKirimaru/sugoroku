<template>
  <div class="hello">
    <button @click="init">すたーと</button>
      <template>
        <p>コマ</p>
        <p>ID: {{ token.id }}</p>
        <p>現在マス: {{ token.currentSquare.position }}</p>
      </template>
    <p>選択可能なマス：</p>
    <select class="form-control"
            v-model="selectedSquare"
    >
      <option v-for="item in getNextList()" :key="item.prePosition + item.position"
                    :value="item"
      >
          {{ item.description }}
      </option>
    </select>
    <button @click="select">せれくと</button>
    <Board :squareList="squareList"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Token from '@/domain/Token';
import Square from '@/domain/Square';
import SquareList from '@/domain/SquareList';
import Board from '@/components/Board.vue';

@Component({
  components: { Board },
})
export default class HelloWorld extends Vue {
  token?: Token = new Token();

  squareList: SquareList = new SquareList();

  selectedSquare: Square = Square.init();

  mounted() : void{
    this.createSquareList();
  }

  init() {
    this.createToken();
  }

  createToken() {
    this.token = new Token('100');
  }

  getNextList() :Array<Square> {
    if (typeof this.token === 'undefined') {
      return [];
    }

    const list = this.squareList.nextList(this.token.currentSquare);
    this.setSelectedSquare(list[0]);

    return list;
  }

  setSelectedSquare(square: Square) {
    if (this.selectedSquare.canTransition(square)) {
      this.selectedSquare = square;
    }
  }

  select() {
    if (typeof this.token === 'undefined' || typeof this.selectedSquare === 'undefined') {
      return;
    }

    this.token.move(this.selectedSquare);
  }

  createSquareList() {
    const START: Square = new Square('-', '0', 'スタート');
    const LAWYER: Square = new Square('0', '101', '弁護士に就職マス');
    const IDOL: Square = new Square('101', '102', 'アイドルに就職マス');
    const PART: Square = new Square('102', '103', 'フリーターマス');
    const OFFICE_WORKER: Square = new Square('0', '201', '会社員に就職マス');
    const PAYDAY1: Square = new Square('103', '301', '給料日');
    const PAYDAY2: Square = new Square('201', '301', '給料日');
    const END: Square = new Square('301', '900', 'ゴール');

    this.squareList.add(START);
    this.squareList.add(LAWYER);
    this.squareList.add(IDOL);
    this.squareList.add(PART);
    this.squareList.add(OFFICE_WORKER);
    this.squareList.add(PAYDAY1);
    this.squareList.add(PAYDAY2);
    this.squareList.add(END);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
