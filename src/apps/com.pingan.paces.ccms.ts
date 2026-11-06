// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "平安口袋银行",
  "id": "com.pingan.paces.ccms",
  "groups": [
    {
      "name": "全屏广告-首页-权益/抽奖弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text!=\"\" || text!=null] < [vid=\"alertHeader\"] < [vid=\"allViewstub\"] + [vid=\"horizontalBottomIcon\"] >2 [vid=\"bottom_close_image\"]",
          "key": 0
        }
      ]
    }
  ]
});
