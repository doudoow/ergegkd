// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "知乎",
  "id": "com.zhihu.android",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "([vid=\"btn_skip\"][visibleToUser=true]) || ([text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true])",
          "excludeActivityIds": [
            ".app.SearchActivity",
            ".comment.ui.activity.CommentListActivity",
            ".feature.short_container_feature.ui.ShortContainerHostActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/18221451",
            "https://i.gkd.li/i/22714295"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/18221225",
            "https://i.gkd.li/i/23141429",
            "https://i.gkd.li/i/24229324"
          ],
          "exampleUrls": "https://e.gkd.li/e129aaa6-bf4f-4455-9242-a6779667d814",
          "key": 0
        },
        {
          "matches": "([vid=\"btn_skip\"][visibleToUser=true]) || ([text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true])",
          "excludeActivityIds": [
            ".app.SearchActivity",
            ".comment.ui.activity.CommentListActivity",
            ".feature.short_container_feature.ui.ShortContainerHostActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/18221451",
            "https://i.gkd.li/i/22714295"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/18221225",
            "https://i.gkd.li/i/23141429",
            "https://i.gkd.li/i/24229324"
          ],
          "exampleUrls": "https://e.gkd.li/e129aaa6-bf4f-4455-9242-a6779667d814"
        },
        {
          "matches": "TextView[width<114 && height<67] - @View[clickable=true][visibleToUser=true][width<135] <3 FrameLayout[childCount=4][getChild(1).getChild(0).childCount=3] <2 FrameLayout[childCount=2][getChild(0).width=0] < [vid=\"show_layout\"]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/30968922",
            "https://i.gkd.li/i/31332983"
          ]
        },
        {
          "matches": "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200 && height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/30968922"
        },
        {
          "matches": "TextView[id=\"com.zhihu.android:id/btn_skip\"]",
          "key": 4
        }
      ]
    },
    {
      "name": "分段广告-信息流广告",
      "desc": "点击关闭-点击内容不感兴趣",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[clickable=true][visibleToUser=true] -(1,2) TextView[childCount=0][id=null][text=null][desc=null] <n ViewGroup >n [text*=\"广告\"][childCount=0][id=null][desc=null]",
          "activityIds": [
            ".feature.short_container_feature.ui.ShortContainerHostActivity",
            ".ContentActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13849671",
            "https://i.gkd.li/i/14645530",
            "https://i.gkd.li/i/14178516",
            "https://i.gkd.li/i/13849442",
            "https://i.gkd.li/i/14178979",
            "https://i.gkd.li/i/14178980",
            "https://i.gkd.li/i/14206949",
            "https://i.gkd.li/i/14206988",
            "https://i.gkd.li/i/18008867"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/17002118",
            "https://i.gkd.li/i/17002119",
            "https://i.gkd.li/i/17002120"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][childCount=0] < FrameLayout[childCount=1] - * > [text*=\"广告\" || text$=\"商品介绍\"]",
          "activityIds": ".app.ui.activity.MainActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14296163",
            "https://i.gkd.li/i/14321041",
            "https://i.gkd.li/i/14468152",
            "https://i.gkd.li/i/17237944"
          ]
        },
        {
          "matches": "@ViewGroup[clickable=true][childCount=1] <(2,3,4) ViewGroup -(2,3) ViewGroup[childCount>1] >(1,2) [text*=\"广告\"]",
          "activityIds": [
            ".app.ui.activity.MainActivity",
            ".ContentActivity",
            ".feature.short_container_feature.ui.ShortContainerHostActivity"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/14192451",
            "https://i.gkd.li/i/18217217",
            "https://i.gkd.li/i/19591989",
            "https://i.gkd.li/i/21813914",
            "https://i.gkd.li/i/24214771"
          ],
          "exampleUrls": "https://e.gkd.li/60c4dea8-99c1-4a6f-aca6-a098b5ed76d7"
        },
        {
          "matches": "@ViewGroup[clickable=true][childCount=1] <3 ViewGroup < ViewGroup -(2,3) ViewGroup >2 [text*=\"广告\"]",
          "activityIds": ".app.ui.activity.MainActivity",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/14332161",
            "https://i.gkd.li/i/14730741"
          ]
        },
        {
          "matches": "@[vid=\"remove\"] - [vid=\"subtitle\"][text*=\"广告\"]",
          "activityIds": ".feature.short_container_feature.ui.ShortContainerHostActivity",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/17268845",
            "https://i.gkd.li/i/17268869"
          ]
        },
        {
          "matches": "@[clickable=true] >(1,3) [text$=\"不感兴趣\" || text^=\"屏蔽作者\" || text=\"不喜欢该内容\"]",
          "preKeys": [
            11,
            7,
            8,
            9,
            4
          ],
          "activityIds": [
            ".feature.short_container_feature.ui.ShortContainerHostActivity",
            ".ContentActivity",
            ".app.ui.activity.MainActivity"
          ],
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/13849689",
            "https://i.gkd.li/i/17237940",
            "https://i.gkd.li/i/17268849",
            "https://i.gkd.li/i/23431871"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] -(1,2) TextView[childCount=0][id=null][text=null][desc=null] <n * >n [text*=\"广告\"][childCount=0][id=null][desc=null]",
          "activityIds": [
            "com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity",
            "com.zhihu.android.ContentActivity"
          ],
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/13849671",
            "https://i.gkd.li/i/14645530",
            "https://i.gkd.li/i/14178516",
            "https://i.gkd.li/i/13849442",
            "https://i.gkd.li/i/14178979",
            "https://i.gkd.li/i/14178980",
            "https://i.gkd.li/i/14206949",
            "https://i.gkd.li/i/14206988"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/17002118",
            "https://i.gkd.li/i/17002119",
            "https://i.gkd.li/i/17002120"
          ]
        },
        {
          "matches": "@ImageView[clickable=true] < * - * > [text*=\"广告\" || text$=\"商品介绍\"]",
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "key": 7,
          "snapshotUrls": [
            "https://i.gkd.li/i/14296163",
            "https://i.gkd.li/i/14321041",
            "https://i.gkd.li/i/14468152",
            "https://i.gkd.li/i/17237944"
          ]
        },
        {
          "matches": "@ViewGroup[clickable=true] <4 * -3 * >2 [text*=\"广告\"]",
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/14192451"
        },
        {
          "matches": "@ViewGroup[clickable=true] <3 * < * -3 * >2 [text*=\"广告\"]",
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "key": 9,
          "snapshotUrls": "https://i.gkd.li/i/14730741"
        },
        {
          "matches": "@[clickable=true] >3 [text$=\"不感兴趣\" || text^=\"屏蔽作者\"]",
          "preKeys": [
            11,
            7,
            8,
            9
          ],
          "activityIds": [
            "com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity",
            "com.zhihu.android.ContentActivity",
            "com.zhihu.android.app.ui.activity.MainActivity"
          ],
          "key": 10,
          "snapshotUrls": [
            "https://i.gkd.li/i/13849689",
            "https://i.gkd.li/i/17237940"
          ]
        },
        {
          "matches": "@[clickable=true][visibleToUser=true] -(1,2) TextView[childCount=0][id=null][text=null][desc=null] <n ViewGroup >n [text*=\"广告\"][childCount=0][id=null][desc=null]",
          "activityIds": [
            ".feature.short_container_feature.ui.",
            ".ContentActivity"
          ],
          "key": 11,
          "snapshotUrls": [
            "https://i.gkd.li/i/13849671",
            "https://i.gkd.li/i/14645530",
            "https://i.gkd.li/i/14178516",
            "https://i.gkd.li/i/13849442",
            "https://i.gkd.li/i/14178979",
            "https://i.gkd.li/i/14178980",
            "https://i.gkd.li/i/14206949",
            "https://i.gkd.li/i/14206988",
            "https://i.gkd.li/i/18008867",
            "https://i.gkd.li/i/25572259"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/17002118",
            "https://i.gkd.li/i/17002119",
            "https://i.gkd.li/i/17002120"
          ]
        },
        {
          "matches": "ImageView < @[index=parent.childCount.minus(1)][clickable=true][width<150] <n ViewGroup + [childCount=2] >3 [text=\"广告\"]",
          "activityIds": [
            ".ContentActivity",
            ".feature.short_container_feature.ui.ShortContainerHostActivity"
          ],
          "key": 12,
          "snapshotUrls": [
            "https://i.gkd.li/i/28661886",
            "https://i.gkd.li/i/28590141"
          ]
        },
        {
          "matches": "@[clickable=true] >(1,3) [text$=\"不感兴趣\" || text^=\"屏蔽作者\" || text=\"不喜欢该内容\"]",
          "preKeys": [
            11,
            12,
            7,
            8,
            9,
            4
          ],
          "activityIds": [
            ".feature.short_container_feature.ui.ShortContainerHostActivity",
            ".ContentActivity",
            ".app.ui.activity.MainActivity"
          ],
          "key": 13,
          "name": "②点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13849689",
            "https://i.gkd.li/i/17237940",
            "https://i.gkd.li/i/17268849",
            "https://i.gkd.li/i/23431871"
          ]
        },
        {
          "matches": "@[clickable=true] >(1,3) [text$=\"不感兴趣\" || text^=\"屏蔽作者\"||text$=\"内容重复\"||text=\"不喜欢该内容\"]",
          "preKeys": [
            11,
            7,
            8,
            9,
            4
          ],
          "activityIds": [
            ".feature.short_container_feature.ui.ShortContainerHostActivity",
            ".ContentActivity",
            ".app.ui.activity.MainActivity"
          ],
          "key": 14,
          "snapshotUrls": [
            "https://i.gkd.li/i/13849689",
            "https://i.gkd.li/i/17237940",
            "https://i.gkd.li/i/17268849",
            "https://i.gkd.li/i/18807610",
            "https://i.gkd.li/i/23431871"
          ]
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "enable": false,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text$=\"内容推送\" || text=\"开启私信通知\"]",
            "[vid=\"btn_close\"]"
          ],
          "activityIds": [
            ".app.ui.activity.MainActivity",
            ".mix.activity.ContentMixProfileActivity",
            ".app.ui.activity.HostActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/18057057",
            "https://i.gkd.li/i/20647853",
            "https://i.gkd.li/i/22762314"
          ]
        },
        {
          "matches": "[id=\"com.zhihu.android:id/guide_title\"] - [id=\"com.zhihu.android:id/guide_image_exit\"][clickable=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12647583",
          "exampleUrls": "https://m.gkd.li/57941037/25cfef06-fe50-4250-bf45-1f6210f95063"
        },
        {
          "matches": [
            "[text$=\"内容推送\"]",
            "[vid=\"btn_close\"]"
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14917866",
          "exampleUrls": "https://m.gkd.li/57941037/1d1fee24-3ba0-4cf1-a0d5-696f4f62a5e0"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.zhihu.android:id/dismiss\"]",
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "key": 0,
          "name": "会员页弹窗广告",
          "snapshotUrls": "https://i.gkd.li/i/12707676"
        },
        {
          "matches": "[vid=\"tv_ad_close\"]",
          "activityIds": "com.zhihu.android.app.ui.activity.AdAlphaVideoActivity",
          "key": 1,
          "name": "首页弹窗广告",
          "snapshotUrls": "https://i.gkd.li/i/14648128"
        },
        {
          "matches": "[id=\"com.zhihu.android:id/floating_close_btn\"]",
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "key": 2,
          "name": "会员页红包弹窗",
          "snapshotUrls": "https://i.gkd.li/i/12647421"
        },
        {
          "matches": "View[text=\"关闭\"] > @[visibleToUser=true][text=\"关闭\"] <<n [vid=\"webview_bg\"]",
          "action": "clickCenter",
          "activityIds": "com.zhihu.android.creatorcenter.CreatorCenterHostActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14955183"
        },
        {
          "matches": "[vid=\"dismiss\"]",
          "activityIds": ".app.ui.activity.MainActivity",
          "key": 4,
          "name": "会员页弹窗广告",
          "snapshotUrls": "https://i.gkd.li/i/12707676"
        },
        {
          "matches": "[vid=\"tv_ad_close\"]",
          "activityIds": ".app.ui.activity.AdAlphaVideoActivity",
          "key": 5,
          "name": "首页弹窗广告",
          "snapshotUrls": "https://i.gkd.li/i/14648128"
        },
        {
          "matches": "[vid=\"floating_close_btn\"]",
          "activityIds": ".app.ui.activity.MainActivity",
          "key": 6,
          "name": "会员页红包弹窗",
          "snapshotUrls": "https://i.gkd.li/i/12647421"
        },
        {
          "matches": "View[text=\"关闭\"] > @[visibleToUser=true][text=\"关闭\"] <<n [vid=\"webview_bg\"]",
          "action": "clickCenter",
          "activityIds": ".creatorcenter.CreatorCenterHostActivity",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/14955183"
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "key": 4,
      "rules": [
        {
          "matches": [
            "[vid=\"ad_container\"]",
            "[vid=\"img_close_focus\"]"
          ],
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "搜索栏上方广告",
          "snapshotUrls": "https://i.gkd.li/i/14156887",
          "exampleUrls": "https://m.gkd.li/101449500/11c26ab8-0b01-4345-8ea8-d4e97233b723"
        },
        {
          "matches": "@ViewGroup[childCount=1][clickable=true][visibleToUser=true][getChild(0).name$=\"SvgView\"] - [text=\"广告\"]",
          "activityIds": ".comment.ui.activity.CommentListActivity",
          "fastQuery": true,
          "key": 1,
          "name": "评论区广告",
          "snapshotUrls": "https://i.gkd.li/i/20711018",
          "exampleUrls": "https://e.gkd.li/d81b6bc4-f4f9-466d-8edb-7af27c707ca5"
        },
        {
          "matches": "@[vid=\"ic_close\"][clickable=true] -n [text=\"更多优质答主\"]",
          "activityIds": "com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity",
          "fastQuery": true,
          "key": 2,
          "name": "优质答主推荐",
          "snapshotUrls": "https://i.gkd.li/i/24335648"
        },
        {
          "matches": [
            "[vid=\"ad_container\"]",
            "[vid=\"img_close_focus\"]"
          ],
          "activityIds": ".app.ui.activity.MainActivity",
          "fastQuery": true,
          "key": 3,
          "name": "搜索栏上方广告",
          "snapshotUrls": "https://i.gkd.li/i/14156887",
          "exampleUrls": "https://m.gkd.li/101449500/11c26ab8-0b01-4345-8ea8-d4e97233b723"
        },
        {
          "matches": "@[vid=\"ic_close\"][clickable=true] -n [text=\"更多优质答主\"]",
          "activityIds": ".feature.short_container_feature.ui.ShortContainerHostActivity",
          "fastQuery": true,
          "key": 4,
          "name": "优质答主推荐",
          "snapshotUrls": "https://i.gkd.li/i/24335648"
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "@[text=\"×\"][visibleToUser=true] <n View > [visibleToUser=true][text*=\"广告\" || text=\"查看详情\"] <<n [vid=\"web_frame\" || vid=\"view_content\"]",
          "activityIds": [
            ".mix.activity.ContentMixProfileActivity",
            ".mixshortcontainer.MixShortContainerActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14220104",
            "https://i.gkd.li/i/14421277",
            "https://i.gkd.li/i/15285359"
          ]
        },
        {
          "matches": "@Image[visibleToUser=true] <2 View > [visibleToUser=true][text$=\"广告\"] <<n [vid=\"view_content\"]",
          "activityIds": [
            ".mixshortcontainer.MixShortContainerActivity",
            ".mix.activity.ContentMixProfileActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14391614",
            "https://i.gkd.li/i/15282584",
            "https://i.gkd.li/i/20648888"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true]  -(1,2) TextView[childCount=0][id=null][text=null][desc=null] <n ViewGroup > [text*=\"知乎\" || text=\"创作者小助手\"][childCount=0][id=null][desc=null]",
          "activityIds": ".feature.short_container_feature.ui.ShortContainerHostActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/14235024",
            "https://i.gkd.li/i/14944631",
            "https://i.gkd.li/i/14232195"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/14232195"
        },
        {
          "matches": "@[text=\"×\"][visibleToUser=true] <n * > [visibleToUser=true][text*=\"广告\" || text=\"查看详情\"] <<n [vid=\"web_frame\" || vid=\"view_content\"]",
          "activityIds": [
            "com.zhihu.android.mix.activity.ContentMixProfileActivity",
            "com.zhihu.android.mixshortcontainer.MixShortContainerActivity"
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/14220104",
            "https://i.gkd.li/i/14421277",
            "https://i.gkd.li/i/15285359"
          ]
        },
        {
          "matches": "@ViewGroup[clickable=true] <3 * < * -2 * >2 [text$=\"广告\"]",
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/14332161"
        },
        {
          "matches": "@Image[clickable=true][visibleToUser=true] <2 * > [visibleToUser=true][text$=\"广告\"] <<n [vid=\"view_content\"]",
          "activityIds": [
            "com.zhihu.android.mixshortcontainer.MixShortContainerActivity",
            "com.zhihu.android.mix.activity.ContentMixProfileActivity"
          ],
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/14391614",
            "https://i.gkd.li/i/15282584"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true]  -(1,2) TextView[childCount=0][id=null][text=null][desc=null] <n * > [text*=\"知乎\" || text=\"创作者小助手\"][childCount=0][id=null][desc=null]",
          "activityIds": "com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity",
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/14235024",
            "https://i.gkd.li/i/14944631",
            "https://i.gkd.li/i/14232195",
            "https://i.gkd.li/i/14232195"
          ]
        },
        {
          "matches": "@[index=parent.childCount.minus(1)][clickable=true][width<150] -n [text^=\"知乎\" || text=\"创作者小助手\"][index!=2]",
          "activityIds": ".feature.short_container_feature.ui.ShortContainerHostActivity",
          "key": 7,
          "snapshotUrls": [
            "https://i.gkd.li/i/14235024",
            "https://i.gkd.li/i/14944631",
            "https://i.gkd.li/i/14232195"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/14232195"
        },
        {
          "matches": "@[text=\"\" || text=\"×\"][childCount=0][width<110 && height<110] <n [childCount>2] > [visibleToUser=true][text$=\"广告\" || text=\"查看详情\"] <<n [vid=\"web_frame\" || vid=\"view_content\"]",
          "activityIds": [
            ".mix.activity.ContentMixProfileActivity",
            ".mixshortcontainer.MixShortContainerActivity"
          ],
          "key": 8,
          "snapshotUrls": [
            "https://i.gkd.li/i/14220104",
            "https://i.gkd.li/i/14421277",
            "https://i.gkd.li/i/15285359",
            "https://i.gkd.li/i/14391614",
            "https://i.gkd.li/i/15282584",
            "https://i.gkd.li/i/20648888"
          ]
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "desc": "关闭首页、发现页等位置的悬浮广告和关注提示",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": [
            "[vid=\"activity_img\"]",
            "[vid=\"activity_close\"]"
          ],
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "key": 0,
          "name": "发现页面-右侧年卡折扣悬浮窗",
          "snapshotUrls": "https://i.gkd.li/i/14296251"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] + * >2 [text=\"广告\"]",
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "key": 1,
          "name": "首页-右侧悬浮窗广告",
          "snapshotUrls": "https://i.gkd.li/i/14635636"
        },
        {
          "matches": "[vid=\"close_img\"]",
          "activityIds": "com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity",
          "key": 2,
          "name": "回答页-底部关注悬浮窗",
          "snapshotUrls": "https://i.gkd.li/i/14970008"
        },
        {
          "matches": "View[childCount=3] > @View[clickable=true][childCount=1][text=\"\"] > Image[childCount=0][text=\"\"] <<n [vid=\"view_content\"]",
          "activityIds": "com.zhihu.android.mix.activity.ContentMixProfileActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/16422471",
          "exampleUrls": "https://e.gkd.li/6b9afb50-47a3-4426-a157-9b170b57c616"
        },
        {
          "matches": [
            "[vid=\"activity_img\"]",
            "[vid=\"activity_close\"]"
          ],
          "activityIds": ".app.ui.activity.MainActivity",
          "key": 4,
          "name": "发现页面-右侧年卡折扣悬浮窗",
          "snapshotUrls": "https://i.gkd.li/i/14296251"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] + * >2 [text=\"广告\"]",
          "activityIds": ".app.ui.activity.MainActivity",
          "key": 5,
          "name": "首页-右侧悬浮窗广告",
          "snapshotUrls": "https://i.gkd.li/i/14635636"
        },
        {
          "matches": "[vid=\"close_img\"]",
          "activityIds": ".feature.short_container_feature.ui.ShortContainerHostActivity",
          "key": 6,
          "name": "回答页-底部关注悬浮窗",
          "snapshotUrls": "https://i.gkd.li/i/14970008"
        },
        {
          "matches": "View[childCount=3] > @View[clickable=true][childCount=1][text=\"\"] > Image[childCount=0][text=\"\"] <<n [vid=\"view_content\"]",
          "activityIds": ".mix.activity.ContentMixProfileActivity",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/16422471",
          "exampleUrls": "https://e.gkd.li/6b9afb50-47a3-4426-a157-9b170b57c616"
        },
        {
          "matches": [
            "[vid=\"activity_img\"]",
            "[vid=\"activity_close\"]"
          ],
          "activityIds": [
            "com.zhihu.android.app.ui.activity.MainActivity"
          ],
          "fastQuery": true,
          "key": 8,
          "name": "发现页面-右侧年卡折扣悬浮窗",
          "snapshotUrls": "https://i.gkd.li/import/14296251"
        },
        {
          "matches": "@ImageView[clickable=true][visibleToUser=true] + * >2 [text=\"广告\"]",
          "activityIds": [
            "com.zhihu.android.app.ui.activity.MainActivity"
          ],
          "fastQuery": true,
          "key": 9,
          "name": "首页-右侧悬浮窗广告",
          "snapshotUrls": "https://i.gkd.li/i/14635636"
        },
        {
          "matches": "[vid=\"close_img\"]",
          "activityIds": [
            "com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity"
          ],
          "fastQuery": true,
          "key": 10,
          "name": "回答页-底部关注悬浮窗",
          "snapshotUrls": "https://i.gkd.li/i/14970008"
        },
        {
          "matches": "View[childCount=3] > @View[clickable=true][childCount=1][text=\"\"] > Image[text=\"\"][childCount=0] <<n [vid=\"view_content\"]",
          "activityIds": "com.zhihu.android.mix.activity.ContentMixProfileActivity",
          "fastQuery": true,
          "key": 11,
          "name": "回答页-底部关注悬浮窗-2",
          "snapshotUrls": "https://i.gkd.li/i/16422471"
        },
        {
          "matches": [
            "[vid=\"ad_container\"]",
            "[vid=\"img_close_focus\"]"
          ],
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "fastQuery": true,
          "key": 12,
          "name": "搜索栏上方广告",
          "snapshotUrls": "https://i.gkd.li/i/14156887"
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
      "key": 7,
      "rules": [
        {
          "matches": "CheckBox[text=\"不再提醒\"][checked=false][clickable=true]",
          "key": 0,
          "name": "勾选[不再提醒]",
          "snapshotUrls": [
            "https://i.gkd.li/i/14445502",
            "https://i.gkd.li/i/14445815"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/728ea1cd-ca19-4de9-9e7e-eb2a3513f965"
        },
        {
          "matches": [
            "[text=\"去应用市场\"]",
            "[text=\"取消\"]"
          ],
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "点击[取消]",
          "snapshotUrls": "https://i.gkd.li/i/14445502",
          "exampleUrls": "https://m.gkd.li/57941037/728ea1cd-ca19-4de9-9e7e-eb2a3513f965"
        },
        {
          "matches": [
            "[text=\"去应用市场\"]",
            "[text=\"取消\"]"
          ],
          "preKeys": 0,
          "key": 2,
          "name": "点击[取消]",
          "snapshotUrls": "https://i.gkd.li/i/14445502",
          "exampleUrls": "https://m.gkd.li/57941037/728ea1cd-ca19-4de9-9e7e-eb2a3513f965"
        }
      ]
    },
    {
      "name": "功能类-热榜页自动点击[展开更多]",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "@[clickable=true] >2 [text=\"展开更多\"]",
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14974198",
          "exampleUrls": "https://m.gkd.li/57941037/09616b29-8a83-4f0f-9f8e-0100fa61738d",
          "key": 0
        },
        {
          "matches": "@[clickable=true] >2 [text=\"展开更多\"]",
          "activityIds": ".app.ui.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14974198",
          "exampleUrls": "https://m.gkd.li/57941037/09616b29-8a83-4f0f-9f8e-0100fa61738d",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-自动展开回答",
      "desc": "自动点击展开",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "ImageView[id=\"com.zhihu.android:id/iv_expand\"] - TextView[id=\"com.zhihu.android:id/tv_expand\"][text=\"展开\"][visibleToUser=true]",
          "activityIds": "com.zhihu.android.mixshortcontainer.MixShortContainerActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12647688",
            "https://i.gkd.li/i/12707687"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/6f6e5fd0-98a8-4a92-be02-7f34e3c5b8bd",
          "key": 0
        },
        {
          "matches": "ImageView[id=\"com.zhihu.android:id/iv_expand\"] - TextView[id=\"com.zhihu.android:id/tv_expand\"][text=\"展开\"][visibleToUser=true]",
          "activityIds": "com.zhihu.android.mixshortcontainer.MixShortContainerActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/12647688",
            "https://i.gkd.li/i/12707687"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/6f6e5fd0-98a8-4a92-be02-7f34e3c5b8bd",
          "key": 1
        },
        {
          "matches": "ImageView[vid=\"iv_expand\"] - TextView[vid=\"tv_expand\"][text=\"展开\"][visibleToUser=true]",
          "activityIds": ".mixshortcontainer.MixShortContainerActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12647688",
            "https://i.gkd.li/i/12707687"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/6f6e5fd0-98a8-4a92-be02-7f34e3c5b8bd",
          "key": 2
        },
        {
          "matches": "ImageView[id=\"com.zhihu.android:id/iv_expand\"] - TextView[text=\"展开\"][visibleToUser=true]",
          "activityIds": "com.zhihu.android.mixshortcontainer.MixShortContainerActivity",
          "snapshotUrls": [
            "https://i.gkd.li/import/12647688",
            "https://i.gkd.li/import/12707687"
          ],
          "key": 3
        }
      ]
    },
    {
      "name": "评价提示-评论区氛围评价卡片",
      "desc": "点击关闭",
      "actionMaximum": 1,
      "key": 10,
      "rules": [
        {
          "matches": "@ViewGroup[clickable=true] - [text^=\"你对该内容下的评论氛围是否满意\"][visibleToUser=true]",
          "activityIds": ".comment.ui.activity.CommentListActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20473238",
          "exampleUrls": "https://e.gkd.li/60674332-41a3-4a31-907e-7af6c23182bf",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-搜索栏上方广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": [
            "[vid=\"ad_container\"]",
            "[vid=\"img_close_focus\"]"
          ],
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14156887",
          "exampleUrls": "https://m.gkd.li/101449500/11c26ab8-0b01-4345-8ea8-d4e97233b723",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "desc": "关闭会员页、首页等位置的各类广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"com.zhihu.android:id/dismiss\"]",
          "key": 0,
          "name": "会员页广告弹窗",
          "snapshotUrls": "https://i.gkd.li/i/12707676"
        },
        {
          "matches": "[vid=\"tv_ad_close\"]",
          "key": 1,
          "name": "首页广告弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14648128"
        },
        {
          "matches": "[id=\"com.zhihu.android:id/floating_close_btn\"]",
          "key": 2,
          "name": "会员页红包弹窗",
          "snapshotUrls": "https://i.gkd.li/i/12647421"
        }
      ]
    },
    {
      "name": "局部广告-回答底部广告",
      "desc": "关闭回答底部的推广内容和热度提示",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "anyMatches": [
            "@[clickable=true][visibleToUser=true] -(1,2) TextView[childCount=0][id=null][text=null][desc=null] <n ViewGroup >n [text*=\"广告\"][childCount=0][id=null][desc=null]",
            "ImageView < @[index=parent.childCount.minus(1)][clickable=true][width<150] <n ViewGroup + [childCount=2] >3 [text=\"广告\"]"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/14178980",
            "https://i.gkd.li/import/14206949",
            "https://i.gkd.li/import/14232195",
            "https://i.gkd.li/import/14235024",
            "https://i.gkd.li/i/14944631",
            "https://i.gkd.li/i/14391614",
            "https://i.gkd.li/i/14548763",
            "https://i.gkd.li/i/14220104",
            "https://i.gkd.li/i/14421277",
            "https://i.gkd.li/i/15024185",
            "https://i.gkd.li/i/15024288",
            "https://i.gkd.li/i/15282584",
            "https://i.gkd.li/i/15285359",
            "https://i.gkd.li/i/20648888",
            "https://i.gkd.li/i/28590141",
            "https://i.gkd.li/i/28661886",
            "https://i.gkd.li/i/14232195"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/17088832"
          ]
        }
      ]
    },
    {
      "name": "功能类-自动授权",
      "desc": "自动确认知乎扫码登录的授权请求",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "[text=\"取消\"] <n * > [text=\"确认登录\"]",
          "snapshotUrls": "https://i.gkd.li/import/14341536",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-评论区卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "actionMaximum": 1,
      "key": 15,
      "rules": [
        {
          "matches": "@ViewGroup[clickable=true] - [text^=\"你对该内容下的评论氛围是否满意\"][visibleToUser=true]",
          "activityIds": ".comment.ui.activity.CommentListActivity",
          "fastQuery": true,
          "key": 0,
          "name": "氛围评价卡片",
          "snapshotUrls": "https://i.gkd.li/i/20473238"
        },
        {
          "matches": "@ViewGroup[childCount=1][clickable=true][visibleToUser=true][getChild(0).name$=\"SvgView\"] - [text=\"广告\"]",
          "activityIds": ".comment.ui.activity.CommentListActivity",
          "fastQuery": true,
          "key": 1,
          "name": "评论区广告",
          "snapshotUrls": "https://i.gkd.li/i/20711018"
        },
        {
          "matches": "@[vid=\"ic_close\"][clickable=true] -n [text=\"更多优质答主\"]",
          "activityIds": "com.zhihu.android.feature.short_container_feature.ui.ShortContainerHostActivity",
          "fastQuery": true,
          "key": 2,
          "name": "优质答主推荐",
          "snapshotUrls": "https://i.gkd.li/i/24335648"
        }
      ]
    },
    {
      "name": "全屏广告-关闭广告弹窗",
      "desc": "点击 关闭广告按钮 之后出现的广告弹窗",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "@FrameLayout ImageView + TextView[text*=`虚假广告`][id=`com.zhihu.android:id/tv_content`]",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-推荐页广告卡片",
      "desc": "赚稿费广告卡片,盐选推荐广告,知乎学课堂,汽车广告",
      "enable": false,
      "key": 19,
      "rules": [
        {
          "matches": "[id=\"com.zhihu.android:id/content\"] >2 TextView[text=\"不感兴趣\"][id=\"com.zhihu.android:id/title\"]",
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "key": 0
        },
        {
          "matches": "TextView[text=`内容质量差`][id=`com.zhihu.android:id/tv_content`]",
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "key": 1
        },
        {
          "matches": "@ImageView[id=`com.zhihu.android:id/menu`] < FrameLayout - * > TextView[text^=`广告`]",
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "key": 2
        },
        {
          "matches": "@ImageView[id=null][clickable=true] -n TextView[text*=`广告`][index=0]",
          "activityIds": "com.zhihu.android.app.ui.activity.MainActivity",
          "key": 3
        }
      ]
    },
    {
      "name": "分段广告-问题-回答列表-卡片广告",
      "enable": false,
      "key": 20,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] -n [text=\"广告\"]",
          "activityIds": "com.zhihu.android.ContentActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13849671"
        },
        {
          "matches": "ImageView[id=null] + TextView[text!=null][id=null] + ViewGroup > ImageView[clickable=true]",
          "activityIds": "com.zhihu.android.ContentActivity",
          "key": 1
        },
        {
          "matches": "@ImageView[clickable=true] -3 * > [text=\"广告\"]",
          "activityIds": "com.zhihu.android.ContentActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13849442"
        },
        {
          "matches": "@[clickable=true] >3 [text=\"内容不感兴趣\"]",
          "preKeys": [
            0
          ],
          "activityIds": "com.zhihu.android.ContentActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/13849689"
        }
      ]
    },
    {
      "name": "局部广告-回答底部评论顶部的任意广告推荐",
      "enable": false,
      "key": 21,
      "rules": [
        {
          "matches": "@Image + TextView[text$=`的广告`]",
          "key": 0
        },
        {
          "matches": "TextView[text$=`的广告`] +n TextView[text=`×`][visibleToUser=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12864109"
        },
        {
          "matches": "TextView[text=\"查看详情\"] + TextView[text=\"×\"]",
          "activityIds": [
            "com.zhihu.android.mix.activity.ContentMixProfileActivity"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/12647617",
            "https://i.gkd.li/import/12647659"
          ]
        },
        {
          "matches": "TextView[text*=`赞同`][text*=`评论`] + TextView[text=`×`]",
          "key": 3
        },
        {
          "matches": "TextView[text*=`回答`][text*=`关注`] + TextView[text=`×`]",
          "key": 4
        },
        {
          "matches": "TextView[text$=`的广告`] - Image[id=null]",
          "key": 5
        },
        {
          "matches": "TextView[text*=`点赞`][text*=`的回答`] +2 Image[id=null]",
          "key": 6
        },
        {
          "matches": "TextView[text=\"\"] + Image[text=\"\"] + TextView[text=\"​\"] + Image[id=null][clickable=true]",
          "key": 7
        },
        {
          "matches": "@ImageView[id=null][clickable=true] -(2) ViewGroup > [text$=\"广告\"]",
          "key": 8,
          "snapshotUrls": [
            "https://i.gkd.li/import/12647525"
          ]
        },
        {
          "matches": "[id=\"com.zhihu.android:id/recycler_view\"] > FrameLayout >(3) [text$=\"不感兴趣\"]",
          "preKeys": [
            8
          ],
          "key": 9,
          "name": "反馈弹窗-点击“不感兴趣”",
          "snapshotUrls": [
            "https://i.gkd.li/import/12647541"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-关闭首页广告",
      "enable": false,
      "key": 22,
      "rules": [
        {
          "matches": "[id=`com.zhihu.android:id/tv_ad_close`]",
          "key": 0
        }
      ]
    },
    {
      "name": "关闭广告弹窗",
      "desc": "点击 关闭广告按钮 之后出现的广告弹窗",
      "enable": false,
      "key": 28,
      "rules": [
        {
          "matches": "@FrameLayout ImageView + TextView[text*=`虚假广告`][id=`com.zhihu.android:id/tv_content`]",
          "key": 0
        }
      ]
    },
    {
      "name": "回答底部评论顶部的任意广告推荐",
      "enable": false,
      "key": 31,
      "rules": [
        {
          "matches": "@Image + TextView[text$=`的广告`]",
          "key": 0
        },
        {
          "matches": "TextView[text$=`的广告`] +n TextView[text=`×`][visibleToUser=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12864109"
        },
        {
          "matches": "TextView[text=\"查看详情\"] + TextView[text=\"×\"]",
          "activityIds": [
            "com.zhihu.android.mix.activity.ContentMixProfileActivity"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/12647617",
            "https://i.gkd.li/import/12647659"
          ]
        },
        {
          "matches": "TextView[text*=`赞同`][text*=`评论`] + TextView[text=`×`]",
          "key": 3
        },
        {
          "matches": "TextView[text*=`回答`][text*=`关注`] + TextView[text=`×`]",
          "key": 4
        },
        {
          "matches": "TextView[text$=`的广告`] - Image[id=null]",
          "key": 5
        },
        {
          "matches": "TextView[text*=`点赞`][text*=`的回答`] +2 Image[id=null]",
          "key": 6
        },
        {
          "matches": "TextView[text=\"\"] + Image[text=\"\"] + TextView[text=\"​\"] + Image[id=null][clickable=true]",
          "key": 7
        },
        {
          "matches": "@ImageView[id=null][clickable=true] -(2) ViewGroup > [text$=\"广告\"]",
          "key": 8,
          "snapshotUrls": [
            "https://i.gkd.li/import/12647525"
          ]
        },
        {
          "matches": "[id=\"com.zhihu.android:id/recycler_view\"] > FrameLayout >(3) [text$=\"不感兴趣\"]",
          "preKeys": [
            8
          ],
          "key": 9,
          "name": "反馈弹窗-点击“不感兴趣”",
          "snapshotUrls": [
            "https://i.gkd.li/import/12647541"
          ]
        }
      ]
    },
    {
      "name": "关闭首页广告",
      "enable": false,
      "key": 32,
      "rules": [
        {
          "matches": "[id=`com.zhihu.android:id/tv_ad_close`]",
          "key": 0
        }
      ]
    }
  ]
});
