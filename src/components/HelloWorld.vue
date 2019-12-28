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
<!--    <select class="form-control"-->
<!--            :value="selectedSquare"-->
<!--            @input="createToken2($event)"-->
<!--    >-->
    <!--            @input="selectedSquare =$event.target.value"-->
      <option v-for="item in getNextList()" :key="item.prePosition + item.position"
                    :value="item"
      >
      <!--              :value="item"-->
          {{ item.description }}
      </option>
    </select>
    <button @click="select">せれくと</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Token from '@/domain/Token';
import SquareList from '@/domain/SquareList';
import Square from '@/domain/Square';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  token?: Token = new Token();

  squareList: SquareList = new SquareList();

  selectedSquare?: Square = new Square('', '', '');

  mounted() : void{
    this.createSquareList();
  }

  init() {
    this.createToken();
  }

  createToken() {
    this.token = new Token('100');
  }

  // createToken2(a :Event) {
  //   const b :any = a.target.value;
  // this.selectedSquare = b;
  // }

  getNextList() :Array<Square> {
    if (typeof this.token === 'undefined') {
      return [];
    }

    return this.squareList.nextList(this.token.currentSquare);
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
