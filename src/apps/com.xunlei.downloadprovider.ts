// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "迅雷",
  "id": "com.xunlei.downloadprovider",
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
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "excludeActivityIds": ".search.ui.search.SearchOperateActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/15048443",
            "https://i.gkd.li/i/15048416"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/16388942"
        },
        {
          "matches": "[vid=\"native_container\"]",
          "excludeMatches": "[text*=\"跳过\"]",
          "position": {
            "left": "width * 0.9055",
            "top": "width * 0.1611"
          },
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15048354",
          "excludeSnapshotUrls": "https://i.gkd.li/i/15048376"
        },
        {
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/24539634"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/15048443",
            "https://i.gkd.li/i/15048416"
          ]
        }
      ]
    },
    {
      "name": "分段广告",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"hermes_ad_banner_negative\" || vid=\"close_iv\"  || vid=\"btn_ad_feedback\"][visibleToUser=true]",
          "activityIds": [
            ".frame.MainTabActivity",
            ".download.taskdetails.newui.DownloadDetailsActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/23762793",
            "https://i.gkd.li/i/23845066"
          ],
          "exampleUrls": "https://e.gkd.li/95d56e24-3223-4112-9222-de6d489aa79b"
        },
        {
          "matches": "[text=\"不感兴趣\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "activityIds": [
            ".frame.MainTabActivity",
            ".download.taskdetails.newui.DownloadDetailsActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/23762972",
            "https://i.gkd.li/i/23845065"
          ],
          "exampleUrls": "https://e.gkd.li/490bd679-86a5-432e-b0de-427da5513484",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"close_btn\"][visibleToUser=true]",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16388890",
          "exampleUrls": "https://e.gkd.li/71c2dc44-a976-4910-8e44-26e39865406e"
        },
        {
          "matches": "@Image[childCount=0][text=\"\"][width<60 && height<60] < View[childCount=1] + View +n View > View[childCount=1] > TextView[text$=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12868667",
            "https://i.gkd.li/i/12881946",
            "https://i.gkd.li/i/13295179"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.xunlei.downloadprovider.launch.LaunchActivity"
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12882132",
            "https://i.gkd.li/i/12901374",
            "https://i.gkd.li/i/12882237"
          ]
        },
        {
          "matches": "[text$=\"专属惊喜价\"] + View > @[desc^=\"javascript\"][clickable=true][childCount=0][width<120&&height<120][visibleToUser=true] <<n [vid=\"refreshLayout\"]",
          "activityIds": "com.xunlei.web.XLWebViewActivity$XLWebViewActivityImpl",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/16914136",
            "https://i.gkd.li/i/23833175",
            "https://i.gkd.li/i/23845039"
          ],
          "exampleUrls": "https://e.gkd.li/ade9ca8a-b7a5-4a22-8c1f-d14423a34136"
        },
        {
          "matches": [
            "[text=\"开通超级会员\"]",
            "[vid=\"close_btn\"]"
          ],
          "activityIds": ".download.center.DownloadCenterActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/17658831",
          "exampleUrls": "https://e.gkd.li/6448cedc-2bad-4aa5-846c-9ad82c310545"
        },
        {
          "matches": "@ImageView[childCount=0] < ViewGroup[childCount=1] < ViewGroup[childCount=1] < ViewGroup[childCount=1] < ViewGroup[childCount=1] +2 ViewGroup >3 [text=\"广告\"][visibleToUser=true]",
          "activityIds": [
            "com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/23762955",
            "https://i.gkd.li/i/24541418"
          ]
        },
        {
          "matches": "[vid=\"close_btn\" || id=\"com.noah.dycsdk.dynamic_sdk:id/noah_interstitial_close_button\" || text=\"关闭\"][visibleToUser=true]",
          "activityIds": ".frame.MainTabActivity",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/16388890",
            "https://i.gkd.li/i/25843616",
            "https://i.gkd.li/i/25902800"
          ],
          "exampleUrls": "https://e.gkd.li/71c2dc44-a976-4910-8e44-26e39865406e"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            ".frame.MainTabActivity",
            ".launch.LaunchActivity"
          ],
          "fastQuery": true,
          "key": 7,
          "snapshotUrls": [
            "https://i.gkd.li/i/12882132",
            "https://i.gkd.li/i/12901374",
            "https://i.gkd.li/i/12882237"
          ]
        },
        {
          "matches": "@[text*=\"跳过\"] <n * - [text=\"反馈\"]",
          "activityIds": "com.byazt.fl.Stub_Standard_Portrait_Activity",
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/25843756"
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
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/x_upgrade_cancel\"]",
          "activityIds": "com.xunlei.upgrade.XUpgradeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13228920",
          "key": 0
        },
        {
          "matches": "[vid=\"x_upgrade_cancel\"]",
          "activityIds": "com.xunlei.upgrade.XUpgradeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13228920",
          "key": 1
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/x_upgrade_cancel\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"立即领取\" || text=\"点击领取\" || text^=\"此云盘为您的私人云盘\"] + [vid=\"close\"]",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12882939",
            "https://i.gkd.li/i/15048352",
            "https://i.gkd.li/i/15048355",
            "https://i.gkd.li/i/15048357"
          ]
        },
        {
          "matches": "[vid=\"search_banner_ad_close\"][visibleToUser=true]",
          "activityIds": ".search.ui.search.SearchOperateActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17725350",
          "exampleUrls": "https://e.gkd.li/d9e25fc3-249f-4fb9-8606-606ed0c9c893"
        },
        {
          "matches": "[vid=\"home_flow_item_close_iv\" || vid=\"ad_close\"][visibleToUser=true]",
          "activityIds": ".frame.MainTabActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/23762842",
            "https://i.gkd.li/i/23762864"
          ]
        },
        {
          "matches": "[vid=\"btn_ad_feedback\"]",
          "activityIds": ".xpan.pan.activity.XPanFileBrowserActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/23795248"
        },
        {
          "matches": "[((text$=\"领取\" || text^=\"立即\") && text.length<5) || text^=\"此云盘为您的私人云盘\"] <n * > [vid=\"close\"]",
          "key": 4
        },
        {
          "matches": "[text=\"立即领取\" || text=\"点击领取\" || text^=\"此云盘为您的私人云盘\"] + [vid=\"close\"]",
          "activityIds": ".frame.MainTabActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/12882939",
            "https://i.gkd.li/i/15048352",
            "https://i.gkd.li/i/15048355",
            "https://i.gkd.li/i/15048357"
          ]
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": [
            "[text=\"是否打开系统通知\"]",
            "[vid=\"btn_close\"]"
          ],
          "activityIds": "com.xunlei.uikit.activity.TransformActivity",
          "snapshotUrls": "https://i.gkd.li/i/15322046",
          "exampleUrls": "https://m.gkd.li/57941037/bf1ee4f5-126c-46c7-bac1-5e41ec4546e3",
          "key": 0
        }
      ]
    },
    {
      "name": "综合广告-视频详情页广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/hermes_ad_banner_negative\"]",
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "fastQuery": true,
          "key": 0,
          "name": "点击右上角x按钮-1",
          "snapshotUrls": "https://i.gkd.li/i/12707701"
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/feedback_not_interested_layout\"]",
          "preKeys": [
            0
          ],
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
            "com.xunlei.downloadprovider.feedback.view"
          ],
          "fastQuery": true,
          "key": 1,
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/i/13625418",
            "https://i.gkd.li/i/12707717",
            "https://i.gkd.li/i/12707702"
          ]
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/ad_ima_skip\"]",
          "activityIds": "com.xunlei.downloadprovider.feedback.view",
          "fastQuery": true,
          "key": 2,
          "name": "点击关闭按钮",
          "snapshotUrls": "https://i.gkd.li/i/12882988"
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/play_detail_ad_title\"] + [id=\"com.xunlei.downloadprovider:id/close_iv\"]",
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "fastQuery": true,
          "key": 3,
          "name": "点击右上角x按钮-2",
          "snapshotUrls": "https://i.gkd.li/i/13228423"
        }
      ]
    },
    {
      "name": "分段广告-视频详情-直播推荐",
      "desc": "自动点击【减少推荐】",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/title_tv\"] + [id=\"com.xunlei.downloadprovider:id/more\"]",
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12707701"
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/close_ad\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12707710",
            "https://i.gkd.li/i/14031920"
          ]
        }
      ]
    },
    {
      "name": "未分类-应用内广告弹窗",
      "desc": "⚠ 此规则容易误触，因此默认关闭。",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "@[text=\"关闭\"] +n * >n [text*=\"广告\"]",
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.xunlei.downloadprovider.launch.LaunchActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12868648",
            "https://i.gkd.li/i/12879372",
            "https://i.gkd.li/i/12882366",
            "https://i.gkd.li/i/12892871",
            "https://i.gkd.li/i/13799878"
          ]
        },
        {
          "matches": "Image[text=\"\"] < @View + View +n View > View > TextView[text$=\"广告\"][text.length<=10]",
          "actionDelay": 1000,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12868667",
            "https://i.gkd.li/i/12881946",
            "https://i.gkd.li/i/13295179"
          ]
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.xunlei.downloadprovider.launch.LaunchActivity"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12882132",
            "https://i.gkd.li/i/12901374"
          ]
        },
        {
          "matches": "ImageView < FrameLayout - FrameLayout > FrameLayout > ImageView",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12882166"
        },
        {
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/12882237"
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/hermes_ad_banner_negative\"]",
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/13597068"
        },
        {
          "matches": "ImageView < @ViewGroup[visibleToUser=true] < ViewGroup +n ViewGroup > [text=\"广告\"]",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/12882199",
            "https://i.gkd.li/i/12881911",
            "https://i.gkd.li/i/12892912",
            "https://i.gkd.li/i/12881976"
          ]
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup -2 ViewGroup >n [text=\"跳过\"] + ImageView",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/12881976"
        },
        {
          "matches": [
            "ViewGroup[childCount=2] > ImageView + TextView[text=\"广告\"]",
            "ViewGroup[childCount=1] > @ViewGroup[childCount=1][clickable=true] > ImageView[childCount=0]"
          ],
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/13761275"
        },
        {
          "matches": "TextView[text=\"广告\"] <n ViewGroup -2 ViewGroup > @ViewGroup",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 9,
          "snapshotUrls": "https://i.gkd.li/i/12879452"
        }
      ]
    },
    {
      "name": "未分类-【下载页】广告卡片",
      "desc": "需选二次弹窗关闭原因",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/ad_more\"]",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 0,
          "name": "点击更多【···】",
          "snapshotUrls": "https://i.gkd.li/i/12881865"
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/btn_ad_feedback\"]",
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "key": 1,
          "name": "点击【x】",
          "snapshotUrls": [
            "https://i.gkd.li/i/12892893",
            "https://i.gkd.li/i/12901395"
          ]
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/close_ad\"]",
          "preKeys": [
            0,
            1
          ],
          "activityIds": [
            "com.xunlei.downloadprovider.download.center.newcenter",
            "com.xunlei.downloadprovider.frame.MainTabActivity"
          ],
          "key": 2,
          "name": "关闭原因选【减少推荐】",
          "snapshotUrls": [
            "https://i.gkd.li/i/128818775",
            "https://i.gkd.li/i/13198070",
            "https://i.gkd.li/i/13484249"
          ]
        }
      ]
    },
    {
      "name": "未分类-搜索页面-顶部banner广告",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/search_banner_ad_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-会员续费广告",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "@[id=\"com.xunlei.downloadprovider:id/close_btn\"] - LinearLayout [text=\"您的会员已过期\"]",
          "activityIds": [
            "com.xunlei.downloadprovider.homepage.member",
            "com.xunlei.downloadprovider.frame.MainTabActivity"
          ],
          "key": 0,
          "name": "我的",
          "snapshotUrls": [
            "https://i.gkd.li/i/12707698",
            "https://i.gkd.li/i/13448909"
          ]
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/all_picture_image\"] + [id=\"com.xunlei.downloadprovider:id/close_btn\"]",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 1,
          "name": "下载页",
          "snapshotUrls": "https://i.gkd.li/i/12882928"
        },
        {
          "matches": "[text=\"您的会员已过期\"] < LinearLayout +n [id=\"com.xunlei.downloadprovider:id/touch_bottom_bar_bubble_close_iv\"]",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 2,
          "name": "首页",
          "snapshotUrls": "https://i.gkd.li/i/13259268"
        },
        {
          "matches": "[text=\"立即开通\"] + [id=\"com.xunlei.downloadprovider:id/close\"]",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 3,
          "name": "【下载页】2",
          "snapshotUrls": "https://i.gkd.li/import/12882939"
        }
      ]
    },
    {
      "name": "局部广告-视频详情页广告",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/hermes_ad_banner_negative\"]",
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "fastQuery": true,
          "key": 0,
          "name": "点击右上角x按钮",
          "snapshotUrls": "https://i.gkd.li/import/12707701"
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/feedback_not_interested_layout\"]",
          "preKeys": [
            0
          ],
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
            "com.xunlei.downloadprovider.feedback.view"
          ],
          "fastQuery": true,
          "key": 1,
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/13625418",
            "https://i.gkd.li/import/12707717",
            "https://i.gkd.li/import/12707702"
          ]
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/ad_ima_skip\"]",
          "activityIds": "com.xunlei.downloadprovider.feedback.view",
          "fastQuery": true,
          "key": 2,
          "name": "点击关闭按钮",
          "snapshotUrls": "https://i.gkd.li/import/12882988"
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/play_detail_ad_title\"] + [id=\"com.xunlei.downloadprovider:id/close_iv\"]",
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "fastQuery": true,
          "key": 3,
          "name": "点击右上角x按钮2",
          "snapshotUrls": "https://i.gkd.li/import/13228423"
        }
      ]
    },
    {
      "name": "局部广告-视频详情-直播推荐",
      "desc": "自动点击【减少推荐】",
      "enable": false,
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/title_tv\"] + [id=\"com.xunlei.downloadprovider:id/more\"]",
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12707701"
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/close_ad\"]",
          "preKeys": [
            0
          ],
          "activityIds": "com.xunlei.downloadprovider.download.center.newcenter",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12707710"
        }
      ]
    },
    {
      "name": "全屏广告-应用内广告弹窗",
      "desc": "⚠ 此规则容易误触，因此默认关闭。",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "@[text=\"关闭\"] +n * >n [text*=\"广告\"]",
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.xunlei.downloadprovider.launch.LaunchActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12868648",
            "https://i.gkd.li/import/12879372",
            "https://i.gkd.li/import/12882366",
            "https://i.gkd.li/import/12892871",
            "https://i.gkd.li/import/13799878"
          ]
        },
        {
          "matches": "Image[text=\"\"] < @View + View +n View > View > TextView[text$=\"广告\"][text.length<=10]",
          "actionDelay": 1000,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12868667",
            "https://i.gkd.li/import/12881946",
            "https://i.gkd.li/import/13295179"
          ]
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.xunlei.downloadprovider.launch.LaunchActivity"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/12882132",
            "https://i.gkd.li/import/12901374"
          ]
        },
        {
          "matches": "ImageView < FrameLayout - FrameLayout > FrameLayout > ImageView",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/12882166"
        },
        {
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/import/12882237"
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/hermes_ad_banner_negative\"]",
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/import/13597068"
        },
        {
          "matches": "ImageView < @ViewGroup[visibleToUser=true] < ViewGroup +n ViewGroup > [text=\"广告\"]",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/import/12882199",
            "https://i.gkd.li/import/12881911",
            "https://i.gkd.li/import/12892912",
            "https://i.gkd.li/import/12881976"
          ]
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup -2 ViewGroup >n [text=\"跳过\"] + ImageView",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/import/12881976"
        },
        {
          "matches": [
            "ViewGroup[childCount=2] > ImageView + TextView[text=\"广告\"]",
            "ViewGroup[childCount=1] > @ViewGroup[childCount=1][clickable=true] > ImageView[childCount=0]"
          ],
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/import/13761275"
        },
        {
          "matches": "TextView[text=\"广告\"] <n ViewGroup -2 ViewGroup > @ViewGroup",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 9,
          "snapshotUrls": "https://i.gkd.li/import/12879452"
        }
      ]
    },
    {
      "name": "局部广告-【下载页】广告卡片",
      "desc": "需选二次弹窗关闭原因",
      "enable": false,
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/ad_more\"]",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 0,
          "name": "点击更多【···】",
          "snapshotUrls": "https://i.gkd.li/import/12881865"
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/btn_ad_feedback\"]",
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "key": 1,
          "name": "点击【x】",
          "snapshotUrls": [
            "https://i.gkd.li/import/12892893",
            "https://i.gkd.li/import/12901395"
          ]
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/close_ad\"]",
          "preKeys": [
            0,
            1
          ],
          "activityIds": [
            "com.xunlei.downloadprovider.download.center.newcenter",
            "com.xunlei.downloadprovider.frame.MainTabActivity"
          ],
          "key": 2,
          "name": "关闭原因选【减少推荐】",
          "snapshotUrls": [
            "https://i.gkd.li/import/128818775",
            "https://i.gkd.li/import/13198070",
            "https://i.gkd.li/import/13484249"
          ]
        }
      ]
    },
    {
      "name": "局部广告-搜索页面-顶部banner广告",
      "enable": false,
      "fastQuery": true,
      "key": 16,
      "rules": [
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/search_banner_ad_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "视频详情页广告",
      "enable": false,
      "key": 17,
      "rules": [
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/hermes_ad_banner_negative\"]",
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "quickFind": true,
          "key": 0,
          "name": "点击右上角x按钮",
          "snapshotUrls": "https://i.gkd.li/import/12707701"
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/feedback_not_interested_layout\"]",
          "preKeys": [
            0
          ],
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
            "com.xunlei.downloadprovider.feedback.view"
          ],
          "quickFind": true,
          "key": 1,
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/13625418",
            "https://i.gkd.li/import/12707717",
            "https://i.gkd.li/import/12707702"
          ]
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/ad_ima_skip\"]",
          "activityIds": "com.xunlei.downloadprovider.feedback.view",
          "quickFind": true,
          "key": 2,
          "name": "点击关闭按钮",
          "snapshotUrls": "https://i.gkd.li/import/12882988"
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/play_detail_ad_title\"] + [id=\"com.xunlei.downloadprovider:id/close_iv\"]",
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "quickFind": true,
          "key": 3,
          "name": "点击右上角x按钮",
          "snapshotUrls": "https://i.gkd.li/import/13228423"
        }
      ]
    },
    {
      "name": "视频详情-直播推荐",
      "desc": "自动点击【减少推荐】",
      "enable": false,
      "quickFind": true,
      "key": 18,
      "rules": [
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/title_tv\"] + [id=\"com.xunlei.downloadprovider:id/more\"]",
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12707701"
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/close_ad\"]",
          "preKeys": [
            0
          ],
          "activityIds": "com.xunlei.downloadprovider.download.center.newcenter",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12707710"
        }
      ]
    },
    {
      "name": "应用内广告弹窗",
      "desc": "⚠ 此规则容易误触，因此默认关闭。",
      "enable": false,
      "key": 19,
      "rules": [
        {
          "matches": "@[text=\"关闭\"] +n * >n [text*=\"广告\"]",
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.xunlei.downloadprovider.launch.LaunchActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12868648",
            "https://i.gkd.li/import/12879372",
            "https://i.gkd.li/import/12882366",
            "https://i.gkd.li/import/12892871",
            "https://i.gkd.li/import/13799878"
          ]
        },
        {
          "matches": "Image[text=\"\"] < @View + View +n View > View > TextView[text$=\"广告\"][text.length<=10]",
          "actionDelay": 1000,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12868667",
            "https://i.gkd.li/import/12881946",
            "https://i.gkd.li/import/13295179"
          ]
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.xunlei.downloadprovider.launch.LaunchActivity"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/12882132",
            "https://i.gkd.li/import/12901374"
          ]
        },
        {
          "matches": "ImageView < FrameLayout - FrameLayout > FrameLayout > ImageView",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/12882166"
        },
        {
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/import/12882237"
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/hermes_ad_banner_negative\"]",
          "activityIds": "com.xunlei.downloadprovider.download.taskdetails.newui.DownloadDetailsActivity",
          "quickFind": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/import/13597068"
        },
        {
          "matches": "ImageView < @ViewGroup[visibleToUser=true] < ViewGroup +n ViewGroup > [text=\"广告\"]",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/import/12882199",
            "https://i.gkd.li/import/12881911",
            "https://i.gkd.li/import/12892912",
            "https://i.gkd.li/import/12881976"
          ]
        },
        {
          "matches": "[text=\"广告\"] <2 ViewGroup -2 ViewGroup >n [text=\"跳过\"] + ImageView",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/import/12881976"
        },
        {
          "matches": [
            "ViewGroup[childCount=2] > ImageView + TextView[text=\"广告\"]",
            "ViewGroup[childCount=1] > @ViewGroup[childCount=1][clickable=true] > ImageView[childCount=0]"
          ],
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/import/13761275"
        },
        {
          "matches": "TextView[text=\"广告\"] <n ViewGroup -2 ViewGroup > @ViewGroup",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 9,
          "snapshotUrls": "https://i.gkd.li/import/12879452"
        }
      ]
    },
    {
      "name": "【下载页】广告卡片",
      "desc": "需选二次弹窗关闭原因",
      "enable": false,
      "quickFind": true,
      "key": 20,
      "rules": [
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/ad_more\"]",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 0,
          "name": "点击更多【···】",
          "snapshotUrls": "https://i.gkd.li/import/12881865"
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/btn_ad_feedback\"]",
          "activityIds": [
            "com.xunlei.downloadprovider.frame.MainTabActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "key": 1,
          "name": "点击【x】",
          "snapshotUrls": [
            "https://i.gkd.li/import/12892893",
            "https://i.gkd.li/import/12901395"
          ]
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/close_ad\"]",
          "preKeys": [
            0,
            1
          ],
          "activityIds": [
            "com.xunlei.downloadprovider.download.center.newcenter",
            "com.xunlei.downloadprovider.frame.MainTabActivity"
          ],
          "key": 2,
          "name": "关闭原因选【减少推荐】",
          "snapshotUrls": [
            "https://i.gkd.li/import/128818775",
            "https://i.gkd.li/import/13198070",
            "https://i.gkd.li/import/13484249"
          ]
        }
      ]
    },
    {
      "name": "搜索页面-顶部banner广告",
      "enable": false,
      "quickFind": true,
      "key": 21,
      "rules": [
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/search_banner_ad_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "quickFind": true,
      "key": 22,
      "rules": [
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/x_upgrade_cancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "会员续费广告",
      "enable": false,
      "quickFind": true,
      "key": 23,
      "rules": [
        {
          "matches": "@[id=\"com.xunlei.downloadprovider:id/close_btn\"] - LinearLayout [text=\"您的会员已过期\"]",
          "activityIds": [
            "com.xunlei.downloadprovider.homepage.member",
            "com.xunlei.downloadprovider.frame.MainTabActivity"
          ],
          "key": 0,
          "name": "【我的】",
          "snapshotUrls": [
            "https://i.gkd.li/import/12707698",
            "https://i.gkd.li/import/13448909"
          ]
        },
        {
          "matches": "[id=\"com.xunlei.downloadprovider:id/all_picture_image\"] + [id=\"com.xunlei.downloadprovider:id/close_btn\"]",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 1,
          "name": "【下载页】1",
          "snapshotUrls": "https://i.gkd.li/import/12882928"
        },
        {
          "matches": "[text=\"立即开通\"] + [id=\"com.xunlei.downloadprovider:id/close\"]",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 2,
          "name": "【下载页】2",
          "snapshotUrls": "https://i.gkd.li/import/12882939"
        },
        {
          "matches": "[text=\"您的会员已过期\"] < LinearLayout +n [id=\"com.xunlei.downloadprovider:id/touch_bottom_bar_bubble_close_iv\"]",
          "activityIds": "com.xunlei.downloadprovider.frame.MainTabActivity",
          "key": 3,
          "name": "【首页】",
          "snapshotUrls": "https://i.gkd.li/import/13259268"
        }
      ]
    }
  ]
});
