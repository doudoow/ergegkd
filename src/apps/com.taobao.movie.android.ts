// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "淘票票",
  "id": "com.taobao.movie.android",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/16498740",
          "exampleUrls": "https://e.gkd.li/b0b7bd5e-89fc-4079-b17f-1b1cf4938658",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "key": 1,
      "rules": [
        {
          "matches": "@[clickable=true][width<151] - [vid=\"minus_dialog\"]",
          "activityIds": ".common.minuscampaign.MinusDialogActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/31164402",
          "exampleUrls": "https://e.gkd.li/05265ff0-580f-4e4c-8432-9f45626beb5c",
          "key": 0
        }
      ]
    }
  ]
});
