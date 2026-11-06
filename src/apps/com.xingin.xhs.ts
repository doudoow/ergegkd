// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小红书",
  "id": "com.xingin.xhs",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\" || text^=\"Skip Ad\"][text.length<10][!(vid=\"tv_user_name\")][visibleToUser=true]",
          "excludeMatches": "[text=\"首页\" || text=\"选择兴趣推荐更精准\"][visibleToUser=true]",
          "excludeActivityIds": [
            "com.xingin.alioth.search.GlobalSearchActivity",
            "com.xingin.growth.ob.FloatingObPageActivity",
            "com.xingin.matrix.notedetail.NoteDetailActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/17452158",
            "https://i.gkd.li/i/22951606"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/19035037",
            "https://i.gkd.li/i/20585457",
            "https://i.gkd.li/i/21937254"
          ],
          "exampleUrls": "https://e.gkd.li/9733ada7-4961-4a9f-b48d-3398ecd05508"
        },
        {
          "matches": "[vid=\"splash_count_down_view\"]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/17109105",
            "https://i.gkd.li/i/17108010"
          ],
          "exampleUrls": "https://e.gkd.li/6ed22307-ce1d-479e-8a8d-a6fe4ffa614c"
        },
        {
          "matches": "[text*=\"跳过\" || text^=\"Skip Ad\"][text.length<10][!(vid=\"tv_user_name\")][visibleToUser=true]",
          "excludeMatches": "[text=\"首页\" || text=\"选择兴趣推荐更精准\" || text=\"相关搜索\"][visibleToUser=true]",
          "excludeActivityIds": [
            "com.xingin.alioth.search.GlobalSearchActivity",
            "com.xingin.growth.ob.FloatingObPageActivity",
            "com.xingin.matrix.notedetail.NoteDetailActivity",
            "com.xingin.matrix.detail.activity.DetailFeedActivity"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/17452158",
            "https://i.gkd.li/i/22951606"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/19035037",
            "https://i.gkd.li/i/20585457",
            "https://i.gkd.li/i/21937254",
            "https://i.gkd.li/i/28885475"
          ],
          "exampleUrls": "https://e.gkd.li/9733ada7-4961-4a9f-b48d-3398ecd05508"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "excludeMatches": "[text=\"首页\"][visibleToUser=true]",
          "excludeActivityIds": "com.xingin.alioth.search.GlobalSearchActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/17452158",
          "excludeSnapshotUrls": "https://i.gkd.li/i/19035037",
          "exampleUrls": "https://e.gkd.li/9733ada7-4961-4a9f-b48d-3398ecd05508"
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 30000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] - LinearLayout > [text^=\"打开通知\" || text^=\"Enable notifications\"]",
          "activityIds": [
            ".index.v2.IndexActivityV2",
            ".notification.NotificationAuthorizationTranslucentActivity",
            "com.xingin.matrix.notedetail.r10.comment.r10.NoteCommentActivity",
            "com.xingin.authorization.NotificationAuthorizationTranslucentActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13195753",
            "https://i.gkd.li/i/13222356",
            "https://i.gkd.li/i/13255627",
            "https://i.gkd.li/i/16918033",
            "https://i.gkd.li/i/18417785"
          ]
        },
        {
          "matches": "@ImageView <2 FrameLayout - [text^=\"打开通知\"]",
          "activityIds": ".index.v2.IndexActivityV2",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13250418"
        },
        {
          "matches": "@ImageView <2 FrameLayout >2 [text^=\"打开通知\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13195753",
            "https://i.gkd.li/i/13222356",
            "https://i.gkd.li/i/13256145",
            "https://i.gkd.li/i/13255627"
          ],
          "key": 2
        },
        {
          "matches": "@ImageView <2 FrameLayout - [text^=\"打开通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/13250418",
          "key": 3
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView <2 * + * > [text=\"NEW\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13246890",
            "https://i.gkd.li/i/13741680",
            "https://i.gkd.li/i/14445193"
          ]
        },
        {
          "matches": "Button[text=\"立即安装\"] + Button[text=\"稍后再说\"]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/15283162",
            "https://i.gkd.li/i/18289347"
          ],
          "exampleUrls": "https://e.gkd.li/7064a569-fcdd-44e2-b4d1-c55e093f4a02"
        },
        {
          "matches": "Button[text=\"立即安装\" || text=\"Install now\"] + Button[text=\"稍后再说\" || text=\"Later\"]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/15283162",
            "https://i.gkd.li/i/30352967",
            "https://i.gkd.li/i/32207987"
          ],
          "exampleUrls": "https://e.gkd.li/7064a569-fcdd-44e2-b4d1-c55e093f4a02"
        },
        {
          "matches": "@ImageView[clickable=true] <2 FrameLayout +3 FrameLayout > Button[text=\"立即安装\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/13246890"
        },
        {
          "matches": "@ImageView[clickable=true] <2 FrameLayout +3 FrameLayout > Button[text=\"立即参与内测\"]",
          "actionMaximumKey": 0,
          "snapshotUrls": "https://i.gkd.li/import/13741680",
          "key": 4
        }
      ]
    },
    {
      "name": "分段广告-信息流广告",
      "desc": "长按\"赞助\"/\"广告\"标识的卡片-点\"不感兴趣\"",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@FrameLayout[clickable=true] > LinearLayout TextView[text=\"赞助\"||text=\"广告\"][visibleToUser=true]",
          "excludeMatches": "RecyclerView > LinearLayout > [text^=\"不喜欢\"]",
          "action": "longClick",
          "key": 0,
          "name": "长按\"赞助\"/\"广告\"卡片",
          "snapshotUrls": [
            "https://i.gkd.li/i/13455503",
            "https://i.gkd.li/i/13470690",
            "https://i.gkd.li/i/14392171"
          ]
        },
        {
          "matches": "RecyclerView > @LinearLayout[index=0] > TextView[text^=\"不喜欢\"]",
          "preKeys": [
            3
          ],
          "name": "点\"不感兴趣\"",
          "snapshotUrls": [
            "https://i.gkd.li/i/13455500",
            "https://i.gkd.li/i/14392187"
          ],
          "key": 1
        },
        {
          "matches": "RecyclerView > @LinearLayout[index=0] > TextView[text^=\"不喜欢\"]",
          "preKeys": 0,
          "name": "点\"不感兴趣\"",
          "snapshotUrls": [
            "https://i.gkd.li/i/13455500",
            "https://i.gkd.li/i/14392187"
          ],
          "key": 2
        },
        {
          "matches": "@[longClickable=true] >(1,3) TextView[text=\"赞助\" || text=\"广告\"][visibleToUser=true]",
          "excludeMatches": "RecyclerView > LinearLayout > [text^=\"不喜欢\"]",
          "action": "longClick",
          "key": 3,
          "name": "①长按[赞助/广告]卡片",
          "snapshotUrls": [
            "https://i.gkd.li/i/13455503",
            "https://i.gkd.li/i/13470690",
            "https://i.gkd.li/i/27015032",
            "https://i.gkd.li/i/27015306"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/14392171",
          "exampleUrls": [
            "https://e.gkd.li/728542d5-d6fe-44ab-91b2-a96ee34abdf8",
            "https://e.gkd.li/a5d7871e-05e1-4a77-b0f5-3d94d7fd7663"
          ]
        },
        {
          "matches": "@[clickable=true] > TextView[text^=\"不喜欢\"][text!*=\"作者\"][visibleToUser=true]",
          "preKeys": [
            3
          ],
          "name": "②点击[不喜欢]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13455500",
            "https://i.gkd.li/i/14392187",
            "https://i.gkd.li/i/26647708"
          ],
          "exampleUrls": [
            "https://e.gkd.li/cbf948c2-8a78-42a2-911d-c2369aaeff7d",
            "https://e.gkd.li/09f8f42b-ed78-4cd1-9d77-8327ca91e1e0"
          ],
          "key": 4
        }
      ]
    },
    {
      "name": "全屏广告-优惠券弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@ImageView[visibleToUser=true] < * -2 * > [text=\"你有新人券待领取\"]",
          "activityIds": "com.xingin.reactnative.ui.XhsReactTranslucentActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14391484"
        }
      ]
    },
    {
      "name": "评价提示-评分弹窗",
      "desc": "返回关闭弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "forcedTime": 4000,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"您对小红书的评分如何?\"]",
          "action": "back",
          "activityIds": "com.xingin.lurker.appscore.ui.AppScoreDialogActivity",
          "snapshotUrls": "https://i.gkd.li/i/15281458",
          "exampleUrls": "https://m.gkd.li/57941037/9727815d-b881-4904-bbdc-19ade426977e",
          "key": 0
        },
        {
          "matches": "[text=\"您对小红书的评分如何?\"][visibleToUser=true]",
          "action": "back",
          "activityIds": "com.xingin.lurker.appscore.ui.AppScoreDialogActivity",
          "snapshotUrls": "https://i.gkd.li/i/15281458",
          "exampleUrls": "https://m.gkd.li/57941037/9727815d-b881-4904-bbdc-19ade426977e",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-评论区-自动展开回复",
      "desc": "自动展开更多回复",
      "key": 6,
      "rules": [
        {
          "matches": "@[clickable=true] > [vid=\"loadMoreTV\"][text^=\"展开\"][text$=\"回复\"]",
          "activityIds": "com.xingin.matrix.notedetail.NoteDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25048251",
          "key": 0
        },
        {
          "matches": "@[clickable=true] >(1,2) [text^=\"展开\"][text$=\"条回复\"][text.length<12]",
          "activityIds": [
            "com.xingin.matrix.notedetail.NoteDetailActivity",
            "com.xingin.matrix.detail.activity.DetailFeedActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/25048251",
            "https://i.gkd.li/i/25823242",
            "https://i.gkd.li/i/27204200",
            "https://i.gkd.li/i/31308354"
          ],
          "exampleUrls": [
            "https://e.gkd.li/a211ebb1-2177-4264-9a60-280a5f8e2777"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-你可能感兴趣的人",
      "desc": "点击[关闭]",
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"你可能感兴趣的人\"] +2 Button[text=\"关闭\"]",
          "activityIds": "com.xingin.xhs.index.v2.IndexActivityV2",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25244655",
          "key": 0
        },
        {
          "matches": "[text=\"你可能感兴趣的人\"] +2 Button[text=\"关闭\"][clickable=true]",
          "activityIds": ".index.v2.IndexActivityV2",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25244655",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-关闭首页信息流中推荐博主",
      "key": 8,
      "rules": [
        {
          "matches": "[vid=\"recommend_close\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.xingin.xhs.index.v2.IndexActivityV2",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25245325",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-直播间各种卡片",
      "key": 9,
      "rules": [
        {
          "matches": "@ViewGroup[clickable=true][visibleToUser=true] - ViewGroup <<n [vid=\"canvasLayout\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25245250"
        }
      ]
    },
    {
      "name": "评价提示",
      "desc": "返回关闭弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "[text=\"您对小红书的评分如何?\"]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/i/15281458",
          "exampleUrls": "https://m.gkd.li/57941037/9727815d-b881-4904-bbdc-19ade426977e",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页信息流中推荐博主",
      "desc": "x掉 (关注xx的人也关注TA)",
      "key": 11,
      "rules": [
        {
          "matches": "[vid=\"recommend_close\"][clickable=true][visibleToUser=true]",
          "activityIds": ".index.v2.IndexActivityV2",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25245325",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-直播间右下角卡片",
      "key": 12,
      "rules": [
        {
          "matches": "ImageView < @[clickable=true] <n ViewGroup <<3 [vid=\"canvasLayout\"]",
          "activityIds": "com.xingin.alpha.audience.v2.AlphaAudienceActivityV2",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25245250",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动倍速⏩x0.75⚠️五选一",
      "desc": "适合观看细节场景需求",
      "actionMaximum": 1,
      "actionDelay": 3000,
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "[vid=\"layer_player\"][visibleToUser=true]",
          "action": "longClick",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25854264",
          "exampleUrls": "https://e.gkd.li/3d621ea3-af7b-49cf-95bb-4fd54fcc5b54"
        },
        {
          "matches": "[vid=\"video_speed_setting_ll\"] > [vid=\"speed_selection_1\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/25854394",
          "exampleUrls": [
            "https://e.gkd.li/3d621ea3-af7b-49cf-95bb-4fd54fcc5b54",
            "https://e.gkd.li/65ae2f11-3412-4f0a-a255-ffa5916bd9d9"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动倍速⏩x1.25⚠️五选一",
      "desc": "适合日常效率需求",
      "actionMaximum": 1,
      "actionDelay": 3000,
      "fastQuery": true,
      "key": 14,
      "rules": [
        {
          "matches": "[vid=\"layer_player\"][visibleToUser=true]",
          "action": "longClick",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25854264",
          "exampleUrls": "https://e.gkd.li/3d621ea3-af7b-49cf-95bb-4fd54fcc5b54"
        },
        {
          "matches": "[vid=\"video_speed_setting_ll\"] > [vid=\"speed_selection_3\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/25854394",
          "exampleUrls": [
            "https://e.gkd.li/3d621ea3-af7b-49cf-95bb-4fd54fcc5b54",
            "https://e.gkd.li/65ae2f11-3412-4f0a-a255-ffa5916bd9d9"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动倍速⏩x1.5⚠️五选一",
      "actionMaximum": 1,
      "actionDelay": 3000,
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": "[vid=\"layer_player\"][visibleToUser=true]",
          "action": "longClick",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25854264",
          "exampleUrls": "https://e.gkd.li/3d621ea3-af7b-49cf-95bb-4fd54fcc5b54"
        },
        {
          "matches": "[vid=\"video_speed_setting_ll\"] > [vid=\"speed_selection_4\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/25854394",
          "exampleUrls": [
            "https://e.gkd.li/3d621ea3-af7b-49cf-95bb-4fd54fcc5b54",
            "https://e.gkd.li/65ae2f11-3412-4f0a-a255-ffa5916bd9d9"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动倍速⏩x2.0⚠️五选一",
      "actionMaximum": 1,
      "actionDelay": 3000,
      "fastQuery": true,
      "key": 16,
      "rules": [
        {
          "matches": "[vid=\"layer_player\"][visibleToUser=true]",
          "action": "longClick",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25854264",
          "exampleUrls": "https://e.gkd.li/3d621ea3-af7b-49cf-95bb-4fd54fcc5b54"
        },
        {
          "matches": "[vid=\"video_speed_setting_ll\"] > [vid=\"speed_selection_5\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/25854394",
          "exampleUrls": [
            "https://e.gkd.li/3d621ea3-af7b-49cf-95bb-4fd54fcc5b54",
            "https://e.gkd.li/65ae2f11-3412-4f0a-a255-ffa5916bd9d9"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动倍速⏩x3.0⚠️五选一",
      "desc": "Max效率需求",
      "actionMaximum": 1,
      "actionDelay": 3000,
      "fastQuery": true,
      "key": 17,
      "rules": [
        {
          "matches": "[vid=\"layer_player\"][visibleToUser=true]",
          "action": "longClick",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25854264",
          "exampleUrls": "https://e.gkd.li/3d621ea3-af7b-49cf-95bb-4fd54fcc5b54"
        },
        {
          "matches": "[vid=\"video_speed_setting_ll\"] >2 [vid=\"speed_selection_6\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/25854394",
          "exampleUrls": [
            "https://e.gkd.li/3d621ea3-af7b-49cf-95bb-4fd54fcc5b54",
            "https://e.gkd.li/65ae2f11-3412-4f0a-a255-ffa5916bd9d9"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-直播卡片Ad",
      "desc": "长按\"直播中\"标识的卡片-点\"不喜欢\"",
      "fastQuery": true,
      "key": 18,
      "rules": [
        {
          "matches": "[text=\"直播中\"] <<3 [vid=\"liveTagLottieLayout\"] + [vid=\"liveDescLayout\"][visibleToUser=true]",
          "action": "longClick",
          "key": 0,
          "name": "长按\"直播中\"卡片",
          "snapshotUrls": "https://i.gkd.li/i/25873879"
        },
        {
          "matches": "@[clickable=true] > [text=\"不喜欢\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "name": "点\"不喜欢\"",
          "snapshotUrls": "https://i.gkd.li/i/25874144",
          "exampleUrls": "https://e.gkd.li/6a32974d-ea39-4f85-9f76-2d8b8a3fc679",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-设备登入自动确认",
      "key": 19,
      "rules": [
        {
          "matches": "ViewGroup > [text=\"登录确认\"] +6 @[clickable=true] > [text=\"确认登录\"][visibleToUser=true]",
          "activityIds": "com.xingin.reactnative.ui.XhsReactActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26029586",
          "exampleUrls": "https://e.gkd.li/dfc35798-6ab3-4941-bf23-572de9f3a19c",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-评论区-展开更多回复",
      "desc": "自动展开更多回复",
      "key": 20,
      "rules": [
        {
          "matches": "@[clickable=true] >(1,2) [text=\"展开更多回复\"]",
          "activityIds": [
            "com.xingin.matrix.notedetail.NoteDetailActivity",
            "com.xingin.matrix.detail.activity.DetailFeedActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/25048251",
            "https://i.gkd.li/i/27204288",
            "https://i.gkd.li/i/31308389"
          ],
          "exampleUrls": [
            "https://e.gkd.li/a211ebb1-2177-4264-9a60-280a5f8e2777"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动关闭截屏弹窗",
      "desc": "点击x掉",
      "key": 21,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] <2 [childCount=2] >3 [text=\"截屏分享至\"]",
          "activityIds": [
            "com.xingin.matrix.notedetail.NoteDetailActivity",
            "com.xingin.matrix.detail.activity.DetailFeedActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/30751358",
            "https://i.gkd.li/i/30751625"
          ],
          "exampleUrls": "https://e.gkd.li/c4bb2699-8e78-412c-92bd-47d35bb05616",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-通知权限弹窗",
      "enable": false,
      "matchTime": 30000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 22,
      "rules": [
        {
          "matches": "@ImageView <2 FrameLayout >2 [text^=\"打开通知\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13195753",
            "https://i.gkd.li/import/13222356",
            "https://i.gkd.li/import/13256145",
            "https://i.gkd.li/import/13255627"
          ],
          "key": 0
        },
        {
          "matches": "@ImageView <2 FrameLayout - [text^=\"打开通知\"]",
          "snapshotUrls": "https://i.gkd.li/import/13250418",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "desc": "长按【赞助】/【广告】标识的卡片-点【不感兴趣】",
      "enable": false,
      "fastQuery": true,
      "key": 23,
      "rules": [
        {
          "matches": "@FrameLayout[clickable=true] > LinearLayout TextView[text=\"赞助\"||text=\"广告\"]",
          "action": "longClick",
          "key": 0,
          "name": "长按【赞助】/【广告】卡片",
          "snapshotUrls": [
            "https://i.gkd.li/import/13455503",
            "https://i.gkd.li/import/13470690"
          ]
        },
        {
          "matches": "RecyclerView > @LinearLayout > TextView[text=\"不喜欢该内容\"]",
          "preKeys": 0,
          "name": "点【不感兴趣】",
          "snapshotUrls": "https://i.gkd.li/import/13455500",
          "key": 1
        }
      ]
    },
    {
      "name": "通知权限弹窗",
      "enable": false,
      "matchTime": 30000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 24,
      "rules": [
        {
          "matches": "@ImageView <2 FrameLayout >2 [text^=\"打开通知\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13195753",
            "https://i.gkd.li/import/13222356",
            "https://i.gkd.li/import/13256145",
            "https://i.gkd.li/import/13255627"
          ],
          "key": 0
        },
        {
          "matches": "@ImageView <2 FrameLayout - [text^=\"打开通知\"]",
          "snapshotUrls": "https://i.gkd.li/import/13250418",
          "key": 1
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "matchTime": 30000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 25,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] <2 FrameLayout +3 FrameLayout > Button[text=\"立即安装\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13246890"
        },
        {
          "matches": "@ImageView[clickable=true] <2 FrameLayout +3 FrameLayout > Button[text=\"立即参与内测\"]",
          "actionMaximumKey": 0,
          "snapshotUrls": "https://i.gkd.li/import/13741680",
          "key": 1
        }
      ]
    },
    {
      "name": "信息流广告",
      "desc": "长按【赞助】/【广告】标识的卡片-点【不感兴趣】",
      "enable": false,
      "quickFind": true,
      "key": 26,
      "rules": [
        {
          "matches": "@FrameLayout[clickable=true] > LinearLayout TextView[text=\"赞助\"||text=\"广告\"]",
          "action": "longClick",
          "key": 0,
          "name": "长按【赞助】/【广告】卡片",
          "snapshotUrls": [
            "https://i.gkd.li/import/13455503",
            "https://i.gkd.li/import/13470690"
          ]
        },
        {
          "matches": "RecyclerView > @LinearLayout > TextView[text=\"不喜欢该内容\"]",
          "preKeys": 0,
          "name": "点【不感兴趣】",
          "snapshotUrls": "https://i.gkd.li/import/13455500",
          "key": 1
        }
      ]
    }
  ]
});
