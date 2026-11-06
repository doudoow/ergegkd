// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "车来了",
  "id": "com.ygkj.chelaile.standard",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "key": 0,
      "rules": [
        {
          "matches": "@[vid=\"cll_all_pic_close_1\"][visibleToUser=true] < FrameLayout +(1,2) LinearLayout[childCount=2] > [text$=\"广告\"]",
          "activityIds": [
            "dev.xesam.chelaile.app.module.func.SplashActivity",
            "dev.xesam.chelaile.app.module.PanelHostActivity",
            "dev.xesam.chelaile.app.module.line.gray.LineDetailActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13062991",
            "https://i.gkd.li/i/13464325",
            "https://i.gkd.li/i/16987313"
          ],
          "exampleUrls": "https://e.gkd.li/7957cdea-6238-4a2b-94bf-8960544258bc"
        },
        {
          "matches": "[vid=\"cll_line_single_ad_close\" || vid=\"cll_close\" || vid=\"cll_card_single_ad_close\"][visibleToUser=true][width<110 && height<110]",
          "excludeMatches": "[text=\"选择下车站\"][visibleToUser=true]",
          "activityIds": [
            "dev.xesam.chelaile.app.module.PanelHostActivity",
            "dev.xesam.chelaile.app.module.line.TimeTableActivity",
            "dev.xesam.chelaile.app.module.line.gray.LineDetailActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13625374",
            "https://i.gkd.li/i/16956570",
            "https://i.gkd.li/i/16987313",
            "https://i.gkd.li/i/16988894"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/25092999",
          "exampleUrls": "https://e.gkd.li/7d7b7d94-eb64-41a5-a5c2-c8418d6371a1"
        },
        {
          "matches": "FrameLayout[childCount=2] > FrameLayout[childCount=2] > FrameLayout[childCount=3] > FrameLayout[childCount=1] > @ImageView[visibleToUser=true][childCount=0][text=null] <<n [vid=\"cll_line_detail_widgets_container\"]",
          "activityIds": "dev.xesam.chelaile.app.module.line.gray.LineDetailActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16956583",
          "exampleUrls": "https://e.gkd.li/5442e403-7934-4fbf-b837-71d4ed8581cb"
        },
        {
          "matches": "@[vid=\"close_ad_text_link_layout\"][visibleToUser=true] - LinearLayout[childCount=2] > [text=\"广告\"]",
          "activityIds": "dev.xesam.chelaile.app.module.line.gray.LineDetailActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/16987313",
          "exampleUrls": "https://e.gkd.li/26c77ba0-8be5-4966-b806-3a566fee8413"
        },
        {
          "matches": "[text!=\"收藏成功\"] + [vid=\"cll_line_single_ad_close\" || vid=\"cll_close\" || vid=\"cll_card_single_ad_close\"][visibleToUser=true][width<110 && height<110]",
          "excludeMatches": "[text=\"选择下车站\"][visibleToUser=true]",
          "activityIds": [
            "dev.xesam.chelaile.app.module.PanelHostActivity",
            "dev.xesam.chelaile.app.module.line.TimeTableActivity",
            "dev.xesam.chelaile.app.module.line.gray.LineDetailActivity"
          ],
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/13625374",
            "https://i.gkd.li/i/16956570",
            "https://i.gkd.li/i/16987313",
            "https://i.gkd.li/i/16988894"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/25092999",
            "https://i.gkd.li/i/29597847"
          ],
          "exampleUrls": "https://e.gkd.li/7d7b7d94-eb64-41a5-a5c2-c8418d6371a1"
        }
      ]
    },
    {
      "name": "更新提示",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.ygkj.chelaile.standard:id/cll_interstitial_close\"][clickable=true]",
          "activityIds": "dev.xesam.chelaile.app.module.PanelHostActivity",
          "snapshotUrls": "https://i.gkd.li/i/14325666",
          "exampleUrls": "https://m.gkd.li/57941037/31613a9d-202a-4359-bc99-274dddb180ce",
          "key": 0
        },
        {
          "matches": "[vid=\"cll_interstitial_close\"][clickable=true]",
          "activityIds": "dev.xesam.chelaile.app.module.PanelHostActivity",
          "snapshotUrls": "https://i.gkd.li/i/14325666",
          "exampleUrls": "https://m.gkd.li/57941037/31613a9d-202a-4359-bc99-274dddb180ce",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][childCount=0][width<100&&height<100][visibleToUser=true] <n * >3 [text=\"反馈\"]",
          "activityIds": "dev.xesam.chelaile.app.module.line.gray.LineDetailActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/16812335",
            "https://i.gkd.li/i/21120116"
          ],
          "exampleUrls": "https://e.gkd.li/4ab8665e-026f-4101-8299-0300708c91c1"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "activityIds": "dev.xesam.chelaile.app.module.PanelHostActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/20502977"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "dev.xesam.chelaile.app.module.PanelHostActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/21139548",
          "exampleUrls": "https://e.gkd.li/76d02bfa-6d04-4005-b5aa-30ecfdd3cd84"
        },
        {
          "matches": "@ViewGroup[childCount=1][visibleToUser=true][width<100 && height<100] + ViewGroup > [text=\"反馈\"]",
          "activityIds": "dev.xesam.chelaile.app.module.PanelHostActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/21120146",
          "exampleUrls": "https://e.gkd.li/1f1c3315-d245-404b-ad16-554583b16283"
        }
      ]
    },
    {
      "name": "功能类-打开app自动点击收藏列表第一个车🚗(不要同时开启哦~)",
      "desc": "启动app-收藏列表第一个车线-进入车线详情",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@FrameLayout[clickable=true][getChild(0).vid=\"fav_line_layout\"] - LinearLayout >2 [text=\"我的收藏\"][visibleToUser=true]",
          "activityIds": "dev.xesam.chelaile.app.module.PanelHostActivity",
          "snapshotUrls": "https://i.gkd.li/i/25091170",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-打开app自动点击第一个车🚗后打开地图🗺️(不要同时开启哦~)",
      "desc": "启动app-收藏列表第一个车线-进入车线详情-点击地图查看所有车次位置",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@FrameLayout[clickable=true][getChild(0).vid=\"fav_line_layout\"] - LinearLayout >2 [text=\"我的收藏\"][visibleToUser=true]",
          "activityIds": "dev.xesam.chelaile.app.module.PanelHostActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25091170"
        },
        {
          "matches": "[vid=\"cll_cover\"][visibleToUser=true][clickable=true]",
          "preKeys": [
            0
          ],
          "activityIds": "dev.xesam.chelaile.app.module.line.gray.LineDetailActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/25091375"
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "ImageView[id^=\"com.ygkj.chelaile.standard:id/cll_all_pic_close\"][visibleToUser=true]",
          "activityIds": [
            "dev.xesam.chelaile.app.module.func.SplashActivity",
            "dev.xesam.chelaile.app.module.PanelHostActivity",
            "dev.xesam.chelaile.app.module.line.gray.LineDetailActivity"
          ],
          "key": 0,
          "name": "腾讯SDK",
          "snapshotUrls": [
            "https://i.gkd.li/i/13062991",
            "https://i.gkd.li/i/13062984",
            "https://i.gkd.li/i/13464325",
            "https://i.gkd.li/i/14065904"
          ]
        },
        {
          "matches": "[id=\"com.ygkj.chelaile.standard:id/cll_line_single_ad_close\"][visibleToUser=true]",
          "activityIds": [
            "dev.xesam.chelaile.app.module.PanelHostActivity",
            "dev.xesam.chelaile.app.module.line.TimeTableActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13625374",
            "https://i.gkd.li/i/13947849"
          ]
        },
        {
          "matches": "ImageView[id^=\"com.ygkj.chelaile.standard:id/cll_all_pic_close\"][visibleToUser=true]",
          "activityIds": [
            "dev.xesam.chelaile.app.module.func.SplashActivity",
            "dev.xesam.chelaile.app.module.PanelHostActivity"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/13062991",
            "https://i.gkd.li/import/13062984",
            "https://i.gkd.li/import/13464325"
          ]
        },
        {
          "matches": "[id=\"com.ygkj.chelaile.standard:id/cll_line_single_ad_close\"][visibleToUser=true]",
          "activityIds": "dev.xesam.chelaile.app.module.PanelHostActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/13625374"
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView[width<90][height<90]",
          "activityIds": "dev.xesam.chelaile.app.module.line.gray.LineDetailActivity",
          "key": 0,
          "name": "腾讯广告SDK",
          "snapshotUrls": "https://i.gkd.li/i/13947871"
        }
      ]
    },
    {
      "name": "功能类-自动选第1个车🚗",
      "desc": "(⚠️规则2开1)启动app-收藏列表第一个车线-进入车线详情",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "@FrameLayout[clickable=true][getChild(0).vid=\"fav_line_layout\"] - LinearLayout >2 [text=\"我的收藏\"][visibleToUser=true]",
          "excludeMatches": [
            "[text=\"不在运营时间\"]",
            "[text=\"末班时间已过\"]"
          ],
          "activityIds": "dev.xesam.chelaile.app.module.PanelHostActivity",
          "snapshotUrls": "https://i.gkd.li/i/25091170",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/29600340",
            "https://i.gkd.li/i/29600413"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动选第1个车🚗后打开地图🗺️",
      "desc": "(⚠️规则2开1) ①选收藏列表第1个车线 ②打开地图查看车次位置",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "@FrameLayout[clickable=true][getChild(0).vid=\"fav_line_layout\"] - LinearLayout >2 [text=\"我的收藏\"][visibleToUser=true]",
          "excludeMatches": [
            "[text=\"不在运营时间\"]",
            "[text=\"末班时间已过\"]"
          ],
          "activityIds": "dev.xesam.chelaile.app.module.PanelHostActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25091170",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/29600340",
            "https://i.gkd.li/i/29600413"
          ]
        },
        {
          "matches": "[vid=\"cll_cover\"][visibleToUser=true][clickable=true]",
          "preKeys": [
            0
          ],
          "activityIds": "dev.xesam.chelaile.app.module.line.gray.LineDetailActivity",
          "priorityTime": 6000,
          "snapshotUrls": "https://i.gkd.li/i/25091375",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-网络错误自动重试",
      "key": 9,
      "rules": [
        {
          "matches": "@[vid=\"cll_comp_action\"] <2 [childCount=2] < [vid=\"error_page_home_fg\"][visibleToUser=true]",
          "activityIds": "dev.xesam.chelaile.app.module.PanelHostActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26838549",
          "exampleUrls": "https://e.gkd.li/1afd52fe-9d69-489f-9a79-68eb2d8ed82d",
          "key": 0
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "ImageView[id^=\"com.ygkj.chelaile.standard:id/cll_all_pic_close\"][visibleToUser=true]",
          "activityIds": [
            "dev.xesam.chelaile.app.module.func.SplashActivity",
            "dev.xesam.chelaile.app.module.PanelHostActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13062991",
            "https://i.gkd.li/import/13062984",
            "https://i.gkd.li/import/13464325"
          ]
        },
        {
          "matches": "[id=\"com.ygkj.chelaile.standard:id/cll_line_single_ad_close\"][visibleToUser=true]",
          "activityIds": "dev.xesam.chelaile.app.module.PanelHostActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13625374"
        }
      ]
    }
  ]
});
