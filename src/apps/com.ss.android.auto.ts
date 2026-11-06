// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "懂车帝",
  "id": "com.ss.android.auto",
  "groups": [
    {
      "name": "分段广告-首页推荐卡片广告",
      "desc": "需二次点击关闭原因",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "TextView[text.length=1][id=null][clickable=false] < @FrameLayout[clickable=true][id!=null] - LinearLayout > [text=\"广告\"]",
          "key": 0,
          "name": "点击关闭",
          "snapshotUrls": [
            "https://i.gkd.li/i/12660816",
            "https://i.gkd.li/i/13959610"
          ]
        },
        {
          "matches": "@ViewGroup[clickable=true] TextView[text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "name": "点击\"不感兴趣\"1",
          "snapshotUrls": "https://i.gkd.li/i/13538627",
          "key": 1
        },
        {
          "matches": "[text=\"不感兴趣\"][clickable=true]",
          "preKeys": [
            0
          ],
          "name": "点击\"不感兴趣\"2",
          "snapshotUrls": [
            "https://i.gkd.li/i/12711589",
            "https://i.gkd.li/i/13959613"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@TextView[text=\"以后再说\"] - FrameLayout >2 TextView[text$=\"升级\"]",
          "activityIds": ".activity.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/13534445",
          "key": 0
        },
        {
          "matches": "@TextView[text=\"以后再说\"] - FrameLayout >2 TextView[text$=\"升级\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-右下角悬浮窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "FrameLayout > RelativeLayout[childCount=2] > RelativeLayout + ImageView[clickable=true]",
          "activityIds": [
            "com.ss.android.auto.activity.SplashActivity",
            "com.ss.android.auto.activity.ConcernDetailActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12798338",
            "https://i.gkd.li/i/13535531",
            "https://i.gkd.li/i/13535933",
            "https://i.gkd.li/i/13535932"
          ],
          "key": 0
        },
        {
          "matches": "FrameLayout > RelativeLayout[childCount=2] > RelativeLayout + ImageView[clickable=true]",
          "activityIds": [
            ".activity.SplashActivity",
            ".activity.ConcernDetailActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12798338",
            "https://i.gkd.li/i/13535531",
            "https://i.gkd.li/i/13535933",
            "https://i.gkd.li/i/13535932"
          ],
          "key": 1
        },
        {
          "matches": "FrameLayout > RelativeLayout[childCount=2] > RelativeLayout + ImageView[clickable=true]",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-文章底部卡片广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "FrameLayout > RelativeLayout > @ImageView[clickable=true] + [text=\"广告\"]",
          "activityIds": "com.ss.android.article.base.feature.detail2.view.NewDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/12811597",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-评论区信息流广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - LinearLayout > [text=\"广告\"]",
          "activityIds": [
            "com.ss.android.article.base.feature.detail2.view.NewDetailActivity",
            "com.ss.android.auto.ugc.video.activity.UgcLongPostActivity",
            "com.ss.android.auto.ugc.video.activity.UgcNewDetailActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12811459",
            "https://i.gkd.li/i/12825865",
            "https://i.gkd.li/i/12900666",
            "https://i.gkd.li/i/14321293"
          ],
          "key": 0
        },
        {
          "matches": "@ImageView[clickable=true] - LinearLayout > [text=\"广告\"]",
          "activityIds": [
            "com.ss.android.article.base.feature.detail2.view.NewDetailActivity",
            ".ugc.video.activity.UgcLongPostActivity",
            ".ugc.video.activity.UgcNewDetailActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12811459",
            "https://i.gkd.li/i/12825865",
            "https://i.gkd.li/i/12900666",
            "https://i.gkd.li/i/14321293"
          ],
          "key": 1
        },
        {
          "matches": "FrameLayout > RelativeLayout > @ImageView[clickable=true] - LinearLayout > [text=\"广告\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "TextView[text*=\"推送通知\"]",
          "action": "back",
          "activityIds": [
            ".activity.SplashActivity",
            "com.bytedance.im.auto.conversation.activity.ConversationListActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12840664",
            "https://i.gkd.li/i/14060897",
            "https://i.gkd.li/i/14546563"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-选车页卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "@FrameLayout[clickable=true][id!=null] -2 [text=\"广告\"]",
          "activityIds": "com.ss.android.auto.activity.ConcernDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13686928",
          "key": 0
        },
        {
          "matches": "@FrameLayout[clickable=true][id!=null] -2 [text=\"广告\"]",
          "activityIds": ".activity.ConcernDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13686928",
          "key": 1
        },
        {
          "matches": "TextView[text.length=1][id=null][clickable=false] < @FrameLayout[clickable=true][id!=null] -2 [text=\"广告\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-车型页面右下角直播悬浮窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "FrameLayout[childCount=8] > TextView[text=\"\"]",
          "activityIds": "com.ss.android.auto.activity.ConcernDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14034740",
          "key": 0
        },
        {
          "matches": "FrameLayout[childCount=8] > TextView[text=\"\"]",
          "activityIds": ".activity.ConcernDetailActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14034740",
          "key": 1
        }
      ]
    },
    {
      "name": "评价提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[text=\"去评价\"]",
          "action": "back",
          "activityIds": ".activity.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/14810042",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-首页推荐卡片广告",
      "desc": "需二次点击关闭原因",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "TextView[text.length=1][id=null][clickable=false] < @FrameLayout[clickable=true][id!=null] - LinearLayout > [text=\"广告\"]",
          "key": 0,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/i/12660816"
        },
        {
          "matches": "@ViewGroup[clickable=true] TextView[text=\"不感兴趣\"]",
          "preKeys": 1,
          "name": "点击【不感兴趣】1",
          "snapshotUrls": "https://i.gkd.li/i/13538627",
          "key": 1
        },
        {
          "matches": "[text=\"不感兴趣\"][clickable=true]",
          "preKeys": 1,
          "name": "点击【不感兴趣】2",
          "snapshotUrls": "https://i.gkd.li/i/12711589",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-升级弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "@TextView[text=\"以后再说\"] - FrameLayout >2 TextView[text$=\"升级\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-右下角悬浮窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "FrameLayout > RelativeLayout[childCount=2] > RelativeLayout + ImageView[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-文章底部卡片式广告",
      "enable": false,
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "FrameLayout > RelativeLayout > @ImageView[clickable=true] + [text=\"广告\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-评论区-信息流广告",
      "desc": "像正常内容的广告",
      "enable": false,
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "FrameLayout > * > @ImageView[clickable=true] - LinearLayout > [text=\"广告\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-请求推送通知弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 14,
      "rules": [
        {
          "matches": "@TextView[clickable=true] + [text^=\"打开推送通知\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-选车页卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": "TextView[text.length=1][id=null][clickable=false] < @FrameLayout[clickable=true][id!=null] -2 [text=\"广告\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页推荐卡片广告",
      "desc": "需二次点击关闭原因",
      "enable": false,
      "fastQuery": true,
      "key": 16,
      "rules": [
        {
          "matches": "TextView[text.length=1][id=null][clickable=false] < @FrameLayout[clickable=true][id!=null] - LinearLayout > [text=\"广告\"]",
          "key": 0,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/import/12660816"
        },
        {
          "matches": "@ViewGroup[clickable=true] TextView[text=\"不感兴趣\"]",
          "preKeys": 1,
          "name": "点击【不感兴趣】1",
          "snapshotUrls": "https://i.gkd.li/import/13538627",
          "key": 1
        },
        {
          "matches": "[text=\"不感兴趣\"][clickable=true]",
          "preKeys": 1,
          "name": "点击【不感兴趣】2",
          "snapshotUrls": "https://i.gkd.li/import/12711589",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-文章底部卡片式广告",
      "enable": false,
      "fastQuery": true,
      "key": 17,
      "rules": [
        {
          "matches": "FrameLayout > RelativeLayout > @ImageView[clickable=true] + [text=\"广告\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-请求推送通知弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 18,
      "rules": [
        {
          "matches": "@TextView[clickable=true] + [text^=\"打开推送通知\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页推荐卡片广告",
      "desc": "需二次点击关闭原因",
      "enable": false,
      "quickFind": true,
      "key": 19,
      "rules": [
        {
          "matches": "TextView[text.length=1][id=null][clickable=false] < @FrameLayout[clickable=true][id!=null] - LinearLayout > [text=\"广告\"]",
          "key": 0,
          "name": "点击【x】",
          "snapshotUrls": "https://i.gkd.li/import/12660816"
        },
        {
          "matches": "@ViewGroup[clickable=true] TextView[text=\"不感兴趣\"]",
          "preKeys": 1,
          "name": "点击【不感兴趣】1",
          "snapshotUrls": "https://i.gkd.li/import/13538627",
          "key": 1
        },
        {
          "matches": "[text=\"不感兴趣\"][clickable=true]",
          "preKeys": 1,
          "name": "点击【不感兴趣】2",
          "snapshotUrls": "https://i.gkd.li/import/12711589",
          "key": 2
        }
      ]
    },
    {
      "name": "升级弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 20,
      "rules": [
        {
          "matches": "@TextView[text=\"以后再说\"] - FrameLayout >2 TextView[text$=\"升级\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "右下角悬浮窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "quickFind": true,
      "key": 21,
      "rules": [
        {
          "matches": "FrameLayout > RelativeLayout[childCount=2] > RelativeLayout + ImageView[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "文章底部卡片式广告",
      "enable": false,
      "quickFind": true,
      "key": 22,
      "rules": [
        {
          "matches": "FrameLayout > RelativeLayout > @ImageView[clickable=true] + [text=\"广告\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "评论区信息流广告",
      "desc": "像正常内容的广告",
      "enable": false,
      "quickFind": true,
      "key": 23,
      "rules": [
        {
          "matches": "FrameLayout > RelativeLayout > @ImageView[clickable=true] - LinearLayout > [text=\"广告\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求推送通知弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 24,
      "rules": [
        {
          "matches": "@TextView[clickable=true] + [text^=\"打开推送通知\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "选车页卡片广告",
      "enable": false,
      "quickFind": true,
      "key": 25,
      "rules": [
        {
          "matches": "TextView[text.length=1][id=null][clickable=false] < @FrameLayout[clickable=true][id!=null] -2 [text=\"广告\"]",
          "key": 0
        }
      ]
    }
  ]
});
