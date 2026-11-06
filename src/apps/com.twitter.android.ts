// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "X(推特)",
  "id": "com.twitter.android",
  "groups": [
    {
      "name": "分段广告-主页信息流广告",
      "desc": "点击右上角关闭,点击我不喜欢",
      "enable": false,
      "actionCd": 3000,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[vid=\"tweet_curation_action\"] <2 * + * >3 [text=\"视频将在广告后播放\"]",
          "key": 0,
          "name": "视频广告-点击右上角关闭",
          "snapshotUrls": [
            "https://i.gkd.li/i/12798795",
            "https://i.gkd.li/i/14782884"
          ]
        },
        {
          "matches": "@[vid=\"tweet_curation_action\"] <2 * + * > [text$=\"推荐\"]",
          "key": 1,
          "name": "推荐广告-点击右上角关闭",
          "snapshotUrls": [
            "https://i.gkd.li/i/12813235",
            "https://i.gkd.li/i/14782897",
            "https://i.gkd.li/i/17182889"
          ]
        },
        {
          "matches": "[vid=\"tweet_curation_action\"] - [vid=\"tweet_ad_badge_top_right\"][visibleToUser=true]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/24359526",
          "exampleUrls": "https://e.gkd.li/705dd827-ff04-4233-af38-60d92439e1f3"
        },
        {
          "matches": "@ViewGroup[clickable=true] > [text=\"我不喜欢这个广告\" || text^=\"屏蔽\"][visibleToUser=true]",
          "preKeys": [
            6,
            7,
            11
          ],
          "key": 3,
          "name": "点击[我不喜欢这个广告]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12798810",
            "https://i.gkd.li/i/14782902",
            "https://i.gkd.li/i/20239421",
            "https://i.gkd.li/i/24359537"
          ]
        },
        {
          "matches": "@[vid=\"tweet_curation_action\"] <2 * + * > [text=\"推荐\"]",
          "key": 4,
          "name": "推荐广告-点击右上角关闭",
          "snapshotUrls": [
            "https://i.gkd.li/i/12813235",
            "https://i.gkd.li/i/14782897"
          ]
        },
        {
          "matches": "@ViewGroup[clickable=true] > [text=\"我不喜欢这个广告\"]",
          "preKeys": [
            6,
            7
          ],
          "key": 5,
          "name": "点击[我不喜欢这个广告]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12798810",
            "https://i.gkd.li/i/14782902"
          ]
        },
        {
          "matches": "@[id$=\"_action\"] <2 * + * >(1,3) [text$=\"广告后播放\" || text$=\"推荐\"]",
          "key": 6,
          "name": "①点击右上角操作",
          "snapshotUrls": [
            "https://i.gkd.li/i/12798795",
            "https://i.gkd.li/i/14782884",
            "https://i.gkd.li/i/12813235",
            "https://i.gkd.li/i/14782897",
            "https://i.gkd.li/i/17182889"
          ]
        },
        {
          "matches": "@[vid=\"tweet_curation_action\"] - [vid=\"tweet_ad_badge_top_right\"][visibleToUser=true]",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/24359526",
          "exampleUrls": "https://e.gkd.li/705dd827-ff04-4233-af38-60d92439e1f3"
        },
        {
          "matches": "[text=\"Ad\" || getChild(0).text$=\"推广\"] +(1,4) [name$=\"ImageView\" || name$=\"Button\"][visibleToUser=true][desc=\"发帖选项\"]",
          "activityIds": "com.x.android.main.MainActivity",
          "key": 8,
          "snapshotUrls": [
            "https://i.gkd.li/i/29085434",
            "https://i.gkd.li/i/34428571",
            "https://i.gkd.li/i/32325884",
            "https://i.gkd.li/i/34022771"
          ]
        },
        {
          "matches": "@[clickable=true] > [text^=\"我不喜\" || text^=\"屏蔽\" || text^=\"封鎖\" || text^=\"Block\"][visibleToUser=true]",
          "preKeys": [
            6,
            7
          ],
          "key": 9,
          "snapshotUrls": [
            "https://i.gkd.li/i/14782902",
            "https://i.gkd.li/i/28415651",
            "https://i.gkd.li/i/20239421"
          ]
        },
        {
          "matches": "@[clickable=true] > [visibleToUser=true][text^=\"我不喜\" || text^=\"屏蔽\" || text^=\"封鎖\" || text^=\"Block\"]",
          "preKeys": [
            11
          ],
          "activityIds": "com.x.android.main.MainActivity",
          "key": 10,
          "snapshotUrls": "https://i.gkd.li/i/29085445"
        },
        {
          "matches": "[text=\"Ad\" || getChild(0).text=\"已推广\"] +(1,4) ImageView[visibleToUser=true][desc=\"发帖选项\"]",
          "activityIds": "com.x.android.main.MainActivity",
          "key": 11,
          "snapshotUrls": [
            "https://i.gkd.li/i/29085434",
            "https://i.gkd.li/i/32325884"
          ]
        }
      ]
    },
    {
      "name": "分段广告-帖子详情页、搜索页信息流广告",
      "desc": "点击右上角关闭,点击屏蔽用户,确认屏蔽.点击[我不喜欢]会返回主页,因此点击[屏蔽]",
      "actionCd": 3000,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] +n [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text=\"推荐\"]",
          "key": 0,
          "name": "点击右上角关闭-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12825969",
            "https://i.gkd.li/i/12847584"
          ]
        },
        {
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] <2 * + [id=\"com.twitter.android:id/tweet_auto_playable_content_parent\"] > [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text$=\"推荐\"]",
          "key": 1,
          "name": "点击右上角关闭-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/12882676",
            "https://i.gkd.li/i/12904603"
          ]
        },
        {
          "matches": "[id=\"com.twitter.android:id/tweet_ad_badge_top_right\"] + [id=\"com.twitter.android:id/tweet_curation_action\"]",
          "key": 2,
          "name": "点击右上角关闭-英文",
          "snapshotUrls": [
            "https://i.gkd.li/i/13680756"
          ]
        },
        {
          "matches": "@ViewGroup > [id=\"com.twitter.android:id/action_sheet_item_title\"][text^=\"屏蔽\"||text^=\"屏蔽\"||text^=\"Block\"||text^=\"隐藏 @\"||text^=\"Hide @\"]",
          "preKeys": [
            5,
            6,
            7
          ],
          "key": 3,
          "name": "点击屏蔽",
          "snapshotUrls": [
            "https://i.gkd.li/i/12828815",
            "https://i.gkd.li/i/12847600",
            "https://i.gkd.li/i/12904602",
            "https://i.gkd.li/i/13680783",
            "https://i.gkd.li/i/25089665"
          ]
        },
        {
          "matches": "[text=\"取消\"||text^=\"Cancel\"] + [text=\"屏蔽\"||text^=\"Block\"||text=\"是的，我确定\"||text^=\"Yes\"]",
          "preKeys": [
            3
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/12828832",
            "https://i.gkd.li/i/12904601",
            "https://i.gkd.li/i/13680798",
            "https://i.gkd.li/i/25089666"
          ]
        },
        {
          "matches": "@[vid=\"tweet_curation_action\"] +n [vid=\"tweet_promoted_badge_bottom\"][text=\"推荐\"]",
          "key": 5,
          "name": "点击右上角关闭-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12825969",
            "https://i.gkd.li/i/12847584"
          ]
        },
        {
          "matches": "@[vid=\"tweet_curation_action\"] <2 * + [vid=\"tweet_auto_playable_content_parent\"] > [vid=\"tweet_promoted_badge_bottom\"][text$=\"推荐\"]",
          "key": 6,
          "name": "点击右上角关闭-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/12882676",
            "https://i.gkd.li/i/12904603"
          ]
        },
        {
          "matches": "[vid=\"tweet_ad_badge_top_right\"] + [vid=\"tweet_curation_action\"]",
          "key": 7,
          "name": "点击右上角关闭-英文",
          "snapshotUrls": [
            "https://i.gkd.li/i/13680756"
          ]
        },
        {
          "matches": "@ViewGroup > [vid=\"action_sheet_item_title\"][text^=\"屏蔽\" || text^=\"Block\" || text^=\"隐藏 @\" || text^=\"Mute @\"||text^=\"Unblock @\"||text^=\"Unmute @\"]",
          "preKeys": [
            5,
            6,
            7
          ],
          "key": 8,
          "name": "点击屏蔽/隐藏,如果机会全用完需要取消遍再屏蔽",
          "snapshotUrls": [
            "https://i.gkd.li/i/12828815",
            "https://i.gkd.li/i/12847600",
            "https://i.gkd.li/i/12904602",
            "https://i.gkd.li/i/13680783",
            "https://i.gkd.li/i/25089665",
            "https://i.gkd.li/i/25461007",
            "https://i.gkd.li/i/25461077",
            "https://i.gkd.li/i/25461050"
          ]
        },
        {
          "matches": "[text=\"取消\"||text^=\"Cancel\"] + [text=\"屏蔽\"||text^=\"Block\"||text=\"是的，我确定\"||text^=\"Yes\"||text^=\"屏蔽\"||text^=\"Mute\"||text^=\"Unmute\"]",
          "preKeys": [
            8
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12828832",
            "https://i.gkd.li/i/12904601",
            "https://i.gkd.li/i/13680798",
            "https://i.gkd.li/i/25089666",
            "https://i.gkd.li/i/25461062"
          ],
          "key": 9
        }
      ]
    },
    {
      "name": "分段广告-用户资料页信息流广告",
      "desc": "点击右上角关闭,点击我不喜欢",
      "actionCd": 3000,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] +n [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text=\"推荐\"]",
          "key": 0,
          "name": "点击右上角关闭-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12825969",
            "https://i.gkd.li/i/12847584"
          ]
        },
        {
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] <2 * + [id=\"com.twitter.android:id/tweet_auto_playable_content_parent\"] > [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text$=\"推荐\"]",
          "key": 1,
          "name": "点击右上角关闭-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/12882676",
            "https://i.gkd.li/i/12904603"
          ]
        },
        {
          "matches": "@ViewGroup > [id=\"com.twitter.android:id/action_sheet_item_title\"][text=\"我不喜欢这个广告\"]",
          "preKeys": [
            3,
            4
          ],
          "key": 2,
          "name": "点击[我不喜欢这个广告]",
          "snapshotUrls": "https://i.gkd.li/i/12798810"
        },
        {
          "matches": "@[vid=\"tweet_curation_action\"] +n [vid=\"tweet_promoted_badge_bottom\"][text=\"推荐\"]",
          "key": 3,
          "name": "点击右上角关闭-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12825969",
            "https://i.gkd.li/i/12847584"
          ]
        },
        {
          "matches": "@[vid=\"tweet_curation_action\"] <2 * + [vid=\"tweet_auto_playable_content_parent\"] > [vid=\"tweet_promoted_badge_bottom\"][text$=\"推荐\"]",
          "key": 4,
          "name": "点击右上角关闭-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/12882676",
            "https://i.gkd.li/i/12904603"
          ]
        },
        {
          "matches": "@ViewGroup > [vid=\"action_sheet_item_title\"][text=\"我不喜欢这个广告\" || text=\"我不喜歡這個廣告\"]",
          "preKeys": [
            3,
            4
          ],
          "key": 5,
          "name": "点击[我不喜欢这个广告]",
          "snapshotUrls": "https://i.gkd.li/i/12798810"
        }
      ]
    },
    {
      "name": "评价提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.twitter.android:id/app_rating_button_never\"]",
          "activityIds": "com.twitter.app.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13774150",
          "key": 0
        },
        {
          "matches": "[vid=\"app_rating_button_never\"]",
          "activityIds": "com.twitter.app.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13774150",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击\"Not now\"",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@[clickable=true] > [visibleToUser=true][text=\"Not now\"] <<n [vid=\"half_cover_recycler_view_holder\"]",
          "activityIds": "com.twitter.app.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13930126",
          "key": 0
        },
        {
          "matches": "@[clickable=true] > [text=\"Not now\"] <<n [vid=\"half_cover_recycler_view_holder\"]",
          "snapshotUrls": "https://i.gkd.li/i/13930126",
          "key": 1
        },
        {
          "matches": "@[clickable=true] > [visibleToUser=true][text=\"Not now\" || text=\"暂时不用\"] <<n [vid=\"half_cover_recycler_view_holder\"]",
          "activityIds": "com.twitter.app.main.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/13930126",
            "https://i.gkd.li/i/25903854"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-自动点击翻译",
      "desc": "⚠️对于v12.9.1及以上版本的推特失效",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[vid=\"translation_link\"][text^=\"翻译\"]",
          "activityIds": "com.twitter.tweetdetail.TweetDetailActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14189817",
            "https://i.gkd.li/i/14615911"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/40ece44f-883f-429a-aa0c-17dac15a50e4",
          "key": 0
        },
        {
          "matches": "[vid=\"translation_link\" || vid=\"grok_translation_link\"][index=parent.childCount.minus(1)][index!=2]",
          "actionCd": 2000,
          "activityIds": "com.twitter.tweetdetail.TweetDetailActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14189817",
            "https://i.gkd.li/i/14615911",
            "https://i.gkd.li/i/25461468",
            "https://i.gkd.li/i/25461607",
            "https://i.gkd.li/i/26642877"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/25537171",
            "https://i.gkd.li/i/26642826"
          ],
          "exampleUrls": [
            "https://e.gkd.li/ced46989-9c6a-4626-b027-7953e0fdc2c6",
            "https://m.gkd.li/57941037/40ece44f-883f-429a-aa0c-17dac15a50e4"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动点击\"显示更多帖子\"",
      "desc": "点击时间线底部的\"显示更多帖子\"按钮",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "@FrameLayout[clickable=true] > [text=\"显示更多帖子\"]",
          "activityIds": "com.twitter.app.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14189847",
          "exampleUrls": "https://m.gkd.li/57941037/7efa8af7-90d3-42b4-bf5d-3d83775f175a",
          "key": 0
        },
        {
          "matches": "@[clickable=true] > [visibleToUser=true][text=\"显示更多帖子\"][left>300]",
          "activityIds": "com.x.android.main.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/30151597",
          "excludeSnapshotUrls": "https://i.gkd.li/i/30175825"
        }
      ]
    },
    {
      "name": "其他-关闭[开启个性化广告]弹窗",
      "key": 7,
      "rules": [
        {
          "matches": "[vid=\"secondary_button\"][clickable=true][getChild(0).getChild(0).getChild(0).text=\"保留更少相关广告\"]",
          "activityIds": "com.twitter.app.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25150279",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-信息流广告-帖子详情页、搜索页",
      "desc": "点击右上角关闭,点击屏蔽用户,确认屏蔽.点击[我不喜欢]会返回主页,因此点击[屏蔽]",
      "enable": false,
      "actionCd": 3000,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] +n [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text=\"推荐\"]",
          "key": 0,
          "name": "点击右上角关闭-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12825969",
            "https://i.gkd.li/i/12847584"
          ]
        },
        {
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] <2 * + [id=\"com.twitter.android:id/tweet_auto_playable_content_parent\"] > [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text$=\"推荐\"]",
          "key": 1,
          "name": "点击右上角关闭-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/12882676",
            "https://i.gkd.li/i/12904603"
          ]
        },
        {
          "matches": "[id=\"com.twitter.android:id/tweet_ad_badge_top_right\"] + [id=\"com.twitter.android:id/tweet_curation_action\"]",
          "key": 2,
          "name": "点击右上角关闭-英文",
          "snapshotUrls": [
            "https://i.gkd.li/i/13680756"
          ]
        },
        {
          "matches": "@ViewGroup > [id=\"com.twitter.android:id/action_sheet_item_title\"][text^=\"屏蔽\"||text^=\"屏蔽\"||text^=\"Block\"]",
          "preKeys": [
            0,
            1,
            2
          ],
          "key": 3,
          "name": "点击屏蔽",
          "snapshotUrls": [
            "https://i.gkd.li/i/12828815",
            "https://i.gkd.li/i/12847600",
            "https://i.gkd.li/i/12904602",
            "https://i.gkd.li/i/13680783"
          ]
        },
        {
          "matches": "[text=\"取消\"||text^=\"Cancel\"] + [text=\"屏蔽\"||text^=\"Block\"]",
          "preKeys": 3,
          "key": 4,
          "name": "二次确认-点击屏蔽",
          "snapshotUrls": [
            "https://i.gkd.li/i/12828832",
            "https://i.gkd.li/i/12904601",
            "https://i.gkd.li/i/13680798"
          ]
        }
      ]
    },
    {
      "name": "未分类-信息流广告-用户资料页",
      "desc": "点击右上角关闭,点击我不喜欢",
      "enable": false,
      "actionCd": 3000,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] +n [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text=\"推荐\"]",
          "key": 0,
          "name": "点击右上角关闭-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12825969",
            "https://i.gkd.li/i/12847584"
          ]
        },
        {
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] <2 * + [id=\"com.twitter.android:id/tweet_auto_playable_content_parent\"] > [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text$=\"推荐\"]",
          "key": 1,
          "name": "点击右上角关闭-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/12882676",
            "https://i.gkd.li/i/12904603"
          ]
        },
        {
          "matches": "@ViewGroup > [id=\"com.twitter.android:id/action_sheet_item_title\"][text=\"我不喜欢这个广告\"]",
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "name": "点击[我不喜欢这个广告]",
          "snapshotUrls": "https://i.gkd.li/i/12798810"
        }
      ]
    },
    {
      "name": "未分类-评价弹窗",
      "enable": false,
      "matchTime": 10000,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.twitter.android:id/app_rating_button_never\"]",
          "activityIds": "com.twitter.app.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13774150",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动翻译",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "[text^=\"翻译\"][vid=\"translation_link\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动显示更多帖子",
      "enable": false,
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "[vid=\"gap_text\"][text=\"显示更多帖子\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动[显示更多帖子]",
      "desc": "只点击居中的,不点击靠左的[显示更多帖子]",
      "key": 13,
      "rules": [
        {
          "matches": "@FrameLayout[clickable=true] > [text=\"显示更多帖子\"]",
          "activityIds": "com.twitter.app.main.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14189847",
          "exampleUrls": "https://m.gkd.li/57941037/7efa8af7-90d3-42b4-bf5d-3d83775f175a"
        },
        {
          "matches": "@[clickable=true] > TextView[visibleToUser=true][text=\"显示更多帖子\"][right>parent.right.minus(parent.width.div(2))]",
          "activityIds": "com.x.android.main.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/30151597",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/30175825",
            "https://i.gkd.li/i/30271020",
            "https://i.gkd.li/i/30271022"
          ]
        }
      ]
    },
    {
      "name": "功能类-自动显示可能的垃圾信息",
      "desc": "有时(大部分时候)误杀太大",
      "key": 14,
      "rules": [
        {
          "matches": "RelativeLayout > [vid=\"content\"][visibleToUser=true]",
          "activityIds": "com.twitter.tweetdetail.TweetDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25461441",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-[保存]图片帖子",
      "desc": "展开菜单自动点击保存图片",
      "key": 15,
      "rules": [
        {
          "matches": "@LinearLayout[clickable=true] >3 [text=\"保存\" || text=\"Save\"][visibleToUser=true]",
          "activityIds": "com.twitter.app.gallery.GalleryActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26303860",
          "exampleUrls": "https://e.gkd.li/552c4889-e994-4082-8229-d5c5b37e4c6b",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-网络错误自动重试",
      "desc": "无法获取帖子=> 点击[重试]",
      "key": 16,
      "rules": [
        {
          "matches": "[text^=\"现在无法获取帖子\"] + [text=\"重试\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.twitter.tweetdetail.TweetDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28419788",
          "exampleUrls": "https://e.gkd.li/5f532b57-1811-437f-bca2-d60c35aeda29",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-进入视频自动静音",
      "desc": "点击视频帖子=> 进入详情后自动静音",
      "actionMaximum": 1,
      "key": 17,
      "rules": [
        {
          "matches": "[vid=\"video_mute_toggle\"][clickable=true][visibleToUser=true]",
          "excludeMatches": "[vid=\"video_mute_toggle\"][desc=\"隐藏\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.twitter.explore.immersivemediaplayer.ui.activity.ImmersiveMediaPlayerActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28436423",
          "excludeSnapshotUrls": "https://i.gkd.li/i/28436424",
          "exampleUrls": "https://e.gkd.li/f0996ce1-5376-4b80-9353-1384eb6e615c",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-查看潜在敏感内容的个人页面",
      "desc": "点某些账号详情页-警告!-> 是,查看个人资料",
      "matchTime": 8000,
      "actionMaximum": 1,
      "resetMatch": "match",
      "key": 18,
      "rules": [
        {
          "matches": "[vid=\"warning_header\"][visibleToUser=true] +2 [vid=\"primary_button\"][clickable=true]",
          "activityIds": "com.twitter.app.profiles.ProfileActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/29404879",
          "exampleUrls": "https://e.gkd.li/dbdaffed-e1ca-4487-85a1-3a5466e3ff61",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-账号详情-小蓝标认证",
      "desc": "点击[以后再说]",
      "matchTime": 8000,
      "actionMaximum": 1,
      "resetMatch": "match",
      "key": 19,
      "rules": [
        {
          "matches": "[text=\"以后再说\"] < @View[clickable=true] -2 [text^=\"认证标识很\"][visibleToUser=true] <3 View[childCount=6] <<2 [vid=\"profile_upsell_compose\"]",
          "activityIds": "com.twitter.app.profiles.ProfileActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/29405012",
          "exampleUrls": "https://e.gkd.li/6196a859-31ce-4d04-9f53-b9346bee25d6",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-帖子含视频广告",
      "desc": "①点击[跳过] ②点击[屏蔽]该用户",
      "fastQuery": true,
      "key": 20,
      "rules": [
        {
          "matches": "[text=\"跳过\"] < @[clickable=true] -n [text*=\"广告\"] <n [visibleToUser=true] <2 [childCount=2] >4 [vid=\"exo_subtitles\"]",
          "key": 0,
          "name": "①点击[跳过]",
          "snapshotUrls": "https://i.gkd.li/i/33950650",
          "exampleUrls": "https://e.gkd.li/a9dbde18-fc31-4b28-b277-8ad19d0d3fcf"
        },
        {
          "matches": "@[text*=\"屏蔽\"] < [clickable=true] <n ScrollView >2 [visibleToUser=true][text*=\"广告\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "②点击[屏蔽]该用户",
          "snapshotUrls": "https://i.gkd.li/i/33951005",
          "exampleUrls": "https://e.gkd.li/5a072c9d-f214-49c0-9446-cc5b185c3664"
        }
      ]
    },
    {
      "name": "全屏广告-关闭[开启个性化广告]弹窗",
      "desc": "关闭[开启个性化广告]弹窗",
      "enable": false,
      "key": 21,
      "rules": [
        {
          "matches": "[vid=\"secondary_button\"][clickable=true][getChild(0).getChild(0).getChild(0).text=\"保留更少相关广告\"]",
          "activityIds": "com.twitter.app.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25150279",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-信息流广告-主页",
      "desc": "点击右上角关闭,点击我不喜欢",
      "enable": false,
      "actionCd": 3000,
      "fastQuery": true,
      "key": 22,
      "rules": [
        {
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] <2 LinearLayout + LinearLayout >n [id=\"com.twitter.android:id/upper_video_attribution\"][text=\"视频将在广告后播放\"]",
          "key": 0,
          "name": "视频广告-点击右上角关闭",
          "snapshotUrls": "https://i.gkd.li/import/12798795"
        },
        {
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] <2 * + [id=\"com.twitter.android:id/tweet_auto_playable_content_parent\"] > [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text=\"推荐\"]",
          "key": 1,
          "name": "推荐广告-点击右上角关闭",
          "snapshotUrls": "https://i.gkd.li/import/12813235"
        },
        {
          "matches": "@ViewGroup > [id=\"com.twitter.android:id/action_sheet_item_title\"][text=\"我不喜欢这个广告\"]",
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "name": "点击[我不喜欢这个广告]",
          "snapshotUrls": "https://i.gkd.li/import/12798810"
        }
      ]
    },
    {
      "name": "局部广告-信息流广告-帖子详情页、搜索页",
      "desc": "点击右上角关闭,点击屏蔽用户,确认屏蔽.点击[我不喜欢]会返回主页,因此点击[屏蔽]",
      "enable": false,
      "actionCd": 3000,
      "fastQuery": true,
      "key": 23,
      "rules": [
        {
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] +n [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text=\"推荐\"]",
          "key": 0,
          "name": "点击右上角关闭",
          "snapshotUrls": [
            "https://i.gkd.li/import/12825969",
            "https://i.gkd.li/import/12847584"
          ]
        },
        {
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] <2 * + [id=\"com.twitter.android:id/tweet_auto_playable_content_parent\"] > [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text$=\"推荐\"]",
          "key": 1,
          "name": "点击右上角关闭2",
          "snapshotUrls": [
            "https://i.gkd.li/import/12882676",
            "https://i.gkd.li/import/12904603"
          ]
        },
        {
          "matches": "[id=\"com.twitter.android:id/tweet_ad_badge_top_right\"] + [id=\"com.twitter.android:id/tweet_curation_action\"]",
          "key": 2,
          "name": "点击右上角关闭-英文",
          "snapshotUrls": [
            "https://i.gkd.li/import/13680756"
          ]
        },
        {
          "matches": "@ViewGroup > [id=\"com.twitter.android:id/action_sheet_item_title\"][text^=\"屏蔽\"||text^=\"屏蔽\"||text^=\"Block\"]",
          "preKeys": [
            0,
            1,
            2
          ],
          "key": 3,
          "name": "点击屏蔽",
          "snapshotUrls": [
            "https://i.gkd.li/import/12828815",
            "https://i.gkd.li/import/12847600",
            "https://i.gkd.li/import/12904602",
            "https://i.gkd.li/import/13680783"
          ]
        },
        {
          "matches": "[text=\"取消\"||text^=\"Cancel\"] + [text=\"屏蔽\"||text^=\"Block\"]",
          "preKeys": 3,
          "key": 4,
          "name": "二次确认-点击屏蔽",
          "snapshotUrls": [
            "https://i.gkd.li/import/12828832",
            "https://i.gkd.li/import/12904601",
            "https://i.gkd.li/import/13680798"
          ]
        }
      ]
    },
    {
      "name": "局部广告-信息流广告-用户资料页",
      "desc": "点击右上角关闭,点击我不喜欢",
      "enable": false,
      "actionCd": 3000,
      "fastQuery": true,
      "key": 24,
      "rules": [
        {
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] +n [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text=\"推荐\"]",
          "key": 0,
          "name": "点击右上角关闭",
          "snapshotUrls": [
            "https://i.gkd.li/import/12825969",
            "https://i.gkd.li/import/12847584"
          ]
        },
        {
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] <2 * + [id=\"com.twitter.android:id/tweet_auto_playable_content_parent\"] > [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text$=\"推荐\"]",
          "key": 1,
          "name": "点击右上角关闭2",
          "snapshotUrls": [
            "https://i.gkd.li/import/12882676",
            "https://i.gkd.li/import/12904603"
          ]
        },
        {
          "matches": "@ViewGroup > [id=\"com.twitter.android:id/action_sheet_item_title\"][text=\"我不喜欢这个广告\"]",
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "name": "点击[我不喜欢这个广告]",
          "snapshotUrls": "https://i.gkd.li/import/12798810"
        }
      ]
    },
    {
      "name": "全屏广告-评价弹窗",
      "enable": false,
      "matchTime": 10000,
      "fastQuery": true,
      "key": 25,
      "rules": [
        {
          "matches": "[id=\"com.twitter.android:id/app_rating_button_never\"]",
          "activityIds": "com.twitter.app.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13774150",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-通知提示-请求通知权限弹窗",
      "desc": "点击\"Not now\"",
      "enable": false,
      "fastQuery": true,
      "key": 26,
      "rules": [
        {
          "matches": "[id=\"com.twitter.android:id/secondary_button\"] [text=\"Not now\"]",
          "activityIds": "com.twitter.app.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13930126",
          "key": 0
        }
      ]
    },
    {
      "name": "信息流广告-主页",
      "desc": "点击右上角关闭,点击我不喜欢",
      "enable": false,
      "actionCd": 3000,
      "quickFind": true,
      "key": 27,
      "rules": [
        {
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] <2 LinearLayout + LinearLayout >n [id=\"com.twitter.android:id/upper_video_attribution\"][text=\"视频将在广告后播放\"]",
          "key": 0,
          "name": "视频广告-点击右上角关闭",
          "snapshotUrls": "https://i.gkd.li/import/12798795"
        },
        {
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] <2 * + [id=\"com.twitter.android:id/tweet_auto_playable_content_parent\"] > [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text=\"推荐\"]",
          "key": 1,
          "name": "推荐广告-点击右上角关闭",
          "snapshotUrls": "https://i.gkd.li/import/12813235"
        },
        {
          "matches": "@ViewGroup > [id=\"com.twitter.android:id/action_sheet_item_title\"][text=\"我不喜欢这个广告\"]",
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "name": "点击[我不喜欢这个广告]",
          "snapshotUrls": "https://i.gkd.li/import/12798810"
        }
      ]
    },
    {
      "name": "信息流广告-帖子详情页、搜索页",
      "desc": "点击右上角关闭,点击屏蔽用户,确认屏蔽.点击[我不喜欢]会返回主页,因此点击[屏蔽]",
      "enable": false,
      "actionCd": 3000,
      "quickFind": true,
      "key": 28,
      "rules": [
        {
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] +n [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text=\"推荐\"]",
          "key": 0,
          "name": "点击右上角关闭",
          "snapshotUrls": [
            "https://i.gkd.li/import/12825969",
            "https://i.gkd.li/import/12847584"
          ]
        },
        {
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] <2 * + [id=\"com.twitter.android:id/tweet_auto_playable_content_parent\"] > [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text$=\"推荐\"]",
          "key": 1,
          "name": "点击右上角关闭",
          "snapshotUrls": [
            "https://i.gkd.li/import/12882676",
            "https://i.gkd.li/import/12904603"
          ]
        },
        {
          "matches": "[id=\"com.twitter.android:id/tweet_ad_badge_top_right\"] + [id=\"com.twitter.android:id/tweet_curation_action\"]",
          "key": 2,
          "name": "点击右上角关闭-英文",
          "snapshotUrls": [
            "https://i.gkd.li/import/13680756"
          ]
        },
        {
          "matches": "@ViewGroup > [id=\"com.twitter.android:id/action_sheet_item_title\"][text^=\"屏蔽\"||text^=\"屏蔽\"||text^=\"Block\"]",
          "preKeys": [
            0,
            1,
            2
          ],
          "key": 3,
          "name": "点击屏蔽",
          "snapshotUrls": [
            "https://i.gkd.li/import/12828815",
            "https://i.gkd.li/import/12847600",
            "https://i.gkd.li/import/12904602",
            "https://i.gkd.li/import/13680783"
          ]
        },
        {
          "matches": "[text=\"取消\"||text^=\"Cancel\"] + [text=\"屏蔽\"||text^=\"Block\"]",
          "preKeys": 3,
          "key": 4,
          "name": "二次确认-点击屏蔽",
          "snapshotUrls": [
            "https://i.gkd.li/import/12828832",
            "https://i.gkd.li/import/12904601",
            "https://i.gkd.li/import/13680798"
          ]
        }
      ]
    },
    {
      "name": "信息流广告-用户资料页",
      "desc": "点击右上角关闭,点击我不喜欢",
      "enable": false,
      "actionCd": 3000,
      "quickFind": true,
      "key": 29,
      "rules": [
        {
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] +n [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text=\"推荐\"]",
          "key": 0,
          "name": "点击右上角关闭",
          "snapshotUrls": [
            "https://i.gkd.li/import/12825969",
            "https://i.gkd.li/import/12847584"
          ]
        },
        {
          "matches": "@[id=\"com.twitter.android:id/tweet_curation_action\"] <2 * + [id=\"com.twitter.android:id/tweet_auto_playable_content_parent\"] > [id=\"com.twitter.android:id/tweet_promoted_badge_bottom\"][text$=\"推荐\"]",
          "key": 1,
          "name": "点击右上角关闭",
          "snapshotUrls": [
            "https://i.gkd.li/import/12882676",
            "https://i.gkd.li/import/12904603"
          ]
        },
        {
          "matches": "@ViewGroup > [id=\"com.twitter.android:id/action_sheet_item_title\"][text=\"我不喜欢这个广告\"]",
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "name": "点击[我不喜欢这个广告]",
          "snapshotUrls": "https://i.gkd.li/import/12798810"
        }
      ]
    },
    {
      "name": "评价弹窗",
      "enable": false,
      "matchTime": 10000,
      "quickFind": true,
      "key": 30,
      "rules": [
        {
          "matches": "[id=\"com.twitter.android:id/app_rating_button_never\"]",
          "activityIds": "com.twitter.app.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13774150",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-请求通知权限弹窗",
      "desc": "点击\"Not now\"",
      "enable": false,
      "quickFind": true,
      "key": 31,
      "rules": [
        {
          "matches": "[id=\"com.twitter.android:id/secondary_button\"] [text=\"Not now\"]",
          "activityIds": "com.twitter.app.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13930126",
          "key": 0
        }
      ]
    }
  ]
});
