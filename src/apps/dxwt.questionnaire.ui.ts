// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "10000社区",
  "id": "dxwt.questionnaire.ui",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@View[desc^=\"关闭\"][visibleToUser=true] <3 FrameLayout < FrameLayout < FrameLayout < [id=\"dxwt.questionnaire.ui:id/container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13255491",
          "excludeSnapshotUrls": "https://i.gkd.li/i/13259475",
          "key": 0
        },
        {
          "matches": "[desc^=\"关闭\"][desc.length<=10][visibleToUser=true]",
          "key": 1
        },
        {
          "matches": "@View[desc^=\"关闭\"][visibleToUser=true] <3 FrameLayout < FrameLayout < FrameLayout < [vid=\"container\"]",
          "snapshotUrls": "https://i.gkd.li/i/13255491",
          "excludeSnapshotUrls": "https://i.gkd.li/i/13259475",
          "key": 2
        }
      ]
    }
  ]
});
