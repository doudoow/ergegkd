// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "快手极速版",
  "id": "com.kuaishou.nebula",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"splash_skip_text\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17631261",
          "exampleUrls": "https://e.gkd.li/5d393b9b-c327-4429-9759-8c18a097453a",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-朋友推荐弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"popup_view\" || vid=\"content_wrapper\"] > [vid=\"close_btn\"][visibleToUser=true]",
          "activityIds": "com.yxcorp.gifshow.HomeActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14310639",
            "https://i.gkd.li/i/15061832"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-红包弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] -(1,2) ViewGroup > [text=\"点击立得奖励\" || text^=\"邀请\"]",
          "activityIds": "com.yxcorp.gifshow.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14879912",
            "https://i.gkd.li/i/15061662",
            "https://i.gkd.li/i/25200787"
          ],
          "exampleUrls": "https://m.gkd.li/101449500/f7bbd1db-f519-4ff9-96cb-4cb5b2f483a2",
          "key": 0
        },
        {
          "matches": "@ImageView[clickable=true] -n ViewGroup >2 [text~=\"[0-9]+.?[0-9]*\"] + ViewGroup > [text$=\"元\"]",
          "activityIds": "com.yxcorp.gifshow.HomeActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14879912",
            "https://i.gkd.li/i/15061662"
          ]
        },
        {
          "matches": "@[clickable=true][width<128][index=parent.childCount.minus(1)] -(1,2) ViewGroup > [text=\"点击立得奖励\" || text^=\"邀请\" || text=\"红包\"]",
          "activityIds": [
            "com.yxcorp.gifshow.HomeActivity",
            "com.yxcorp.plugin.search.SearchActivity"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/14879912",
            "https://i.gkd.li/i/15061662",
            "https://i.gkd.li/i/25200787",
            "https://i.gkd.li/i/26675794"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/26678562",
          "exampleUrls": "https://m.gkd.li/101449500/f7bbd1db-f519-4ff9-96cb-4cb5b2f483a2"
        },
        {
          "matches": "@ImageView[clickable=true][width<107 && height<107][index=0] + TextView[text$=\"红包\"][text.length<10]",
          "activityIds": "com.yxcorp.gifshow.HomeActivity",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/26678562",
            "https://i.gkd.li/i/28514398"
          ]
        },
        {
          "matches": "@ImageView[clickable=true] <(2,3) ViewGroup >(1,4) [text*=\"红包\"]",
          "activityIds": "com.yxcorp.gifshow.HomeActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/14879912",
            "https://i.gkd.li/i/15061662"
          ],
          "exampleUrls": "https://m.gkd.li/101449500/f7bbd1db-f519-4ff9-96cb-4cb5b2f483a2"
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"close_icon\"][visibleToUser=true]",
          "activityIds": "com.yxcorp.gifshow.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15747381",
          "exampleUrls": "https://m.gkd.li/57941037/12059549-21c2-47b7-9acf-ec221cc14f25",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-悬浮广告",
      "desc": "①点击x掉 ②点击[确定]",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[vid=\"close_pendant\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/23431963",
          "exampleUrls": "https://e.gkd.li/8f56e57f-b2d7-457c-8376-6351568ec14a"
        },
        {
          "matches": "[text=\"确定\"][visibleToUser=true]",
          "preKeys": [
            2
          ],
          "snapshotUrls": "https://i.gkd.li/i/23431964",
          "exampleUrls": "https://e.gkd.li/89294dbb-4398-4561-91b7-4943ec7c98c7",
          "key": 1
        },
        {
          "matches": "[vid=\"close_icon\" || vid=\"close_pendant\"][visibleToUser=true]",
          "key": 2,
          "name": "①点击x掉",
          "snapshotUrls": [
            "https://i.gkd.li/i/15747381",
            "https://i.gkd.li/i/23431963"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/12059549-21c2-47b7-9acf-ec221cc14f25"
        },
        {
          "matches": "[text=\"确定\"][visibleToUser=true]",
          "preKeys": [
            2,
            3
          ],
          "key": 3,
          "name": "②点击[确定]",
          "snapshotUrls": [
            "https://i.gkd.li/i/23431964",
            "https://i.gkd.li/i/29888736"
          ],
          "exampleUrls": "https://e.gkd.li/89294dbb-4398-4561-91b7-4943ec7c98c7"
        }
      ]
    },
    {
      "name": "评价提示",
      "desc": "x掉",
      "key": 5,
      "rules": [
        {
          "matches": "@[vid=\"close\"][clickable=true] +2 * > [text*=\"给个好评吧\"]",
          "activityIds": "com.yxcorp.gifshow.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/22851896",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-朋友推荐弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "@[vid=\"close_btn\"] <n * > [text=\"朋友推荐\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15061832"
        }
      ]
    },
    {
      "name": "全屏广告-个人主页弹窗",
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[text*=\"挂件\"] - [vid=\"dialog_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/30645708",
          "exampleUrls": "https://e.gkd.li/5379291d-3f11-46a9-a4a3-ccba8cc5a7d6"
        },
        {
          "matches": "[text^=\"恭喜\"] -n [text=\"不再提醒\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/30645964",
          "exampleUrls": "https://e.gkd.li/381e4649-718e-40e7-9d5f-4d2dd7ad8255"
        }
      ]
    },
    {
      "name": "功能类-刷到推广视频时[上滑]",
      "desc": "广告/购物/游戏/汽车/咨询/应用/一键出片/品牌活动/测一测 等推广视频",
      "key": 8,
      "rules": [
        {
          "anyMatches": [
            "[vid=\"ad_detail_content_layout\"][visibleToUser=true]",
            "[vid=\"plc_tv_tag_label\"][text$=\"元\" || text$=\"人买过\"][visibleToUser=true]",
            "[vid=\"plc_tv_biz_text\"][text=\"游戏\" || text=\"小游戏\" || text=\"购物\" || text=\"购买\" || text=\"汽车\" || text=\"咨询\" || text=\"应用\" || text=\"品牌活动\" || text=\"一键出片\" || text=\"测一测\"][visibleToUser=true]"
          ],
          "actionDelay": 200,
          "actionCd": 300,
          "activityIds": "com.yxcorp.gifshow.HomeActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/29213590",
            "https://i.gkd.li/i/33927176",
            "https://i.gkd.li/i/33969241",
            "https://i.gkd.li/i/29029850",
            "https://i.gkd.li/i/29029852",
            "https://i.gkd.li/i/32701451",
            "https://i.gkd.li/i/29029853",
            "https://i.gkd.li/i/29030087",
            "https://i.gkd.li/i/29031982",
            "https://i.gkd.li/i/30466714",
            "https://i.gkd.li/i/29031736",
            "https://i.gkd.li/i/29031815",
            "https://i.gkd.li/i/30347040"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/29032024",
            "https://i.gkd.li/i/29032119"
          ],
          "exampleUrls": "https://e.gkd.li/629b0f6b-49e7-4ca9-8487-5df7d530756f",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-用户资料页广告",
      "desc": "①点击x掉 ②点击[不感兴趣] ③选一个[理由]",
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] < [index=3] - [visibleToUser=true] > [text=\"下载\" || text=\"打开\" || text=\"查看\"]",
          "key": 0,
          "name": "①点击x掉",
          "snapshotUrls": [
            "https://i.gkd.li/i/30548229",
            "https://i.gkd.li/i/30548766",
            "https://i.gkd.li/i/30548907"
          ],
          "exampleUrls": "https://e.gkd.li/bce8277d-c2d7-4e5b-8b15-84c7338acfa3"
        },
        {
          "matches": "@[clickable=true] >2 [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "②点击[不感兴趣]",
          "snapshotUrls": "https://i.gkd.li/i/30548232",
          "exampleUrls": "https://e.gkd.li/640b5e7b-2960-4791-add6-a07d6cf84fea"
        },
        {
          "matches": "@[clickable=true] >2 [text=\"不喜欢该位置展示广告\"]",
          "preKeys": [
            1
          ],
          "key": 2,
          "name": "③选一个[理由]",
          "snapshotUrls": "https://i.gkd.li/i/30548235",
          "exampleUrls": "https://e.gkd.li/efe7800d-896d-4503-8b41-52c5d18775a6"
        }
      ]
    },
    {
      "name": "功能类-刷到直播时[上滑]",
      "desc": "不想看直播,划掉",
      "key": 10,
      "rules": [
        {
          "matches": "[vid=\"layout_root_hot_live_play\" || text=\"直播中\" || text=\"直播卖货\"][visibleToUser=true]",
          "actionDelay": 200,
          "actionCd": 300,
          "activityIds": "com.yxcorp.gifshow.HomeActivity",
          "matchRoot": true,
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/29029433",
            "https://i.gkd.li/i/29211656",
            "https://i.gkd.li/i/30167631"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 11,
      "rules": [
        {
          "matches": "[id=\"com.kuaishou.nebula:id/positive\"][text=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"com.kuaishou.nebula:id/positive\"][text=\"我知道了\"]",
          "key": 0
        }
      ]
    }
  ]
});
