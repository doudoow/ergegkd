// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "我的听书",
  "id": "com.github.eprendre.tingshu",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "key": 0,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]",
          "activityIds": ".ui.search.AggregateSearchActivity",
          "key": 0,
          "name": "搜索结果底部/播放页面卡片广告",
          "snapshotUrls": "https://i.gkd.li/i/12783466"
        },
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] - LinearLayout[childCount=2] > [text=\"下载应用\" || text=\"立即下载\" || text=\"查看详情\" || text=\"领取优惠\" || text=\"进入小程序\" || text=\"了解更多\"][visibleToUser=true]",
          "activityIds": ".ui.play.PlayerActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13334850",
            "https://i.gkd.li/i/13446735"
          ],
          "exampleUrls": "https://e.gkd.li/d3d33d4f-4c15-45a0-9e86-0c1ca2ecc7c9"
        },
        {
          "matches": "ImageView[childCount=0] < @ViewGroup[clickable=true][childCount=1] < ViewGroup[childCount=1] <2 ViewGroup - ViewGroup >2 [text=\"广告\"]",
          "activityIds": ".ui.play.PlayerActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/23407169",
          "exampleUrls": "https://e.gkd.li/055cfec1-d022-4e46-83f3-bc4c2860f919"
        },
        {
          "matches": "@[id=\"cj.mobile.wm.allmodules:id/wm_express_close_iv\"] - LinearLayout > [text=\"广告\"]",
          "activityIds": ".ui.play.PlayerActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/23475820",
          "exampleUrls": "https://e.gkd.li/0174efc4-5eb6-4224-a213-e5c46d421a16"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text=\"广告\"]",
            "@ImageView[clickable=true] - [text=\"|\"] - [text$=\"s\"]"
          ],
          "activityIds": "com.github.eprendre.tingshu.ui.SplashActivity",
          "fastQuery": true,
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13625303"
        },
        {
          "matches": [
            "ViewGroup[childCount=2] > [text=\"广告\"]",
            "ViewGroup[childCount=3] > TextView + TextView + ImageView[clickable=true]"
          ],
          "activityIds": "com.github.eprendre.tingshu.ui.SplashActivity",
          "key": 1,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13625303"
        },
        {
          "matches": [
            "[text=\"广告\"]",
            "@ImageView[clickable=true] - [text=\"|\"] - [text$=\"s\"]"
          ],
          "activityIds": ".ui.SplashActivity",
          "fastQuery": true,
          "key": 2,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/i/13625303"
        }
      ]
    },
    {
      "name": "分段广告-播放页卡片广告",
      "desc": "点击关闭-点击不感兴趣",
      "key": 2,
      "rules": [
        {
          "matches": "@[desc=\"close\"][visibleToUser=true] + [desc=\"ad_logo\"] <<n [vid=\"ad_container\"]",
          "activityIds": ".ui.play.PlayerActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/17892446",
          "exampleUrls": "https://e.gkd.li/357bf940-7a93-4769-8c6d-480985b72901"
        },
        {
          "matches": "@[text=\"反馈\"] <2 View + View >3 [visibleToUser=true][text=\"广告\"] <<n [vid=\"ad_container\"]",
          "activityIds": ".ui.play.PlayerActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/18057482",
          "exampleUrls": "https://e.gkd.li/664d87f3-9571-4f48-ae01-4cd2a2634bc4"
        },
        {
          "matches": "@Image[childCount=0][visibleToUser=true][width<50 && height<50] < View[childCount=1] <n View >4 [visibleToUser=true][text=\"广告\"] <<n [vid=\"ad_container\"]",
          "activityIds": ".ui.play.PlayerActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/18058170",
            "https://i.gkd.li/i/18095619"
          ],
          "exampleUrls": "https://e.gkd.li/a2408a2d-7d84-4658-b660-ce8a4c849190"
        },
        {
          "matches": "@[clickable=true] > [text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1,
            2
          ],
          "activityIds": [
            "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
            ".ui.play.PlayerActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/17892449",
            "https://i.gkd.li/i/18057440",
            "https://i.gkd.li/i/18058170"
          ],
          "exampleUrls": "https://e.gkd.li/7ce6d9c4-c77a-4655-91c2-97e1987f0914",
          "key": 3
        }
      ]
    },
    {
      "name": "综合广告-卡片式广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]",
          "activityIds": [
            "com.github.eprendre.tingshu.ui.search.AggregateSearchActivity",
            "com.github.eprendre.tingshu.ui.play.PlayerActivity"
          ],
          "key": 0,
          "name": "局部广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12783466",
            "https://i.gkd.li/i/13334850",
            "https://i.gkd.li/i/13446735"
          ]
        },
        {
          "matches": "@[desc=\"close\"] <<n [vid=\"ad_container\"]",
          "activityIds": "com.github.eprendre.tingshu.ui.play.PlayerActivity",
          "fastQuery": true,
          "key": 1,
          "name": "分段广告-1",
          "snapshotUrls": "https://i.gkd.li/i/18048890"
        },
        {
          "matches": "@* > [text=\"不感兴趣\"]",
          "preKeys": 1,
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
          "fastQuery": true,
          "key": 2,
          "name": "分段广告-2",
          "snapshotUrls": "https://i.gkd.li/i/18048901"
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]",
          "activityIds": "com.github.eprendre.tingshu.ui.play.PlayerActivity",
          "key": 0,
          "name": "搜索结果底部/播放页面广告卡片",
          "snapshotUrls": [
            "https://i.gkd.li/import/12783466",
            "https://i.gkd.li/import/13334850",
            "https://i.gkd.li/import/13446735"
          ]
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]",
          "activityIds": "com.github.eprendre.tingshu.ui.play.PlayerActivity",
          "key": 0,
          "name": "搜索结果底部/播放页面广告卡片",
          "snapshotUrls": [
            "https://i.gkd.li/import/12783466",
            "https://i.gkd.li/import/13334850",
            "https://i.gkd.li/import/13446735"
          ]
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": [
            "ViewGroup[childCount=2] > [text=\"广告\"]",
            "ViewGroup[childCount=3] > TextView + TextView + ImageView[clickable=true]"
          ],
          "activityIds": "com.github.eprendre.tingshu.ui.SplashActivity",
          "key": 0,
          "name": "快手广告",
          "snapshotUrls": "https://i.gkd.li/import/13625303"
        }
      ]
    }
  ]
});
