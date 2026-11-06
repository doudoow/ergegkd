// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "大众点评",
  "id": "com.dianping.v1",
  "groups": [
    {
      "name": "全屏广告-主页推荐关注弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "FrameLayout[id=\"android:id/content\"] >2 FrameLayout > ImageView + FrameLayout[id=null][desc=\"关闭\"][clickable=true]",
          "activityIds": "com.dianping.main.guide.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/12727011",
          "key": 0
        },
        {
          "matches": "FrameLayout[id=\"android:id/content\"] >2 FrameLayout > ImageView + FrameLayout[id=null][desc=\"关闭\"][clickable=true]",
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
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"去开启\"][clickable=true] +2 @FrameLayout[clickable=true] > ImageView",
          "action": "clickCenter",
          "snapshotUrls": "https://i.gkd.li/i/12727070",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-关闭[签到开红包]",
      "desc": "点击右下角悬浮图片右上角的x图标",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.dianping.v1:id/float_image\"] + [id=\"com.dianping.v1:id/close\"][clickable=true]",
          "key": 0
        },
        {
          "matches": "[vid=\"float_image\"] + [vid=\"close\"][clickable=true]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.dianping.v1:id/operate_cross_icon\"]",
          "activityIds": "com.dianping.v1.NovaMainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13538340"
        },
        {
          "matches": "[vid=\"operate_cross_icon\"]",
          "activityIds": ".NovaMainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13538340"
        }
      ]
    },
    {
      "name": "分段广告-推荐页卡片广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@[desc=\"reculike_delete\"][clickable=true][visibleToUser=true] +3 [childCount=2]",
          "activityIds": "com.dianping.v1.NovaMainActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13759369",
            "https://i.gkd.li/i/14332054"
          ]
        },
        {
          "matches": "@[clickable=true] > [text=\"重复出现\"]",
          "action": "clickCenter",
          "preKeys": [
            3
          ],
          "activityIds": "com.dianping.v1.NovaMainActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14238381",
            "https://i.gkd.li/i/14269115"
          ]
        },
        {
          "matches": "[text$=\"重复出现\"][clickable=true]",
          "preKeys": [
            3
          ],
          "activityIds": "com.dianping.v1.NovaMainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14393256",
          "exampleUrls": "https://m.gkd.li/57941037/010c0314-e89b-468f-8143-691925a308a6"
        },
        {
          "matches": "@[desc=\"reculike_delete\"][clickable=true][visibleToUser=true] +3 [childCount=2]",
          "activityIds": ".NovaMainActivity",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13759369",
            "https://i.gkd.li/i/14332054"
          ]
        },
        {
          "matches": "@[clickable=true] > [text=\"重复出现\"]",
          "action": "clickCenter",
          "preKeys": [
            3
          ],
          "activityIds": ".NovaMainActivity",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/14238381",
            "https://i.gkd.li/i/14269115"
          ]
        },
        {
          "matches": "[text$=\"重复出现\"][clickable=true]",
          "preKeys": [
            3
          ],
          "activityIds": ".NovaMainActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/14393256",
          "exampleUrls": "https://m.gkd.li/57941037/010c0314-e89b-468f-8143-691925a308a6"
        },
        {
          "matches": "@[clickable=true] > [text=\"重复出现\"]",
          "action": "clickCenter",
          "preKeys": 0,
          "activityIds": "com.dianping.v1.NovaMainActivity",
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/14238381",
            "https://i.gkd.li/i/14269115"
          ]
        },
        {
          "matches": "[text$=\"重复出现\"][clickable=true]",
          "preKeys": 0,
          "activityIds": "com.dianping.v1.NovaMainActivity",
          "fastQuery": true,
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/14393256",
          "exampleUrls": "https://m.gkd.li/57941037/010c0314-e89b-468f-8143-691925a308a6"
        }
      ]
    },
    {
      "name": "功能类-选择地图时自动点击[更多]",
      "key": 5,
      "rules": [
        {
          "matches": [
            "[text=\"请选择地图\"][visibleToUser=true]",
            "@[clickable=true] > [text^=\"更多\"][visibleToUser=true]"
          ],
          "activityIds": "com.dianping.nova.picasso.DPPicassoBoxActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23289239",
          "exampleUrls": "https://e.gkd.li/ce751918-dab2-4670-a608-9edbcb3bdc0e",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-消息页上方开启系统通知提醒",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 6,
      "rules": [
        {
          "matches": "[text=\"去开启\"][clickable=true] +2 @FrameLayout[clickable=true] > ImageView",
          "action": "clickCenter",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-推荐页卡片式广告",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "@[desc=\"reculike_delete\"][clickable=true][visibleToUser=true] +3 [childCount=2]",
          "activityIds": "com.dianping.v1.NovaMainActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13759369",
            "https://i.gkd.li/i/14332054"
          ]
        },
        {
          "matches": "[text*=\"重复出现\"]",
          "action": "clickCenter",
          "activityIds": "com.dianping.v1.NovaMainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14238381",
            "https://i.gkd.li/i/14269115",
            "https://i.gkd.li/i/14393253"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-消息页上方开启系统通知提醒",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[text=\"去开启\"][clickable=true] +2 @FrameLayout[clickable=true] > ImageView",
          "action": "clickCenter",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[desc=\"reculike_delete\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.dianping.v1.NovaMainActivity",
          "key": 0,
          "name": "推荐页卡片广告",
          "snapshotUrls": "https://i.gkd.li/import/13759369"
        }
      ]
    },
    {
      "name": "主页推荐关注弹窗",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "FrameLayout[id=\"android:id/content\"] >2 FrameLayout > ImageView + FrameLayout[id=null][desc=\"关闭\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "消息页上方开启系统通知提醒",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "[text=\"去开启\"][clickable=true] +2 @FrameLayout[clickable=true] > ImageView",
          "action": "clickCenter",
          "key": 0
        }
      ]
    },
    {
      "name": "关闭[签到开红包]",
      "desc": "点击右下角悬浮图片右上角的x图标",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"com.dianping.v1:id/float_image\"] + [id=\"com.dianping.v1:id/close\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "[id=\"com.dianping.v1:id/operate_cross_icon\"]",
          "activityIds": "com.dianping.v1.NovaMainActivity",
          "quickFind": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13538340"
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "[desc=\"reculike_delete\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.dianping.v1.NovaMainActivity",
          "key": 0,
          "name": "推荐页卡片广告",
          "snapshotUrls": "https://i.gkd.li/import/13759369"
        }
      ]
    }
  ]
});
