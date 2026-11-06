// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "喵次元",
  "id": "com.sjm.zhuanzhuan.mcy",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"立即升级\"][visibleToUser=true]",
          "action": "back",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13392514"
        },
        {
          "matches": "[id=\"com.sjm.zhuanzhuan.mcy:id/tv_new_version\"] < LinearLayoutCompat +n [text=\"立即升级\"]",
          "action": "back",
          "key": 1,
          "name": "更新提示",
          "snapshotUrls": "https://i.gkd.li/i/13392514"
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.sjm.zhuanzhuan.mcy:id/tv_new_version\"] < LinearLayoutCompat +n [text=\"立即升级\"]",
          "action": "back",
          "key": 0,
          "name": "更新弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13392514"
        }
      ]
    }
  ]
});
