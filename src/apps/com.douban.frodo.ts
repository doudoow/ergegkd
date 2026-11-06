// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "豆瓣",
  "id": "com.douban.frodo",
  "groups": [
    {
      "name": "开屏广告",
      "desc": "⚠️[跳过]广告前可能有多次无效点击,属于正常现象",
      "matchTime": 10000,
      "actionMaximum": 2,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "matchRoot": true,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15981630"
        },
        {
          "matches": "[vid=\"ad_parent\"][visibleToUser=true][width>=1200 && width!=1224]",
          "position": {
            "left": "width * 0.875",
            "top": "width * 0.17"
          },
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13601755",
            "https://i.gkd.li/i/16054268",
            "https://i.gkd.li/i/23324118",
            "https://i.gkd.li/i/23324139",
            "https://i.gkd.li/i/23652259",
            "https://i.gkd.li/i/24191638",
            "https://i.gkd.li/i/24362806"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/23283060",
            "https://i.gkd.li/i/23382528",
            "https://i.gkd.li/i/23982586"
          ]
        },
        {
          "matches": "[vid=\"ad_parent\"][visibleToUser=true][width<1200 || width=1224]",
          "position": {
            "left": "width * 0.875",
            "top": "width * 0.137"
          },
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13575257",
            "https://i.gkd.li/i/13575547",
            "https://i.gkd.li/i/18423724",
            "https://i.gkd.li/i/23982586"
          ]
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "excludeMatches": "[text=\"去绑定邮箱\"][visibleToUser=true]",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/17687115",
          "excludeSnapshotUrls": "https://i.gkd.li/i/23283375"
        },
        {
          "matches": "[vid=\"ad_parent\"][visibleToUser=true][width=1216]",
          "position": {
            "left": "width * 0.868",
            "top": "width * 0.09"
          },
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/23283060"
        },
        {
          "matches": "[vid=\"ad_parent\"][visibleToUser=true][width=1440]",
          "position": {
            "left": "width * 0.875",
            "top": "width * 0.125"
          },
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/23382528"
        },
        {
          "matches": "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200 && height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/15981630"
        },
        {
          "matches": "@[clickable=true] >2 [text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/26608409"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "excludeMatches": "[text=\"去绑定邮箱\" || text=\"历史\"][visibleToUser=true]",
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/17687115",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/23283375",
            "https://i.gkd.li/i/29175754"
          ]
        },
        {
          "matches": "@View[width<170 && height<170] <3 FrameLayout <2 FrameLayout < [vid=\"sdk_view\"]",
          "key": 9,
          "snapshotUrls": [
            "https://i.gkd.li/i/29440951",
            "https://i.gkd.li/i/34211578"
          ]
        },
        {
          "anyMatches": [
            "[vid=\"ad_view\"][visibleToUser=true][width>=720][childCount!=0]",
            "[vid=\"sdk_view\"] >n [vid=\"animation_view\"][visibleToUser=true][width>=720]"
          ],
          "position": {
            "left": "width * 0.875",
            "top": "width * 0.10"
          },
          "key": 10,
          "name": "点击坐标①",
          "snapshotUrls": "https://i.gkd.li/i/23283060",
          "excludeSnapshotUrls": "https://i.gkd.li/i/29440952"
        },
        {
          "anyMatches": [
            "[vid=\"ad_view\"][visibleToUser=true][width>=720][childCount!=0]",
            "[vid=\"sdk_view\"] >n [vid=\"animation_view\"][visibleToUser=true][width>=720]"
          ],
          "position": {
            "left": "width * 0.875",
            "top": "width * 0.135"
          },
          "preKeys": [
            10
          ],
          "key": 11,
          "name": "点击坐标②",
          "snapshotUrls": [
            "https://i.gkd.li/i/13575257",
            "https://i.gkd.li/i/18423724",
            "https://i.gkd.li/i/23982586",
            "https://i.gkd.li/i/23382528"
          ]
        },
        {
          "anyMatches": [
            "[vid=\"ad_view\"][visibleToUser=true][width>=720][childCount!=0]",
            "[vid=\"sdk_view\"] >n [vid=\"animation_view\"][visibleToUser=true][width>=720]"
          ],
          "position": {
            "left": "width * 0.875",
            "top": "width * 0.17"
          },
          "preKeys": [
            11
          ],
          "key": 12,
          "name": "点击坐标③",
          "snapshotUrls": [
            "https://i.gkd.li/i/13601755",
            "https://i.gkd.li/i/23324118",
            "https://i.gkd.li/i/23324139",
            "https://i.gkd.li/i/23652259",
            "https://i.gkd.li/i/24191638",
            "https://i.gkd.li/i/24362806"
          ]
        },
        {
          "anyMatches": [
            "[vid=\"ad_view\"][visibleToUser=true][width>=720][childCount!=0]",
            "[vid=\"sdk_view\"] >n [vid=\"animation_view\"][visibleToUser=true][width>=720]"
          ],
          "position": {
            "left": "width * 0.875",
            "top": "width * 0.20"
          },
          "preKeys": [
            12
          ],
          "key": 13,
          "name": "点击坐标④",
          "snapshotUrls": "https://i.gkd.li/i/16054268"
        }
      ]
    },
    {
      "name": "分段广告-信息流广告",
      "desc": "点击关闭-点击不感兴趣",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"ad_header_new\"] > [vid=\"menu_item\"][visibleToUser=true]",
          "activityIds": [
            ".activity.SplashActivity",
            ".subject.structure.activity.MovieActivity",
            ".group.activity.GroupTopicActivity",
            ".fangorns.topic.TopicsActivity",
            ".subject.struct2.MovieActivity2"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/18424402",
            "https://i.gkd.li/i/18424418",
            "https://i.gkd.li/i/18424924",
            "https://i.gkd.li/i/19615325",
            "https://i.gkd.li/i/23982599"
          ]
        },
        {
          "matches": "[vid=\"ad_not_interest\" || vid=\"ad_tag\" || vid=\"group_ad_not_interest\"][visibleToUser=true]",
          "activityIds": [
            ".group.activity.GroupDetailActivity",
            ".group.activity.GroupTopicActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/18424568",
            "https://i.gkd.li/i/18424574",
            "https://i.gkd.li/i/18424681",
            "https://i.gkd.li/i/18424818"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/18422533"
        },
        {
          "matches": "@Image[childCount=0][visibleToUser=true][text=\"\"] < View[childCount=1] -2 View >2 [childCount=0][text=\"广告\"] <<n [vid=\"structure_header_container\"]",
          "actionMaximum": 1,
          "activityIds": ".group.activity.GroupTopicActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/18424747"
        },
        {
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true] < FrameLayout[desc^=\"dislike\"] -2 FrameLayout >2 [text=\"广告\"]",
          "activityIds": ".group.activity.GroupTopicActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/19621152",
          "exampleUrls": "https://e.gkd.li/11d3ea75-c640-4b91-942e-3bf83b2e5f5e"
        },
        {
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1,
            2,
            3
          ],
          "activityIds": [
            ".activity.SplashActivity",
            ".subject.structure.activity.MovieActivity",
            ".group.activity.GroupDetailActivity",
            ".group.activity.GroupTopicActivity",
            ".fangorns.topic.TopicsActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/18424404",
            "https://i.gkd.li/i/18424419",
            "https://i.gkd.li/i/18424568",
            "https://i.gkd.li/i/18424674",
            "https://i.gkd.li/i/18424711",
            "https://i.gkd.li/i/19615333",
            "https://i.gkd.li/i/19621163"
          ],
          "key": 4
        }
      ]
    },
    {
      "name": "评价提示-关闭评分反馈弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text^=\"喜欢豆瓣吗\"][visibleToUser=true]",
            "[text=\"下次再说\"][visibleToUser=true]"
          ],
          "activityIds": ".activity.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/18424257",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "actionCd": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] - LinearLayout[childCount=2] > [text=\"下载应用\" || text=\"立即下载\" || text=\"查看详情\" || text=\"领取优惠\" || text=\"进入小程序\" || text=\"了解更多\"][visibleToUser=true]",
          "activityIds": ".group.activity.GroupTopicActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/18424415"
        },
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout +2 FrameLayout >2 [text=\"下载应用\" || text=\"立即下载\" || text=\"查看详情\" || text=\"领取优惠\" || text=\"进入小程序\" || text=\"了解更多\"]",
          "activityIds": ".group.activity.GroupTopicActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/18424859",
          "exampleUrls": "https://e.gkd.li/735decb0-7f08-4c7d-8199-a38faf213f77"
        },
        {
          "matches": "[vid=\"venue_close\"][visibleToUser=true]",
          "activityIds": ".activity.SplashActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/18717693",
          "exampleUrls": "https://e.gkd.li/86f2589d-87eb-4b9a-83aa-4248b905f7b2"
        },
        {
          "matches": "@ImageView[visibleToUser=true] < FrameLayout - [childCount=2] > [text^=\"立即\" || text^=\"了解\" || text*=\"查看\" || text*=\"下载\" || text*=\"领取\" || text$=\"应用\" || text$=\"详情\" || text$=\"小程序\"][text.length<6]",
          "activityIds": [
            ".group.activity.GroupTopicActivity",
            ".search.activity.NewSearchActivity"
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/18424415",
            "https://i.gkd.li/i/29175754",
            "https://i.gkd.li/i/29298575"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout +2 FrameLayout >2 [text^=\"立即\" || text^=\"了解\" || text*=\"查看\" || text*=\"下载\" || text*=\"领取\" || text$=\"应用\" || text$=\"详情\" || text$=\"小程序\"][text.length<6]",
          "activityIds": ".group.activity.GroupTopicActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/18424859",
          "exampleUrls": "https://e.gkd.li/735decb0-7f08-4c7d-8199-a38faf213f77"
        },
        {
          "matches": "[vid=\"venue_close\"][visibleToUser=true]",
          "activityIds": ".activity.SplashActivity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/18717693",
          "exampleUrls": "https://e.gkd.li/86f2589d-87eb-4b9a-83aa-4248b905f7b2"
        },
        {
          "matches": "@View[clickable=true] > Image - TextView[text=\"广告\"][visibleToUser=true]",
          "key": 6,
          "name": "点击【广告】",
          "snapshotUrls": "https://i.gkd.li/import/12548131"
        },
        {
          "matches": "[text=\"广告\"] < * + * > [text=\"不感兴趣\"][visibleToUser=true]",
          "preKeys": 0,
          "name": "点击【不感兴趣】",
          "snapshotUrls": "https://i.gkd.li/import/12548116",
          "key": 7
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.douban.frodo.subject.structure.activity.MovieActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13195565"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13328126"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout[childCount=3] < FrameLayout[childCount=2] +5 FrameLayout[childCount=4] > [text^=\"扭动或点击\"]",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13328126",
          "exampleUrls": "https://e.gkd.li/f8b1e031-3ec1-422c-9214-8350195642cd"
        },
        {
          "matches": [
            "[text=\"广告\"][visibleToUser=true]",
            "[vid=\"close\"][visibleToUser=true]"
          ],
          "activityIds": ".subject.structure.activity.MovieActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/18631520",
          "exampleUrls": "https://e.gkd.li/208939d0-9d7f-4a44-8e7d-5070478c15df"
        },
        {
          "matches": [
            "[text=\"你发现了一枚徽章\"][visibleToUser=true]",
            "[vid=\"confirmLayout\"][visibleToUser=true]"
          ],
          "activityIds": ".subject.structure.activity.MovieActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/18717771",
          "exampleUrls": "https://e.gkd.li/ca74a922-fb47-4fc8-8111-b6a66c2465ff"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".subject.structure.activity.MovieActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/13195565"
        },
        {
          "matches": "ImageView - FrameLayout[childCount=5] > FrameLayout[childCount=1] > ImageView",
          "activityIds": "com.douban.frodo.subject.structure.activity.MovieActivity",
          "key": 6,
          "name": "腾讯广告-1",
          "snapshotUrls": "https://i.gkd.li/import/13195565"
        },
        {
          "matches": "ImageView -n FrameLayout[childCount=2] > FrameLayout > FrameLayout > ImageView",
          "key": 7,
          "name": "腾讯广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/import/13296656",
            "https://i.gkd.li/import/13328126"
          ]
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
      "key": 5,
      "rules": [
        {
          "matches": [
            "[text=\"新版试用邀请\"][visibleToUser=true]",
            "[text=\"取消\"][visibleToUser=true]"
          ],
          "activityIds": [
            ".activity.BetaApkDialogActivity",
            ".activity.SplashActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13228832",
            "https://i.gkd.li/i/13659160"
          ]
        },
        {
          "matches": [
            "[text=\"新版试用邀请\"]",
            "@[text=\"取消\"] + [text=\"下载\"]"
          ],
          "activityIds": [
            "com.douban.frodo.activity.BetaApkDialogActivity",
            "com.douban.frodo.activity.SplashActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/13228832",
            "https://i.gkd.li/import/13659160"
          ]
        }
      ]
    },
    {
      "name": "其他-标记看过的影视弹窗",
      "desc": "点击[取消]",
      "key": 6,
      "rules": [
        {
          "matches": [
            "[text=\"标记看过的影视\"][visibleToUser=true]",
            "[vid=\"cancelLayout\"][visibleToUser=true]"
          ],
          "activityIds": ".subject.structure.activity.MovieActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18717798",
          "exampleUrls": "https://e.gkd.li/8067419c-a902-4750-9e1e-655bfc5c7342",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-不分享/同步作品短评",
      "desc": "书影音-作品-状态-不分享/同步短评(5s后可手动)",
      "enable": false,
      "matchTime": 5000,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "@LinearLayout > [id=\"com.douban.frodo:id/check_weibo_wechat\"][visibleToUser=true][checked=true]",
          "key": 0,
          "name": "不分享到微信、微博",
          "snapshotUrls": [
            "https://i.gkd.li/i/12508777"
          ]
        },
        {
          "matches": "@LinearLayout > [id=\"com.douban.frodo:id/check_status\"][visibleToUser=true][checked=true]",
          "key": 1,
          "name": "不同步到动态",
          "snapshotUrls": [
            "https://i.gkd.li/i/12508777"
          ]
        }
      ]
    },
    {
      "name": "未分类-剧照广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "TextView[id=\"com.douban.frodo:id/ad_not_interest\"][text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/12509475",
          "key": 0
        },
        {
          "matches": "TextView[id=\"com.douban.frodo:id/mainText\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/i/12509476",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-信息流广告",
      "desc": "首页动态/推荐,小组讨论列表,帖子底部,点击广告关闭后出现关闭原因底部菜单-点击不感兴趣",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "ImageView[id=\"com.douban.frodo:id/avatar\"][index=0] +n ImageView[id=\"com.douban.frodo:id/menu_item\"]",
          "activityIds": [
            "com.douban.frodo.activity.SplashActivity",
            "com.douban.frodo.status.activity.StatusDetailActivity"
          ],
          "key": 0,
          "name": "首页-动态-信息流广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12547964",
            "https://i.gkd.li/i/12548011",
            "https://i.gkd.li/i/12548046"
          ]
        },
        {
          "matches": "[id=\"com.douban.frodo:id/ad_tag\"][text=\"广告\"]",
          "activityIds": [
            "com.douban.frodo.group.activity.GroupDetailActivity",
            "com.douban.frodo.activity.SplashActivity"
          ],
          "key": 1,
          "name": "小组-帖子列表信息流广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12723569",
            "https://i.gkd.li/i/13347455"
          ]
        },
        {
          "matches": "@LinearLayout[clickable=true] > [id=\"com.douban.frodo:id/mainText\"][text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1
          ],
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/i/12548016",
            "https://i.gkd.li/i/12723422"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-卡片广告",
      "desc": "书影音-卡片广告-点击卡片右下角\"广告\"文字",
      "enable": false,
      "actionCd": 10000,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "@View[clickable=true] > Image - TextView[text=\"广告\"][visibleToUser=true]",
          "key": 0,
          "name": "点击【广告】",
          "snapshotUrls": "https://i.gkd.li/i/12548131"
        },
        {
          "matches": "[text=\"广告\"] < * + * > [text=\"不感兴趣\"][visibleToUser=true]",
          "preKeys": 0,
          "name": "点击【不感兴趣】",
          "snapshotUrls": "https://i.gkd.li/i/12548116",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-关闭评分反馈弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "[text=\"下次再说\"][id=\"com.douban.frodo:id/neutral\"]",
          "snapshotUrls": "https://i.gkd.li/i/12548314",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-搜索页/帖子内容与评论区中间的卡片式广告",
      "desc": "部分有二次弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 12,
      "rules": [
        {
          "matches": "ImageView[id=null] +(n) LinearLayout[childCount<=2] + FrameLayout[childCount=1] > ImageView[id=null][visibleToUser=true][top>250]",
          "activityIds": [
            "com.douban.frodo.group.activity.GroupTopicActivity"
          ],
          "key": 0,
          "name": "点击【x】关闭型",
          "snapshotUrls": [
            "https://i.gkd.li/i/12674798",
            "https://i.gkd.li/i/12674842",
            "https://i.gkd.li/i/12723462",
            "https://i.gkd.li/i/12723800",
            "https://i.gkd.li/i/13402399",
            "https://i.gkd.li/i/12548476"
          ]
        },
        {
          "matches": "[text=\"广告\"][id$=\"ad_not_interest\"]",
          "activityIds": [
            "com.douban.frodo.subject.structure.activity.MovieActivity",
            "com.douban.frodo.subject.activity.ForumTopicActivity",
            "com.douban.frodo.group.activity.GroupTopicActivity",
            "com.douban.frodo.activity.SplashActivity",
            "com.douban.frodo.search.activity.NewSearchActivity"
          ],
          "key": 1,
          "name": "点击【广告】选原因型",
          "snapshotUrls": [
            "https://i.gkd.li/i/12548064",
            "https://i.gkd.li/i/12548450",
            "https://i.gkd.li/i/12723751",
            "https://i.gkd.li/i/13062693",
            "https://i.gkd.li/i/13692895"
          ]
        },
        {
          "matches": "@LinearLayout[clickable=true] > [id=\"com.douban.frodo:id/mainText\"][text=\"不感兴趣\"]",
          "preKeys": 1,
          "name": "点击【不感兴趣】",
          "snapshotUrls": [
            "https://i.gkd.li/i/12548016",
            "https://i.gkd.li/i/12723422"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-个性化内容推荐弹窗",
      "desc": "首页底部-个性化内容推荐弹窗-点击卡片右上角x直接关闭",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "[id=\"com.douban.frodo:id/info\"][text^=\"开启个性化推荐\"] - [id=\"com.douban.frodo:id/close\"]",
          "activityIds": [
            "com.douban.frodo.activity.SplashActivity"
          ],
          "snapshotUrls": "https://i.gkd.li/i/12836798",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "desc": "浏览详情时弹窗广告,点击右上角x",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "ImageView - FrameLayout[childCount=5] > FrameLayout[childCount=1] > ImageView",
          "activityIds": "com.douban.frodo.subject.structure.activity.MovieActivity",
          "key": 0,
          "name": "腾讯广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13195565"
        },
        {
          "matches": "ImageView -n FrameLayout[childCount=2] > FrameLayout > FrameLayout > ImageView",
          "key": 1,
          "name": "腾讯广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/13296656",
            "https://i.gkd.li/i/13328126"
          ]
        }
      ]
    },
    {
      "name": "未分类-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": [
            "[text=\"新版试用邀请\"]",
            "@[text=\"取消\"] + [text=\"下载\"]"
          ],
          "activityIds": [
            "com.douban.frodo.activity.BetaApkDialogActivity",
            "com.douban.frodo.activity.SplashActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13228832",
            "https://i.gkd.li/i/13659160"
          ]
        }
      ]
    },
    {
      "name": "分段广告",
      "desc": "①点击[关闭] ②点击[不感兴趣]",
      "fastQuery": true,
      "key": 16,
      "rules": [
        {
          "matches": "[vid=\"ad_header_new\"] > [vid=\"menu_item\"][visibleToUser=true]",
          "activityIds": [
            ".activity.SplashActivity",
            ".subject.structure.activity.MovieActivity",
            ".group.activity.GroupTopicActivity",
            ".fangorns.topic.TopicsActivity",
            ".subject.struct2.MovieActivity2"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/18424402",
            "https://i.gkd.li/i/18424418",
            "https://i.gkd.li/i/18424924",
            "https://i.gkd.li/i/19615325",
            "https://i.gkd.li/i/23982599"
          ]
        },
        {
          "matches": "[vid=\"ad_footer\" || vid=\"feed_ad_group\"] >(1,2) [text=\"广告\"][clickable=true]",
          "activityIds": [
            ".group.activity.GroupDetailActivity",
            ".group.activity.GroupTopicActivity",
            ".search.activity.NewSearchActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/18424681",
            "https://i.gkd.li/i/18424818",
            "https://i.gkd.li/i/29299047"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/18422533"
        },
        {
          "matches": "@[vid=\"ad_not_interest\" || vid=\"group_ad_not_interest\"] -n [text=\"广告\"]",
          "activityIds": ".search.activity.NewSearchActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/29295745",
            "https://i.gkd.li/i/29298939"
          ]
        },
        {
          "matches": "[vid=\"ad_not_interest\" || vid=\"group_ad_not_interest\"][clickable=true]",
          "activityIds": ".group.activity.GroupTopicActivity",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/31183170",
            "https://i.gkd.li/i/31183359"
          ]
        },
        {
          "matches": "@View[clickable=true][childCount=0][visibleToUser=true] < FrameLayout[desc^=\"dislike\"] -2 FrameLayout >2 [text=\"广告\"]",
          "activityIds": ".group.activity.GroupTopicActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/19621152",
          "exampleUrls": "https://e.gkd.li/11d3ea75-c640-4b91-942e-3bf83b2e5f5e"
        },
        {
          "matches": "@Image[childCount=0][visibleToUser=true][text=\"\"] < View[childCount=1] -2 View >2 [childCount=0][text=\"广告\"] <<n [vid=\"structure_header_container\" || vid=\"llHeaderContainer\"]",
          "activityIds": ".group.activity.GroupTopicActivity",
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/18424747",
            "https://i.gkd.li/i/31182864"
          ]
        },
        {
          "matches": "@ImageView[visibleToUser=true][width<63 && height<63] <<n [childCount=2] >2 [text^=\"应​用​名​称​：\"][text.length>30]",
          "activityIds": ".group.activity.GroupTopicActivity",
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/31183730",
          "excludeSnapshotUrls": "https://i.gkd.li/i/31183914"
        },
        {
          "matches": "@[clickable=true] >(1,2) [text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1,
            2,
            3,
            4,
            5,
            6
          ],
          "activityIds": [
            ".activity.SplashActivity",
            ".subject.structure.activity.MovieActivity",
            ".group.activity.GroupDetailActivity",
            ".group.activity.GroupTopicActivity",
            ".fangorns.topic.TopicsActivity",
            ".subject.struct2.MovieActivity2",
            ".search.activity.NewSearchActivity"
          ],
          "key": 7,
          "name": "②点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/i/18424404",
            "https://i.gkd.li/i/18424419",
            "https://i.gkd.li/i/18424574",
            "https://i.gkd.li/i/18424711",
            "https://i.gkd.li/i/19615333",
            "https://i.gkd.li/i/29295746",
            "https://i.gkd.li/i/31182735"
          ]
        }
      ]
    },
    {
      "name": "功能类-长按图片后[保存]",
      "desc": "点击[保存]",
      "key": 17,
      "rules": [
        {
          "matches": "[text=\"保存\" || text=\"保存图片到相册\"][clickable=true]",
          "activityIds": [
            ".group.activity.GroupTopicActivity",
            ".baseproject.image.ImageActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/31184441",
            "https://i.gkd.li/i/31184665",
            "https://i.gkd.li/i/31184797"
          ],
          "exampleUrls": "https://e.gkd.li/f6c2dab4-e87e-4ae5-a778-b97d6cc2b760",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-不分享/同步作品短评",
      "desc": "书影音-作品-状态-不分享/同步短评(5s后可手动)",
      "enable": false,
      "matchTime": 5000,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 18,
      "rules": [
        {
          "matches": "@LinearLayout > [id=\"com.douban.frodo:id/check_weibo_wechat\"][visibleToUser=true][checked=true]",
          "key": 0,
          "name": "不分享到微信、微博",
          "snapshotUrls": [
            "https://i.gkd.li/import/12508777"
          ]
        },
        {
          "matches": "@LinearLayout > [id=\"com.douban.frodo:id/check_status\"][visibleToUser=true][checked=true]",
          "key": 1,
          "name": "不同步到动态",
          "snapshotUrls": [
            "https://i.gkd.li/import/12508777"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-剧照广告",
      "enable": false,
      "fastQuery": true,
      "key": 19,
      "rules": [
        {
          "matches": "TextView[id=\"com.douban.frodo:id/ad_not_interest\"][text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/import/12509475",
          "key": 0
        },
        {
          "matches": "TextView[id=\"com.douban.frodo:id/mainText\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/import/12509476",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "desc": "首页动态/推荐,小组讨论列表,帖子底部,点击广告关闭后出现关闭原因底部菜单-点击不感兴趣",
      "enable": false,
      "fastQuery": true,
      "key": 20,
      "rules": [
        {
          "matches": "ImageView[id=\"com.douban.frodo:id/avatar\"][index=0] +n ImageView[id=\"com.douban.frodo:id/menu_item\"]",
          "activityIds": [
            "com.douban.frodo.activity.SplashActivity",
            "com.douban.frodo.status.activity.StatusDetailActivity"
          ],
          "key": 0,
          "name": "首页-动态-信息流广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12547964",
            "https://i.gkd.li/import/12548011",
            "https://i.gkd.li/import/12548046"
          ]
        },
        {
          "anyMatches": [
            "[id=\"com.douban.frodo:id/ad_tag\"][text=\"广告\"]",
            "@View[id=null] < FrameLayout -2 FrameLayout >2 TextView[text=\"广告\"]",
            "@Image[id=null] < View -3 View >2 TextView[text=\"广告\"]"
          ],
          "activityIds": [
            "com.douban.frodo.group.activity.GroupDetailActivity",
            "com.douban.frodo.activity.SplashActivity"
          ],
          "key": 1,
          "name": "小组-帖子列表信息流广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12723569",
            "https://i.gkd.li/import/13347455",
            "https://i.gkd.li/i/19149685",
            "https://i.gkd.li/i/19149700"
          ]
        },
        {
          "matches": "@ImageView[id=\"com.douban.frodo:id/menu_item\"] <n ViewGroup[id=\"com.douban.frodo:id/ad_header_new\"] < LinearLayout[id=\"com.douban.frodo:id/sdk_ad_item\"]",
          "activityIds": ".group.activity.GroupTopicActivity",
          "key": 2,
          "name": "回复-信息流广告",
          "snapshotUrls": "https://i.gkd.li/i/19160529"
        },
        {
          "matches": "@ImageView[id=\"com.douban.frodo:id/menu_item\"] <n ViewGroup < LinearLayout[id=\"com.douban.frodo:id/sdk_ad_item\"]",
          "activityIds": ".search.activity.NewSearchActivity",
          "key": 3,
          "name": "搜索-信息流广告",
          "snapshotUrls": "https://i.gkd.li/i/19402518"
        },
        {
          "matches": "@LinearLayout[clickable=true] > [id=\"com.douban.frodo:id/mainText\"][text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1,
            2,
            3
          ],
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/12548016",
            "https://i.gkd.li/import/12723422",
            "https://i.gkd.li/i/19402536"
          ],
          "key": 4
        }
      ]
    },
    {
      "name": "全屏广告-关闭评分反馈弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 21,
      "rules": [
        {
          "matches": "[text=\"下次再说\"][id=\"com.douban.frodo:id/neutral\"]",
          "snapshotUrls": "https://i.gkd.li/import/12548314",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-搜索页/帖子内容与评论区中间的卡片式广告",
      "desc": "部分有二次弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 22,
      "rules": [
        {
          "matches": "ImageView[id=null] +(n) LinearLayout[childCount<=2] + FrameLayout[childCount=1] > ImageView[id=null][visibleToUser=true][top>250]",
          "activityIds": [
            "com.douban.frodo.group.activity.GroupTopicActivity"
          ],
          "key": 0,
          "name": "点击【x】关闭型",
          "snapshotUrls": [
            "https://i.gkd.li/import/12674798",
            "https://i.gkd.li/import/12674842",
            "https://i.gkd.li/import/12723462",
            "https://i.gkd.li/import/12723800",
            "https://i.gkd.li/import/13402399",
            "https://i.gkd.li/import/12548476"
          ]
        },
        {
          "matches": "[text=\"广告\"][id$=\"ad_not_interest\"]",
          "activityIds": [
            "com.douban.frodo.subject.structure.activity.MovieActivity",
            "com.douban.frodo.subject.activity.ForumTopicActivity",
            "com.douban.frodo.group.activity.GroupTopicActivity",
            "com.douban.frodo.activity.SplashActivity",
            "com.douban.frodo.search.activity.NewSearchActivity"
          ],
          "key": 1,
          "name": "点击【广告】选原因型",
          "snapshotUrls": [
            "https://i.gkd.li/import/12548064",
            "https://i.gkd.li/import/12548450",
            "https://i.gkd.li/import/12723751",
            "https://i.gkd.li/import/13062693",
            "https://i.gkd.li/import/13692895"
          ]
        },
        {
          "matches": "@LinearLayout[clickable=true] > [id=\"com.douban.frodo:id/mainText\"][text=\"不感兴趣\"]",
          "preKeys": 1,
          "name": "点击【不感兴趣】",
          "snapshotUrls": [
            "https://i.gkd.li/import/12548016",
            "https://i.gkd.li/import/12723422"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-个性化内容推荐弹窗",
      "desc": "首页底部-个性化内容推荐弹窗-点击卡片右上角x直接关闭",
      "enable": false,
      "key": 23,
      "rules": [
        {
          "matches": "[id=\"com.douban.frodo:id/info\"][text^=\"开启个性化推荐\"] - [id=\"com.douban.frodo:id/close\"]",
          "activityIds": [
            "com.douban.frodo.activity.SplashActivity"
          ],
          "snapshotUrls": "https://i.gkd.li/import/12836798",
          "key": 0
        }
      ]
    },
    {
      "name": "不分享/同步作品短评",
      "desc": "书影音-作品-状态-不分享/同步短评(5s后可手动)",
      "enable": false,
      "matchTime": 5000,
      "resetMatch": "activity",
      "quickFind": true,
      "key": 24,
      "rules": [
        {
          "matches": "@LinearLayout > [id=\"com.douban.frodo:id/check_weibo_wechat\"][visibleToUser=true][checked=true]",
          "key": 0,
          "name": "不分享到微信、微博",
          "snapshotUrls": [
            "https://i.gkd.li/import/12508777"
          ]
        },
        {
          "matches": "@LinearLayout > [id=\"com.douban.frodo:id/check_status\"][visibleToUser=true][checked=true]",
          "key": 1,
          "name": "不同步到动态",
          "snapshotUrls": [
            "https://i.gkd.li/import/12508777"
          ]
        }
      ]
    },
    {
      "name": "剧照广告",
      "enable": false,
      "key": 25,
      "rules": [
        {
          "matches": "TextView[id=\"com.douban.frodo:id/ad_not_interest\"][text=\"广告\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/import/12509475",
          "key": 0
        },
        {
          "matches": "TextView[id=\"com.douban.frodo:id/mainText\"][text=\"不感兴趣\"]",
          "snapshotUrls": "https://i.gkd.li/import/12509476",
          "key": 1
        }
      ]
    },
    {
      "name": "信息流广告",
      "desc": "首页动态/推荐,小组讨论列表,帖子底部,点击广告关闭后出现关闭原因底部菜单-点击不感兴趣",
      "enable": false,
      "quickFind": true,
      "key": 26,
      "rules": [
        {
          "matches": "ImageView[id=\"com.douban.frodo:id/avatar\"][index=0] +n ImageView[id=\"com.douban.frodo:id/menu_item\"]",
          "activityIds": [
            "com.douban.frodo.activity.SplashActivity",
            "com.douban.frodo.status.activity.StatusDetailActivity"
          ],
          "key": 0,
          "name": "首页-动态-信息流广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12547964",
            "https://i.gkd.li/import/12548011",
            "https://i.gkd.li/import/12548046"
          ]
        },
        {
          "matches": "[id=\"com.douban.frodo:id/ad_tag\"][text=\"广告\"]",
          "activityIds": [
            "com.douban.frodo.group.activity.GroupDetailActivity",
            "com.douban.frodo.activity.SplashActivity"
          ],
          "key": 1,
          "name": "小组-帖子列表信息流广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12723569",
            "https://i.gkd.li/import/13347455"
          ]
        },
        {
          "matches": "@LinearLayout[clickable=true] > [id=\"com.douban.frodo:id/mainText\"][text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1
          ],
          "name": "点击不感兴趣",
          "snapshotUrls": [
            "https://i.gkd.li/import/12548016",
            "https://i.gkd.li/import/12723422"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "卡片广告",
      "desc": "书影音-卡片广告-点击卡片右下角\"广告\"文字",
      "enable": false,
      "actionCd": 10000,
      "quickFind": true,
      "key": 27,
      "rules": [
        {
          "matches": "@View[clickable=true] > Image - TextView[text=\"广告\"][visibleToUser=true]",
          "key": 0,
          "name": "点击【广告】",
          "snapshotUrls": "https://i.gkd.li/import/12548131"
        },
        {
          "matches": "[text=\"广告\"] < * + * > [text=\"不感兴趣\"][visibleToUser=true]",
          "preKeys": 0,
          "name": "点击【不感兴趣】",
          "snapshotUrls": "https://i.gkd.li/import/12548116",
          "key": 1
        }
      ]
    },
    {
      "name": "关闭评分反馈弹窗",
      "enable": false,
      "quickFind": true,
      "key": 28,
      "rules": [
        {
          "matches": "[text=\"下次再说\"][id=\"com.douban.frodo:id/neutral\"]",
          "snapshotUrls": "https://i.gkd.li/import/12548314",
          "key": 0
        }
      ]
    },
    {
      "name": "搜索页/帖子内容与评论区中间的卡片式广告",
      "desc": "部分有二次弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "key": 29,
      "rules": [
        {
          "matches": "ImageView[id=null] +(n) LinearLayout[childCount<=2] + FrameLayout[childCount=1] > ImageView[id=null][visibleToUser=true][top>250]",
          "activityIds": [
            "com.douban.frodo.group.activity.GroupTopicActivity"
          ],
          "key": 0,
          "name": "点击【x】关闭型",
          "snapshotUrls": [
            "https://i.gkd.li/import/12674798",
            "https://i.gkd.li/import/12674842",
            "https://i.gkd.li/import/12723462",
            "https://i.gkd.li/import/12723800",
            "https://i.gkd.li/import/13402399",
            "https://i.gkd.li/import/12548476"
          ]
        },
        {
          "matches": "[text=\"广告\"][id$=\"ad_not_interest\"]",
          "activityIds": [
            "com.douban.frodo.subject.structure.activity.MovieActivity",
            "com.douban.frodo.subject.activity.ForumTopicActivity",
            "com.douban.frodo.group.activity.GroupTopicActivity",
            "com.douban.frodo.activity.SplashActivity",
            "com.douban.frodo.search.activity.NewSearchActivity"
          ],
          "key": 1,
          "name": "点击【广告】选原因型",
          "snapshotUrls": [
            "https://i.gkd.li/import/12548064",
            "https://i.gkd.li/import/12548450",
            "https://i.gkd.li/import/12723751",
            "https://i.gkd.li/import/13062693",
            "https://i.gkd.li/import/13692895"
          ]
        },
        {
          "matches": "@LinearLayout[clickable=true] > [id=\"com.douban.frodo:id/mainText\"][text=\"不感兴趣\"]",
          "preKeys": 1,
          "name": "点击【不感兴趣】",
          "snapshotUrls": [
            "https://i.gkd.li/import/12548016",
            "https://i.gkd.li/import/12723422"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "个性化内容推荐弹窗",
      "desc": "首页底部-个性化内容推荐弹窗-点击卡片右上角x直接关闭",
      "enable": false,
      "key": 30,
      "rules": [
        {
          "matches": "[id=\"com.douban.frodo:id/info\"][text^=\"开启个性化推荐\"] - [id=\"com.douban.frodo:id/close\"]",
          "activityIds": [
            "com.douban.frodo.activity.SplashActivity"
          ],
          "snapshotUrls": "https://i.gkd.li/import/12836798",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "desc": "浏览详情时弹窗广告,点击右上角x",
      "enable": false,
      "key": 31,
      "rules": [
        {
          "matches": "ImageView - FrameLayout[childCount=5] > FrameLayout[childCount=1] > ImageView",
          "activityIds": "com.douban.frodo.subject.structure.activity.MovieActivity",
          "key": 0,
          "name": "腾讯广告-1",
          "snapshotUrls": "https://i.gkd.li/import/13195565"
        },
        {
          "matches": "ImageView -n FrameLayout[childCount=2] > FrameLayout > FrameLayout > ImageView",
          "key": 1,
          "name": "腾讯广告-2",
          "snapshotUrls": [
            "https://i.gkd.li/import/13296656",
            "https://i.gkd.li/import/13328126"
          ]
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 32,
      "rules": [
        {
          "matches": [
            "[text=\"新版试用邀请\"]",
            "@[text=\"取消\"] + [text=\"下载\"]"
          ],
          "activityIds": [
            "com.douban.frodo.activity.BetaApkDialogActivity",
            "com.douban.frodo.activity.SplashActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13228832",
            "https://i.gkd.li/import/13659160"
          ]
        }
      ]
    }
  ]
});
