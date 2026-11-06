// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "顺易充",
  "id": "com.longshine.nanwang.electric.charge",
  "groups": [
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.longshine.nanwang.electric.charge:id/bodyFL\"] + [id=\"com.longshine.nanwang.electric.charge:id/ivClose\"]",
          "activityIds": "com.android.app.station.NewMainAct",
          "snapshotUrls": "https://i.gkd.li/i/12700011",
          "key": 0
        },
        {
          "matches": "[vid=\"bodyFL\"] + [vid=\"ivClose\"]",
          "activityIds": "com.android.app.station.NewMainAct",
          "snapshotUrls": "https://i.gkd.li/i/12700011",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.longshine.nanwang.electric.charge:id/bodyFL\"] + [id=\"com.longshine.nanwang.electric.charge:id/ivClose\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.longshine.nanwang.electric.charge:id/bodyFL\"] + [id=\"com.longshine.nanwang.electric.charge:id/ivClose\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.longshine.nanwang.electric.charge:id/bodyFL\"] + [id=\"com.longshine.nanwang.electric.charge:id/ivClose\"]",
          "key": 0
        }
      ]
    }
  ]
});
