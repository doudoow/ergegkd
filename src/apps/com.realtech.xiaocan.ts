// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小蚕霸王餐",
  "id": "com.realtech.xiaocan",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionCd": 300,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "View[childCount=3] > View + ImageView + ImageView[clickable=true][childCount=0]",
          "activityIds": "com.realtech.xiaocan.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13694864"
        },
        {
          "matches": "[vid=\"box_custom\"] >2 [vid=\"ivClose\"][clickable=true]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/31689742",
            "https://i.gkd.li/i/31689746"
          ]
        },
        {
          "matches": "View[childCount=3] > View + ImageView + ImageView[clickable=true][childCount=0]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13694864"
        }
      ]
    },
    {
      "name": "功能类-签到成功弹窗",
      "desc": "点击[关闭]按钮",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] >5 View[childCount=6] > ImageView[index=5][clickable=true]",
          "activityIds": "com.realtech.xiaocan.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14290847",
          "key": 0
        },
        {
          "matches": "View[childCount=6][desc!=\"\"] > View[index=4] + ImageView[index=5][clickable=true]",
          "key": 1
        },
        {
          "matches": "[id=\"android:id/content\"] >5 View[childCount=6] > ImageView[index=5][clickable=true]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14290847",
          "key": 2
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -10,
      "key": 2,
      "rules": [
        {
          "matches": "[text^=\"跳过\"][text.length<=10]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12843368",
            "https://i.gkd.li/i/13363222",
            "https://i.gkd.li/i/13363246"
          ]
        },
        {
          "matches": "@[id$=\"tt_splash_skip_btn\"] <<n [id=\"com.realtech.xiaocan:id/splash_ad_container\"]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12854728"
        },
        {
          "matches": "@View[visibleToUser=true][clickable=true] <n FrameLayout[childCount=4||childCount=3] <<n [id=\"com.realtech.xiaocan:id/splash_ad_container\"]",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13694858",
            "https://i.gkd.li/i/13794403"
          ]
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "View[childCount=3] > View + ImageView + ImageView[clickable=true][childCount=0]",
          "activityIds": "com.realtech.xiaocan.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13694864"
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "resetMatch": "app",
      "key": 4,
      "rules": [
        {
          "matches": "[desc=\"开启提醒\"] - ImageView[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-优惠券弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[desc*=\"今日最新红包已更新\"] > ImageView[index=4]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "desc": "底部横幅/全屏, 点击x掉",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[vid=\"location_layout\"] > [vid=\"iv_close\"][clickable=true]",
          "key": 0,
          "name": "横幅",
          "snapshotUrls": "https://i.gkd.li/i/31689754",
          "exampleUrls": "https://e.gkd.li/6dd4b544-85b4-455d-9f27-0b83a95305de"
        },
        {
          "matches": "[vid=\"tvTitle\"] + [vid=\"tvMessage\"][text^=\"APP需要您的同意\"][text*=\"访问您的位置\"] + [childCount=2] > [vid=\"tvNegative\"][clickable=true]",
          "key": 1,
          "name": "全屏弹窗",
          "snapshotUrls": "https://i.gkd.li/i/33924001",
          "exampleUrls": "https://e.gkd.li/a068a642-d226-43f5-8eb7-43e6351e0d24"
        }
      ]
    },
    {
      "name": "其他-点击1次[只看可抢]",
      "key": 7,
      "rules": [
        {
          "matches": "@[vid=\"switchBtn\"] - [text=\"只看可抢\"][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/31689754",
          "exampleUrls": "https://e.gkd.li/d856c10c-b772-423a-a740-73be7cc7e091",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "View[childCount=3] > View + ImageView + ImageView[clickable=true][childCount=0]",
          "activityIds": "com.realtech.xiaocan.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13694864"
        }
      ]
    }
  ]
});
