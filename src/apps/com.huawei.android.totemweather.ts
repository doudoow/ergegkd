// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "华为天气",
  "id": "com.huawei.android.totemweather",
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
          "matches": "[id=\"com.huawei.hms.ads.uiengine:id/hiad_skip_text\"]",
          "action": "clickCenter",
          "snapshotUrls": [
            "https://i.gkd.li/i/12928975",
            "https://i.gkd.li/i/13226636"
          ],
          "key": 0
        },
        {
          "matches": [
            "[id=\"com.huawei.android.totemweather:id/rl_splash_container\"]",
            "[text.length<=4][text^=\"跳过\"]"
          ],
          "action": "clickCenter",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/12928975",
            "https://i.gkd.li/i/13226636"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"rl_close_pps\" || vid=\"ad_cancel\"][visibleToUser=true]",
          "activityIds": [
            "com.huawei.android.totemweather.WeatherMainActivity",
            "com.huawei.android.totemweather.WeatherHome"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13521221",
            "https://i.gkd.li/i/13787501",
            "https://i.gkd.li/i/13800100",
            "https://i.gkd.li/i/14278462",
            "https://i.gkd.li/i/15831584"
          ]
        },
        {
          "matches": "[id=\"com.huawei.android.totemweather:id/promote_ad_cancel\"]",
          "activityIds": "com.huawei.android.totemweather.composite.MarketCompositeActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13218197"
        },
        {
          "matches": "@[clickable=true][text=\"负反馈\"] <<n [vid=\"content_main_view\"]",
          "activityIds": ".news.main.content.ModulesActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/24688832"
        },
        {
          "anyMatches": [
            "[text=\"直接关闭\"]",
            "@[clickable=true][text=\"直接关闭\"] <<n [vid=\"content_main_view\"]"
          ],
          "preKeys": [
            6,
            5
          ],
          "activityIds": [
            "com.huawei.openalliance.ad.activity.FeedbackActivity",
            ".news.main.content.ModulesActivity"
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/13259434",
            "https://i.gkd.li/i/15831539",
            "https://i.gkd.li/i/24688856"
          ]
        },
        {
          "matches": "[vid=\"rl_close_pps\" || vid=\"ad_cancel\"][visibleToUser=true]",
          "activityIds": [
            ".WeatherMainActivity",
            ".WeatherHome"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/13521221",
            "https://i.gkd.li/i/13787501",
            "https://i.gkd.li/i/13800100",
            "https://i.gkd.li/i/14278462",
            "https://i.gkd.li/i/15831584"
          ]
        },
        {
          "matches": "[vid=\"promote_ad_cancel\"]",
          "activityIds": ".composite.MarketCompositeActivity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/13218197"
        },
        {
          "matches": "[vid=\"rl_close_pps\"][visibleToUser=true]",
          "activityIds": "com.huawei.android.totemweather.WeatherMainActivity",
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/13800100",
            "https://i.gkd.li/i/14278462",
            "https://i.gkd.li/i/15831584"
          ]
        },
        {
          "matches": "[text=\"直接关闭\"]",
          "preKeys": [
            6,
            5
          ],
          "activityIds": "com.huawei.openalliance.ad.activity.FeedbackActivity",
          "key": 7,
          "snapshotUrls": [
            "https://i.gkd.li/i/13259434",
            "https://i.gkd.li/i/15831539"
          ]
        }
      ]
    },
    {
      "name": "未分类-卡片式广告",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.huawei.android.totemweather:id/promote_ad_cancel\"]",
          "activityIds": "com.huawei.android.totemweather.composite.MarketCompositeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13218197"
        },
        {
          "matches": "[id=\"com.huawei.android.totemweather:id/feedback_negative_flv\"] > [text=\"直接关闭\"]",
          "preKeys": 0,
          "activityIds": "com.huawei.openalliance.ad.activity.FeedbackActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13259434"
        },
        {
          "matches": "[id=\"com.huawei.android.totemweather:id/ad_cancel\"][visibleToUser=true]",
          "activityIds": "com.huawei.android.totemweather.WeatherMainActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13521221"
        },
        {
          "matches": "[id=\"com.huawei.android.totemweather:id/ad_cancel\"]",
          "activityIds": "com.huawei.android.totemweather.WeatherHome",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13787501"
        }
      ]
    },
    {
      "name": "未分类-顶部广告条",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"rl_close_pps\"] > ImageView",
          "activityIds": "com.huawei.android.totemweather.WeatherMainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13800100"
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.huawei.android.totemweather:id/promote_ad_cancel\"]",
          "activityIds": "com.huawei.android.totemweather.composite.MarketCompositeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13218197"
        },
        {
          "matches": "[id=\"com.huawei.android.totemweather:id/feedback_negative_flv\"] > [text=\"直接关闭\"]",
          "preKeys": 0,
          "activityIds": "com.huawei.openalliance.ad.activity.FeedbackActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13259434"
        },
        {
          "matches": "[id=\"com.huawei.android.totemweather:id/ad_cancel\"][visibleToUser=true]",
          "activityIds": "com.huawei.android.totemweather.WeatherMainActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13521221"
        },
        {
          "matches": "[id=\"com.huawei.android.totemweather:id/ad_cancel\"]",
          "activityIds": "com.huawei.android.totemweather.WeatherHome",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/13787501"
        }
      ]
    },
    {
      "name": "局部广告-顶部广告条",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[vid=\"rl_close_pps\"] > ImageView",
          "activityIds": "com.huawei.android.totemweather.WeatherMainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13800100"
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.huawei.android.totemweather:id/ad_cancel\"][visibleToUser=true]",
          "activityIds": [
            "com.huawei.android.totemweather.WeatherMainActivity",
            "com.huawei.android.totemweather.WeatherHome"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13521221",
            "https://i.gkd.li/i/13787501"
          ]
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[id=\"com.huawei.android.totemweather:id/promote_ad_cancel\"]",
          "activityIds": "com.huawei.android.totemweather.composite.MarketCompositeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13218197"
        },
        {
          "matches": "[id=\"com.huawei.android.totemweather:id/feedback_negative_flv\"] > [text=\"直接关闭\"]",
          "preKeys": 0,
          "activityIds": "com.huawei.openalliance.ad.activity.FeedbackActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13259434"
        },
        {
          "matches": "[id=\"com.huawei.android.totemweather:id/ad_cancel\"][visibleToUser=true]",
          "activityIds": "com.huawei.android.totemweather.WeatherMainActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13521221"
        },
        {
          "matches": "[id=\"com.huawei.android.totemweather:id/ad_cancel\"]",
          "activityIds": "com.huawei.android.totemweather.WeatherHome",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/13787501"
        }
      ]
    },
    {
      "name": "顶部广告条",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[vid=\"rl_close_pps\"] > ImageView",
          "activityIds": "com.huawei.android.totemweather.WeatherMainActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13800100"
        }
      ]
    }
  ]
});
