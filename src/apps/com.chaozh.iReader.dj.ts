// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "得间免费小说",
  "id": "com.chaozh.iReader.dj",
  "groups": [
    {
      "name": "局部广告",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[id*=\"ad_close\"] - LinearLayout >(5,6) [text=\"广告\"][visibleToUser=true]",
          "activityIds": [
            "com.qq.e.ads.PortraitADActivity",
            "com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/24879639",
            "https://i.gkd.li/i/24879692",
            "https://i.gkd.li/i/24879766"
          ]
        },
        {
          "matches": "@ImageView[clickable=true][childCount=0][width<50 && height<50] < FrameLayout <2 [id=\"android:id/content\"]",
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/24880989",
            "https://i.gkd.li/i/24881759"
          ]
        },
        {
          "matches": "@[text=\"关闭\"][clickable=true] <<n [id=\"com.zhangyue.module.ad:id/mix_ad_view\" || id=\"com.zhangyue.module.ad:id/ad_splash_ad_layout\"]",
          "activityIds": [
            "com.zhangyue.iReader.ui.activity.ActivityContainer",
            "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
            "com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT"
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/24884414",
            "https://i.gkd.li/i/24882622",
            "https://i.gkd.li/i/24883183"
          ]
        },
        {
          "matches": "[text$=\"了解更多\"] <<n [id=\"android:id/content\"] + [text=\"关闭\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.qq.e.ads.PortraitADActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/24909685"
        },
        {
          "matches": "[id=\"com.zhangyue.module.ad:id/close_ad\" || id=\"com.zhangyue.module.ad:id/ad_close_2\"]",
          "activityIds": [
            "com.zhangyue.app.shortplay.player.ui.activity.EpisodesSetPlayActivity",
            "com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT"
          ],
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/24885716",
            "https://i.gkd.li/i/24888022"
          ]
        },
        {
          "matches": "@[id*=\"ad_close\"] - LinearLayout >(5,6,7) [text=\"广告\"][visibleToUser=true]",
          "activityIds": [
            "com.qq.e.ads.PortraitADActivity",
            "com.octopus.ad.AdActivity",
            "com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT"
          ],
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/24879639",
            "https://i.gkd.li/i/24879692",
            "https://i.gkd.li/i/24879766",
            "https://i.gkd.li/i/25943097"
          ],
          "exampleUrls": "https://e.gkd.li/148d8a38-a208-4a4c-8441-a908e2e1077f"
        },
        {
          "matches": "@ImageView[clickable=true][childCount=0][width<50 && height<50] < FrameLayout <2 [id=\"android:id/content\"]",
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/24880989",
            "https://i.gkd.li/i/24881759"
          ],
          "exampleUrls": "https://e.gkd.li/547eff98-27c2-484c-9873-57f77b5e7f66"
        },
        {
          "matches": "[id$=\"mix_ad_view\" || id$=\"ad_splash_ad_layout\"] >(1,2) [text=\"关闭\"][clickable=true]",
          "activityIds": [
            "com.zhangyue.iReader.ui.activity.ActivityContainer",
            "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
            "com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT"
          ],
          "key": 7,
          "snapshotUrls": [
            "https://i.gkd.li/i/24884414",
            "https://i.gkd.li/i/24882622",
            "https://i.gkd.li/i/24883183"
          ],
          "exampleUrls": [
            "https://e.gkd.li/59c890e2-6732-47cf-b102-cbd896de27f1",
            "https://e.gkd.li/47d13bd7-9a4b-4c34-9d46-0e4e264eab41"
          ]
        },
        {
          "matches": "[id=\"com.zhangyue.module.ad:id/close_ad\" || id=\"com.zhangyue.module.ad:id/ad_close_2\"]",
          "activityIds": [
            "com.zhangyue.app.shortplay.player.ui.activity.EpisodesSetPlayActivity",
            "com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT"
          ],
          "key": 8,
          "snapshotUrls": [
            "https://i.gkd.li/i/24885716",
            "https://i.gkd.li/i/24888022"
          ],
          "exampleUrls": [
            "https://e.gkd.li/06ee129f-7eb8-4a51-913a-936084ac6c17",
            "https://e.gkd.li/7a540b2b-8871-4fa7-a492-7e697e76a111"
          ]
        }
      ]
    },
    {
      "name": "局部广告-阅读界面遇到广告自动翻页",
      "desc": "点击空白区域翻页 注意:翻页后无法翻回去",
      "actionCd": 8000,
      "actionDelay": 600,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"bookview\"] >8 @FrameLayout - [text^=\"广告\" || text$=\"赞助作者\" || text$=\"正版内容\" || text$=\"奖励\" || text$=\"耕耘\" || text^=\"助力作者\" || text$=\"免费阅读\"]",
          "activityIds": "com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/25118364",
            "https://i.gkd.li/i/25307532",
            "https://i.gkd.li/i/24882824",
            "https://i.gkd.li/i/26028026"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/25118320",
          "exampleUrls": "https://e.gkd.li/39ef092b-8e25-47eb-b0b5-8bc183488ca9"
        },
        {
          "anyMatches": [
            "@[text=\"\"][visibleToUser=true][index=parent.childCount.minus(1)] <<2 View <3 WebView[childCount=4] < * - RelativeLayout >3 [text*=\"获得奖励\"]",
            "@View[visibleToUser=true] - LinearLayout >2 [text*=\"获得奖励\"]"
          ],
          "activityIds": "com.qq.e.ads.PortraitADActivity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/25118663",
            "https://i.gkd.li/i/25967375",
            "https://i.gkd.li/i/25972909"
          ],
          "exampleUrls": "https://e.gkd.li/3ce04d0a-c2b9-4087-8af6-541a2178eedb"
        },
        {
          "matches": "@FrameLayout[index=parent.childCount.minus(1)] -2 FrameLayout > [text=\"关闭\"][clickable=true][visibleToUser=true]",
          "activityIds": [
            "com.qq.e.ads.PortraitADActivity",
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/25943380",
            "https://i.gkd.li/i/24909685",
            "https://i.gkd.li/i/25314833",
            "https://i.gkd.li/i/25118774"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/25314831",
          "exampleUrls": "https://e.gkd.li/18fb3451-3c24-4351-9fe9-16be681371d5"
        },
        {
          "matches": "[vid=\"ad_feedback\"] + [vid=\"ad_close\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.octopus.ad.internal.activity.EndingPageActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/25943482",
          "exampleUrls": "https://e.gkd.li/bb67cfcd-63b6-4398-a137-3e8c3ff2e9de"
        },
        {
          "matches": "@LinearLayout -4 [text=\"反馈\"] + [text^=\"奖励将于\"][clickable=true][visibleToUser=true]",
          "activityIds": "com.octopus.ad.AdActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/25943797",
          "exampleUrls": "https://e.gkd.li/ca9c2da1-d0e9-441e-b6b2-5d7b16a4f2e6"
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text=\"立即升级\"]",
            "[vid=\"dialog_public_top_bar_title_close\"][clickable=true][visibleToUser=true]"
          ],
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25121594",
          "exampleUrls": "https://e.gkd.li/a61a7c35-67f2-4294-bd89-cd12e4cb8b6c",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-会员广告",
      "desc": "点击取消",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"纯净阅读免广告\"] - @Image[width<62][height<62][visibleToUser=true] < View <2 View < WebView <<6 [vid=\"online_layout\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25243163",
          "exampleUrls": "https://e.gkd.li/11170624-a19c-4502-a982-9402a291eba6"
        },
        {
          "matches": "[text=\"别走！送你限时优惠\"] - @TextView < [childCount=8] -3 * <<2 [text=\"纯净阅读免广告\"] <<6 [vid=\"online_layout\"]",
          "actionCd": 300,
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/25243375",
          "exampleUrls": "https://e.gkd.li/422276f9-670c-450f-8fa7-33ab61e98882",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-退出阅读跳过加书架提示",
      "desc": "小说退出-加入书架提示-退出阅读",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text=\"加入书架，方便下次阅读\"]",
            "[text=\"退出阅读\"][clickable=true]"
          ],
          "activityIds": "com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT",
          "snapshotUrls": "https://i.gkd.li/i/25244345",
          "exampleUrls": "https://e.gkd.li/942bc38e-ca66-4f64-b37a-a5930b5c145a",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-红包弹窗",
      "desc": "x掉",
      "key": 5,
      "rules": [
        {
          "matches": [
            "[text$=\"红包\"]",
            "[vid=\"Id_withdraw_close\"][clickable=true]"
          ],
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25996310",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-书籍推荐",
      "desc": "x掉",
      "key": 6,
      "rules": [
        {
          "matches": [
            "[vid=\"tv_info\"][text$=\"万人在读\"]",
            "@[clickable=true] < [vid=\"toolbar\"]"
          ],
          "activityIds": "com.zhangyue.iReader.recommend.NovelRecommendActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25996367",
          "exampleUrls": "https://e.gkd.li/6d933308-c067-46af-8015-0e9178ce3f44",
          "key": 0
        }
      ]
    }
  ]
});
