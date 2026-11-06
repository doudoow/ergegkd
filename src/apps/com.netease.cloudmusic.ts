// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "网易云音乐",
  "id": "com.netease.cloudmusic",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\" || text*=\"Skip\"][text.length<10][width<500 && height<200][visibleToUser=true]",
          "excludeActivityIds": [
            ".music.biz.setting.activity.SettingActivity",
            ".music.biz.search.activity.SearchActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/15092772",
            "https://i.gkd.li/i/17892200"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/15092814",
            "https://i.gkd.li/i/16318423"
          ]
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "excludeActivityIds": "com.netease.cloudmusic.music.biz.setting.activity.SettingActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/15092772",
            "https://i.gkd.li/i/15092814"
          ]
        }
      ]
    },
    {
      "name": "分段广告-卡片广告",
      "desc": "点击[关闭]-点击[直接关闭]/[不感兴趣]",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"tag_ad_banner\" || vid=\"adTagView\" || vid=\"closeAction\"][clickable=true]",
          "activityIds": [
            ".activity.MainActivity",
            ".music.biz.comment.activity.CommentActivity",
            ".music.biz.voice.player.revisionV1.ProgramPlayerActivityV1"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13859634",
            "https://i.gkd.li/i/13927753",
            "https://i.gkd.li/i/14549836",
            "https://i.gkd.li/i/14275955",
            "https://i.gkd.li/i/16047087"
          ]
        },
        {
          "matches": "@ViewGroup[clickable=true][childCount=2] > ImageView - ViewGroup > TextView[text.length>0] <<n [vid=\"recyclerView\"]",
          "activityIds": ".music.biz.comment.activity.CommentActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/23771616"
        },
        {
          "matches": "@ViewGroup[clickable=true][childCount=1] + ViewGroup[childCount=1] > [text=\"艺人相关\"]",
          "activityIds": ".music.biz.comment.activity.CommentActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/23771678"
        },
        {
          "anyMatches": [
            "[text=\"直接关闭\"][clickable=true]",
            "@[clickable=true] > [text=\"不感兴趣\"]"
          ],
          "activityIds": [
            ".activity.MainActivity",
            ".music.biz.comment.activity.CommentActivity",
            ".music.biz.voice.player.revisionV1.ProgramPlayerActivityV1"
          ],
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13859635",
            "https://i.gkd.li/i/14932659",
            "https://i.gkd.li/i/16047089",
            "https://i.gkd.li/i/23771645"
          ]
        },
        {
          "matches": "[vid=\"adTagView\"][clickable=true]",
          "activityIds": [
            "com.netease.cloudmusic.music.biz.search.activity.SearchActivity",
            "com.netease.cloudmusic.activity.MainActivity"
          ],
          "excludeActivityIds": "com.netease.cloudmusic.music.biz.comment.activity.CommentActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/14277140",
            "https://i.gkd.li/i/13859634",
            "https://i.gkd.li/i/12829964",
            "https://i.gkd.li/i/12829953"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/a603ceca-7e89-4b1f-9e17-508c583b32d8"
        },
        {
          "matches": "[vid=\"tag_ad_banner\"][clickable=true]",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "fastQuery": true,
          "key": 5,
          "name": "推荐页广告",
          "snapshotUrls": "https://i.gkd.li/i/13927753",
          "exampleUrls": "https://m.gkd.li/57941037/b14cda2e-27e5-4a91-8037-3ccbf1f9d0da"
        },
        {
          "matches": "@ViewGroup[clickable=true][childCount=2] > ImageView - ViewGroup > TextView[text.length>0]",
          "activityIds": "com.netease.cloudmusic.music.biz.comment.activity.CommentActivity",
          "key": 6,
          "name": "评论区内容推荐",
          "snapshotUrls": [
            "https://i.gkd.li/i/13526986",
            "https://i.gkd.li/i/13526711"
          ]
        },
        {
          "matches": "[text=\"直接关闭\"]",
          "activityIds": [
            "com.netease.cloudmusic.module.ad.feedback.AdFeedbackBottomSheet",
            "com.netease.cloudmusic.music.biz.search.activity.SearchActivity",
            "com.netease.cloudmusic.activity.MainActivity"
          ],
          "fastQuery": true,
          "key": 7,
          "snapshotUrls": [
            "https://i.gkd.li/i/12829967",
            "https://i.gkd.li/i/14277137",
            "https://i.gkd.li/i/13859635"
          ]
        },
        {
          "matches": "@[id=\"com.netease.cloudmusic:id/artist_container\"] > [text=\"不感兴趣\"]",
          "preKeys": 6,
          "activityIds": "com.netease.cloudmusic.music.biz.comment.activity.CommentActivity",
          "fastQuery": true,
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/13526712"
        },
        {
          "matches": "[vid=\"adTagView\" || vid=\"adTagViewNew\"][clickable=true]",
          "activityIds": ".music.biz.search.activity.SearchActivity",
          "fastQuery": true,
          "key": 9,
          "name": "搜索页-点击广告标记",
          "snapshotUrls": [
            "https://i.gkd.li/i/16357208",
            "https://i.gkd.li/i/16357111"
          ],
          "exampleUrls": "https://e.gkd.li/afb3fc72-7a69-489a-ac5a-7a70f5685667"
        },
        {
          "matches": "[text=\"直接关闭\"]",
          "preKeys": [
            9
          ],
          "activityIds": ".music.biz.search.activity.SearchActivity",
          "fastQuery": true,
          "key": 10,
          "name": "搜索页-直接关闭",
          "snapshotUrls": "https://i.gkd.li/i/16357210",
          "exampleUrls": "https://e.gkd.li/1e2b2822-01dd-455f-8991-1b746c61c07c"
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"iv_ad_close\"]",
          "activityIds": ".activity.PlayerActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15282417"
        },
        {
          "matches": "[vid=\"adCloseIV\"][visibleToUser=true]",
          "activityIds": ".music.biz.search.activity.SearchActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16385547"
        },
        {
          "matches": "[vid=\"v_close\"][visibleToUser=true]",
          "activityIds": ".activity.MainActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/23982125"
        },
        {
          "matches": "[id=\"com.netease.cloudmusic:id/resource_view\"] > [id=\"com.netease.cloudmusic:id/close_btn\"]",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "key": 3,
          "name": "[我的]页面广告",
          "snapshotUrls": "https://i.gkd.li/i/12745666",
          "exampleUrls": "https://m.gkd.li/57941037/827ebe8b-f3c6-4068-8d31-11d5b2578680"
        },
        {
          "matches": "[vid=\"adTagView\"]",
          "actionMaximum": 1,
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "matchTime": 10000,
          "resetMatch": "app",
          "key": 4,
          "name": "首页卡片广告",
          "snapshotUrls": "https://i.gkd.li/i/15047096"
        },
        {
          "matches": "[vid=\"iv_ad_close\"]",
          "activityIds": "com.netease.cloudmusic.activity.PlayerActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/15282417"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭各类弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"dsl_dialog_root\" || text^=\"邀您开通VIP\" || text^=\"本周已免费试听\" || text^=\"免费听模式体验中\" || text^=\"续费后，即可畅听\" || text*=\"小组件到桌面\"][visibleToUser=true]",
          "excludeMatches": "[text=\"当前场景\" || vid=\"mainDrawerContainer\"][visibleToUser=true]",
          "action": "back",
          "activityIds": [
            ".activity.MainActivity",
            ".activity.PlayerActivity",
            ".music.biz.rn.activity.LayerReactNativeActivity",
            ".music.biz.comment.activity.CommentActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13804534",
            "https://i.gkd.li/i/13848913",
            "https://i.gkd.li/i/13962214",
            "https://i.gkd.li/i/14036940",
            "https://i.gkd.li/i/15047126",
            "https://i.gkd.li/i/15125892",
            "https://i.gkd.li/i/15244091",
            "https://i.gkd.li/i/20097535",
            "https://i.gkd.li/i/20097609",
            "https://i.gkd.li/i/20115012",
            "https://i.gkd.li/i/22451511",
            "https://i.gkd.li/i/23770986",
            "https://i.gkd.li/i/23770978"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/15404777",
            "https://i.gkd.li/i/20115204",
            "https://i.gkd.li/i/20159204",
            "https://i.gkd.li/i/24157914"
          ]
        },
        {
          "matches": "WebView >n View > TextView + TextView + TextView",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13188737"
        },
        {
          "matches": "@ImageView[visibleToUser=true] - * > [text=\"广告\"]",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13229016",
            "https://i.gkd.li/i/13962214"
          ]
        },
        {
          "matches": "ViewGroup[childCount=2] > @ImageView[index=1][clickable=true][visibleToUser=true] <<n [vid=\"dsl_dialog_root\"]",
          "activityIds": [
            "com.netease.cloudmusic.activity.MainActivity",
            "com.netease.cloudmusic.activity.PlayerActivity"
          ],
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/14036940",
            "https://i.gkd.li/i/15244091"
          ]
        },
        {
          "matches": "[text=\"赞赏功能全新升级啦\"]",
          "action": "back",
          "activityIds": "com.netease.cloudmusic.activity.PlayerActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/13848913"
        },
        {
          "matches": "[text=\"立即限免体验\"]",
          "action": "back",
          "activityIds": "com.netease.cloudmusic.activity.PlayerActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/15125892"
        },
        {
          "matches": "View[childCount=4] > @TextView[index=2][visibleToUser=true] <<n [vid=\"popLayerWebViewContainer\"]",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/15160018"
        },
        {
          "matches": "[vid=\"dsl_dialog_root\" || text^=\"邀您开通VIP\" || text^=\"本周已免费试听\" || text^=\"免费听模式体验中\" || text^=\"续费后，即可畅听\" || text*=\"小组件到桌面\" || text$=\"开通VIP畅听\"][visibleToUser=true]",
          "excludeMatches": "[text=\"当前场景\" || vid=\"mainDrawerContainer\"][visibleToUser=true]",
          "action": "back",
          "activityIds": [
            ".activity.MainActivity",
            ".activity.PlayerActivity",
            ".music.biz.rn.activity.LayerReactNativeActivity",
            ".music.biz.comment.activity.CommentActivity"
          ],
          "key": 7,
          "snapshotUrls": [
            "https://i.gkd.li/i/13804534",
            "https://i.gkd.li/i/13848913",
            "https://i.gkd.li/i/13962214",
            "https://i.gkd.li/i/14036940",
            "https://i.gkd.li/i/15047126",
            "https://i.gkd.li/i/15125892",
            "https://i.gkd.li/i/15244091",
            "https://i.gkd.li/i/23770986",
            "https://i.gkd.li/i/20097535",
            "https://i.gkd.li/i/20097609",
            "https://i.gkd.li/i/20115012",
            "https://i.gkd.li/i/22451511",
            "https://i.gkd.li/i/23770978",
            "https://i.gkd.li/i/27080453"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/15404777",
            "https://i.gkd.li/i/20115204",
            "https://i.gkd.li/i/20159204",
            "https://i.gkd.li/i/24157914"
          ]
        },
        {
          "matches": "[vid=\"dsl_dialog_root\" || text^=\"邀您开通VIP\" || text^=\"本周已免费试听\" || text^=\"免费听模式体验中\" || text$=\"立即续费\" || text*=\"小组件到桌面\"][visibleToUser=true]",
          "excludeMatches": "[text=\"当前场景\"][visibleToUser=true]",
          "action": "back",
          "activityIds": [
            ".activity.MainActivity",
            ".activity.PlayerActivity",
            ".music.biz.rn.activity.LayerReactNativeActivity",
            ".music.biz.comment.activity.CommentActivity"
          ],
          "key": 8,
          "snapshotUrls": [
            "https://i.gkd.li/i/13804534",
            "https://i.gkd.li/i/13848913",
            "https://i.gkd.li/i/13962214",
            "https://i.gkd.li/i/14036940",
            "https://i.gkd.li/i/15047126",
            "https://i.gkd.li/i/15125892",
            "https://i.gkd.li/i/15244091",
            "https://i.gkd.li/i/20097535",
            "https://i.gkd.li/i/20097609",
            "https://i.gkd.li/i/20115012",
            "https://i.gkd.li/i/22451511",
            "https://i.gkd.li/i/23770986",
            "https://i.gkd.li/i/23770978"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/15404777",
            "https://i.gkd.li/i/20115204",
            "https://i.gkd.li/i/20159204"
          ]
        },
        {
          "matches": "WebView >n View > TextView + TextView + TextView",
          "key": 9,
          "name": "音乐专辑售卖广告弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13188737"
        },
        {
          "matches": "[text=\"广告\"] < ViewGroup + ImageView",
          "key": 10,
          "name": "京东双十一广告弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13229016"
        },
        {
          "matches": "[id=\"com.netease.cloudmusic:id/dsl_dialog_root\"] >n ViewGroup[childCount=2] > ImageView + ImageView[clickable=true]",
          "key": 11,
          "snapshotUrls": "https://i.gkd.li/import/13684724"
        }
      ]
    },
    {
      "name": "全屏广告-VIP弹窗",
      "desc": "点击关闭VIP类弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text=\"支付宝\"][visibleToUser=true]",
            "[text^=\"确认协议并\" || text=\"立即开通\"][visibleToUser=true]"
          ],
          "action": "back",
          "activityIds": [
            ".music.biz.rn.activity.MainProcessLayerReactNativeActivity",
            ".activity.MainActivity",
            ".activity.PlayListActivity",
            ".music.biz.rn.activity.LayerReactNativeActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13189055",
            "https://i.gkd.li/i/13260416",
            "https://i.gkd.li/i/13996787",
            "https://i.gkd.li/i/13230605",
            "https://i.gkd.li/i/14268181",
            "https://i.gkd.li/i/13391498",
            "https://i.gkd.li/i/14045917",
            "https://i.gkd.li/i/14926722",
            "https://i.gkd.li/i/16242200",
            "https://i.gkd.li/i/20097276",
            "https://i.gkd.li/i/20218350"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/20097306"
        },
        {
          "matches": "[text=\"忍痛离开\"] < @ViewGroup[clickable=true] -n * > [text$=\"VIP可畅享千万曲库\"]",
          "activityIds": "com.netease.cloudmusic.music.biz.rn.activity.CashierRNActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/24548104"
        },
        {
          "matches": [
            "[text=\"支付宝\"]",
            "[text^=\"确认协议并\"]"
          ],
          "action": "back",
          "activityIds": [
            "com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity",
            "com.netease.cloudmusic.activity.MainActivity"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13189055",
            "https://i.gkd.li/i/13260416",
            "https://i.gkd.li/i/13996787",
            "https://i.gkd.li/i/13230605",
            "https://i.gkd.li/i/14268181",
            "https://i.gkd.li/i/13391498",
            "https://i.gkd.li/i/14045917",
            "https://i.gkd.li/i/14926722"
          ]
        },
        {
          "matches": "[text$=\"千万级会员曲库\"]",
          "action": "back",
          "activityIds": [
            "com.netease.cloudmusic.activity.MainActivity",
            "com.netease.cloudmusic.music.biz.rn.activity.LayerReactNativeActivity"
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13228955",
            "https://i.gkd.li/i/14956768"
          ]
        },
        {
          "matches": "[text=\"搭配沉浸环绕声，享受空间音感\"]",
          "action": "back",
          "activityIds": "com.netease.cloudmusic.activity.PlayerActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/13230603"
        },
        {
          "matches": "[text*=\"免费听30分钟\"]",
          "action": "back",
          "activityIds": [
            "com.netease.cloudmusic.activity.MainActivity",
            "com.netease.cloudmusic.activity.PlayerActivity"
          ],
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/12843383",
            "https://i.gkd.li/i/13804534",
            "https://i.gkd.li/i/15047126"
          ]
        },
        {
          "matches": "[vid=\"view_button_main\"][text*=\"立即续费\"]",
          "action": "back",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/14969806"
        },
        {
          "matches": "[text=\"忍痛离开\"] < @ViewGroup[clickable=true] -n * > [text$=\"VIP可畅享千万曲库\"]",
          "activityIds": ".music.biz.rn.activity.CashierRNActivity",
          "fastQuery": true,
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/24548104"
        },
        {
          "matches": "[text=\"忍痛离开\"] < @ViewGroup[clickable=true] -n * > [text$=\"VIP可畅享千万曲库\"]",
          "activityIds": "com.netease.cloudmusic.music.biz.rn.activity.CashierRNActivity",
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/24548104"
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
      "key": 5,
      "rules": [
        {
          "matches": [
            "[text*=\"新版本\"]",
            "[text=\"近期不再提示\"]"
          ],
          "activityIds": ".activity.MainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13233790",
          "excludeSnapshotUrls": "https://i.gkd.li/i/15092457"
        },
        {
          "matches": [
            "[vid=\"updateVersionTitle\"][visibleToUser=true]",
            "[vid=\"md_dialog_cm_close_btn\"][visibleToUser=true]"
          ],
          "activityIds": ".activity.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/18492805",
          "exampleUrls": "https://e.gkd.li/8827aa5a-a105-4910-981c-d9ecc036a87d"
        },
        {
          "matches": [
            "[text*=\"新版本\"]",
            "[text=\"近期不再提示\"]"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13233790",
            "https://i.gkd.li/i/13197457",
            "https://i.gkd.li/i/13228878",
            "https://i.gkd.li/i/15092457"
          ]
        },
        {
          "matches": "[id=\"com.netease.cloudmusic:id/md_dialog_cm_close_btn\"]",
          "activityIds": [
            "com.netease.cloudmusic.activity.MainActivity",
            "com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity"
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/import/13233790",
            "https://i.gkd.li/import/13197457",
            "https://i.gkd.li/import/13228878"
          ]
        }
      ]
    },
    {
      "name": "功能类-扫码后自动点击[授权登录]",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[text=\"授权登录\"][clickable=true]",
          "activityIds": ".module.login.LoginPermissionActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14830218",
          "key": 0
        },
        {
          "matches": "[text=\"授权登录\"][clickable=true]",
          "activityIds": "com.netease.cloudmusic.module.login.LoginPermissionActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14830218",
          "exampleUrls": "https://m.gkd.li/57941037/f2aa603b-d1d1-4f92-86ae-e311e79a011d",
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-搜索页广告",
      "desc": "该规则触发时会导致输入法收起",
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[vid=\"adTagView\" || vid=\"adTagViewNew\"][clickable=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/16357208",
            "https://i.gkd.li/i/16357111"
          ],
          "exampleUrls": "https://e.gkd.li/afb3fc72-7a69-489a-ac5a-7a70f5685667"
        },
        {
          "matches": "[text=\"直接关闭\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16357210",
          "exampleUrls": "https://e.gkd.li/1e2b2822-01dd-455f-8991-1b746c61c07c"
        }
      ]
    },
    {
      "name": "局部广告-播放界面广告",
      "desc": "右上角 VIP 小悬浮、巨幅卡片式广告",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "TextView[text!=null] + ImageView[id=\"com.netease.cloudmusic:id/close\"]",
          "key": 0,
          "name": "右上角 VIP 小悬浮",
          "snapshotUrls": [
            "https://i.gkd.li/i/13402634",
            "https://i.gkd.li/i/13402635",
            "https://i.gkd.li/i/13402636"
          ]
        },
        {
          "matches": "[text^=\"跳过广告\"][text.length<=10]",
          "key": 1,
          "name": "巨幅卡片式广告1",
          "snapshotUrls": "https://i.gkd.li/i/13527105"
        },
        {
          "matches": "@TextView[index=2] <3 ViewGroup[childCount=3] <<n [id=\"com.netease.cloudmusic:id/container\"]",
          "key": 2,
          "name": "巨幅卡片式广告2",
          "snapshotUrls": "https://i.gkd.li/i/14045424"
        }
      ]
    },
    {
      "name": "局部广告-发现页顶部视频广告",
      "desc": "自动点击跳过。",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.netease.cloudmusic:id/skipBannerAd\"]",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13768367",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-功能升级弹窗",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[text=\"下次再说\"] < ViewGroup",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "key": 0,
          "name": "\"我的\"升级-下次再说",
          "snapshotUrls": "https://i.gkd.li/i/13804541"
        },
        {
          "matches": "[text=\"社区广场全新升级\"] + ViewGroup > ImageView",
          "activityIds": "com.netease.cloudmusic.music.biz.rn.activity.LayerReactNativeActivity",
          "key": 1,
          "name": "\"社区广场\"升级-点击右上角x",
          "snapshotUrls": "https://i.gkd.li/i/13804544"
        }
      ]
    },
    {
      "name": "分段广告-评论区广告",
      "desc": "点击[关闭]-点击[不感兴趣]",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "[vid=\"commentVHRootId\"][visibleToUser=true] - [vid=\"commentVHRootId\"] [vid=\"closeAction\"][clickable=true]",
          "key": 0,
          "name": "点击关闭-1",
          "snapshotUrls": "https://i.gkd.li/i/14549836"
        },
        {
          "matches": "[vid=\"commentVHRootId\"][visibleToUser=true] - [vid=\"commentAdContainer\"] >n [vid=\"adTagView\"]",
          "key": 1,
          "name": "点击关闭-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/14275571",
            "https://i.gkd.li/i/14275955",
            "https://i.gkd.li/i/14070500",
            "https://i.gkd.li/i/14964827",
            "https://i.gkd.li/i/14964828"
          ]
        },
        {
          "matches": "[text=\"直接关闭\"]",
          "preKeys": [
            1
          ],
          "key": 2,
          "name": "点击[直接关闭]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14932659",
            "https://i.gkd.li/i/14964832"
          ]
        },
        {
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 3,
          "name": "点击[不感兴趣]",
          "snapshotUrls": "https://i.gkd.li/i/14549856"
        }
      ]
    },
    {
      "name": "全屏广告-[获得新徽章]弹窗",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 12,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] <n * > [text=\"查看我的勋章\"]",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14926750",
          "exampleUrls": "https://m.gkd.li/57941037/39e34e7d-eae3-4a54-9794-97c2528d13fb",
          "key": 0
        }
      ]
    },
    {
      "name": "其他-分享时[取消勾选]得现金",
      "desc": "仅点击1次",
      "key": 13,
      "rules": [
        {
          "matches": "@[clickable=true] > ImageView + [text*=\"勾选后分享到\"]",
          "actionMaximum": 1,
          "activityIds": ".music.biz.rn.activity.MainProcessLayerReactNativeActivity",
          "fastQuery": true,
          "resetMatch": "match",
          "snapshotUrls": "https://i.gkd.li/i/33880660",
          "exampleUrls": "https://e.gkd.li/61178688-ca5c-4d21-96a2-8d8382665433",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告",
      "desc": "有二次确认弹窗",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 14,
      "rules": [
        {
          "matches": [
            "[id=\"com.netease.cloudmusic:id/adTagView\"]",
            "[vid=\"adTagClose\"]"
          ],
          "activityIds": [
            "com.netease.cloudmusic.activity.MainActivity",
            "com.netease.cloudmusic.music.biz.comment.activity.CommentActivity",
            "com.netease.cloudmusic.music.biz.comment.activity.ReplyCommentActivity2",
            "com.netease.cloudmusic.music.biz.search.activity.SearchActivity"
          ],
          "key": 0,
          "name": "卡片式广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12829944",
            "https://i.gkd.li/import/12723229",
            "https://i.gkd.li/import/12829938",
            "https://i.gkd.li/import/12829964",
            "https://i.gkd.li/import/12829953",
            "https://i.gkd.li/import/13859634"
          ]
        },
        {
          "matches": "[vid=\"tag_ad_banner\"]",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13927753"
        },
        {
          "matches": "@ViewGroup[clickable=true][childCount=2] > ImageView - ViewGroup > TextView[text.length>0]",
          "activityIds": "com.netease.cloudmusic.music.biz.comment.activity.CommentActivity",
          "key": 2,
          "name": "信息流广告-评论区内容推荐",
          "snapshotUrls": [
            "https://i.gkd.li/import/13526986",
            "https://i.gkd.li/import/13526711"
          ]
        },
        {
          "matches": "[text=\"直接关闭\"]",
          "preKeys": [
            0,
            1
          ],
          "activityIds": [
            "com.netease.cloudmusic.module.ad.feedback.AdFeedbackBottomSheet",
            "com.netease.cloudmusic.music.biz.search.activity.SearchActivity",
            "com.netease.cloudmusic.activity.MainActivity"
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/import/12829967",
            "https://i.gkd.li/import/13627047",
            "https://i.gkd.li/import/13859635"
          ]
        },
        {
          "matches": "@[id=\"com.netease.cloudmusic:id/artist_container\"] > [text=\"不感兴趣\"]",
          "preKeys": 2,
          "activityIds": "com.netease.cloudmusic.music.biz.comment.activity.CommentActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/import/13526712"
        }
      ]
    },
    {
      "name": "局部广告-我的页面-中间滚动广告",
      "enable": false,
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.netease.cloudmusic:id/auto_scroll_switcher\"] + [id=\"com.netease.cloudmusic:id/close_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-VIP 弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 17,
      "rules": [
        {
          "matches": "ImageView < @ViewGroup[clickable=true] <2 ViewGroup < ViewGroup + ScrollView [text=\"会员套餐\"]",
          "activityIds": "com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13189055",
            "https://i.gkd.li/import/13260416"
          ]
        },
        {
          "matches": "@ImageView - ViewGroup > [text=\"解锁千万级会员曲库\"]",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "key": 1,
          "name": "专属优惠-VIP续费弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13228955"
        },
        {
          "matches": "@ImageView -2 ViewGroup [text=\"解锁更高音质\"]",
          "activityIds": "com.netease.cloudmusic.activity.PlayerActivity",
          "key": 2,
          "name": "解锁更高音质",
          "snapshotUrls": "https://i.gkd.li/import/13230603"
        },
        {
          "matches": "ImageView < @ViewGroup -3 ViewGroup [text=\"您的黑胶VIP已过期\"]",
          "activityIds": "com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity",
          "key": 3,
          "name": "黑胶过期-VIP续费弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13230605"
        },
        {
          "matches": "[text*=\"搭配会员音效\"] + @ViewGroup[childCount=1] > ImageView",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "key": 4,
          "name": "搭配会员音效-VIP支付弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13391498"
        }
      ]
    },
    {
      "name": "局部广告-发现-顶部视频广告",
      "desc": "自动点击跳过。",
      "enable": false,
      "fastQuery": true,
      "key": 18,
      "rules": [
        {
          "matches": "[id=\"com.netease.cloudmusic:id/skipBannerAd\"]",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13768367",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-免费听弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 19,
      "rules": [
        {
          "matches": "@ImageView + ViewGroup > [text=\"VIP歌曲免费听30分钟\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-功能升级弹窗",
      "enable": false,
      "key": 20,
      "rules": [
        {
          "matches": "[text=\"下次再说\"] < ViewGroup",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "key": 0,
          "name": "【我的】升级-下次再说",
          "snapshotUrls": "https://i.gkd.li/import/13804541"
        },
        {
          "matches": "[text=\"社区广场全新升级\"] + ViewGroup > ImageView",
          "activityIds": "com.netease.cloudmusic.music.biz.rn.activity.LayerReactNativeActivity",
          "key": 1,
          "name": "全屏广告-【社区广场】升级-点击右上角x",
          "snapshotUrls": "https://i.gkd.li/import/13804544"
        }
      ]
    },
    {
      "name": "全屏广告-播放页赞赏好音乐弹窗",
      "desc": "点击X",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 21,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] +3 * > [text=\"立即支持\"]",
          "activityIds": "com.netease.cloudmusic.activity.PlayerActivity",
          "snapshotUrls": "https://i.gkd.li/import/13848913",
          "key": 0
        }
      ]
    },
    {
      "name": "我的页面-中间滚动广告",
      "enable": false,
      "quickFind": true,
      "key": 22,
      "rules": [
        {
          "matches": "[id=\"com.netease.cloudmusic:id/auto_scroll_switcher\"] + [id=\"com.netease.cloudmusic:id/close_btn\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 24,
      "rules": [
        {
          "matches": "WebView >n View > TextView + TextView + TextView",
          "key": 0,
          "name": "音乐专辑售卖广告弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13188737"
        },
        {
          "matches": "[text=\"广告\"] < ViewGroup + ImageView",
          "key": 1,
          "name": "京东双十一广告弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13229016"
        },
        {
          "matches": "[id=\"com.netease.cloudmusic:id/dsl_dialog_root\"] >n ViewGroup[childCount=2] > ImageView + ImageView[clickable=true]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13684724"
        }
      ]
    },
    {
      "name": "VIP 弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 25,
      "rules": [
        {
          "matches": "ImageView < @ViewGroup[clickable=true] <2 ViewGroup < ViewGroup + ScrollView [text=\"会员套餐\"]",
          "activityIds": "com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13189055",
            "https://i.gkd.li/import/13260416"
          ]
        },
        {
          "matches": "@ImageView - ViewGroup > [text=\"解锁千万级会员曲库\"]",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "key": 1,
          "name": "专属优惠-VIP续费弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13228955"
        },
        {
          "matches": "@ImageView -2 ViewGroup [text=\"解锁更高音质\"]",
          "activityIds": "com.netease.cloudmusic.activity.PlayerActivity",
          "key": 2,
          "name": "解锁更高音质",
          "snapshotUrls": "https://i.gkd.li/import/13230603"
        },
        {
          "matches": "ImageView < @ViewGroup -3 ViewGroup [text=\"您的黑胶VIP已过期\"]",
          "activityIds": "com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity",
          "key": 3,
          "name": "黑胶过期-VIP续费弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13230605"
        },
        {
          "matches": "[text*=\"搭配会员音效\"] + @ViewGroup[childCount=1] > ImageView",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "key": 4,
          "name": "搭配会员音效-VIP支付弹窗",
          "snapshotUrls": "https://i.gkd.li/import/13391498"
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "quickFind": true,
      "key": 26,
      "rules": [
        {
          "matches": "[id=\"com.netease.cloudmusic:id/md_dialog_cm_close_btn\"]",
          "activityIds": [
            "com.netease.cloudmusic.activity.MainActivity",
            "com.netease.cloudmusic.music.biz.rn.activity.MainProcessLayerReactNativeActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13233790",
            "https://i.gkd.li/import/13197457",
            "https://i.gkd.li/import/13228878"
          ]
        }
      ]
    },
    {
      "name": "播放界面广告",
      "desc": "右上角VIP小悬浮、巨幅卡片式广告",
      "enable": false,
      "quickFind": true,
      "key": 27,
      "rules": [
        {
          "matches": "TextView[text!=null] + ImageView[id=\"com.netease.cloudmusic:id/close\"]",
          "key": 0,
          "name": "右上角VIP小悬浮",
          "snapshotUrls": [
            "https://i.gkd.li/import/13402634",
            "https://i.gkd.li/import/13402635",
            "https://i.gkd.li/import/13402636"
          ]
        },
        {
          "matches": "[text^=\"跳过广告\"][text.length<=10]",
          "key": 1,
          "name": "巨幅卡片式广告",
          "snapshotUrls": "https://i.gkd.li/import/13527105"
        }
      ]
    },
    {
      "name": "发现-顶部视频广告",
      "desc": "自动点击跳过。",
      "enable": false,
      "quickFind": true,
      "key": 28,
      "rules": [
        {
          "matches": "[id=\"com.netease.cloudmusic:id/skipBannerAd\"]",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13768367",
          "key": 0
        }
      ]
    },
    {
      "name": "免费听弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 29,
      "rules": [
        {
          "matches": "@ImageView + ViewGroup > [text=\"VIP歌曲免费听30分钟\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能升级弹窗",
      "enable": false,
      "key": 30,
      "rules": [
        {
          "matches": "[text=\"下次再说\"] < ViewGroup",
          "activityIds": "com.netease.cloudmusic.activity.MainActivity",
          "key": 0,
          "name": "【我的】升级-下次再说",
          "snapshotUrls": "https://i.gkd.li/import/13804541"
        },
        {
          "matches": "[text=\"社区广场全新升级\"] + ViewGroup > ImageView",
          "activityIds": "com.netease.cloudmusic.music.biz.rn.activity.LayerReactNativeActivity",
          "key": 1,
          "name": "【社区广场】升级-点击右上角x",
          "snapshotUrls": "https://i.gkd.li/import/13804544"
        }
      ]
    }
  ]
});
