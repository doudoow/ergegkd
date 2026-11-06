// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "荣耀亲选",
  "id": "cn.honor.qinxuan",
  "groups": [
    {
      "name": "全屏广告-首页弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"cn.honor.qinxuan:id/iv_close_dlg\"]",
          "activityIds": "cn.honor.qinxuan.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13930613",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_close_dlg\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13930613",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[vid=\"iv_close\"] < * > [text=\"开启消息通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/14946137",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页广告弹窗",
      "desc": "点击X",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"cn.honor.qinxuan:id/iv_close_dlg\"]",
          "snapshotUrls": "https://i.gkd.li/i/13930613",
          "key": 0
        }
      ]
    }
  ]
});
