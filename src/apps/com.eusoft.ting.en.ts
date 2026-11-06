// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "每日英语听力",
  "id": "com.eusoft.ting.en",
  "groups": [
    {
      "name": "全屏广告-优惠券弹窗",
      "desc": "点击[暂不需要]",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"我的优惠券\"] +2 * > [text=\"暂不需要\"]",
          "activityIds": "com.eusoft.ting.ui.v2.TabActivityV2",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14583029",
          "exampleUrls": "https://m.gkd.li/57941037/87566d74-abe0-46b6-a376-d1231c6a025a",
          "key": 0
        }
      ]
    }
  ]
});
