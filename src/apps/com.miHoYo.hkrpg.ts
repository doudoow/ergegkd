// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "崩坏：星穹铁道",
  "id": "com.miHoYo.hkrpg",
  "groups": [
    {
      "name": "开屏广告-用户协议",
      "desc": "不接受怎么玩?",
      "matchTime": 16000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 16000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text^=\"用户协议\"] +2 LinearLayout > [text=\"拒绝\"] + [text=\"接受\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.combosdk.module.ua.ProtocolActivity",
          "snapshotUrls": "https://i.gkd.li/i/25823587",
          "exampleUrls": "https://e.gkd.li/c5ce0381-bef9-4b0b-90e4-786166d3afc0",
          "key": 0
        }
      ]
    }
  ]
});
