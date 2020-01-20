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

  nodeDataArray: Array<any> = [];

  linkDataArray: Array<any> = [];

  mounted(): void{
    this.setNodeDataAndLinkData();

    this.diagram = new go.Diagram('board');
    this.diagram.model = new go.GraphLinksModel(
      this.nodeDataArray,
      this.linkDataArray,
    );
  }

  setNodeDataAndLinkData() : void {
    this.squareList.squareList.forEach((square) => {
      this.nodeDataArray.push({ key: square.position, text: square.description });
      this.linkDataArray.push({ from: square.prePosition, to: square.position });
    });
  }
}
</script>

<style scoped>
</style>
