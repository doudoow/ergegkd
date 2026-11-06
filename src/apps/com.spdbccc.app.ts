// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "浦大喜奔",
  "id": "com.spdbccc.app",
  "groups": [
    {
      "name": "通知提示-代理提示弹窗",
      "desc": "点击[确定]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"提示\"][visibleToUser=true]",
            "[text=\"确定\"][visibleToUser=true]"
          ],
          "activityIds": ".sp.splash.activity.SplashActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18275651",
          "exampleUrls": "https://e.gkd.li/e582c5d4-bce3-46a2-ad69-7d0ac4e2fb52",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"ckb_not_show_again\"][checked=false][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/18275682",
          "exampleUrls": "https://e.gkd.li/bb770917-9fbb-4910-9c9e-8bf58437bb1e"
        },
        {
          "matches": "[vid=\"iv_kfc_image_close\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/18275682",
          "exampleUrls": "https://e.gkd.li/bb770917-9fbb-4910-9c9e-8bf58437bb1e",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"ll_quolity_float_close\"][visibleToUser=true]",
          "activityIds": ".sp.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18275729",
          "exampleUrls": "https://e.gkd.li/4cb41225-609a-4b7f-8ff4-ecca03d37c38",
          "key": 0
        }
      ]
    }
  ]
});
