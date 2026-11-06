// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "CFMOTO",
  "id": "com.lxt.cfmoto",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.lxt.cfmoto:id/closeClick\"]",
          "activityIds": "com.cfmoto.oilmoto.ui.MainCfActivity",
          "fastQuery": true,
          "key": 0,
          "name": "首页弹窗广告",
          "snapshotUrls": "https://i.gkd.li/i/13401967"
        },
        {
          "matches": "[vid=\"closeClick\"]",
          "activityIds": "com.cfmoto.oilmoto.ui.MainCfActivity",
          "fastQuery": true,
          "key": 1,
          "name": "首页弹窗广告",
          "snapshotUrls": "https://i.gkd.li/i/13401967"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=2] > [id=\"com.lxt.cfmoto:id/image\"] + [id=\"com.lxt.cfmoto:id/closeClick\"]",
          "activityIds": "com.cfmoto.oilmoto.ui.MainCfActivity",
          "key": 0,
          "name": "首页弹窗广告",
          "snapshotUrls": "https://i.gkd.li/i/13401967"
        }
      ]
    },
    {
      "name": "局部广告-弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=2] > [id=\"com.lxt.cfmoto:id/image\"] + [id=\"com.lxt.cfmoto:id/closeClick\"]",
          "activityIds": "com.cfmoto.oilmoto.ui.MainCfActivity",
          "key": 0,
          "name": "首页弹窗广告",
          "snapshotUrls": "https://i.gkd.li/import/13401967"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "RelativeLayout[childCount=2] > [id=\"com.lxt.cfmoto:id/image\"] + [id=\"com.lxt.cfmoto:id/closeClick\"]",
          "activityIds": "com.cfmoto.oilmoto.ui.MainCfActivity",
          "key": 0,
          "name": "首页弹窗广告",
          "snapshotUrls": "https://i.gkd.li/import/13401967"
        }
      ]
    }
  ]
});
