// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "NGA玩家社区",
  "id": "gov.pianzong.androidnga",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "matchRoot": true,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"tv_tiaoguo\" || vid=\"iv_tg_ad\" || vid=\"tv_skip\"][visibleToUser=true]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13798686",
            "https://i.gkd.li/i/17082872",
            "https://i.gkd.li/i/17082897",
            "https://i.gkd.li/i/17082899",
            "https://i.gkd.li/i/23432463"
          ],
          "exampleUrls": "https://e.gkd.li/d7520bc7-588b-4654-b6aa-d2736ac200bf",
          "key": 0
        },
        {
          "matches": "[vid=\"tv_tiaoguo\" || vid=\"iv_tg_ad\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/17082872",
            "https://i.gkd.li/i/17082897",
            "https://i.gkd.li/i/17082899",
            "https://i.gkd.li/i/13798686"
          ],
          "exampleUrls": "https://e.gkd.li/d7520bc7-588b-4654-b6aa-d2736ac200bf",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-首页-推荐-卡片广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"gov.pianzong.androidnga:id/iv_close_ad\"]",
          "activityIds": "com.donews.nga.activitys.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12482727",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_close_ad\"]",
          "activityIds": "com.donews.nga.activitys.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12482727",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-话题-帖子列表广告",
      "desc": "点击卡片x按钮关闭广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "Image[text=\"ams_icon_single_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12655805"
        },
        {
          "matches": "TextView[text!=null] - ImageView < LinearLayout[childCount=2] + FrameLayout[childCount=1] > ImageView[id=null]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12706140"
        },
        {
          "matches": "[text=\"广告\"] - [id=\"gov.pianzong.androidnga:id/iv_information_ad_close\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13303236"
        },
        {
          "matches": "[id=\"gov.pianzong.androidnga:id/rv_post_list\"] > FrameLayout *[childCount=1 || childCount=3] > *[childCount<=4] > [text!=\"\" && text!=null] +(1,2) *[childCount<=3 && childCount!=2] > [name*=\"Image\" || name*=\"TextView\"][text!=\"\"][index=0 || index>1][visibleToUser=true]",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/12655805",
            "https://i.gkd.li/i/12706140",
            "https://i.gkd.li/i/14123759",
            "https://i.gkd.li/i/14155652"
          ]
        },
        {
          "matches": "[id=\"gov.pianzong.androidnga:id/iv_information_ad_close\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/13303236"
        },
        {
          "matches": "[text=\"广告\"] - [vid=\"iv_information_ad_close\"]",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/13303236"
        }
      ]
    },
    {
      "name": "局部广告-社区-顶部广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"gov.pianzong.androidnga:id/iv_close_community_ad\"]",
          "activityIds": "com.donews.nga.activitys.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/12706132"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"iv_close_community_ad\"]",
          "activityIds": "com.donews.nga.activitys.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/12706132"
          ],
          "key": 1
        },
        {
          "matches": "[id=\"gov.pianzong.androidnga:id/iv_close_community_ad\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 4,
      "rules": [
        {
          "matches": "[vid=\"iv_homedialog_close\" || vid=\"iv_close\"][visibleToUser=true]",
          "activityIds": "com.donews.nga.activitys.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14126934",
            "https://i.gkd.li/i/21158044"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/346f4485-82a7-4cf3-aab3-1fe6c9bb23af",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_homedialog_close\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14126934",
          "exampleUrls": "https://m.gkd.li/57941037/346f4485-82a7-4cf3-aab3-1fe6c9bb23af",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-评论区底部广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"advertisementBottom\"][visibleToUser=true]",
          "position": {
            "left": "width * 0.9629",
            "top": "width * 0.0472"
          },
          "activityIds": "gov.pianzong.androidnga.activity.forumdetail.ArticleDetailActivity",
          "snapshotUrls": "https://i.gkd.li/i/17348441",
          "excludeSnapshotUrls": "https://i.gkd.li/i/17348415",
          "exampleUrls": "https://e.gkd.li/589a4441-4be0-4ebc-90f5-d0dc5cfc84ff",
          "key": 0
        },
        {
          "matches": "[id=\"advertisementBottom\"][visibleToUser=true]",
          "position": {
            "left": "width * 0.9629",
            "top": "width * 0.0472"
          },
          "activityIds": ".activity.forumdetail.ArticleDetailActivity",
          "snapshotUrls": "https://i.gkd.li/i/17348441",
          "excludeSnapshotUrls": "https://i.gkd.li/i/17348415",
          "exampleUrls": "https://e.gkd.li/589a4441-4be0-4ebc-90f5-d0dc5cfc84ff",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 6,
      "rules": [
        {
          "matches": "[vid=\"iv_close_notification_guide\"][visibleToUser=true]",
          "activityIds": "com.donews.nga.activitys.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24105952",
          "exampleUrls": "https://e.gkd.li/c6be338c-2a1b-4123-bd8c-51fa35d2b8f2",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-社区-顶部广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"gov.pianzong.androidnga:id/iv_close_community_ad\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "desc": "点击X",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[id=\"gov.pianzong.androidnga:id/iv_homedialog_close\"]",
          "activityIds": "com.hihonor.android.launcher.unihome.UniHomeLauncher",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14126934",
          "exampleUrls": "https://m.gkd.li/57941037/346f4485-82a7-4cf3-aab3-1fe6c9bb23af",
          "key": 0
        }
      ]
    },
    {
      "name": "话题-帖子列表广告",
      "desc": "点击卡片x按钮关闭广告",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "Image[text=\"ams_icon_single_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12655805"
          ],
          "key": 0
        },
        {
          "matches": "TextView[text!=null] - ImageView < LinearLayout[childCount=2] + FrameLayout[childCount=1] > ImageView[id=null]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12706140"
          ],
          "key": 1
        },
        {
          "matches": "[text=\"广告\"] - [id=\"gov.pianzong.androidnga:id/iv_information_ad_close\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13303236"
          ],
          "key": 2
        }
      ]
    },
    {
      "name": "社区-顶部广告",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "[id=\"gov.pianzong.androidnga:id/iv_close_community_ad\"]",
          "key": 0
        }
      ]
    }
  ]
});
