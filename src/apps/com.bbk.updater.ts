// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "系统升级(VIVO)",
  "id": "com.bbk.updater",
  "groups": [
    {
      "name": "通知提示-系统更新提示",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"下载并安装\"] + [text=\"稍后提醒\"][clickable=true][visibleToUser=true]",
          "action": "back",
          "activityIds": "com.bbk.launcher2.Launcher",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26644663",
          "exampleUrls": "https://e.gkd.li/bdd7cc82-a138-4f0b-b865-0be3168a319e",
          "key": 0
        }
      ]
    }
  ]
});
