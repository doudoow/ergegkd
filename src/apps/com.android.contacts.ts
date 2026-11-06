// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "通讯录与拨号",
  "id": "com.android.contacts",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"img_close_btn\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.mobile.businesshall.ui.common.RecommendPopupActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14321032",
          "exampleUrls": "https://m.gkd.li/57941037/a3ad68fc-4a2e-45e2-87d3-97ece1fceaa4"
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "点击[取消]",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[text=\"取消\"] +2 [text=\"更新\"]",
          "snapshotUrls": "https://i.gkd.li/i/14469082",
          "exampleUrls": "https://m.gkd.li/57941037/803695f8-48e1-43e8-8841-ec0288393489",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"img_close_btn\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.mobile.businesshall.ui.common.RecommendPopupActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14321032",
          "exampleUrls": "https://m.gkd.li/57941037/a3ad68fc-4a2e-45e2-87d3-97ece1fceaa4"
        }
      ]
    }
  ]
});
