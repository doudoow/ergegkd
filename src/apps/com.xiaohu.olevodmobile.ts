// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "欧乐影院",
  "id": "com.xiaohu.olevodmobile",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@[id=\"com.xiaohu.olevodmobile:id/init_time_text\"] + [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/12826256",
          "key": 0
        },
        {
          "matches": "@[vid=\"init_time_text\"] + [text=\"跳过\"]",
          "snapshotUrls": "https://i.gkd.li/i/12826256",
          "key": 1
        }
      ]
    }
  ]
});
