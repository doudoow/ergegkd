// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "呆萌价",
  "id": "com.lxkj.dmhw",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.lxkj.dmhw:id/animation_view\"]",
          "position": {
            "left": "width * 0.8981",
            "top": "width * 0.1629"
          },
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13246178"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15454142"
        },
        {
          "matches": "[vid=\"animation_view\"]",
          "position": {
            "left": "width * 0.8981",
            "top": "width * 0.1629"
          },
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13246178"
        }
      ]
    }
  ]
});
