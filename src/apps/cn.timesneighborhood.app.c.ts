// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "邻里邦",
  "id": "cn.timesneighborhood.app.c",
  "groups": [
    {
      "name": "功能类-自动签到",
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"立即签到\"]",
          "activityIds": "com.zkty.modules.engine.activity.XEngineWebActivity",
          "snapshotUrls": "https://i.gkd.li/i/14545251",
          "exampleUrls": "https://m.gkd.li/57941037/e02dac87-41dc-45eb-bf7e-8daa0b69f517",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动点击签到",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"立即签到\"]",
          "snapshotUrls": "https://i.gkd.li/i/14545000",
          "exampleUrls": "https://m.gkd.li/101449500/58bc6789-3015-450f-9f3d-d98a02edc7f6",
          "key": 0
        }
      ]
    }
  ]
});
