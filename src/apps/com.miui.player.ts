// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小米音乐",
  "id": "com.miui.player",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "action": "clickCenter",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25094542",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/free_mode_tips_layout\"] + [id=\"com.miui.player:id/iv_close\"]",
          "activityIds": "com.tencent.qqmusiclite.activity.player.MusicPlayerActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13303283"
        },
        {
          "matches": "[id=\"com.miui.player:id/cl_floating_promote\"] > [id=\"com.miui.player:id/iv_close\"]",
          "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13562649"
        },
        {
          "matches": "[vid=\"free_mode_tips_layout\"] + [vid=\"iv_close\"]",
          "activityIds": "com.tencent.qqmusiclite.activity.player.MusicPlayerActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13303283"
        },
        {
          "matches": "[vid=\"cl_floating_promote\"] > [vid=\"iv_close\"]",
          "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13562649"
        }
      ]
    },
    {
      "name": "局部广告-横幅广告",
      "desc": "关闭播放页面横幅广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/ad_skip_text\"][text=\"关闭\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13304347",
            "https://i.gkd.li/i/13304344"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/d923ba1b-3098-49b0-8593-c84dbaa16612"
        },
        {
          "matches": "[text=\"广告｜跳过\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14711960",
          "exampleUrls": "https://m.gkd.li/57941037/2ae1ca24-fb50-48ff-9343-e5607b512127"
        },
        {
          "matches": "[vid=\"ad_skip_text\"][text=\"关闭\"]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13304347",
            "https://i.gkd.li/i/13304344"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/d923ba1b-3098-49b0-8593-c84dbaa16612"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "@ViewGroup[clickable=true][childCount=0][visibleToUser=true] < ViewGroup[childCount=1] < ViewGroup[childCount=2] < FrameLayout < FrameLayout < [vid=\"webview_container\"]",
          "activityIds": "com.tencent.qqmusiccommon.hybrid.HybridViewActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/17783777",
          "exampleUrls": "https://e.gkd.li/5e6fd5f8-6ad3-4a46-ab34-c9b6b2d7a112"
        },
        {
          "matches": "[id=null][desc~=\".*关闭.*按钮.*\"][clickable=true]",
          "activityIds": "com.tencent.qqmusiccommon.hybrid.HybridViewActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12700955",
            "https://i.gkd.li/i/22562104"
          ]
        },
        {
          "matches": "[id=\"com.miui.player:id/iv_close_dialog_button\"]",
          "fastQuery": true,
          "key": 2,
          "name": "类型1",
          "snapshotUrls": "https://i.gkd.li/import/13623503"
        },
        {
          "matches": "[id=null][desc=\"关闭弹框按钮\"][clickable=true]",
          "key": 3,
          "name": "会员过期续费弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/import/12700955"
          ]
        },
        {
          "matches": "ViewGroup > @ViewGroup + ViewGroup[childCount=5]",
          "key": 4,
          "name": "播放页面底部弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/import/13304343"
          ]
        },
        {
          "matches": "@ViewGroup[clickable=true][childCount=0][visibleToUser=true] < ViewGroup[childCount=1] < ViewGroup[childCount=2] < FrameLayout < FrameLayout < [vid=\"webview_container\"]",
          "fastQuery": true,
          "key": 5,
          "name": "免费试听弹窗",
          "snapshotUrls": "https://i.gkd.li/i/17783777"
        },
        {
          "matches": "[text$=\"钟免费体验\"] < * - [text$=\"臻品音质\"] <2 * - @View[clickable=true][text=null][childCount=0] <<4 [id=\"android:id/content\"]",
          "activityIds": "com.tencent.qqmusiclite.activity.player.MusicPlayerActivity",
          "fastQuery": true,
          "key": 6,
          "name": "体验臻品音质",
          "snapshotUrls": "https://i.gkd.li/i/29175549"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告（部分误触）",
      "desc": "注意：会关闭年度报告邀请函弹窗",
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/iv_close_dialog_button\"]",
          "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13623503",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_close_dialog_button\"]",
          "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13623503",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-看广告视频领VIP",
      "desc": "等待15s自动点击\"退出\"",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/tme_ad_skip_button\"]",
          "actionDelay": 15000,
          "activityIds": "com.tencentmusic.ad.tmead.reward.TMERewardActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13610667",
          "key": 0
        },
        {
          "matches": "[vid=\"tme_ad_skip_button\"]",
          "actionDelay": 15000,
          "activityIds": "com.tencentmusic.ad.tmead.reward.TMERewardActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13610667",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-主界面卡片广告",
      "key": 6,
      "rules": [
        {
          "matches": "[vid=\"ad_close\"][text=null]",
          "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16773614",
          "exampleUrls": "https://e.gkd.li/32ad4d0f-8992-45b0-9e1f-82ce2cc58dcb"
        },
        {
          "matches": "[vid=\"banner_divider\"] - * > [vid=\"close_banner\"]",
          "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/20420253",
          "exampleUrls": "https://e.gkd.li/d9b74767-84b6-4668-8a9b-261bd938a8a3"
        }
      ]
    },
    {
      "name": "分段广告-首页卡片广告",
      "desc": "关闭首页分段卡片广告",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[vid=\"ad_more\"]",
          "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/20420265",
          "exampleUrls": "https://e.gkd.li/e7d3d6c3-d8be-4e0f-ac02-e5df2a0615b3"
        },
        {
          "matches": "[vid=\"ad_close\"][text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "activityIds": "com.tencent.qqmusiclite.activity.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/20420322",
          "exampleUrls": "https://e.gkd.li/6ca7beba-98b8-4892-b275-1a116d040115"
        }
      ]
    },
    {
      "name": "局部广告-浮窗广告",
      "desc": "关闭右侧飘窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/free_mode_tips_layout\"] + [id=\"com.miui.player:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-看广告免费听弹窗",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "ViewGroup > @ViewGroup + ViewGroup[childCount=5]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页右侧悬浮卡片",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/cl_floating_promote\"] > [id=\"com.miui.player:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-年度报告邀请函弹窗",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/iv_close_dialog_button\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-会员过期续费弹窗",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "[id=null][desc=\"关闭弹框按钮\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-\"我的\"页面顶部卡片广告",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/banner_image\"] + [id=\"com.miui.player:id/close_banner\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-体验臻品音质",
      "desc": "连接设备30min臻品音质-> x掉",
      "key": 14,
      "rules": [
        {
          "matches": "[text$=\"钟免费体验\"] < * - [text$=\"臻品音质\"] <2 * - @View[clickable=true][text=null][childCount=0] <<4 [id=\"android:id/content\"]",
          "activityIds": "com.tencent.qqmusiclite.activity.player.MusicPlayerActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/29175549",
          "exampleUrls": "https://e.gkd.li/3bffcfdf-4d08-4461-8c43-24521d85e697",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-banner 广告",
      "desc": "关闭页面内的 banner 广告",
      "enable": false,
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/banner_image\"] + [id=\"com.miui.player:id/close_banner\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12700984",
            "https://i.gkd.li/i/20420253"
          ]
        },
        {
          "matches": "[vid=\"ad_close\"][visibleToUser=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16773614"
        }
      ]
    },
    {
      "name": "局部广告-弹窗广告_底部弹窗",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "ViewGroup > @ViewGroup + ViewGroup[childCount=5]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-飘窗广告_首页右侧",
      "enable": false,
      "fastQuery": true,
      "key": 17,
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/cl_floating_promote\"] > [id=\"com.miui.player:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 18,
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/iv_close_dialog_button\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-我的页面-顶部 banner 广告",
      "enable": false,
      "key": 19,
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/banner_image\"] + [id=\"com.miui.player:id/close_banner\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-看广告视频领VIP",
      "desc": "等待15s自动点击【退出】",
      "enable": false,
      "key": 20,
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/tme_ad_skip_button\"]",
          "actionDelay": 15000,
          "activityIds": "com.tencentmusic.ad.tmead.reward.TMERewardActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/import/13610667",
          "key": 0
        }
      ]
    },
    {
      "name": "浮窗广告",
      "desc": "关闭右侧飘窗广告",
      "enable": false,
      "quickFind": true,
      "key": 21,
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/free_mode_tips_layout\"] + [id=\"com.miui.player:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "横幅广告",
      "desc": "关闭播放页面横幅广告",
      "enable": false,
      "quickFind": true,
      "key": 22,
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/ad_skip_text\"][text=\"关闭\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告_底部弹窗",
      "enable": false,
      "key": 23,
      "rules": [
        {
          "matches": "ViewGroup > @ViewGroup + ViewGroup[childCount=5]",
          "key": 0
        }
      ]
    },
    {
      "name": "飘窗广告_首页右侧",
      "enable": false,
      "quickFind": true,
      "key": 24,
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/cl_floating_promote\"] > [id=\"com.miui.player:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-弹窗广告",
      "enable": false,
      "quickFind": true,
      "key": 25,
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/iv_close_dialog_button\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "会员过期续费弹窗",
      "enable": false,
      "key": 26,
      "rules": [
        {
          "matches": "[id=null][desc=\"关闭弹框按钮\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "我的页面-顶部 banner 广告",
      "enable": false,
      "key": 27,
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/banner_image\"] + [id=\"com.miui.player:id/close_banner\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "看广告视频领VIP",
      "desc": "等待15s自动点击【退出】",
      "enable": false,
      "key": 28,
      "rules": [
        {
          "matches": "[id=\"com.miui.player:id/tme_ad_skip_button\"]",
          "actionDelay": 15000,
          "activityIds": "com.tencentmusic.ad.tmead.reward.TMERewardActivity",
          "quickFind": true,
          "snapshotUrls": "https://i.gkd.li/import/13610667",
          "key": 0
        }
      ]
    }
  ]
});
