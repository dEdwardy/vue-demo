<template>
  <div class="echartsContainer">
    <echarts class="echarts-view" ref="chart1" :options="lineOption" />
    <echarts class="echarts-view" :options="barOption" />
  </div>
</template>

<script>
import Echarts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
export default {
  name: "Echarts",
  data() {
    return {
      lineOption: {},
      barOption: {}
    };
  },
  components: {
    echarts: Echarts
  },
  mounted() {
    this.getLineData();
    this.getBarData();
  },
  methods: {
    async getLineData() {
      let { data } = await this.$http.Common.getChartData("line");
      console.log(data);
      let x = [];
      let y = [];
      data.map(i => {
        x.push(i.date + "月");
        y.push(i.money);
      });
      this.lineOption = {
        title: {
          text: "XXXX公司XX部分2019年绩效"
        },
        xAxis: {
          type: "category",
          data: x
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: y,
            type: "line"
          }
        ]
      };
    },
    async getBarData() {
      let { data } = await this.$http.Common.getChartData("bar");
      let x = Array.from(
        new Set(
          data.map(item => {
            return item.year;
          })
        )
      );
      let jobs = Array.from(
        new Set(
          data.map(item => {
            return item.job;
          })
        )
      );
      console.log(jobs);
      console.log(x);
      let front = [];
      let end = [];
      let yw = [];
      data.forEach(e => {
        if (e.job === "前端") {
          front.push(e.num);
        }
        if (e.job === "后台") {
          end.push(e.num);
        }
        if (e.job === "运维") {
          yw.push(e.num);
        }
      });

      console.log(front, end, yw);
      this.barOption = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          formatter:(params) => {
            let str = `<div style="text-align:center">${params[0].name}年</div>`
            params.map((i,idx) => {
              str += `${i.seriesName.slice(0,2)}:${i.value}千<br/>`
            })
            // str = params[0].name+'<br/>'+arr[0].seriesName+':'+arr[0].value+'千'+'<br/>'+arr[1].seriesName+':'+arr[0].value+'千'+'<br/>'+arr[0].seriesName+':'+arr[0].value+'千'
            return str
          }
        },
        title: {
          text: "2016~2019年软件开发人员数量图"
        },
        legend: {
          data: jobs
        },
        xAxis: [
          {
            type: "category",
            data: x,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "前端人数",
            type: "bar",
            data: front
          },
          {
            name: "后台人数",
            type: "bar",
            data: end
          },
          {
            name: "运维人数",
            type: "bar",
            data: yw
          }
        ],
        animationDuration: 2000
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.echarts-view {
  margin: 0 auto;
}
</style>