// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "易捷加油",
  "id": "cn.com.hkgt.gasapp",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "ImageView[id=\"cn.com.hkgt.gasapp:id/exit\"][clickable=true]",
          "activityIds": "cn.com.hkgt.gasapp.dialog.BannerDialog",
          "snapshotUrls": "https://i.gkd.li/i/12744270",
          "key": 0
        },
        {
          "matches": "ImageView[vid=\"exit\"][clickable=true]",
          "activityIds": ".dialog.BannerDialog",
          "snapshotUrls": "https://i.gkd.li/i/12744270",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "@[vid=\"close_open\"] -2 [text*=\"开启定位\"][visibleToUser=true]",
          "activityIds": ".activity.main.HkMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20961130",
          "exampleUrls": "https://e.gkd.li/82022058-fadc-43de-baca-d254249b6c51",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView[id=\"cn.com.hkgt.gasapp:id/exit\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "ImageView[id=\"cn.com.hkgt.gasapp:id/exit\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "ImageView[id=\"cn.com.hkgt.gasapp:id/exit\"][clickable=true]",
          "key": 0
        }
      ]
    }
  ]
});
