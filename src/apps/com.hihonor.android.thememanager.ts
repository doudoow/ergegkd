// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "主题",
  "id": "com.hihonor.android.thememanager",
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
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/16573695",
          "exampleUrls": "https://e.gkd.li/f9821020-292c-454d-8e04-83ca73b38358",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"mtDialogClose\"][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": ".HwThemeManagerActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/17158049",
          "exampleUrls": "https://e.gkd.li/7ceeb371-e7a5-4c94-8afd-d2c5b56744a6",
          "key": 0
        }
      ]
    }
  ]
});
