// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "今日头条",
  "id": "com.ss.android.article.news",
  "groups": [
    {
      "name": "更新提示",
      "desc": "关闭应用更新提示弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] -(2,3) [text*=\"版本更新\" || text*=\"升级版本\"]",
          "activityIds": [
            "com.bytedance.ies.outertest.cn.OuterTestGuideDialogActivity",
            "com.ss.android.article.base.feature.ugc.story.StoryVideoActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13316081",
            "https://i.gkd.li/i/17681710"
          ]
        },
        {
          "matches": "[text=\"以后再说\"][visibleToUser=true]",
          "activityIds": ".activity.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/18194356",
          "exampleUrls": "https://e.gkd.li/79b75132-9d6f-4e4c-a95b-56dbaca1965d"
        },
        {
          "matches": "[text=\"升级版本\"] +n [desc=\"关闭\"][clickable=true]",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-浮窗广告",
      "desc": "关闭各页页的浮窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout > FrameLayout[childCount=2] > @ImageView + ImageView[clickable=true][visibleToUser=true]",
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "key": 0,
          "name": "首页-浮窗广告",
          "snapshotUrls": "https://i.gkd.li/i/13762123"
        },
        {
          "matches": "FrameLayout > FrameLayout > FrameLayout[childCount=2] > ImageView + ImageView[clickable=true][visibleToUser=true]",
          "activityIds": "com.ss.android.ugc.detail.activity.TikTokActivity",
          "key": 1,
          "name": "视频页-浮窗广告",
          "snapshotUrls": "https://i.gkd.li/i/13761236"
        },
        {
          "matches": "FrameLayout > FrameLayout > FrameLayout[childCount=2] > @ImageView + ImageView[clickable=true][visibleToUser=true]",
          "activityIds": ".activity.MainActivity",
          "key": 2,
          "name": "首页-浮窗广告",
          "snapshotUrls": "https://i.gkd.li/i/13762123"
        },
        {
          "matches": "FrameLayout > FrameLayout > FrameLayout[childCount=2] > ImageView[id=\"com.ss.android.article.news:id/cnd\"]",
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "fastQuery": true,
          "key": 3,
          "name": "首页-浮窗广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13762123",
            "https://i.gkd.li/i/27056157"
          ]
        },
        {
          "matches": "FrameLayout > MeasureOnceRelativeLayout2 > [id=\"com.ss.android.article.news:id/m4g\"]",
          "position": {
            "left": "width * 0.104",
            "top": "height * 0.108"
          },
          "activityIds": "com.ss.android.ugc.detail.activity.TikTokActivity",
          "key": 4,
          "name": "视频页-浮窗广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13761236",
            "https://i.gkd.li/i/27056687"
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
      "key": 2,
      "rules": [
        {
          "matches": "[text^=\"开启通知\"] + LinearLayout > [text=\"暂不开启\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12706699"
        },
        {
          "matches": "[text^=\"开启通知\"] < LinearLayout +2 ImageView[desc=\"关闭\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12840217"
        }
      ]
    },
    {
      "name": "全屏广告-竖屏视频广告",
      "desc": "点击右上角[更多]图标按钮,点击不感兴趣",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "ImageView[clickable=true][desc=\"更多\"]",
          "key": 0,
          "name": "点击右上角[更多]图标按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12679280",
            "https://i.gkd.li/i/12733282",
            "https://i.gkd.li/i/12763251",
            "https://i.gkd.li/i/12763252",
            "https://i.gkd.li/i/12733281",
            "https://i.gkd.li/i/13185633",
            "https://i.gkd.li/i/13186082",
            "https://i.gkd.li/i/13930050"
          ]
        },
        {
          "matches": "@LinearLayout[clickable=true] > RelativeLayout + TextView[text=\"不感兴趣\"]",
          "actionCd": 35000,
          "preKeys": [
            3
          ],
          "key": 1,
          "name": "点击不感兴趣",
          "snapshotUrls": "https://i.gkd.li/i/12679277"
        },
        {
          "matches": "@LinearLayout[clickable=true] > RelativeLayout + TextView[text=\"不感兴趣\"]",
          "actionCd": 35000,
          "preKeys": [
            3,
            4,
            5,
            6
          ],
          "key": 2,
          "name": "点击不感兴趣",
          "snapshotUrls": "https://i.gkd.li/import/12679277"
        },
        {
          "matches": "@ImageView[clickable=true][desc=\"更多\"] <n RelativeLayout -2 RelativeLayout >4 LynxFlattenUI[text=\"头条优惠券无门槛全平台通用\"]",
          "key": 3,
          "name": "点击右上角[更多]图标按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12679280",
            "https://i.gkd.li/import/12733282",
            "https://i.gkd.li/import/12763251",
            "https://i.gkd.li/import/12763252"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][desc=\"更多\"] <4 RelativeLayout -2 RelativeLayout >4 LinearLayout[childCount=3] > ScrollView[childCount=1] > TextView[text$=\"广告\"][clickable=true]",
          "key": 4,
          "name": "点击右上角[更多]图标按钮-抖音直播",
          "snapshotUrls": [
            "https://i.gkd.li/import/12733281"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][desc=\"更多\"] <n RelativeLayout -2 RelativeLayout >n TextView[text$=\"广告\"]",
          "key": 5,
          "name": "第二种广告界面；点击右上角[更多]图标按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/13185633"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][desc=\"更多\"] <n RelativeLayout +2 LinearLayout > TextView[text$=\"广告\"]",
          "key": 6,
          "name": "第三种广告界面；点击右上角[更多]图标按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/13186082"
          ]
        }
      ]
    },
    {
      "name": "分段广告-信息流广告",
      "desc": "点击右上角x按钮,点击[不感兴趣]",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "UIView[text^=\"不感兴趣\"][visibleToUser=true]",
          "key": 0,
          "name": "点击右上角x按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12836272",
            "https://i.gkd.li/i/13093576",
            "https://i.gkd.li/i/16624480"
          ]
        },
        {
          "matches": "@[clickable=true] >(1,2) [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/i/12733152",
            "https://i.gkd.li/i/12755265",
            "https://i.gkd.li/i/16624474",
            "https://i.gkd.li/i/16624395",
            "https://i.gkd.li/i/17893117"
          ]
        }
      ]
    },
    {
      "name": "局部广告-底部话题推荐弹窗",
      "desc": "关闭底部话题推荐弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "FlattenUIText[text=\"参与讨论\"] + FlattenUIImage[clickable=true]",
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "name": "话题谈论",
          "snapshotUrls": "https://i.gkd.li/i/12706699",
          "key": 0
        },
        {
          "matches": "FlattenUIText[text=\"参与讨论\"] + FlattenUIImage[clickable=true]",
          "activityIds": ".activity.MainActivity",
          "name": "话题谈论",
          "snapshotUrls": "https://i.gkd.li/i/12706699",
          "key": 1
        },
        {
          "matches": "FlattenUIText[text=\"参与讨论\"] + FlattenUIImage[clickable=true]",
          "name": "话题谈论",
          "snapshotUrls": [
            "https://i.gkd.li/import/12706699"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-自动观看广告视频",
      "desc": "自动观看广告并等待30s后关闭",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.bytedance.novel.api:id/component_ad_dialog_button_video\"]",
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "key": 0,
          "name": "点击\"看视频\"",
          "snapshotUrls": "https://i.gkd.li/i/13402468"
        },
        {
          "matches": "UIText[text=\"广告\"] +n UIText[text=\"关闭\"]",
          "actionDelay": 30000,
          "preKeys": [
            2
          ],
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "name": "等待30s点击\"关闭\"",
          "snapshotUrls": "https://i.gkd.li/i/13402480",
          "key": 1
        },
        {
          "matches": "[id=\"com.bytedance.novel.api:id/component_ad_dialog_button_video\"]",
          "activityIds": ".activity.MainActivity",
          "key": 2,
          "name": "点击\"看视频\"",
          "snapshotUrls": "https://i.gkd.li/i/13402468"
        }
      ]
    },
    {
      "name": "局部广告-底部热榜弹窗",
      "desc": "点击X",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "FrameLayout[childCount=8] > FlattenUIImage[index=7]",
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13828331",
          "key": 0
        },
        {
          "matches": "@FlattenUIImage[clickable=true] <n FrameLayout <<2 FrameLayout - LinearLayout [text=\"首页\"]",
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13828331",
          "key": 1
        },
        {
          "matches": "FrameLayout[childCount=8] > FlattenUIImage[index=7]",
          "activityIds": ".activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13828331",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-[关联抖音账号]弹窗",
      "desc": "点击关闭",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 8,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] + [text^=\"关联\"]",
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14717889",
          "exampleUrls": "https://m.gkd.li/57941037/c938001e-f39b-4ece-ad0e-2c93ba41aa94",
          "key": 0
        },
        {
          "matches": "@[desc=\"关闭\"] + [text^=\"关联\"]",
          "activityIds": ".activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14717889",
          "exampleUrls": "https://m.gkd.li/57941037/c938001e-f39b-4ece-ad0e-2c93ba41aa94",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-[下次打开APP默认进入发现频道]弹窗",
      "desc": "点击取消",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 9,
      "rules": [
        {
          "matches": "[text^=\"下次打开APP默认进入\"]",
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15102876",
          "exampleUrls": "https://m.gkd.li/57941037/6166519d-d38d-49c0-b54b-72c25670aa24",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] > FrameLayout[childCount=3] > ImageView[clickable=true][visibleToUser=true][index=2]",
          "actionMaximum": 1,
          "activityIds": ".activity.MainActivity",
          "matchTime": 10000,
          "resetMatch": "app",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15314921",
          "exampleUrls": "https://e.gkd.li/c3889d29-7260-4ab1-8070-75a6a68e4e2c"
        },
        {
          "matches": "@FlattenUIImage[text=\"\"] -10 FlattenUIText[text=\"恭喜获得惊喜奖励\"]",
          "actionMaximum": 1,
          "activityIds": ".activity.MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17681713",
          "exampleUrls": "https://e.gkd.li/057d40f6-f94e-4b54-857f-b5b11de245a5"
        }
      ]
    },
    {
      "name": "分段广告-竖屏视频广告",
      "desc": "检测到广告时,点击右上角[更多]图标按钮,出现菜单,点击不感兴趣",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "@LinearLayout[clickable=true] > RelativeLayout + TextView[text=\"不感兴趣\"]",
          "actionCd": 35000,
          "preKeys": [
            1,
            2,
            3,
            4
          ],
          "key": 0,
          "name": "点击不感兴趣",
          "snapshotUrls": "https://i.gkd.li/i/12679277"
        },
        {
          "matches": "@ImageView[clickable=true][desc=\"更多\"] <n RelativeLayout -2 RelativeLayout >4 LynxFlattenUI[text=\"头条优惠券无门槛全平台通用\"]",
          "key": 1,
          "name": "点击右上角[更多]图标按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12679280",
            "https://i.gkd.li/i/12733282",
            "https://i.gkd.li/i/12763251",
            "https://i.gkd.li/i/12763252"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][desc=\"更多\"] <4 RelativeLayout -2 RelativeLayout >4 LinearLayout[childCount=3] > ScrollView[childCount=1] > TextView[text$=\"广告\"][clickable=true]",
          "key": 2,
          "name": "点击右上角[更多]图标按钮-抖音直播",
          "snapshotUrls": [
            "https://i.gkd.li/i/12733281"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][desc=\"更多\"] <n RelativeLayout -2 RelativeLayout >n TextView[text$=\"广告\"]",
          "key": 3,
          "name": "第二种广告界面；点击右上角[更多]图标按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/13185633"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][desc=\"更多\"] <n RelativeLayout +2 LinearLayout > TextView[text$=\"广告\"]",
          "key": 4,
          "name": "第三种广告界面；点击右上角[更多]图标按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/13186082"
          ]
        }
      ]
    },
    {
      "name": "未分类-信息流广告",
      "desc": "点击右上角x按钮,点击不感兴趣",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "UIView[text^=\"不感兴趣\"][visibleToUser=true]",
          "action": "clickCenter",
          "activityIds": [
            "com.ss.android.article.news.activity.MainActivity",
            "com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity"
          ],
          "key": 0,
          "name": "点击右上角x按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12733098",
            "https://i.gkd.li/i/12755264",
            "https://i.gkd.li/i/12836272",
            "https://i.gkd.li/i/12840162",
            "https://i.gkd.li/i/13093576",
            "https://i.gkd.li/i/12733098"
          ],
          "exampleUrls": [
            "https://user-images.githubusercontent.com/44717382/273436460-cf007525-81ce-418b-ac05-3bfd75a627fe.gif"
          ]
        },
        {
          "matches": "@ViewGroup[clickable=true] > ImageView + TextView[text=\"不感兴趣\"]",
          "action": "clickCenter",
          "preKeys": 0,
          "activityIds": [
            "com.ss.android.article.news.activity.MainActivity",
            "com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity"
          ],
          "key": 1,
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/i/12733152",
            "https://i.gkd.li/i/12755265"
          ]
        }
      ]
    },
    {
      "name": "未分类-底部话题推荐弹窗",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "FlattenUIText[text=\"参与讨论\"] + FlattenUIImage[clickable=true]",
          "name": "话题谈论",
          "snapshotUrls": [
            "https://i.gkd.li/i/12706699"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-自动观看广告视频",
      "desc": "自动观看广告并等待30s后关闭",
      "enable": false,
      "fastQuery": true,
      "key": 14,
      "rules": [
        {
          "matches": "[id=\"com.bytedance.novel.api:id/component_ad_dialog_button_video\"]",
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "key": 0,
          "name": "点击【看视频】",
          "snapshotUrls": "https://i.gkd.li/i/13402468"
        },
        {
          "matches": "UIText[text=\"广告\"] +n UIText[text=\"关闭\"]",
          "actionDelay": 30000,
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "name": "等待30s点击【关闭】",
          "snapshotUrls": "https://i.gkd.li/i/13402480",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-评论区广告",
      "desc": "点击X",
      "enable": false,
      "key": 15,
      "rules": [
        {
          "matches": "[text=\"点击查看\"] < LinearLayout +n FrameLayout > [desc=\"举报\"]",
          "activityIds": "com.bytedance.ugc.UgcDetailInfoActivity",
          "name": "评论广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13915287",
            "https://i.gkd.li/i/13817019"
          ],
          "key": 0
        },
        {
          "matches": "TextView[text.length>0] < LinearLayout - ImageView +n ImageView",
          "activityIds": "com.bytedance.ugc.UgcDetailInfoActivity",
          "name": "活动横幅广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13825373"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-[下次打开APP默认进入xx频道]弹窗",
      "desc": "点击[取消]",
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 16,
      "rules": [
        {
          "matches": [
            "[text^=\"下次打开APP默认进入\"]",
            "[text=\"取消\"][clickable=true]"
          ],
          "activityIds": ".activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15102876",
          "exampleUrls": "https://m.gkd.li/57941037/6166519d-d38d-49c0-b54b-72c25670aa24",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "desc": "关闭各种广告弹窗，包括关联抖音账号、默认进入发现频道、全屏广告弹窗等",
      "enable": false,
      "key": 17,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] + [text^=\"关联\"]",
          "actionMaximum": 1,
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "fastQuery": true,
          "resetMatch": "app",
          "key": 0,
          "name": "关联抖音账号弹窗",
          "snapshotUrls": "https://i.gkd.li/i/14717889"
        },
        {
          "matches": "[text^=\"下次打开APP默认进入\"]",
          "action": "back",
          "actionMaximum": 1,
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "fastQuery": true,
          "resetMatch": "app",
          "key": 1,
          "name": "默认进入发现频道弹窗",
          "snapshotUrls": "https://i.gkd.li/i/15102876"
        },
        {
          "matches": "[id=\"android:id/content\"] > FrameLayout[childCount=3] > ImageView[clickable=true][visibleToUser=true][index=2]",
          "actionMaximum": 1,
          "activityIds": ".activity.MainActivity",
          "matchTime": 10000,
          "resetMatch": "app",
          "key": 2,
          "name": "全屏广告弹窗-类型1",
          "snapshotUrls": "https://i.gkd.li/i/15314921"
        },
        {
          "matches": "@FlattenUIImage[text=\"\"] -10 FlattenUIText[text=\"恭喜获得惊喜奖励\"]",
          "actionMaximum": 1,
          "activityIds": ".activity.MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 3,
          "name": "全屏广告弹窗-类型2",
          "snapshotUrls": "https://i.gkd.li/i/17681713"
        }
      ]
    },
    {
      "name": "全屏广告-请求通知权限弹窗",
      "enable": false,
      "key": 18,
      "rules": [
        {
          "matches": "[text^=\"开启通知\"] + LinearLayout > [text=\"暂不开启\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12706699"
          ],
          "key": 0
        },
        {
          "matches": "[text^=\"开启通知\"] < LinearLayout +2 ImageView[desc=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12840217"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "desc": "点击右上角x按钮,点击不感兴趣",
      "enable": false,
      "key": 19,
      "rules": [
        {
          "matches": "UIView[text^=\"不感兴趣\"][visibleToUser=true]",
          "action": "clickCenter",
          "activityIds": [
            "com.ss.android.article.news.activity.MainActivity",
            "com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity"
          ],
          "key": 0,
          "name": "点击右上角x按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12733098",
            "https://i.gkd.li/import/12755264",
            "https://i.gkd.li/import/12836272",
            "https://i.gkd.li/import/12840162",
            "https://i.gkd.li/import/13093576",
            "https://i.gkd.li/import/12733098"
          ],
          "exampleUrls": [
            "https://user-images.githubusercontent.com/44717382/273436460-cf007525-81ce-418b-ac05-3bfd75a627fe.gif"
          ]
        },
        {
          "matches": "@ViewGroup[clickable=true] > ImageView + TextView[text=\"不感兴趣\"]",
          "action": "clickCenter",
          "preKeys": 0,
          "activityIds": [
            "com.ss.android.article.news.activity.MainActivity",
            "com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity"
          ],
          "key": 1,
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/12733152",
            "https://i.gkd.li/import/12755265"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-自动观看广告视频",
      "desc": "自动观看广告并等待30s后关闭",
      "enable": false,
      "fastQuery": true,
      "key": 20,
      "rules": [
        {
          "matches": "[id=\"com.bytedance.novel.api:id/component_ad_dialog_button_video\"]",
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "key": 0,
          "name": "点击【看视频】",
          "snapshotUrls": "https://i.gkd.li/import/13402468"
        },
        {
          "matches": "UIText[text=\"广告\"] +n UIText[text=\"关闭\"]",
          "actionDelay": 30000,
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "name": "等待30s点击【关闭】",
          "snapshotUrls": "https://i.gkd.li/import/13402480",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-局部广告-底部热榜弹窗",
      "desc": "点击X",
      "enable": false,
      "fastQuery": true,
      "key": 21,
      "rules": [
        {
          "matches": "@FlattenUIImage[clickable=true] <n FrameLayout <<2 FrameLayout - LinearLayout [text=\"首页\"]",
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13828331",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 22,
      "rules": [
        {
          "matches": "[text=\"升级版本\"] +n [desc=\"关闭\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "浮窗广告",
      "enable": false,
      "key": 23,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout > FrameLayout[childCount=2] > @ImageView + ImageView[clickable=true][visibleToUser=true]",
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "key": 0,
          "name": "首页-浮窗广告",
          "snapshotUrls": "https://i.gkd.li/import/13762123"
        },
        {
          "matches": "FrameLayout > FrameLayout > FrameLayout[childCount=2] > ImageView + ImageView[clickable=true][visibleToUser=true]",
          "activityIds": "com.ss.android.ugc.detail.activity.TikTokActivity",
          "key": 1,
          "name": "视频页-浮窗广告",
          "snapshotUrls": "https://i.gkd.li/import/13761236"
        }
      ]
    },
    {
      "name": "请求通知权限弹窗",
      "enable": false,
      "key": 24,
      "rules": [
        {
          "matches": "[text^=\"开启通知\"] + LinearLayout > [text=\"暂不开启\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12706699"
          ],
          "key": 0
        },
        {
          "matches": "[text^=\"开启通知\"] < LinearLayout +2 ImageView[desc=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12840217"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "竖屏视频广告",
      "desc": "检测到广告时,点击右上角[更多]图标按钮,出现菜单,点击不感兴趣",
      "enable": false,
      "key": 25,
      "rules": [
        {
          "matches": "@LinearLayout[clickable=true] > RelativeLayout + TextView[text=\"不感兴趣\"]",
          "actionCd": 35000,
          "preKeys": [
            1,
            2,
            3,
            4
          ],
          "key": 0,
          "name": "点击不感兴趣",
          "snapshotUrls": "https://i.gkd.li/import/12679277"
        },
        {
          "matches": "@ImageView[clickable=true][desc=\"更多\"] <n RelativeLayout -2 RelativeLayout >4 LynxFlattenUI[text=\"头条优惠券无门槛全平台通用\"]",
          "key": 1,
          "name": "点击右上角[更多]图标按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12679280",
            "https://i.gkd.li/import/12733282",
            "https://i.gkd.li/import/12763251",
            "https://i.gkd.li/import/12763252"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][desc=\"更多\"] <4 RelativeLayout -2 RelativeLayout >4 LinearLayout[childCount=3] > ScrollView[childCount=1] > TextView[text$=\"广告\"][clickable=true]",
          "key": 2,
          "name": "点击右上角[更多]图标按钮-抖音直播",
          "snapshotUrls": [
            "https://i.gkd.li/import/12733281"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][desc=\"更多\"] <n RelativeLayout -2 RelativeLayout >n TextView[text$=\"广告\"]",
          "key": 3,
          "name": "第二种广告界面；点击右上角[更多]图标按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/13185633"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][desc=\"更多\"] <n RelativeLayout +2 LinearLayout > TextView[text$=\"广告\"]",
          "key": 4,
          "name": "第三种广告界面；点击右上角[更多]图标按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/13186082"
          ]
        }
      ]
    },
    {
      "name": "信息流广告",
      "desc": "点击右上角x按钮,点击不感兴趣",
      "enable": false,
      "key": 26,
      "rules": [
        {
          "matches": "UIView[text^=\"不感兴趣\"][visibleToUser=true]",
          "action": "clickCenter",
          "activityIds": [
            "com.ss.android.article.news.activity.MainActivity",
            "com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity"
          ],
          "key": 0,
          "name": "点击右上角x按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12733098",
            "https://i.gkd.li/import/12755264",
            "https://i.gkd.li/import/12836272",
            "https://i.gkd.li/import/12840162",
            "https://i.gkd.li/import/13093576",
            "https://i.gkd.li/import/12733098"
          ],
          "exampleUrls": [
            "https://user-images.githubusercontent.com/44717382/273436460-cf007525-81ce-418b-ac05-3bfd75a627fe.gif"
          ]
        },
        {
          "matches": "@ViewGroup[clickable=true] > ImageView + TextView[text=\"不感兴趣\"]",
          "action": "clickCenter",
          "preKeys": 0,
          "activityIds": [
            "com.ss.android.article.news.activity.MainActivity",
            "com.bytedance.ugc.innerfeed.impl.PostInnerFeedActivity"
          ],
          "key": 1,
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/12733152",
            "https://i.gkd.li/import/12755265"
          ]
        }
      ]
    },
    {
      "name": "底部话题推荐弹窗",
      "enable": false,
      "key": 27,
      "rules": [
        {
          "matches": "FlattenUIText[text=\"参与讨论\"] + FlattenUIImage[clickable=true]",
          "name": "话题谈论",
          "snapshotUrls": [
            "https://i.gkd.li/import/12706699"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "自动观看广告视频",
      "desc": "自动观看广告并等待30s后关闭",
      "enable": false,
      "quickFind": true,
      "key": 28,
      "rules": [
        {
          "matches": "[id=\"com.bytedance.novel.api:id/component_ad_dialog_button_video\"]",
          "activityIds": "com.ss.android.article.news.activity.MainActivity",
          "key": 0,
          "name": "点击【看视频】",
          "snapshotUrls": "https://i.gkd.li/import/13402468"
        },
        {
          "matches": "UIText[text=\"广告\"] +n UIText[text=\"关闭\"]",
          "actionDelay": 30000,
          "activityIds": "com.ss.android.excitingvideo.ExcitingVideoActivity",
          "name": "等待30s点击【关闭】",
          "snapshotUrls": "https://i.gkd.li/import/13402480",
          "key": 1
        }
      ]
    }
  ]
});
