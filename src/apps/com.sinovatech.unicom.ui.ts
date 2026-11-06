// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "中国联通",
  "id": "com.sinovatech.unicom.ui",
  "groups": [
    {
      "name": "权限提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"去开启\"] - [vid=\"custom_dialog_cancel_button\"]",
          "activityIds": [
            "com.sinovatech.unicom.basic.ui.activity.MainActivity",
            "com.sinovatech.unicom.basic.ui.activity.WelcomeClient"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13331268",
            "https://i.gkd.li/i/14751210"
          ],
          "key": 0
        },
        {
          "matches": "[text=\"去开启\"] - [vid=\"custom_dialog_cancel_button\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "关闭应用内的更新弹窗提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.sinovatech.unicom.ui:id/custom_dialog_cancel_button\"]",
          "activityIds": "com.sinovatech.unicom.basic.ui.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13511386",
          "key": 0
        },
        {
          "matches": "[id=\"com.sinovatech.unicom.ui:id/custom_dialog_cancel_button\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"custom_dialog_cancel_button\"]",
          "activityIds": "com.sinovatech.unicom.basic.ui.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13511386",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "关闭各页面的全屏广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"首页弹窗\"] >2 View > @Image[clickable=true][text!=null] <<n [vid=\"main_fragment_layout\"]",
          "activityIds": "com.sinovatech.unicom.basic.ui.activity.MainActivity",
          "forcedTime": 10000,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14504242"
        },
        {
          "matches": "WebView[text!=null] > View[id=\"app\"] >2 View[childCount>3] > View[childCount=1] > @TextView[childCount=0][visibleToUser=true][text=\"\"][width<150&&height<150] <<n [vid=\"main_fragment_layout\" || vid=\"main_fragment_layout_haoka\"]",
          "activityIds": "com.sinovatech.unicom.basic.ui.activity.MainActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/15971964",
            "https://i.gkd.li/i/18290899"
          ]
        },
        {
          "matches": "@Image[text^=\"close\"][childCount=0][width<150 && height<150] <2 View < View <2 View < View < View <2 View < View < WebView < WebView < [vid=\"homeweb_rootview\"]",
          "activityIds": "com.sinovatech.unicom.basic.ui.activity.MainActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/23764750"
        },
        {
          "matches": "[text=\"首页弹窗\"] >n View + TextView + Image[clickable=true]",
          "activityIds": "com.sinovatech.unicom.basic.ui.activity.MainActivity",
          "forcedTime": 10000,
          "key": 3,
          "name": "首页弹窗",
          "snapshotUrls": "https://i.gkd.li/i/13761130"
        },
        {
          "matches": "[text=\"首页弹窗\"] >2 View > @Image[clickable=true][text!=null] <<n [vid=\"main_fragment_layout\"]",
          "actionMaximum": 1,
          "activityIds": "com.sinovatech.unicom.basic.ui.activity.MainActivity",
          "matchTime": 10000,
          "forcedTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 4,
          "name": "首页弹窗1",
          "snapshotUrls": "https://i.gkd.li/i/14504242"
        },
        {
          "matches": "WebView[text!=null] > View[id=\"app\"] >2 View[childCount>3] > View[childCount=1] > @TextView[childCount=0][visibleToUser=true][text=\"\"][width<150&&height<150] <<n [vid=\"main_fragment_layout\" || vid=\"main_fragment_layout_haoka\"]",
          "actionMaximum": 1,
          "activityIds": "com.sinovatech.unicom.basic.ui.activity.MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 5,
          "name": "首页弹窗2",
          "snapshotUrls": [
            "https://i.gkd.li/i/15971964",
            "https://i.gkd.li/i/18290899"
          ]
        },
        {
          "matches": "@Image[text^=\"close\"][childCount=0][width<150 && height<150] <2 View < View <2 View < View < View <2 View < View < WebView < WebView < [vid=\"homeweb_rootview\"]",
          "actionMaximum": 1,
          "activityIds": "com.sinovatech.unicom.basic.ui.activity.MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 6,
          "name": "首页弹窗3",
          "snapshotUrls": "https://i.gkd.li/i/23764750"
        },
        {
          "matches": "@TextView[index=parent.childCount.minus(1)][width<78 && height<78] <n View[left=0 && top=0] <n View[left=0 && top=0] <<3 WebView - [vid=\"toutiao_webview_xinxiliu_layout\"]",
          "actionMaximum": 1,
          "activityIds": "com.sinovatech.unicom.basic.ui.activity.WebDetailActivity",
          "fastQuery": true,
          "resetMatch": "app",
          "key": 7,
          "name": "全屏广告-剩余话费弹窗广告",
          "snapshotUrls": "https://i.gkd.li/i/28557416"
        }
      ]
    },
    {
      "name": "局部广告-首页右下角卡片悬浮窗",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"home_xuanfu_close\" || vid=\"home_drag_view_close\"]",
          "activityIds": "com.sinovatech.unicom.basic.ui.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13930543",
            "https://i.gkd.li/i/23141106"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.sinovatech.unicom.ui:id/home_xuanfu_close\"]",
          "activityIds": "com.sinovatech.unicom.basic.ui.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13930543",
          "key": 1
        },
        {
          "matches": "[id=\"com.sinovatech.unicom.ui:id/home_xuanfu_close\"]",
          "activityIds": "com.sinovatech.unicom.basic.ui.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13930543",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"首页弹窗\"] >2 View > @Image[clickable=true][text!=null] <<n [vid=\"main_fragment_layout\"]",
          "activityIds": "com.sinovatech.unicom.basic.ui.activity.MainActivity",
          "forcedTime": 10000,
          "key": 0,
          "name": "首页弹窗1",
          "snapshotUrls": "https://i.gkd.li/i/14504242"
        },
        {
          "matches": "WebView[text!=null] > View[id=\"app\"] >2 View[childCount>3] > View[childCount=1] > @TextView[childCount=0][visibleToUser=true][text=\"\"][width<150&&height<150] <<n [vid=\"main_fragment_layout\" || vid=\"main_fragment_layout_haoka\"]",
          "activityIds": "com.sinovatech.unicom.basic.ui.activity.MainActivity",
          "key": 1,
          "name": "首页弹窗2",
          "snapshotUrls": [
            "https://i.gkd.li/i/15971964",
            "https://i.gkd.li/i/18290899"
          ]
        },
        {
          "matches": "@Image[text^=\"close\"][childCount=0][width<150 && height<150] <2 View < View <2 View < View < View <2 View < View < WebView < WebView < [vid=\"homeweb_rootview\"]",
          "activityIds": "com.sinovatech.unicom.basic.ui.activity.MainActivity",
          "key": 2,
          "name": "首页弹窗3",
          "snapshotUrls": "https://i.gkd.li/i/23764750"
        }
      ]
    },
    {
      "name": "全屏广告-剩余话费弹窗广告",
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 5,
      "rules": [
        {
          "matches": "@TextView[index=parent.childCount.minus(1)][width<78 && height<78] <n View[left=0 && top=0] <n View[left=0 && top=0] <<3 WebView - [vid=\"toutiao_webview_xinxiliu_layout\"]",
          "activityIds": "com.sinovatech.unicom.basic.ui.activity.WebDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28557416",
          "exampleUrls": "https://e.gkd.li/521e50a7-1756-4572-b06a-a42d9ec700c4",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-权限申请",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[text=\"去开启\"] - [id=\"com.sinovatech.unicom.ui:id/custom_dialog_cancel_button\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限申请",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"去开启\"] - [id=\"com.sinovatech.unicom.ui:id/custom_dialog_cancel_button\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.sinovatech.unicom.ui:id/custom_dialog_cancel_button\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[text=\"首页弹窗\"] >n View + TextView + Image[clickable=true]",
          "activityIds": "com.sinovatech.unicom.basic.ui.activity.MainActivity",
          "key": 0,
          "name": "首页弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13761130"
        }
      ]
    }
  ]
});
