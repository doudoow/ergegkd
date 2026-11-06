// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "爱山东",
  "id": "com.hanweb.android.sdzwfw.activity",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"关闭\"][text.length<=10]",
          "snapshotUrls": "https://i.gkd.li/i/13407227",
          "key": 0
        },
        {
          "matches": "@[clickable=true] > [text*=\"关闭\" || text*=\"跳过\"][text.length<10]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13407227",
            "https://i.gkd.li/i/30527745"
          ],
          "key": 1
        }
      ]
    }
  ]
});
