// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "七猫免费小说",
  "id": "com.kmxs.reader",
  "groups": [
    {
      "name": "分段广告-阅读页面广告",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ad_direct_close\"][visibleToUser=true]",
          "activityIds": "org.geometerplus.android.fbreader.FBReader",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/17355000"
        },
        {
          "matches": "[text=\"直接关闭\"]",
          "preKeys": [
            0
          ],
          "activityIds": "org.geometerplus.android.fbreader.FBReader",
          "snapshotUrls": "https://i.gkd.li/i/17354753",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-阅读结束后显示的广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.kmxs.reader:id/ad_direct_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12640303",
            "https://i.gkd.li/i/13362269",
            "https://i.gkd.li/i/13362272"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"ad_direct_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12640303",
            "https://i.gkd.li/i/13362269",
            "https://i.gkd.li/i/13362272"
          ],
          "key": 1
        },
        {
          "matches": [
            "[text$=\"广告\"]",
            "[id=\"com.kmxs.reader:id/ad_direct_close\"]"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/12640303",
            "https://i.gkd.li/import/13362269",
            "https://i.gkd.li/import/13362272"
          ]
        },
        {
          "matches": [
            "[text=\"直接关闭\"]",
            "[id=\"com.kmxs.reader:id/bubble_close\"]"
          ],
          "preKeys": 0,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/17354753"
        }
      ]
    },
    {
      "name": "全屏广告-签到弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@TextView[id=null] < View +(2) TextView[text^=\"已连签\"&&text*=\"天\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-右侧悬浮红包",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.kmxs.reader:id/red_packet_img\"] + [id=\"com.kmxs.reader:id/close_red_packet\"]",
          "action": "clickCenter",
          "key": 0
        },
        {
          "matches": "[vid=\"red_packet_img\"] + [vid=\"close_red_packet\"]",
          "action": "clickCenter",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-字节视频广告",
      "desc": "点击关闭",
      "enable": false,
      "actionDelay": 300,
      "key": 4,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13459157",
            "https://i.gkd.li/i/13459172",
            "https://i.gkd.li/i/13459174"
          ]
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_reward_full_count_down_after_close\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13459182"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true][childCount=0] <3 RelativeLayout[childCount=4] < [id=\"android:id/content\"]",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13472957"
        },
        {
          "matches": "@ImageView[visibleToUser=true][childCount=0] < FrameLayout[childCount=1] < FrameLayout[childCount=1] + FrameLayout >3 [text^=\"摇动或点击\"]",
          "activityIds": "com.qq.e.ads.PortraitADActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13472955"
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.kmxs.reader:id/bookshelf_book_item_direct_close\"]",
          "activityIds": "com.kmxs.reader.home.ui.HomeActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13489942"
        },
        {
          "matches": "[vid=\"iv_ad_direct_close\"][visibleToUser=true]",
          "activityIds": "org.geometerplus.android.fbreader.FBReader",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17574170",
          "exampleUrls": "https://e.gkd.li/9217fd14-1ca6-49b8-8f8b-bff7a98745dd"
        },
        {
          "matches": "[vid=\"bookshelf_book_item_direct_close\"]",
          "activityIds": ".home.ui.HomeActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13489942"
        }
      ]
    },
    {
      "name": "全屏广告-今日专属推荐弹窗",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.kmxs.reader:id/close\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13941276",
          "key": 0
        },
        {
          "matches": "[vid=\"close\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13941276",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-阅读页面底部广告",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.kmxs.reader:id/ll_ad_native_banner\"] > [id=\"com.kmxs.reader:id/iv_ad_direct_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-阅读结束后显示的广告",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": [
            "[text$=\"广告\"]",
            "[id=\"com.kmxs.reader:id/ad_direct_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12640303",
            "https://i.gkd.li/i/13362269",
            "https://i.gkd.li/i/13362272"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-签到弹窗",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "@TextView[id=null] < View +(2) TextView[text^=\"已连签\"&&text*=\"天\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-右侧悬浮红包",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.kmxs.reader:id/red_packet_img\"] + [id=\"com.kmxs.reader:id/close_red_packet\"]",
          "action": "clickCenter",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-书架顶部广告",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.kmxs.reader:id/bookshelf_book_item_direct_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-【字节】视频广告",
      "desc": "此规则有概率误触或失效，请谨慎选择开启。",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "key": 0,
          "name": "点击跳过",
          "snapshotUrls": [
            "https://i.gkd.li/i/13459157",
            "https://i.gkd.li/i/13459172",
            "https://i.gkd.li/i/13459174"
          ]
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_reward_full_count_down_after_close\"]",
          "fastQuery": true,
          "key": 1,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/i/13459182"
        }
      ]
    },
    {
      "name": "未分类-【百度】全屏广告",
      "desc": "此规则有概率误触或失效，请谨慎选择开启。",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "RelativeLayout > RelativeLayout + ImageView + ImageView[clickable=true]",
          "key": 0,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/i/13472957"
        }
      ]
    },
    {
      "name": "未分类-【腾讯】全屏广告",
      "desc": "此规则有概率误触或失效，请谨慎选择开启。",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "FrameLayout[childCount=10] > FrameLayout[index=3] > FrameLayout > ImageView",
          "key": 0,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/i/13472955"
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.kmxs.reader:id/young_dialog_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "[id=\"com.kmxs.reader:id/tv_update_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-阅读页面底部广告",
      "enable": false,
      "key": 17,
      "rules": [
        {
          "matches": "[id=\"com.kmxs.reader:id/ll_ad_native_banner\"] > [id=\"com.kmxs.reader:id/iv_ad_direct_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-书架顶部广告",
      "enable": false,
      "fastQuery": true,
      "key": 18,
      "rules": [
        {
          "matches": "[id=\"com.kmxs.reader:id/bookshelf_book_item_direct_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-【字节】视频广告",
      "desc": "此规则有概率误触或失效，请谨慎选择开启。",
      "enable": false,
      "key": 19,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "key": 0,
          "name": "点击跳过",
          "snapshotUrls": [
            "https://i.gkd.li/import/13459157",
            "https://i.gkd.li/import/13459172",
            "https://i.gkd.li/import/13459174"
          ]
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_reward_full_count_down_after_close\"]",
          "fastQuery": true,
          "key": 1,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/import/13459182"
        }
      ]
    },
    {
      "name": "全屏广告-【百度】全屏广告",
      "desc": "此规则有概率误触或失效，请谨慎选择开启。",
      "enable": false,
      "key": 20,
      "rules": [
        {
          "matches": "RelativeLayout > RelativeLayout + ImageView + ImageView[clickable=true]",
          "key": 0,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/import/13472957"
        }
      ]
    },
    {
      "name": "全屏广告-【腾讯】全屏广告",
      "desc": "此规则有概率误触或失效，请谨慎选择开启。",
      "enable": false,
      "key": 21,
      "rules": [
        {
          "matches": "FrameLayout[childCount=10] > FrameLayout[index=3] > FrameLayout > ImageView",
          "key": 0,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/import/13472955"
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "key": 22,
      "rules": [
        {
          "matches": "[id=\"com.kmxs.reader:id/young_dialog_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 23,
      "rules": [
        {
          "matches": "[id=\"com.kmxs.reader:id/tv_update_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "阅读页面底部广告",
      "enable": false,
      "key": 24,
      "rules": [
        {
          "matches": "[id=\"com.kmxs.reader:id/ll_ad_native_banner\"] > [id=\"com.kmxs.reader:id/iv_ad_direct_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "阅读结束后显示的广告",
      "enable": false,
      "quickFind": true,
      "key": 25,
      "rules": [
        {
          "matches": [
            "[text$=\"广告\"]",
            "[id=\"com.kmxs.reader:id/ad_direct_close\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12640303",
            "https://i.gkd.li/import/13362269",
            "https://i.gkd.li/import/13362272"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "签到弹窗",
      "enable": false,
      "key": 26,
      "rules": [
        {
          "matches": "@TextView[id=null] < View +(2) TextView[text^=\"已连签\"&&text*=\"天\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "右侧悬浮红包",
      "enable": false,
      "key": 27,
      "rules": [
        {
          "matches": "[id=\"com.kmxs.reader:id/red_packet_img\"] + [id=\"com.kmxs.reader:id/close_red_packet\"]",
          "action": "clickCenter",
          "key": 0
        }
      ]
    },
    {
      "name": "书架顶部广告",
      "enable": false,
      "quickFind": true,
      "key": 28,
      "rules": [
        {
          "matches": "[id=\"com.kmxs.reader:id/bookshelf_book_item_direct_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "【字节】视频广告",
      "desc": "此规则有概率误触或失效，请谨慎选择开启。",
      "enable": false,
      "key": 29,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "key": 0,
          "name": "点击跳过",
          "snapshotUrls": [
            "https://i.gkd.li/import/13459157",
            "https://i.gkd.li/import/13459172",
            "https://i.gkd.li/import/13459174"
          ]
        },
        {
          "matches": "[id=\"com.byted.pangle:id/tt_reward_full_count_down_after_close\"]",
          "quickFind": true,
          "key": 1,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/import/13459182"
        }
      ]
    },
    {
      "name": "【百度】全屏广告",
      "desc": "此规则有概率误触或失效，请谨慎选择开启。",
      "enable": false,
      "key": 30,
      "rules": [
        {
          "matches": "RelativeLayout > RelativeLayout + ImageView + ImageView[clickable=true]",
          "key": 0,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/import/13472957"
        }
      ]
    },
    {
      "name": "【腾讯】全屏广告",
      "desc": "此规则有概率误触或失效，请谨慎选择开启。",
      "enable": false,
      "key": 31,
      "rules": [
        {
          "matches": "FrameLayout[childCount=10] > FrameLayout[index=3] > FrameLayout > ImageView",
          "key": 0,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/import/13472955"
        }
      ]
    }
  ]
});
