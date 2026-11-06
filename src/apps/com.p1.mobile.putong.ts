// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "探探",
  "id": "com.p1.mobile.putong",
  "groups": [
    {
      "name": "更新提示",
      "desc": "点击[取消]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[vid=\"buttonDefaultNeutral\"][clickable=true] > [text=\"取消\"]",
          "activityIds": ".core.newui.main.NewMainAct",
          "snapshotUrls": "https://i.gkd.li/i/14445054",
          "exampleUrls": "https://m.gkd.li/57941037/2326365c-b31e-429a-9357-765d1c58da4c",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击[暂不设置]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"打开通知\"] + [text=\"暂不设置\"]",
          "activityIds": ".core.ui.seepage.likers.FakeLikersAct",
          "snapshotUrls": "https://i.gkd.li/i/14445055",
          "exampleUrls": "https://m.gkd.li/57941037/137e9907-9767-4acf-b803-034182346ef3",
          "key": 0
        }
      ]
    }
  ]
});
