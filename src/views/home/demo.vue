<template>
  <div>
    <TitleContainer></TitleContainer>
    <br>
    <SearchContainer>
      <div>dsadsa</div>
    </SearchContainer>
    <el-row>
      <br>
      <h1>按钮:</h1>

      <bs-button :label='"查询"'>重置</bs-button>
      <bs-button type="primary"
                 :label='"查询"'></bs-button>
      <bs-button type="info"
                 size="mini"
                 :label='"重置"'
                 :perms='"10001"'></bs-button>
      <bs-button type="dark"
                 :label='"重置"'
                 :perms='"10001"'></bs-button>
      <bs-button size="mini"
                 type="primary"
                 :label='"玩家订单"'
                 :bsplain='true'></bs-button>
      <bs-button size="small"
                 type="warning"
                 :label='"周杰伦"'></bs-button>

      <bs-button size="small"
                 type="success"
                 :label='"周杰伦"'></bs-button>
      <bs-button size="medium"
                 bstype='black'
                 :label='"玩家上下级"'></bs-button>
      <bs-button size="medium"
                 bstype='black'
                 :active='true'
                 :label='"玩家上下级"'></bs-button>
      <bs-button size="small"
                 type="success"
                 :label='"玩家"'
                 round></bs-button>
    </el-row>

    <el-row>
      <br>
      <h1>链接:</h1>

      <bs-link :label='"查询按钮"'
               @click='clickbutton'
               :perms='"10001"' />
      <bs-link :label='"查询按钮"'
               @click='clickbutton'
               :type='"success"'
               :perms='"10001"' />
    </el-row>

    <el-row>
      <br>
      <h1>注释:</h1>

      <bs-explain :icon='"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559727076191&di=104703d2a248e7ea9f843975a7beffaa&imgtype=0&src=http%3A%2F%2Fcdn-img.easyicon.net%2Fpng%2F11741%2F1174114.gif"'
                  :explain='"文字描述文字描述文字描述文字描述字描字描述文字描述"'></bs-explain>
    </el-row>

    <el-row>
      <br>
      <h1>信息:</h1>

      <bs-cell :lineHeight='"20px"'
               :label='"账号状态"'
               :labelConent='"123456489"' />
      <bs-cell :lineHeight='"30px"'
               :label='"账号状态"'
               :labelConent='"123456489"' />
      <bs-cell :label='"彩票图片"'>
        <!-- //插槽 -->
        <img width='50px'
             height="50px"
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559716513877&di=50019eb46e22d7b6fa852566a0aab3cb&imgtype=0&src=http%3A%2F%2Fpic23.nipic.com%2F20120904%2F6772262_115341036000_2.jpg"
             alt="">
      </bs-cell>
    </el-row>

    <el-row>
      <br>
      <h1>输入框:</h1>
      <el-input v-model="input"
                :size='"mini"'
                placeholder="请输入内容"></el-input>
      <el-input v-model="input"
                :size='"small"'
                placeholder="请输入内容"></el-input>
      <el-input v-model="input"
                :size='"medium "'
                placeholder="请输入内容"></el-input>
      <el-input v-model="input"
                placeholder="请输入内容"></el-input>
    </el-row>
    <el-row>
      <br>
      <h1>下拉选择:</h1>
      <bstable-select :label='"条件查询"'>
        <!-- //插槽 -->
        <div slot="firstInput">
          <el-select v-model="value"
                     :size='"small"'
                     placeholder="请选择">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value"></el-option>
          </el-select>
        </div>
        <div slot="sconedInput">
          <el-input v-model="input"
                    :size='"small"'
                    placeholder="请输入内容"></el-input>
        </div>
      </bstable-select>
      <bstable-select :lablewidth='"50px"'
                      :inputType='"mini"'
                      :label='"等级"'>
        <!-- //插槽 -->
        <div slot="firstInput">
          <el-select v-model="value"
                     :size='"mini"'
                     placeholder="全部">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value"></el-option>
          </el-select>
        </div>

      </bstable-select>
      <bstable-select :inputType='"mini"'
                      :label='"注册时间"'>
        <!-- //插槽 -->
        <div slot="firstInput">
          <el-select v-model="value"
                     :size='"small"'
                     placeholder="开始时间">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value"></el-option>
          </el-select>
        </div>
        <div slot="sconedInput">
          <el-select v-model="value"
                     :size='"small"'
                     placeholder="结束时间">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value"></el-option>
          </el-select>
        </div>

      </bstable-select>
    </el-row>
    <el-row>
      <br>
      <h1>下拉选择:</h1>
      <bs-button @click='handMe()'
                 :label='"查询"'>重置</bs-button>
    </el-row>
  </div>
</template>

<script>
import SearchContainer from '@/components/Container/SearchContainer'
import TitleContainer from '@/components/Container/TitleContainer'
import bsButton from '@/components/base/bsButton.vue'
import bsLink from '@/components/base/bsLink.vue'
import bsCell from '@/components/base/bsCell.vue'
import bsExplain from '@/components/base/bsExplain.vue'
// import confirm from '@/components/base/confirm.vue'
import bstableSelect from '@/components/base/bstableSelect.vue'
export default {
  name: '',
  components: {    TitleContainer, SearchContainer, bsButton,
    bsCell,
    bsLink,
    bsExplain,
    // confirm,
    bstableSelect  },
  data () {
    return {
      centerDialogVisible: false,
      DialogVisible: true,
      input: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  computed: {},
  methods: {
    clickbutton () { },
    getUserList () {
      this.$api
        .userList({
          page: 1,
          page_size: 20
        })
        .then(
          res => {
            console.log(res)
          },
          err => {
            console.log(err)
          }
        )
    }
  },
  created () {
    console.log('登录接口')
    // this.getUserList()
  },
  mounted () { },
  watch: {}
}
</script>

<style  scoped>
</style>
