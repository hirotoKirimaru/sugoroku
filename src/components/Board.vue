<template>
  <div id="board" style="border: solid 1px blue; width:800px; height:200px">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import * as go from 'gojs';
import SquareList from '@/domain/SquareList';

@Component
export default class Board extends Vue {
  diagram:any;

  @Prop({ default: null })
  squareList!: SquareList;

  mounted(): void{
    this.diagram = new go.Diagram('board');

    this.diagram.model = new go.GraphLinksModel(
      [ // a JavaScript Array of JavaScript objects, one per node;
        // the "color" property is added specifically for this app
        { key: 'Alpha', color: 'lightblue' },
        { key: 'Beta', color: 'orange' },
        { key: 'Gamma', color: 'lightgreen' },
        { key: 'Delta', color: 'pink' },
      ],
      [ // a JavaScript Array of JavaScript objects, one per link
        { from: 'Alpha', to: 'Beta' },
        { from: 'Alpha', to: 'Gamma' },
        { from: 'Beta', to: 'Beta' },
        { from: 'Gamma', to: 'Delta' },
        { from: 'Delta', to: 'Alpha' },
      ],
    );
  }
}
</script>

<style scoped>
</style>
