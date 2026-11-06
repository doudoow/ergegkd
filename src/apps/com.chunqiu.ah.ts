// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "AH视频",
  "id": "com.chunqiu.ah",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text^=\"跳过\"][text.length<10]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13264387",
            "https://i.gkd.li/i/13264381"
          ]
        },
        {
          "matches": "@ImageView - [text=\"|\"]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13264377"
        },
        {
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/15258457"
        },
        {
          "matches": "[text^=\"跳过\"][text.length<10]",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13264387",
            "https://i.gkd.li/i/13264381"
          ]
        },
        {
          "matches": "@ImageView - [text=\"|\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/13264377"
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id=\"android:id/content\"]",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/15258457"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.androlua.LuaActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13264383",
            "https://i.gkd.li/i/13852448"
          ]
        },
        {
          "matches": "[text=\"反馈\"] -4 @View[visibleToUser=true] > Image[childCount=0]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15258557"
        },
        {
          "matches": "[text=\"我已知晓\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.androlua.LuaActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13852430"
        },
        {
          "matches": "[id=\"android:id/content\"] >(3,4) FrameLayout[childCount>3] > FrameLayout[childCount=1] > ImageView",
          "activityIds": "com.androlua.LuaActivity",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13264383",
            "https://i.gkd.li/i/13852448"
          ]
        },
        {
          "matches": "@FrameLayout - FrameLayout >2 [text=\"京东\"]",
          "snapshotUrls": "https://i.gkd.li/import/13264383",
          "key": 4
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@FrameLayout[childCount=1] <3 FrameLayout[childCount=3] +2 * >2 [text=\"了解更多\"]",
          "activityIds": "com.androlua.LuaActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13635499"
        },
        {
          "matches": "@TextView[visibleToUser=true][childCount=0] - View >4 [text=\"立即下载\"]",
          "activityIds": "com.androlua.LuaActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13852535",
            "https://i.gkd.li/i/15258570",
            "https://i.gkd.li/i/15258575"
          ]
        },
        {
          "matches": "WebView >3 View[childCount=6] > @View[visibleToUser=true] > Image[childCount=0]",
          "activityIds": "com.androlua.LuaActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/15258500"
        },
        {
          "matches": "[id=\"android:id/content\"] FrameLayout[childCount<=5] > FrameLayout[childCount=1] > ImageView[visibleToUser=true][index=0]",
          "activityIds": "com.androlua.LuaActivity",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13852695",
            "https://i.gkd.li/i/13852670",
            "https://i.gkd.li/i/13852669"
          ]
        }
      ]
    },
    {
      "name": "通知提示-公告弹窗",
      "desc": "点击[不再提示]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"不再提示\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.androlua.LuaActivity",
          "snapshotUrls": "https://i.gkd.li/i/13852447",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "ImageView < FrameLayout -2 FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.androlua.LuaActivity",
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/import/13635499"
        }
      ]
    },
    {
      "name": "全屏广告-首页推广",
      "desc": "点击我已知晓",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.chunqiu.ah:id/buttonPanel\"] [text=\"我已知晓\"][id=\"android:id/button2\"]",
          "activityIds": "com.androlua.LuaActivity",
          "snapshotUrls": "https://i.gkd.li/import/13852430",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-公告",
      "desc": "点击不再提示",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.chunqiu.ah:id/buttonPanel\"] [text=\"不再提示\"]",
          "activityIds": "com.androlua.LuaActivity",
          "snapshotUrls": "https://i.gkd.li/import/13852447",
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
      "key": 7,
      "rules": [
        {
          "matches": "@ImageView[visibleToUser=true] < * +3 * > [text=\"查看详情\"]",
          "activityIds": "com.androlua.LuaActivity",
          "snapshotUrls": "https://i.gkd.li/import/13852448",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-播放界面广告",
      "desc": "点击X",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.chunqiu.ah:id/ksad_container\"] >n View[id=\"logoBox\"] > TextView[clickable=true]",
          "activityIds": "com.androlua.LuaActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13852535"
        },
        {
          "matches": "[id=\"android:id/content\"] FrameLayout[childCount<=5] > FrameLayout[childCount=1] > ImageView[visibleToUser=true][index=0]",
          "activityIds": "com.androlua.LuaActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/13852695",
            "https://i.gkd.li/import/13852670",
            "https://i.gkd.li/import/13852669"
          ]
        }
      ]
    }
  ]
});
