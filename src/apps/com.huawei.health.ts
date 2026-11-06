// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "华为运动健康",
  "id": "com.huawei.health",
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
          "matches": "[id=\"com.huawei.health:id/hiad_skip_text\"]",
          "action": "clickCenter",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13215012",
            "https://i.gkd.li/i/13228290"
          ]
        },
        {
          "matches": "[id$=\"hiad_skip_text\"]",
          "action": "clickCenter",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12667766",
            "https://i.gkd.li/i/13215012",
            "https://i.gkd.li/i/13228290"
          ]
        },
        {
          "matches": "[vid=\"hiad_skip_text\"]",
          "action": "clickCenter",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13215012",
            "https://i.gkd.li/i/13228290"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "View[childCount=2] > View + View[childCount=1] > Image[childCount=0]",
          "activityIds": "com.huawei.watchface.api.WebViewActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13546292"
        }
      ]
    },
    {
      "name": "其他-个性化推荐弹窗",
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"开启个性化推荐\"] +2 [text=\"开启\"] + Button[clickable=true]",
          "activityIds": "com.huawei.watchface.api.WebViewActivity",
          "snapshotUrls": "https://i.gkd.li/i/13546292",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告",
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.huawei.health:id/marketing_close_icon\" || vid=\"close_button_layout\"]",
          "activityIds": "com.huawei.health.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13587206",
            "https://i.gkd.li/i/23763115"
          ],
          "key": 0
        },
        {
          "matches": "[vid=\"marketing_close_icon\" || vid=\"close_button_layout\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13587206",
            "https://i.gkd.li/i/23763115"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "其他-请求开启[实时推送步数]弹窗",
      "desc": "点击取消",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text*=\"实时推送步数\" || text*=\"通知栏实时显示步数\"][visibleToUser=true]",
            "[text*=\"取消\"][visibleToUser=true]"
          ],
          "activityIds": "com.huawei.health.MainActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14321121",
            "https://i.gkd.li/i/16494762"
          ],
          "exampleUrls": "https://e.gkd.li/12af7c3a-3d53-43f0-880e-130135bad1a3"
        },
        {
          "matches": [
            "[text*=\"是否开启计步功能\"][visibleToUser=true]",
            "[text*=\"取消\"][visibleToUser=true]"
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/20499245",
          "exampleUrls": "https://e.gkd.li/ab4e3797-40e6-4d1e-96b2-c098e78cf848"
        },
        {
          "matches": [
            "[text*=\"实时推送步数\" || text*=\"通知栏实时显示步数\"][visibleToUser=true]",
            "[text*=\"取消\"][visibleToUser=true]"
          ],
          "activityIds": ".MainActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/14321121",
            "https://i.gkd.li/i/16494762"
          ],
          "exampleUrls": "https://e.gkd.li/12af7c3a-3d53-43f0-880e-130135bad1a3"
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
      "order": -9,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"发现新版本\"]",
          "action": "back",
          "activityIds": "com.huawei.hwversionmgr.activity.AppUpdateDialogActivity",
          "snapshotUrls": "https://i.gkd.li/i/15521811",
          "key": 0
        },
        {
          "matches": "[text=\"发现新版本\"]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/i/15521811",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-“我的”页会员广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.huawei.health:id/item_banner_ad_close_icon\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12667814"
          ],
          "key": 0
        },
        {
          "matches": "[id=\"com.huawei.health:id/item_banner_ad_close_icon\"]",
          "activityIds": "com.huawei.health.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12667814",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-请求开启个性化推荐弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"开启个性化推荐\"] +2 [text=\"开启\"] + Button",
          "key": 0
        },
        {
          "matches": "[text=\"开启个性化推荐\"] +2 [text=\"开启\"] + Button",
          "activityIds": "com.huawei.watchface.api.WebViewActivity",
          "snapshotUrls": "https://i.gkd.li/i/13546292",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-底部横幅广告",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.huawei.health:id/marketing_close_icon\"]",
          "activityIds": "com.huawei.health.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13587206",
          "key": 0
        },
        {
          "matches": "[id=\"com.huawei.health:id/marketing_close_icon\"]",
          "activityIds": "com.huawei.health.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13587206",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-请求开启[实时推送步数]弹窗",
      "desc": "点击取消",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": [
            "[text*=\"实时推送步数\" || text*=\"通知栏实时显示步数\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": "com.huawei.health.MainActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14321121",
            "https://i.gkd.li/i/16494762"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/7e9b7131-35ae-49dd-badf-13b6dae3aa96",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-“我的”页会员广告",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[id=\"com.huawei.health:id/item_banner_ad_close_icon\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12667814"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求开启个性化推荐弹窗",
      "enable": false,
      "key": 11,
      "rules": [
        {
          "matches": "[text=\"开启个性化推荐\"] +2 [text=\"开启\"] + Button",
          "key": 0
        }
      ]
    },
    {
      "name": "“我的”页会员广告",
      "enable": false,
      "key": 12,
      "rules": [
        {
          "matches": "[id=\"com.huawei.health:id/item_banner_ad_close_icon\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12667814"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 13,
      "rules": [
        {
          "matches": "View[childCount=2] > View + View[childCount=1] > Image[childCount=0]",
          "activityIds": "com.huawei.watchface.api.WebViewActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13546292"
        }
      ]
    },
    {
      "name": "请求开启个性化推荐弹窗",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "[text=\"开启个性化推荐\"] +2 [text=\"开启\"] + Button",
          "key": 0
        }
      ]
    },
    {
      "name": "底部横幅广告",
      "enable": false,
      "key": 15,
      "rules": [
        {
          "matches": "[id=\"com.huawei.health:id/marketing_close_icon\"]",
          "activityIds": "com.huawei.health.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13587206",
          "key": 0
        }
      ]
    }
  ]
});
