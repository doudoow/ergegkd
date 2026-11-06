// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "爱奇艺",
  "id": "com.qiyi.video",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@[clickable=true] >(1,2) [text=\"关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13160866",
            "https://i.gkd.li/i/13379565",
            "https://i.gkd.li/i/18135566"
          ],
          "key": 0
        },
        {
          "matches": "@LinearLayout > [text=\"关闭\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-顶部卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "anyMatches": [
            "@[vid=\"unused_res_a\"][clickable=true] > [vid=\"close\"][visibleToUser=true]",
            "@[vid=\"unused_res_a\"][clickable=true] - [text=\"广告\"][visibleToUser=true]"
          ],
          "activityIds": [
            "org.qiyi.android.video.MainActivity",
            "org.qiyi.video.PhoneCloudRecordActivity",
            ".qysplashscreen.hotlaunch.HotSplashScreenActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12495050",
            "https://i.gkd.li/i/16301287",
            "https://i.gkd.li/i/24312658",
            "https://i.gkd.li/i/24314237",
            "https://i.gkd.li/i/24364968"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/24324750",
          "exampleUrls": "https://e.gkd.li/69dd60a4-3038-4a8c-8501-33a2d36b3283",
          "key": 0
        },
        {
          "matches": "@[vid=\"unused_res_a\"][clickable=true] > [vid=\"close\"]",
          "activityIds": [
            "org.qiyi.android.video.MainActivity",
            "org.qiyi.video.PhoneCloudRecordActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12495050",
            "https://i.gkd.li/i/16301287"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.qiyi.video:id/cancel_btn\"][text=\"暂时不要\"]",
          "activityIds": "org.qiyi.android.video.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12838152",
          "key": 0
        },
        {
          "matches": "[vid=\"cancel_btn\"][text=\"暂时不要\"]",
          "activityIds": "org.qiyi.android.video.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12838152",
          "key": 1
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
          "matches": "[text=\"暂不升级\"][visibleToUser=true]",
          "activityIds": [
            "org.qiyi.android.video.MainActivity",
            "org.qiyi.android.search.view.PhoneSearchActivity",
            ".qysplashscreen.hotlaunch.HotSplashScreenActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12838158",
            "https://i.gkd.li/i/13684912",
            "https://i.gkd.li/i/19049372"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.qiyi.video:id/cancel_btn\"][text=\"暂不升级\"]",
          "activityIds": [
            "org.qiyi.android.video.MainActivity",
            "org.qiyi.android.search.view.PhoneSearchActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/12838158",
            "https://i.gkd.li/i/13684912"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-播放页-插入广告",
      "desc": "视频播放前或播放中途插入的广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@[clickable=true] > [text^=\"关闭广告\"]",
          "activityIds": "org.iqiyi.video.activity.PlayerActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/18134230",
          "exampleUrls": "https://e.gkd.li/04622996-5a6d-4577-a1cb-adcae37f62b6"
        },
        {
          "matches": "[vid=\"btn_ads_img_pause_close\"][visibleToUser=true]",
          "activityIds": "org.iqiyi.video.activity.PlayerActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/18135562",
          "exampleUrls": "https://e.gkd.li/2cc7688b-f802-4ebe-9eb6-6b9bc6ed5633"
        }
      ]
    },
    {
      "name": "未分类-青少年弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.qiyi.video:id/confirm_btn\"][text=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/i/13546555",
          "exampleUrls": "https://m.gkd.li/6328439/d69e92f8-8304-4296-909a-11730e408a16",
          "key": 0
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
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.qiyi.video:id/cancel_btn\"][text=\"暂不升级\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-播放页-插入广告",
      "desc": "视频播放前或播放中途插入的广告。默认关闭。",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "@RelativeLayout[id=\"com.qiyi.video:id/unused_res_a\"] > TextView[text=\"关闭广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13536669",
            "https://i.gkd.li/i/13536703"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.qiyi.video:id/confirm_btn\"][text=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/import/13546555",
          "exampleUrls": "https://m.gkd.li/6328439/d69e92f8-8304-4296-909a-11730e408a16",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "[id=\"com.qiyi.video:id/cancel_btn\"][text=\"暂不升级\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-播放页-插入广告",
      "desc": "视频播放前或播放中途插入的广告。默认关闭。",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "@RelativeLayout[id=\"com.qiyi.video:id/unused_res_a\"] > TextView[text=\"关闭广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13536669",
            "https://i.gkd.li/import/13536703"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "青少年弹窗",
      "enable": false,
      "quickFind": true,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.qiyi.video:id/confirm_btn\"][text=\"我知道了\"]",
          "snapshotUrls": "https://i.gkd.li/import/13546555",
          "exampleUrls": "https://m.gkd.li/6328439/d69e92f8-8304-4296-909a-11730e408a16",
          "key": 0
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
      "key": 18,
      "rules": [
        {
          "matches": "[id=\"com.qiyi.video:id/cancel_btn\"][text=\"暂不升级\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "播放页-插入广告",
      "desc": "视频播放前或播放中途插入的广告。默认关闭。",
      "enable": false,
      "key": 19,
      "rules": [
        {
          "matches": "@RelativeLayout[id=\"com.qiyi.video:id/unused_res_a\"] > TextView[text=\"关闭广告\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/13536669",
            "https://i.gkd.li/import/13536703"
          ],
          "key": 0
        }
      ]
    }
  ]
});
