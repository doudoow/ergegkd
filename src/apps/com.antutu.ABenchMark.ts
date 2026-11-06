// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "安兔兔评测",
  "id": "com.antutu.ABenchMark",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"广告\"] +2 View > @TextView[childCount=0][index=1][clickable=true][visibleToUser=true] <<n [id=\"com.antutu.ABenchMark:id/ksad_container\"]",
          "activityIds": "com.android.module.app.ui.test.activity.ActivityTestResult",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13234012",
          "key": 0
        },
        {
          "matches": "[text=\"广告\"] +2 View > @TextView[childCount=0][index=1][clickable=true][visibleToUser=true] <<n [vid=\"ksad_container\"]",
          "activityIds": "com.android.module.app.ui.test.activity.ActivityTestResult",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13234012",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-广告卡片",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"广告\"] + TextView + View > TextView",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-广告卡片",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"广告\"] + TextView + View > TextView",
          "key": 0
        }
      ]
    },
    {
      "name": "广告卡片",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"广告\"] + TextView + View > TextView",
          "key": 0
        }
      ]
    }
  ]
});
