// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小牛电动",
  "id": "com.niu.cloud",
  "groups": [
    {
      "name": "更新提示-固件更新弹窗",
      "desc": "点击[以后再说]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "matchRoot": true,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"发现新固件\"][visibleToUser=true]",
            "[text=\"以后再说\"][visibleToUser=true]"
          ],
          "activityIds": ".main.MainActivityNew",
          "snapshotUrls": "https://i.gkd.li/i/20919078",
          "exampleUrls": "https://e.gkd.li/b486cc0b-3ac2-4be3-a38d-c16c952f4fce",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"closeDialogIv\"][visibleToUser=true]",
          "activityIds": ".main.MainActivityNew",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20939822",
          "exampleUrls": "https://e.gkd.li/78f2afd2-de8b-46b5-ae6c-6df58862f00e",
          "key": 0
        }
      ]
    }
  ]
});
