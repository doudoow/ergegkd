// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "虎牙直播",
  "id": "com.duowan.kiwi",
  "groups": [
    {
      "name": "局部广告-直播间悬浮广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.duowan.kiwi:id/ad_close\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12901045",
            "https://i.gkd.li/i/12901044"
          ]
        },
        {
          "matches": "[id=\"com.duowan.kiwi:id/game_header_close\"]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13395604",
            "https://i.gkd.li/i/13395606"
          ]
        },
        {
          "matches": "[id=\"com.duowan.kiwi:id/popup_banner\"] >2 [id=\"com.duowan.kiwi:id/ui_count_down\"]",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13417245"
          ]
        },
        {
          "matches": "@ViewGroup[clickable=true][visibleToUser=true] <2 ViewGroup < FrameLayout <2 FrameLayout < [id=\"com.duowan.kiwi:id/miniapp_content_container\"]",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13401266"
        },
        {
          "matches": "[id=\"com.duowan.kiwi:id/popup_banner\"] >2 [id=\"com.duowan.kiwi:id/ui_count_down\"]",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/13417245"
          ]
        },
        {
          "matches": "[id=\"com.duowan.kiwi:id/miniapp_content_container\"] FrameLayout > ViewGroup[childCount=2] > @ViewGroup[clickable=true] > ImageView",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/13401266"
        },
        {
          "matches": "[vid=\"ad_close\"]",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/12901045",
            "https://i.gkd.li/i/12901044"
          ]
        },
        {
          "matches": "[vid=\"game_header_close\"]",
          "fastQuery": true,
          "key": 7,
          "snapshotUrls": [
            "https://i.gkd.li/i/13395604",
            "https://i.gkd.li/i/13395606"
          ]
        },
        {
          "matches": "[vid=\"popup_banner\"] >2 [vid=\"ui_count_down\"]",
          "fastQuery": true,
          "key": 8,
          "snapshotUrls": [
            "https://i.gkd.li/i/13417245"
          ]
        },
        {
          "matches": "@ViewGroup[clickable=true][visibleToUser=true] <2 ViewGroup < FrameLayout <2 FrameLayout < [vid=\"miniapp_content_container\"]",
          "fastQuery": true,
          "key": 9,
          "snapshotUrls": "https://i.gkd.li/i/13401266"
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.duowan.kiwi:id/upgrade_cancel\"]",
          "activityIds": ".homepage.Homepage",
          "snapshotUrls": "https://i.gkd.li/i/13440833",
          "key": 0
        },
        {
          "matches": "@ImageView[id=\"com.duowan.kiwi:id/upgrade_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/13440833",
          "key": 1
        },
        {
          "matches": "@ImageView[vid=\"upgrade_cancel\"]",
          "activityIds": ".homepage.Homepage",
          "snapshotUrls": "https://i.gkd.li/i/13440833",
          "key": 2
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
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.duowan.kiwi:id/animation_view\"] + [id=\"com.duowan.kiwi:id/v_close\"]",
          "activityIds": ".homepage.Homepage",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13625453"
        },
        {
          "matches": "[vid=\"animation_view\"] + [vid=\"v_close\"]",
          "activityIds": ".homepage.Homepage",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13625453"
        },
        {
          "matches": "[id=\"com.duowan.kiwi:id/animation_view\"] + [id=\"com.duowan.kiwi:id/v_close\"]",
          "activityIds": "com.duowan.kiwi.homepage.Homepage",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13625453"
        }
      ]
    },
    {
      "name": "其他-root提示",
      "desc": "点击确认",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text^=\"您的设备已经被ROOT\"] + LinearLayout [text=\"确认\"]",
          "activityIds": ".homepage.Homepage",
          "snapshotUrls": "https://i.gkd.li/i/13536744",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.duowan.kiwi:id/animation_view\"] + [id=\"com.duowan.kiwi:id/v_close\"]",
          "activityIds": "com.duowan.kiwi.homepage.Homepage",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13625453"
        }
      ]
    },
    {
      "name": "功能类-root提示",
      "desc": "您的设备已经被ROOT",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[text^=\"您的设备已经被ROOT\"] + LinearLayout [text=\"确认\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "开屏广告",
      "desc": "广告画面先出现,但节点最后才加载,故触发慢实属正常",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "forcedTime": 10000,
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 6,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/30792623",
            "https://i.gkd.li/i/30792625"
          ]
        },
        {
          "matches": "[visibleToUser=true][text*=\"跳过\"][text.length<10]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/30793734",
            "https://i.gkd.li/i/30794399"
          ]
        }
      ]
    },
    {
      "name": "通知提示-root提示",
      "desc": "点击确认",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[text^=\"您的设备已经被ROOT\"] + LinearLayout [text=\"确认\"]",
          "activityIds": ".homepage.Homepage",
          "snapshotUrls": "https://i.gkd.li/i/13536744",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.duowan.kiwi:id/hyui_dialog_button_positive\"][text=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-root提示",
      "desc": "您的设备已经被ROOT",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "[text^=\"您的设备已经被ROOT\"] + LinearLayout [text=\"确认\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "quickFind": true,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.duowan.kiwi:id/hyui_dialog_button_positive\"][text=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "直播间悬浮广告",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.duowan.kiwi:id/ad_close\"]",
          "quickFind": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12901045",
            "https://i.gkd.li/import/12901044"
          ]
        },
        {
          "matches": "[id=\"com.duowan.kiwi:id/game_header_close\"]",
          "quickFind": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/13395604",
            "https://i.gkd.li/import/13395606"
          ]
        },
        {
          "matches": "[id=\"com.duowan.kiwi:id/popup_banner\"] >2 [id=\"com.duowan.kiwi:id/ui_count_down\"]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/13417245"
          ]
        },
        {
          "matches": "[id=\"com.duowan.kiwi:id/miniapp_content_container\"] FrameLayout > ViewGroup[childCount=2] > @ViewGroup[clickable=true] > ImageView",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/13401266"
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 12,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.duowan.kiwi:id/upgrade_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/import/13440833",
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
          "matches": "[id=\"com.duowan.kiwi:id/animation_view\"] + [id=\"com.duowan.kiwi:id/v_close\"]",
          "activityIds": "com.duowan.kiwi.homepage.Homepage",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13625453"
        }
      ]
    },
    {
      "name": "root提示",
      "desc": "您的设备已经被ROOT",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 14,
      "rules": [
        {
          "matches": "[text^=\"您的设备已经被ROOT\"] + LinearLayout [text=\"确认\"]",
          "key": 0
        }
      ]
    }
  ]
});
