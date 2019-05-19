import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className="container">
        首页话题列表
      </View>
    )
  }
}

export default Index
