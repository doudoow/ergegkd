// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "航旅纵横",
  "id": "com.umetrip.android.msky.app",
  "groups": [
    {
      "name": "其他-进入飞行模式-提示弹窗",
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.umetrip.android.msky.app:id/imageView\"] + [id=\"com.umetrip.android.msky.app:id/iv_cancel\"]",
          "activityIds": "com.umetrip.android.msky.homepage.activity.UmeHomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/12750185",
          "key": 0
        },
        {
          "matches": "[vid=\"imageView\"] + [vid=\"iv_cancel\"]",
          "activityIds": "com.umetrip.android.msky.homepage.activity.UmeHomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/12750185",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-首页右侧悬浮广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[id=\"com.umetrip.android.msky.app:id/iv_close_envelope\"] + [id=\"com.umetrip.android.msky.app:id/media_view_envelope\"]",
          "activityIds": "com.umetrip.android.msky.homepage.activity.UmeHomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/12783264",
          "key": 0
        },
        {
          "matches": "@[vid=\"iv_close_envelope\"] + [vid=\"media_view_envelope\"]",
          "activityIds": "com.umetrip.android.msky.homepage.activity.UmeHomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/12783264",
          "key": 1
        },
        {
          "matches": "@[id=\"com.umetrip.android.msky.app:id/iv_close_envelope\"] + [id=\"com.umetrip.android.msky.app:id/media_view_envelope\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告",
      "desc": "关闭各类全屏弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][childCount=0][visibleToUser=true][width=height] < FrameLayout <2 FrameLayout <3 FrameLayout < [vid=\"operation_dialog_weex_view\"]",
          "actionMaximum": 1,
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/24706615",
          "key": 0
        },
        {
          "matches": "View[desc=\"立即预订\"] <n FrameLayout <n FrameLayout <n FrameLayout <n ViewPager <n FrameLayout + FrameLayout > ImageView[id=null]",
          "activityIds": "com.ume.lib_weex.view.WeexActivity",
          "fastQuery": true,
          "key": 1,
          "name": "全屏广告-酒店-弹窗广告",
          "snapshotUrls": "https://i.gkd.li/import/12909632"
        }
      ]
    },
    {
      "name": "未分类-酒店-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "View[desc=\"立即预订\"] <n FrameLayout <n FrameLayout <n FrameLayout <n ViewPager <n FrameLayout + FrameLayout > ImageView[id=null]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-首页-升级提示",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@[id=\"com.umetrip.android.msky.app:id/iv_cancel\"] - * > [id=\"com.umetrip.android.msky.app:id/btn_upgrade\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-进入飞行模式-提示弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.umetrip.android.msky.app:id/imageView\"] + [id=\"com.umetrip.android.msky.app:id/iv_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-首页右侧悬浮广告",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "@[id=\"com.umetrip.android.msky.app:id/iv_close_envelope\"] + [id=\"com.umetrip.android.msky.app:id/media_view_envelope\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-进入飞行模式-提示弹窗",
      "desc": "关闭进入飞行模式时的提示弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.umetrip.android.msky.app:id/imageView\"] + [id=\"com.umetrip.android.msky.app:id/iv_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页广告",
      "desc": "关闭首页的局部广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "@[id=\"com.umetrip.android.msky.app:id/iv_close_envelope\"] + [id=\"com.umetrip.android.msky.app:id/media_view_envelope\"]",
          "activityIds": "com.umetrip.android.msky.homepage.activity.UmeHomeActivity",
          "fastQuery": true,
          "key": 0,
          "name": "右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/import/12783264"
        },
        {
          "matches": "[vid=\"iv_bottomOperateClose\"]",
          "activityIds": "com.umetrip.android.msky.homepage.activity.UmeHomeActivity",
          "fastQuery": true,
          "key": 1,
          "name": "底部横幅广告",
          "snapshotUrls": "https://i.gkd.li/i/18702163"
        }
      ]
    },
    {
      "name": "全屏广告-酒店-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "View[desc=\"立即预订\"] <n FrameLayout <n FrameLayout <n FrameLayout <n ViewPager <n FrameLayout + FrameLayout > ImageView[id=null]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示-首页-升级提示",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "@[id=\"com.umetrip.android.msky.app:id/iv_cancel\"] - * > [id=\"com.umetrip.android.msky.app:id/btn_upgrade\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-进入飞行模式-提示弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.umetrip.android.msky.app:id/imageView\"] + [id=\"com.umetrip.android.msky.app:id/iv_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "酒店-弹窗广告",
      "enable": false,
      "quickFind": true,
      "key": 12,
      "rules": [
        {
          "matches": "View[desc=\"立即预订\"] <n FrameLayout <n FrameLayout <n FrameLayout <n ViewPager <n FrameLayout + FrameLayout > ImageView[id=null]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-升级提示",
      "enable": false,
      "quickFind": true,
      "key": 13,
      "rules": [
        {
          "matches": "@[id=\"com.umetrip.android.msky.app:id/iv_cancel\"] - * > [id=\"com.umetrip.android.msky.app:id/btn_upgrade\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "进入飞行模式-提示弹窗",
      "enable": false,
      "quickFind": true,
      "key": 14,
      "rules": [
        {
          "matches": "[id=\"com.umetrip.android.msky.app:id/imageView\"] + [id=\"com.umetrip.android.msky.app:id/iv_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页右侧悬浮广告",
      "enable": false,
      "quickFind": true,
      "key": 15,
      "rules": [
        {
          "matches": "@[id=\"com.umetrip.android.msky.app:id/iv_close_envelope\"] + [id=\"com.umetrip.android.msky.app:id/media_view_envelope\"]",
          "key": 0
        }
      ]
    }
  ]
});
