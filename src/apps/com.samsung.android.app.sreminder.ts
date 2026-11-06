// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "三星生活助手",
  "id": "com.samsung.android.app.sreminder",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"cancel_iv\"]",
          "activityIds": ".popupconfig.PopupConfigActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17611025",
          "exampleUrls": "https://e.gkd.li/428ddc56-fff5-401d-a08e-2fcfc4bb4510",
          "key": 0
        }
      ]
    }
  ]
});
