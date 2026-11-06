// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "youtube",
  "id": "com.google.android.youtube",
  "groups": [
    {
      "name": "全屏广告-视频播放-跳过广告",
      "desc": "点击跳过广告按钮",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"skip_ad_button\" || id=\"com.google.android.youtube:id/modern_skip_ad_text\"]",
          "activityIds": [
            "com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity",
            "com.google.android.apps.youtube.app.watchwhile.MainActivity",
            "com.google.android.youtube"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13797491",
            "https://i.gkd.li/i/12565261",
            "https://i.gkd.li/i/13705106"
          ]
        },
        {
          "matches": "[vid=\"skip_ad_button\" || vid=\"modern_skip_ad_text\"]",
          "activityIds": [
            "com.google.android.apps.youtube.app.watchwhile.WatchWhileActivity",
            "com.google.android.apps.youtube.app.watchwhile.MainActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13797491",
            "https://i.gkd.li/i/12565261",
            "https://i.gkd.li/i/13705106"
          ]
        },
        {
          "matches": "[id=\"com.google.android.youtube:id/skip_ad_button_text\"]",
          "key": 2,
          "name": "类型1",
          "snapshotUrls": [
            "https://i.gkd.li/import/13797491",
            "https://i.gkd.li/import/12565261"
          ]
        },
        {
          "matches": "[id=\"com.google.android.youtube:id/modern_skip_ad_text\"]",
          "key": 3,
          "name": "类型2",
          "snapshotUrls": [
            "https://i.gkd.li/import/13705106"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-视频播放-赞助商广告",
      "desc": "关闭视频播放中的赞助商广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[desc=\"关闭广告面板\" || desc=\"Close ad panel\"] <<n [vid=\"panel_header\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13797491",
            "https://i.gkd.li/i/13705106",
            "https://i.gkd.li/i/14784199"
          ],
          "key": 0
        },
        {
          "matches": "@[clickable=true][index>0][desc=\"关闭广告面板\" || desc=\"Close ad panel\" || desc=\"隐藏广告\"] <<(10-n) [vid=\"panel_header\"]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13797491",
            "https://i.gkd.li/i/13705106",
            "https://i.gkd.li/i/14784199",
            "https://i.gkd.li/i/27373744",
            "https://i.gkd.li/i/27373748",
            "https://i.gkd.li/i/33054103"
          ],
          "exampleUrls": [
            "https://e.gkd.li/e1655855-8497-4b92-8919-4fdb4f6f00b1",
            "https://e.gkd.li/d024797b-88c5-4ab4-aa53-433b1889eaf1"
          ]
        },
        {
          "matches": "@[desc=\"关闭广告面板\" || desc=\"Close ad panel\"][clickable=true] - ImageView <<3 FrameLayout < [vid=\"panel_header\"][visibleToUser=true]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13797491",
            "https://i.gkd.li/i/13705106",
            "https://i.gkd.li/i/14784199"
          ]
        },
        {
          "matches": "@[clickable=true][index=parent.childCount.minus(1)] -n [text$=\"广告\" || text*=\"ad \" || desc$=\"广告\" || desc*=\"ad \"] <<3 [vid=\"panel_header\"]",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/27373744",
            "https://i.gkd.li/i/27373748"
          ],
          "exampleUrls": [
            "https://e.gkd.li/e1655855-8497-4b92-8919-4fdb4f6f00b1",
            "https://e.gkd.li/d024797b-88c5-4ab4-aa53-433b1889eaf1"
          ]
        },
        {
          "matches": "ImageView[desc=\"更多选项\"||desc^=\"More\"] + @ImageView[desc=\"关闭广告面板\"||desc^=\"Close\"]",
          "key": 4
        }
      ]
    },
    {
      "name": "全屏广告-会员广告",
      "desc": "关闭首页和视频页的会员广告提示",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[!(getChild(0).getChild(0).desc=\"Image attachment\")] + @[desc=\"不用了，谢谢\" || desc=\"关闭\" || desc=\"Close\" || desc=\"No thanks\"][visibleToUser=true] <<n [vid=\"bottom_ui_container\" || vid=\"custom\"]",
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13797512",
            "https://i.gkd.li/i/18017075",
            "https://i.gkd.li/i/18549944",
            "https://i.gkd.li/i/19578085"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/21978683",
          "key": 0
        },
        {
          "matches": "[!(getChild(0).getChild(0).desc=\"Image attachment\")] + @[desc=\"不用了，谢谢\" || desc=\"关闭\" || desc=\"我暂时不要\" || desc=\"Close\" || desc=\"No thanks\" || desc=\"I’ll pass this time\"][clickable=true] <3 ViewGroup <<(-n+8) [vid=\"bottom_ui_container\" || vid=\"custom\"]",
          "key": 1,
          "name": "视频",
          "snapshotUrls": [
            "https://i.gkd.li/i/13797512",
            "https://i.gkd.li/i/19578085",
            "https://i.gkd.li/i/25865404",
            "https://i.gkd.li/i/28486200"
          ],
          "exampleUrls": "https://e.gkd.li/1292c8c9-26e3-4053-bec4-e5ebe50cde8e"
        },
        {
          "matches": "[!(getChild(0).getChild(0).desc=\"Image attachment\")] + @[desc=\"不用了，谢谢\" || desc=\"关闭\" || desc=\"我暂时不要\" || desc=\"Close\" || desc=\"No thanks\"][visibleToUser=true] -n ImageView < * < [vid=\"custom\"]",
          "key": 2,
          "name": "开屏",
          "snapshotUrls": [
            "https://i.gkd.li/i/18017075",
            "https://i.gkd.li/i/18549944"
          ],
          "exampleUrls": "https://e.gkd.li/11cdf5b2-97a8-42f0-a2eb-dc1cb2c98ac1"
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": [
            "[text=\"开启通知\"]",
            "[text=\"不用了\"]"
          ],
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14194155",
          "key": 0
        },
        {
          "matches": "[text=\"开启通知\"] < * < * +2 * >2 [text=\"不用了\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动翻译评论",
      "desc": "评论区自动点击[翻译成中文]",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@Button[desc^=\"翻译成中文\"][clickable=true][visibleToUser=true] <<n [vid=\"results\" || vid=\"section_list\"]",
          "actionCd": 500,
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/17068544",
            "https://i.gkd.li/i/17068647",
            "https://i.gkd.li/i/17501400"
          ],
          "exampleUrls": "https://e.gkd.li/e9d6eaa8-9fbf-4b16-8f0c-50239597c687",
          "key": 0
        },
        {
          "anyMatches": [
            "@[desc^=\"翻译成\"||desc^=\"Translate to\"][visibleToUser=true] <n [childCount>3 && childCount<8] < [childCount=2] <(1,2) ViewGroup <n [vid=\"results\" || vid=\"section_list\"]",
            "@[desc^=\"翻译成\"||desc^=\"Translate to\"][visibleToUser=true] <n [childCount=5] < [childCount=2] <2 [childCount=2] < ViewGroup <n [vid=\"results\" || vid=\"section_list\"]"
          ],
          "actionCd": 500,
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/17068544",
            "https://i.gkd.li/i/17068647",
            "https://i.gkd.li/i/17501400",
            "https://i.gkd.li/i/25462152",
            "https://i.gkd.li/i/25462248",
            "https://i.gkd.li/i/27276291",
            "https://i.gkd.li/i/29379961",
            "https://i.gkd.li/i/27276425"
          ],
          "exampleUrls": [
            "https://e.gkd.li/e9d6eaa8-9fbf-4b16-8f0c-50239597c687",
            "https://e.gkd.li/ecc0e725-1a92-4b29-b5df-ae167ea8584a",
            "https://e.gkd.li/d2260fc4-0218-4d0b-9d37-e6366d397ae4"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "其他-关闭播放器辅助功能弹窗",
      "desc": "点击[Dismiss]",
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"Dismiss\"][visibleToUser=true]",
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/19930694",
          "exampleUrls": "https://e.gkd.li/aa8f2617-fd6d-43a8-951d-1bd6efc504d3",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-关闭视频播放结束后的推荐视频",
      "key": 6,
      "rules": [
        {
          "anyMatches": [
            "@[vid=\"close_button\"] - LinearLayout >2 [text=\"Suggested video\" || text=\"推荐视频\"][visibleToUser=true]",
            "[vid=\"engagement_close_button\"][visibleToUser=true]"
          ],
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/22757392",
            "https://i.gkd.li/i/22762876",
            "https://i.gkd.li/i/22757397"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告",
      "desc": "点击关闭各类局部广告",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "@ImageView[clickable=true][width<100 && height<100] <<n [vid=\"panel_header\"]",
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23787178",
          "key": 0
        },
        {
          "matches": "@ImageView[clickable=true][index=parent.childCount.minus(1)] - [desc=\"更多选项\"] < ViewGroup[childCount=2] < * < [vid=\"panel_header\"]",
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23787178",
          "excludeSnapshotUrls": "https://i.gkd.li/i/25461943",
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-播放页广告",
      "desc": "点击[Dismiss/关闭]",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "@[vid=\"overflow_button\"][clickable=true] <<n [vid=\"collapsible_ad_cta_overlay_container\"]",
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/23790199"
        },
        {
          "matches": "@[clickable=true] > [text=\"关闭\"]",
          "preKeys": [
            2
          ],
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/23772979"
        },
        {
          "matches": "[vid=\"collapsible_ad_cta_overlay_container\"] >4 [vid=\"overflow_button\"][clickable=true]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/23790199",
            "https://i.gkd.li/i/26672553"
          ]
        },
        {
          "matches": "@[clickable=true] >(1,2) [vid=\"list_item_text\"][text=\"关闭\" || text=\"Dismiss\"]",
          "preKeys": [
            2
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/23772979",
            "https://i.gkd.li/i/25461885",
            "https://i.gkd.li/i/33272478"
          ]
        },
        {
          "matches": "[vid=\"mealbar_action_button\"] - [vid=\"mealbar_dismiss_button\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/19930694",
            "https://i.gkd.li/i/25461814"
          ],
          "exampleUrls": "https://e.gkd.li/aa8f2617-fd6d-43a8-951d-1bd6efc504d3",
          "key": 4
        }
      ]
    },
    {
      "name": "局部广告-视频播放页-贴片广告",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.google.android.youtube:id/skip_ad_button_text\"]",
          "key": 0,
          "name": "类型1",
          "snapshotUrls": [
            "https://i.gkd.li/i/13797491",
            "https://i.gkd.li/i/12565261"
          ]
        },
        {
          "matches": "[id=\"com.google.android.youtube:id/modern_skip_ad_text\"]",
          "key": 1,
          "name": "类型2",
          "snapshotUrls": [
            "https://i.gkd.li/i/13705106"
          ]
        }
      ]
    },
    {
      "name": "局部广告-视频播放页-赞助商广告",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[desc=\"更多选项\"||desc^=\"More\"] + [desc=\"关闭广告面板\"||desc^=\"Close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页-赞助商广告",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "ImageView < @Button < ViewGroup +3 Button[desc*=\"YouTube Premium\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-订阅YouTube Premium浮窗广告",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "ViewGroup[desc=\"免费试用 1 个月\"] < * - * > ViewGroup[text=\"不用了，谢谢\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "其他-关闭播放器无障碍辅助弹窗",
      "desc": "点击[Dismiss/关闭]",
      "key": 13,
      "rules": [
        {
          "matches": "[vid=\"mealbar_action_button\"] - [vid=\"mealbar_dismiss_button\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/19930694",
            "https://i.gkd.li/i/25461814"
          ],
          "exampleUrls": "https://e.gkd.li/aa8f2617-fd6d-43a8-951d-1bd6efc504d3",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动展开更多回复",
      "desc": "仅回复评论区有效",
      "key": 14,
      "rules": [
        {
          "matches": "Button[childCount=3] < @ViewGroup[clickable=true][visibleToUser=true] -n ViewGroup < [vid=\"section_list\"]",
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/25462396",
            "https://i.gkd.li/i/25466817"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-跳过视频内容警告",
      "desc": "该内容可能不适合/包含x腥/bao力",
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": "[text^=\"该内容可能\" || text^=\"This content may be\"] +2 [childCount=2] > [text=\"继续\" || text=\"Continue\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/27373127",
            "https://i.gkd.li/i/27373130"
          ],
          "exampleUrls": "https://e.gkd.li/6ae91912-dbe8-4bd5-983c-06790e39e2a7"
        },
        {
          "matches": "[text^=\"以下内容可能包含\" || text^=\"The following content may contain\"] <<4 [id=\"android:id/contentPanel\"] + [id=\"android:id/buttonPanel\"] >2 [text=\"确认\" || text=\"Confirm\"]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/27373143",
            "https://i.gkd.li/i/27373252"
          ],
          "exampleUrls": "https://e.gkd.li/5f20a4f8-82ea-4520-b191-95782a45341c"
        }
      ]
    },
    {
      "name": "功能类-退出自动关闭小窗",
      "desc": "退出视频自动关闭小窗播放器",
      "actionCd": 8000,
      "key": 16,
      "rules": [
        {
          "matches": "[vid=\"modern_miniplayer_close\"][clickable=true]",
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/27373872",
          "exampleUrls": "https://e.gkd.li/b72d41d0-94a1-4507-8e8c-530bd18269f0",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-Shorts-赞助商广告",
      "desc": "[赞助商Ad]视频自动划掉",
      "key": 17,
      "rules": [
        {
          "matches": "[text=\"赞助商广告\"] <<3 [desc$=\"广告\"] <<2 [childCount<=2] <2 * <<3 [vid=\"reel_player_delegated_overlay\"]",
          "action": "swipe",
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/27376863",
          "exampleUrls": "https://e.gkd.li/a144a709-4fa2-492a-9776-a78a1e45b1e4",
          "key": 0
        }
      ]
    },
    {
      "name": "评价提示-评论满意度评价",
      "desc": "随机评论出现[你对以上评论作何评价] => x掉",
      "key": 18,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] -2 [text^=\"你对以上评论作\"] <n [index=parent.childCount.minus(1)] <n ViewGroup[childCount>1] <n [vid=\"results\"]",
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28418922",
          "exampleUrls": "https://e.gkd.li/c21a846e-dbab-4d4e-b388-b96335414bae",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-视频播放-跳过调查",
      "desc": "Ad很有趣?-> 跳过调查",
      "key": 19,
      "rules": [
        {
          "matches": "@[vid=\"skip_button\"][clickable=true][visibleToUser=true] < LinearLayout <n [vid=\"survey_answers\"] + [vid=\"survey_attribution\"][text^=\"YouTube\"]",
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/29379447",
          "exampleUrls": "https://e.gkd.li/1b442e3c-0e50-4b3d-b12d-75b7e725ed1d",
          "key": 0
        }
      ]
    },
    {
      "name": "其他-xp模块更新提示",
      "desc": "ReVanced Xposed 有更新,点击[取消]",
      "key": 20,
      "rules": [
        {
          "matches": [
            "[text*=\"ReVanced Xposed\"]",
            "[text=\"Cancel\"][clickable=true]"
          ],
          "actionMaximum": 1,
          "activityIds": "com.google.android.apps.youtube.app.watchwhile.MainActivity",
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/31118557",
          "exampleUrls": "https://e.gkd.li/5f07de6a-1e4d-4297-a516-ccc695df72fc",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-播放器广告",
      "desc": "点击关闭播放器广告",
      "enable": false,
      "fastQuery": true,
      "key": 21,
      "rules": [
        {
          "matches": "[vid=\"collapsible_ad_cta_overlay_container\"] >4 [vid=\"overflow_button\"][clickable=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/23790199",
            "https://i.gkd.li/i/26672553"
          ]
        },
        {
          "matches": "@[clickable=true] >(1,2) [vid=\"list_item_text\"][text=\"关闭\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/23772979",
            "https://i.gkd.li/i/25461885"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-首页-会员广告",
      "enable": false,
      "key": 22,
      "rules": [
        {
          "matches": "ImageView < @Button < ViewGroup +3 Button[desc*=\"YouTube Premium\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-订阅浮窗广告",
      "enable": false,
      "key": 23,
      "rules": [
        {
          "matches": "ViewGroup[desc=\"免费试用 1 个月\"] < * - * > ViewGroup[text=\"不用了，谢谢\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "视频播放-跳过广告",
      "enable": false,
      "quickFind": true,
      "key": 24,
      "rules": [
        {
          "matches": "[id=\"com.google.android.youtube:id/skip_ad_button_text\"]",
          "key": 0,
          "name": "类型1",
          "snapshotUrls": [
            "https://i.gkd.li/import/13797491",
            "https://i.gkd.li/import/12565261"
          ]
        },
        {
          "matches": "[id=\"com.google.android.youtube:id/modern_skip_ad_text\"]",
          "key": 1,
          "name": "类型2",
          "snapshotUrls": [
            "https://i.gkd.li/import/13705106"
          ]
        }
      ]
    },
    {
      "name": "视频播放-赞助商广告",
      "enable": false,
      "key": 25,
      "rules": [
        {
          "matches": "ImageView[desc=\"更多选项\"||desc^=\"More\"] + @ImageView[desc=\"关闭广告面板\"||desc^=\"Close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-会员广告",
      "enable": false,
      "key": 26,
      "rules": [
        {
          "matches": "ImageView < @Button < ViewGroup +3 Button[desc*=\"YouTube Premium\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "订阅浮窗广告",
      "enable": false,
      "key": 27,
      "rules": [
        {
          "matches": "ViewGroup[desc=\"免费试用 1 个月\"] < * - * > ViewGroup[text=\"不用了，谢谢\"]",
          "key": 0
        }
      ]
    }
  ]
});
