// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "奇妙应用",
  "id": "com.magicalstory.AppStore",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[vid=\"itemUser\"][visibleToUser=true]",
            "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[childCount=0][visibleToUser=true] <<n [vid=\"bannerLayout\"]"
          ],
          "actionDelay": 300,
          "activityIds": [
            "com.magicalstory.AppStore.appDetails.AppDetailsActivity",
            "com.magicalstory.AppStore.main.fragments.square.section.forumDetailsActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "name": "软件详情页",
          "snapshotUrls": [
            "https://i.gkd.li/i/14771070",
            "https://i.gkd.li/i/14771175"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/14771110",
            "https://i.gkd.li/i/17879219"
          ]
        },
        {
          "matches": "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView < FrameLayout +2 *[visibleToUser=true]",
          "activityIds": "com.magicalstory.AppStore.search.searchActivity",
          "key": 1,
          "name": "搜索页面",
          "snapshotUrls": "https://i.gkd.li/i/14771429"
        },
        {
          "matches": "[vid=\"button_close_ad\"]",
          "activityIds": "com.magicalstory.AppStore.main.MainActivity",
          "fastQuery": true,
          "key": 2,
          "name": "首页",
          "snapshotUrls": "https://i.gkd.li/i/14668408"
        },
        {
          "matches": [
            "[vid=\"title_browse\"][visibleToUser=true]",
            "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView <<n [vid=\"banner\"]"
          ],
          "actionDelay": 300,
          "activityIds": "com.magicalstory.AppStore.main.fragments.square.section.forumDetailsActivity",
          "fastQuery": true,
          "key": 3,
          "name": "评论区顶部",
          "snapshotUrls": [
            "https://i.gkd.li/i/14758809",
            "https://i.gkd.li/i/14783076"
          ]
        },
        {
          "matches": [
            "[vid=\"itemUser\"][visibleToUser=true]",
            "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[childCount=0][visibleToUser=true] <<n [vid=\"bannerLayout\"]"
          ],
          "actionDelay": 300,
          "activityIds": [
            ".appDetails.AppDetailsActivity",
            ".main.fragments.square.section.forumDetailsActivity"
          ],
          "fastQuery": true,
          "key": 4,
          "name": "软件详情页",
          "snapshotUrls": [
            "https://i.gkd.li/i/14771070",
            "https://i.gkd.li/i/14771175"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/14771110",
            "https://i.gkd.li/i/17879219"
          ]
        },
        {
          "matches": "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView < FrameLayout +2 *[visibleToUser=true]",
          "activityIds": ".search.searchActivity",
          "key": 5,
          "name": "搜索页面",
          "snapshotUrls": "https://i.gkd.li/i/14771429"
        },
        {
          "matches": "[vid=\"button_close_ad\"]",
          "activityIds": ".main.MainActivity",
          "fastQuery": true,
          "key": 6,
          "name": "首页",
          "snapshotUrls": "https://i.gkd.li/i/14668408"
        },
        {
          "matches": [
            "[vid=\"title_browse\"][visibleToUser=true]",
            "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView <<n [vid=\"banner\"]"
          ],
          "actionDelay": 300,
          "activityIds": ".main.fragments.square.section.forumDetailsActivity",
          "fastQuery": true,
          "key": 7,
          "name": "评论区顶部",
          "snapshotUrls": [
            "https://i.gkd.li/i/14758809",
            "https://i.gkd.li/i/14783076"
          ]
        }
      ]
    },
    {
      "name": "通知提示-公告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"隐藏\"][visibleToUser=true]",
          "activityIds": ".main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/17892865",
          "key": 0
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
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.magicalstory.AppStore:id/tv_update\"] <2 * + * > [id=\"com.magicalstory.AppStore:id/iv_close\"]",
          "activityIds": "com.cretin.www.cretinautoupdatelibrary.activity.UpdateType10Activity",
          "snapshotUrls": "https://i.gkd.li/i/13459373",
          "key": 0
        },
        {
          "matches": "[vid=\"tv_update\"] <2 * + * > [vid=\"iv_close\"]",
          "activityIds": "com.cretin.www.cretinautoupdatelibrary.activity.UpdateType10Activity",
          "snapshotUrls": "https://i.gkd.li/i/13459373",
          "key": 1
        },
        {
          "matches": "[id=\"com.magicalstory.AppStore:id/tv_update\"] <2 * + * > [id=\"com.magicalstory.AppStore:id/iv_close\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-首页横幅广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"item_broadcast\"] >2 [vid=\"button_close\"][visibleToUser=true]",
          "activityIds": ".main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20259691",
          "exampleUrls": "https://e.gkd.li/c885f80c-9fd5-4fcc-9117-e8fed04ee300",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@ImageView < FrameLayout[childCount=1] <3 [childCount=5] <<n [vid=\"bannerLayout\"] + [vid=\"itemUser\"][visibleToUser=true]",
          "actionDelay": 300,
          "activityIds": [
            "com.magicalstory.AppStore.appDetails.AppDetailsActivity",
            "com.magicalstory.AppStore.main.fragments.square.section.forumDetailsActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "name": "软件详情页",
          "snapshotUrls": [
            "https://i.gkd.li/i/14771070",
            "https://i.gkd.li/i/14771175",
            "https://i.gkd.li/i/14771110"
          ]
        },
        {
          "matches": "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView < FrameLayout +2 *[visibleToUser=true]",
          "activityIds": "com.magicalstory.AppStore.search.searchActivity",
          "key": 1,
          "name": "搜索页面",
          "snapshotUrls": "https://i.gkd.li/i/14771429"
        },
        {
          "matches": "[vid=\"button_close_ad\"]",
          "activityIds": "com.magicalstory.AppStore.main.MainActivity",
          "fastQuery": true,
          "key": 2,
          "name": "首页",
          "snapshotUrls": "https://i.gkd.li/i/14668408"
        },
        {
          "matches": "@ImageView < FrameLayout[childCount=1] <<n [vid=\"banner\"] +2 [vid=\"title_browse\"][visibleToUser=true]",
          "actionDelay": 300,
          "activityIds": "com.magicalstory.AppStore.main.fragments.square.section.forumDetailsActivity",
          "fastQuery": true,
          "key": 3,
          "name": "评论区顶部",
          "snapshotUrls": [
            "https://i.gkd.li/i/14758809",
            "https://i.gkd.li/i/14783076"
          ]
        }
      ]
    },
    {
      "name": "通知提示-公告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[text*=\"隐藏\"][id=\"com.magicalstory.AppStore:id/btn_selectNegative\"]",
          "snapshotUrls": "https://i.gkd.li/i/13437553",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-签到页-自动签到",
      "desc": "签到页自动点击【签到】按钮",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[text=\"签到\"][vid=\"button\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-搜索-卡片式广告",
      "enable": false,
      "forcedTime": 1000,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "@ImageView[visibleToUser=true] < FrameLayout <n [childCount=5] < * < * < * < * < * < [id=\"com.magicalstory.AppStore:id/banner2\"]",
          "activityIds": [
            ".search.searchActivity",
            ".main.fragments.square.section.searchPostActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/17618529",
            "https://i.gkd.li/i/17618518"
          ],
          "key": 0
        },
        {
          "matches": "@[id=\"com.magicalstory.AppStore:id/button_close_ad\"] - [id=\"com.magicalstory.AppStore:id/banner_ad2\"]",
          "activityIds": ".main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/17618820",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-公告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": [
            "[id=\"com.magicalstory.AppStore:id/txt_dialog_title\"][text=\"公告\"]",
            "[id=\"com.magicalstory.AppStore:id/btn_selectNegative\"][text=\"隐藏\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/import/13437553",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-广场-流式广告",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": "@ImageView[visibleToUser=true] < FrameLayout[index=3] <4 FrameLayout <3 LinearLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout <2 [vid=\"recyclerView\"]",
          "snapshotUrls": "https://i.gkd.li/i/20585709",
          "key": 0
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": [
            "[id^=\"com.magicalstory.AppStore:id/banner\"]",
            "FrameLayout[childCount=5] > FrameLayout[childCount=1] > ImageView[visibleToUser=true]"
          ],
          "activityIds": [
            "com.magicalstory.AppStore.search.searchActivity",
            "com.magicalstory.AppStore.appDetails.AppDetailsActivity",
            "com.magicalstory.AppStore.main.fragments.square.section.forumDetailsActivity"
          ],
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13185746",
            "https://i.gkd.li/import/13413482",
            "https://i.gkd.li/import/13416979",
            "https://i.gkd.li/import/13527698",
            "https://i.gkd.li/import/13759492"
          ]
        },
        {
          "matches": "[id=\"com.magicalstory.AppStore:id/button_close_ad\"]",
          "activityIds": "com.magicalstory.AppStore.main.MainActivity",
          "quickFind": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13443417"
        }
      ]
    },
    {
      "name": "公告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 11,
      "rules": [
        {
          "matches": "[text*=\"隐藏\"][id=\"com.magicalstory.AppStore:id/btn_selectNegative\"]",
          "snapshotUrls": "https://i.gkd.li/import/13437553",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"com.magicalstory.AppStore:id/tv_update\"] <2 * + * > [id=\"com.magicalstory.AppStore:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "搜索页-卡片广告",
      "desc": "腾讯广告",
      "enable": false,
      "actionMaximum": 1,
      "key": 13,
      "rules": [
        {
          "matches": "FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView[width<80][height<80]",
          "key": 0
        }
      ]
    }
  ]
});
