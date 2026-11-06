// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "招商银行",
  "id": "cmb.pb",
  "groups": [
    {
      "name": "局部广告-首页活动悬浮广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"float_window\"] > [vid=\"ivCancle\"][clickable=true]",
          "activityIds": "cmb.pb.app.mainframe.container.PBMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14208669",
          "key": 0
        },
        {
          "matches": "[vid=\"float_window\"] > [vid=\"ivCancle\"][clickable=true]",
          "key": 1
        },
        {
          "matches": "[vid=\"float_window\"] > [vid=\"ivCancle\"][clickable=true]",
          "activityIds": ".app.mainframe.container.PBMainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14208669",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"cover-img\"] + [text=\"关闭推荐\"]",
          "activityIds": "cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12706022"
        },
        {
          "matches": "[desc^=\"活动图片\"] + [vid=\"ivCancle\"][desc=\"关闭\"]",
          "activityIds": "com.pb.marketing.PopupWindowActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14208693"
        },
        {
          "matches": "[id=\"cover-img\"] + [text=\"关闭推荐\"]",
          "activityIds": ".app.h5container.webviewcontainer.PBWebContainerActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12706022"
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] - * > [text*=\"开启\"][text*=\"定位\"]",
          "activityIds": [
            ".app.h5container.webviewcontainer.PBWebContainerActivity",
            ".app.search.PBSearchWebActivity",
            "com.pb.marketing.PopupWindowActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13248893",
            "https://i.gkd.li/i/13897345",
            "https://i.gkd.li/i/14208717"
          ],
          "key": 0
        },
        {
          "matches": "@[desc=\"关闭\"] - * > [text*=\"开启\"][text*=\"定位\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"cover-img\"] + [text=\"关闭推荐\"]",
          "activityIds": "cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12706022"
        },
        {
          "matches": "[desc^=\"活动图片\"] + [desc=\"关闭\"]",
          "activityIds": "com.pb.marketing.PopupWindowActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14208693"
        }
      ]
    },
    {
      "name": "全屏广告-朝朝宝弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"cover-img\"] + [text=\"关闭推荐\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-定位提示-请求定位权限弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "@[id=\"cmb.pb:id/ivDelete\"][desc=\"关闭\"] - FrameLayout > [id=\"cmb.pb:id/tvDescription\"][text*=\"获取您的位置\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "朝朝宝-广告弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"cover-img\"] + [text=\"关闭推荐\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "定位提示-请求定位权限弹窗",
      "enable": false,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "@[id=\"cmb.pb:id/ivDelete\"][desc=\"关闭\"] - FrameLayout > [id=\"cmb.pb:id/tvDescription\"][text*=\"获取您的位置\"]",
          "key": 0
        }
      ]
    }
  ]
});
