// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "掌通家园",
  "id": "com.seebaby",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@[id=\"com.seebaby:id/btn_later\"] + [text$=\"新版本\"]",
          "activityIds": ".login.ui.activity.LauncherActivity",
          "snapshotUrls": "https://i.gkd.li/i/12705351",
          "key": 0
        },
        {
          "matches": "@[id=\"com.seebaby:id/btn_later\"] + [text$=\"新版本\"]",
          "key": 1
        },
        {
          "matches": "@[vid=\"btn_later\"] + [text$=\"新版本\"]",
          "activityIds": ".login.ui.activity.LauncherActivity",
          "snapshotUrls": "https://i.gkd.li/i/12705351",
          "key": 2
        }
      ]
    },
    {
      "name": "分段广告-信息流、文章底部广告",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.seebaby:id/tv_ad_detail\"] + [id=\"com.seebaby:id/ic_delad\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12705353",
            "https://i.gkd.li/i/12705363"
          ]
        },
        {
          "matches": "[id=\"com.seebaby:id/ad_tv_advertiser\"] + [id=\"com.seebaby:id/ad_iv_close\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12705372"
        },
        {
          "matches": "[id=\"com.seebaby:id/tv_un_instrest\"]",
          "preKeys": [
            3,
            4
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12705358"
        },
        {
          "matches": "[vid=\"tv_ad_detail\"] + [vid=\"ic_delad\"]",
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/12705353",
            "https://i.gkd.li/i/12705363"
          ]
        },
        {
          "matches": "[vid=\"ad_tv_advertiser\"] + [vid=\"ad_iv_close\"]",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/12705372"
        },
        {
          "matches": "[vid=\"tv_un_instrest\"]",
          "preKeys": [
            3,
            4
          ],
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/12705358"
        }
      ]
    },
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"ranfeng_widget_iv_close\" || vid=\"tianmu_widget_iv_close\"][clickable=true]",
          "activityIds": [
            "com.ranfeng.adranfengsdk.biz.activity.InterstitialActivity",
            "com.tianmu.biz.activity.InterstitialActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/23981370",
            "https://i.gkd.li/i/24360340"
          ],
          "exampleUrls": "https://e.gkd.li/0ae7b19f-6fa1-4eaf-a5b9-0dfb214541b4",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-信息流、文章底部广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.seebaby:id/tv_ad_detail\"] + [id=\"com.seebaby:id/ic_delad\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12705353",
            "https://i.gkd.li/i/12705363"
          ]
        },
        {
          "matches": "[id=\"com.seebaby:id/ad_tv_advertiser\"] + [id=\"com.seebaby:id/ad_iv_close\"]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12705372"
          ]
        },
        {
          "matches": "[id=\"com.seebaby:id/tv_un_instrest\"]",
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12705358"
          ]
        }
      ]
    },
    {
      "name": "局部广告-信息流、文章底部广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.seebaby:id/tv_ad_detail\"] + [id=\"com.seebaby:id/ic_delad\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12705353",
            "https://i.gkd.li/import/12705363"
          ]
        },
        {
          "matches": "[id=\"com.seebaby:id/ad_tv_advertiser\"] + [id=\"com.seebaby:id/ad_iv_close\"]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12705372"
          ]
        },
        {
          "matches": "[id=\"com.seebaby:id/tv_un_instrest\"]",
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/12705358"
          ]
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@[id=\"com.seebaby:id/btn_later\"] + [text$=\"新版本\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "信息流、文章底部广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.seebaby:id/tv_ad_detail\"] + [id=\"com.seebaby:id/ic_delad\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12705353",
            "https://i.gkd.li/import/12705363"
          ]
        },
        {
          "matches": "[id=\"com.seebaby:id/ad_tv_advertiser\"] + [id=\"com.seebaby:id/ad_iv_close\"]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12705372"
          ]
        },
        {
          "matches": "[id=\"com.seebaby:id/tv_un_instrest\"]",
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/12705358"
          ]
        }
      ]
    }
  ]
});
