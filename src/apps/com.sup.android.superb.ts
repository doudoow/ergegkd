// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "皮皮虾",
  "id": "com.sup.android.superb",
  "groups": [
    {
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text$=\"青少年模式\"] + [text=\"我知道了\"]",
          "activityIds": "com.sup.superb.m_teenager.view.EnterTeenagerModeDialogActivity",
          "snapshotUrls": "https://i.gkd.li/i/13796869",
          "key": 0
        },
        {
          "matches": "[text$=\"青少年模式\"] + [text=\"我知道了\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"开启推送通知\"] +2 * > [text=\"以后再说\"]",
          "snapshotUrls": "https://i.gkd.li/i/13691081",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-右上角红包悬浮窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] < RelativeLayout[childCount=2] < FrameLayout - [id=\"com.sup.android.superb:id/tab_container\"]",
          "activityIds": "com.sup.android.base.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13624220",
          "key": 0
        },
        {
          "matches": "FrameLayout > RelativeLayout > @ImageView[clickable=true] + ImageView",
          "key": 1
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] < RelativeLayout[childCount=2] < FrameLayout - [vid=\"tab_container\"]",
          "activityIds": "com.sup.android.base.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13624220",
          "key": 2
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "点击[我再想想]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "order": -9,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"发现新版本\"] +2 * > [text=\"我再想想\"]",
          "snapshotUrls": "https://i.gkd.li/i/13858490",
          "key": 0
        }
      ]
    },
    {
      "name": "评价提示",
      "desc": "点击取消",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text^=\"喜欢皮皮虾吗\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": [
            "com.sup.android.base.MainActivity",
            "com.sup.android.base.praise.PraiseDialogActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14005608",
            "https://i.gkd.li/i/15285383"
          ],
          "key": 0
        },
        {
          "matches": [
            "[text^=\"喜欢皮皮虾吗\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/14005608",
            "https://i.gkd.li/i/15285383"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-集五福弹窗",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 5,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] <2 RelativeLayout[childCount=2] < [id=\"android:id/content\"]",
          "activityIds": "com.sup.android.base.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14151026",
          "exampleUrls": "https://m.gkd.li/57941037/246d1d0b-d493-4d40-bbb7-9c04ae6b457d",
          "key": 0
        },
        {
          "matches": "[id=\"com.sup.android.superb:id/afa\"]",
          "activityIds": "com.sup.android.base.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14151026",
          "exampleUrls": "https://m.gkd.li/57941037/246d1d0b-d493-4d40-bbb7-9c04ae6b457d",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击[关闭广告]",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[text=\"关闭广告\"][clickable=true]",
          "activityIds": "com.sup.android.base.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14471869",
          "exampleUrls": "https://m.gkd.li/57941037/af1e7624-540b-4646-b812-3b748966e903",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-信息流广告",
      "desc": "点击展开-点击[不感兴趣]",
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "RecyclerView > FrameLayout[id!=null] >4 FrameLayout[childCount=5] > ViewGroup[childCount=1] > @ImageView[clickable=true][childCount=0] <<n [vid=\"view_pager\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14886478"
        },
        {
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14886477"
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -10,
      "key": 8,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id=\"android:id/content\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14667409",
          "key": 0
        }
      ]
    },
    {
      "name": "综合广告-信息流广告",
      "desc": "伪装正常内容广告",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "@[text=\"关闭广告\"] + RelativeLayout > [text=\"立即下载\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14471889"
        },
        {
          "matches": "RecyclerView > FrameLayout[id!=null] >6 ImageView[clickable=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14886478"
        },
        {
          "matches": "@RelativeLayout > [text=\"不感兴趣\"]",
          "preKeys": 1,
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14886477"
        }
      ]
    },
    {
      "name": "全屏广告-请求开启通知权限弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "[text=\"开启推送通知\"] +2 * > [text=\"以后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 11,
      "rules": [
        {
          "matches": "[text$=\"青少年模式\"] + [text=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求开启通知权限弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 12,
      "rules": [
        {
          "matches": "[text=\"开启推送通知\"] +2 * > [text=\"以后再说\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "右上角红包悬浮窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 13,
      "rules": [
        {
          "matches": "FrameLayout > RelativeLayout > @ImageView[clickable=true] + ImageView",
          "key": 0
        }
      ]
    }
  ]
});
