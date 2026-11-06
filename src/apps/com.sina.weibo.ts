// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "微博",
  "id": "com.sina.weibo",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "WebView[text=\"Wbox\"] > View[childCount=1] >(1,2) View[childCount=2] > @TextView[clickable=true][visibleToUser=true][childCount=0][index=1][width<200] <<n [vid=\"container\"]",
          "activityIds": "com.sina.weibo.feed.MPDialogActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14969848",
            "https://i.gkd.li/i/16944794",
            "https://i.gkd.li/i/19807700"
          ]
        },
        {
          "matches": "@Image[text=\"close\"] < View[childCount=4] <2 * <<n [id=\"com.sina.weibo:id/container\"]",
          "activityIds": "com.sina.weibo.feed.MPDialogActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14033735"
        },
        {
          "matches": "@[id=\"com.sina.weibo:id/btn_close\"] - FrameLayout > [id=\"com.sina.weibo:id/ad_tag\"]",
          "activityIds": "com.sina.weibo.business",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12750090"
        },
        {
          "matches": "View[childCount=2] > @TextView[clickable=true] - View >n [text=\"元\"] <<n [id=\"com.sina.weibo:id/container\"]",
          "activityIds": "com.sina.weibo.feed.MPDialogActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13670266"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/ad_portrait_layout\"] + [id=\"com.sina.weibo:id/btn_close\"]",
          "activityIds": "com.sina.weibo.page.ad.DiscoverAdDialog",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/12705974"
        },
        {
          "matches": "[text^=\"今日签到\"] <n * + @TextView[visibleToUser=true] <<n [vid=\"container\"]",
          "activityIds": "com.sina.weibo.feed.MPDialogActivity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/14969848"
        },
        {
          "matches": "WebView[text=\"Wbox\"] > View[childCount=1] >(1,2) View[childCount=2] > @TextView[clickable=true][visibleToUser=true][childCount=0][index=1][width<200] <<n [vid=\"container\"]",
          "activityIds": ".feed.MPDialogActivity",
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/14969848",
            "https://i.gkd.li/i/16944794",
            "https://i.gkd.li/i/19807700"
          ]
        },
        {
          "matches": "@Image[text=\"close\"] < View[childCount=4] <2 * <<n [vid=\"container\"]",
          "activityIds": ".feed.MPDialogActivity",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/14033735"
        },
        {
          "matches": "@[id=\"com.sina.weibo:id/btn_close\"] - FrameLayout > [id=\"com.sina.weibo:id/ad_tag\"]",
          "activityIds": "com.sina.weibo.business",
          "fastQuery": true,
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/import/12750090"
        },
        {
          "matches": "View[childCount=2] > @TextView[clickable=true] - View >n [text=\"元\"]",
          "activityIds": "com.sina.weibo.feed.MPDialogActivity",
          "key": 9,
          "snapshotUrls": "https://i.gkd.li/import/13670266"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/ad_portrait_layout\"] + [id=\"com.sina.weibo:id/btn_close\"]",
          "activityIds": "com.sina.weibo.page.ad.DiscoverAdDialog",
          "fastQuery": true,
          "key": 10,
          "snapshotUrls": "https://i.gkd.li/import/12705974"
        },
        {
          "matches": "View[childCount=2] > @TextView[clickable=true] - View >n [visibleToUser=true][text=\"元\"] <<n [id=\"com.sina.weibo:id/container\"]",
          "activityIds": "com.sina.weibo.feed.MPDialogActivity",
          "key": 11,
          "snapshotUrls": "https://i.gkd.li/i/13670266"
        },
        {
          "matches": "WebView[text=\"Wbox\"] > View[childCount=1] > View[childCount=2] > @TextView[clickable=true][visibleToUser=true][childCount=0][index=1][width<200] <<n [vid=\"container\"]",
          "activityIds": "com.sina.weibo.feed.MPDialogActivity",
          "key": 12,
          "snapshotUrls": [
            "https://i.gkd.li/i/14969848",
            "https://i.gkd.li/i/16944794"
          ]
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "自动点击暂不开启",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"暂不开启\"][visibleToUser=true]",
          "activityIds": ".notifyguidev2.NotifyGuideV2Activity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/18342279"
        },
        {
          "matches": "[text^=\"打开通知\"] < LinearLayout + ImageView[id=\"com.sina.weibo:id/right_icon\"]",
          "key": 1
        },
        {
          "matches": "[text^=\"打开通知\"] < LinearLayout + ImageView[id=\"com.sina.weibo:id/right_icon\"]",
          "activityIds": ".MainTabActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12705986"
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "enable": false,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@[text=\"以后再说\"] +2 [text=\"去开启\"]",
          "activityIds": [
            ".MainTabActivity",
            ".utils.WeiboDialog$CustomDialog"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13218093",
            "https://i.gkd.li/i/13003311"
          ]
        },
        {
          "matches": "@[id=\"com.sina.weibo:id/btn_close\"] +2 [text=\"使用您的位置信息\"]",
          "activityIds": ".MainTabActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13255595"
        },
        {
          "matches": "@[text=\"以后再说\"] +2 [text=\"去开启\"]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13218093",
            "https://i.gkd.li/i/13003311"
          ]
        },
        {
          "matches": "@[id=\"com.sina.weibo:id/btn_close\"] +2 [text=\"使用您的位置信息\"]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13255595"
        },
        {
          "matches": "@[vid=\"btn_close\"] +2 [text=\"使用您的位置信息\"]",
          "activityIds": ".MainTabActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/13255595"
        }
      ]
    },
    {
      "name": "分段广告-信息流广告",
      "desc": "点击关闭-点击[不感兴趣]/[不想看到此类内容]",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@[vid=\"ll_close\"] > [text=\"广告\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13852321",
            "https://i.gkd.li/i/19526000",
            "https://i.gkd.li/i/21828244",
            "https://i.gkd.li/i/24291704"
          ]
        },
        {
          "matches": "[vid=\"corner_marker_view\"] >2 [vid=\"right_top_tag\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14210775"
        },
        {
          "matches": [
            "[vid=\"left_img_ad_container\"][visibleToUser=true]",
            "[vid=\"close\"][visibleToUser=true]"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13635551",
            "https://i.gkd.li/i/19525985"
          ]
        },
        {
          "matches": "@[vid=\"closeButton\"] > [text=\"广告\"][visibleToUser=true]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/19538265",
          "exampleUrls": "https://e.gkd.li/6952c2d1-65b5-4419-adb6-ba0f6349801e"
        },
        {
          "matches": "[vid=\"iv_ad_x\"][visibleToUser=true]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/22275086",
          "exampleUrls": "https://e.gkd.li/58baa39c-c447-4664-8a39-c058497b9495"
        },
        {
          "matches": "RelativeLayout >7 FrameLayout[childCount=4] > FrameLayout[childCount=1] > @[name$=\"FrameLayout\" || name$=\"ImageView\"][clickable=true][childCount<2][visibleToUser=true][width<50&&height<50] <<n [vid=\"view_recycler\" || vid=\"tweet_list\"]",
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/21166775",
            "https://i.gkd.li/i/21828269"
          ],
          "exampleUrls": "https://e.gkd.li/fc3b2c98-4540-4ec1-94b2-24abf90212c9"
        },
        {
          "anyMatches": [
            "[text$=\"不感兴趣\"][clickable=true]",
            "@LinearLayout[clickable=true] >2 [text=\"不感兴趣\" || text=\"不想看到此类内容\"]"
          ],
          "preKeys": [
            17,
            14,
            18,
            3,
            4,
            15
          ],
          "matchRoot": true,
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/13852322",
            "https://i.gkd.li/i/13958782",
            "https://i.gkd.li/i/16785777",
            "https://i.gkd.li/i/14730274",
            "https://i.gkd.li/i/19551451",
            "https://i.gkd.li/i/20710958",
            "https://i.gkd.li/i/21828246"
          ]
        },
        {
          "matches": "[text=\"广告\"] + [id=\"com.sina.weibo:id/iv_close_icon\"]",
          "key": 7,
          "name": "点击关闭",
          "snapshotUrls": "https://i.gkd.li/i/13852321"
        },
        {
          "matches": "[vid=\"corner_marker_view\"] >2 [vid=\"right_top_tag\"]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 8,
          "snapshotUrls": [
            "https://i.gkd.li/i/12673051",
            "https://i.gkd.li/i/14210775"
          ]
        },
        {
          "matches": "LinearLayout + LinearLayout[visibleToUser=true][childCount=6] > @ViewGroup > ViewGroup > FrameLayout > ImageView",
          "position": {
            "left": "width * 0.9537",
            "top": "width * 0.0611"
          },
          "activityIds": "com.sina.weibo.MainTabActivity",
          "key": 9,
          "snapshotUrls": [
            "https://i.gkd.li/i/14729705",
            "https://i.gkd.li/i/14753916"
          ]
        },
        {
          "matches": "[text=\"不感兴趣\"][clickable=true]",
          "preKeys": 0,
          "key": 10,
          "name": "点击\"不感兴趣\"",
          "snapshotUrls": "https://i.gkd.li/i/13852322"
        },
        {
          "matches": "@LinearLayout[index=1][clickable=true] >2 [text=\"不想看到此类内容\"]",
          "preKeys": [
            17,
            14
          ],
          "key": 11,
          "name": "点击\"不想看到此类内容\"",
          "snapshotUrls": "https://i.gkd.li/i/13958782"
        },
        {
          "matches": "@[clickable=true] >2 [text=\"不感兴趣\"]",
          "preKeys": [
            9
          ],
          "activityIds": "com.sina.weibo.MainTabActivity",
          "fastQuery": true,
          "key": 12,
          "snapshotUrls": "https://i.gkd.li/i/14730274"
        },
        {
          "matches": "@[vid=\"ll_close\" || vid=\"closeButton\"] > [text=\"广告\"][visibleToUser=true]",
          "key": 13,
          "snapshotUrls": [
            "https://i.gkd.li/i/13852321",
            "https://i.gkd.li/i/19526000",
            "https://i.gkd.li/i/21828244",
            "https://i.gkd.li/i/24291704",
            "https://i.gkd.li/i/19538265"
          ],
          "exampleUrls": "https://e.gkd.li/a3d4a9fb-43a0-46e0-a073-13d9691beb19"
        },
        {
          "matches": "RelativeLayout >2 ImageView[vid=\"right_top_tag\" || vid=\"iv_ad_x\"][clickable=true][visibleToUser=true][width<200]",
          "key": 14,
          "snapshotUrls": [
            "https://i.gkd.li/i/14210775",
            "https://i.gkd.li/i/22275086"
          ],
          "exampleUrls": "https://e.gkd.li/f0d15b65-21f5-4398-9d24-da858ea34a8b"
        },
        {
          "matches": "@[name$=\"FrameLayout\" || name$=\"ImageView\"][clickable=true][childCount<2][width<50 && height<50] <<n [name$=\"Layout\"] -(1,2) [visibleToUser=true] >(1,3) [vid=\"shareLayout_0\"]",
          "key": 15,
          "snapshotUrls": [
            "https://i.gkd.li/i/21166775",
            "https://i.gkd.li/i/21828269",
            "https://i.gkd.li/i/31557775"
          ],
          "exampleUrls": "https://e.gkd.li/83586a40-3c41-460a-acab-248517589fe5"
        },
        {
          "anyMatches": [
            "[text$=\"不感兴趣\"][clickable=true]",
            "@LinearLayout[clickable=true] >2 [text=\"不感兴趣\" || text=\"不想看到此类内容\"]"
          ],
          "preKeys": [
            17,
            14,
            18,
            15
          ],
          "matchRoot": true,
          "key": 16,
          "snapshotUrls": [
            "https://i.gkd.li/i/13852322",
            "https://i.gkd.li/i/13958782",
            "https://i.gkd.li/i/16785777",
            "https://i.gkd.li/i/14730274",
            "https://i.gkd.li/i/19551451",
            "https://i.gkd.li/i/20710958",
            "https://i.gkd.li/i/21828246"
          ]
        },
        {
          "matches": "[vid=\"ll_close\"][visibleToUser=true]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 17,
          "snapshotUrls": "https://i.gkd.li/i/13852321"
        },
        {
          "matches": [
            "[vid=\"left_img_ad_tag\"][visibleToUser=true]",
            "[vid=\"close\"][visibleToUser=true]"
          ],
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 18,
          "snapshotUrls": "https://i.gkd.li/i/16828094",
          "exampleUrls": "https://e.gkd.li/039f312b-0d6a-4316-9737-ead761e8e194"
        },
        {
          "matches": "[text=\"不感兴趣\"][clickable=true]",
          "preKeys": [
            17
          ],
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 19,
          "name": "点击\"不感兴趣\"",
          "snapshotUrls": "https://i.gkd.li/i/13852322"
        },
        {
          "matches": "@LinearLayout[index=1][clickable=true] >2 [text=\"不想看到此类内容\"]",
          "preKeys": [
            17,
            14,
            18
          ],
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 20,
          "name": "点击\"不想看到此类内容\"",
          "snapshotUrls": [
            "https://i.gkd.li/i/13958782",
            "https://i.gkd.li/i/16785777"
          ]
        }
      ]
    },
    {
      "name": "评价提示-APP评分弹窗",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@[text=\"不了，谢谢\"] +4 [text=\"喜欢，给好评\"]",
          "activityIds": ".MainTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/13620220",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动点击查看原图",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "@LinearLayout >3 [vid=\"tv_dialog_item\"][text^=\"原图\"]",
          "activityIds": "com.sina.weibo.photoalbum.imageviewer.ImageViewer",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13929119",
          "key": 0
        },
        {
          "matches": "@LinearLayout >3 [vid=\"tv_dialog_item\"][text^=\"原图\"]",
          "activityIds": "com.sina.weibo.photoalbum.imageviewer.ImageViewer",
          "snapshotUrls": "https://i.gkd.li/i/13929119",
          "key": 1
        },
        {
          "matches": "@LinearLayout >3 [vid=\"tv_dialog_item\"][text^=\"原图\"]",
          "activityIds": ".photoalbum.imageviewer.ImageViewer",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13929119",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-超话自动签到",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": [
            "ViewGroup[childCount=2] > [text=\"管理\"][visibleToUser=true]",
            "[text=\"签到\" || text=\"Sign in\"] < [vid=\"right_button\"][visibleToUser=true]"
          ],
          "activityIds": "com.sina.weibo.supergroup.SGPageActivity",
          "key": 0,
          "name": "点击签到",
          "snapshotUrls": [
            "https://i.gkd.li/i/15092999",
            "https://i.gkd.li/i/15092970",
            "https://i.gkd.li/i/15136801"
          ]
        },
        {
          "matches": "@[checked=true] < * > [text=\"接收本超话签到提醒推送\"]",
          "activityIds": "com.sina.weibo.supergroup.pagepop.PagePopActivity",
          "key": 1,
          "name": "取消勾选[接收本超话签到提醒推送]",
          "snapshotUrls": "https://i.gkd.li/i/15103524"
        },
        {
          "matches": [
            "[text^=\"连续签到\"]",
            "[vid=\"iv_close_v2\"]"
          ],
          "activityIds": "com.sina.weibo.supergroup.pagepop.PagePopActivity",
          "key": 2,
          "name": "关闭签到成功弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/15103524",
            "https://i.gkd.li/i/15136825",
            "https://i.gkd.li/i/15136842"
          ]
        },
        {
          "matches": [
            "ViewGroup[childCount=2] > [text=\"管理\"][visibleToUser=true]",
            "[text=\"签到\" || text=\"Sign in\"] < [vid=\"right_button\"][visibleToUser=true]"
          ],
          "activityIds": ".supergroup.SGPageActivity",
          "key": 3,
          "name": "点击签到",
          "snapshotUrls": [
            "https://i.gkd.li/i/15092999",
            "https://i.gkd.li/i/15092970",
            "https://i.gkd.li/i/15136801"
          ]
        },
        {
          "matches": "@[checked=true] < * > [text=\"接收本超话签到提醒推送\"]",
          "activityIds": ".supergroup.pagepop.PagePopActivity",
          "key": 4,
          "name": "取消勾选[接收本超话签到提醒推送]",
          "snapshotUrls": "https://i.gkd.li/i/15103524"
        },
        {
          "matches": [
            "[text^=\"连续签到\"]",
            "[vid=\"iv_close_v2\"]"
          ],
          "activityIds": ".supergroup.pagepop.PagePopActivity",
          "key": 5,
          "name": "关闭签到成功弹窗",
          "snapshotUrls": [
            "https://i.gkd.li/i/15103524",
            "https://i.gkd.li/i/15136825",
            "https://i.gkd.li/i/15136842"
          ]
        }
      ]
    },
    {
      "name": "功能类-超话一键签到",
      "desc": "点击[一键签到]",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": [
            "[text*=\"一键签到\"][visibleToUser=true]",
            "[vid=\"checkinBtn\"][visibleToUser=true]"
          ],
          "activityIds": "com.sina.weibo.supergroup.generic.GenericChannelActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16420751",
          "exampleUrls": "https://e.gkd.li/3fad288d-ba21-44ed-8ebe-f9b4cbde1d3c",
          "key": 0
        },
        {
          "matches": [
            "[text*=\"一键签到\"][visibleToUser=true]",
            "[vid=\"checkinBtn\"][visibleToUser=true]"
          ],
          "activityIds": ".supergroup.generic.GenericChannelActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16420751",
          "exampleUrls": "https://e.gkd.li/3fad288d-ba21-44ed-8ebe-f9b4cbde1d3c",
          "key": 1
        }
      ]
    },
    {
      "name": "其他-关闭猪手提示",
      "desc": "点击[取消]",
      "key": 8,
      "rules": [
        {
          "matches": [
            "[text^=\"猪手超话自动签到失败\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": ".MainTabActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16827119",
          "exampleUrls": "https://e.gkd.li/92e08aea-ae70-4ea8-be65-442f8e2e423d",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-关闭点赞时的验证",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "Button[text^=\"关闭验证\"][clickable=true][visibleToUser=true]",
          "activityIds": ".geetest.GeetCheckActivityForNet",
          "snapshotUrls": "https://i.gkd.li/i/16827853",
          "exampleUrls": "https://e.gkd.li/7a8ed873-a6e8-4260-9f5c-3ff05d5788db",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-关主页自动切换到[关注的人]TAB",
      "enable": false,
      "actionMaximum": 1,
      "key": 10,
      "rules": [
        {
          "matches": "@[clickable=true] >2 [text=\"关注的人\"][visibleToUser=true]",
          "activityIds": ".flowbusiness.commonpage.FlowCommonPageActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18423013",
          "exampleUrls": "https://e.gkd.li/6ef5bbf7-bb11-4cbb-b46b-bdc7c333a617",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-评论区博主内容推荐",
      "desc": "点击关闭-点击[不感兴趣]/[不想看到此类内容]",
      "enable": false,
      "fastQuery": true,
      "key": 11,
      "rules": [
        {
          "matches": "@[vid=\"ll_close\"] > [text=\"推荐\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/19551850",
            "https://i.gkd.li/i/19552278"
          ]
        },
        {
          "matches": "[text$=\"不感兴趣\"][clickable=true]",
          "preKeys": [
            2
          ],
          "matchRoot": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/19551857",
            "https://i.gkd.li/i/19552282",
            "https://i.gkd.li/i/24211723"
          ],
          "key": 1
        },
        {
          "matches": "RelativeLayout[visibleToUser=true] - RelativeLayout >n @[id=\"com.sina.weibo:id/ll_close\"] > [id=\"com.sina.weibo:id/tv_tips\"] + [id=\"com.sina.weibo:id/iv_close_icon\"]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12674498",
            "https://i.gkd.li/i/13035647"
          ]
        },
        {
          "matches": "TextView[text=\"不感兴趣\"]",
          "preKeys": [
            2
          ],
          "activityIds": [
            "com.sina.weibo.utils.WeiboDialog$CustomDialog",
            "com.sina.weibo.feed.DetailWeiboActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12674511",
            "https://i.gkd.li/i/12929591"
          ],
          "key": 3
        }
      ]
    },
    {
      "name": "分段广告-评论区荐读",
      "fastQuery": true,
      "key": 12,
      "rules": [
        {
          "matches": "@[vid=\"ll_close\"] > [text=\"荐读\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/21828298",
            "https://i.gkd.li/i/24237728",
            "https://i.gkd.li/i/24291674"
          ],
          "exampleUrls": "https://e.gkd.li/bab872e2-6967-49f5-8443-46af8f225d8f"
        },
        {
          "matches": "[text$=\"不感兴趣\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/21828292",
          "exampleUrls": "https://e.gkd.li/4d35d427-f6ab-42bf-a369-65c5b602fcdf",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-兴趣领域推荐",
      "desc": "出现在长久未登录的账户再次登录时",
      "enable": false,
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibo:id/rl_account_title_bar\"] > [id=\"com.sina.weibo:id/tv_title_bar_skip\"][text=\"跳过\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-博文内容区与评论区中间卡片式广告",
      "desc": "点击右上角x",
      "enable": false,
      "fastQuery": true,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibo:id/left_img_container\"] + LinearLayout >2 [id=\"com.sina.weibo:id/close\"][clickable=true]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12673043"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/left_video_container\"] + LinearLayout >2 [id=\"com.sina.weibo:id/close\"][clickable=true]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13635551"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/corner_marker_view\"] >2 [id=\"com.sina.weibo:id/right_top_tag\"]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12673051"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/tvTrendsTitle\"] + [id=\"com.sina.weibo:id/iv_ad_x\"]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13787207"
        }
      ]
    },
    {
      "name": "未分类-评论区博主内容推荐",
      "desc": "评论区同一博主其他博文推荐",
      "enable": false,
      "fastQuery": true,
      "key": 16,
      "rules": [
        {
          "matches": "RelativeLayout[visibleToUser=true] - RelativeLayout >n @[id=\"com.sina.weibo:id/ll_close\"] > [id=\"com.sina.weibo:id/tv_tips\"] + [id=\"com.sina.weibo:id/iv_close_icon\"]",
          "activityIds": [
            "com.sina.weibo.feed.DetailWeiboActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12674498",
            "https://i.gkd.li/i/13035647"
          ]
        },
        {
          "matches": "TextView[text=\"不感兴趣\"]",
          "preKeys": 0,
          "activityIds": [
            "com.sina.weibo.utils.WeiboDialog$CustomDialog",
            "com.sina.weibo.feed.DetailWeiboActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12674511",
            "https://i.gkd.li/i/12929591"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-首页顶部话题分享窗口",
      "enable": false,
      "fastQuery": true,
      "key": 17,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibo:id/tvGuide\"] + [id=\"com.sina.weibo:id/v_close\"] + [id=\"com.sina.weibo:id/iv_close\"]",
          "key": 0
        },
        {
          "matches": "[id=\"com.sina.weibo:id/tvGuide\"] + [id=\"com.sina.weibo:id/v_close\"] + [id=\"com.sina.weibo:id/iv_close\"]",
          "activityIds": "com.sina.weibo.MainTabActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/12705972",
          "key": 1
        }
      ]
    },
    {
      "name": "通知提示-请求开启通知弹窗",
      "desc": "自动点击暂不开启",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 18,
      "rules": [
        {
          "matches": "@[id=\"com.sina.weibo:id/bt_cancel\"][text=\"暂不开启\"] + [id=\"com.sina.weibo:id/bt_confirm\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-首页顶部签到卡片",
      "desc": "自动点击x按钮",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 19,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibo:id/ll_check_in_container\"] < FrameLayout - FrameLayout > TextView + [id=\"com.sina.weibo:id/v_close\"]",
          "key": 0
        },
        {
          "matches": "[id=\"com.sina.weibo:id/ll_check_in_container\"] < FrameLayout - FrameLayout > TextView + [id=\"com.sina.weibo:id/v_close\"]",
          "activityIds": "com.sina.weibo.MainTabActivity",
          "snapshotUrls": "https://i.gkd.li/i/12749876",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "desc": "自动点击x按钮",
      "enable": false,
      "fastQuery": true,
      "key": 20,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibo:id/floating_window\"] >2 [id=\"com.sina.weibo:id/close\"]",
          "activityIds": "com.sina.weibo.MainTabActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12750118"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/floating_window\"] >n [id=\"com.sina.weibo:id/closeView\"]",
          "activityIds": "com.sina.weibo.MainTabActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13206775"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/tv_tag\"] + @*[clickable=true] + [id=\"com.sina.weibo:id/countdown_btn_close\"]",
          "activityIds": "com.sina.weibo.MainTabActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13206841"
        },
        {
          "matches": "@[id=\"com.sina.weibo:id/close_layout\"] - LinearLayout [id=\"com.sina.weibo:id/btnFollow\"]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13482954"
        },
        {
          "matches": "[text*=\"一键转发\"] < LinearLayout +2 [id=\"com.sina.weibo:id/tv_close\"]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/13482960"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/floating_window\"] >2 [id=\"com.sina.weibo:id/close\"]",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/import/12750118"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/floating_window\"] >n [id=\"com.sina.weibo:id/closeView\"]",
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/import/13206775"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/tv_tag\"] + @*[clickable=true] + [id=\"com.sina.weibo:id/countdown_btn_close\"]",
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/import/13206841"
        }
      ]
    },
    {
      "name": "未分类-APP评分弹窗",
      "desc": "点击【x】",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 21,
      "rules": [
        {
          "matches": "@[text=\"不了，谢谢\"] +4 [text=\"喜欢，给好评\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-点赞任务奖励",
      "desc": "点击x",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 22,
      "rules": [
        {
          "matches": "[vid=\"container\"] >n [text=\"close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-兴趣领域推荐",
      "desc": "出现在长久未登录的账户再次登录时",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 23,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibo:id/rl_account_title_bar\"] > [id=\"com.sina.weibo:id/tv_title_bar_skip\"][text=\"跳过\"]",
          "key": 0
        },
        {
          "matches": "[id=\"com.sina.weibo:id/rl_account_title_bar\"] > [id=\"com.sina.weibo:id/tv_title_bar_skip\"][text=\"跳过\"]",
          "activityIds": "com.sina.weibo.account.interest.InterestActivity",
          "snapshotUrls": "https://i.gkd.li/i/12531405",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-精选博主推荐",
      "desc": "出现在长久未登录的账户再次登录时",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 24,
      "rules": [
        {
          "matches": "[text=\"取消勾选\"]",
          "activityIds": ".account.recommend.RecommendActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12531433",
          "exampleUrls": "https://e.gkd.li/a0602466-0f1e-4ab9-8a0d-27a4364d1ff8"
        },
        {
          "matches": "[text=\"跳过\"]",
          "preKeys": [
            0
          ],
          "activityIds": "com.oplusos.systemui.volume.VolumeDialogImplEx$CustomDialog",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12531434",
          "exampleUrls": "https://e.gkd.li/c20bec5d-f4e1-4765-9ba0-ca645b27e434"
        }
      ]
    },
    {
      "name": "局部广告-博文内容区与评论区中间卡片式广告",
      "desc": "点击右上角x",
      "enable": false,
      "fastQuery": true,
      "key": 25,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibo:id/left_img_container\"] + LinearLayout >2 [id=\"com.sina.weibo:id/close\"][clickable=true]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12673043"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/left_video_container\"] + LinearLayout >2 [id=\"com.sina.weibo:id/close\"][clickable=true]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13635551"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/corner_marker_view\"] >2 [id=\"com.sina.weibo:id/right_top_tag\"]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/12673051"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/tvTrendsTitle\"] + [id=\"com.sina.weibo:id/iv_ad_x\"]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/13787207"
        }
      ]
    },
    {
      "name": "局部广告-评论区博主内容推荐",
      "desc": "评论区同一博主其他博文推荐",
      "enable": false,
      "fastQuery": true,
      "key": 26,
      "rules": [
        {
          "matches": "RelativeLayout[visibleToUser=true] - RelativeLayout >n @[id=\"com.sina.weibo:id/ll_close\"] > [id=\"com.sina.weibo:id/tv_tips\"] + [id=\"com.sina.weibo:id/iv_close_icon\"]",
          "activityIds": [
            "com.sina.weibo.feed.DetailWeiboActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12674498",
            "https://i.gkd.li/import/13035647"
          ]
        },
        {
          "matches": "TextView[text=\"不感兴趣\"]",
          "preKeys": 0,
          "activityIds": [
            "com.sina.weibo.utils.WeiboDialog$CustomDialog",
            "com.sina.weibo.feed.DetailWeiboActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12674511",
            "https://i.gkd.li/import/12929591"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-请求开启通知弹窗",
      "desc": "自动点击暂不开启",
      "enable": false,
      "fastQuery": true,
      "key": 27,
      "rules": [
        {
          "matches": "@[id=\"com.sina.weibo:id/bt_cancel\"][text=\"暂不开启\"] + [id=\"com.sina.weibo:id/bt_confirm\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求开启通知提示信息",
      "desc": "自动点击x按钮",
      "enable": false,
      "fastQuery": true,
      "key": 28,
      "rules": [
        {
          "matches": "[text^=\"打开通知\"] < LinearLayout + ImageView[id=\"com.sina.weibo:id/right_icon\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求定位权限弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 29,
      "rules": [
        {
          "matches": "@[text=\"以后再说\"] + * + [text=\"去开启\"]",
          "activityIds": [
            "com.sina.weibo.MainTabActivity",
            "com.sina.weibo.utils.WeiboDialog$CustomDialog"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13218093",
            "https://i.gkd.li/import/13003311"
          ]
        },
        {
          "matches": "@[id=\"com.sina.weibo:id/btn_close\"] +2 [text=\"使用您的位置信息\"]",
          "activityIds": "com.sina.weibo.MainTabActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13255595"
        }
      ]
    },
    {
      "name": "局部广告-评论区底部-账号推荐关注悬浮窗",
      "desc": "点击【x】",
      "enable": false,
      "fastQuery": true,
      "key": 30,
      "rules": [
        {
          "matches": "@[id=\"com.sina.weibo:id/close_layout\"] - LinearLayout [id=\"com.sina.weibo:id/btnFollow\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-评论区底部-转发推荐悬浮窗",
      "desc": "点击【x】",
      "enable": false,
      "fastQuery": true,
      "key": 31,
      "rules": [
        {
          "matches": "[text*=\"一键转发\"] < LinearLayout +2 [id=\"com.sina.weibo:id/tv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-评论区信息流广告",
      "desc": "点击X-点击不感兴趣",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 32,
      "rules": [
        {
          "matches": "[text=\"广告\"] + [id=\"com.sina.weibo:id/iv_close_icon\"]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13852321"
        },
        {
          "matches": "[text=\"不感兴趣\"][clickable=true]",
          "preKeys": 0,
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13852322"
        }
      ]
    },
    {
      "name": "全屏广告-APP评分弹窗",
      "desc": "点击【x】",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 33,
      "rules": [
        {
          "matches": "@[text=\"不了，谢谢\"] +4 [text=\"喜欢，给好评\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-博文内容区与评论区中间卡片广告",
      "desc": "点击右上角关闭",
      "enable": false,
      "fastQuery": true,
      "key": 34,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibo:id/left_img_container\"] + LinearLayout >2 [id=\"com.sina.weibo:id/close\"][clickable=true]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12673043"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/left_video_container\"] + LinearLayout >2 [id=\"com.sina.weibo:id/close\"][clickable=true]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13635551"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/tvTrendsTitle\"] + [id=\"com.sina.weibo:id/iv_ad_x\"]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13787207"
        }
      ]
    },
    {
      "name": "功能类-关闭猪手提示",
      "desc": "点击[取消]",
      "enable": false,
      "key": 35,
      "rules": [
        {
          "matches": [
            "[text^=\"猪手超话自动签到失败\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": ".MainTabActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16827119",
          "exampleUrls": "https://e.gkd.li/92e08aea-ae70-4ea8-be65-442f8e2e423d",
          "key": 0
        }
      ]
    },
    {
      "name": "兴趣领域推荐",
      "desc": "出现在长久未登录的账户再次登录时",
      "enable": false,
      "quickFind": true,
      "key": 36,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibo:id/rl_account_title_bar\"] > [id=\"com.sina.weibo:id/tv_title_bar_skip\"][text=\"跳过\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "博文内容区与评论区中间卡片式广告",
      "desc": "点击右上角x",
      "enable": false,
      "quickFind": true,
      "key": 38,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibo:id/left_img_container\"] + LinearLayout >2 [id=\"com.sina.weibo:id/close\"][clickable=true]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12673043"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/left_video_container\"] + LinearLayout >2 [id=\"com.sina.weibo:id/close\"][clickable=true]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13635551"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/corner_marker_view\"] >2 [id=\"com.sina.weibo:id/right_top_tag\"]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/12673051"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/tvTrendsTitle\"] + [id=\"com.sina.weibo:id/iv_ad_x\"]",
          "activityIds": "com.sina.weibo.feed.DetailWeiboActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/13787207"
        }
      ]
    },
    {
      "name": "评论区博主内容推荐",
      "desc": "评论区同一博主其他博文推荐",
      "enable": false,
      "quickFind": true,
      "key": 39,
      "rules": [
        {
          "matches": "RelativeLayout[visibleToUser=true] - RelativeLayout >n @[id=\"com.sina.weibo:id/ll_close\"] > [id=\"com.sina.weibo:id/tv_tips\"] + [id=\"com.sina.weibo:id/iv_close_icon\"]",
          "activityIds": [
            "com.sina.weibo.feed.DetailWeiboActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12674498",
            "https://i.gkd.li/import/13035647"
          ]
        },
        {
          "matches": "TextView[text=\"不感兴趣\"]",
          "preKeys": 0,
          "activityIds": [
            "com.sina.weibo.utils.WeiboDialog$CustomDialog",
            "com.sina.weibo.feed.DetailWeiboActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/import/12674511",
            "https://i.gkd.li/import/12929591"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "首页顶部话题分享窗口",
      "enable": false,
      "quickFind": true,
      "key": 40,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibo:id/tvGuide\"] + [id=\"com.sina.weibo:id/v_close\"] + [id=\"com.sina.weibo:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 41,
      "rules": [
        {
          "matches": "@[id=\"com.sina.weibo:id/btn_close\"] - FrameLayout > [id=\"com.sina.weibo:id/ad_tag\"]",
          "activityIds": "com.sina.weibo.business",
          "quickFind": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12750090"
        },
        {
          "matches": "View[childCount=2] > @TextView[clickable=true] - View >n [text=\"元\"]",
          "activityIds": "com.sina.weibo.feed.MPDialogActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13670266"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/ad_portrait_layout\"] + [id=\"com.sina.weibo:id/btn_close\"]",
          "activityIds": "com.sina.weibo.page.ad.DiscoverAdDialog",
          "quickFind": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/12705974"
        }
      ]
    },
    {
      "name": "请求开启通知弹窗",
      "desc": "自动点击暂不开启",
      "enable": false,
      "quickFind": true,
      "key": 42,
      "rules": [
        {
          "matches": "@[id=\"com.sina.weibo:id/bt_cancel\"][text=\"暂不开启\"] + [id=\"com.sina.weibo:id/bt_confirm\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求开启通知提示信息",
      "desc": "自动点击x按钮",
      "enable": false,
      "quickFind": true,
      "key": 43,
      "rules": [
        {
          "matches": "[text^=\"打开通知\"] < LinearLayout + ImageView[id=\"com.sina.weibo:id/right_icon\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页顶部签到卡片",
      "desc": "自动点击x按钮",
      "enable": false,
      "quickFind": true,
      "key": 44,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibo:id/ll_check_in_container\"] < FrameLayout - FrameLayout > TextView + [id=\"com.sina.weibo:id/v_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "悬浮广告",
      "desc": "自动点击x按钮",
      "enable": false,
      "quickFind": true,
      "key": 45,
      "rules": [
        {
          "matches": "[id=\"com.sina.weibo:id/floating_window\"] >2 [id=\"com.sina.weibo:id/close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12750118"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/floating_window\"] >n [id=\"com.sina.weibo:id/closeView\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13206775"
        },
        {
          "matches": "[id=\"com.sina.weibo:id/tv_tag\"] + @*[clickable=true] + [id=\"com.sina.weibo:id/countdown_btn_close\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13206841"
        }
      ]
    },
    {
      "name": "请求定位权限弹窗",
      "enable": false,
      "quickFind": true,
      "key": 46,
      "rules": [
        {
          "matches": "@[text=\"以后再说\"] + * + [text=\"去开启\"]",
          "activityIds": [
            "com.sina.weibo.MainTabActivity",
            "com.sina.weibo.utils.WeiboDialog$CustomDialog"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/13218093",
            "https://i.gkd.li/import/13003311"
          ]
        },
        {
          "matches": "@[id=\"com.sina.weibo:id/btn_close\"] +2 [text=\"使用您的位置信息\"]",
          "activityIds": "com.sina.weibo.MainTabActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13255595"
        }
      ]
    },
    {
      "name": "评论区底部-账号推荐关注悬浮窗",
      "desc": "点击【x】",
      "enable": false,
      "quickFind": true,
      "key": 47,
      "rules": [
        {
          "matches": "@[id=\"com.sina.weibo:id/close_layout\"] - LinearLayout [id=\"com.sina.weibo:id/btnFollow\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "评论区底部-转发推荐悬浮窗",
      "desc": "点击【x】",
      "enable": false,
      "quickFind": true,
      "key": 48,
      "rules": [
        {
          "matches": "[text*=\"一键转发\"] < LinearLayout +2 [id=\"com.sina.weibo:id/tv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "APP评分弹窗",
      "desc": "点击【x】",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 49,
      "rules": [
        {
          "matches": "@[text=\"不了，谢谢\"] +4 [text=\"喜欢，给好评\"]",
          "key": 0
        }
      ]
    }
  ]
});
