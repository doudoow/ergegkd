// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小米商城",
  "id": "com.xiaomi.shop",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][childCount=0][visibleToUser=true] <2 LinearLayout[childCount=2] < RelativeLayout < [id=\"android:id/content\"]",
          "activityIds": [
            "com.xiaomi.shop2.activity.MainActivity",
            "com.xiaomi.shop.plugin.homepage.utils.AdDialog"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12649330",
            "https://i.gkd.li/i/14393039"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][childCount=0][visibleToUser=true] <2 FrameLayout[childCount=2] < [id=\"android:id/content\"]",
          "activityIds": "com.xiaomi.shop2.activity.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/22550140"
        },
        {
          "matches": "[id=\"android:id/content\"] > RelativeLayout > LinearLayout[childCount=2] > ImageView[index=1][clickable=true]",
          "key": 2
        },
        {
          "matches": "@ImageView[clickable=true][childCount=0][visibleToUser=true] <2 LinearLayout[childCount=2] < RelativeLayout < [id=\"android:id/content\"]",
          "activityIds": [
            "com.xiaomi.shop2.activity.MainActivity",
            ".plugin.homepage.utils.AdDialog"
          ],
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/12649330",
            "https://i.gkd.li/i/14393039"
          ]
        },
        {
          "matches": "[id=\"android:id/content\"] > RelativeLayout > LinearLayout[childCount=2] > ImageView[index=1][clickable=true]",
          "activityIds": [
            "com.xiaomi.shop2.activity.MainActivity",
            "com.xiaomi.shop.plugin.homepage.utils.AdDialog"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/12649330",
            "https://i.gkd.li/i/14393039"
          ]
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.xiaomi.shop.plugin.homepage:id/home_bottom_float_close_btn\"]",
          "activityIds": "com.xiaomi.shop2.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/15528092",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@LinearLayout[childCount=0] < [id=\"android:id/content\"][childCount=1] < [vid=\"action_bar_root\"]",
          "position": {
            "left": "width * 0.3509",
            "top": "width * 1.4046"
          },
          "activityIds": ".lib.ForceUpdateActivity",
          "snapshotUrls": "https://i.gkd.li/i/19547338",
          "key": 0
        }
      ]
    },
    {
      "name": "评价提示-客服",
      "key": 3,
      "rules": [
        {
          "matches": "ImageView < @ViewGroup[clickable=true] - [text^=\"请对\"][text$=\"进行评价\"]",
          "activityIds": "com.xiaomi.miot.store.mirn.RNMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23206873",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页弹窗广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "LinearLayout[childCount=2] > ImageView[id=null] + ImageView[id=null][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页弹窗广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "LinearLayout[childCount=2] > ImageView[id=null] + ImageView[id=null][clickable=true]",
          "key": 0
        }
      ]
    }
  ]
});
