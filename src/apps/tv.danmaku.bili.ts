// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "哔哩哔哩",
  "id": "tv.danmaku.bili",
  "groups": [
    {
      "name": "开屏广告",
      "desc": "开屏广告,任意界面切回APP开屏广告",
      "matchTime": 10000,
      "actionMaximum": 2,
      "resetMatch": "app",
      "priorityTime": 10000,
      "matchRoot": true,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"count_down\" || vid=\"skip\"][visibleToUser=true]",
          "actionCd": 500,
          "snapshotUrls": [
            "https://i.gkd.li/i/16187624",
            "https://i.gkd.li/i/16484445"
          ],
          "key": 0
        },
        {
          "anyMatches": [
            "TextView[id=\"tv.danmaku.bili:id/count_down\"][text^=\"跳过\"]",
            "TextView[id=\"tv.danmaku.bili:id/skip\"][text^=\"跳过\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12705270",
            "https://i.gkd.li/i/19142386"
          ],
          "key": 1
        },
        {
          "matches": "[id=\"tv.danmaku.bili:id/count_down\"][text^=\"跳\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-评论区顶部公告横幅",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "LinearLayout[id=\"tv.danmaku.bili:id/ad_tint_frame\"] > ImageView[id=\"tv.danmaku.bili:id/close\"][desc=\"关闭\"]",
          "excludeActivityIds": [
            "com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3",
            "tv.danmaku.bili.MainActivityV2"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12785461",
            "https://i.gkd.li/i/12775156"
          ],
          "key": 0
        },
        {
          "matches": "LinearLayout[id=\"tv.danmaku.bili:id/ad_tint_frame\"] > ImageView[id=\"tv.danmaku.bili:id/close\"][desc=\"关闭\"]",
          "key": 1
        },
        {
          "matches": "LinearLayout[vid=\"ad_tint_frame\"] > ImageView[vid=\"close\"][desc=\"关闭\"]",
          "excludeActivityIds": [
            "com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3",
            ".MainActivityV2"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12785461",
            "https://i.gkd.li/i/12775156"
          ],
          "key": 2
        },
        {
          "matches": "LinearLayout[id=`tv.danmaku.bili:id/ad_tint_frame`] > ImageView[id=\"tv.danmaku.bili:id/close\"][desc=`关闭`]",
          "key": 3
        }
      ]
    },
    {
      "name": "分段广告-动态推荐卡片广告",
      "desc": "点击卡片右上角[广告]按钮-点击不感兴趣",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"tv.danmaku.bili:id/ad_goods_mark_big\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12700222"
        },
        {
          "matches": "[text=\"不感兴趣\"][id^=\"tv.danmaku.bili:id/reason\"]",
          "preKeys": [
            2
          ],
          "snapshotUrls": "https://i.gkd.li/i/12700243",
          "key": 1
        },
        {
          "matches": "[vid=\"ad_goods_mark_big\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12700222"
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"忽略此版本的更新\"][checked=false]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12649689",
            "https://i.gkd.li/i/13212209",
            "https://i.gkd.li/i/13228977"
          ]
        },
        {
          "matches": "[id=\"tv.danmaku.bili:id/update_btn_cancel\"]",
          "preKeys": [
            2
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12649689",
            "https://i.gkd.li/i/13212209",
            "https://i.gkd.li/i/13228977"
          ],
          "key": 1
        },
        {
          "matches": "[id=\"tv.danmaku.bili:id/update_btn_cancel\"]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12649689",
            "https://i.gkd.li/i/13212209",
            "https://i.gkd.li/i/13228977",
            "https://i.gkd.li/i/13334963"
          ]
        },
        {
          "matches": "[vid=\"update_btn_cancel\"]",
          "preKeys": [
            2
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12649689",
            "https://i.gkd.li/i/13212209",
            "https://i.gkd.li/i/13228977"
          ],
          "key": 3
        }
      ]
    },
    {
      "name": "局部广告-视频页广告",
      "desc": "领取大会员月卡,B站免流星卡",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"tv.danmaku.bili:id/toast_x\"]",
          "actionMaximum": 1,
          "activityIds": [
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
            "com.bilibili.video.videodetail.VideoDetailsActivity"
          ],
          "matchTime": 10000,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12892611",
            "https://i.gkd.li/i/13308344",
            "https://i.gkd.li/i/13538048"
          ]
        },
        {
          "matches": "@[vid=\"close\"][visibleToUser=true] - [text$=\"免费领B站大会员\"]",
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/18165189",
          "exampleUrls": "https://e.gkd.li/cd934dfc-666e-4562-8b77-aac95f73694e"
        },
        {
          "matches": "[vid=\"toast_x\"]",
          "actionMaximum": 1,
          "activityIds": [
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
            "com.bilibili.video.videodetail.VideoDetailsActivity"
          ],
          "matchTime": 10000,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12892611",
            "https://i.gkd.li/i/13308344",
            "https://i.gkd.li/i/13538048"
          ]
        },
        {
          "matches": "@[vid=\"close\"][visibleToUser=true] - [text$=\"免费领B站大会员\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/18165189",
          "exampleUrls": "https://e.gkd.li/cd934dfc-666e-4562-8b77-aac95f73694e"
        },
        {
          "matches": "[desc=\"close\"] < @[clickable=true] <3 View <2 [childCount=4] < View <2 View < ComposeView < FrameLayout < [vid=\"fl_tab_pager_container\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/31067294",
          "exampleUrls": "https://e.gkd.li/696de68a-489f-4d42-b652-afbdf7351145"
        },
        {
          "matches": "@[vid=\"close\"][visibleToUser=true] - [text$=\"免费领B站大会员\"]",
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/18165189"
        },
        {
          "matches": "[desc=\"close\"] < @[clickable=true] <3 View <2 [childCount=4] < View <2 View < ComposeView < FrameLayout < [vid=\"fl_tab_pager_container\"]",
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/31067294"
        }
      ]
    },
    {
      "name": "局部广告-直播间悬浮窗广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"tv.danmaku.bili:id/shopping_close\" || vid=\"live_game_card_close\" || vid=\"match_close\" || vid=\"iv_pop_rank_guide_card_close\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13200549",
            "https://i.gkd.li/i/22990081",
            "https://i.gkd.li/i/23098023",
            "https://i.gkd.li/i/25238734"
          ]
        },
        {
          "matches": "@[vid=\"close\" || vid=\"iv_close\"] - [vid=\"up_avatar\" || vid=\"gift_icon\" || vid=\"follow_container\"][visibleToUser=true]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14782965",
            "https://i.gkd.li/i/18046573",
            "https://i.gkd.li/i/22990105"
          ]
        },
        {
          "matches": "[vid=\"vertical_container\"] >3 FrameLayout[clickable=true][visibleToUser=true]",
          "actionMaximum": 1,
          "matchTime": 10000,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/24985920",
            "https://i.gkd.li/i/25240029"
          ]
        },
        {
          "matches": "[vid=\"shopping_close\" || vid=\"live_game_card_close\" || vid=\"match_close\" || vid=\"iv_pop_rank_guide_card_close\" || vid=\"card_close\"][clickable=true]",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13200549",
            "https://i.gkd.li/i/22990081",
            "https://i.gkd.li/i/23098023",
            "https://i.gkd.li/i/25238734",
            "https://i.gkd.li/i/25569011"
          ]
        },
        {
          "matches": "@[clickable=true][visibleToUser=true] < [vid=\"pager\"] < FrameLayout[index=parent.childCount.minus(1)] <(2,3,4) [vid=\"vertical_container\"]",
          "actionMaximum": 1,
          "matchTime": 10000,
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/24985920",
            "https://i.gkd.li/i/25240029",
            "https://i.gkd.li/i/25369451",
            "https://i.gkd.li/i/25569011"
          ]
        },
        {
          "matches": "View[visibleToUser=true] <<2 @[clickable=true] < [vid=\"pager\"]",
          "actionMaximum": 1,
          "matchTime": 10000,
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/24985920",
            "https://i.gkd.li/i/25240029"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/25369451"
          ]
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[text$=\"通知\"] +2 * > [id=\"tv.danmaku.bili:id/close\"]",
          "activityIds": [
            ".MainActivityV2",
            "com.bilibili.video.story.StoryTransparentActivity",
            "com.bilibili.teenagersmode.ui.TeenagersModeDialogActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13229159",
            "https://i.gkd.li/i/13614090",
            "https://i.gkd.li/i/21578494"
          ],
          "key": 0
        },
        {
          "matches": "[text$=\"通知\"] +2 * > [id=\"tv.danmaku.bili:id/close\"]",
          "key": 1
        },
        {
          "matches": "[text$=\"通知\"] +2 * > [vid=\"close\"]",
          "activityIds": [
            ".MainActivityV2",
            "com.bilibili.video.story.StoryTransparentActivity",
            "com.bilibili.teenagersmode.ui.TeenagersModeDialogActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13229159",
            "https://i.gkd.li/i/13614090",
            "https://i.gkd.li/i/21578494"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "分段广告-首页推荐视频卡片广告",
      "desc": "广告/创作推广/直播/会员购 等",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "@[vid=\"more\" || id=\"tv.danmaku.bili.adbiz:id/more\"] <<n [vid=\"tool_container\" || vid=\"ad_tint_frame\" || id=\"tv.danmaku.bili.adbiz:id/ad_tint_frame\" || id=\"tv.danmaku.bili.adbiz:id/root_container\" || id=\"tv.danmaku.bili.adbiz:id/constraintLayout\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14083540",
            "https://i.gkd.li/i/14588315",
            "https://i.gkd.li/i/14729855",
            "https://i.gkd.li/i/18274379",
            "https://i.gkd.li/i/18306851",
            "https://i.gkd.li/i/19537979",
            "https://i.gkd.li/i/23012670",
            "https://i.gkd.li/i/23123800",
            "https://i.gkd.li/i/23687196"
          ]
        },
        {
          "matches": "@[vid=\"inline_more\"] <<n [vid=\"card_content\"][visibleToUser=true][getChild(1).getChild(1).vid=\"corner_hint_container\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17428126",
          "excludeSnapshotUrls": "https://i.gkd.li/i/17848536",
          "exampleUrls": "https://e.gkd.li/d3d37b4e-cda3-4ba6-8af3-7b45ac8efc10"
        },
        {
          "matches": "@[clickable=true] > [text=\"此类内容过多\" || text=\"相似内容过多\" || text=\"不感兴趣\" || text=\"up主不感兴趣\" || text=\"对该up的直播不感兴趣\" || text=\"我不想看\" || text=\"引人不适\"]",
          "preKeys": [
            8,
            9
          ],
          "key": 2,
          "name": "点击[不感兴趣]/[相似内容过多]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13625309",
            "https://i.gkd.li/i/13742257",
            "https://i.gkd.li/i/14155801",
            "https://i.gkd.li/i/14155272",
            "https://i.gkd.li/i/17428471",
            "https://i.gkd.li/i/18274380",
            "https://i.gkd.li/i/18292926",
            "https://i.gkd.li/i/20710223",
            "https://i.gkd.li/i/23687208",
            "https://i.gkd.li/i/24836772"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/18292929",
            "https://i.gkd.li/i/18306849"
          ]
        },
        {
          "matches": "@FrameLayout[clickable=true] > [text=\"此类内容过多\" || text=\"相似内容过多\"][visibleToUser=true]",
          "preKeys": [
            5
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/20718890",
            "https://i.gkd.li/i/20720187"
          ],
          "exampleUrls": "https://e.gkd.li/2aba6082-1047-464e-959c-82ee62e492aa"
        },
        {
          "matches": "[vid=\"ad_tint_frame\"] >2 [vid=\"more\"]",
          "actionMaximum": 1,
          "fastQuery": true,
          "key": 4,
          "name": "点击卡片广告右下角菜单按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/14083540",
            "https://i.gkd.li/i/14588315",
            "https://i.gkd.li/i/14729855"
          ]
        },
        {
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": [
            8
          ],
          "fastQuery": true,
          "key": 5,
          "name": "点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13742257",
            "https://i.gkd.li/i/13256605",
            "https://i.gkd.li/i/14155801",
            "https://i.gkd.li/i/13742257"
          ]
        },
        {
          "matches": "@[clickable=true] > [text=\"相似内容过多\"]",
          "preKeys": [
            8
          ],
          "fastQuery": true,
          "key": 6,
          "name": "点击[相似内容过多]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13945597",
            "https://i.gkd.li/i/14155272",
            "https://i.gkd.li/i/14059882"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/acd89b46-45fc-459f-8d17-3913d98dcbad"
        },
        {
          "matches": "@[clickable=true] > [text=\"up主不感兴趣\"]",
          "preKeys": [
            8
          ],
          "fastQuery": true,
          "key": 7,
          "name": "点击[up主不感兴趣]",
          "snapshotUrls": "https://i.gkd.li/i/13625309",
          "exampleUrls": "https://m.gkd.li/57941037/9c2f42d7-c262-4e06-b3c6-40f0908e7a94"
        },
        {
          "matches": "[id$=\"ad_tint_frame\" || id$=\"root_container\" || id$=\"constraintLayout\"][visibleToUser=true] >(1,2,3) [vid=\"more\" || id=\"tv.danmaku.bili.adbiz:id/more\"]",
          "key": 8,
          "snapshotUrls": [
            "https://i.gkd.li/i/14083540",
            "https://i.gkd.li/i/14588315",
            "https://i.gkd.li/i/18274379",
            "https://i.gkd.li/i/18306851",
            "https://i.gkd.li/i/19537979",
            "https://i.gkd.li/i/23012670",
            "https://i.gkd.li/i/23123800",
            "https://i.gkd.li/i/23687196",
            "https://i.gkd.li/i/27153803",
            "https://i.gkd.li/i/27686976"
          ]
        },
        {
          "matches": "[vid=\"card_content\"][getChild(1).getChild(1).vid=\"corner_hint_container\"][visibleToUser=true] >n [vid=\"inline_more\"]",
          "key": 9,
          "snapshotUrls": "https://i.gkd.li/i/17428126",
          "excludeSnapshotUrls": "https://i.gkd.li/i/17848536",
          "exampleUrls": "https://e.gkd.li/d3d37b4e-cda3-4ba6-8af3-7b45ac8efc10"
        }
      ]
    },
    {
      "name": "局部广告-个性化内容推荐弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[text=\"开启个性化内容推荐\"] +3 [id=\"tv.danmaku.bili:id/close_button\"]",
          "activityIds": "tv.danmaku.bili.MainActivityV2",
          "snapshotUrls": "https://i.gkd.li/i/13448905",
          "key": 0
        },
        {
          "matches": "[text=\"开启个性化内容推荐\"] +3 [id=\"tv.danmaku.bili:id/close_button\"]",
          "key": 1
        },
        {
          "matches": "[text=\"开启个性化内容推荐\"] +3 [vid=\"close_button\"]",
          "activityIds": ".MainActivityV2",
          "snapshotUrls": "https://i.gkd.li/i/13448905",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-会员弹窗",
      "desc": "点击关闭",
      "enable": false,
      "actionMaximum": 1,
      "forcedTime": 10000,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "@[index=parent.childCount.minus(1)][height<150][visibleToUser=true] <(1,2) View <(1,2) View <(4,5) View < View < View < WebView[text=\"会员中心\" || text=\"大会员\"] < WebView < [vid=\"webview\"]",
          "activityIds": [
            "tv.danmaku.bili.MainActivityV2",
            "com.bilibili.vip.web.VipWebActivity",
            "com.bilibili.module.vip.web.VipWebActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/15219142",
            "https://i.gkd.li/i/15220560",
            "https://i.gkd.li/i/15289942",
            "https://i.gkd.li/i/15328394",
            "https://i.gkd.li/i/18236032",
            "https://i.gkd.li/i/22310507"
          ],
          "exampleUrls": "https://e.gkd.li/ac6dd8ae-f18e-4f48-9184-39e4dbd832ba"
        },
        {
          "matches": "ComposeView > View[childCount=7] > @View[clickable=true][childCount=0] <<n [vid=\"vip_panel\"]",
          "activityIds": [
            "tv.danmaku.bili.MainActivityV2",
            "com.bilibili.vip.web.VipWebActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/15523975",
            "https://i.gkd.li/i/15814146"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/a78a7719-b148-4df2-a225-f7a24be0c413"
        },
        {
          "matches": "@TextView[width<130 && height<130] - TextView[childCount=0][id=\"dialog-canvas\"] <<n [vid=\"webview\"]",
          "activityIds": "com.bilibili.vip.web.VipWebActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/23385023"
        },
        {
          "matches": "WebView[text=\"会员中心\"] >4 [text=\"大会员服务协议\"] +2 * >2 @TextView[visibleToUser=true][index=parent.childCount.minus(1)] <<n [vid=\"webview\"]",
          "activityIds": [
            "tv.danmaku.bili.MainActivityV2",
            "com.bilibili.vip.web.VipWebActivity"
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/15219142",
            "https://i.gkd.li/i/15220560",
            "https://i.gkd.li/i/15289942"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/60eee9aa-8799-4097-8ddf-2783afd49586"
        },
        {
          "matches": "WebView[text=\"大会员\"] >3 View[childCount=4] >3 View[childCount=1] > View[childCount=1] > @Image[visibleToUser=true][childCount=0][text=\"\"] <<n [vid=\"webview\"]",
          "activityIds": "com.bilibili.vip.web.VipWebActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/15328394",
          "exampleUrls": "https://m.gkd.li/57941037/f56c6392-c473-4988-af41-00adedbf3905"
        },
        {
          "matches": "[text=\"会员中心\"] >3 View > View[childCount=2] > View[childCount=1] > @TextView[clickable=true] <<n [vid=\"webview\"]",
          "activityIds": "tv.danmaku.bili.MainActivityV2",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/15523824",
          "exampleUrls": "https://m.gkd.li/57941037/4384e301-8a79-427e-88d6-7fb8e422c6e8"
        },
        {
          "matches": "@[index=parent.childCount.minus(1)][height<150][visibleToUser=true] <(1,2) View <(1,2) View <(4,5) View < View < View < WebView[text=\"会员中心\" || text=\"大会员\"] < WebView < [vid=\"webview\"]",
          "activityIds": [
            ".MainActivityV2",
            "com.bilibili.vip.web.VipWebActivity",
            "com.bilibili.module.vip.web.VipWebActivity"
          ],
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/15219142",
            "https://i.gkd.li/i/15220560",
            "https://i.gkd.li/i/15289942",
            "https://i.gkd.li/i/15328394",
            "https://i.gkd.li/i/18236032",
            "https://i.gkd.li/i/22310507"
          ],
          "exampleUrls": "https://e.gkd.li/ac6dd8ae-f18e-4f48-9184-39e4dbd832ba"
        },
        {
          "matches": "ComposeView > View[childCount=7] > @View[clickable=true][childCount=0] <<n [vid=\"vip_panel\"]",
          "activityIds": [
            ".MainActivityV2",
            "com.bilibili.vip.web.VipWebActivity"
          ],
          "key": 7,
          "snapshotUrls": [
            "https://i.gkd.li/i/15523975",
            "https://i.gkd.li/i/15814146"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/a78a7719-b148-4df2-a225-f7a24be0c413"
        }
      ]
    },
    {
      "name": "全屏广告-分享稿件弹窗",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 10,
      "rules": [
        {
          "matches": "[vid=\"poster_share_cancel\"][visibleToUser=true]",
          "activityIds": "tv.danmaku.bili.ui.splash.ad.page.HotSplashActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15858057",
          "exampleUrls": "https://m.gkd.li/57941037/80e5730d-6634-4a0a-9c58-c57f7ad5e58c",
          "key": 0
        },
        {
          "matches": "[vid=\"poster_share_cancel\"][visibleToUser=true]",
          "activityIds": ".ui.splash.ad.page.HotSplashActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15858057",
          "exampleUrls": "https://m.gkd.li/57941037/80e5730d-6634-4a0a-9c58-c57f7ad5e58c",
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-搜索结果广告",
      "desc": "点击右下角[菜单]-点击[不感兴趣]",
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "@[vid=\"more\"][clickable=true][visibleToUser=true] -(3,4) [vid=\"tag_layout\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/17269053",
            "https://i.gkd.li/i/17964354"
          ],
          "exampleUrls": "https://e.gkd.li/e5dd30e7-e8dd-42bc-8953-23368e65cca4"
        },
        {
          "matches": "@[clickable=true] > [text$=\"不感兴趣\"]",
          "preKeys": [
            2
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/17269055",
            "https://i.gkd.li/i/17964356",
            "https://i.gkd.li/i/22657666"
          ],
          "exampleUrls": "https://e.gkd.li/5e6e4b69-ba97-473d-9f62-631c296da589",
          "key": 1
        },
        {
          "matches": "[vid=\"ad_tint_frame\"] > [vid=\"more\"][clickable=true]",
          "key": 2,
          "name": "①点击右下角[菜单]",
          "snapshotUrls": [
            "https://i.gkd.li/i/17269053",
            "https://i.gkd.li/i/17964354",
            "https://i.gkd.li/i/28495212"
          ],
          "exampleUrls": "https://e.gkd.li/e5dd30e7-e8dd-42bc-8953-23368e65cca4"
        },
        {
          "matches": "@[clickable=true] > [text$=\"不感兴趣\" || text*=\"不想看\" || text$=\"质量差\"]",
          "preKeys": [
            2
          ],
          "name": "②点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/i/17269055",
            "https://i.gkd.li/i/17964356",
            "https://i.gkd.li/i/22657666"
          ],
          "exampleUrls": "https://e.gkd.li/5e6e4b69-ba97-473d-9f62-631c296da589",
          "key": 3
        }
      ]
    },
    {
      "name": "分段广告-视频详情页下方推广",
      "desc": "关闭[广告/推广/直播]",
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "anyMatches": [
            "@[vid=\"more\" || vid=\"more_layout\" || id=\"tv.danmaku.bili.adbiz:id/more\" || id=\"tv.danmaku.bili.adbiz:id/more_layout\"] <<n [vid=\"ad_tint_frame\" || id=\"tv.danmaku.bili.adbiz:id/ad_tint_frame\" || id=\"tv.danmaku.bili.adbiz:id/ad_tint_frame\"][visibleToUser=true]",
            "@[vid=\"more\"] -(3,5) [vid=\"live_lottie_layout\"][visibleToUser=true]",
            "[!(vid=\"duration\" || vid=\"second_to_last_line_area\") || text=\"课堂\"] <3 ViewGroup[getChild(0).vid=\"cover\"] > [vid=\"more\"][visibleToUser=true]"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/17675629",
            "https://i.gkd.li/i/20739380",
            "https://i.gkd.li/i/20744764",
            "https://i.gkd.li/i/20794380",
            "https://i.gkd.li/i/21552836",
            "https://i.gkd.li/i/21705345",
            "https://i.gkd.li/i/21947622",
            "https://i.gkd.li/i/17675894",
            "https://i.gkd.li/i/18306858",
            "https://i.gkd.li/i/23934632",
            "https://i.gkd.li/i/23933925",
            "https://i.gkd.li/i/23933866",
            "https://i.gkd.li/i/24015674"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/24365466",
          "exampleUrls": [
            "https://e.gkd.li/219c40c4-debf-40d8-889a-7eb39c87126c",
            "https://e.gkd.li/dc54e6ee-24df-49a8-874a-f381326122c3"
          ]
        },
        {
          "matches": "@[clickable=true] > [text*=\"不感兴趣\" || text=\"相似内容过多\" || text=\"我不想看\"]",
          "preKeys": [
            3
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/17676025",
            "https://i.gkd.li/i/17676149",
            "https://i.gkd.li/i/17677147",
            "https://i.gkd.li/i/18296940",
            "https://i.gkd.li/i/18306839",
            "https://i.gkd.li/i/20739391",
            "https://i.gkd.li/i/24015691",
            "https://i.gkd.li/i/24336415"
          ],
          "exampleUrls": "https://e.gkd.li/23937c2d-379c-4fb5-aaee-7295bcf0afca"
        },
        {
          "matches": "[vid=\"close_dislike\"][visibleToUser=true]",
          "preKeys": [
            4
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/18587456",
          "exampleUrls": "https://e.gkd.li/80514576-3656-4dcc-89f5-5992803c8e77"
        },
        {
          "matches": "[id$=\"ad_tint_frame\"][visibleToUser=true] >(1,2) [vid=\"more\" || vid=\"more_layout\" || id=\"tv.danmaku.bili.adbiz:id/more\" || id=\"tv.danmaku.bili.adbiz:id/more_layout\"]",
          "key": 3,
          "name": "广告/推广",
          "snapshotUrls": [
            "https://i.gkd.li/i/17675629",
            "https://i.gkd.li/i/21552836",
            "https://i.gkd.li/i/21705345",
            "https://i.gkd.li/i/20739380",
            "https://i.gkd.li/i/20744764",
            "https://i.gkd.li/i/20794380",
            "https://i.gkd.li/i/21947622",
            "https://i.gkd.li/i/28908101"
          ]
        },
        {
          "matches": "[text=\"课堂\" || text=\"纪录片\" || text=\"游戏\" || vid=\"bottom_container\" || vid=\"live_lottie_layout\"][index=2] +n [vid=\"more\"][visibleToUser=true]",
          "key": 4,
          "name": "课堂/纪录片/游戏/直播",
          "snapshotUrls": [
            "https://i.gkd.li/i/23934632",
            "https://i.gkd.li/i/23933866",
            "https://i.gkd.li/i/24015674",
            "https://i.gkd.li/i/23933925",
            "https://i.gkd.li/i/17675894",
            "https://i.gkd.li/i/18306858"
          ],
          "exampleUrls": "https://e.gkd.li/f7a90a07-6c8e-4986-8306-f64db4412e36"
        },
        {
          "matches": "@[clickable=true] > [text*=\"不感兴趣\" || text=\"相似内容过多\" || text*=\"不想看\" || text$=\"质量差\" || text=\"减少直播推荐\" || text=\"和当前视频无关\"]",
          "preKeys": [
            3,
            4
          ],
          "key": 5,
          "name": "②点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/i/17676025",
            "https://i.gkd.li/i/17676149",
            "https://i.gkd.li/i/17677147",
            "https://i.gkd.li/i/18296940",
            "https://i.gkd.li/i/18306839",
            "https://i.gkd.li/i/20739391",
            "https://i.gkd.li/i/24015691",
            "https://i.gkd.li/i/24336415",
            "https://i.gkd.li/i/28659010",
            "https://i.gkd.li/i/30885647"
          ],
          "exampleUrls": "https://e.gkd.li/23937c2d-379c-4fb5-aaee-7295bcf0afca"
        },
        {
          "anyMatches": [
            "[vid=\"close_dislike\"][visibleToUser=true]",
            "@[text=\"关闭\"][clickable=true] -n * <<(2,4) [name$=\"ComposeView\" || name$=\"FrameLayout\"] <n [vid=\"recycler\"]"
          ],
          "preKeys": [
            5
          ],
          "key": 6,
          "name": "③点击[关闭]",
          "snapshotUrls": [
            "https://i.gkd.li/i/18587456",
            "https://i.gkd.li/i/25739074"
          ],
          "exampleUrls": "https://e.gkd.li/80514576-3656-4dcc-89f5-5992803c8e77"
        }
      ]
    },
    {
      "name": "功能类-自动关闭故事模式",
      "desc": "播放视频时退出竖屏模式",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 13,
      "rules": [
        {
          "matches": "[vid=\"story_ctrl_router\"][visibleToUser=true]",
          "activityIds": [
            "com.bilibili.video.story.StoryVideoActivity",
            "com.bilibili.video.story.StoryTransparentActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/18164075",
            "https://i.gkd.li/i/23325994"
          ],
          "exampleUrls": "https://e.gkd.li/4bfd6131-d4be-46be-affb-73338b01f49c",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动点击评论区的[展开更多评论]",
      "desc": "自动点击评论区的[展开更多评论]",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "@LinearLayout[clickable=true] > [text=\"展开更多评论\"]",
          "activityIds": [
            "com.bilibili.video.story.StoryVideoActivity",
            "com.bilibili.video.story.StoryTransparentActivity",
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
            "com.bilibili.ship.theseus.playlist.UnitedPlaylistActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/22572375",
            "https://i.gkd.li/i/23325508",
            "https://i.gkd.li/i/22573433",
            "https://i.gkd.li/i/23786106"
          ],
          "exampleUrls": "https://e.gkd.li/e7b7167e-7623-4079-9f16-fd253f303074",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动领取会员经验",
      "desc": "在会员中心页面自动领取会员经验",
      "enable": false,
      "key": 15,
      "rules": [
        {
          "matches": "TextView[childCount=0][text!=null][index=parent.childCount.minus(1)] -2 View >3 [text^=\"专属等级加速包\"] +2 @TextView[childCount=0][text=\"领取\"] <<n [vid=\"webview\"]",
          "activityIds": "com.bilibili.vip.web.VipWebActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/22886723",
            "https://i.gkd.li/i/22886739"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/23385023",
          "key": 0
        },
        {
          "matches": "@TextView[index=parent.childCount.minus(1)][text=\"领取\"] -n [text=\"领经验\"] < View <(2,3) View <3 View < [id=\"app\"][getChild(childCount.minus(1)).text$=\"隐私政策\"] <<(5,6) [vid=\"webview\"]",
          "activityIds": "com.bilibili.vip.web.VipWebActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/22886723",
            "https://i.gkd.li/i/22886739"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/23385023",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动点击查看原图",
      "desc": "浏览图片时自动切换至原图模式",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "[text^=\"查看原图\"][visibleToUser=true]",
          "activityIds": [
            "com.bilibili.video.story.StoryVideoActivity",
            "com.bilibili.video.story.StoryTransparentActivity",
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
            "com.bilibili.ship.theseus.playlist.UnitedPlaylistActivity",
            "com.bilibili.bplus.followinglist.page.browser.ui.LightBrowserActivityV2",
            "com.bilibili.lib.ui.ComposeActivity",
            "com.bilibili.column.ui.detail.image.ColumnImageViewerActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/23325552",
            "https://i.gkd.li/i/23304237",
            "https://i.gkd.li/i/23304245",
            "https://i.gkd.li/i/23786065",
            "https://i.gkd.li/i/23305280",
            "https://i.gkd.li/i/23305281",
            "https://i.gkd.li/i/23305275"
          ],
          "exampleUrls": "https://e.gkd.li/c0ffc9cb-fac0-4b5c-9645-3674942b5c7d",
          "key": 0
        }
      ]
    },
    {
      "name": "评价提示",
      "key": 17,
      "rules": [
        {
          "matches": "[vid=\"rating_dialog_close\"][clickable=true]",
          "activityIds": "com.bilibili.search2.main.BiliMainSearchActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23440560",
          "key": 0
        },
        {
          "matches": "[vid=\"rating_dialog_close\"][clickable=true]",
          "activityIds": [
            "com.bilibili.search2.main.BiliMainSearchActivity",
            ".MainActivityV2"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/23440560",
            "https://i.gkd.li/i/28225187"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-直播自动点赞",
      "desc": "左下角提示-点击",
      "key": 18,
      "rules": [
        {
          "matches": "@[vid=\"live_combo_action_button\"] > [text=\"点赞\"]",
          "activityIds": "com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25238947",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-直播自动投喂粉丝团",
      "desc": "左下角提示-点击投喂_需要0.1米谨慎开启(虽然只有一次)",
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 19,
      "rules": [
        {
          "matches": "@[vid=\"live_combo_action_button\"] > [text=\"投喂\"]",
          "activityIds": "com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25238945",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-动态推荐卡片广告",
      "desc": "点击卡片右上角[广告]按钮-点击不感兴趣",
      "enable": false,
      "fastQuery": true,
      "key": 20,
      "rules": [
        {
          "matches": "[id=\"tv.danmaku.bili:id/ad_goods_mark_big\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12700222"
        },
        {
          "matches": "[text=\"不感兴趣\"][id^=\"tv.danmaku.bili:id/reason\"]",
          "preKeys": 0,
          "snapshotUrls": "https://i.gkd.li/i/12700243",
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-视频底部与评论区中间卡片广告",
      "desc": "需点击二次弹窗 屏蔽原因",
      "enable": false,
      "fastQuery": true,
      "key": 21,
      "rules": [
        {
          "matches": "FrameLayout[id=\"tv.danmaku.bili:id/ad_tint_frame\"] >n [id^=\"tv.danmaku.bili:id/more\"]",
          "key": 0,
          "name": "点击卡片广告右侧菜单图标",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642260",
            "https://i.gkd.li/i/12705266",
            "https://i.gkd.li/i/12776568",
            "https://i.gkd.li/i/12707070"
          ]
        },
        {
          "matches": "[id=\"tv.danmaku.bili:id/dislike_reasons\"] @RelativeLayout > [text*=\"不感兴趣\"]",
          "preKeys": 0,
          "key": 1,
          "name": "点击屏蔽广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12642261",
            "https://i.gkd.li/i/13495649"
          ]
        }
      ]
    },
    {
      "name": "局部广告-视频悬浮广告",
      "desc": "领取大会员月卡,B站免流星卡",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 22,
      "rules": [
        {
          "matches": "[id=\"tv.danmaku.bili:id/toast_x\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-直播间卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 23,
      "rules": [
        {
          "matches": "[id=\"tv.danmaku.bili:id/shopping_close\"]",
          "key": 0,
          "name": "直播间底部售卖卡片",
          "snapshotUrls": "https://i.gkd.li/i/13200549"
        },
        {
          "matches": "@[vid=\"close\"] -2 * >2 [text=\"关注\"]",
          "fastQuery": true,
          "key": 1,
          "name": "[关注]弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14782965"
        }
      ]
    },
    {
      "name": "功能类-自动[展开]视频简介",
      "desc": "点击横版视频标题右侧",
      "key": 24,
      "rules": [
        {
          "matches": "@[vid=\"arrow\"] <2 [childCount=2] + [visibleToUser=true] > [vid=\"desc\"][visibleToUser=false]",
          "excludeMatches": "[vid=\"subscribe\"][text=\"收藏\"][visibleToUser=true]",
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/31691020",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/31691968",
            "https://i.gkd.li/i/31817499"
          ],
          "exampleUrls": "https://e.gkd.li/977a9ad8-63d6-4b7d-a5f8-78ba5632b91a",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动[关闭]弹幕",
      "desc": "仅在视频详情页生效",
      "key": 25,
      "rules": [
        {
          "matches": "@[desc=\"关闭弹幕\" || desc=\"Disable danmu\"] <2 View < View < [vid=\"danmaku_input_parent\"]",
          "actionDelay": 300,
          "actionCd": 3000,
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/33745857",
            "https://i.gkd.li/i/34027203"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/33745620",
          "exampleUrls": "https://e.gkd.li/abf8fe28-1d92-4603-9463-291f8ef66b92",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-视频自动x1.25倍速(⚠️三选一)",
      "desc": "依次点击 ①视频 ②更多 ③1.25倍速",
      "actionCd": 3000,
      "actionMaximum": 1,
      "resetMatch": "match",
      "fastQuery": true,
      "key": 26,
      "rules": [
        {
          "matches": "[vid=\"video_container\"] >2 [vid=\"control_container\"][visibleToUser=true][childCount=0]",
          "actionDelay": 1000,
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "key": 0,
          "name": "①点击视频",
          "snapshotUrls": [
            "https://i.gkd.li/i/25314184",
            "https://i.gkd.li/i/30978841"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/30980761"
        },
        {
          "matches": "[vid=\"toolbar_action_overflow\"][desc^=\"更多\"]",
          "preKeys": [
            0
          ],
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "key": 1,
          "name": "②点击[更多]",
          "snapshotUrls": "https://i.gkd.li/i/25314223"
        },
        {
          "matches": "[vid=\"container_top_more\"][visibleToUser=true]",
          "activityIds": "com.bilibili.video.story.StoryVideoActivity",
          "key": 2,
          "name": "②直接点击[更多]",
          "snapshotUrls": "https://i.gkd.li/i/30979293"
        },
        {
          "matches": "[text=\"倍速\"] + * >2 @[clickable=true] > [vid=\"title\"][text=\"1.25\"][visibleToUser=true]",
          "preKeys": [
            1,
            2
          ],
          "activityIds": [
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
            "com.bilibili.video.story.StoryVideoActivity"
          ],
          "key": 3,
          "name": "③选择[1.25]倍速",
          "snapshotUrls": [
            "https://i.gkd.li/i/25314490",
            "https://i.gkd.li/i/30979294"
          ]
        }
      ]
    },
    {
      "name": "功能类-视频自动x1.5倍速(⚠️三选一)",
      "desc": "依次点击 ①视频 ②更多 ③1.5倍速",
      "actionCd": 3000,
      "actionMaximum": 1,
      "resetMatch": "match",
      "fastQuery": true,
      "key": 27,
      "rules": [
        {
          "matches": "[vid=\"video_container\"] >2 [vid=\"control_container\"][visibleToUser=true][childCount=0]",
          "actionDelay": 1000,
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "key": 0,
          "name": "①点击视频"
        },
        {
          "matches": "[vid=\"toolbar_action_overflow\"][desc^=\"更多\"]",
          "preKeys": [
            0
          ],
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "key": 1,
          "name": "②点击[更多]"
        },
        {
          "matches": "[vid=\"container_top_more\"][visibleToUser=true]",
          "activityIds": "com.bilibili.video.story.StoryVideoActivity",
          "key": 2,
          "name": "②直接点击[更多]"
        },
        {
          "matches": "[text=\"倍速\"] + * >2 @[clickable=true] > [vid=\"title\"][text=\"1.5\"][visibleToUser=true]",
          "preKeys": [
            1,
            2
          ],
          "activityIds": [
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
            "com.bilibili.video.story.StoryVideoActivity"
          ],
          "key": 3,
          "name": "③选择[1.5]倍速",
          "snapshotUrls": [
            "https://i.gkd.li/i/25314490",
            "https://i.gkd.li/i/30979294"
          ]
        }
      ]
    },
    {
      "name": "功能类-视频自动x2.0倍速(⚠️三选一)",
      "desc": "依次点击 ①视频 ②更多 ③1.25倍速",
      "actionCd": 3000,
      "actionMaximum": 1,
      "resetMatch": "match",
      "fastQuery": true,
      "key": 28,
      "rules": [
        {
          "matches": "[vid=\"video_container\"] >2 [vid=\"control_container\"][visibleToUser=true][childCount=0]",
          "actionDelay": 1000,
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "key": 0,
          "name": "①点击视频"
        },
        {
          "matches": "[vid=\"toolbar_action_overflow\"][desc^=\"更多\"]",
          "preKeys": [
            0
          ],
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "key": 1,
          "name": "②点击[更多]"
        },
        {
          "matches": "[vid=\"container_top_more\"][visibleToUser=true]",
          "activityIds": "com.bilibili.video.story.StoryVideoActivity",
          "key": 2,
          "name": "②直接点击[更多]"
        },
        {
          "matches": "[text=\"倍速\"] + * >2 @[clickable=true] > [vid=\"title\"][text=\"2.0\"][visibleToUser=true]",
          "preKeys": [
            1,
            2
          ],
          "activityIds": [
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
            "com.bilibili.video.story.StoryVideoActivity"
          ],
          "key": 3,
          "name": "③选择[2.0]倍速",
          "snapshotUrls": [
            "https://i.gkd.li/i/25314490",
            "https://i.gkd.li/i/30979294"
          ]
        }
      ]
    },
    {
      "name": "功能类-折叠评论自动展开",
      "desc": "字数太多的评论自动点击展开",
      "key": 29,
      "rules": [
        {
          "matches": "[vid=\"comment_message\"][text$=\"展开\"][clickable=true][visibleToUser=true]",
          "position": {
            "left": "width * 0.1",
            "bottom": "height * 0.1"
          },
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25314489",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页浮标广告",
      "enable": false,
      "key": 30,
      "rules": [
        {
          "matches": "[vid=\"animation_close\"][clickable=true]",
          "activityIds": ".MainActivityV2",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25357810",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-悬浮窗权限",
      "desc": "点击[暂不开启]小窗模式",
      "key": 31,
      "rules": [
        {
          "matches": [
            "[text^=\"开启悬浮窗\"]",
            "[text=\"暂不开启\"][clickable=true]"
          ],
          "activityIds": [
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
            "com.bilibili.video.story.StoryVideoActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/25470098",
            "https://i.gkd.li/i/27551046"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-顶部黄色横幅提示",
      "desc": "点击横幅右边x掉",
      "key": 32,
      "rules": [
        {
          "matches": "@Image[text^=\"yellow-tip-close\"] <3 [childCount=3] <2 [id=\"app\"] < WebView < WebView < [vid=\"webview\"]",
          "activityIds": ".ui.webview.MWebActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25563755",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-创作中心自动展开更多",
      "desc": "点击[展开更多]",
      "fastQuery": true,
      "key": 33,
      "rules": [
        {
          "matches": "[vid=\"tv_expand\"][text*=\"展开\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.bilibili.upper.module.uppercenter.activity.UpperCenterMainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25563935",
          "excludeSnapshotUrls": "https://i.gkd.li/i/25563937"
        },
        {
          "matches": "Image - @TextView[text=\"展开更多\"] < View[childCount=2][visibleToUser=true] <n [id=\"app\"] < WebView < WebView < [vid=\"webview\"]",
          "activityIds": ".ui.webview.MWebActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/25564200"
        }
      ]
    },
    {
      "name": "局部广告-会员购",
      "desc": "底部横幅Ad",
      "enable": false,
      "key": 34,
      "rules": [
        {
          "matches": "[vid=\"mall_home_newuser_coupon_close\"][clickable=true]",
          "activityIds": ".MainActivityV2",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26240948",
          "exampleUrls": "https://e.gkd.li/027bbea9-3479-4c8c-a0b2-88fee8f03a85",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-视频页-即将展示Ad",
      "desc": "视频途中[x秒后展示广告] -> 取消",
      "enable": false,
      "key": 35,
      "rules": [
        {
          "matches": "@[text=\"取消\"] - [visibleToUser=true][text=\"后将展示广告\"] <<n [vid=\"video_container\"]",
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "matchRoot": true,
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/29379312",
            "https://i.gkd.li/i/32741484",
            "https://i.gkd.li/i/32783449"
          ],
          "exampleUrls": "https://e.gkd.li/2fed6260-9cd4-4546-a8ea-de89fce88b5d",
          "key": 0
        },
        {
          "matches": "@[text=\"取消\"][clickable=true][visibleToUser=true] - [text=\"后将展示广告\"] <2 View[childCount=3] <<2 ComposeView <<3 FrameLayout[childCount=1] <n * < [vid=\"video_container\"]",
          "activityIds": "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/29379312",
          "key": 1
        }
      ]
    },
    {
      "name": "其他-完善信息弹窗",
      "desc": "按[返回键]",
      "key": 36,
      "rules": [
        {
          "matches": "[vid=\"design_bottom_sheet\"] >2 [vid=\"title\"][text=\"完善信息，获取精准推荐\"]",
          "action": "back",
          "activityIds": ".MainActivityV2",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/31165755",
          "exampleUrls": "https://e.gkd.li/d7565e98-d424-49e1-a137-6b7b46c48cc7",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-直播间抽奖弹窗",
      "desc": "自动关闭直播间抽奖(福袋)结果",
      "key": 37,
      "rules": [
        {
          "matches": "[text^=\"中奖名单\"][visibleToUser=true] <(6-n) * <3 * - * -> @Image[desc=null][vid=null][text!=null][width<105 && height<104] <2 View[childCount=2] <<(1n-4) [id=\"app\"] < WebView <<(1n-4) [vid=\"browser\"]",
          "activityIds": "com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/34363614",
          "exampleUrls": "https://e.gkd.li/6559f724-c2e9-4f29-b13e-474ff78ead5d",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-动态推荐广告卡片",
      "desc": "关闭动态页面的广告卡片",
      "enable": false,
      "fastQuery": true,
      "key": 38,
      "rules": [
        {
          "matches": "[vid=\"ad_goods_mark_big\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12700222"
        },
        {
          "matches": "[text=\"不感兴趣\"][id^=\"tv.danmaku.bili:id/reason\"]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/import/12700243",
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-视频及搜索卡片广告",
      "desc": "关闭视频流和搜索结果中的广告卡片，包括视频底部、评论区中间、详情页下方等位置",
      "enable": false,
      "key": 39,
      "rules": [
        {
          "anyMatches": [
            "[height > prev.bottom.plus(200)] >n [(((desc*=\"广告\"||desc*=\"来自淘宝\")&&desc*=\"查看\")||desc$=\",,轻点两下查看详情\"||(desc^=\"【有奖调研】\"&&desc.length=22))||(id*=\"/ad_\")][visibleToUser=true] >(2,3,4) @ImageView[visibleToUser=true] < [vid^=\"more\" || id^=\"tv.danmaku.bili.adbiz:id/more\"][visibleToUser=true]",
            "[id$=\"ad_tint_frame\" || id$=\"root_container\" || id$=\"constraintLayout\"][visibleToUser=true] >(1,2,3) [vid=\"more\" || id=\"tv.danmaku.bili.adbiz:id/more\"]",
            "[text=\"课堂\" || text=\"纪录片\" || text=\"游戏\" || vid=\"bottom_container\" || vid=\"live_lottie_layout\"][index=2] +n [vid=\"more\"][visibleToUser=true]"
          ],
          "activityIds": [
            "tv.danmaku.bili.MainActivityV2",
            "com.bilibili.video.videodetail.VideoDetailsActivity",
            "com.bilibili.ship.theseus.all.UnitedBizDetailsActivity",
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity"
          ],
          "key": 0,
          "name": "点击广告卡片右侧菜单图标",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642260",
            "https://i.gkd.li/import/12705266",
            "https://i.gkd.li/import/12776568",
            "https://i.gkd.li/import/12707070",
            "https://i.gkd.li/i/14083540",
            "https://i.gkd.li/i/14059876",
            "https://i.gkd.li/i/14588315",
            "https://i.gkd.li/i/14729855",
            "https://i.gkd.li/i/17690786",
            "https://i.gkd.li/i/17690800",
            "https://i.gkd.li/i/17675629",
            "https://i.gkd.li/i/18274379",
            "https://i.gkd.li/i/19777632",
            "https://i.gkd.li/i/19919163",
            "https://i.gkd.li/i/19919168",
            "https://i.gkd.li/i/20739380",
            "https://i.gkd.li/i/20744764",
            "https://i.gkd.li/i/20794380",
            "https://i.gkd.li/i/21552836",
            "https://i.gkd.li/i/21705345",
            "https://i.gkd.li/i/21947622",
            "https://i.gkd.li/i/18306851",
            "https://i.gkd.li/i/19537979",
            "https://i.gkd.li/i/23012670",
            "https://i.gkd.li/i/23123800",
            "https://i.gkd.li/i/23687196",
            "https://i.gkd.li/i/27153803",
            "https://i.gkd.li/i/27686976",
            "https://i.gkd.li/i/23934632",
            "https://i.gkd.li/i/23933866",
            "https://i.gkd.li/i/24015674",
            "https://i.gkd.li/i/23933925",
            "https://i.gkd.li/i/17675894",
            "https://i.gkd.li/i/18306858",
            "https://i.gkd.li/i/28908101"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/23833031"
          ]
        },
        {
          "matches": "[vid=\"recycler\"] >n [text=\"我不想看\"]",
          "preKeys": [
            0
          ],
          "activityIds": [
            "tv.danmaku.bili.MainActivityV2",
            "com.bilibili.video.videodetail.VideoDetailsActivity",
            "com.bilibili.ship.theseus.all.UnitedBizDetailsActivity",
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "name": "点击[我不想看]",
          "snapshotUrls": [
            "https://i.gkd.li/i/17786751"
          ]
        },
        {
          "matches": "@[clickable=true] > [text=\"这个内容\" || text=\"不感兴趣\" || text=\"相似内容过多\" || text=\"up主不感兴趣\" || text=\"此类内容过多\" || text=\"对该up的直播不感兴趣\"|| text*=\"不想看\" || text$=\"质量差\" || text=\"减少直播推荐\" || text=\"和当前视频无关\"]",
          "preKeys": [
            0,
            1
          ],
          "activityIds": [
            "tv.danmaku.bili.MainActivityV2",
            "com.bilibili.video.videodetail.VideoDetailsActivity",
            "com.bilibili.ship.theseus.all.UnitedBizDetailsActivity",
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity"
          ],
          "fastQuery": true,
          "key": 2,
          "name": "点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13495649",
            "https://i.gkd.li/i/13742257",
            "https://i.gkd.li/i/13256605",
            "https://i.gkd.li/i/14155801",
            "https://i.gkd.li/i/13742257",
            "https://i.gkd.li/i/13945597",
            "https://i.gkd.li/i/14155272",
            "https://i.gkd.li/i/14059882",
            "https://i.gkd.li/i/13625309",
            "https://i.gkd.li/i/12642261",
            "https://i.gkd.li/i/17676025",
            "https://i.gkd.li/i/17676149",
            "https://i.gkd.li/i/17677147",
            "https://i.gkd.li/i/17786753",
            "https://i.gkd.li/i/18266291",
            "https://i.gkd.li/i/18274380",
            "https://i.gkd.li/i/18292926",
            "https://i.gkd.li/i/18296940",
            "https://i.gkd.li/i/18306839",
            "https://i.gkd.li/i/19777674",
            "https://i.gkd.li/i/19919165",
            "https://i.gkd.li/i/19919169",
            "https://i.gkd.li/i/20710223",
            "https://i.gkd.li/i/20718890",
            "https://i.gkd.li/i/20720187",
            "https://i.gkd.li/i/20739391",
            "https://i.gkd.li/i/23687208",
            "https://i.gkd.li/i/24836772",
            "https://i.gkd.li/i/24015691",
            "https://i.gkd.li/i/28659010",
            "https://i.gkd.li/i/30885647"
          ]
        },
        {
          "anyMatches": [
            "[vid=\"close_dislike\"][visibleToUser=true]",
            "@[text=\"关闭\"][clickable=true] -n * <<(2,4) [name$=\"ComposeView\" || name$=\"FrameLayout\"] <n [vid=\"recycler\"]"
          ],
          "preKeys": [
            2
          ],
          "activityIds": [
            "tv.danmaku.bili.MainActivityV2",
            "com.bilibili.video.videodetail.VideoDetailsActivity",
            "com.bilibili.ship.theseus.all.UnitedBizDetailsActivity",
            "com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity"
          ],
          "fastQuery": true,
          "key": 3,
          "name": "点击关闭",
          "snapshotUrls": [
            "https://i.gkd.li/i/17675894",
            "https://i.gkd.li/i/18587456",
            "https://i.gkd.li/i/25739074"
          ]
        },
        {
          "matches": "[vid=\"ad_tint_frame\"] > [vid=\"more\"][clickable=true]",
          "activityIds": "com.bilibili.search2.main.BiliMainSearchActivity",
          "fastQuery": true,
          "key": 4,
          "name": "搜索结果-点击右下角[菜单]",
          "snapshotUrls": [
            "https://i.gkd.li/i/17269053",
            "https://i.gkd.li/i/17964354",
            "https://i.gkd.li/i/28495212"
          ]
        },
        {
          "matches": "@[clickable=true] > [text$=\"不感兴趣\" || text*=\"不想看\" || text$=\"质量差\"]",
          "preKeys": [
            4
          ],
          "activityIds": "com.bilibili.search2.main.BiliMainSearchActivity",
          "fastQuery": true,
          "key": 5,
          "name": "搜索结果-点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/i/17269055",
            "https://i.gkd.li/i/17964356",
            "https://i.gkd.li/i/22657666"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-完善信息弹窗",
      "desc": "按[返回键]",
      "enable": false,
      "key": 40,
      "rules": [
        {
          "matches": "[vid=\"design_bottom_sheet\"] >2 [vid=\"title\"][text=\"完善信息，获取精准推荐\"]",
          "action": "back",
          "activityIds": ".MainActivityV2",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/31165755",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-登录授权",
      "desc": "点击确认授权按钮",
      "enable": false,
      "key": 41,
      "rules": [
        {
          "matches": [
            "[text=\"哔哩哔哩扫码登录\"]",
            "[text=\"确认\"][visibleToUser=true]"
          ],
          "activityIds": ".ui.webview.MWebActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/24989484"
        }
      ]
    },
    {
      "name": "局部广告-动态推荐广告卡片",
      "desc": "点击卡片右上角[广告]按钮-点击不感兴趣",
      "enable": false,
      "fastQuery": true,
      "key": 42,
      "rules": [
        {
          "matches": "[id=`tv.danmaku.bili:id/ad_goods_mark_big`]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12700222"
        },
        {
          "matches": "[text=\"不感兴趣\"][id^=\"tv.danmaku.bili:id/reason\"]",
          "preKeys": 0,
          "snapshotUrls": "https://i.gkd.li/import/12700243",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-视频底部与评论区中间卡片式广告",
      "desc": "需点击二次弹窗 屏蔽原因",
      "enable": false,
      "fastQuery": true,
      "key": 43,
      "rules": [
        {
          "anyMatches": [
            "@ImageView < FrameLayout[id=\"tv.danmaku.bili:id/more\" || id=\"tv.danmaku.bili:id/more_layout\"] <n * < FrameLayout[id=\"tv.danmaku.bili:id/ad_tint_frame\"]",
            "@ImageView < FrameLayout[id=\"tv.danmaku.bili:id/more\"] <n RelativeLayout < FrameLayout < FrameLayout[id=\"tv.danmaku.bili:id/ad_tint_frame\"]"
          ],
          "key": 0,
          "name": "点击广告卡片右侧菜单图标",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642260",
            "https://i.gkd.li/import/12705266",
            "https://i.gkd.li/import/12776568"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/import/12707070"
          ]
        },
        {
          "matches": "TextView[text=\"不感兴趣\"||text=\"与视频内容不相关\"]",
          "preKeys": 0,
          "key": 1,
          "name": "点击屏蔽广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642261",
            "https://i.gkd.li/import/13495649"
          ]
        }
      ]
    },
    {
      "name": "其他-悬浮窗功能",
      "desc": "暂不开启",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 44,
      "rules": [
        {
          "matches": [
            "TextView[id=\"tv.danmaku.bili:id/common_dialog_title\"][text^=\"开启悬浮窗功能\"]",
            "TextView[id=\"tv.danmaku.bili:id/common_dialog_nagetive_btn\"][text=\"暂不开启\"]"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/19260138",
            "https://i.gkd.li/i/19402551"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-请求通知权限弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 45,
      "rules": [
        {
          "matches": "[text$=\"通知\"] +2 * > [id=\"tv.danmaku.bili:id/close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页-推荐视频卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 46,
      "rules": [
        {
          "matches": "[id=\"tv.danmaku.bili:id/ad_tint_frame\"] [id=\"tv.danmaku.bili:id/more\"]",
          "key": 0,
          "name": "点击广告卡片右下角菜单按钮",
          "snapshotUrls": "https://i.gkd.li/import/13256570"
        },
        {
          "matches": "@RelativeLayout > [text$=\"不感兴趣\"]",
          "preKeys": 0,
          "key": 1,
          "name": "点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13256605",
            "https://i.gkd.li/import/13625309",
            "https://i.gkd.li/import/13742257"
          ]
        }
      ]
    },
    {
      "name": "通知提示-订阅感兴趣的通知",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 47,
      "rules": [
        {
          "matches": [
            "TextView[id=\"tv.danmaku.bili:id/title\"][text=\"订阅感兴趣的通知\"]",
            "TextView[id=\"tv.danmaku.bili:id/close\"][text=\"暂不开启\"]"
          ],
          "activityIds": "kntr.common.compose.launcher.ComposeContainerActivity",
          "snapshotUrls": "https://i.gkd.li/i/19402549",
          "key": 0
        }
      ]
    },
    {
      "name": "评论区顶部公告横幅",
      "enable": false,
      "quickFind": true,
      "key": 48,
      "rules": [
        {
          "matches": "LinearLayout[id=`tv.danmaku.bili:id/ad_tint_frame`] > ImageView[id=\"tv.danmaku.bili:id/close\"][desc=`关闭`]",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 49,
      "rules": [
        {
          "matches": "TextView[text*=\"青少年模式\"] +n TextView[text=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "动态推荐广告卡片",
      "desc": "点击卡片右上角[广告]按钮-点击不感兴趣",
      "enable": false,
      "quickFind": true,
      "key": 50,
      "rules": [
        {
          "matches": "[id=`tv.danmaku.bili:id/ad_goods_mark_big`]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12700222"
        },
        {
          "matches": "[text=\"不感兴趣\"][id^=\"tv.danmaku.bili:id/reason\"]",
          "preKeys": 0,
          "snapshotUrls": "https://i.gkd.li/import/12700243",
          "key": 1
        }
      ]
    },
    {
      "name": "视频底部与评论区中间卡片式广告",
      "desc": "需点击二次弹窗 屏蔽原因",
      "enable": false,
      "quickFind": true,
      "key": 51,
      "rules": [
        {
          "matches": "FrameLayout[id=\"tv.danmaku.bili:id/ad_tint_frame\"] >n [id^=\"tv.danmaku.bili:id/more\"]",
          "key": 0,
          "name": "点击广告卡片右侧菜单图标",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642260",
            "https://i.gkd.li/import/12705266",
            "https://i.gkd.li/import/12776568",
            "https://i.gkd.li/import/12707070"
          ]
        },
        {
          "matches": "[id=\"tv.danmaku.bili:id/dislike_reasons\"] @RelativeLayout > [text*=\"不感兴趣\"]",
          "preKeys": 0,
          "key": 1,
          "name": "点击屏蔽广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12642261",
            "https://i.gkd.li/import/13495649"
          ]
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 52,
      "rules": [
        {
          "matches": "[id=\"tv.danmaku.bili:id/update_btn_cancel\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12649689",
            "https://i.gkd.li/import/13212209",
            "https://i.gkd.li/import/13228977",
            "https://i.gkd.li/import/13334963"
          ]
        }
      ]
    },
    {
      "name": "直播间卡片广告",
      "desc": "直播间底部售卖卡片-点击右上角x",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 54,
      "rules": [
        {
          "matches": "[id=\"tv.danmaku.bili:id/shopping_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求通知权限弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 55,
      "rules": [
        {
          "matches": "[text$=\"通知\"] +2 * > [id=\"tv.danmaku.bili:id/close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-推荐视频卡片广告",
      "enable": false,
      "quickFind": true,
      "key": 56,
      "rules": [
        {
          "matches": "[id=\"tv.danmaku.bili:id/ad_tint_frame\"] [id=\"tv.danmaku.bili:id/more\"]",
          "key": 0,
          "name": "点击广告卡片右下角菜单按钮",
          "snapshotUrls": "https://i.gkd.li/import/13256570"
        },
        {
          "matches": "@RelativeLayout > [text$=\"不感兴趣\"]",
          "preKeys": 0,
          "key": 1,
          "name": "点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13256605",
            "https://i.gkd.li/import/13625309",
            "https://i.gkd.li/import/13742257"
          ]
        }
      ]
    },
    {
      "name": "个性化内容推荐弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 57,
      "rules": [
        {
          "matches": "[text=\"开启个性化内容推荐\"] +3 [id=\"tv.danmaku.bili:id/close_button\"]",
          "key": 0
        }
      ]
    }
  ]
});
