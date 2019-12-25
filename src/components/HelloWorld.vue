<template>
  <div class="hello">
    <ul>
      <li v-for="(item, key, index) in squareList" :key="index">
        <p :value="item.description"></p>
      </li>
    </ul>
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

  private token?: Token = undefined;

  private squareList?: SquareList = undefined;

  mounted() : void{
    this.createToken();
    this.createSquareList();
  }

  private createToken() {
    this.token = new Token('1');
  }

  private createSquareList() {
    const START: Square = new Square('-', '0', 'スタート');
    const LAWYER: Square = new Square('0', '101', '弁護士に就職マス');
    const IDOL: Square = new Square('101', '102', 'アイドルに就職マス');
    const PART: Square = new Square('102', '103', 'フリーターマス');
    const OFFICE_WORKER: Square = new Square('0', '201', '会社員に就職マス');
    const PAYDAY1: Square = new Square('103', '301', '給料日');
    const PAYDAY2: Square = new Square('201', '301', '給料日');
    const END: Square = new Square('301', '900', 'ゴール');
    const squareList: SquareList = new SquareList();

    squareList.add(START);
    squareList.add(LAWYER);
    squareList.add(IDOL);
    squareList.add(PART);
    squareList.add(OFFICE_WORKER);
    squareList.add(PAYDAY1);
    squareList.add(PAYDAY2);
    squareList.add(END);
    this.squareList = squareList;
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
