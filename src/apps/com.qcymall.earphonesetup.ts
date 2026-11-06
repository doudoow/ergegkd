// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "QCY",
  "id": "com.qcymall.earphonesetup",
  "groups": [
    {
      "name": "局部广告-我的-卡片广告",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"close_img_banner\"]",
          "activityIds": "com.qcymall.earphonesetup.v2ui.activity.V2MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13874219",
          "key": 0
        },
        {
          "matches": "[vid=\"close_img_banner\"]",
          "activityIds": ".v2ui.activity.V2MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13874219",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-我的-广告卡片",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"close_img_banner\"]",
          "key": 0
        }
      ]
    }
  ]
});
